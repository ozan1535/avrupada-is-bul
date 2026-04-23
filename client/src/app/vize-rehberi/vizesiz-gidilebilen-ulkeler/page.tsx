import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Vizesiz Gidilebilen Ülkeler Listesi 2026 | Türk Vatandaşları İçin Tam Rehber",
  description:
    "2026 yılında Türk vatandaşlarının vizesiz seyahat edebileceği tüm ülkeler: Avrupa, Asya, Afrika, Amerika ve Okyanusya. Kalış süreleri, giriş koşulları ve seyahat ipuçlarıyla eksiksiz rehber.",
  keywords: [
    "vizesiz ülkeler 2026",
    "türk pasaportu vizesiz ülkeler",
    "vizesiz seyahat",
    "türk vatandaşı vizesiz gidilen ülkeler",
    "vizesiz avrupa ülkeleri",
    "vizesiz asya ülkeleri",
    "vizesiz afrika",
    "vizesiz güney amerika",
  ],
  alternates: {
    canonical: "/vize-rehberi/vizesiz-gidilebilen-ulkeler",
  },
  openGraph: {
    title: "Vizesiz Ülkeler Listesi 2026 | Türk Vatandaşları İçin Tam Rehber",
    description:
      "2026'da Türk pasaportuyla vizesiz gidebileceğiniz tüm ülkeler, kalış süreleri ve giriş koşulları.",
    type: "article",
    locale: "tr_TR",
  },
};

// ─── Veri ───────────────────────────────────────────────────────────────────

const avrupa = [
  { ulke: "Kuzey Makedonya", kapi: "Hayır", sure: "90 Gün (180 gün içinde)" },
  { ulke: "Arnavutluk", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Sırbistan", kapi: "Hayır", sure: "90 Gün (180 gün içinde)" },
  { ulke: "Bosna-Hersek", kapi: "Hayır", sure: "90 Gün (180 gün içinde)" },
  { ulke: "Karadağ", kapi: "Hayır", sure: "90 Gün (180 gün içinde)" },
  { ulke: "Kosova", kapi: "Hayır", sure: "90 Gün (180 gün içinde)" },
  { ulke: "Moldova", kapi: "Hayır", sure: "90 Gün" },
  {
    ulke: "Ukrayna",
    kapi: "Hayır (Kimlikle giriş yapılabilir)",
    sure: "90 Gün (180 gün içinde)",
  },
  { ulke: "Belarus", kapi: "Hayır (Belirli şartlarla*)", sure: "30 Gün" },
  { ulke: "KKTC", kapi: "Hayır (Kimlikle giriş yapılabilir)", sure: "90 Gün" },
];

const asya = [
  { ulke: "Ürdün", kapi: "Hayır", sure: "90 Gün (180 gün içinde)" },
  { ulke: "Azerbaycan", kapi: "Hayır (Kimlikle giriş)", sure: "90 Gün" },
  { ulke: "Gürcistan", kapi: "Hayır (Kimlikle giriş)", sure: "1 Yıl" },
  { ulke: "Kazakistan", kapi: "Hayır", sure: "30 Gün" },
  { ulke: "Kırgızistan", kapi: "Hayır", sure: "90 Gün (180 gün içinde)" },
  { ulke: "Katar", kapi: "Hayır", sure: "90 Gün (180 gün içinde)" },
  { ulke: "İran", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Lübnan", kapi: "Hayır", sure: "90 Gün (180 gün içinde)" },
  { ulke: "Özbekistan", kapi: "Hayır", sure: "30 Gün" },
  { ulke: "Moğolistan", kapi: "Hayır", sure: "30 Gün" },
  { ulke: "Japonya", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Güney Kore", kapi: "Hayır (K-ETA zorunlu*)", sure: "90 Gün" },
  { ulke: "Hong Kong (Çin ÖİB)", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Makao (Çin ÖİB)", kapi: "Hayır", sure: "30 Gün" },
  { ulke: "Singapur", kapi: "Hayır", sure: "30 Gün" },
  { ulke: "Malezya", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Filipinler", kapi: "Hayır", sure: "30 Gün" },
  { ulke: "Maldivler", kapi: "Evet (Kapıda)**", sure: "30 Gün" },
  { ulke: "Tayland", kapi: "Hayır", sure: "30 Gün" },
];

const afrika = [
  { ulke: "Fas", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Tunus", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Seyşeller", kapi: "Hayır (TA zorunlu*)", sure: "90 Gün" },
  { ulke: "Güney Afrika", kapi: "Evet (Sınırda)**", sure: "30 Gün" },
  { ulke: "Mauritius", kapi: "Hayır", sure: "30 Gün" },
  { ulke: "Botsvana", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Eswatini", kapi: "Hayır", sure: "30 Gün" },
  { ulke: "Gambiya", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Zambiya", kapi: "Hayır", sure: "30 Gün (90 güne uzatılabilir)" },
  { ulke: "Angola", kapi: "Hayır", sure: "30 Gün" },
  { ulke: "Sao Tome ve Principe", kapi: "Hayır", sure: "15 Gün" },
];

const guney_amerika = [
  { ulke: "Arjantin", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Antigua-Barbuda", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Brezilya", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Kolombiya", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Panama", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Guatemala", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Şili", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Peru", kapi: "Hayır", sure: "90 Gün (180 gün içinde)" },
  { ulke: "Uruguay", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Ekvador", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Bolivya", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Paraguay", kapi: "Hayır", sure: "90 Gün (180 gün içinde)" },
  { ulke: "Venezuela", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Kosta Rika", kapi: "Hayır", sure: "30 Gün (90 güne uzatılabilir)" },
  { ulke: "El Salvador", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Honduras", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Nikaragua", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Bahamalar", kapi: "Hayır", sure: "Süre belirtilmemiş" },
  { ulke: "Barbados", kapi: "Hayır", sure: "6 Ay" },
  { ulke: "Belize", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Dominika", kapi: "Hayır", sure: "21 Gün" },
  { ulke: "Jamaika", kapi: "Hayır", sure: "90 Gün" },
  {
    ulke: "Trinidad ve Tobago",
    kapi: "Hayır",
    sure: "90 Gün (180 gün içinde)",
  },
  {
    ulke: "St. Kitts ve Nevis",
    kapi: "Hayır",
    sure: "90 Gün (180 gün içinde)",
  },
  { ulke: "St. Lucia", kapi: "Hayır", sure: "6 Hafta" },
];

const okyanusya = [
  { ulke: "Fiji", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Vanuatu", kapi: "Hayır", sure: "30 Gün" },
  { ulke: "Palau", kapi: "Evet (Kısa süreli seyahat)", sure: "30 Gün" },
  { ulke: "Samoa", kapi: "Hayır", sure: "90 Gün" },
  { ulke: "Tonga", kapi: "Hayır", sure: "30 Gün" },
  { ulke: "Tuvalu", kapi: "Hayır", sure: "30 Gün" },
];

// ─── Yardımcı Bileşenler ───────────────────────────────────────────────────

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-medium text-[#4A7BC8] tracking-[1.4px] uppercase mb-3">
      <span className="block w-[18px] h-[1.5px] bg-[#4A7BC8] flex-shrink-0" />
      {children}
    </span>
  );
}

function CountryTable({
  rows,
}: {
  rows: { ulke: string; kapi: string; sure: string }[];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#F8F9FC] border-b border-slate-200">
            <th className="text-left px-5 py-3.5 text-[12px] font-medium text-[#1B2B4A] tracking-wide uppercase">
              Ülke
            </th>
            <th className="text-left px-5 py-3.5 text-[12px] font-medium text-[#1B2B4A] tracking-wide uppercase">
              Kapıda Vize
            </th>
            <th className="text-left px-5 py-3.5 text-[12px] font-medium text-[#1B2B4A] tracking-wide uppercase">
              Vizesiz Kalış Süresi
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, i) => (
            <tr
              key={i}
              className="bg-white hover:bg-[#F8F9FC] transition-colors"
            >
              <td className="px-5 py-3.5 font-medium text-[#1B2B4A] whitespace-nowrap">
                {row.ulke}
              </td>
              <td className="px-5 py-3.5 text-slate-500 whitespace-nowrap">
                {row.kapi}
              </td>
              <td className="px-5 py-3.5">
                <span className="inline-block bg-blue-50 text-[#1B2B4A] text-[12px] font-medium px-2.5 py-1 rounded-md whitespace-nowrap">
                  {row.sure}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InfoBox({
  type,
  children,
}: {
  type: "warning" | "info" | "success";
  children: React.ReactNode;
}) {
  const styles = {
    warning: "bg-amber-50 border-amber-200 text-amber-900",
    info: "bg-blue-50  border-blue-200  text-blue-900",
    success: "bg-emerald-50 border-emerald-200 text-emerald-900",
  };
  const icons = {
    warning: (
      <svg
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="flex-shrink-0 mt-0.5"
      >
        <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
    info: (
      <svg
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="flex-shrink-0 mt-0.5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4m0-4h.01" />
      </svg>
    ),
    success: (
      <svg
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="flex-shrink-0 mt-0.5"
      >
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };
  return (
    <div
      className={`flex gap-3 border rounded-xl p-4 text-[14px] leading-relaxed font-light ${styles[type]}`}
    >
      {icons[type]}
      <div>{children}</div>
    </div>
  );
}

// ─── Sayfa ─────────────────────────────────────────────────────────────────

export default function VizesizUlkelerPage() {
  return (
    <article className="w-full bg-white font-sans">
      {/* ── Hero / Başlık ─────────────────────────────────────────────────── */}
      <header className="bg-[#F8F9FC] border-b border-slate-200">
        <div className="max-w-[900px] mx-auto px-6 py-14 lg:py-20">
          <SectionTag>Vize Rehberi</SectionTag>
          <h1 className="font-serif text-[38px] lg:text-[50px] leading-[1.1] tracking-tight text-[#1B2B4A] mb-5">
            Vizesiz Ülkeler Listesi 2026
          </h1>
          <p className="text-[17px] font-light text-slate-500 leading-relaxed max-w-[680px]">
            Türk pasaportuyla 2026 yılında vizesiz seyahat edebileceğiniz tüm
            ülkeler; kalış süreleri, kimlikle giriş imkânları ve özel
            koşullarıyla birlikte aşağıda listelenmiştir. Bilgiler düzenli
            güncellenmekte olup kesin başvuru öncesinde{" "}
            <a
              href="https://www.mfa.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4A7BC8] hover:underline"
            >
              T.C. Dışişleri Bakanlığı
            </a>{" "}
            resmi sitesinin de kontrol edilmesi önerilir.
          </p>

          {/* Hızlı istatistikler */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {[
              { sayi: "70+", etiket: "Vizesiz ülke" },
              { sayi: "5", etiket: "Kıta" },
              { sayi: "90", etiket: "Maks. gün (çoğu ülke)" },
              { sayi: "1 Yıl", etiket: "En uzun kalış (Gürcistan)" },
            ].map((s) => (
              <div
                key={s.etiket}
                className="bg-white border border-slate-200 rounded-xl p-4 text-center"
              >
                <p className="font-serif text-[28px] leading-none text-[#1B2B4A] tracking-tight mb-1">
                  {s.sayi}
                </p>
                <p className="text-[12px] text-slate-400 font-light">
                  {s.etiket}
                </p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── İçerik ────────────────────────────────────────────────────────── */}
      <div className="max-w-[900px] mx-auto px-6 py-14 lg:py-20 space-y-20">
        {/* ── Kimler İçin? ──────────────────────────────────────────────── */}
        <section aria-labelledby="kimler-icin">
          <SectionTag>Kapsam</SectionTag>
          <h2
            id="kimler-icin"
            className="font-serif text-[28px] lg:text-[32px] text-[#1B2B4A] tracking-tight leading-snug mb-4"
          >
            Bu rehber kimler için?
          </h2>
          <p className="text-[16px] font-light text-slate-500 leading-relaxed mb-6">
            Aşağıdaki tablolar ve açıklamalar ağırlıklı olarak{" "}
            <strong className="font-medium text-[#1B2B4A]">
              Umuma Mahsus (Bordo) pasaport
            </strong>{" "}
            sahipleri için hazırlanmıştır. Hususi (Yeşil), Hizmet (Gri) ve
            Diplomatik (Siyah) pasaport sahipleri için kalış süreleri ve giriş
            koşulları ülkeye göre farklılık gösterebilir; bu nedenle diğer
            pasaport türleriyle yapılacak seyahatlerde ilgili ülkenin güncel
            uygulamalarının ayrıca kontrol edilmesi önerilir.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Bürokratik engel olmadan dünyayı keşfetmek isteyenler",
              "Vize harçlarını seyahat deneyimine ayırmayı tercih edenler",
              "Uygun bilet fırsatlarını anında değerlendirmek isteyenler",
              "İlk kez yurt dışına çıkıp süreci sade yönetmek isteyenler",
            ].map((m) => (
              <div
                key={m}
                className="flex items-start gap-3 bg-[#F8F9FC] border border-slate-200 rounded-xl p-4"
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="#4A7BC8"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0 mt-0.5"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[14px] font-light text-slate-600 leading-relaxed">
                  {m}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Neden Vizesiz? ────────────────────────────────────────────── */}
        <section aria-labelledby="neden-vizesiz">
          <SectionTag>Avantajlar</SectionTag>
          <h2
            id="neden-vizesiz"
            className="font-serif text-[28px] lg:text-[32px] text-[#1B2B4A] tracking-tight leading-snug mb-6"
          >
            Vizesiz seyahatin avantajları
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                baslik: "Sıfır bürokrasi",
                aciklama:
                  "Randevu kovalamadan, evrak toplamadan ve mülakat stresi yaşamadan seyahatinizi planlayabilirsiniz.",
                ikon: (
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                ),
              },
              {
                baslik: "Akıllı bütçe yönetimi",
                aciklama:
                  "Vize masraflarından tasarruf ederek bu bütçeyi konaklama, yeme-içme veya deneyimlere ayırabilirsiniz.",
                ikon: (
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
              },
              {
                baslik: "Hızlı geçiş",
                aciklama:
                  "Vizesiz seyahat sayesinde havalimanlarında daha az bekleyerek zamandan kazanırsınız.",
                ikon: <path d="M13 10V3L4 14h7v7l9-11h-7z" />,
              },
              {
                baslik: "Planlama esnekliği",
                aciklama:
                  "Uygun bilet yakaladığınız anda vize çıkmama riskini düşünmeden satın alabilirsiniz.",
                ikon: (
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                ),
              },
            ].map((item) => (
              <div
                key={item.baslik}
                className="border border-slate-200 rounded-xl p-5 bg-white"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="#4A7BC8"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    {item.ikon}
                  </svg>
                </div>
                <h3 className="text-[15px] font-medium text-[#1B2B4A] mb-1">
                  {item.baslik}
                </h3>
                <p className="text-[13px] font-light text-slate-500 leading-relaxed">
                  {item.aciklama}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Avrupa ────────────────────────────────────────────────────── */}
        <section aria-labelledby="avrupa-vizesiz">
          <SectionTag>Avrupa</SectionTag>
          <h2
            id="avrupa-vizesiz"
            className="font-serif text-[28px] lg:text-[32px] text-[#1B2B4A] tracking-tight leading-snug mb-2"
          >
            Avrupa Vizesiz Ülkeler
          </h2>
          <p className="text-[15px] font-light text-slate-500 leading-relaxed mb-6">
            Türkiye'ye yakınlığı ve kültürel bağları sayesinde Balkanlar,
            vizesiz seyahat söz konusu olduğunda ilk akla gelen bölgedir. Kısa
            uçuş süreleri ve uygun seyahat maliyetleriyle öne çıkan bu ülkeler,
            hafta sonu kaçamakları için de idealdir.
          </p>
          <CountryTable rows={avrupa} />
          <div className="mt-4 space-y-3">
            <InfoBox type="warning">
              <strong className="font-medium">Belarus:</strong> Vizesiz giriş
              yalnızca belirli koşulların sağlanması halinde mümkündür.
              Girişlerin genellikle Minsk Uluslararası Havalimanı üzerinden
              yapılması, dönüş bileti, konaklama bilgileri ve seyahat sağlık
              sigortası ibraz edilmesi gerekebilir. Uygulamalar dönemsel olarak
              değişebildiğinden seyahat öncesinde güncel koşulların kontrol
              edilmesi önerilir.
            </InfoBox>
          </div>

          {/* Öne çıkan destinasyonlar */}
          <h3 className="font-serif text-[22px] text-[#1B2B4A] mt-10 mb-5 tracking-tight">
            Öne çıkan Avrupa destinasyonları
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                ad: "Sırbistan — Belgrad",
                detay:
                  "Her 180 günde 90 güne kadar vizesiz kalış. Belgrad Nikola Tesla Havalimanı'na yaklaşık 1 saat 50 dakikalık uçuş mesafesinde. Resmi dil Sırpça, para birimi Sırp Dinarı (RSD).",
              },
              {
                ad: "Kuzey Makedonya — Üsküp",
                detay:
                  "Her 180 günde 90 güne kadar vizesiz kalış. Osmanlı izlerini her köşede taşıyan Üsküp ve eşsiz Ohri Gölü bu ülkenin en çok ziyaret edilen noktaları. Yaklaşık 1 saat 30 dakikalık uçuş mesafesinde.",
              },
              {
                ad: "Kosova — Priştine",
                detay:
                  "Balkanlar'ın en genç ülkesi; 90 güne kadar vizesiz kalış imkânı sunuyor. Kültürel yakınlığıyla öne çıkan Priştine ve Prizren şehirleri en popüler duraklardır. Uçuş süresi yaklaşık 1 saat 40 dakika.",
              },
              {
                ad: "Bosna-Hersek — Saraybosna",
                detay:
                  "90 güne kadar vizesiz. Saraybosna ve Mostar, tarihi dokusu ve doğal güzellikleriyle yılın her döneminde ziyaret edilebilir. Yaklaşık 1 saat 50 dakikalık uçuşla ulaşılabilir.",
              },
              {
                ad: "Arnavutluk — Tiran",
                detay:
                  "Adriyatik kıyıları ve tarihi şehirleriyle 90 güne kadar vize muafiyeti tanınan Arnavutluk, son yıllarda Türk gezginlerin ilgisini çeken destinasyonlar arasına girdi. Yaklaşık 1 saat 45 dakikalık uçuş.",
              },
              {
                ad: "Karadağ — Podgorica",
                detay:
                  "Kotor Körfezi ve Budva sahilleriyle ünlü Karadağ, 90 güne kadar vizesiz. Euro kullanan ülkede İngilizce yaygın biçimde konuşulur. Yaklaşık 1 saat 50 dakikalık uçuş mesafesinde.",
              },
            ].map((d) => (
              <div
                key={d.ad}
                className="border border-slate-200 rounded-xl p-5 bg-white"
              >
                <h4 className="text-[15px] font-medium text-[#1B2B4A] mb-2">
                  {d.ad}
                </h4>
                <p className="text-[13px] font-light text-slate-500 leading-relaxed">
                  {d.detay}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Asya ──────────────────────────────────────────────────────── */}
        <section aria-labelledby="asya-vizesiz">
          <SectionTag>Asya</SectionTag>
          <h2
            id="asya-vizesiz"
            className="font-serif text-[28px] lg:text-[32px] text-[#1B2B4A] tracking-tight leading-snug mb-2"
          >
            Asya Vizesiz Ülkeler
          </h2>
          <p className="text-[15px] font-light text-slate-500 leading-relaxed mb-6">
            Asya, farklı kültürleri, zengin mutfağı ve kolay seyahat
            imkânlarıyla Türk gezginlerin en çok tercih ettiği bölgeler arasında
            yer alır. Vizesiz seyahat edilebilen Asya ülkeleri, kısa sürede
            planlanabilen rotalar ve geniş uçuş alternatifleriyle öne çıkar.
          </p>
          <CountryTable rows={asya} />
          <div className="mt-4 space-y-3">
            <InfoBox type="info">
              <strong className="font-medium">Güney Kore (K-ETA):</strong> Türk
              vatandaşları vizesiz seyahat edebilir; ancak ülkeye girişten önce
              K-ETA (Korea Electronic Travel Authorization) alınması zorunludur.
              Başvuru çevrimiçi yapılır ve onay alınmadan uçağa binilmesine izin
              verilmez.
            </InfoBox>
            <InfoBox type="info">
              <strong className="font-medium">Maldivler:</strong> Kapıda
              ücretsiz 30 günlük vize verilmektedir. Dönüş bileti, konaklama
              rezervasyonu ve yeterli maddi imkân beyanı sınırda talep
              edilebilir.
            </InfoBox>
            <InfoBox type="warning">
              <strong className="font-medium">Hong Kong:</strong> Sınır
              görevlilerince talep edildiğinde kalış süresini karşılayacak
              yeterli parayı ibraz etmek zorunludur. Yeterli bakiye
              gösterilememesi durumunda girişe izin verilmeyebilir.
            </InfoBox>
            <InfoBox type="warning">
              <strong className="font-medium">Ürdün:</strong> 2 haftadan fazla
              ikamet edilmesi durumunda kalış beyanında bulunulması
              gerekmektedir.
            </InfoBox>
            <InfoBox type="warning">
              <strong className="font-medium">Özbekistan:</strong> Ülkeye
              girişin ardından 3 gün içinde otelde veya yabancılar polisine
              başvurarak geçici ikamet kaydı yaptırılması zorunludur.
            </InfoBox>
          </div>

          <h3 className="font-serif text-[22px] text-[#1B2B4A] mt-10 mb-5 tracking-tight">
            Öne çıkan Asya destinasyonları
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                ad: "Azerbaycan — Bakü",
                detay:
                  "Yeni tip çipli TC kimlik kartıyla pasaportsuz giriş imkânı. Yaklaşık 2 saat 45 dakikalık uçuş mesafesinde. Resmi dil Azerbaycan Türkçesi, para birimi Azerbaycan Manatı (AZN).",
              },
              {
                ad: "Gürcistan — Tiflis / Batum",
                detay:
                  "Kimlik kartıyla 1 yıla kadar vizesiz kalış; dünyada nadir görülen bir kolaylık. 1 Ocak 2026 itibarıyla seyahat sağlık sigortası zorunlu hale gelmiştir. Resmi dil Gürcüce, para birimi Gürcistan Larisi (GEL).",
              },
              {
                ad: "Kazakistan — Astana / Almatı",
                detay:
                  "30 güne kadar vizesiz. Başkent Astana ile Almatı, Aktau, Aktöbe, Atyrau ve Çimkent şehirlerine direkt uçuş mevcut. İstanbul–Almatı uçuşu yaklaşık 5 saat 25 dakika sürer.",
              },
              {
                ad: "Japonya — Tokyo / Osaka",
                detay:
                  "90 güne kadar vizesiz; Türk vatandaşları için uzak ama erişilebilir bir destinasyon. Japonya teknoloji, kültür ve gastronomiyi bir arada sunuyor.",
              },
              {
                ad: "Kırgızistan — Bişkek",
                detay:
                  "Tanrı Dağları'nın eteklerinde doğa tutkunları için 90 günlük vize muafiyeti. İstanbul–Bişkek uçuşu yaklaşık 5 saat. Kırgızca ve Rusça resmi dil; Kırgızistan Somu (KGS).",
              },
              {
                ad: "Malezya — Kuala Lumpur",
                detay:
                  "90 güne kadar vizesiz; Güneydoğu Asya'nın en erişilebilir destinasyonlarından. Modern şehir hayatı ile tropikal doğayı bir arada deneyimleyebilirsiniz.",
              },
            ].map((d) => (
              <div
                key={d.ad}
                className="border border-slate-200 rounded-xl p-5 bg-white"
              >
                <h4 className="text-[15px] font-medium text-[#1B2B4A] mb-2">
                  {d.ad}
                </h4>
                <p className="text-[13px] font-light text-slate-500 leading-relaxed">
                  {d.detay}
                </p>
              </div>
            ))}
          </div>

          {/* Gürcistan özel uyarı */}
          <div className="mt-6">
            <InfoBox type="warning">
              <div>
                <strong className="font-medium block mb-1">
                  Gürcistan — 2026 Zorunlu Seyahat Sağlık Sigortası
                </strong>
                1 Ocak 2026 itibarıyla Gürcistan'a giriş yapan tüm yabancı
                ziyaretçiler için seyahat sağlık sigortası zorunludur. Sigortası
                bulunmayan yolcuların ülkeye girişine izin verilmeyebilir veya
                sınırda idari yaptırımlar uygulanabilir. Seyahaten önce
                Gürcistan'da geçerli kapsamlı bir sigorta yaptırmanız önemle
                tavsiye edilir.
              </div>
            </InfoBox>
          </div>
        </section>

        {/* ── Afrika ────────────────────────────────────────────────────── */}
        <section aria-labelledby="afrika-vizesiz">
          <SectionTag>Afrika</SectionTag>
          <h2
            id="afrika-vizesiz"
            className="font-serif text-[28px] lg:text-[32px] text-[#1B2B4A] tracking-tight leading-snug mb-2"
          >
            Afrika Vizesiz Ülkeler
          </h2>
          <p className="text-[15px] font-light text-slate-500 leading-relaxed mb-6">
            Afrika kıtası farklı coğrafyaları, tarihi şehirleri ve sahil
            destinasyonlarıyla vizesiz seyahat etmek isteyenler için dikkat
            çekici alternatifler sunar. Kültür turizmi ve deniz tatilini bir
            arada planlamak isteyenler tarafından sıkça tercih edilir.
          </p>
          <CountryTable rows={afrika} />
          <div className="mt-4 space-y-3">
            <InfoBox type="info">
              <strong className="font-medium">Seyşeller (TA Zorunlu):</strong>{" "}
              Vizeden muaf olunmasına karşın ülkeye girişten önce çevrimiçi
              Seyahat Yetkilendirmesi (TA) alınması zorunludur. Onay belgesi
              girişte ibraz edilir.
            </InfoBox>
            <InfoBox type="info">
              <strong className="font-medium">
                Güney Afrika (Sınır Vizesi):
              </strong>{" "}
              Bordo pasaport sahiplerine sınır kapılarında ücretsiz giriş kaşesi
              ile 30 güne kadar kalış hakkı tanınmaktadır. Dönüş bileti,
              konaklama bilgileri ve yeterli maddi imkân beyanı talep
              edilebilir.
            </InfoBox>
            <InfoBox type="warning">
              <strong className="font-medium">Tunus:</strong> Ülkeye girişte
              5.000 Tunus Dinarı'nı aşan döviz varlıklarının deklare edilmesi
              zorunludur.
            </InfoBox>
          </div>

          <h3 className="font-serif text-[22px] text-[#1B2B4A] mt-10 mb-5 tracking-tight">
            Öne çıkan Afrika destinasyonları
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                ad: "Fas — Kazablanka / Marakeş",
                detay:
                  "Kuzey Afrika'nın en renkli destinasyonu; 90 güne kadar vizesiz. Marakeş'in tarihi medina sokakları ve Atlas Dağları eşsiz bir seyahat deneyimi sunar. İstanbul–Kazablanka uçuşu yaklaşık 5 saat 20 dakika.",
              },
              {
                ad: "Tunus — Tunus Şehri / Sidi Bou Said",
                detay:
                  "Akdeniz'in güneyinde hem deniz tatili hem de tarih meraklıları için ideal bir durak. Kartaca harabeleri ve mavi-beyaz sokaklarıyla ünlü Sidi Bou Said ziyaret edilmeli.",
              },
            ].map((d) => (
              <div
                key={d.ad}
                className="border border-slate-200 rounded-xl p-5 bg-white"
              >
                <h4 className="text-[15px] font-medium text-[#1B2B4A] mb-2">
                  {d.ad}
                </h4>
                <p className="text-[13px] font-light text-slate-500 leading-relaxed">
                  {d.detay}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Güney Amerika ─────────────────────────────────────────────── */}
        <section aria-labelledby="amerika-vizesiz">
          <SectionTag>Amerika</SectionTag>
          <h2
            id="amerika-vizesiz"
            className="font-serif text-[28px] lg:text-[32px] text-[#1B2B4A] tracking-tight leading-snug mb-2"
          >
            Vizesiz Güney ve Orta Amerika Ülkeleri
          </h2>
          <p className="text-[15px] font-light text-slate-500 leading-relaxed mb-6">
            Amerika kıtasında yer alan pek çok ülke Türk vatandaşlarına vize
            muafiyeti tanımaktadır. Özellikle Güney Amerika ülkeleri, uzun
            süreli ve kültürel keşif odaklı seyahatler için öne çıkar.
          </p>
          <CountryTable rows={guney_amerika} />
          <div className="mt-4">
            <InfoBox type="info">
              <strong className="font-medium">Brezilya:</strong> Aktarmalı
              uçuşlarla (örneğin Madrid üzerinden) ulaşılabilen Brezilya'ya 90
              güne kadar vizesiz giriş mümkündür. Rio de Janeiro ve São Paulo en
              çok ziyaret edilen şehirler arasındadır. Resmi dil Portekizce,
              para birimi Brezilya Reali'dir (BRL).
            </InfoBox>
          </div>
        </section>

        {/* ── Okyanusya ─────────────────────────────────────────────────── */}
        <section aria-labelledby="okyanusya-vizesiz">
          <SectionTag>Okyanusya</SectionTag>
          <h2
            id="okyanusya-vizesiz"
            className="font-serif text-[28px] lg:text-[32px] text-[#1B2B4A] tracking-tight leading-snug mb-2"
          >
            Vizesiz Okyanusya Ülkeleri
          </h2>
          <p className="text-[15px] font-light text-slate-500 leading-relaxed mb-6">
            Okyanusya'daki bazı ada ülkeleri Türk vatandaşlarına vizesiz veya
            sınırda vize imkânı sunar. Bu bölge, uzun mesafeli ancak benzersiz
            deneyimler arayan gezginler için uygundur.
          </p>
          <CountryTable rows={okyanusya} />
          <div className="mt-4">
            <InfoBox type="info">
              <strong className="font-medium">Fiji:</strong> Turkuaz denizi ve
              palmiye ağaçlarıyla 90 güne kadar vize muafiyeti sunan Fiji'ye
              Asya aktarmalı uçuşlarla ulaşılabilir. İngilizce, Fijice ve Hintçe
              resmi dillerdir, para birimi Fiji Doları'dır (FJD).
            </InfoBox>
          </div>
        </section>

        {/* ── Önemli Notlar ─────────────────────────────────────────────── */}
        <section
          aria-labelledby="onemli-notlar"
          className="bg-[#F8F9FC] border border-slate-200 rounded-2xl p-8"
        >
          <SectionTag>Dikkat</SectionTag>
          <h2
            id="onemli-notlar"
            className="font-serif text-[26px] text-[#1B2B4A] tracking-tight leading-snug mb-5"
          >
            Seyahat öncesi bilmeniz gerekenler
          </h2>
          <ul className="space-y-4">
            {[
              "Bu tablolardaki vize muafiyetleri ağırlıklı olarak Umuma Mahsus (Bordo) pasaport sahipleri için geçerlidir. Hususi, Hizmet ve Diplomatik pasaport sahipleri için koşullar farklılık gösterebilir.",
              "Belirtilen sürelerden daha uzun kalmak isteyenlerin ilgili ülkenin göç idaresine oturum başvurusu yapması zorunludur.",
              "Vize uygulamaları zaman zaman değişebildiğinden seyahat öncesinde T.C. Dışişleri Bakanlığı'nın resmi internet sitesini ziyaret etmeniz önerilir.",
              "Vizesiz ülkelere giriş hakkı sınır görevlilerinin takdirindedir; vize muafiyeti giriş garantisi anlamına gelmez.",
              "Dönüş bileti, yeterli maddi imkân ve konaklama bilgileri pek çok ülkede sınır kapısında talep edilebilir.",
              "Seyahat sağlık sigortası bazı ülkelerde (örneğin Gürcistan) zorunlu hale gelmiştir; diğer ülkeler için de güçlü bir öneri niteliği taşır.",
            ].map((not, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[14px] font-light text-slate-600 leading-relaxed"
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="#4A7BC8"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0 mt-0.5"
                >
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {not}
              </li>
            ))}
          </ul>
        </section>

        {/* ── SSS ───────────────────────────────────────────────────────── */}
        <section aria-labelledby="sss">
          <SectionTag>SSS</SectionTag>
          <h2
            id="sss"
            className="font-serif text-[28px] lg:text-[32px] text-[#1B2B4A] tracking-tight leading-snug mb-6"
          >
            Sıkça sorulan sorular
          </h2>
          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {[
              {
                soru: "Hangi pasaport türleri vizesiz seyahat edebilir?",
                cevap:
                  "Bu sayfadaki bilgiler ağırlıklı olarak Umuma Mahsus (Bordo) pasaport sahipleri için geçerlidir. Hususi (Yeşil), Hizmet (Gri) ve Diplomatik (Siyah) pasaport sahipleri için kalış süreleri ve giriş koşulları ülkeye göre farklılık gösterebilir.",
              },
              {
                soru: "Pasaportumun geçerlilik süresi ne kadar olmalı?",
                cevap:
                  "Çoğu ülke, seyahat tarihi itibarıyla pasaportunuzun en az 6 ay geçerli olmasını şart koşar. Bazı ülkelerde bu süre 3 ay olabilir; seyahat öncesinde gideceğiniz ülkenin güncel koşullarını kontrol etmeniz önerilir.",
              },
              {
                soru: "Vizesiz ülkeye girişte başka hangi belgeler istenebilir?",
                cevap:
                  "Dönüş bileti, konaklama rezervasyonu, seyahat sağlık sigortası ve yeterli maddi imkânı gösteren banka ekstresi pek çok ülkede talep edilebilir. Bazı ülkelerde özel koşullar (kayıt zorunluluğu, sağlık sigortası vb.) geçerlidir.",
              },
              {
                soru: "Vizesiz giriş, kesin giriş garantisi midir?",
                cevap:
                  "Hayır. Vize muafiyeti giriş garantisi anlamına gelmez. Son karar sınır görevlisine aittir. Dönüş biletiniz, konaklama bilgileriniz ve yeterli maddi imkânınız sınırda sorgulanabilir.",
              },
              {
                soru: "Kapıda vize ile vizesiz seyahat aynı şey midir?",
                cevap:
                  "Hayır. Kapıda vize (on-arrival), sınır kapısında ücretli veya ücretsiz vize almanız anlamına gelir. Vizesiz seyahatte ise herhangi bir vize işlemi yapmanıza gerek kalmaz.",
              },
              {
                soru: "Seyahat sağlık sigortası zorunlu mu?",
                cevap:
                  "Gürcistan gibi bazı ülkeler 2026 itibarıyla seyahat sağlık sigortasını zorunlu kılmıştır. Diğer ülkelerde zorunlu olmasa da sağlık masraflarına karşı güçlü bir öneri niteliği taşır.",
              },
            ].map((item) => (
              <details
                key={item.soru}
                className="group border-b border-slate-200"
              >
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none">
                  <span className="text-[15px] font-medium text-[#1B2B4A] group-hover:text-[#4A7BC8] transition-colors">
                    {item.soru}
                  </span>
                  <span className="w-[22px] h-[22px] rounded-full border border-slate-300 flex items-center justify-center flex-shrink-0 text-slate-400 text-[14px] group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="text-[14px] font-light text-slate-500 leading-[1.75] pb-5">
                  {item.cevap}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="bg-[#1B2B4A] rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="font-serif text-[28px] lg:text-[34px] text-white tracking-tight leading-snug mb-3">
            Hangi ülkeye başvurabilirsin?
          </h2>
          <p className="text-[15px] font-light text-white/60 leading-relaxed mb-8 max-w-[480px] mx-auto">
            Puan hesaplama araçlarımızla Almanya ve Avusturya çalışma vizelerine
            başvuru şansınızı dakikalar içinde öğrenin.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/araclar/almanya-chancen-karte-puan-hesaplama"
              className="inline-block bg-white text-[#1B2B4A] text-[14px] font-medium px-6 py-3 rounded-lg hover:bg-[#F8F9FC] transition-colors"
            >
              Almanya Chancen Karte
            </a>
            <a
              href="/araclar/avusturya-red-white-red-kart-puan-hesaplama"
              className="inline-block border border-white/30 text-white text-[14px] font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Avusturya Red-White-Red Kart
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}
