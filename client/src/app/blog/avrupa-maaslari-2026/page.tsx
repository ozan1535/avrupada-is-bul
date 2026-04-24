import type { Metadata } from "next";

// ─── SEO METADATA ────────────────────────────────────────────────────────────
// Title: 57 karakter
// Description: 155 karakter
// Slug: /blog/avrupa-maaslari-2026

export const metadata: Metadata = {
  title: "Avrupa Maaşları 2026: Ülke Ülke Güncel Liste",
  description:
    "Avrupa maaşları 2026 güncel verilerle: Almanya'dan İsviçre'ye net ve brüt maaş karşılaştırması, yaşam maliyeti analizi ve hangi ülkede ne kadar kazanırsınız?",
  keywords: [
    "avrupa maaşları 2026",
    "avrupa ülkeleri maaş karşılaştırması",
    "almanya ortalama maaş 2026",
    "avrupa net maaş",
    "avrupa asgari ücret 2026",
    "hangi avrupa ülkesinde daha fazla kazanılır",
    "avrupa çalışma maaşları",
    "schengen ülkeleri maaş",
    "avrupa yaşam maliyeti maaş",
    "türk vatandaşı avrupa maaş",
  ],
  openGraph: {
    title: "Avrupa Maaşları 2026: Ülke Ülke Güncel Liste",
    description:
      "Almanya, Hollanda, İsveç, İsviçre ve daha fazlası — 2026 güncel verileriyle Avrupa'da ne kadar kazanılır?",
    locale: "tr_TR",
    type: "article",
  },
  alternates: {
    canonical: "/blog/avrupa-maaslari-2026",
  },
};

// ─── LSI / KEYWORD VARYASYONLARI ─────────────────────────────────────────────
// avrupa maaşları 2026 | avrupa ülkeleri ücret karşılaştırması | avrupa net maaş
// almanya maaş 2026 | hollanda maaş 2026 | isviçre maaş 2026
// avrupa asgari ücret | avrupa yaşam maliyeti | avrupa çalışma izni maaş
// yurt dışı maaş karşılaştırması | avrupa'da ortalama gelir

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "2026'da Avrupa'da en yüksek maaş hangi ülkede ödeniyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2026 verilerine göre İsviçre, aylık net ortalama ~4.400 Euro ile Avrupa'nın en yüksek maaş ödeme ülkesi konumunda. Lüksemburg ve Norveç de ilk üçte yer alıyor. Ancak yaşam maliyeti de bu ülkelerde yüksek olduğundan satın alma gücü bazlı değerlendirme yapılması önemli.",
      },
    },
    {
      "@type": "Question",
      name: "Avrupa'da brüt maaştan ne kadar kesinti yapılıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ülkeye ve gelir düzeyine göre değişmekle birlikte ortalama kesinti oranı %30–45 arasında seyrediyor. Almanya'da brüt 3.500 Euro kazanan biri yaklaşık 2.200–2.300 Euro net alırken, İsveç'te %50'ye yakın kesinti yapılabiliyor; ancak bu ülkelerde sağlık, eğitim ve sosyal güvenlik ücretsiz ya da çok düşük maliyetli.",
      },
    },
    {
      "@type": "Question",
      name: "Türk vatandaşları Avrupa'da çalışmak için ne kadar maaş alabilir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sektör ve deneyime göre büyük fark var. Almanya'da nitelikli bir mühendis yıllık brüt 60.000–80.000 Euro kazanabilirken, giriş seviyesi pozisyonlarda yıllık brüt 28.000–35.000 Euro daha yaygın. Çalışma iznini kolaylaştıran Chancen Karte (Almanya Fırsat Kartı) gibi yollarla iş arama sürecine başlanabilir.",
      },
    },
    {
      "@type": "Question",
      name: "Avrupa'da hangi sektörler en yüksek maaşı ödüyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2026 itibarıyla yazılım/IT, finans, mühendislik (özellikle otomotiv ve makine), sağlık ve enerji sektörleri en yüksek maaşları sunuyor. Almanya'da bir yazılım mühendisi yıllık brüt 65.000–90.000 Euro, finans profesyoneli ise 55.000–85.000 Euro arasında kazanabiliyor.",
      },
    },
    {
      "@type": "Question",
      name: "Avrupa'da net maaşı hesaplamak için ne yapmak gerekiyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Her ülkenin vergi dilimleri ve sosyal güvenlik kesintileri farklı olduğundan ülke bazlı hesaplama yapmak gerekiyor. Almanya için 'Brutto Netto Rechner', Hollanda için 'Loonbelasting hesaplama' araçları kullanılabilir. Genel kural olarak brüt maaşın %60–70'ini net gelir olarak düşünmek makul bir başlangıç noktası.",
      },
    },
    {
      "@type": "Question",
      name: "Avrupa'da yaşam maliyeti maaşla orantılı mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Büyük şehirlerde kira maaşın önemli bir bölümünü götürüyor. Münih'te ortalama kira 1.500 Euro/ay, Amsterdam'da 1.800 Euro/ay, Cenevre'de 2.200 Euro/ay civarında. Bu nedenle sadece brüt maaşa değil, yaşam maliyeti düşüldükten sonra kalan tasarruf miktarına bakılması gerekiyor.",
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
      name: "Avrupa Maaşları 2026",
      item: "https://siten.com/blog/avrupa-maaslari-2026",
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const SALARY_TABLE = [
  {
    country: "İsviçre",
    flag: "🇨🇭",
    minWage: "Yasal yok (kant. 3.700€+)",
    avgBrut: "~5.600€",
    avgNet: "~4.400€",
    note: "En yüksek ortalama maaş",
  },
  {
    country: "Lüksemburg",
    flag: "🇱🇺",
    minWage: "2.704€",
    avgBrut: "~5.000€",
    avgNet: "~3.200€",
    note: "AB'de en yüksek asgari ücret",
  },
  {
    country: "Norveç",
    flag: "🇳🇴",
    minWage: "Sektörel (yüksek)",
    avgBrut: "~4.800€",
    avgNet: "~3.100€",
    note: "Schengen üyesi, AB dışı",
  },
  {
    country: "Danimarka",
    flag: "🇩🇰",
    minWage: "Sektörel (yüksek)",
    avgBrut: "~4.600€",
    avgNet: "~2.900€",
    note: "Yüksek vergi, güçlü sosyal sistem",
  },
  {
    country: "İsveç",
    flag: "🇸🇪",
    minWage: "Sektörel",
    avgBrut: "~4.000€",
    avgNet: "~2.600€",
    note: "Yüksek vergi oranı (~%50)",
  },
  {
    country: "Hollanda",
    flag: "🇳🇱",
    minWage: "~2.200–2.300€",
    avgBrut: "~3.250€",
    avgNet: "~2.500€",
    note: "2026/Q1'de %4,5 artış",
  },
  {
    country: "Almanya",
    flag: "🇩🇪",
    minWage: "~2.224€ (13,90€/sa)",
    avgBrut: "~3.500€",
    avgNet: "~2.300€",
    note: "Sektöre göre büyük fark",
  },
  {
    country: "Belçika",
    flag: "🇧🇪",
    minWage: "~1.800–2.000€",
    avgBrut: "~3.400€",
    avgNet: "~2.200€",
    note: "Yüksek sosyal katkı payı",
  },
  {
    country: "İrlanda",
    flag: "🇮🇪",
    minWage: "~2.300–2.500€",
    avgBrut: "~3.600€",
    avgNet: "~2.400€",
    note: "IT sektöründe yüksek maaş",
  },
  {
    country: "Fransa",
    flag: "🇫🇷",
    minWage: "~1.700–1.900€",
    avgBrut: "~3.180€",
    avgNet: "~2.100€",
    note: "SMIC: ~11–12€/saat",
  },
  {
    country: "İspanya",
    flag: "🇪🇸",
    minWage: "1.381€",
    avgBrut: "~2.400€",
    avgNet: "~1.750€",
    note: "Madrid/Barcelona'da daha yüksek",
  },
  {
    country: "İtalya",
    flag: "🇮🇹",
    minWage: "Yasal yok (sektörel)",
    avgBrut: "~2.300€",
    avgNet: "~1.600€",
    note: "Kuzey-güney farkı büyük",
  },
  {
    country: "Yunanistan",
    flag: "🇬🇷",
    minWage: "~1.027€",
    avgBrut: "~1.700€",
    avgNet: "~1.250€",
    note: "Son yıllarda artış trendi",
  },
  {
    country: "Polonya",
    flag: "🇵🇱",
    minWage: "~1.139€",
    avgBrut: "~1.800€",
    avgNet: "~1.350€",
    note: "IT sektöründe hızlı yükseliş",
  },
  {
    country: "Portekiz",
    flag: "🇵🇹",
    minWage: "~1.073€",
    avgBrut: "~1.700€",
    avgNet: "~1.300€",
    note: "Uzaktan çalışan destinasyonu",
  },
];

const SECTOR_TABLE = [
  {
    sector: "Yazılım / IT",
    country: "Almanya",
    brut: "5.500–7.500€",
    net: "3.200–4.500€",
  },
  {
    sector: "Mühendislik (Makine/Elektrik)",
    country: "Almanya",
    brut: "4.500–5.500€",
    net: "2.900–3.500€",
  },
  {
    sector: "Finans / Bankacılık",
    country: "Lüksemburg",
    brut: "5.000–8.000€",
    net: "3.000–4.800€",
  },
  {
    sector: "Sağlık (Doktor)",
    country: "Norveç",
    brut: "7.000–10.000€",
    net: "4.200–5.800€",
  },
  {
    sector: "Hemşire / Bakım",
    country: "Almanya",
    brut: "2.800–3.500€",
    net: "1.900–2.400€",
  },
  {
    sector: "İnşaat / Teknik",
    country: "İsviçre",
    brut: "5.000–7.000€",
    net: "3.800–5.200€",
  },
  {
    sector: "Öğretmen",
    country: "Danimarka",
    brut: "4.200–5.500€",
    net: "2.700–3.400€",
  },
  {
    sector: "Lojistik / Sürücü",
    country: "Hollanda",
    brut: "2.500–3.200€",
    net: "1.900–2.400€",
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function AvrupaMaaslari2026() {
  return (
    <div
      className="bg-[#F8F9FC] text-[#1B2B4A]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&display=swap');`}</style>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <div className="max-w-[900px] mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-xs text-slate-400 mb-8"
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
            Avrupa Maaşları 2026
          </span>
        </nav>

        {/* Article header */}
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-semibold bg-[#EBF2FF] text-[#4A7BC8] px-3 py-1 rounded-full">
              Kariyer
            </span>
            <span className="text-xs font-semibold bg-[#EBF2FF] text-[#4A7BC8] px-3 py-1 rounded-full">
              Yurt Dışı
            </span>
            <span className="text-xs text-slate-400 px-3 py-1">
              Ocak 2026 · 8 dk okuma
            </span>
          </div>

          {/* H1 — TEK ADET */}
          <h1
            className="text-4xl lg:text-5xl text-[#1B2B4A] leading-[1.12] mb-5"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Avrupa Maaşları 2026:
            <br />
            <span className="italic text-[#4A7BC8]">
              Ülke Ülke Güncel Liste
            </span>
          </h1>

          <p className="text-lg text-[#4A5568] leading-relaxed max-w-2xl">
            Avrupa'da çalışmayı düşünüyorsanız doğru soruyu sormanız gerekiyor:
            brüt maaş değil, elinize geçen para ne kadar? 2026 güncel
            verileriye, 15 ülkenin net maaş, asgari ücret ve yaşam maliyeti
            karşılaştırmasını bir arada bulabilirsiniz.
          </p>
        </header>

        {/* Divider */}
        <div className="h-px bg-slate-200 mb-12" />

        {/* ── GİRİŞ ── */}
        <section className="mb-12">
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">
            Birisi size "Almanya'da maaşlar yüksek" dediğinde aklınıza hemen bir
            rakam geliyor. Ama o rakamın yarısından fazlasını vergi ve sosyal
            sigorta kesiyor. Geriye kalan parayla da kira, ulaşım ve market
            faturasını ödemeniz gerekiyor.
          </p>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">
            Bu yüzden Avrupa maaşlarını doğru anlamak için sadece brüt rakama
            bakmak yetmiyor. Net maaş, yaşam maliyeti ve satın alma gücünü
            birlikte değerlendirmek gerekiyor.
          </p>
          <p className="text-[15px] text-[#4A5568] leading-relaxed">
            Aşağıdaki tablolar ve analizler, 2026 yılı Eurostat verileri ve
            güncel ulusal kaynaklara dayanmaktadır.
          </p>
        </section>

        {/* ── H2: BRÜT NET FARK ── */}
        <section className="mb-14">
          <h2
            className="text-2xl lg:text-3xl text-[#1B2B4A] leading-tight mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Brüt ile Net Maaş Arasındaki Fark Neden Bu Kadar Büyük?
          </h2>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">
            Avrupa'daki çoğu ülkede brüt maaştan üç ana kesinti yapılır: gelir
            vergisi, sağlık sigortası ve emeklilik katkısı. Bu üç kalem
            birleşince toplam kesinti genellikle brüt maaşın yüzde 35 ile 50'si
            arasına düşüyor.
          </p>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">
            Örnek vermek gerekirse: Almanya'da{" "}
            <strong className="text-[#1B2B4A]">brüt 3.500 Euro</strong> kazanan
            bir mühendis, vergi ve sigorta kesintilerinin ardından eline
            yaklaşık{" "}
            <strong className="text-[#1B2B4A]">2.200–2.300 Euro net</strong>{" "}
            geçiriyor. İsveç'te ise brüt 4.000 Euro'dan net 2.400–2.600 Euro
            kalabiliyor; yüksek vergi oranına karşın ücretsiz sağlık ve eğitim
            bu farkı dengeliyor.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                label: "Almanya",
                brut: "3.500€",
                net: "2.300€",
                pct: "%34 kesinti",
              },
              {
                label: "İsveç",
                brut: "4.000€",
                net: "2.600€",
                pct: "%35 kesinti",
              },
              {
                label: "İsviçre",
                brut: "5.600€",
                net: "4.400€",
                pct: "%21 kesinti",
              },
            ].map((c) => (
              <div
                key={c.label}
                className="bg-white border border-slate-200 rounded-2xl p-5"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-[#4A7BC8] mb-3">
                  {c.label}
                </p>
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-xs text-slate-400">Brüt</span>
                  <span className="font-semibold text-[#1B2B4A]">{c.brut}</span>
                </div>
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-xs text-slate-400">Net</span>
                  <span
                    className="font-bold text-emerald-600 text-lg"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {c.net}
                  </span>
                </div>
                <span className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-full font-medium">
                  {c.pct}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── H2: ÜLKE BAZLI TABLO ── */}
        <section className="mb-14">
          <h2
            className="text-2xl lg:text-3xl text-[#1B2B4A] leading-tight mb-3"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            2026 Avrupa Maaşları: Ülke Ülke Karşılaştırma Tablosu
          </h2>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">
            Aşağıdaki tablo Eurostat 2026 verileri ve güncel ulusal kaynaklar
            baz alınarak hazırlanmıştır. Asgari ücretler brüt, ortalama maaşlar
            aylık net olarak gösterilmiştir.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            {/* Table header */}
            <div className="hidden sm:grid grid-cols-[180px_140px_120px_120px_1fr] gap-3 px-5 py-3 bg-[#1B2B4A] text-white text-xs font-semibold uppercase tracking-wider">
              <span>Ülke</span>
              <span>Asgari Ücret</span>
              <span>Ort. Brüt</span>
              <span>Ort. Net</span>
              <span>Not</span>
            </div>
            <div className="divide-y divide-slate-100">
              {SALARY_TABLE.map((row, i) => (
                <div
                  key={row.country}
                  className={`grid sm:grid-cols-[180px_140px_120px_120px_1fr] gap-2 sm:gap-3 px-5 py-4 items-center ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{row.flag}</span>
                    <span className="font-semibold text-[#1B2B4A] text-sm">
                      {row.country}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 sm:hidden">
                      Asgari:{" "}
                    </span>
                    <span className="text-sm text-[#5A6A82]">
                      {row.minWage}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 sm:hidden">
                      Brüt:{" "}
                    </span>
                    <span className="text-sm text-[#1B2B4A]">
                      {row.avgBrut}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 sm:hidden">
                      Net:{" "}
                    </span>
                    <span className="text-sm font-bold text-emerald-700">
                      {row.avgNet}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 leading-relaxed">
                    {row.note}
                  </span>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 bg-slate-50 border-t border-slate-200">
              <p className="text-xs text-slate-400 leading-relaxed">
                Kaynak: Eurostat 2026, Statistics Netherlands, Destatis
                (Almanya). Ortalama maaşlar tahmini olup sektör, deneyim ve
                şehre göre önemli ölçüde değişebilir.
              </p>
            </div>
          </div>
        </section>

        {/* ── H2: SEKTÖR BAZLI MAAŞLAR ── */}
        <section className="mb-14">
          <h2
            className="text-2xl lg:text-3xl text-[#1B2B4A] leading-tight mb-3"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Sektöre Göre Avrupa Maaşları: En Çok Kim Kazanıyor?
          </h2>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">
            Ülke ortalamaları yanıltıcı olabilir. Asıl belirleyici faktör hangi
            sektörde çalıştığınız. İşte 2026 itibarıyla en yüksek maaş veren
            sektörler ve ülkeler.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <div className="hidden sm:grid grid-cols-[1fr_140px_140px_130px] gap-3 px-5 py-3 bg-[#2E4A7A] text-white text-xs font-semibold uppercase tracking-wider">
              <span>Sektör</span>
              <span>En İyi Ülke</span>
              <span>Aylık Brüt</span>
              <span>Aylık Net</span>
            </div>
            <div className="divide-y divide-slate-100">
              {SECTOR_TABLE.map((row, i) => (
                <div
                  key={row.sector}
                  className={`grid sm:grid-cols-[1fr_140px_140px_130px] gap-2 sm:gap-3 px-5 py-4 items-center ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  }`}
                >
                  <span className="font-semibold text-sm text-[#1B2B4A]">
                    {row.sector}
                  </span>
                  <span className="text-sm text-[#5A6A82]">{row.country}</span>
                  <span className="text-sm text-[#1B2B4A]">{row.brut}</span>
                  <span className="text-sm font-bold text-emerald-700">
                    {row.net}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── H2: EN İYİ 3 ÜLKE DETAYLı ── */}
        <section className="mb-14">
          <h2
            className="text-2xl lg:text-3xl text-[#1B2B4A] leading-tight mb-8"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Türk Çalışanlar İçin En Cazip 3 Ülke
          </h2>

          {/* H3: Almanya */}
          <div className="mb-8">
            <h3
              className="text-xl text-[#1B2B4A] mb-3"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Almanya: Yüksek Talep, Güçlü Altyapı
            </h3>
            <p className="text-[15px] text-[#4A5568] leading-relaxed mb-3">
              Almanya'da ortalama çalışan maaşı sektöre göre değişmekle birlikte
              genelde 2.800–4.500 Euro brüt aralığındadır. Mühendislik, sağlık
              ve IT başta olmak üzere nitelikli iş gücüne yoğun talep var.
            </p>
            <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">
              2026 yılında Almanya'da saatlik asgari ücret brüt olarak 13,90
              Euro seviyesine çıkarıldı. Tam zamanlı asgari ücretli bir çalışan
              aylık yaklaşık 2.224 Euro brüt kazanıyor; net elde edilen ise
              1.300–1.450 Euro civarında.
            </p>
            <ul className="flex flex-col gap-2 ml-4">
              {[
                "IT sektöründe yıllık brüt 65.000–90.000 Euro mümkün",
                "Mühendislik pozisyonlarında aylık net ~2.900–3.700 Euro",
                "Sağlık sektöründe güçlü talep ve oturma izni kolaylığı",
                "Chancen Karte (Fırsat Kartı) ile iş teklifi olmadan girebilirsiniz",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-[14.5px] text-[#3A4A60] leading-relaxed"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4A7BC8] flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* H3: Hollanda */}
          <div className="mb-8">
            <h3
              className="text-xl text-[#1B2B4A] mb-3"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Hollanda: Dinamik İş Piyasası, Yüksek Ücret Artışı
            </h3>
            <p className="text-[15px] text-[#4A5568] leading-relaxed mb-3">
              2026 yılının ilk çeyreğinde Hollanda'da toplu iş sözleşmeleri
              kapsamında belirlenen saatlik ücretler yıllık bazda ortalama yüzde
              4,5 oranında yükseldi. Reel ücretler ise üst üste on çeyrektir
              artış gösteriyor — bu Avrupa'da nadir rastlanan bir tablo.
            </p>
            <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">
              Hollanda'da tam zamanlı bir çalışanın aylık ortalama maaşı 3.250
              Euro brüt, yaklaşık 2.500 Euro net. Amsterdam'da ortalama yıllık
              gelir 54.000 Euro seviyesinde.
            </p>
            <ul className="flex flex-col gap-2 ml-4">
              {[
                "Fintech ve teknoloji sektöründe yüksek maaş potansiyeli",
                "Uluslararası çalışanlara yönelik '30% ruling' vergi avantajı (belirli koşullarda)",
                "İngilizce ile çalışılabilen nadir AB ülkelerinden biri",
                "Gayrimenkul sektöründe 2026 Q1'de %8,1 ücret artışı",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-[14.5px] text-[#3A4A60] leading-relaxed"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4A7BC8] flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* H3: İsviçre */}
          <div className="mb-4">
            <h3
              className="text-xl text-[#1B2B4A] mb-3"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              İsviçre: Avrupa'nın En Yüksek Maaşları
            </h3>
            <p className="text-[15px] text-[#4A5568] leading-relaxed mb-3">
              İsviçre, Avrupa'da en yüksek ortalama maaşı sunan ülke konumunda.
              Yıllık brüt ortalama ücret 67.409 Euro seviyesinde gerçekleşiyor;
              bu rakam aylık net olarak yaklaşık 4.382 Euro'ya denk geliyor.
            </p>
            <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">
              Dikkat: İsviçre'de kira Cenevre'de aylık 2.200 Euro civarına
              ulaşıyor. Yüksek maaşa karşın yaşam maliyeti de en yüksek düzeyde.
            </p>
            <ul className="flex flex-col gap-2 ml-4">
              {[
                "Finans sektöründe yıllık brüt 100.000+ Euro mümkün",
                "Aktif iş gücünün %27'si yabancı uyruklu",
                "AB üyesi değil — ayrı çalışma izni gerekiyor",
                "Düşük vergi oranı (~%21) net maaşı yüksek tutuyor",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-[14.5px] text-[#3A4A60] leading-relaxed"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4A7BC8] flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── H2: YÜKSEK RİSK NOKTALARI ── */}
        <section className="mb-14">
          <h2
            className="text-2xl lg:text-3xl text-[#1B2B4A] leading-tight mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Yüksek Maaş = İyi Yaşam mı? Dikkat Edilmesi Gerekenler
          </h2>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">
            Brüt maaş rakamları yanıltıcı olabilir. Gerçek refahı anlamak için
            şu üç faktörü birlikte değerlendirin.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "Kira Maliyeti",
                desc: "Münih 1.500€, Amsterdam 1.800€, Cenevre 2.200€, Londra 2.500€/ay. Maaşın büyük bölümünü götürebilir.",
                color: "border-red-300 bg-red-50",
                textColor: "text-red-700",
              },
              {
                title: "Vergi Oranı",
                desc: "İsveç ve Danimarka'da %50'ye yakın kesinti. İsviçre ve Hollanda'da daha düşük. Aynı brüt maaş için net gelir çok farklı.",
                color: "border-amber-300 bg-amber-50",
                textColor: "text-amber-700",
              },
              {
                title: "Satın Alma Gücü",
                desc: "Polonya'da 1.350€ net maaş, Münih'te 2.300€ net maaştan daha rahat bir yaşam sunabilir. Yerel fiyatları araştırın.",
                color: "border-emerald-300 bg-emerald-50",
                textColor: "text-emerald-700",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border-2 p-5 ${item.color}`}
              >
                <p className={`font-bold text-sm mb-2 ${item.textColor}`}>
                  {item.title}
                </p>
                <p className="text-[13px] leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── H2: NASIL ÇALIŞMA İZNİ ALINIR ── */}
        <section className="mb-14">
          <h2
            className="text-2xl lg:text-3xl text-[#1B2B4A] leading-tight mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Avrupa'da Çalışmak İçin Ne Gerekiyor?
          </h2>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-6">
            Türk vatandaşları için çalışma izni almak ülkeye göre farklı
            koşullar gerektiriyor. En yaygın yollar şöyle:
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                num: "01",
                title: "İş Teklifi ile Çalışma Vizesi",
                desc: "En yaygın yol. İşverenin sponsorluğuyla alınan çalışma vizesi. Almanya, Hollanda, İsviçre gibi ülkelerde farklı süreç işliyor.",
              },
              {
                num: "02",
                title: "Almanya Chancen Karte (Fırsat Kartı)",
                desc: "İş teklifi olmadan Almanya'da iş arama hakkı tanıyan yeni sistem. Puan bazlı değerlendirme: nitelik, deneyim, yaş ve dil puanı hesaplanıyor.",
              },
              {
                num: "03",
                title: "AB Mavi Kartı",
                desc: "Yüksek vasıflı çalışanlar için hızlandırılmış çalışma izni. Minimum maaş eşiği var: 2026 itibarıyla Almanya'da yıllık brüt ~43.000 Euro.",
              },
              {
                num: "04",
                title: "Uzaktan Çalışma / Digital Nomad Vizesi",
                desc: "Portekiz, İspanya, Yunanistan ve diğer bazı AB ülkeleri, uzaktan çalışanlar için özel vize programları sunuyor.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex gap-4 bg-white border border-slate-200 rounded-xl px-5 py-4"
              >
                <span
                  className="text-3xl text-slate-100 leading-none select-none flex-shrink-0 w-10"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {item.num}
                </span>
                <div>
                  <p className="font-semibold text-[#1B2B4A] mb-1 text-[15px]">
                    {item.title}
                  </p>
                  <p className="text-[14px] text-[#5A6A82] leading-relaxed">
                    {item.desc}
                  </p>
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
            Sonuç: Hangi Ülke Size Uygun?
          </h2>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">
            2026 verilerine göre salt maaş açısından İsviçre, Lüksemburg ve
            Norveç öne çıkıyor. Ancak Türk çalışanlar için erişilebilirlik, dil
            bariyeri ve vize kolaylığı da önemli.
          </p>
          <p className="text-[15px] text-[#4A5568] leading-relaxed mb-4">
            Almanya, hem yüksek maaş hem de Chancen Karte gibi yeni göç yolları
            açısından en erişilebilir seçenek olmaya devam ediyor. Hollanda
            İngilizce çalışma ortamıyla öne çıkarken, İspanya ve Portekiz daha
            düşük maaşa karşın yaşam kalitesiyle dikkat çekiyor.
          </p>
          <p className="text-[15px] text-[#4A5568] leading-relaxed">
            Doğru kararı verebilmek için net maaşı, yaşam maliyetini ve çalışma
            iznini birlikte değerlendirin. Ardından başvuru sürecini başlatın.
          </p>
        </section>

        {/* ── CTA ── */}
        <div className="bg-gradient-to-br from-[#1B2B4A] to-[#2E4A7A] rounded-3xl p-8 lg:p-10">
          <h2
            className="text-2xl lg:text-3xl text-white leading-tight mb-3"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Avrupa'da İş Başvurusuna Hazır mısınız?
          </h2>
          <p className="text-white/60 text-[15px] leading-relaxed mb-6 max-w-lg">
            İngilizce veya Almanca CV ve motivasyon mektubunuz hazır olmalı.
            Yurt dışı başvurularına özel, ATS uyumlu, 48 saat teslim.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/blog/almanya-is-bulma-rehberi"
              className="inline-flex items-center gap-2 bg-[#4A7BC8] hover:bg-[#3A6AB8] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
            >
              Almanya'da İş Bulma Rehberi
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
              href="/schengen-vizesi-red-riski-tarama"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all"
            >
              Schengen Vizesi Red Riski Hesaplayıcı
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
