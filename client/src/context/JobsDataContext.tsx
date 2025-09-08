// context/JobsDataContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useFilter } from "./FilterContext";

type JobsDataContextType = {
  data: any;
  loading: boolean;
  refetch: (page: number) => Promise<void>;
};

const JobsDataContext = createContext<JobsDataContextType | null>(null);

export function JobsDataProvider({ children }: { children: React.ReactNode }) {
  const { filterItems } = useFilter();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(
    async (page = "1") => {
      setLoading(true);

      const {
        countries,
        languages,
        workSchedules,
        jobSectors,
        keywords,
        orderBy,
        // page,
      } = filterItems;

      const query = new URLSearchParams({
        keywords: keywords || "",
        locations:
          countries.map((item: any) => item.filterName).join(",") || "de",
        languages:
          languages.map((item: any) => `${item.filterName}(C2)`).join(",") ||
          "",
        workSchedules:
          workSchedules.map((item: any) => item.filterName).join(",") || "",
        jobSectors:
          jobSectors.map((item: any) => item.filterName).join(",") || "",
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
    },
    [filterItems]
  );

  // Fetch once on mount and whenever filters change
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <JobsDataContext.Provider value={{ data, loading, refetch: fetchData }}>
      {children}
    </JobsDataContext.Provider>
  );
}

export function useJobsDataContext() {
  const context = useContext(JobsDataContext);
  if (!context) {
    throw new Error(
      "useJobsDataContext must be used within a JobsDataProvider"
    );
  }
  return context;
}
