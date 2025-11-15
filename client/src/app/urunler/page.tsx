import BlogCard from "@/components/BlogCard/BlogCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Uluslararası Kariyer - Ürünler",
  description:
    "Yurtdışına çıkmak için e-booklarımızdan faydalanın",
};

function page() {
  return (
    <div className="w-full bg-white dark:bg-slate-800">
      <section aria-labelledby="hero-title" className="w-full">
        <div className="max-w-[1400px] flex justify-center mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <BlogCard
              imageSrc="/german-visa-type-ebook.png"
              title="Almanya Vize Rehberi"
              description="Almanya, Avrupa'nın en güçlü ekonomilerinden biri olarak Türk vatandaşları için cazip fırsatlar sunuyor.
İster turistik bir gezi, ister kariyer hedefleri, ister eğitim fırsatları - doğru vize türünü seçmek başarının
anahtarı!"
              link="/urunler/almanya-vize-rehberi"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
