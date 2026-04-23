import GreenCardLanding from "@/components/Urunler/GreenCardApplicationGuide/GreenCardApplicationGuide";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Uluslararası Kariyer - Green Card Başvuru Rehberi",
  description:
    "ABD Green Card çekilişine başvurmayı mı düşünüyorsunuz? Doğru fotoğraf, gereken belgeler, başvuru adımları ve sık yapılan hatalar dahil, başvuru sürecini eksiksiz tamamlamanız için kapsamlı bir Green Card rehberi hazırladık. İlk kez başvuranlar için anlaşılır, güncel ve adım adım yol gösteren bir kaynak!",
};

function page() {
  redirect("/");

  return <GreenCardLanding />;
}

export default page;
