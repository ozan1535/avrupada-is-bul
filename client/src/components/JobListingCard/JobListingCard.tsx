import { IJobData } from "@/context/JobsDataContext";
import { Briefcase, Building2, ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";
import AddFavoriteButton from "../AddFavoriteButton/AddFavoriteButton";

function JobListingCard({ item }: { item: IJobData }) {
  return (
    <div className="min-w-1/3 max-w-3xl mb-3">
      <div className="flex gap-4 border rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition">
        {/*  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-color text-white text-4xl font-bold flex-shrink-0">
          {item.employerName[0] || "?"}
        </div> */}

        <div className="flex-1 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <Link
                href={`/${item.jobId}`}
                className="text-sm sm:text-lg font-semibold text-primary-color hover:underline text-ellipsis line-clamp-2"
              >
                {item.jobTitle}
              </Link>
              <p className="flex gap-2 mt-2 items-center text-sm text-gray-600">
                <Building2 className="w-5 h-5 text-gray-400" />
                <span>{item.employerName}</span>
              </p>
            </div>
          </div>

          <p className="text-sm font-light text-gray-700 mt-2 line-clamp-2">
            {item.jobDescription}
          </p>

          <div className="mt-4 flex flex-wrap justify-between items-center gap-2">
            <div className="flex gap-4 text-sm text-gray-600">
              {item.locations.length ? (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>{item.locations[0].country}</span>
                </div>
              ) : null}
              {item.positionSchedules.length ? (
                <div className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4 text-gray-500" />
                  <span>{item.positionSchedules[0].schedule}</span>
                </div>
              ) : null}

              <AddFavoriteButton
                job={{
                  job_id: item.jobId,
                  job_title: item.jobTitle,
                  job_description: item.jobDescription,
                  company_name: item.employerName,
                  company_country: item.locations[0]?.country || "",
                  position_schedule: item.positionSchedules[0]?.schedule || "",
                }}
              />
            </div>

            <Link
              href={`/${item.jobId}`}
              className="inline-flex items-center px-4 py-1.5 text-sm font-medium text-white bg-primary-color rounded-full hover:bg-opacity-90 transition"
            >
              Detayları Gör
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobListingCard;
