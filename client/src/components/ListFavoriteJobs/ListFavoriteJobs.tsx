"use client";
import { useFavorites } from "@/hooks/useFavorites";
import React from "react";
import JobListingCard from "../JobListingCard/JobListingCard";

function ListFavoriteJobs() {
  const { favorites } = useFavorites();
  const handleFavoriteItemsKeyChange = favorites.map((favorite) => ({
    jobId: favorite.job_id,
    jobTitle: favorite.job_title,
    jobDescription: favorite.job_description || "",
    employerName: favorite.company_name || "",
    locations: [{ country: favorite.company_country, city: "" }],
    positionSchedules: [{ schedule: favorite.position_schedule || "" }],
    publicationDate: "",
  }));

  return (
    <div>
      {favorites.length ? (
        handleFavoriteItemsKeyChange.map((item, i) => (
          <JobListingCard item={item} key={i} />
        ))
      ) : (
        <p>Herhangi bir iş ilanı kaydetmediniz.</p>
      )}
    </div>
  );
}

export default ListFavoriteJobs;
