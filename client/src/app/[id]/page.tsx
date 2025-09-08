import React from "react";
import { Building2, MapPin } from "lucide-react";
import { euCountries, euLanguages, workingSchedules } from "@/lib/helpers";
import { notFound } from "next/navigation";

async function page({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://europa.eu/eures/eures-apps/searchengine/page/jv/id/${id}?lang=en`
  );

  const data = await res.json();
  console.log(data, "hheheh");
  if (data.errorMessage) {
    return notFound();
  }
  const jobDetails = Object.values(data.jvProfiles)[0];

  return (
    <div className="max-w-4xl mx-auto my-20 px-4">
      <div className="bg-white space-y-6">
        <div className="space-y-2 shadow-2xl border rounded-md p-4">
          <div>
            <div className="flex items-center gap-x-1">
              <p className="text-2xl font-semibold text-primary-color">
                {jobDetails.title}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2 space-y-1">
            <div className="flex items-center gap-2">
              <Building2 size={20} />
              <span className="word-break-break-word line-clamp-2 whitespace-pre-wrap break-all text-sm font-semibold text-primary">
                {jobDetails.employer.name}
              </span>
            </div>
            <div className="flex items-center gap-x-1">
              <MapPin size={20} />
              <span className="text-sm text-muted-foreground">
                {`${
                  euCountries.find(
                    (item) =>
                      item.filterName.toLowerCase() ===
                      jobDetails.locations[0].countryCode.toLowerCase()
                  )?.name
                } ${
                  jobDetails.locations[0].cityName
                    ? ` - ${jobDetails.locations[0].cityName}`
                    : ""
                }`}
              </span>
            </div>
          </div>
        </div>
        {/*    */}

        {/* Açıklama */}
        <div className="space-y-2 shadow-2xl border rounded-md p-4">
          <h3 className="font-bold">İş Tanımı & Aranan Nitelikler</h3>
          <div
            dangerouslySetInnerHTML={{ __html: jobDetails.description }}
          ></div>
        </div>

        <div className="space-y-2 shadow-2xl border rounded-md p-4">
          <p>
            <span className="font-semibold">Şirket:</span>{" "}
            <span>{jobDetails.employer.name}</span>
          </p>
          <p>
            <span className="font-semibold">Çalışma Türü:</span>{" "}
            {jobDetails.positionScheduleCodes.length
              ? jobDetails.positionScheduleCodes
                  .map(
                    (item) =>
                      workingSchedules.find(
                        (schedule) => schedule.filterName === item
                      )?.name
                  )
                  .join(", ")
              : "Belirtilmemiş"}
          </p>

          <p>
            <span className="font-semibold">Gereken Diller:</span>{" "}
            {jobDetails.positionLanguages.length
              ? jobDetails.positionLanguages
                  .map(
                    (item) =>
                      euLanguages.find(
                        (language) => language.filterName === item.languageCode
                      )?.name
                  )
                  .join(", ")
              : "Belirtilmemiş"}
          </p>
        </div>

        {/* İletişim */}

        <div className="space-y-2 shadow-2xl border rounded-md p-4">
          <h2 className="text-lg font-semibold text-gray-800">İletişim</h2>
          <p>
            Telefon:{" "}
            {jobDetails.personContacts[0]?.communications
              ? jobDetails.personContacts[0].communications.telephoneNumbers
                  .length
                ? `${jobDetails.personContacts[0].communications.telephoneNumbers[0].countryDialing} ${jobDetails.personContacts[0].communications.telephoneNumbers[0].areaDialing} ${jobDetails.personContacts[0].communications.telephoneNumbers[0].dialNumber}`
                : "Belirtilmemiş"
              : "Belirtilmemiş"}
          </p>
          <p>
            E-posta:{" "}
            {jobDetails.personContacts[0]?.communications ? (
              <a
                href={`mailto:${jobDetails.personContacts[0].communications.emails[0].uri}`}
                className="text-primary-color underline"
              >
                {jobDetails.personContacts[0].communications.emails[0].uri}
              </a>
            ) : (
              "Belirtilmemiş"
            )}
          </p>
          <p>
            Website:{" "}
            {jobDetails?.employer?.website ? (
              <a
                href={
                  jobDetails?.employer?.website.startsWith("http")
                    ? jobDetails.employer.website
                    : `http://${jobDetails?.employer?.website}`
                }
                target="_blank"
                className="text-primary-color underline"
              >
                {jobDetails?.employer?.website}
              </a>
            ) : (
              "Belirtilmemiş"
            )}
          </p>
        </div>
        {/* {jobDetails.applicationInstructions.length ? (
          <div className="space-y-2 shadow-2xl border rounded-md p-4">
            <h2 className="text-lg font-semibold text-gray-800">Başvurun</h2>

            <div
              dangerouslySetInnerHTML={{
                __html: jobDetails.applicationInstructions[0],
              }}
            ></div>
          </div>
        ) : null} */}

        {jobDetails.applicationInstructions.length ? (
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a
              href={
                jobDetails.applicationInstructions[0].match(
                  /href="([^"]+)"/
                )?.[1] || "#"
              }
              target="_blank"
              className="bg-primary-color text-center hover:bg-[#084d91] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Şimdi Başvur
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default page;
