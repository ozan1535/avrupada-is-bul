"use client";
import { useState, useEffect, useCallback } from "react";
import { useFilter } from "@/context/FilterContext";

export function useJobsData() {
  const { filterItems } = useFilter();
  const {
    countries,
    languages,
    workSchedules,
    jobSectors,
    keywords,
    orderBy,
    page,
  } = filterItems;
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);

    const query = new URLSearchParams({
      keywords: keywords || "software engineer",
      locations: countries.map((item) => item.filterName).join(",") || "de",
      languages: languages.map((item) => item.filterName).join(",") || "",
      workSchedules:
        workSchedules.map((item) => item.filterName).join(",") || "",
      jobSectors: jobSectors.map((item) => item.filterName).join(",") || "",
      orderBy: orderBy || "BEST_MATCH",
      page: page?.toString() || "1",
    });

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/jobs?${query.toString()}`
      );
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error("Failed to fetch jobs:", err);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [filterItems]);

  useEffect(() => {
    fetchData();
  }, []);
  return {
    data,
    loading,
    refetch: fetchData,
  };
}
