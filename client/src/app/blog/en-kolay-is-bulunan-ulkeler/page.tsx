import type { Metadata } from "next";
import Image from "next/image";

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
// Title: 55 karakter
// Description: 156 karakter
// Slug: /blog/en-kolay-is-bulunan-ulkeler

export const metadata: Metadata = {
  title: "En Kolay İş Bulunan Ülkeler 2026 (Türkler İçin)",
  description:
    "Türk vatandaşları için 2026'da en kolay iş bulunan ülkeler: vize süresi, ortalama maaş, dil şartı ve gerçek fırsatlarla sıralı liste. Hangisi size göre?",
  keywords: [
    "en kolay iş bulunan ülkeler",
    "türkler için kolay iş ülkeler",
    "yurtdışında kolay iş bulmak 2026",
    "türk vatandaşı çalışma izni kolay",
    "almanya iş bulmak kolay mı",
    "yurtdışı iş fırsatları türkler",
    "en kolay çalışma izni 2026",
    "türklere kolay vize veren ülkeler iş",
    "yurtdışında iş bulmak hangi ülke",
    "avrupa iş ilanları türk",
  ],
  openGraph: {
    title: "En Kolay İş Bulunan Ülkeler 2026 — Türkler İçin Sıralı Liste",
    description:
      "Almanya mı, Dubai mi, Gürcistan mı? 2026'da Türk vatandaşları için en erişilebilir 10 ülke — gerçek verilerle.",
    locale: "tr_TR",
    type: "article",
  },
  alternates: {
    canonical: "/blog/en-kolay-is-bulunan-ulkeler",
  },
};

// ─── LSI KEYWORDS ─────────────────────────────────────────────────────────────
// en kolay iş bulunan ülkeler | kolay çalışma izni | türkler için yurtdışı iş
// almanya iş fırsatları | dubai çalışmak | gürcistan freelance
// polonya çalışma izni | hollanda iş bulmak | estonya dijital göçebe
// yurtdışı iş başvurusu | çalışma vizesi kolay ülkeler 2026

// ─── SCHEMAS ──────────────────────────────────────────────────────────────────

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Türkler için en kolay iş bulunan ülke hangisi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2026 verilerine göre Almanya, 3 milyonu aşkın Türk diasporası, sürekli açık pozisyonlar ve Chancen Karte sistemiyle en erişilebilir seçenek. Dubai ise iş teklifi alındığında birkaç hafta içinde çözülen vize süreciyle ikinci sırada geliyor. Gürcistan ise vizesiz 365 gün kalma hakkıyla freelance çalışanlar için tartışmasız birinci.",
      },
    },
    {
      "@type": "Question",
      name: "Almanya'da iş bulmak gerçekten kolay mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teknik meslekler, sağlık ve inşaat gibi sektörlerde evet. Almanya'da 500.000'i aşkın bakım sektörü açığı var. Chancen Karte (Fırsat Kartı) sistemiyle iş teklifi olmadan bile 1 yıl süreyle ülkeye girip iş arayabiliyorsunuz. A2–B1 düzeyi Almanca çoğu mavi yaka pozisyon için yeterli.",
      },
    },
    {
      "@type": "Question",
      name: "Dubai'de Türk olarak çalışmak ne kadar sürer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İşveren sponsorluğuyla vize süreci genellikle 2–4 hafta içinde tamamlanıyor. Dubai'deki Türk topluluğu güçlü, İngilizce yeterli ve vergi yok. Aylık net maaş 1.800–4.000 Euro aralığında değişiyor. En büyük dezavantaj: kira ve yaşam maliyeti yüksek.",
      },
    },
    {
      "@type": "Question",
      name: "Polonya'da çalışma izni ne kadar sürede çıkıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Polonya, tır şoförü ve lojistik sektöründe çalışma iznini 45 gün gibi kısa sürede veriyor. Vize başvurusu da 15 gün içinde sonuçlanabiliyor. Üretim ve depo sektörlerinde Türk işçilere yüksek talep var. Aylık net maaş 1.200–1.800 Euro aralığında.",
      },
    },
    {
      "@type": "Question",
      name: "Gürcistan'da çalışmak için vize gerekiyor mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır. Türk vatandaşları Gürcistan'da 365 gün boyunca vizesiz kalabiliyor. Tiflis ve Batum özellikle freelance çalışanlar için popüler. Yaşam maliyeti Türkiye'den düşük, internet altyapısı güçlü. Dezavantaj: yerel maaşlar düşük (800–1.200 Euro), bu nedenle en çok uzaktan çalışanlara uyuyor.",
      },
    },
    {
      "@type": "Question",
      name: "Yurtdışında iş başvurusu için CV hangi dilde hazırlanmalı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hedef ülkenin diline göre değişiyor: Almanya için Almanca, Hollanda ve İrlanda için İngilizce, Dubai için İngilizce CV standart. Ülke dilini bilmesaniz bile CV'nin o dilde hazırlanmış olması başvurunuzu ciddiye aldırır. ATS uyumlu format şart: büyük şirketler başvuruları otomatik tarama sisteminden geçiriyor.",
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
      name: "En Kolay İş Bulunan Ülkeler",
      item: "https://siten.com/blog/en-kolay-is-bulunan-ulkeler",
    },
  ],
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

const COUNTRIES = [
  {
    rank: 1,
    name: "Almanya",
    flag: "🇩🇪",
    tagline: "Türklerin evi — ve hâlâ en büyük fırsat",
    why: "3 milyonu aşkın Türk diasporası, sürekli açık pozisyonlar, Chancen Karte ile iş teklifi olmadan 1 yıl iş arama hakkı. Teknik mesleklerde A2 Almanca yeterli.",
    avgNet: "2.200–3.500€",
    visaTime: "4–8 hafta",
    langReq: "A2–B1 Almanca",
    openJobs: "500.000+ bakım, inşaat, mühendislik",
    pro: "Chancen Karte, güçlü diaspora, yüksek maaş",
    con: "Almanca şartı, yüksek yaşam maliyeti",
    highlight: true,
    scoreBar: 95,
  },
  {
    rank: 2,
    name: "Dubai (BAE)",
    flag: "🇦🇪",
    tagline: "En hızlı vize, en az vergi",
    why: "İşveren sponsorluğuyla vize 2–4 haftada tamamlanıyor. Güçlü Türk topluluğu, vergi yok, inşaat ve finans sektöründe yoğun açık pozisyon.",
    avgNet: "1.800–4.000€",
    visaTime: "2–4 hafta",
    langReq: "İngilizce yeterli",
    openJobs: "İnşaat, turizm, finans, sağlık",
    pro: "Hızlı vize, vergi yok, yüksek maaş potansiyeli",
    con: "Yüksek kira, sponsora bağımlılık",
    highlight: false,
    scoreBar: 88,
  },
  {
    rank: 3,
    name: "Hollanda",
    flag: "🇳🇱",
    tagline: "İngilizce yeterli, maaşlar yükseliyor",
    why: "2026'da toplu iş sözleşmeleri kapsamında ücretler %4,5 arttı. İngilizce çalışılabilen nadir AB ülkelerinden biri. Lojistik, IT ve tarım sektöründe talep yüksek.",
    avgNet: "2.000–2.800€",
    visaTime: "6–10 hafta",
    langReq: "İngilizce yeterli",
    openJobs: "Lojistik, tarım, IT, gayrimenkul",
    pro: "İngilizce ortam, maaş artışı trendi, güçlü sosyal haklar",
    con: "Yüksek kira (Amsterdam 1.800€/ay)",
    highlight: false,
    scoreBar: 82,
  },
  {
    rank: 4,
    name: "Polonya",
    flag: "🇵🇱",
    tagline: "En hızlı çalışma izni Avrupa'da",
    why: "Tır şoförü ve lojistik pozisyonlarında çalışma izni 45 günde çıkabiliyor. Üretim ve depo sektöründe Türk işçilere yüksek talep var. Vize başvurusu 15 günde sonuçlanabiliyor.",
    avgNet: "1.200–1.800€",
    visaTime: "2–6 hafta",
    langReq: "Minimum dil şartı",
    openJobs: "Lojistik, üretim, inşaat, depo",
    pro: "Hızlı süreç, düşük yaşam maliyeti, AB kapısı",
    con: "Düşük maaş, soğuk iklim",
    highlight: false,
    scoreBar: 75,
  },
  {
    rank: 5,
    name: "Gürcistan",
    flag: "🇬🇪",
    tagline: "365 gün vizesiz — freelance cenneti",
    why: "Türk vatandaşları vizesiz 365 gün kalabiliyor. Tiflis ve Batum düşük yaşam maliyeti ve güçlü internet altyapısıyla freelance çalışanların gözdesi. Türkçeye yakın kültür.",
    avgNet: "800–1.400€ (yerel) / Uzaktan çalışanlar daha fazla",
    visaTime: "Vize yok",
    langReq: "Dil şartı yok",
    openJobs: "Turizm, inşaat, ticaret — freelance için sınırsız",
    pro: "Vizesiz 365 gün, çok düşük yaşam maliyeti, kültürel yakınlık",
    con: "Yerel maaşlar düşük, küçük ekonomi",
    highlight: false,
    scoreBar: 80,
  },
  {
    rank: 6,
    name: "Estonya",
    flag: "🇪🇪",
    tagline: "Dijital göçebenin AB adresi",
    why: "AB'nin en gelişmiş dijital devlet altyapısına sahip ülkesi. Freelance çalışanlar için Dijital Göçebe Vizesi mevcut. Yabancı bir işverene veya müşterilere hizmet verdiğinizi kanıtlamanız yeterli.",
    avgNet: "1.600–2.200€ (uzaktan çalışanlar için üst sınır yok)",
    visaTime: "4–8 hafta",
    langReq: "İngilizce yeterli",
    openJobs: "IT, finans, dijital hizmetler",
    pro: "AB üyesi, dijital altyapı, freelance dostu",
    con: "Küçük ekonomi, soğuk iklim",
    highlight: false,
    scoreBar: 70,
  },
  {
    rank: 7,
    name: "Portekiz",
    flag: "🇵🇹",
    tagline: "9 aya kadar iş arama vizesi",
    why: "İş arama amacıyla gelenlere 9 aya kadar geçici vize veriyor. Freelance çalışanlar için kolaylaştırılmış vize süreci. 5 yıl kalana sürekli oturum izni.",
    avgNet: "1.200–1.700€",
    visaTime: "4–6 hafta",
    langReq: "İngilizce yeterli (büyük şehirlerde)",
    openJobs: "Turizm, tarım, teknoloji",
    pro: "Sıcak iklim, dijital göçebe merkezi, AB",
    con: "Düşük maaş, Portekizce öğrenmek uzun vadede gerekli",
    highlight: false,
    scoreBar: 65,
  },
  {
    rank: 8,
    name: "Çekya",
    flag: "🇨🇿",
    tagline: "Avrupa'da en çok işçi arayan ülkelerden biri",
    why: "Avrupa'da işçi açığı en yüksek ülkelerden biri. Özellikle freelance çalışanlar tarafından tercih ediliyor. Prag, yüksek yaşam kalitesi ve makul maliyetiyle öne çıkıyor.",
    avgNet: "1.400–2.000€",
    visaTime: "4–8 hafta",
    langReq: "İngilizce yeterli (uluslararası şirketlerde)",
    openJobs: "Üretim, IT, lojistik, mühendislik",
    pro: "AB üyesi, işçi talebi yüksek, makul yaşam maliyeti",
    con: "Çekçe uzun vadede gerekebilir",
    highlight: false,
    scoreBar: 68,
  },
  {
    rank: 9,
    name: "Sırbistan",
    flag: "🇷🇸",
    tagline: "90 gün vizesiz, Avrupa kapısında",
    why: "Türk vatandaşları 90 gün vizesiz kalabiliyor. Belgrad, Avrupa'ya yakınlığı ve düşük yaşam maliyetiyle dijital göçebeler arasında popüler. AB adayı statüsü uzun vadede avantaj.",
    avgNet: "800–1.400€",
    visaTime: "Vize yok (90 gün)",
    langReq: "İngilizce büyük şehirlerde yeterli",
    openJobs: "IT, inşaat, turizm",
    pro: "Vizesiz giriş, düşük maliyet, AB yolunda",
    con: "Düşük maaş, AB üyesi değil",
    highlight: false,
    scoreBar: 58,
  },
  {
    rank: 10,
    name: "Kanada",
    flag: "🇨🇦",
    tagline: "Uzun soluklu en iyi seçenek",
    why: "2024–2026 arası yılda 500.000 göçmen hedefi var. Express Entry ve LMIA sistemiyle nitelikli işçilere geniş fırsatlar. Uzun süreç ama kalıcı ikamet yolu en güçlü.",
    avgNet: "2.400–3.800€ (CAD bağlı)",
    visaTime: "3–12 ay",
    langReq: "İngilizce (CLB 5–7)",
    openJobs: "Teknoloji, sağlık, mühendislik, tarım",
    pro: "Kalıcı ikamet, yüksek yaşam kalitesi, çok kültürlü",
    con: "Uzun süreç, dil şartı sıkı, soğuk iklim",
    highlight: false,
    scoreBar: 72,
  },
];

// ─── IMAGES ───────────────────────────────────────────────────────────────────
const HERO_IMG =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=80";
const MAP_IMG =
  "https://images.unsplash.com/photo-1650526087824-163941841b52?w=900&q=80";
const TEAM_IMG =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80";

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function EnKolayIsUlkeler() {
  return (
    <div
      className="bg-[#F8F9FC] text-[#1B2B4A]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&display=swap');`}</style>

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
            alt="Yurtdışında iş fırsatları"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F1D33] via-[#1B2B4A]/10 to-[#0F1D33]/80" />
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-xs font-semibold bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-3 py-1 rounded-full uppercase tracking-wider">
                  2026 Güncel
                </span>
                <span className="text-xs bg-white/10 border border-white/15 text-white/60 px-3 py-1 rounded-full">
                  Türkler için sıralı liste
                </span>
              </div>
              <h1
                className="text-4xl lg:text-5xl text-white leading-[1.12] mb-5"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                En Kolay İş Bulunan
                <br />
                <span className="italic text-[#7eb8f7]">10 Ülke</span>
                <br />
                <span className="text-3xl lg:text-4xl text-white/70">
                  (Türkler İçin)
                </span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed max-w-lg mb-8">
                Almanya mı, Dubai mi, Gürcistan mı? 2026 verileriye en kolay iş
                bulunan ülkeleri vize süresi, ortalama maaş ve dil şartıyla
                sıraladık.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "10 ülke analizi" },
                  { label: "Gerçek maaş verileri" },
                  { label: "7 dk okuma" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7eb8f7]" />
                    <span className="text-white/60 text-sm">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex flex-col gap-3">
              {[
                { num: "10", label: "ülke incelendi" },
                { num: "3M+", label: "Türk Almanya'da" },
                { num: "365", label: "gün vizesiz Gürcistan" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-center min-w-[160px]"
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
            En Kolay İş Bulunan Ülkeler
          </span>
        </nav>

        {/* ── GİRİŞ ── */}
        <section className="mb-10">
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">
            Her yıl binlerce Türk vatandaşı aynı soruyu soruyor:{" "}
            <strong className="text-[#1B2B4A]">
              "En kolay iş bulunan ülke neresi?"
            </strong>{" "}
            Ama bu sorunun tek bir cevabı yok.
          </p>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">
            Mühendis misiniz? Almanya. Sürücü müsünüz? Polonya. Freelance
            çalışıyor musunuz? Gürcistan veya Estonya. Her profil için en kolay
            ülke farklı.
          </p>
          <p className="text-[15px] text-[#4A5568] leading-relaxed">
            Aşağıdaki liste sizi karıştırmak için değil, doğru seçimi yapmanız
            için hazırlandı. Vize süresi, ortalama maaş, dil şartı ve açık
            pozisyon sayısına göre sıraladık.
          </p>
        </section>

        {/* ── HIZLI ÖZET TABLOSU ── */}
        <section className="mb-14">
          <h2
            className="text-2xl lg:text-3xl text-[#1B2B4A] leading-tight mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Hızlı Özet: Hangi Ülke, Hangi Profile Uygun?
          </h2>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-4">
            <div className="hidden sm:grid grid-cols-[100px_1fr_100px_110px] gap-2 px-5 py-3 bg-[#1B2B4A] text-white text-xs font-semibold uppercase tracking-wider">
              <span>Ülke</span>
              <span>Kim için?</span>
              <span>Vize</span>
              <span>Net Maaş</span>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                {
                  flag: "🇩🇪",
                  country: "Almanya",
                  who: "Teknik meslek, sağlık, mühendislik",
                  visa: "4–8 hafta",
                  salary: "2.200–3.500€",
                },
                {
                  flag: "🇦🇪",
                  country: "Dubai",
                  who: "İnşaat, finans, turizm",
                  visa: "2–4 hafta",
                  salary: "1.800–4.000€",
                },
                {
                  flag: "🇳🇱",
                  country: "Hollanda",
                  who: "IT, lojistik, tarım",
                  visa: "6–10 hafta",
                  salary: "2.000–2.800€",
                },
                {
                  flag: "🇵🇱",
                  country: "Polonya",
                  who: "Sürücü, depo, üretim",
                  visa: "2–6 hafta",
                  salary: "1.200–1.800€",
                },
                {
                  flag: "🇬🇪",
                  country: "Gürcistan",
                  who: "Freelance, uzaktan çalışan",
                  visa: "Vize yok",
                  salary: "800–1.400€+",
                },
                {
                  flag: "🇪🇪",
                  country: "Estonya",
                  who: "Dijital göçebe, IT",
                  visa: "4–8 hafta",
                  salary: "1.600–2.200€",
                },
                {
                  flag: "🇵🇹",
                  country: "Portekiz",
                  who: "Freelance, tarım, turizm",
                  visa: "4–6 hafta",
                  salary: "1.200–1.700€",
                },
                {
                  flag: "🇨🇦",
                  country: "Kanada",
                  who: "Mühendis, sağlık, IT",
                  visa: "3–12 ay",
                  salary: "2.400–3.800€",
                },
              ].map((row, i) => (
                <div
                  key={row.country}
                  className={`grid sm:grid-cols-[100px_1fr_100px_110px] gap-2 px-5 py-3.5 items-center ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  }`}
                >
                  <span className="font-semibold text-sm text-[#1B2B4A]">
                    {row.flag} {row.country}
                  </span>
                  <span className="text-[13px] text-[#5A6A82]">{row.who}</span>
                  <span className="text-[13px] text-[#1B2B4A] font-medium">
                    {row.visa}
                  </span>
                  <span className="text-[13px] font-bold text-emerald-700">
                    {row.salary}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-slate-400">
            Veriler 2026 itibarıyla günceldir. Maaşlar net ortalama aralık olup
            sektöre ve deneyime göre değişir.
          </p>
        </section>

        <div className="h-px bg-slate-200 mb-14" />

        {/* ── ÜLKE DETAYLARI ── */}
        <section className="mb-14">
          <h2
            className="text-2xl lg:text-3xl text-[#1B2B4A] leading-tight mb-2"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Sıralı Liste: En Kolay İş Bulunan 10 Ülke
          </h2>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-10">
            Sıralama; vize kolaylığı, açık pozisyon sayısı, Türk diasporası
            büyüklüğü ve dil engeli dikkate alınarak yapılmıştır.
          </p>

          <div className="flex flex-col gap-6">
            {COUNTRIES.map((c) => (
              <div
                key={c.rank}
                className={`bg-white rounded-2xl border-2 overflow-hidden transition-all hover:shadow-lg hover:shadow-slate-100 ${
                  c.highlight ? "border-[#4A7BC8]" : "border-slate-200"
                }`}
              >
                {/* Card header */}
                <div
                  className={`px-6 py-4 flex items-center gap-4 ${
                    c.highlight ? "bg-[#EBF2FF]" : "bg-slate-50"
                  }`}
                >
                  <span
                    className="text-4xl text-slate-200 font-bold leading-none w-12 flex-shrink-0"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {String(c.rank).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xl">{c.flag}</span>
                      <h3
                        className="text-xl font-bold text-[#1B2B4A]"
                        style={{ fontFamily: "'DM Serif Display', serif" }}
                      >
                        {c.name}
                      </h3>
                      {c.highlight && (
                        <span className="text-[10px] font-bold bg-[#4A7BC8] text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
                          En Popüler
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] text-[#5A6A82] italic">
                      {c.tagline}
                    </p>
                  </div>
                  {/* Score bar */}
                  <div className="hidden sm:flex flex-col items-end gap-1 flex-shrink-0">
                    <span className="text-xs text-slate-400 font-medium">
                      Erişim Skoru
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            c.scoreBar >= 90
                              ? "bg-emerald-500"
                              : c.scoreBar >= 75
                              ? "bg-[#4A7BC8]"
                              : c.scoreBar >= 60
                              ? "bg-amber-500"
                              : "bg-slate-400"
                          }`}
                          style={{ width: `${c.scoreBar}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-[#1B2B4A]">
                        {c.scoreBar}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="px-6 py-5">
                  <p className="text-[14.5px] text-[#4A5568] leading-relaxed mb-4">
                    {c.why}
                  </p>

                  {/* Stats row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    {[
                      {
                        label: "Ort. Net Maaş",
                        value: c.avgNet,
                        color: "text-emerald-700",
                      },
                      {
                        label: "Vize Süresi",
                        value: c.visaTime,
                        color: "text-[#4A7BC8]",
                      },
                      {
                        label: "Dil Şartı",
                        value: c.langReq,
                        color: "text-[#1B2B4A]",
                      },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-slate-50 rounded-xl px-3 py-2.5"
                      >
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                          {stat.label}
                        </p>
                        <p
                          className={`text-[13px] font-semibold leading-tight ${stat.color}`}
                        >
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Pro / Con */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
                      <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1.5">
                        Avantaj
                      </p>
                      <p className="text-[13px] text-emerald-700 leading-relaxed">
                        {c.pro}
                      </p>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      <p className="text-[10px] font-bold text-red-500 uppercase tracking-wider mb-1.5">
                        Dezavantaj
                      </p>
                      <p className="text-[13px] text-red-600 leading-relaxed">
                        {c.con}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── H2: PROFİL BAZLI ÖNERİ ── */}
        <section className="mb-14">
          <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-start">
            <div className="relative rounded-2xl overflow-hidden h-72 hidden lg:block">
              <Image
                src={TEAM_IMG}
                alt="Yurtdışında çalışma ortamı"
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
                Durumunuza Göre Hangi Ülke?
              </h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">
                "En kolay" cevabı herkese göre değişiyor. İşte profilinize göre
                en uygun seçenekler:
              </p>
              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: "🔧",
                    profile: "Teknik meslek (kaynakçı, teknisyen, CNC)",
                    best: "Almanya, Hollanda, Polonya",
                    why: "Sürekli açık pozisyon, dil şartı düşük, iyi maaş.",
                  },
                  {
                    icon: "💻",
                    profile: "Yazılımcı / IT uzmanı",
                    best: "Hollanda, Estonya, Çekya",
                    why: "İngilizce ortam, AB üyesi, yüksek maaş potansiyeli.",
                  },
                  {
                    icon: "🏥",
                    profile: "Sağlık çalışanı (hemşire, bakım)",
                    best: "Almanya",
                    why: "500.000+ açık pozisyon, güçlü kariyer yolu, iyi maaş.",
                  },
                  {
                    icon: "🚛",
                    profile: "TIR şoförü / lojistik",
                    best: "Polonya, Almanya",
                    why: "45 günde izin çıkabiliyor, talep yüksek.",
                  },
                  {
                    icon: "🖥️",
                    profile: "Freelance / uzaktan çalışan",
                    best: "Gürcistan, Estonya, Portekiz",
                    why: "Vizesiz uzun kalış, düşük maliyet, esnek yaşam.",
                  },
                  {
                    icon: "🎓",
                    profile: "Yeni mezun / deneyimsiz",
                    best: "Polonya, Gürcistan, Portekiz",
                    why: "Deneyim şartı düşük sektörler, başlangıç için uygun.",
                  },
                ].map((item) => (
                  <div
                    key={item.profile}
                    className="flex gap-4 bg-white border border-slate-200 rounded-xl px-5 py-4 hover:border-[#4A7BC8]/40 transition-colors"
                  >
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-[#1B2B4A] text-sm mb-0.5">
                        {item.profile}
                      </p>
                      <p className="text-[13px] text-[#4A7BC8] font-semibold mb-0.5">
                        {item.best}
                      </p>
                      <p className="text-[13px] text-[#5A6A82]">{item.why}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── H2: NASIL BAŞLANIR ── */}
        <section className="mb-14">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
            <div>
              <h2
                className="text-2xl lg:text-3xl text-[#1B2B4A] leading-tight mb-4"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Nereden Başlamalı? 4 Adım
              </h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">
                Liste güzel ama harekete geçmeden değeri yok. İşte pratik
                başlangıç adımları:
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    step: "01",
                    title: "Profilinizi belirleyin",
                    desc: "Mesleğiniz, deneyim süreniz ve dil seviyeniz üçgeni sizi doğru ülkeye yönlendirir. Yukarıdaki profil tablosunu referans alın.",
                  },
                  {
                    step: "02",
                    title: "Hedef ülkenin CV formatını öğrenin",
                    desc: "Almanya için Almanca, Hollanda ve Dubai için İngilizce CV gerekiyor. Ülkenin normlarına uymayan CV ilk elemeyi geçemiyor.",
                  },
                  {
                    step: "03",
                    title: "Vize koşullarını araştırın",
                    desc: "Her ülkenin çalışma vizesi şartları farklı. Almanya Chancen Karte, Portekiz iş arama vizesi, Estonya Dijital Göçebe Vizesi — hangisi size uygun?",
                  },
                  {
                    step: "04",
                    title: "Başvuruyu yapın",
                    desc: "LinkedIn, StepStone (Almanya), Nationale Vacaturebank (Hollanda), Indeed ve doğrudan şirket kariyer sayfaları en etkili kanallar. İlk başvuru için hedef dilde, ATS uyumlu CV şart.",
                  },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="flex gap-4 bg-white border border-slate-200 rounded-xl px-5 py-4"
                  >
                    <span
                      className="text-3xl text-slate-100 leading-none select-none flex-shrink-0 w-9"
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
            <div className="relative rounded-2xl overflow-hidden h-80 hidden lg:block">
              <Image
                src={MAP_IMG}
                alt="Dünya haritası kariyer"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B4A]/30 to-transparent" />
            </div>
          </div>
        </section>

        {/* ── H2: GERÇEK MALİYET ── */}
        <section className="mb-14">
          <h2
            className="text-2xl lg:text-3xl text-[#1B2B4A] leading-tight mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Yurtdışına Çıkmak Ne Kadara Mal Olur? (2026 Gerçek Maliyet)
          </h2>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">
            Herkes maaşı konuşuyor, kimse başlangıç maliyetini söylemiyor. İşte
            Almanya ve Dubai için gerçekçi bütçe:
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                country: "Almanya (teknik meslek)",
                items: [
                  {
                    name: "Dil kursu A1–B1 (6–10 ay)",
                    cost: "3.000–8.000 ₺/ay",
                  },
                  { name: "Diploma denklik belgesi", cost: "500–2.000€" },
                  { name: "Çalışma vizesi harcı", cost: "75€" },
                  { name: "Uçak bileti (tek yön)", cost: "100–300€" },
                  { name: "İlk ay kira + depozito", cost: "1.500–3.000€" },
                  { name: "Toplam başlangıç", cost: "~3.000–6.000€" },
                ],
                color: "bg-[#1B2B4A]",
              },
              {
                country: "Dubai (orta becerili)",
                items: [
                  {
                    name: "İşveren sponsorlu vize",
                    cost: "Genellikle işveren öder",
                  },
                  { name: "Uçak bileti (tek yön)", cost: "150–400€" },
                  { name: "İlk ay kira + depozito", cost: "1.500–3.000€" },
                  { name: "Sağlık sigortası", cost: "Genellikle işveren öder" },
                  { name: "Toplam başlangıç", cost: "~2.000–4.000€" },
                ],
                color: "bg-[#2E4A7A]",
              },
            ].map((col) => (
              <div
                key={col.country}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
              >
                <div className={`px-5 py-4 ${col.color}`}>
                  <p className="text-white font-semibold text-sm">
                    {col.country}
                  </p>
                </div>
                <div className="divide-y divide-slate-100">
                  {col.items.map((item, i) => (
                    <div
                      key={i}
                      className={`flex justify-between px-5 py-3 ${
                        i === col.items.length - 1
                          ? "bg-slate-50 font-bold"
                          : ""
                      }`}
                    >
                      <span className="text-[13px] text-[#3A4A60]">
                        {item.name}
                      </span>
                      <span
                        className={`text-[13px] ml-3 flex-shrink-0 ${
                          i === col.items.length - 1
                            ? "text-[#4A7BC8] font-bold"
                            : "text-[#1B2B4A]"
                        }`}
                      >
                        {item.cost}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
            Sonuç: En Kolay Ülke, En Uygun Ülke Değil
          </h2>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">
            En kolay iş bulunan ülke sizin için en kolay olmayabilir. Almanya
            teknik meslekler için mükemmel ama 6–12 ay dil kursu gerektiriyor.
            Dubai hızlı ama sponsora bağımlı. Gürcistan vizesiz ama yerel
            maaşlar düşük.
          </p>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">
            Doğru soru şu:{" "}
            <strong className="text-[#1B2B4A]">
              "Hangi ülke benim profilime en uygun ve oraya ulaşmak için en az
              engel var?"
            </strong>
          </p>
          <p className="text-[15px] text-[#4A5568] leading-relaxed">
            Bu soruyu cevapladıktan sonra tek yapmanız gereken doğru belgelerle
            başvurmak. İlk adım doğru bir CV — hedef dilde, ATS uyumlu.
          </p>
        </section>

        {/* ── CTA ── */}
        <div className="bg-gradient-to-br from-[#1B2B4A] to-[#2E4A7A] rounded-3xl p-8 lg:p-12 mb-16">
          <h2
            className="text-2xl lg:text-3xl text-white leading-tight mb-3"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            İlk Adımı Atın: Puanınızı Hesaplayın
          </h2>
         {/*  <p className="text-white/60 text-[15px] leading-relaxed mb-6 max-w-lg">
            Almanca, İngilizce veya 5 farklı dilde ATS uyumlu CV ve motivasyon
            mektubu. 48 saat içinde teslim.
          </p> */}
          <div className="flex flex-wrap gap-3">
            <a
              href="/araclar/almanya-chancen-karte-puan-hesaplama"
              className="inline-flex items-center gap-2 bg-[#4A7BC8] hover:bg-[#3A6AB8] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Almanya Chancen Karte Hesapla
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
              href="/blog/avrupa-maaslari-2026"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all"
            >
              Avrupa Maaşları 2026
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
