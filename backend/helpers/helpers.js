import * as cheerio from "cheerio";
import puppeteer from "puppeteer";
import chromium from "@sparticuz/chromium";

let cache = {};

export const getCache = (key) => {
  if (cache[key]) {
    const age = Date.now() - cache[key].timestamp;
    if (age > 1000 * 60 * 60 * 48) {
      delete cache[key];
      return null;
    }
    return cache[key].data;
  }
  return null;
};

export const setCache = (key, data) => {
  cache[key] = {
    data,
    timestamp: Date.now(),
  };
};

export const getDataItemsOnWebsite = async (html) => {
  const $ = cheerio.load(html);
  let items = [];

  const lastPage = $("ecl-pagination-item:not(#shared-pagination-next)")
    .last()
    .find("span.ecl-link__label")
    .text()
    .trim();

  $('div[role="region"][aria-label="Search results"]')
    .find('div[role="article"]')
    .each((i, el) => {
      let item = {};

      item.employerName = $(el)
        .find(".ecl-content-block__primary-meta-item")
        .first()
        .text()
        .trim();

      item.locations = [];
      $(el)
        .find(".ecl-content-block__primary-meta-item")
        .each((index, locEl) => {
          const locationId = $(locEl).find("span").attr("id");
          const locationText = $(locEl).text().trim();

          if (locationId && locationId.includes("location")) {
            const [countryRaw, cityRaw] = locationText.split(":");
            const country = countryRaw?.trim();
            const city = cityRaw?.trim() || null;

            item.locations.push({ country, city });
          }
        });

      item.positionSchedules = [];
      $(el)
        .find(".ecl-content-block__primary-meta-item")
        .each((index, schEl) => {
          const scheduleId = $(schEl).find("span").attr("id");
          const scheduleText = $(schEl).text().trim();

          if (scheduleId && scheduleId.includes("position-schedule")) {
            item.positionSchedules.push({ schedule: scheduleText });
          }
        });

      item.publicationDate = $(el)
        .find(".ecl-content-block__primary-meta-item")
        .last()
        .text()
        .replace("Publication date:", "")
        .trim();

      const jobLink = $(el).find(".ecl-content-block__title a");
      item.jobTitle = jobLink.text().trim();

      const href = jobLink.attr("href") || "";
      item.jobId = href.includes("/jv-details/")
        ? href.split("/jv-details/")[1].split("?")[0]
        : null;

      item.jobDescription = $(el)
        .find(".ecl-content-block__description")
        .text()
        .replace(/\s+/g, " ")
        .trim();

      items.push(item);
    });

  return { items, lastPage };
};

export const handleJobsFetch = async (req, res) => {
  const {
    page,
    locations,
    workSchedules,
    languages,
    keywords,
    orderBy,
    jobSectors,
  } = req.query;

  const baseUrl = process.env.BASE_URL;

  const formatQueryParam = (param) => {
    if (!param) return "";
    return param
      .split(",")
      .map((item) => encodeURIComponent(item.trim()))
      .filter((item) => item)
      .join(",");
  };

  const query = new URLSearchParams({
    keywordsEverywhere: keywords || "",
    locationCodes: formatQueryParam(locations),
    requiredLanguages: formatQueryParam(languages),
    positionScheduleCodes: formatQueryParam(workSchedules),
    sector: formatQueryParam(jobSectors),
    orderBy: orderBy || "BEST_MATCH",
    page: page?.toString() || "1",
  });
  const url = baseUrl.includes("?")
    ? `${baseUrl}&${query.toString()}`
    : `${baseUrl}?${query.toString()}`;

  const cachedData = getCache(url);

  if (cachedData) {
    return res.json(cachedData);
  }
  try {
    const browser = await puppeteer.launch({
      args: [
        ...chromium.args,
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--no-first-run",
        "--no-zygote",
        "--single-process",
        "--disable-gpu",
      ],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
    //const browser = await puppeteer.launch({ headless: true });
    const pageObj = await browser.newPage();

    await pageObj.goto(url, { waitUntil: "networkidle2" });

    const noResultElement = await pageObj.$("#jv-no-result");

    if (noResultElement) {
      await browser.close();
      return res.json({
        success: true,
        data: [],
        message: "Herhangi bir ilan bulunamadi.",
      });
    }

    await pageObj.waitForSelector(
      'div[role="region"][aria-label="Search results"]'
    );

    const data = await pageObj.content();

    await browser.close();

    const { items, lastPage } = await getDataItemsOnWebsite(data);

    setCache(url, {
      success: true,
      maxPage: +lastPage,
      data: items,
      timestamp: Date.now(),
    });

    return res.json({
      success: true,
      maxPage: +lastPage,
      data: items,
      timestamp: Date.now(),
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);

    return res.json({
      success: false,
      message: "An error occurred while fetching the jobs",
    });
  }
};
