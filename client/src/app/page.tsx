import {
  Briefcase,
  Globe2,
  Languages,
  ListChecks,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroSectionInputs from "@/components/HomePage/HeroSectionInputs/HeroSectionInputs";
import PositionCards from "@/components/HomePage/PositionCards/PositionCards";
import { AccordionComponent } from "@/components/AccordionComponent/AccordionComponent";
import { homepageFaq } from "@/components/AccordionComponent/helpers";
import AllStatBoxes from "@/components/HomePage/StatBox/AllStatBoxes";
import CareerLink from "@/components/HomePage/CareerLink/CareerLink";
import { HomepageCareerLinkData } from "@/components/HomePage/CareerLink/helpers";
import PopularJobs from "@/components/HomePage/PopularJobs/PopularJobs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uluslararası Kariyer",
  description: `Avrupa genelindeki güncel iş ilanlarını tek bir platformda
              toplayarak, yurt dışında kariyer fırsatlarını kolayca keşfetmenizi
              sağlıyoruz.`,
};

export default function Home() {
  return (
    <div className="w-full bg-white">
      <section
        aria-labelledby="hero-title"
        className="w-full bg-slate-100 dark:bg-slate-700"
      >
        <div className="max-w-[1400px] mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 items-center gap-10 min-h-[40vh] lg:min-h-[100vh]">
          <div className="max-w-xl">
            <h1
              id="hero-title"
              className="font-sans font-extrabold text-4xl md:text-5xl text-primary-color leading-tight tracking-tight"
            >
              <span className="block">
                Avrupa'daki <span className="text-green-500">100.000+</span>
              </span>
              <span className="block">İş İmkanını Keşfedin</span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed dark:text-gray-300">
              Avrupa genelindeki güncel iş ilanlarını tek bir platformda
              toplayarak, yurt dışında kariyer fırsatlarını kolayca keşfetmenizi
              sağlıyoruz.
            </p>

            <div className="mt-6">
              <HeroSectionInputs />
            </div>
          </div>

          <div className="hidden lg:block">
            <Image
              src="/hero-image3.webp"
              alt="Avrupa'da iş fırsatlarını temsil eden görsel"
              width={650}
              height={650}
              priority
              sizes="(min-width:1024px) 650px, 100vw"
              className="w-full max-w-[650px] h-auto rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="featured-jobs-title"
        className="w-full bg-white dark:bg-slate-800"
      >
        <div className="max-w-[1400px] mx-auto sm:px-6 py-16">
          <h2
            id="featured-jobs-title"
            className="font-sans font-extrabold text-4xl text-primary-color text-center"
          >
            Öne Çıkan İş İlanları
          </h2>

          <PopularJobs />

          <div className="text-center mt-10">
            <Link
              href="/yurtdisi-is-ilanlari"
              className="inline-block bg-primary-color text-white font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 hover:scale-105 transition"
            >
              Daha Fazla
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 dark:bg-slate-700">
        <div className="container mx-auto py-4 md:py-8 px-4">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-200">
                  Avrupa’da Kariyerini Planla
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Avrupa’da çalışmaya hazır mısın? Farklı ülkelerdeki iş
                  ilanlarını tek bir platformda toplayarak kariyer yolculuğunun
                  her adımını senin için kolaylaştırıyoruz. Merak ettiğin
                  sorulara yanıt bulacak, Avrupa genelindeki güncel iş
                  fırsatlarını keşfedecek ve geleceğini güvenle
                  planlayabileceksin.
                </p>
              </div>

              <div className="space-y-2">
                {HomepageCareerLinkData(
                  Globe2,
                  Briefcase,
                  TrendingUp,
                  ListChecks,
                  Languages
                ).map((item) => (
                  <CareerLink
                    key={item.id}
                    href={item.href}
                    icon={item.icon}
                    title={item.title}
                  />
                ))}
              </div>
            </div>

            <div className="relative hidden h-[600px] lg:block">
              <Image
                src="/smiling-woman.webp"
                alt="Plan your career"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="features-title"
        className="w-full bg-white dark:bg-slate-800"
      >
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <h2
            id="features-title"
            className="font-sans font-extrabold text-4xl text-primary-color text-center"
          >
            Tek Platform Çok Seçenek
          </h2>

          <PositionCards />
        </div>
      </section>

      <section className="w-full bg-slate-100 dark:bg-slate-700">
        <AllStatBoxes />
      </section>

      <section className="w-full bg-white py-16 px-6 dark:bg-slate-800">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl font-bold text-primary-color text-center">
            Sıkça Sorulan Sorular
          </h2>

          <div className="mt-10">
            <AccordionComponent data={homepageFaq} />
          </div>
        </div>
      </section>
    </div>
  );
}
