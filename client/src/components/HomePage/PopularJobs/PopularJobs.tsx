"use client";
import JobCard from "@/components/JobCard/JobCard";
import { useJobsDataContext } from "@/context/JobsDataContext";
import React from "react";

function PopularJobs() {
  const { data } = useJobsDataContext();
  return (
    <div className="mt-10 grid gap-2 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {data?.data?.slice(0, 6)?.map((item) => (
        <JobCard item={item} key={item.jobId} />
      ))}
    </div>
  );
}

export default PopularJobs;
