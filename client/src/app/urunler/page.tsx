import BlogCard from "@/components/BlogCard/BlogCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Uluslararası Kariyer - Ürünler",
  description: "Yurtdışına çıkmak için e-booklarımızdan faydalanın",
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
            <BlogCard
              imageSrc="/green-card-basvuru-rehberi.png"
              title="Green Card Başvuru Rehberi"
              description="ABD Green Card çekilişine başvurmayı mı düşünüyorsunuz? Doğru fotoğraf, gereken belgeler, başvuru adımları ve sık yapılan hatalar dahil, başvuru sürecini eksiksiz tamamlamanız için kapsamlı bir Green Card rehberi hazırladık. İlk kez başvuranlar için anlaşılır, güncel ve adım adım yol gösteren bir kaynak!"
              link="/urunler/green-card-basvuru-rehberi"
            />
            <BlogCard
              imageSrc="/schengen-vizesi-basvuru-rehberi.png"
              title="Schengen Vizesi Başvuru Rehberi"
              description="Schengen vizesi başvuru sürecini adım adım anlatan bu rehber; gerekli belgeler, randevu, ücretler ve ipuçlarıyla süreci kolaylaştırır."
              link="/urunler/schengen-vizesi-basvuru-rehberi"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
