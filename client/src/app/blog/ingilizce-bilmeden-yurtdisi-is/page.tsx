import type { Metadata } from "next";
import Image from "next/image";

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
// Title: 56 karakter
// Description: 158 karakter
// Slug: /blog/ingilizce-bilmeden-yurtdisi-is

export const metadata: Metadata = {
  title: "İngilizce Bilmeden Yurtdışında İş Bulmak (2026)",
  description:
    "İngilizce bilmeden yurtdışı iş bulmak mümkün mü? 2026'da hangi ülkeler, sektörler ve yollar dil şartını esnetiyor? Gerçek rakamlar ve adım adım rehber.",
  keywords: [
    "ingilizce bilmeden yurtdışı iş",
    "dil bilmeden yurtdışında çalışmak",
    "ingilizce bilmeden almanya çalışma",
    "yurtdışı iş ilanları türkçe",
    "almanya iş fırsatları türkçe konuşan",
    "ingilizce gerektirmeyen yurtdışı iş",
    "yurtdışı çalışma izni dil şartı",
    "dil olmadan avrupa iş bulma",
    "türk çalışanlar yurtdışı iş 2026",
    "almanca öğrenmeden almanya iş",
  ],
  openGraph: {
    title: "İngilizce Bilmeden Yurtdışında İş Bulmak Mümkün mü?",
    description:
      "2026'da hangi ülkeler ve sektörler dil şartını esnetiyor? İngilizce bilmeden yurtdışı iş bulmanın gerçekçi yolları.",
    locale: "tr_TR",
    type: "article",
  },
  alternates: {
    canonical: "/blog/ingilizce-bilmeden-yurtdisi-is",
  },
};

// ─── LSI / KEYWORD VARYASYONLARI ──────────────────────────────────────────────
// ingilizce bilmeden yurtdışı iş | dil bilmeden yurtdışında çalışmak
// ingilizce şartı olmayan ülkeler | almanya türkçe iş ilanı
// yurtdışı iş dil şartı | avrupa çalışma izni ingilizce
// ingilizce olmadan avrupa | türkçe konuşanlar için yurtdışı iş
// mevsimlik iş yurtdışı | teknik meslek yurtdışı

// ─── SCHEMAS ──────────────────────────────────────────────────────────────────

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "İngilizce bilmeden yurtdışında iş bulmak 2026'da mümkün mü?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, mümkün — ama koşulsuz değil. İnşaat, tarım, üretim, lojistik ve bakım gibi sektörlerde dil şartı çoğu zaman esnetiliyor. Ancak müşteriyle doğrudan iletişim gerektiren pozisyonlarda dil bilgisi neredeyse zorunlu. Almanya özellikle teknik mesleklerde Türk çalışanlara açık ve Türkçe konuşan büyük bir diaspora topluluğu mevcut.",
      },
    },
    {
      "@type": "Question",
      name: "Hangi ülkeler İngilizce bilmeden çalışma izni veriyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Almanya kendi dilini öğrenme şartıyla teknik mesleklerde kapı aralıyor. Hollanda ve İrlanda İngilizce ile çalışılabilen Avrupa ülkeleri arasında. Körfez ülkeleri (BAE, Katar) yoğun Türk topluluğu nedeniyle dil engeli düşük. Gürcistan ve Azerbaycan ise Türkçeye yakın dil yapısıyla en kolay entegrasyon sağlayan seçenekler.",
      },
    },
    {
      "@type": "Question",
      name: "Almanya'da çalışmak için kaç yıl Almanca öğrenmek gerekiyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Almanya'daki teknik ve mavi yaka pozisyonlar için genellikle A2–B1 düzeyi Almanca yeterli. Bu seviyeye çıkmak yoğun çalışmayla 6–12 ay sürebilir. Sağlık sektöründe ise B2 zorunlu. Almanya'daki Türk nüfusunun 3 milyonu aşkın olması, başlangıçta günlük yaşamı kolaylaştırıyor.",
      },
    },
    {
      "@type": "Question",
      name: "İngilizce olmadan yurtdışında hangi meslekler iş bulabilir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kaynakçı, CNC operatörü, elektrik teknisyeni, inşaat işçisi, tarım işçisi, aşçı/mutfak personeli, teslimat kurye, fabrika operatörü ve bakım görevlisi bu sektörler arasında sayılabilir. Bu mesleklerin çoğu 'gösterip öğretme' metoduyla çalıştığından pratik beceri, dil bilgisinin önüne geçebilir.",
      },
    },
    {
      "@type": "Question",
      name: "Yurtdışı iş başvurusunda CV'yi hangi dilde hazırlamalıyım?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hedef ülkenin diline göre değişiyor. Almanya için Almanca CV neredeyse zorunlu. Hollanda, İrlanda ve İskandinav ülkeleri için İngilizce CV kabul ediliyor. Körfez ülkeleri için İngilizce standart. Ülke dilini bilmeden başvuruyorsanız bile CV'nin o dilde hazırlanmış olması başvurunuzun ciddiye alınmasını sağlar.",
      },
    },
    {
      "@type": "Question",
      name: "2026'da yurtdışı iş başvurusu için gereken belgeler neler?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Temel belgeler: pasaport, mesleki yeterlilik belgesi veya diploma, SGK hizmet dökümü, banka hesap dökümü ve referans mektubu. Almanya için ek olarak diploma denklik belgesi (Anabin/ENIC-NARIC) gerekiyor. Tüm belgelerin hedef ülkenin diline çevrilmesi çoğu zaman şart.",
      },
    },
  ],
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: "https://siten.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://siten.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "İngilizce Bilmeden Yurtdışında İş Bulmak",
      item: "https://siten.com/blog/ingilizce-bilmeden-yurtdisi-is",
    },
  ],
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

const COUNTRY_TABLE = [
  {
    country: "Almanya",
    lang: "Almanca A2–B1",
    sectors: "İnşaat, sağlık, üretim",
    avgNet: "2.200–3.500€",
    difficulty: "Orta",
    diffColor: "text-amber-600 bg-amber-50",
  },
  {
    country: "Hollanda",
    lang: "İngilizce yeterli",
    sectors: "Lojistik, tarım, IT",
    avgNet: "2.000–2.800€",
    difficulty: "Kolay",
    diffColor: "text-emerald-600 bg-emerald-50",
  },
  {
    country: "BAE / Dubai",
    lang: "Türkçe topluluk",
    sectors: "İnşaat, turizm, ticaret",
    avgNet: "1.800–3.500€",
    difficulty: "Kolay",
    diffColor: "text-emerald-600 bg-emerald-50",
  },
  {
    country: "Gürcistan",
    lang: "Türkçe yakın",
    sectors: "Turizm, inşaat, ticaret",
    avgNet: "800–1.400€",
    difficulty: "Çok Kolay",
    diffColor: "text-blue-600 bg-blue-50",
  },
  {
    country: "Katar",
    lang: "Türkçe topluluk",
    sectors: "İnşaat, mühendislik",
    avgNet: "2.000–4.000€",
    difficulty: "Kolay",
    diffColor: "text-emerald-600 bg-emerald-50",
  },
  {
    country: "Polonya",
    lang: "Rusça/Türkçe kısmi",
    sectors: "Üretim, depo, tarım",
    avgNet: "1.200–1.800€",
    difficulty: "Orta",
    diffColor: "text-amber-600 bg-amber-50",
  },
  {
    country: "İrlanda",
    lang: "İngilizce zorunlu",
    sectors: "Turizm, IT, tarım",
    avgNet: "2.100–2.800€",
    difficulty: "Zor",
    diffColor: "text-red-600 bg-red-50",
  },
];

const JOB_SECTORS = [
  {
    sector: "İnşaat ve Teknik Meslekler",
    jobs: [
      "Kaynakçı",
      "Elektrik teknisyeni",
      "CNC operatörü",
      "Tesisat ustası",
    ],
    langReq: "A2 düzeyi yerel dil yeterli",
    germany: "Yıllık brüt 35.000–50.000€",
    note: "Almanya'da sürekli açık pozisyon",
  },
  {
    sector: "Sağlık ve Bakım",
    jobs: [
      "Yaşlı bakım görevlisi",
      "Hastane temizlik personeli",
      "Yardımcı hemşire",
    ],
    langReq: "B1–B2 Almanca / İngilizce",
    germany: "Yıllık brüt 28.000–40.000€",
    note: "Almanya'da 500.000+ açık pozisyon",
  },
  {
    sector: "Tarım ve Mevsimlik İş",
    jobs: ["Meyve toplama", "Sera işçisi", "Hayvancılık"],
    langReq: "Neredeyse sıfır dil şartı",
    germany: "Saatlik 12–14€ (brüt)",
    note: "Nisan–Ekim dönemi yoğun",
  },
  {
    sector: "Lojistik ve Depo",
    jobs: ["Forklift operatörü", "Depo görevlisi", "Kurye sürücüsü"],
    langReq: "Temel iletişim yeterli",
    germany: "Yıllık brüt 26.000–35.000€",
    note: "E-ticaret büyümesiyle talep artıyor",
  },
  {
    sector: "Mutfak ve Gastronomi",
    jobs: ["Aşçı", "Mutfak yardımcısı", "Bulaşıkçı"],
    langReq: "Minumum dil gereksinimi",
    germany: "Yıllık brüt 22.000–32.000€",
    note: "Türk restoranları avantaj sağlıyor",
  },
];

// ─── IMAGES ───────────────────────────────────────────────────────────────────
const HERO_IMG =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80";
const WORK_IMG =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80";
const PASSPORT_IMG =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80";

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function IngilizceOlmadenYurtdisiIs() {
  return (
    <div
      className="bg-[#F8F9FC] text-[#1B2B4A]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&display=swap');`}</style>

      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* ── HERO ── */}
      <section className="relative bg-[#0F1D33] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMG}
            alt="Yurtdışında çalışmak"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1D33]/90 via-[#1B2B4A]/30 to-[#0F1D33]/90" />
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-xs font-semibold bg-[#4A7BC8]/20 border border-[#4A7BC8]/30 text-[#7eb8f7] px-3 py-1 rounded-full uppercase tracking-wider">
                  Kariyer Rehberi
                </span>
                <span className="text-xs bg-white/10 border border-white/15 text-white/60 px-3 py-1 rounded-full">
                  2026 Güncel
                </span>
              </div>
              {/* H1 — TEK ADET */}
              <h1
                className="text-4xl lg:text-5xl text-white leading-[1.12] mb-5"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                İngilizce Bilmeden
                <br />
                <span className="italic text-[#7eb8f7]">
                  Yurtdışında İş Bulmak
                </span>
                <br />
                Mümkün mü?
              </h1>
              <p className="text-lg text-white/60 leading-relaxed max-w-lg mb-8">
                İngilizce bilmeden yurtdışı iş arayanlar için gerçekçi yollar,
                hangi ülkeler dil şartını esnetiyor ve 2026'da nasıl başvurulur
                — rakamlarla dolu eksiksiz rehber.
              </p>
              {/* <div className="flex flex-wrap gap-3">
                {[
                  { label: "8 dk okuma" },
                  { label: "7 ülke analizi" },
                  { label: "Gerçek maaş verileri" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7eb8f7]" />
                    <span className="text-white/60 text-sm">{m.label}</span>
                  </div>
                ))}
              </div> */}
            </div>
            {/* Stat pills */}
            <div className="hidden lg:flex flex-col gap-3">
              {[
                { num: "3M+", label: "Türk Almanya'da yaşıyor" },
                { num: "500K+", label: "Almanya açık pozisyon (bakım)" },
                { num: "7", label: "Dil şartı esnek ülke" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-center min-w-[170px]"
                >
                  <p
                    className="text-3xl text-[#7eb8f7] leading-none mb-1"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {s.num}
                  </p>
                  <p className="text-white/40 text-xs leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <div className="max-w-[900px] mx-auto px-6">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-xs text-slate-400 mt-8 mb-10"
          aria-label="Breadcrumb"
        >
          <a href="/" className="hover:text-[#4A7BC8] transition-colors">
            Ana Sayfa
          </a>
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <a href="/blog" className="hover:text-[#4A7BC8] transition-colors">
            Blog
          </a>
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="text-[#1B2B4A] font-medium">
            İngilizce Bilmeden Yurtdışı İş
          </span>
        </nav>

        {/* ── GİRİŞ ── */}
        <section className="mb-12">
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">
            "İngilizce bilmiyorum, zaten yurtdışında çalışamam." Bu cümleyi kaç
            kez duydunuz ya da kendiniz söylediniz? Yanlış bir inanç — ama
            tamamen de yanlış değil.
          </p>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">
            Gerçek şu:{" "}
            <strong className="text-[#1B2B4A]">
              ingilizce bilmeden yurtdışı iş
            </strong>{" "}
            bulmak 2026'da hâlâ mümkün. Ama bunun koşulları var: doğru ülke,
            doğru sektör ve doğru strateji. Yazı masası başında müşteriyle
            konuşacaksanız dil zorunlu. Bir fabrikada torna tezgâhı başında
            çalışacaksanız, pratikte beceri dilden önce geliyor.
          </p>
          <p className="text-[15px] text-[#4A5568] leading-relaxed">
            Bu rehberde hangi ülkelerin, hangi sektörlerin ve hangi başvuru
            yollarının dil şartını esnettiğini — gerçek rakamlarla —
            bulacaksınız.
          </p>
        </section>

        <div className="h-px bg-slate-200 mb-12" />

        {/* ── H2: GERÇEK Mİ? ── */}
        <section className="mb-14">
          <h2
            className="text-2xl lg:text-3xl text-[#1B2B4A] leading-tight mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Dil Bilmeden Yurtdışında Çalışmak: Efsane mi, Gerçek mi?
          </h2>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">
            Dürüst cevap: ikisi de. Müşteriyle sürekli iletişim gerektiren
            işlerde dil şartı neredeyse geçilmez bir duvar. Ama{" "}
            <strong className="text-[#1B2B4A]">
              üretim, lojistik, tarım ve inşaat
            </strong>{" "}
            gibi sektörlerde, özellikle büyük Türk topluluklarının yaşadığı
            ülkelerde, işe başlamak için B2 seviyesi dil bilgisine gerek
            olmayabiliyor.
          </p>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">
            Almanya'da 3 milyonu aşkın Türk yaşıyor. Düsseldorf'ta bir fabrikada
            işe başladığınızda, aynı vardiyada Türkçe konuşan iş arkadaşlarınız
            olması kuvvetle muhtemel. Bu, dil öğrenirken hayatı idame
            ettirmenizi kolaylaştırıyor.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
              <p className="font-bold text-red-700 text-sm mb-3">
                Dil Bilmeden Zor Olan Pozisyonlar
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Müşteri hizmetleri temsilcisi",
                  "Öğretmen / eğitmen",
                  "Satış temsilcisi",
                  "Yönetici pozisyonlar",
                  "Hukuk ve finans danışmanlığı",
                ].map((i) => (
                  <li key={i} className="flex gap-2 text-[13px] text-red-600">
                    <svg
                      className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
              <p className="font-bold text-emerald-700 text-sm mb-3">
                Dil Şartının Esnetilebileceği Alanlar
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Kaynakçı, CNC operatörü",
                  "Tarım ve hasat işçisi",
                  "İnşaat ve teknik montaj",
                  "Fabrika / üretim operatörü",
                  "Depo ve forklift operatörü",
                ].map((i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-[13px] text-emerald-600"
                  >
                    <svg
                      className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── H2: ÜLKE TABLOSU ── */}
        <section className="mb-14">
          <h2
            className="text-2xl lg:text-3xl text-[#1B2B4A] leading-tight mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            2026'da Dil Şartı Esnek Ülkeler: Karşılaştırma Tablosu
          </h2>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">
            Aşağıdaki tablo, Türk çalışanların en sık sorduğu ülkeleri dil
            gereksinimi, sektör ve ortalama net maaş açısından karşılaştırıyor.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-4">
            <div className="hidden sm:grid grid-cols-[130px_140px_150px_110px_90px] gap-2 px-5 py-3 bg-[#1B2B4A] text-white text-xs font-semibold uppercase tracking-wider">
              <span>Ülke</span>
              <span>Dil Şartı</span>
              <span>Güçlü Sektörler</span>
              <span>Ort. Net Maaş</span>
              <span>Kolaylık</span>
            </div>
            <div className="divide-y divide-slate-100">
              {COUNTRY_TABLE.map((row, i) => (
                <div
                  key={row.country}
                  className={`grid sm:grid-cols-[130px_140px_150px_110px_90px] gap-2 px-5 py-4 items-center ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  }`}
                >
                  <span className="font-semibold text-[#1B2B4A] text-sm">
                    {row.country}
                  </span>
                  <span className="text-[13px] text-[#5A6A82]">{row.lang}</span>
                  <span className="text-[13px] text-[#5A6A82]">
                    {row.sectors}
                  </span>
                  <span className="text-sm font-bold text-emerald-700">
                    {row.avgNet}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${row.diffColor}`}
                  >
                    {row.difficulty}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-slate-400">
            Kaynak: Eurostat 2026, Northvize, Statistics Netherlands. Net
            maaşlar tahmini ortalama aralıklardır.
          </p>
        </section>

        {/* ── H2: SEKTÖRLER ── */}
        <section className="mb-14">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
            <div>
              <h2
                className="text-2xl lg:text-3xl text-[#1B2B4A] leading-tight mb-4"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                İngilizce Gerektirmeyen 5 Sektör ve Gerçek Maaşlar
              </h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">
                Bu sektörlerde "gösterip öğretme" yöntemi egemen. Teknik beceri,
                dil bilgisinin önünde geliyor. 2026 Almanya verileriyle en
                güncel rakamlar aşağıda.
              </p>
              <div className="flex flex-col gap-4">
                {JOB_SECTORS.map((s) => (
                  <div
                    key={s.sector}
                    className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-[#4A7BC8]/40 hover:shadow-md hover:shadow-slate-100 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3
                        className="font-semibold text-[#1B2B4A] text-[15px]"
                        style={{ fontFamily: "'DM Serif Display', serif" }}
                      >
                        {s.sector}
                      </h3>
                      <span className="text-xs bg-[#EBF2FF] text-[#4A7BC8] px-2 py-1 rounded-full font-semibold flex-shrink-0">
                        {s.germany}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {s.jobs.map((j) => (
                        <span
                          key={j}
                          className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full"
                        >
                          {j}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs text-slate-400">
                        Dil:{" "}
                        <strong className="text-[#1B2B4A]">{s.langReq}</strong>
                      </span>
                      <span className="text-xs text-[#4A7BC8] font-medium">
                        {s.note}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-80 hidden lg:block">
              <Image
                src={WORK_IMG}
                alt="Teknik meslekte çalışmak"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B4A]/30 to-transparent" />
            </div>
          </div>
        </section>

        {/* ── H2: ALMANYA DETAY ── */}
        <section className="mb-14">
          <h2
            className="text-2xl lg:text-3xl text-[#1B2B4A] leading-tight mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Almanya: İngilizce Bilmeyenler İçin En Gerçekçi Seçenek
          </h2>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">
            Almanya'da 3 milyonu aşkın Türk yaşıyor ve ülkede 500.000'i aşkın
            bakım sektörü açığı bulunuyor. Bu iki veri, İngilizce bilmeden
            yurtdışı iş arayanlar için Almanya'yı neden birinci adres yaptığını
            açıklıyor.
          </p>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">
            Almanya teknik mesleklerde dil şartını esnetiyor: A2–B1 düzeyi
            Almanca ile işe başlamak mümkün. Peki bu düzeye ulaşmak ne kadar
            sürüyor?
          </p>

          {/* H3: Almanca Öğrenme Süreci */}
          <h3
            className="text-xl text-[#1B2B4A] mb-3"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Almanca Öğrenmek İçin Ne Kadar Süre Gerekiyor?
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              {
                level: "A1–A2",
                time: "3–5 ay",
                desc: "Temel iletişim, alışveriş, komutlar. Fabrika ve tarım işlerinde yeterli.",
              },
              {
                level: "B1",
                time: "6–10 ay",
                desc: "İş hayatında temel iletişim. Teknik meslekler ve sağlık yardımcısı için uygun.",
              },
              {
                level: "B2",
                time: "12–18 ay",
                desc: "Sağlık sektörü için zorunlu. Yönetici pozisyonlarına geçişi kolaylaştırır.",
              },
            ].map((l) => (
              <div
                key={l.level}
                className="bg-white border border-slate-200 rounded-2xl p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="font-bold text-[#4A7BC8] text-lg"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {l.level}
                  </span>
                  <span className="text-xs bg-[#EBF2FF] text-[#4A7BC8] px-2 py-0.5 rounded-full font-semibold">
                    {l.time}
                  </span>
                </div>
                <p className="text-[13px] text-[#5A6A82] leading-relaxed">
                  {l.desc}
                </p>
              </div>
            ))}
          </div>

          {/* H3: Chancen Karte */}
          <h3
            className="text-xl text-[#1B2B4A] mb-3"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Almanya Chancen Karte: İş Teklifi Olmadan Kapı Aralıyor
          </h3>
          <div className="bg-[#EBF2FF] border border-[#C8D8F0] rounded-2xl p-5 mb-6">
            <p className="text-[15px] text-[#1B2B4A] leading-relaxed mb-3">
              2024'te hayata geçen <strong>Chancen Karte (Fırsat Kartı)</strong>{" "}
              sistemi, Almanya'da iş teklifi olmadan iş arama hakkı tanıyor.
              Puan bazlı değerlendirme: nitelik, deneyim, yaş ve — önemli — dil
              puanı.
            </p>
            <p className="text-[15px] text-[#4A5568] leading-relaxed">
              Almanca bilmiyorsanız bu yolda dezavantajlısınız, ama imkânsız
              değil. Güçlü mesleki nitelik ve deneyim, dil puanının düşüklüğünü
              telafi edebilir.
            </p>
            <a
              href="/chancen-karte-puan-hesaplama"
              className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#4A7BC8] hover:text-[#3A6AB8] transition-colors"
            >
              Chancen Karte Puan Hesaplayıcı
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* ── H2: NASIL YAPILIR ── */}
        <section className="mb-14">
          <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-start">
            <div className="relative rounded-2xl overflow-hidden h-80 hidden lg:block">
              <Image
                src={PASSPORT_IMG}
                alt="Vize başvurusu süreci"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B4A]/30 to-transparent" />
            </div>
            <div>
              <h2
                className="text-2xl lg:text-3xl text-[#1B2B4A] leading-tight mb-4"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Nasıl Yapılır? Adım Adım Başvuru Süreci
              </h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">
                Vize süreleri 3–10 hafta arasında değişiyor. Evrak toplama ve iş
                teklifi sürecini hesaba katarak en az 8–12 hafta önceden
                harekete geçmek idealdir.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    step: "01",
                    title: "Hedef ülke ve sektörü belirleyin",
                    desc: "Hangi ülkede, hangi meslekte çalışacağınızı netleştirin. Dil şartını, vize sürecini ve maaş aralığını önceden araştırın.",
                  },
                  {
                    step: "02",
                    title: "Belgelerinizi hazırlayın",
                    desc: "Diploma veya meslek belgesi, SGK hizmet dökümü, banka hesap dökümü. Almanya için diploma denklik belgesi (Anabin) şart. Tüm belgeler hedef ülke diline çevrilmeli.",
                  },
                  {
                    step: "03",
                    title: "CV ve motivasyon mektubunu o dilde hazırlayın",
                    desc: "Dil bilmeseniz bile CV'nin Almanca ya da İngilizce olması başvurunuzu ciddiye aldırır. Bu noktada profesyonel destek almak dönüşüm oranını artırıyor.",
                  },
                  {
                    step: "04",
                    title: "İş başvurusu yapın",
                    desc: "LinkedIn, Indeed, StepStone (Almanya), Nationale Vacaturebank (Hollanda) üzerinden başvurun. Türk diaspora grupları ve işveren ağları da değerli kaynak.",
                  },
                  {
                    step: "05",
                    title: "Vize başvurusunu başlatın",
                    desc: "İş teklifi aldıktan sonra çalışma vizesi başvurusunu yapın. Seyahat öncesinde vize onayı bekleyin; yasadışı yollarla çalışmak gelecekteki başvuruları kalıcı olarak engelleyebilir.",
                  },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="flex gap-4 bg-white border border-slate-200 rounded-xl px-5 py-4"
                  >
                    <span
                      className="text-3xl text-slate-100 leading-none select-none flex-shrink-0 w-9 mt-0.5"
                      style={{ fontFamily: "'DM Serif Display', serif" }}
                    >
                      {s.step}
                    </span>
                    <div>
                      <p className="font-semibold text-[#1B2B4A] mb-1 text-[15px]">
                        {s.title}
                      </p>
                      <p className="text-[14px] text-[#5A6A82] leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── H2: ŞARTLAR ── */}
        <section className="mb-14">
          <h2
            className="text-2xl lg:text-3xl text-[#1B2B4A] leading-tight mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Şartlar Nelerdir? Gerçekçi Beklenti Seti
          </h2>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">
            Dil şartını esnetebilirsiniz ama diğer şartları görmezden
            gelemezsiniz. İşte çoğu Avrupa ülkesinin ortak beklentileri:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Mesleki Yeterlilik Belgesi",
                desc: "Diplomasız başvurularda mesleki sertifika veya deneyim belgesi kritik. Almanya'da diploma denkliği (Anabin) şart.",
                color: "border-[#4A7BC8]/40 bg-[#EBF2FF]/50",
              },
              {
                title: "Finansal Yeterlilik",
                desc: "Vize aşamasında banka hesabında yeterli bakiye gösterilmeli. Almanya için genellikle aylık 1.000€ civarı talep ediliyor.",
                color: "border-slate-200 bg-white",
              },
              {
                title: "Temiz Sabıka Kaydı",
                desc: "Tüm AB ülkelerinde zorunlu. Türkiye'deki savcılıktan alınan belgenin apostil ile onaylı olması gerekiyor.",
                color: "border-slate-200 bg-white",
              },
              {
                title: "Sağlık Sigortası",
                desc: "Vize başvurusundan çalışma başlangıcına kadar geçerli seyahat/sağlık sigortası zorunlu. Başlangıç maliyeti 30–80€/ay.",
                color: "border-slate-200 bg-white",
              },
              {
                title: "Çalışma Vizesi / İzni",
                desc: "İş teklifinden sonra konsolosluktan çalışma vizesi alınması şart. Yasadışı çalışmak tüm gelecek başvurularını engelleyebilir.",
                color: "border-red-200 bg-red-50",
              },
              {
                title: "Temel İletişim Düzeyi",
                desc: "Sıfır dil bilgisiyle zor. Güvenlik talimatlarını, komutları ve acil durumları anlayabilecek kadar temel bilgi hayat kurtarıcı.",
                color: "border-amber-200 bg-amber-50",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border-2 p-5 ${item.color}`}
              >
                <p className="font-semibold text-[#1B2B4A] mb-2 text-[15px]">
                  {item.title}
                </p>
                <p className="text-[13.5px] text-[#5A6A82] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── H2: MALİYET ── */}
        <section className="mb-14">
          <h2
            className="text-2xl lg:text-3xl text-[#1B2B4A] leading-tight mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Gerçek Maliyet: Almanya'ya Çalışmaya Gitmek Ne Kadar Tutar?
          </h2>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">
            Çoğu rehber bu soruyu atlıyor. İşte 2026 itibarıyla Almanya'ya
            teknik meslek çalışanı olarak gidecek biri için gerçekçi başlangıç
            bütçesi:
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-4">
            <div className="grid grid-cols-[1fr_auto] px-5 py-3 bg-[#1B2B4A] text-white text-xs font-semibold uppercase tracking-wider">
              <span>Kalem</span>
              <span>Tahmini Maliyet</span>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                {
                  item: "Dil kursu (A1–B1, 6–10 ay, Türkiye'de)",
                  cost: "3.000–8.000 ₺/ay",
                },
                {
                  item: "Diploma denklik belgesi (Anabin / çeviri)",
                  cost: "500–2.000€",
                },
                { item: "Çalışma vizesi harcı", cost: "75–100€" },
                { item: "Uçak bileti (tek yön)", cost: "100–300€" },
                {
                  item: "İlk ay kira + depozito (Almanya'da)",
                  cost: "1.500–3.000€",
                },
                { item: "Sağlık sigortası (ilk 3 ay)", cost: "90–240€" },
                {
                  item: "Toplam başlangıç bütçesi (tahmini)",
                  cost: "3.000–6.000€",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center px-5 py-3.5 ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  }`}
                >
                  <span className="text-[14px] text-[#3A4A60]">{row.item}</span>
                  <span
                    className={`text-[14px] font-bold ml-4 flex-shrink-0 ${
                      i === 6 ? "text-[#4A7BC8]" : "text-[#1B2B4A]"
                    }`}
                  >
                    {row.cost}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800 leading-relaxed">
            <strong>Not:</strong> İşveren sponsorlu başvurularda bazı kalemler
            (vize, uçak, konaklama) işveren tarafından karşılanabilir. Teknik
            meslek kıtlığı olan sektörlerde bu avantaj için müzakere etmekte
            fayda var.
          </div>
        </section>

        {/* ── H2: SSS ── */}
        <section className="mb-14">
          <h2
            className="text-2xl lg:text-3xl text-[#1B2B4A] leading-tight mb-8"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Sık Sorulan Sorular
          </h2>
          <div className="flex flex-col gap-3">
            {FAQ_SCHEMA.mainEntity.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-5"
              >
                <p className="font-semibold text-[#1B2B4A] text-[15px] mb-2">
                  {faq.name}
                </p>
                <p className="text-[14px] text-[#5A6A82] leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SONUÇ ── */}
        <section className="mb-14">
          <h2
            className="text-2xl lg:text-3xl text-[#1B2B4A] leading-tight mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Sonuç: Mümkün, Ama Hazırlıksız Çıkmayın
          </h2>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">
            İngilizce bilmeden yurtdışında iş bulmak 2026'da mümkün — ama
            koşulsuz değil. Teknik meslekte güçlüyseniz, doğru ülkeyi (Almanya,
            BAE, Gürcistan) seçerseniz ve belgeleriniz eksiksizse kapılar
            açılıyor.
          </p>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">
            Yapmanız gereken tek şey hazırlıklı gitmek: en azından A2 düzeyi
            hedef dil, denklik belgesi hazır, CV hedef dilde yazılmış. Bu üçü
            olmadan en iyi sektörde bile kapı açılmıyor.
          </p>
          <p className="text-[15px] text-[#4A5568] leading-relaxed">
            Dili sonradan öğrenebilirsiniz. Ama doğru CV ve motivasyon mektubu
            olmadan süreç daha başlamadan tıkanabilir.
          </p>
        </section>

        {/* ── CTA ── */}
        <div className="bg-gradient-to-br from-[#1B2B4A] to-[#2E4A7A] rounded-3xl p-8 lg:p-12 mb-16">
          <h2
            className="text-2xl lg:text-3xl text-white leading-tight mb-3"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            İlk Adımı Atmaya Hazır Mısınız?
          </h2>
         {/*  <p className="text-white/60 text-[15px] leading-relaxed mb-6 max-w-lg">
            Hedef ülke dilinizde ATS uyumlu CV ve motivasyon mektubu ile
            başvurunuzu güçlendirin. Almanca, İngilizce ve 5 farklı dilde 48
            saat teslim.
          </p> */}
          <div className="flex flex-wrap gap-3">
            <a
              href="/araclar/almanya-chancen-karte-puan-hesaplama"
              className="inline-flex items-center gap-2 bg-[#4A7BC8] hover:bg-[#3A6AB8] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Chancen Karte Puan Hesapla
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="/araclar/schengen-vizesi-red-riski-tarama"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all"
            >
              Schengen Vizesi Risk Taraması
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
