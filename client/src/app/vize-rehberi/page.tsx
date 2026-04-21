import BlogCard from "@/components/BlogCard/BlogCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Vize Rehberi - Türk Vatandaşları İçin Kapsamlı Vize Kılavuzu 2026",
  description:
    "Almanya, İtalya, Yunanistan ve diğer Schengen ülkeleri için vize başvuru rehberleri. Gerekli belgeler, randevu bilgileri, ücretler ve vizesiz seyahat edebileceğiniz ülkeler hakkında güncel bilgiler.",
};

function page() {
  return (
    <div className="w-full bg-white dark:bg-[#1d293d]">
      <section aria-labelledby="hero-title" className="w-full">
        <div className="max-w-[1400px] flex justify-center mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <BlogCard
              imageSrc="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=1400&q=80"
              title="Fransa Vize Başvurusu 2026 – Türkiye'den Eksiksiz Rehber"
              description="Türk vatandaşları için Fransa Schengen vizesi rehberi. VFS Global başvurusu, gerekli belgeler, vize türleri, ücretler ve başvuru adımları. Ocak 2026 güncel bilgileri."
              link="/vize-rehberi/fransa-vizesi-nasil-alinir"
            />
            <BlogCard
              imageSrc="https://images.unsplash.com/photo-1656597787628-62741d181641?w=1600&q=80&auto=format&fit=crop"
              title="İspanya Vize Başvurusu 2026 – Türkiye'den Eksiksiz Rehber"
              description="2026'da İspanya vizesi nasıl alınır? Schengen vize türleri, gerekli belgeler, BLS başvuru merkezleri, güncel ücretler ve randevu süreci. Türk vatandaşları için eksiksiz rehber."
              link="/vize-rehberi/ispanya-vizesi-nasil-alinir"
            />
            <BlogCard
              imageSrc="https://images.unsplash.com/photo-1587330979470-3595ac045ab0"
              title="Almanya Vize Başvurusu 2026 – Türkiye'den Eksiksiz Rehber"
              description="Almanya vize türleri, başvuru şartları, gerekli belgeler, ücretler ve randevu bilgileri. T.C. vatandaşları için güncel ve kapsamlı Almanya vize rehberi."
              link="/vize-rehberi/almanya-vize-basvuru-rehberi"
            />
            <BlogCard
              imageSrc="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1600&q=80&auto=format&fit=crop"
              title="Yunan Adaları Kapıda Vize 2026 | 12 Ada, Şartlar ve Ücretler"
              description="2026'da Türk vatandaşları için Yunan Adaları kapıda vize rehberi: 80 € ücret, başvuru şartları, hangi 12 adaya gidilir, feribot limanları ve ada başına gezi önerileri."
              link="/vize-rehberi/yunan-adalari-kapida-vize-rehberi"
            />
            <BlogCard
              imageSrc="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=80&auto=format&fit=crop"
              title="İngiltere Vize Nasıl Alınır - İngiltere Vizesi Rehberi 2026"
              description="İngiltere vizesi nasıl alınır? Vize türleri, gerekli belgeler, başvuru şartları, güncel ücretler ve başvuru merkezleri. Türk vatandaşları için adım adım İngiltere vize rehberi."
              link="/vize-rehberi/ingiltere-vizesi-nasil-alinir"
            />
            <BlogCard
              imageSrc="https://images.unsplash.com/photo-1702412130953-f9cb400da21b?w=1200&q=80"
              title="Avusturya Vizesi Nasıl Alınır? - Avusturya Vize Rehberi 2026"
              description="Avusturya vizesi nasıl alınır? Gerekli belgeler, başvuru şartları, vize türleri, ücretler ve randevu süreci — 2026 yılı için güncel ve eksiksiz rehber. T.C. vatandaşları için adım adım kılavuz."
              link="/vize-rehberi/avusturya-vizesi-nasil-alinir"
            />
            <BlogCard
              imageSrc="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&q=80"
              title="İtalya Vizesi Nasıl Alınır? - İtalya Vize Rehberi 2026"
              description="İtalya vizesi nasıl alınır? Schengen vizesi türleri, gerekli belgeler, başvuru şartları, vize ücreti ve randevu bilgileri. Türk vatandaşları için eksiksiz İtalya vize rehberi."
              link="/vize-rehberi/italya-vizesi-nasil-alinir"
            />
            <BlogCard
              imageSrc="https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80"
              title="Türklere En Kolay Schengen Vizesi Veren 5 Ülke (2026)"
              description="Almanya, İtalya, Fransa, Yunanistan ve İspanya için Schengen vize başvurusu ipuçları, randevu stratejisi ve multi vize rehberi. 2026 güncel bilgilerle Türk vatandaşları için en kapsamlı vize kılavuzu."
              link="/vize-rehberi/turklere-en-kolay-schengen-vizesi-veren-5-ulke"
            />
            <BlogCard
              imageSrc="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80"
              title="Vizesiz Gidilebilen Ülkeler Listesi 2026 | Türk Vatandaşları İçin Tam Rehber"
              description="2026 yılında Türk vatandaşlarının vizesiz seyahat edebileceği tüm ülkeler: Avrupa, Asya, Afrika, Amerika ve Okyanusya. Kalış süreleri, giriş koşulları ve seyahat ipuçlarıyla eksiksiz rehber."
              link="/vize-rehberi/vizesiz-gidilebilen-ulkeler"
            />
            <BlogCard
              imageSrc="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80"
              title="Yunanistan Vizesi Nasıl Alınır - Yunanistan Vize Rehberi 2026"
              description="Yunanistan vizesi için eksiksiz rehber: başvuru şartları, gerekli belgeler, vize türleri, ücretler ve başvuru merkezleri. Türk vatandaşları için güncel Schengen vizesi bilgileri."
              link="/vize-rehberi/yunanistan-vizesi-nasil-alinir"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
