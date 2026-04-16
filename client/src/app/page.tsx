// import {
//   Briefcase,
//   Globe2,
//   Languages,
//   ListChecks,
//   TrendingUp,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import HeroSectionInputs from "@/components/HomePage/HeroSectionInputs/HeroSectionInputs";
// import PositionCards from "@/components/HomePage/PositionCards/PositionCards";
// import { AccordionComponent } from "@/components/AccordionComponent/AccordionComponent";
// import { homepageFaq } from "@/components/AccordionComponent/helpers";
// import AllStatBoxes from "@/components/HomePage/StatBox/AllStatBoxes";
// import CareerLink from "@/components/HomePage/CareerLink/CareerLink";
// import { HomepageCareerLinkData } from "@/components/HomePage/CareerLink/helpers";
// import PopularJobs from "@/components/HomePage/PopularJobs/PopularJobs";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Uluslararası Kariyer",
//   description: `Avrupa genelindeki güncel iş ilanlarını tek bir platformda
//               toplayarak, yurt dışında kariyer fırsatlarını kolayca keşfetmenizi
//               sağlıyoruz.`,
// };

// export default function Home() {
//   return (
//     <div className="w-full bg-white">
//       <section
//         aria-labelledby="hero-title"
//         className="w-full bg-slate-100 dark:bg-slate-700"
//       >
//         <div className="max-w-[1400px] mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 items-center gap-10 min-h-[40vh] lg:min-h-[100vh]">
//           <div className="max-w-xl">
//             <h1
//               id="hero-title"
//               className="font-sans font-extrabold text-4xl md:text-5xl text-primary-color leading-tight tracking-tight"
//             >
//               <span className="block">
//                 Avrupa'daki <span className="text-green-500">100.000+</span>
//               </span>
//               <span className="block">İş İmkanını Keşfedin</span>
//             </h1>

//             <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed dark:text-gray-300">
//               Avrupa genelindeki güncel iş ilanlarını tek bir platformda
//               toplayarak, yurt dışında kariyer fırsatlarını kolayca keşfetmenizi
//               sağlıyoruz.
//             </p>

//             <div className="mt-6">
//               <HeroSectionInputs />
//             </div>
//           </div>

//           <div className="hidden lg:block">
//             <Image
//               src="/hero-image3.webp"
//               alt="Avrupa'da iş fırsatlarını temsil eden görsel"
//               width={650}
//               height={650}
//               priority
//               sizes="(min-width:1024px) 650px, 100vw"
//               className="w-full max-w-[650px] h-auto rounded-xl shadow-2xl object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/*  <section
//         aria-labelledby="featured-jobs-title"
//         className="w-full bg-white dark:bg-slate-800"
//       >
//         <div className="max-w-[1400px] mx-auto sm:px-6 py-16">
//           <h2
//             id="featured-jobs-title"
//             className="font-sans font-extrabold text-4xl text-primary-color text-center"
//           >
//             Öne Çıkan İş İlanları
//           </h2>

//           <PopularJobs />

//           <div className="text-center mt-10">
//             <Link
//               href="/yurtdisi-is-ilanlari"
//               className="inline-block bg-primary-color text-white font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 hover:scale-105 transition"
//             >
//               Daha Fazla
//             </Link>
//           </div>
//         </div>
//       </section> */}

//       <section className="bg-slate-100 dark:bg-slate-700">
//         <div className="container mx-auto py-4 md:py-8 px-4">
//           <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
//             <div className="space-y-6">
//               <div className="space-y-4">
//                 <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-200">
//                   Avrupa’da Kariyerini Planla
//                 </h2>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   Avrupa’da çalışmaya hazır mısın? Farklı ülkelerdeki iş
//                   ilanlarını tek bir platformda toplayarak kariyer yolculuğunun
//                   her adımını senin için kolaylaştırıyoruz. Merak ettiğin
//                   sorulara yanıt bulacak, Avrupa genelindeki güncel iş
//                   fırsatlarını keşfedecek ve geleceğini güvenle
//                   planlayabileceksin.
//                 </p>
//               </div>

//               <div className="space-y-2">
//                 {HomepageCareerLinkData(
//                   Globe2,
//                   Briefcase,
//                   TrendingUp,
//                   ListChecks,
//                   Languages
//                 ).map((item) => (
//                   <CareerLink
//                     key={item.id}
//                     href={item.href}
//                     icon={item.icon}
//                     title={item.title}
//                   />
//                 ))}
//               </div>
//             </div>

//             <div className="relative hidden h-[600px] lg:block">
//               <Image
//                 src="/smiling-woman.webp"
//                 alt="Plan your career"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/*  <section
//         aria-labelledby="features-title"
//         className="w-full bg-white dark:bg-slate-800"
//       >
//         <div className="max-w-[1400px] mx-auto px-6 py-16">
//           <h2
//             id="features-title"
//             className="font-sans font-extrabold text-4xl text-primary-color text-center"
//           >
//             Tek Platform Çok Seçenek
//           </h2>

//           <PositionCards />
//         </div>
//       </section> */}

//       <section className="w-full bg-slate-100 dark:bg-slate-700">
//         <AllStatBoxes />
//       </section>

//       <section className="w-full bg-white py-16 px-6 dark:bg-slate-800">
//         <div className="max-w-[900px] mx-auto">
//           <h2 className="text-3xl font-bold text-primary-color text-center">
//             Sıkça Sorulan Sorular
//           </h2>

//           <div className="mt-10">
//             <AccordionComponent data={homepageFaq} />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uluslararası Kariyer — Avrupa Vize Rehberi",
  description:
    "Avrupa vize rehberleri, puan hesaplama araçları ve kariyer içerikleriyle yurt dışı yolculuğuna hazırlan.",
};

export default function HomePage() {
  return (
    <div className="w-full bg-white font-sans">
      {/* ─── NAVBAR ──────────────────────────────────────────────────────────── */}
      {/* <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-[68px] flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-[20px] text-[#1B2B4A] tracking-tight"
          >
            Uluslararası<span className="text-[#4A7BC8]">Kariyer</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/blog"
              className="text-[14px] text-slate-500 hover:text-[#1B2B4A] transition-colors"
            >
              Vize Rehberleri
            </Link>
            <Link
              href="/araclar"
              className="text-[14px] text-slate-500 hover:text-[#1B2B4A] transition-colors"
            >
              Araçlar
            </Link>
            <Link
              href="/blog"
              className="text-[14px] text-slate-500 hover:text-[#1B2B4A] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/araclar"
              className="bg-[#1B2B4A] text-white text-[13px] font-medium px-5 py-2 rounded-md hover:bg-[#2D4270] transition-colors"
            >
              Puan Hesapla
            </Link>
          </div>
        </div>
      </nav> */}

      {/* ─── HERO ────────────────────────────────────────────────────────────── */}
      <section aria-labelledby="hero-title" className="bg-[#F8F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Copy */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium text-[#4A7BC8] tracking-[1.4px] uppercase mb-5">
              <span className="block w-[18px] h-[1.5px] bg-[#4A7BC8]" />
              Avrupa Vize Rehberi
            </span>

            <h1
              id="hero-title"
              className="font-serif text-[44px] lg:text-[54px] leading-[1.08] tracking-tight text-[#1B2B4A] mb-5"
            >
              Hayalin Avrupa&apos;ysa, rehberin{" "}
              <em className="italic text-[#4A7BC8]">biziz</em>
            </h1>

            <p className="text-[17px] font-light text-slate-500 leading-relaxed mb-9 max-w-[440px]">
              Hangi vizede şansın var? Hangi ülke seni kabul eder? Puan
              hesaplama araçları ve rehber içeriklerle cevapları bir arada
              buluyorsun.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/araclar"
                className="inline-block bg-[#1B2B4A] text-white text-[15px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#2D4270] transition-colors"
              >
                Vizeni Keşfet
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[15px] text-slate-500 hover:text-[#1B2B4A] transition-colors group"
              >
                Rehberlere Bak
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#F1F4F9]">
            <Image
              src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1000&q=85&auto=format&fit=crop"
              alt="Avrupa şehri manzarası"
              fill
              priority
              sizes="580px"
              className="object-cover"
            />
            {/* Badge */}
            <div className="absolute bottom-5 left-5 bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[12px] text-slate-400 leading-none mb-0.5">
                  Güncel Rehberler
                </p>
                <p className="text-[17px] font-semibold text-[#1B2B4A] leading-none">
                  2026 hazır
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─────────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-7">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="text-center px-6 py-2 border-r border-slate-200">
              <p className="font-serif text-[32px] leading-none text-[#1B2B4A] tracking-tight mb-1">
                30+
              </p>
              <p className="text-[13px] text-slate-400 font-light">
                Avrupa ülkesi
              </p>
            </div>
            <div className="text-center px-6 py-2 border-r border-slate-200">
              <p className="font-serif text-[32px] leading-none text-[#1B2B4A] tracking-tight mb-1">
                12
              </p>
              <p className="text-[13px] text-slate-400 font-light">
                Vize kategorisi
              </p>
            </div>
            <div className="text-center px-6 py-2 border-r border-slate-200">
              <p className="font-serif text-[32px] leading-none text-[#1B2B4A] tracking-tight mb-1">
                5+
              </p>
              <p className="text-[13px] text-slate-400 font-light">
                Puan hesaplama aracı
              </p>
            </div>
            <div className="text-center px-6 py-2">
              <p className="font-serif text-[32px] leading-none text-[#1B2B4A] tracking-tight mb-1">
                10k+
              </p>
              <p className="text-[13px] text-slate-400 font-light">
                Aylık okuyucu
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── BLOGS SECTION ───────────────────────────────────────────────────── */}
      <section aria-labelledby="blogs-title" className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-20 lg:py-24">
          {/* Header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-medium text-[#4A7BC8] tracking-[1.4px] uppercase mb-3">
                <span className="block w-[18px] h-[1.5px] bg-[#4A7BC8]" />
                Rehber İçerikler
              </span>
              <h2
                id="blogs-title"
                className="font-serif text-[36px] lg:text-[40px] text-[#1B2B4A] tracking-tight leading-[1.1] mb-3"
              >
                Okunacak rehberler.
              </h2>
              <p className="text-[16px] font-light text-slate-500 leading-relaxed max-w-[500px]">
                Avrupa&apos;da çalışmak isteyenler için hazırladığımız dürüst,
                pratik ve güncel rehberler.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-2 text-[14px] font-medium text-[#4A7BC8] hover:text-[#1B2B4A] transition-colors flex-shrink-0 group"
            >
              Tüm yazılar
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {/* Card 1 */}
            <Link
              href="/blog/avrupada-calismak-icin-en-cok-tercih-edilen-10-ulke"
              className="group flex flex-col border border-slate-200 rounded-xl overflow-hidden bg-white hover:shadow-[0_8px_32px_rgba(27,43,74,0.10)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="relative aspect-[16/9] bg-[#F1F4F9] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80&auto=format&fit=crop"
                  alt="Avrupa'da çalışmak"
                  fill
                  sizes="380px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col flex-1 p-5 lg:p-6">
                <span className="text-[11px] font-medium text-[#4A7BC8] tracking-[0.8px] uppercase mb-2.5">
                  Kariyer
                </span>
                <h3 className="text-[16px] font-medium text-[#1B2B4A] leading-snug mb-2.5 flex-1">
                  Avrupa&apos;da Çalışmak için En İyi 10 Ülke
                </h3>
                <p className="text-[13px] font-light text-slate-500 leading-relaxed mb-5 line-clamp-2">
                  Maaş, yaşam kalitesi ve vize kolaylığı bakımından
                  değerlendirdiğimiz Avrupa&apos;nın en cazip 10 ülkesi.
                </p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#4A7BC8]">
                  Devam et
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link
              href="/blog/yurtdisinda-calismak-icin-hangi-diller-avantaj-sagliyor"
              className="group flex flex-col border border-slate-200 rounded-xl overflow-hidden bg-white hover:shadow-[0_8px_32px_rgba(27,43,74,0.10)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="relative aspect-[16/9] bg-[#F1F4F9] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80&auto=format&fit=crop"
                  alt="Dil öğrenme"
                  fill
                  sizes="380px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col flex-1 p-5 lg:p-6">
                <span className="text-[11px] font-medium text-[#4A7BC8] tracking-[0.8px] uppercase mb-2.5">
                  Dil & Kariyer
                </span>
                <h3 className="text-[16px] font-medium text-[#1B2B4A] leading-snug mb-2.5 flex-1">
                  Yurt Dışında Çalışmak İçin Hangi Diller Avantaj Sağlıyor
                </h3>
                <p className="text-[13px] font-light text-slate-500 leading-relaxed mb-5 line-clamp-2">
                  Maaş ve iş fırsatına göre 2026&apos;da en değerli yabancı
                  dilleri analiz ettik.
                </p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#4A7BC8]">
                  Devam et
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link
              href="/blog/avrupada-kariyer-yapmanin-puf-noktalari"
              className="group flex flex-col border border-slate-200 rounded-xl overflow-hidden bg-white hover:shadow-[0_8px_32px_rgba(27,43,74,0.10)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="relative aspect-[16/9] bg-[#F1F4F9] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop"
                  alt="Kariyer planlama"
                  fill
                  sizes="380px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col flex-1 p-5 lg:p-6">
                <span className="text-[11px] font-medium text-[#4A7BC8] tracking-[0.8px] uppercase mb-2.5">
                  Strateji
                </span>
                <h3 className="text-[16px] font-medium text-[#1B2B4A] leading-snug mb-2.5 flex-1">
                  Avrupa&apos;da Kariyer Yapmanın Püf Noktaları
                </h3>
                <p className="text-[13px] font-light text-slate-500 leading-relaxed mb-5 line-clamp-2">
                  15+ yıllık deneyimden damıtılmış, psikoloji temelli ve aksiyon
                  odaklı kariyer stratejileri.
                </p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#4A7BC8]">
                  Devam et
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Card 4 */}
            <Link
              href="/blog/avrupada-en-cok-talep-goren-meslekler"
              className="group flex flex-col border border-slate-200 rounded-xl overflow-hidden bg-white hover:shadow-[0_8px_32px_rgba(27,43,74,0.10)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="relative aspect-[16/9] bg-[#F1F4F9] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&q=80&auto=format&fit=crop"
                  alt="Talep gören meslekler"
                  fill
                  sizes="380px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col flex-1 p-5 lg:p-6">
                <span className="text-[11px] font-medium text-[#4A7BC8] tracking-[0.8px] uppercase mb-2.5">
                  Meslekler
                </span>
                <h3 className="text-[16px] font-medium text-[#1B2B4A] leading-snug mb-2.5 flex-1">
                  Avrupa&apos;da En Çok Talep Gören Meslekler
                </h3>
                <p className="text-[13px] font-light text-slate-500 leading-relaxed mb-5 line-clamp-2">
                  Teknoloji, sağlık ve mühendislikte Avrupa&apos;nın
                  işverenlerinin 2026&apos;da aradığı profiller.
                </p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#4A7BC8]">
                  Devam et
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Card 5 */}
            <Link
              href="/blog/avrupada-is-ararken-dikkat-etmeniz-gereken-7-onemli-adim"
              className="group flex flex-col border border-slate-200 rounded-xl overflow-hidden bg-white hover:shadow-[0_8px_32px_rgba(27,43,74,0.10)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="relative aspect-[16/9] bg-[#F1F4F9] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop"
                  alt="İş başvurusu"
                  fill
                  sizes="380px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col flex-1 p-5 lg:p-6">
                <span className="text-[11px] font-medium text-[#4A7BC8] tracking-[0.8px] uppercase mb-2.5">
                  Başvuru
                </span>
                <h3 className="text-[16px] font-medium text-[#1B2B4A] leading-snug mb-2.5 flex-1">
                  Avrupa&apos;da İş Ararken Dikkat Edilmesi Gereken 7 Adım
                </h3>
                <p className="text-[13px] font-light text-slate-500 leading-relaxed mb-5 line-clamp-2">
                  CV&apos;den mülakata, vize başvurusundan teklif aşamasına
                  kadar adım adım kılavuz.
                </p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#4A7BC8]">
                  Devam et
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile all posts */}
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#4A7BC8]"
            >
              Tüm yazılar
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TOOLS SECTION ───────────────────────────────────────────────────── */}
      <section aria-labelledby="tools-title" className="bg-[#F8F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-20 lg:py-24">
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium text-[#4A7BC8] tracking-[1.4px] uppercase mb-3">
              <span className="block w-[18px] h-[1.5px] bg-[#4A7BC8]" />
              Puan Hesaplama Araçları
            </span>
            <h2
              id="tools-title"
              className="font-serif text-[36px] lg:text-[40px] text-[#1B2B4A] tracking-tight leading-[1.1] mb-3"
            >
              Başvuru şansın ne?
            </h2>
            <p className="text-[16px] font-light text-slate-500 leading-relaxed max-w-[520px]">
              Dakikalar içinde anlayabileceğin, ülkeye özel puan hesaplama
              araçları. Belge toplamaya gerek yok, sadece birkaç soru.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
            {/* Tool 1 — Avusturya */}
            <Link
              href="/araclar/avusturya-red-white-red-kart-puan-hesaplama"
              className="group block bg-white border border-slate-200 rounded-xl p-7 hover:shadow-[0_6px_24px_rgba(27,43,74,0.09)] hover:border-[#6B9BD9] transition-all duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-[10px] bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400 tracking-[0.8px] uppercase mb-1">
                    Avusturya
                  </p>
                  <h3 className="text-[17px] font-medium text-[#1B2B4A] leading-snug">
                    Red-White-Red Kart Puan Hesaplama
                  </h3>
                </div>
              </div>
              <p className="text-[14px] font-light text-slate-500 leading-relaxed mb-5">
                Avusturya&apos;nın yetenekli göçmen programına başvuru şansını
                hızlıca öğren. Puanını hesapla, belgeleri topla.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#4A7BC8] group-hover:gap-2 transition-all">
                  Hesaplamayı başlat
                  <svg
                    width="13"
                    height="13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="group-hover:translate-x-0.5 transition-transform"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="text-[22px] leading-none">🇦🇹</span>
              </div>
            </Link>

            {/* Tool 2 — Almanya */}
            <Link
              href="/araclar/almanya-chancen-karte-puan-hesaplama"
              className="group block bg-white border border-slate-200 rounded-xl p-7 hover:shadow-[0_6px_24px_rgba(27,43,74,0.09)] hover:border-[#6B9BD9] transition-all duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-[10px] bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400 tracking-[0.8px] uppercase mb-1">
                    Almanya
                  </p>
                  <h3 className="text-[17px] font-medium text-[#1B2B4A] leading-snug">
                    Chancen Karte (Fırsat Kartı) Puan Hesaplama
                  </h3>
                </div>
              </div>
              <p className="text-[14px] font-light text-slate-500 leading-relaxed mb-5">
                Almanya&apos;nın yeni Fırsat Kartı sisteminde kaç puan
                topladığını gör ve başvuru için hazır mısın öğren.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#4A7BC8] group-hover:gap-2 transition-all">
                  Hesaplamayı başlat
                  <svg
                    width="13"
                    height="13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="group-hover:translate-x-0.5 transition-transform"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="text-[22px] leading-none">🇩🇪</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TRUST SECTION ───────────────────────────────────────────────────── */}
      <section aria-labelledby="trust-title" className="bg-[#1B2B4A]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-20 lg:py-24 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Copy */}
          <div>
            <h2
              id="trust-title"
              className="font-serif text-[36px] lg:text-[40px] text-white tracking-tight leading-[1.15] mb-4"
            >
              Vize sürecinde yalnız{" "}
              <em className="italic text-[#6B9BD9]">değilsin.</em>
            </h2>
            <p className="text-[16px] font-light text-white/60 leading-[1.75] mb-8 max-w-[440px]">
              Her ülkenin farklı kuralları, farklı puan sistemleri, farklı belge
              talepleri var. Biz bunu sana anlaşılır bir dille aktarmak için
              buradayız.
            </p>
            <Link
              href="/blog"
              className="inline-block bg-white text-[#1B2B4A] text-[14px] font-medium px-6 py-3 rounded-lg hover:bg-[#F8F9FC] transition-colors"
            >
              Rehberlere Gözat
            </Link>
          </div>

          {/* Features */}
          <ul className="flex flex-col gap-5">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/[0.07] flex items-center justify-center flex-shrink-0">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="rgba(255,255,255,0.8)"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <p className="text-[15px] font-medium text-white mb-0.5">
                  Sade ve anlaşılır rehberler
                </p>
                <p className="text-[13px] font-light text-white/50 leading-relaxed">
                  Hukuki jargon değil, gerçek hayatta işe yarayan bilgiler.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/[0.07] flex items-center justify-center flex-shrink-0">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="rgba(255,255,255,0.8)"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <p className="text-[15px] font-medium text-white mb-0.5">
                  Anlık puan hesaplama
                </p>
                <p className="text-[13px] font-light text-white/50 leading-relaxed">
                  Belge toplamadan, avukat tutmadan başvuru şansını öğren.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/[0.07] flex items-center justify-center flex-shrink-0">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="rgba(255,255,255,0.8)"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <p className="text-[15px] font-medium text-white mb-0.5">
                  Sürekli güncellenen içerik
                </p>
                <p className="text-[13px] font-light text-white/50 leading-relaxed">
                  Değişen vize kuralları takip edilir, rehberler güncellenir.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* ─── FAQ SECTION ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-title" className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
            {/* Intro */}
            <div className="lg:sticky lg:top-24">
              <span className="inline-flex items-center gap-2 text-[11px] font-medium text-[#4A7BC8] tracking-[1.4px] uppercase mb-3">
                <span className="block w-[18px] h-[1.5px] bg-[#4A7BC8]" />
                SSS
              </span>
              <h2
                id="faq-title"
                className="font-serif text-[32px] lg:text-[36px] text-[#1B2B4A] tracking-tight leading-[1.2] mb-3"
              >
                Aklında takılı sorular mı var?
              </h2>
              <p className="text-[14px] font-light text-slate-500 leading-relaxed">
                En sık gelen sorular burada. Cevabını bulamazsan bize
                yazabilirsin.
              </p>
            </div>

            {/* Accordion — static details/summary, no JS needed */}
            <div className="divide-y divide-slate-200 border-t border-slate-200">
              <details className="group border-b border-slate-200">
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none">
                  <span className="text-[15px] font-medium text-[#1B2B4A] group-hover:text-[#4A7BC8] transition-colors">
                    Puan hesaplama araçları ne kadar güvenilir?
                  </span>
                  <span className="w-[22px] h-[22px] rounded-full border border-slate-300 flex items-center justify-center flex-shrink-0 text-slate-400 text-[14px] group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="text-[14px] font-light text-slate-500 leading-[1.75] pb-5">
                  Araçlarımız resmi hükümet kaynaklarındaki kriterleri baz alır
                  ve düzenli olarak güncellenir. Kesin sonuç için resmi başvuru
                  sayfalarını da incelemenizi öneririz.
                </p>
              </details>

              <details className="group border-b border-slate-200">
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none">
                  <span className="text-[15px] font-medium text-[#1B2B4A] group-hover:text-[#4A7BC8] transition-colors">
                    Hangi ülkeler için rehber var?
                  </span>
                  <span className="w-[22px] h-[22px] rounded-full border border-slate-300 flex items-center justify-center flex-shrink-0 text-slate-400 text-[14px] group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="text-[14px] font-light text-slate-500 leading-[1.75] pb-5">
                  Şu an Almanya ve Avusturya için aktif araçlar sunuyoruz. Yeni
                  ülkeler sürekli eklenmekte.
                </p>
              </details>

              <details className="group border-b border-slate-200">
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none">
                  <span className="text-[15px] font-medium text-[#1B2B4A] group-hover:text-[#4A7BC8] transition-colors">
                    İçerikler ücretli mi?
                  </span>
                  <span className="w-[22px] h-[22px] rounded-full border border-slate-300 flex items-center justify-center flex-shrink-0 text-slate-400 text-[14px] group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="text-[14px] font-light text-slate-500 leading-[1.75] pb-5">
                  Tüm blog içerikleri ve temel puan hesaplama araçları ücretsiz.
                  Daha detaylı rehberler ve kişiselleştirilmiş analizler için
                  premium seçenekler yakında aktif olacak.
                </p>
              </details>

              <details className="group border-b border-slate-200">
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none">
                  <span className="text-[15px] font-medium text-[#1B2B4A] group-hover:text-[#4A7BC8] transition-colors">
                    Vize başvurusu yapmama yardım ediyor musunuz?
                  </span>
                  <span className="w-[22px] h-[22px] rounded-full border border-slate-300 flex items-center justify-center flex-shrink-0 text-slate-400 text-[14px] group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="text-[14px] font-light text-slate-500 leading-[1.75] pb-5">
                  Doğrudan başvuru desteği vermiyoruz, ancak sürecin her
                  adımında ne yapman gerektiğini anlayabileceğin detaylı
                  rehberler sunuyoruz.
                </p>
              </details>

              <details className="group border-b border-slate-200">
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none">
                  <span className="text-[15px] font-medium text-[#1B2B4A] group-hover:text-[#4A7BC8] transition-colors">
                    TikTok hesabınız var mı?
                  </span>
                  <span className="w-[22px] h-[22px] rounded-full border border-slate-300 flex items-center justify-center flex-shrink-0 text-slate-400 text-[14px] group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="text-[14px] font-light text-slate-500 leading-[1.75] pb-5">
                  Evet,{" "}
                  <a
                    href="https://www.tiktok.com/@uluslararasi_kariyer"
                    target="_blank"
                    className="text-blue-600"
                  >
                    Uluslararasi Kariyer
                  </a>{" "}
                  Takipte kal!
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────────────────── */}
      {/* <footer className="bg-[#F8F9FC] border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-9 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="font-serif text-[18px] text-[#1B2B4A]">
            Uluslararası<span className="text-[#4A7BC8]">Kariyer</span>
          </Link>
          <p className="text-[13px] text-slate-400 text-center">
            © {new Date().getFullYear()} — Vize rehberleri ve kariyer araçları
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/gizlilik"
              className="text-[13px] text-slate-500 hover:text-[#1B2B4A] transition-colors"
            >
              Gizlilik
            </Link>
            <Link
              href="/iletisim"
              className="text-[13px] text-slate-500 hover:text-[#1B2B4A] transition-colors"
            >
              İletişim
            </Link>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
