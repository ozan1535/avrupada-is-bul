import BlogCard from "@/components/BlogCard/BlogCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Uluslararası Kariyer - Vize Araçları",
  description:
    "Uluslararası Kariyer'in sunduğu vize ve çalışma izni araçları ile Avrupa'da kariyer planınızı oluşturun. Farklı ülkeler için puan hesaplama, uygunluk analizi ve rehber içeriklere erişin.",
};

function page() {
  return (
    <div className="w-full bg-white dark:bg-[#1d293d]">
      <section aria-labelledby="hero-title" className="w-full">
        <div className="max-w-[1400px] flex justify-center mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <BlogCard
              imageSrc="/avusturya-rwr-card.jpeg"
              title="Avusturya Red-White-Red (Rot-Weiß-Rot ) Kart Puan Hesaplama"
              description="Avusturya Red-White-Red Kart puan hesaplama aracımız ile Avusturya'da çalışma izni başvurusu yapıp yapamayacağınızı hızlıca öğrenin. Avrupa'da kariyerinize yön verin!"
              link="/araclar/avusturya-red-white-red-kart-puan-hesaplama"
            />
            <BlogCard
              imageSrc="/germany-flag.webp"
              title="Almanya Chancen Karte (Fırsat Kartı)  Puan Hesaplama"
              description="Almanya Chancen Karte (Fırsat Kartı) puan hesaplama aracımız ile Almanya'da çalışma izni başvurusu yapıp yapamayacağınızı hızlıca öğrenin. Puanınızı şimdi hesaplayın!"
              link="/araclar/almanya-chancen-karte-puan-hesaplama"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
