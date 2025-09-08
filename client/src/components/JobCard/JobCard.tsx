import { Briefcase, Building2, ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

function JobCard({ item }) {
  return (
    <div className="max-w-[1400px] border-2 border-primary-color rounded-lg mx-auto flex items-center justify-between">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="p-2 sm:p-6 flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl text-ellipsis line-clamp-2 font-semibold text-gray-800">
                {item.jobTitle}
              </h3>
              <p className="text-sm text-gray-600 flex gap-2 items-center">
                <Building2 />
                {item.employerName}
              </p>
            </div>
          </div>

          <p className="text-gray-700 text-sm">{item.jobDescription}</p>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <MapPin className="text-gray-500" />
              <span>
                {item?.locations.length ? item.locations[0].country : ""}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Briefcase className="text-gray-500" />
              <span className="text-gray-700">
                {item?.positionSchedules.length
                  ? item?.positionSchedules[0].schedule
                  : ""}
              </span>
            </div>
          </div>

          <Link
            href={`/${item.jobId}`}
            className="w-full mt-4 py-2 bg-primary-color text-white rounded-full flex items-center justify-center space-x-2 hover:opacity-90 transition-all"
          >
            <span>Detayları Gör</span>
            <ChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
