import BlogCard from "@/components/BlogCard/BlogCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog - Uluslararası Kariyer",
  description:
    "Avrupa Birliği ülkelerinde çalışma, oturma izni ve vize süreçlerine dair güncel blog yazılarını keşfedin. Göçmenlik rehberleri, puanlama sistemleri ve kariyer fırsatları hakkında bilgi edinin.",
};

function page() {
  return (
    <div className="w-full bg-white dark:bg-[#1d293d]">
      <section aria-labelledby="hero-title" className="w-full">
        <div className="max-w-[1400px] flex justify-center mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <BlogCard
              imageSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80"
              title="İngilizce Bilmeden Yurtdışında İş Bulmak Mümkün mü?"
              description="İngilizce bilmeden yurtdışı iş bulmak mümkün mü? 2026'da hangi ülkeler, sektörler ve yollar dil şartını esnetiyor? Gerçek rakamlar ve adım adım rehber."
              link="/blog/ingilizce-bilmeden-yurtdisi-is"
            />
            <BlogCard
              imageSrc="https://images.unsplash.com/photo-1758551737979-561178bb5588?w=1600&q=85"
              title="Avrupa Maaşları 2026: Ülke Ülke Güncel Liste"
              description="Avrupa maaşları 2026 güncel verilerle: Almanya'dan İsviçre'ye net ve brüt maaş karşılaştırması, yaşam maliyeti analizi ve hangi ülkede ne kadar kazanırsınız?"
              link="/blog/ingilizce-bilmeden-yurtdisi-is"
            />
            <BlogCard
              imageSrc="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=85"
              title="Yurt Dışı Çıkış Harcı Ne Kadar 2026 — Nasıl Ödenir, Kimler Muaf?"
              description="2026 yılında güncellenen yurt dışı çıkış harcını kim öder, kim muaf, nereye nasıl ödenir? Dijital ödeme linki, muafiyet listesi ve sık sorulan sorularla eksiksiz rehber."
              link="/blog/yurtdisi-cikis-harci-ne-kadar"
            />
            <BlogCard
              imageSrc="https://images.unsplash.com/photo-1587330979470-3595ac045ab0"
              title="Almanya'da İş Bulma Rehberi 2026 | Yabancılar İçin Adım Adım Kılavuz"
              description="Almanya'da iş aramak için bilmeniz gereken her şey: hangi sektörler yabancılara açık, CV ve motivasyon mektubu nasıl hazırlanır, çalışma vizesi nasıl alınır. 2026 güncel rehber."
              link="/blog/almanya-is-bulma-rehberi"
            />
            <BlogCard
              imageSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
              title="Avrupa'da En Çok Talep Gören Meslekler"
              description="2025'te Avrupa'da en çok aranan meslekler hangileri? Teknoloji, sağlık, mühendislik ve daha fazlasında yükselen kariyer fırsatlarını keşfedin."
              link="/blog/avrupada-en-cok-talep-goren-meslekler"
            />
            <BlogCard
              imageSrc="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80"
              title="Avrupa'da Çalışmak için En İyi 10 Ülke"
              description="Avrupa kıtası, gelişmiş ekonomisi, güçlü sosyal hakları, çok kültürlü yapısı ve yüksek yaşam standartları ile dünya çapında profesyonellerin gözde tercihi konumunda. 500 milyondan fazla nüfusu ile dünyanın en büyük tek pazarını oluşturuyor."
              link="/blog/avrupada-calismak-icin-en-cok-tercih-edilen-10-ulke"
            />
            <BlogCard
              imageSrc="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80"
              title="Yurt Dışında Çalışmak İçin Hangi Diller Avantaj Sağlıyor"
              description="2025 Kariyer Rehberi: Hangi yabancı diller yurt dışında çalışmak için avantaj sağlıyor? Maaş, iş fırsatı ve kariyer için dil analizleri."
              link="/blog/yurtdisinda-calismak-icin-hangi-diller-avantaj-sagliyor"
            />
            <BlogCard
              imageSrc="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80"
              title="Avrupa'da Kariyer Yapmanın Püf Noktaları"
              description="Avrupa'da kariyer yapmak isteyen profesyoneller için psikoloji temelli, kanıtlanmış ve aksiyon odaklı stratejilerle dolu kapsamlı rehber. 15+ yıllık deneyimle hazırlanmış bu kaynakla zihniyet, beceri geliştirme, networking ve büyüme alanlarında fark yaratın."
              link="/blog/avrupada-kariyer-yapmanin-puf-noktalari"
            />

            <BlogCard
              imageSrc="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
              title="Avrupa'da İş Ararken Dikkat Etmeniz Gereken 7 Önemli Adım"
              description="Avrupa'da iş ararken nelere dikkat etmelisiniz? CV'den mülakata, 7 adımda başarılı kariyerin yol haritasını keşfedin."
              link="/blog/avrupada-is-ararken-dikkat-etmeniz-gereken-7-onemli-adim"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
