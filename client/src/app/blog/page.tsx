import BlogCard from "@/components/BlogCard/BlogCard";
import React from "react";

function page() {
  return (
    <div className="w-full bg-white">
      <section aria-labelledby="hero-title" className="w-full">
        <div className="max-w-[1400px] flex justify-center mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <BlogCard
              imageSrc="/blog1.png"
              title="Avrupa'da Çalışmak için En İyi 10 Ülke"
              description="Avrupa kıtası, gelişmiş ekonomisi, güçlü sosyal hakları, çok kültürlü yapısı ve yüksek yaşam standartları ile dünya çapında profesyonellerin gözde tercihi konumunda. 500 milyondan fazla nüfusu ile dünyanın en büyük tek pazarını oluşturuyor."
              link="/blog/avrupada-calismak-icin-en-cok-tercih-edilen-10-ulke"
            />
            <BlogCard
              imageSrc="/language-learning.jpg"
              title="Yurt Dışında Çalışmak İçin Hangi Diller Avantaj Sağlıyor"
              description="2025 Kariyer Rehberi: Hangi yabancı diller yurt dışında çalışmak için avantaj sağlıyor? Maaş, iş fırsatı ve kariyer için dil analizleri."
              link="/blog/yurtdisinda-calismak-icin-hangi-diller-avantaj-sagliyor"
            />
            <BlogCard
              imageSrc="/career-in-eu.jpeg"
              title="Avrupa’da Kariyer Yapmanın Püf Noktaları"
              description="Avrupa’da kariyer yapmak isteyen profesyoneller için psikoloji temelli, kanıtlanmış ve aksiyon odaklı stratejilerle dolu kapsamlı rehber. 15+ yıllık deneyimle hazırlanmış bu kaynakla zihniyet, beceri geliştirme, networking ve büyüme alanlarında fark yaratın."
              link="/blog/avrupada-kariyer-yapmanin-puf-noktalari"
            />
            <BlogCard
              imageSrc="/career.jpg"
              title="Avrupa’da En Çok Talep Gören Meslekler"
              description="2025’te Avrupa’da en çok aranan meslekler hangileri? Teknoloji, sağlık, mühendislik ve daha fazlasında yükselen kariyer fırsatlarını keşfedin."
              link="/blog/avrupada-en-cok-talep-goren-meslekler"
            />
            <BlogCard
              imageSrc="/is-arama.webp"
              title="Avrupa’da İş Ararken Dikkat Etmeniz Gereken 7 Önemli Adım"
              description="Avrupa'da iş ararken nelere dikkat etmelisiniz? CV’den mülakata, 7 adımda başarılı kariyerin yol haritasını keşfedin."
              link="/blog/avrupada-is-ararken-dikkat-etmeniz-gereken-7-onemli-adim"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
