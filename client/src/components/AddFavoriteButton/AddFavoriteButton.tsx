"use client";
import React from "react";
import { Button } from "../ui/button";
import { useFavorites } from "@/hooks/useFavorites";
import { ICreateFavoriteRequest } from "@/lib/types";
import { useRouter } from "next/navigation";
import { Bookmark, BookmarkCheck } from "lucide-react";

function AddFavoriteButton({ job }: { job: ICreateFavoriteRequest }) {
  const router = useRouter();
  const { isFavorite, toggleFavorite, user } = useFavorites();
  const isJobFavorite = isFavorite(job.job_id);
  return (
    /*  <Button
      className={
        isJobFavorite
          ? `cursor-pointer bg-primary-color border-2 border-white text-white hover:bg-white hover:border-primary-color hover:text-primary-color`
          : `cursor-pointer bg-white border-2 border-primary-color text-primary-color hover:bg-primary-color hover:text-white`
      }
      onClick={() => {
        if (!user) {
          router.push("/api/auth/login");
          return;
        }
        toggleFavorite(job);
      }}
    >
      {isJobFavorite ? "Kaydedildi" : "Kaydet"}
    </Button> */
    <>
      {isJobFavorite ? (
        <BookmarkCheck
          className="text-primary-color"
          onClick={() => {
            if (!user) {
              router.push("/api/auth/login");
              return;
            }
            toggleFavorite(job);
          }}
        />
      ) : (
        <Bookmark
          className="dark:text-gray-200"
          onClick={() => {
            if (!user) {
              router.push("/api/auth/login");
              return;
            }
            toggleFavorite(job);
          }}
        />
      )}
    </>
  );
}

export default AddFavoriteButton;
