"use client";
import React from "react";
import { Button } from "../ui/button";
import { useFavorites } from "@/hooks/useFavorites";
import { ICreateFavoriteRequest } from "@/lib/types";

function AddFavoriteButton({ job }: { job: ICreateFavoriteRequest }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isJobFavorite = isFavorite(job.job_id);
  return (
    <Button
      className={
        isJobFavorite
          ? `cursor-pointer bg-primary-color border-2 border-white text-white hover:bg-white hover:border-primary-color hover:text-primary-color`
          : `cursor-pointer bg-white border-2 border-primary-color text-primary-color hover:bg-primary-color hover:text-white`
      }
      onClick={() => toggleFavorite(job)}
    >
      {isJobFavorite ? "Kaydedildi" : "Kaydet"}
    </Button>
  );
}

export default AddFavoriteButton;
