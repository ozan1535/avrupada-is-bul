"use client";
import React, { useEffect } from "react";
import JobListingCard from "../JobListingCard/JobListingCard";
import SkeletonComponent from "../SkeletonComponent/SkeletonComponent";
import { useJobsData } from "@/hooks/useJobsData";
import { useJobsDataContext } from "@/context/JobsDataContext";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useFilter } from "@/context/FilterContext";

function JobListingWithPagination() {
  const { data, loading, refetch } = useJobsDataContext();
  const { filterItems, setFilterItems } = useFilter();
  const { page, keywords, countries } = filterItems;
  const handlePageChange = (page) => {
    refetch(page);
    setFilterItems((prev) => ({ ...prev, page }));
  };
  useEffect(() => {
    if (keywords.length || countries.length) {
      refetch(1);
    }
  }, []);
  return (
    <div>
      {loading ? (
        Array.from({ length: 7 }).map((_, index) => (
          <SkeletonComponent key={index} />
        ))
      ) : data?.data.length ? (
        <div>
          {data?.data.map((item, i) => (
            <JobListingCard item={item} key={i} />
          ))}

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <ChevronLeft
                  className="cursor-pointer hover:shadow"
                  onClick={() => handlePageChange(page - 1)}
                />
              </PaginationItem>
              {+page > 1 && (
                <PaginationItem
                  className="cursor-pointer hover:shadow"
                  onClick={() => handlePageChange(page - 1)}
                >
                  {page - 1}
                </PaginationItem>
              )}
              {+page < 10 && (
                <PaginationItem className="py-1 px-3 rounded border cursor-pointer hover:shadow">
                  {page}
                </PaginationItem>
              )}
              {+page < 10 && (
                <PaginationItem
                  className="cursor-pointer hover:shadow"
                  onClick={() => handlePageChange(page + 1)}
                >
                  {page + 1}
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem
                className={`${
                  page === 10 ? "py-1 px-3 rounded border" : ""
                } cursor-pointer hover:shadow`}
                onClick={() =>
                  handlePageChange(data?.maxPage >= 10 ? 10 : data?.maxPage)
                }
              >
                {data?.maxPage >= 10 ? "10" : data?.maxPage}
              </PaginationItem>
              <PaginationItem>
                <ChevronRight
                  className="cursor-pointer hover:shadow"
                  onClick={() => handlePageChange(page + 1)}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      ) : (
        <p>Bu filtrelemeye uygun herhangi bir ilan bulunamadı.</p>
      )}
    </div>
  );
}

export default JobListingWithPagination;
