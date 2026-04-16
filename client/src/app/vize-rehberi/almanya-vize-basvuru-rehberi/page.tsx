import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Almanya Vize Başvurusu 2026 – Türkiye'den Eksiksiz Rehber",
  description:
    "Almanya vize türleri, başvuru şartları, gerekli belgeler, ücretler ve randevu bilgileri. T.C. vatandaşları için güncel ve kapsamlı Almanya vize rehberi.",
  keywords: [
    "Almanya vize başvurusu",
    "Almanya schengen vizesi",
    "Almanya vize belgeleri",
    "Almanya vize ücreti 2026",
    "Almanya vize randevu",
    "Red White Red Kart",
    "Chancen Karte",
    "Almanya çalışma vizesi",
  ],
  alternates: {
    canonical: "/vize-rehberi/almanya-vize-basvuru-rehberi",
  },
  openGraph: {
    title: "Almanya Vize Başvurusu 2026 – Eksiksiz Rehber",
    description:
      "Almanya vize türleri, başvuru şartları, gerekli belgeler ve randevu bilgileri. Türkiye'den başvuranlar için güncel rehber.",
    type: "article",
  },
};

const tocItems = [
  { id: "vize-turleri", label: "Almanya Vize Türleri" },
  { id: "c-tipi", label: "C Tipi (Kısa Süreli) Vize" },
  { id: "d-tipi", label: "D Tipi (Uzun Süreli) Vize" },
  { id: "basvuru-sartlari", label: "Başvuru Şartları" },
  { id: "gerekli-belgeler", label: "Gerekli Belgeler" },
  { id: "sponsor-dilekce", label: "Sponsor Dilekçesi" },
  { id: "ucret", label: "Vize Ücreti" },
  { id: "basvuru-merkezleri", label: "Başvuru Merkezleri" },
  { id: "randevu", label: "Randevu Bilgileri" },
  { id: "sure", label: "Vize Kaç Günde Çıkar?" },
];

const cTipiVizeler = [
  {
    title: "Turistik Vize",
    category: "Turizm",
    desc: "Yalnızca turistik amaçlarla, 90 günden kısa süre ile yapılan seyahatler için geçerlidir.",
  },
  {
    title: "İş ve Fuar Ziyareti",
    category: "Ticari",
    desc: "Ticari faaliyetler için alınan bu vizede iş ortaklarından davetiye zorunludur.",
  },
  {
    title: "Aile, Akraba, Arkadaş Ziyareti",
    category: "Ziyaret",
    desc: "Ziyaret edilecek kişiden alınacak davetiye bu vize türü için zorunludur.",
  },
  {
    title: "Kültürel, Sportif ve Konferans",
    category: "Kültür & Spor",
    desc: "Kültürel veya sportif faaliyetler ile konferans katılımları için 90 güne kadar geçerli.",
  },
  {
    title: "Kısa Süreli Öğrenim",
    category: "Eğitim",
    desc: "90 günden kısa sürecek eğitim faaliyetleri için alınan öğrenim vizesidir.",
  },
];

const belgeler = [
  "Pasaport (10 yıldan eski olmamalı, 2 boş sayfası olmalı, dönüşten itibaren en az 6 ay geçerli olmalı)",
  "Almanya vize başvuru formu",
  "2 adet biyometrik fotoğraf (son 3 ay içinde çekilmiş, 3,5×4,5 cm, beyaz arka fon)",
  "Seyahat sağlık sigortası",
  "Son 3 aya ait banka hesap dökümü (kaşeli ve ıslak imzalı)",
  "Konaklama bilgileri, uçak bileti ve otel rezervasyonu",
  "Son 3 aya ait maaş bordrosu – sigortalı çalışanlar için (ıslak imzalı ve kaşeli)",
  "Varsa tapu, kira kontratı, araç ruhsatı ve kredi kartı fotokopileri",
  "Faaliyet belgesi ve Ticaret Sicil Belgesi – işverenler ile serbest meslek mensupları için",
  "Şirket antetli kağıdına yazılı seyahat amaç dilekçesi – işverenler için",
  "SGK dökümü – sigortalı çalışanlar için",
  "Nüfus müdürlüğü veya e-devletten alınan tam vukuatlı nüfus kayıt örneği",
  "Nüfus cüzdanı fotokopisi",
  "Varsa belediyeden onaylı davet mektubu",
  "Sponsor dilekçesi – öğrenciler, işsizler ve yeterli geliri olmayanlar için",
];

const ucretTablosu = [
  { grup: "Yetişkinler (12 yaş ve üzeri)", ucret: "90 Euro" },
  { grup: "Çocuklar (6–12 yaş arası)", ucret: "45 Euro" },
  { grup: "Çocuklar (0–6 yaş arası)", ucret: "Ücretsiz" },
];

const konsolosluklar = [
  {
    sehir: "Ankara",
    unvan: "Almanya Büyükelçiliği",
    adres: "Atatürk Bulvarı No: 114, 06690 Kavaklıdere / Ankara",
    telefon: "+90 312 455 51 00",
    yetki:
      "Adana, Ankara, Erzurum, Gaziantep, Konya, Samsun, Trabzon ve daha pek çok il.",
    flag: "🇩🇪",
  },
  {
    sehir: "İstanbul",
    unvan: "İstanbul Almanya Başkonsolosluğu",
    adres: "İnönü Caddesi No: 10, Gümüşsuyu / İstanbul",
    telefon: "+90 212 334 61 00",
    yetki:
      "Balıkesir, Bursa, Edirne, Eskişehir, İstanbul, Kocaeli, Tekirdağ ve çevre iller.",
    flag: "🏙️",
  },
  {
    sehir: "İzmir",
    unvan: "İzmir Almanya Başkonsolosluğu",
    adres: "Korutürk Mah. Havuzbaşı Sok. No: 1, 35330 Balçova / İzmir",
    telefon: "+90 232 488 88 88",
    yetki: "Antalya, Aydın, Denizli, İzmir, Manisa, Muğla ve çevre iller.",
    flag: "☀️",
  },
];

export default function AlmanyaVizeRehberi() {
  return (
    <main className="bg-white">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#F8F9FC] border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[12px] text-slate-400 mb-8"
          >
            <Link href="/" className="hover:text-[#4A7BC8] transition-colors">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              className="hover:text-[#4A7BC8] transition-colors"
            >
              Rehberler
            </Link>
            <span>/</span>
            <span className="text-[#1B2B4A]">Almanya Vize Rehberi</span>
          </nav>

          <span className="inline-flex items-center gap-2 text-[11px] font-medium text-[#4A7BC8] tracking-[1.4px] uppercase mb-4">
            <span className="block w-[18px] h-[1.5px] bg-[#4A7BC8]" />
            Vize Rehberi
          </span>

          <h1 className="font-serif text-[38px] lg:text-[52px] leading-[1.08] tracking-tight text-[#1B2B4A] mb-5 max-w-3xl">
            Almanya Vize Başvurusu:{" "}
            <em className="italic text-[#4A7BC8]">2026 Rehberi</em>
          </h1>

          <p className="text-[17px] font-light text-slate-500 leading-relaxed max-w-[600px] mb-8">
            Turistten öğrenciye, çalışandan aile ziyaretçisine kadar Almanya
            vizesi hakkında bilmen gereken her şey — belgeler, ücretler, randevu
            ve süreç.
          </p>

          {/* Meta bilgi */}
          <div className="flex flex-wrap items-center gap-5 text-[13px] text-slate-400">
            {/*  <span className="flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Temmuz 2024 baz alınarak hazırlandı
            </span> */}
            <span className="flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              ~8 dk okuma
            </span>
            <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-md px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase">
              Güncellik resmi kaynaklardan doğrulanmalıdır
            </span>
          </div>
        </div>
      </section>

      {/* ── İÇERİK + TOC ─────────────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16 lg:py-20 grid lg:grid-cols-[1fr_280px] gap-16 lg:gap-20 items-start">
        {/* ── ANA İÇERİK ────────────────────────────────────────────── */}
        <article className="min-w-0">
          {/* Uçak Bileti Notu */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-14 flex items-start gap-4">
            <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center flex-shrink-0 border border-blue-100">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-medium text-[#1B2B4A] mb-1">
                Uçak bileti hakkında
              </p>
              <p className="text-[13px] font-light text-slate-600 leading-relaxed">
                Başvuruda uçak bileti zorunlu tutulmasa da bilet alındığına dair
                belge olumlu etki yaratır. Vize süreci genellikle 15 günü
                aştığından erken rezervasyon ile daha uygun fiyat avantajı
                yakalanabilir.
              </p>
            </div>
          </div>

          {/* BÖLÜM: Vize Türleri */}
          <section id="vize-turleri" className="mb-16 scroll-mt-24">
            <SectionLabel>Vize Kategorileri</SectionLabel>
            <h2 className="font-serif text-[30px] lg:text-[34px] text-[#1B2B4A] tracking-tight leading-[1.15] mb-4">
              Almanya Vize Türleri
            </h2>
            <p className="text-[16px] font-light text-slate-500 leading-relaxed mb-10">
              Almanya&apos;ya seyahat amacına ve süresine göre iki ana vize
              kategorisi bulunmaktadır: 90 güne kadar geçerli{" "}
              <strong className="font-medium text-[#1B2B4A]">C Tipi</strong> ve
              90 günü aşan seyahatler için{" "}
              <strong className="font-medium text-[#1B2B4A]">D Tipi</strong>.
            </p>

            {/* C Tipi */}
            <section id="c-tipi" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#1B2B4A] text-white text-[13px] font-medium flex-shrink-0">
                  C
                </span>
                <h3 className="font-serif text-[22px] text-[#1B2B4A] tracking-tight">
                  C Tipi – Kısa Süreli (Schengen) Vize
                </h3>
              </div>
              <p className="text-[15px] font-light text-slate-500 leading-relaxed mb-6">
                Turistik geziler, eğitim, tedavi, spor ve kültürel faaliyetler
                gibi 90 güne kadar sürecek seyahatler için başvurulur. Bordo
                (umuma mahsus) pasaport sahipleri 180 gün içinde en fazla 90 gün
                kalabilir. Hususi, diplomatik ve hizmet pasaportu sahipleri vize
                muafiyetinden yararlanır.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {cTipiVizeler.map((v) => (
                  <div
                    key={v.title}
                    className="border border-slate-200 rounded-xl p-5 hover:border-[#6B9BD9] hover:shadow-[0_4px_16px_rgba(27,43,74,0.07)] transition-all duration-200"
                  >
                    <span className="text-[11px] font-medium text-[#4A7BC8] tracking-[0.8px] uppercase mb-2 block">
                      {v.category}
                    </span>
                    <h4 className="text-[15px] font-medium text-[#1B2B4A] mb-2">
                      {v.title}
                    </h4>
                    <p className="text-[13px] font-light text-slate-500 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* D Tipi */}
            <section id="d-tipi" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#4A7BC8] text-white text-[13px] font-medium flex-shrink-0">
                  D
                </span>
                <h3 className="font-serif text-[22px] text-[#1B2B4A] tracking-tight">
                  D Tipi – Uzun Süreli (Ulusal) Vize
                </h3>
              </div>
              <p className="text-[15px] font-light text-slate-500 leading-relaxed">
                90 günü aşan aile birleşimi ve çalışma amaçlı seyahatler için
                Almanya Ulusal Vizesi olarak da bilinen D Tipi vizeye
                başvurulur. 90 günden uzun sürecek stajlar için de D tipi vize
                gerekmekte olup ayrıca üniversite kabul mektubu sunulması
                zorunludur.
              </p>

              <div className="mt-6 bg-[#F8F9FC] rounded-xl p-5 border border-slate-200 flex items-start gap-3">
                <svg
                  className="flex-shrink-0 mt-0.5"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="#4A7BC8"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[13px] font-light text-slate-600 leading-relaxed">
                  <span className="font-medium text-[#1B2B4A]">Önemli:</span>{" "}
                  Uzun süreli vize başvuruları yetkilendirilmiş danışmanlık
                  merkezi yerine doğrudan konsoloslukta{" "}
                  <span className="font-medium text-[#1B2B4A]">şahsen</span>{" "}
                  yapılmak zorundadır.
                </p>
              </div>

              {/* Araç kartları */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <Link
                  href="/araclar/almanya-chancen-karte-puan-hesaplama"
                  className="group block bg-white border border-slate-200 rounded-xl p-5 hover:shadow-[0_6px_24px_rgba(27,43,74,0.09)] hover:border-[#6B9BD9] transition-all duration-200"
                >
                  <span className="text-[11px] font-medium text-slate-400 tracking-[0.8px] uppercase mb-1 block">
                    Almanya
                  </span>
                  <h4 className="text-[15px] font-medium text-[#1B2B4A] mb-2">
                    Chancen-Karte Puan Hesaplama
                  </h4>
                  <p className="text-[13px] font-light text-slate-500 leading-relaxed mb-3">
                    Almanya&apos;nın Fırsat Kartı sisteminde kaç puan
                    topladığını hesapla.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#4A7BC8] group-hover:gap-2 transition-all">
                    Hesaplamayı başlat
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
                </Link>
                <Link
                  href="/araclar/avusturya-red-white-red-kart-puan-hesaplama"
                  className="group block bg-white border border-slate-200 rounded-xl p-5 hover:shadow-[0_6px_24px_rgba(27,43,74,0.09)] hover:border-[#6B9BD9] transition-all duration-200"
                >
                  <span className="text-[11px] font-medium text-slate-400 tracking-[0.8px] uppercase mb-1 block">
                    Avusturya
                  </span>
                  <h4 className="text-[15px] font-medium text-[#1B2B4A] mb-2">
                    Red-White-Red Kart Puan Hesaplama
                  </h4>
                  <p className="text-[13px] font-light text-slate-500 leading-relaxed mb-3">
                    Avusturya yetenekli göçmen programına başvuru şansını öğren.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#4A7BC8] group-hover:gap-2 transition-all">
                    Hesaplamayı başlat
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
                </Link>
              </div>
            </section>
          </section>

          <Divider />

          {/* BÖLÜM: Başvuru Şartları */}
          <section id="basvuru-sartlari" className="mb-16 scroll-mt-24">
            <SectionLabel>Başvuru Süreci</SectionLabel>
            <h2 className="font-serif text-[30px] lg:text-[34px] text-[#1B2B4A] tracking-tight leading-[1.15] mb-4">
              Almanya Vize Başvuru Şartları
            </h2>
            <p className="text-[16px] font-light text-slate-500 leading-relaxed mb-8">
              Schengen vizesi için elçilik veya konsolosluktan randevu almak
              zorunludur. Başvuru, istenen belgelerin tamamıyla elden teslim
              edilmesiyle yapılır.
            </p>

            <div className="space-y-4">
              {[
                {
                  no: "01",
                  baslik: "Randevu alın",
                  aciklama:
                    "Seyahat tarihinden en az 15 gün önce randevu alınması tavsiye edilir. Tatil dönemlerinde randevular çok daha ileri tarihlere verilebileceğinden 1 ay öncesinden başvurmak önerilir.",
                },
                {
                  no: "02",
                  baslik: "Pasaport geçerliliğini kontrol edin",
                  aciklama:
                    "Pasaportun dönüş tarihinden itibaren en az 3 ay (uzun süreli başvurularda 6 ay) geçerliliğinin bulunması, 10 yıldan eski olmaması ve en az 2 boş sayfasının olması gerekir.",
                },
                {
                  no: "03",
                  baslik: "Parmak izi verin",
                  aciklama:
                    "İlk kez Schengen vizesine başvuranların randevuda parmak izi vermesi gerekir. Bu parmak izi 5 yıl geçerlidir. 0–10 yaş arası çocuklar muaftır.",
                },
                {
                  no: "04",
                  baslik: "Belgeleri eksiksiz hazırlayın",
                  aciklama:
                    "Meslek grubuna ve seyahat türüne göre farklılık gösteren evrakların konsolosluğun belirlediği sıraya göre düzenlenmesi gerekmektedir.",
                },
                {
                  no: "05",
                  baslik: "Başvuruyu şahsen yapın",
                  aciklama:
                    "Kısa süreli vizelerde başvuru, yetkili danışmanlık merkezleri aracılığıyla yapılabilir. Uzun süreli vizelerde ise doğrudan konsoloslukta şahsen başvuru zorunludur.",
                },
              ].map((item) => (
                <div
                  key={item.no}
                  className="flex items-start gap-5 p-5 rounded-xl border border-slate-200 bg-white hover:border-[#6B9BD9] transition-colors duration-200"
                >
                  <span className="text-[13px] font-medium text-[#4A7BC8] w-8 flex-shrink-0 pt-0.5">
                    {item.no}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-medium text-[#1B2B4A] mb-1">
                      {item.baslik}
                    </h3>
                    <p className="text-[13px] font-light text-slate-500 leading-relaxed">
                      {item.aciklama}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* BÖLÜM: Gerekli Belgeler */}
          <section id="gerekli-belgeler" className="mb-16 scroll-mt-24">
            <SectionLabel>Evrak Listesi</SectionLabel>
            <h2 className="font-serif text-[30px] lg:text-[34px] text-[#1B2B4A] tracking-tight leading-[1.15] mb-4">
              Almanya Vize Başvurusu İçin Gerekli Belgeler
            </h2>
            <p className="text-[16px] font-light text-slate-500 leading-relaxed mb-8">
              Aşağıdaki belgeler turistik seyahat başvurusu için genel listedir.
              Çalışma durumunuza ve seyahat türüne göre ek belgeler istenebilir.
            </p>

            <div className="border border-slate-200 rounded-xl overflow-hidden">
              {belgeler.map((belge, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 px-5 py-4 ${
                    i < belgeler.length - 1 ? "border-b border-slate-100" : ""
                  } ${i % 2 === 0 ? "bg-white" : "bg-[#FAFBFD]"}`}
                >
                  <svg
                    className="flex-shrink-0 mt-0.5"
                    width="15"
                    height="15"
                    fill="none"
                    stroke="#4A7BC8"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[14px] font-light text-slate-600 leading-relaxed">
                    {belge}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* BÖLÜM: Sponsor Dilekçesi */}
          <section id="sponsor-dilekce" className="mb-16 scroll-mt-24">
            <SectionLabel>Finansal Garanti</SectionLabel>
            <h2 className="font-serif text-[30px] lg:text-[34px] text-[#1B2B4A] tracking-tight leading-[1.15] mb-4">
              Vize Sponsor Dilekçesi
            </h2>
            <p className="text-[16px] font-light text-slate-500 leading-relaxed mb-6">
              Belirli bir aylık geliri bulunmayan öğrenciler, işsizler veya
              yeterli geliri olmayan çalışanlar sponsor desteği alabilir.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: "👤",
                  baslik: "Kimler alabilir?",
                  aciklama:
                    "Öğrenciler, işsizler ve yeterli geliri bulunmayan çalışanlar ile şirket sahipleri.",
                },
                {
                  icon: "🤝",
                  baslik: "Sponsor kim olabilir?",
                  aciklama:
                    "Sponsorların 1. derece yakın (ebeveyn, eş, kardeş) olması zorunludur.",
                },
                {
                  icon: "💳",
                  baslik: "Banka bakiyesi yeterliyse?",
                  aciklama:
                    "Hesapta yeterli bakiye varsa sponsor olmadan da başvuru yapılabilir.",
                },
              ].map((item) => (
                <div
                  key={item.baslik}
                  className="bg-[#F8F9FC] rounded-xl p-5 border border-slate-200"
                >
                  <p className="text-[22px] mb-3">{item.icon}</p>
                  <h3 className="text-[14px] font-medium text-[#1B2B4A] mb-1.5">
                    {item.baslik}
                  </h3>
                  <p className="text-[13px] font-light text-slate-500 leading-relaxed">
                    {item.aciklama}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* BÖLÜM: Ücret */}
          <section id="ucret" className="mb-16 scroll-mt-24">
            <SectionLabel>Harç Bilgisi</SectionLabel>
            <h2 className="font-serif text-[30px] lg:text-[34px] text-[#1B2B4A] tracking-tight leading-[1.15] mb-4">
              Almanya Vize Başvuru Ücreti
            </h2>
            <p className="text-[16px] font-light text-slate-500 leading-relaxed mb-8">
              Konsolosluk harcına ek olarak başvuru ve vize danışmanlık hizmeti
              ücreti, fotoğraf, fotokopi ve çıktı tutarları da ödenmektedir.
              Aşağıdaki ücretler Temmuz 2024 itibarıyla geçerlidir.
            </p>

            <div className="border border-slate-200 rounded-xl overflow-hidden max-w-lg">
              <div className="grid grid-cols-2 bg-[#1B2B4A] px-5 py-3">
                <span className="text-[12px] font-medium text-white/70 uppercase tracking-wider">
                  Başvuru Sahibi
                </span>
                <span className="text-[12px] font-medium text-white/70 uppercase tracking-wider text-right">
                  Vize Ücreti
                </span>
              </div>
              {ucretTablosu.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 px-5 py-4 border-b border-slate-100 last:border-0 ${
                    i % 2 === 0 ? "bg-white" : "bg-[#FAFBFD]"
                  }`}
                >
                  <span className="text-[14px] font-light text-slate-600">
                    {row.grup}
                  </span>
                  <span
                    className={`text-[14px] font-medium text-right ${
                      row.ucret === "Ücretsiz"
                        ? "text-emerald-600"
                        : "text-[#1B2B4A]"
                    }`}
                  >
                    {row.ucret}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* BÖLÜM: Başvuru Merkezleri */}
          <section id="basvuru-merkezleri" className="mb-16 scroll-mt-24">
            <SectionLabel>Konsolosluklar</SectionLabel>
            <h2 className="font-serif text-[30px] lg:text-[34px] text-[#1B2B4A] tracking-tight leading-[1.15] mb-4">
              Başvuru Merkezleri
            </h2>
            <p className="text-[16px] font-light text-slate-500 leading-relaxed mb-8">
              Başvuruların yapılacağı merkez, yaşanılan ilin yetki alanına göre
              belirlenmektedir.
            </p>

            <div className="grid sm:grid-cols-3 gap-5">
              {konsolosluklar.map((k) => (
                <div
                  key={k.sehir}
                  className="border border-slate-200 rounded-xl p-5 bg-white hover:border-[#6B9BD9] hover:shadow-[0_4px_16px_rgba(27,43,74,0.07)] transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {/*  <span className="text-[26px] leading-none">{k.flag}</span> */}
                    <div>
                      <p className="text-[11px] font-medium text-slate-400 tracking-[0.8px] uppercase">
                        {k.sehir}
                      </p>
                      <p className="text-[14px] font-medium text-[#1B2B4A] leading-tight">
                        {k.unvan}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-[13px] font-light text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                    <p>
                      <span className="font-medium text-slate-600">Adres:</span>{" "}
                      {k.adres}
                    </p>
                    <p>
                      <span className="font-medium text-slate-600">Tel:</span>{" "}
                      <a
                        href={`tel:${k.telefon.replace(/\s/g, "")}`}
                        className="text-[#4A7BC8] hover:underline"
                      >
                        {k.telefon}
                      </a>
                    </p>
                    <p>
                      <span className="font-medium text-slate-600">
                        Yetki alanı:
                      </span>{" "}
                      {k.yetki}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* BÖLÜM: Randevu */}
          <section id="randevu" className="mb-16 scroll-mt-24">
            <SectionLabel>Randevu & Süreç</SectionLabel>
            <h2 className="font-serif text-[30px] lg:text-[34px] text-[#1B2B4A] tracking-tight leading-[1.15] mb-4">
              Randevu Nasıl Alınır?
            </h2>
            <p className="text-[16px] font-light text-slate-500 leading-relaxed mb-8">
              Kısa süreli vize başvuruları yetkili danışmanlık merkezleri veya
              turizm acenteleri aracılığıyla yapılır. Randevu tarihinin seyahat
              tarihinden en geç 15 gün önce olması, tatil dönemlerinde ise 1 ay
              öncesinden alınması önerilir.
            </p>

            <div className="bg-[#F8F9FC] border border-slate-200 rounded-xl p-6 mb-6">
              <h3 className="text-[16px] font-medium text-[#1B2B4A] mb-4 flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="#4A7BC8"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Randevusuz başvuru yapılabilen istisnai durumlar
              </h3>
              <ul className="space-y-2">
                {[
                  "Fuarda mal teşhiri yapacak katılımcılar (geçerli fuar kartıyla)",
                  "Tıbbi tedavi amacıyla kısa süreli Almanya'ya gitmesi gerekenler (rapor ibrazı zorunlu)",
                  "1. veya 2. derece yakını vefat edenler (ölüm belgesi zorunlu)",
                ].map((madde, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="flex-shrink-0 mt-0.5"
                      width="14"
                      height="14"
                      fill="none"
                      stroke="#4A7BC8"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <span className="text-[14px] font-light text-slate-600 leading-relaxed">
                      {madde}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Divider />

          {/* BÖLÜM: Süre */}
          <section id="sure" className="mb-8 scroll-mt-24">
            <SectionLabel>Sonuçlanma Süresi</SectionLabel>
            <h2 className="font-serif text-[30px] lg:text-[34px] text-[#1B2B4A] tracking-tight leading-[1.15] mb-4">
              Almanya Vizesi Kaç Günde Çıkar?
            </h2>
            <p className="text-[16px] font-light text-slate-500 leading-relaxed mb-8">
              Vize başvuruları, konsolosluğun yoğunluğuna bağlı olarak resmi
              tatiller hariç en az 15 iş günü içinde sonuçlanır. Özel durumlarda
              bu süre 45 güne kadar uzayabilmektedir.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                {
                  deger: "15",
                  birim: "iş günü",
                  aciklama: "Standart işlem süresi",
                  renk: "text-emerald-600",
                  bg: "bg-emerald-50",
                  border: "border-emerald-100",
                },
                {
                  deger: "45",
                  birim: "güne kadar",
                  aciklama: "Özel durumlarda uzayabilir",
                  renk: "text-amber-600",
                  bg: "bg-amber-50",
                  border: "border-amber-100",
                },
                {
                  deger: "15",
                  birim: "gün önce",
                  aciklama: "Minimum randevu öncesi süresi",
                  renk: "text-[#4A7BC8]",
                  bg: "bg-blue-50",
                  border: "border-blue-100",
                },
              ].map((item) => (
                <div
                  key={item.aciklama}
                  className={`rounded-xl p-5 border ${item.bg} ${item.border}`}
                >
                  <p
                    className={`font-serif text-[40px] leading-none ${item.renk} mb-1`}
                  >
                    {item.deger}
                  </p>
                  <p
                    className={`text-[12px] font-medium uppercase tracking-wider mb-2 ${item.renk}`}
                  >
                    {item.birim}
                  </p>
                  <p className="text-[13px] font-light text-slate-500">
                    {item.aciklama}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 bg-[#F8F9FC] rounded-xl p-5 border border-slate-200">
              <svg
                className="flex-shrink-0 mt-0.5"
                width="15"
                height="15"
                fill="none"
                stroke="#4A7BC8"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[13px] font-light text-slate-600 leading-relaxed">
                Başvurunuzu{" "}
                <span className="font-medium text-[#1B2B4A]">İDATA</span> sitesi
                üzerinden takip edebilirsiniz. Bu sitede başvuru durumunuza
                ilişkin güncel bilgilere ulaşabilirsiniz.
              </p>
            </div>
          </section>
        </article>

        {/* ── İÇİNDEKİLER (Sidebar) ─────────────────────────────────── */}
        <aside className="hidden lg:block">
          <div className="sticky top-8 border border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-[#1B2B4A] px-5 py-4">
              <p className="text-[11px] font-medium text-white/50 uppercase tracking-[1.2px]">
                İçindekiler
              </p>
            </div>
            <nav className="divide-y divide-slate-100">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-2.5 px-5 py-3 text-[13px] font-light text-slate-600 hover:text-[#4A7BC8] hover:bg-[#F8F9FC] transition-colors duration-150 group"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#4A7BC8] transition-colors flex-shrink-0" />
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="border-t border-slate-200 p-4">
              <Link
                href="/araclar/almanya-chancen-karte-puan-hesaplama"
                className="block w-full text-center bg-[#1B2B4A] text-white text-[13px] font-medium px-4 py-3 rounded-lg hover:bg-[#2D4270] transition-colors"
              >
                Puan Hesapla 🇩🇪
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {/* ── YASAL UYARI ──────────────────────────────────────────────── */}
      <div className="bg-[#F8F9FC] border-t border-slate-200">
        {/*  <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-8">
          <div className="flex items-start gap-3">
            <svg
              className="flex-shrink-0 mt-0.5"
              width="15"
              height="15"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-[12px] font-light text-slate-400 leading-relaxed max-w-3xl">
              Bu içerik Temmuz 2024 tarihinde hazırlanmış olup bilgilendirme
              amaçlıdır. Vize kuralları değişkenlik gösterebileceğinden başvuru
              öncesinde bilgilerin doğruluğunu{" "}
              <span className="font-medium text-slate-500">
                resmi Almanya Konsolosluğu kaynaklarından
              </span>{" "}
              kontrol etmenizi öneririz. Başvuru aşamasında resmi kurallar
              geçerlidir.
            </p>
          </div>
        </div> */}
      </div>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-medium text-[#4A7BC8] tracking-[1.4px] uppercase mb-3">
      <span className="block w-[18px] h-[1.5px] bg-[#4A7BC8]" />
      {children}
    </span>
  );
}

function Divider() {
  return <hr className="border-slate-100 mb-16" />;
}
