import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "İngiltere Vize Nasıl Alınır - İngiltere Vizesi Rehberi 2026",
  description:
    "İngiltere vizesi nasıl alınır? Vize türleri, gerekli belgeler, başvuru şartları, güncel ücretler ve başvuru merkezleri. Türk vatandaşları için adım adım İngiltere vize rehberi.",
  keywords: [
    "ingiltere vize başvurusu",
    "ingiltere vizesi nasıl alınır",
    "ingiltere vize ücreti 2026",
    "ingiltere turistik vize",
    "ingiltere vize belgeler",
    "ingiltere vize şartları",
    "ingiltere vize kaç günde çıkar",
    "ingiltere vize türleri",
    "uk visa türkiye",
  ],
  alternates: {
    canonical: "/vize-rehberi/ingiltere-vize-basvurusu",
  },
  openGraph: {
    title:
      "İngiltere Vize Başvurusu 2026 | Türk Vatandaşları İçin Eksiksiz Rehber",
    description:
      "Vize türleri, gerekli belgeler, başvuru şartları ve güncel ücretlerle İngiltere vize rehberi.",
    type: "article",
    locale: "tr_TR",
  },
};

// ─── Vize ücret tablosu ───────────────────────────────────────────────────────

const vizUcretleri = [
  { tur: "6 Aylık Vize", ucret: "$181" },
  { tur: "2 Yıllık Vize", ucret: "$677" },
  { tur: "5 Yıllık Vize", ucret: "$1.209" },
  { tur: "10 Yıllık Vize", ucret: "$1.510" },
  { tur: "Akademik Ziyaret Vizesi", ucret: "$314" },
  { tur: "Evlilik ve Geçici Nişanlılık", ucret: "$181" },
  { tur: "Öğrenci Vizesi (6–11 ay)", ucret: "$305" },
  { tur: "Öğrenci Vizesi (1 yıldan uzun)", ucret: "$747" },
  { tur: "Yatırımcı Vizesi", ucret: "$2.852" },
  { tur: "Girişimci Vizesi", ucret: "$1.817" },
  { tur: "Olağanüstü Yetenek Vizesi", ucret: "$1.092" },
  { tur: "Geçici Çalışma İzni Vizesi", ucret: "$455" },
  { tur: "Vasıflı İşçi Vizesi", ucret: "$1.097" },
  { tur: "Kıdemli / Uzman Çalışan Vizesi", ucret: "$1.097" },
];

// ─── Başvuru merkezleri ───────────────────────────────────────────────────────

const merkezler = [
  {
    sehir: "İstanbul",
    adres:
      "Profilo Plaza, Gülbahar Mah. Cemal Şair Sok. Kat:4 No:138/A Mecidiyeköy",
    tel: "+90 212 216 44 00",
  },
  {
    sehir: "Ankara",
    adres: "Sheraton Business Center, Boğaz Sokak, Kavaklıdere",
    tel: "+90 (212) 370 31 00",
  },
  {
    sehir: "Gaziantep",
    adres:
      "Muammer Aksoy Bulvarı, İmam Hüseyin İncioğlu Cad. No:34B Şehitkamil",
    tel: "+90 (212) 370 31 00",
  },
  {
    sehir: "Bursa",
    adres: "Akpınar Mah. Akpınar Sokak, Sheraton Hotel No:1",
    tel: "+90 (212) 370 31 00",
  },
  {
    sehir: "İzmir",
    adres: "Aksoy Plaza, Kıbrıs Şehitleri Cad. No:152 Alsancak",
    tel: "+90 (212) 370 31 00",
  },
  {
    sehir: "Adana",
    adres: "Abidinpaşa Cad. Adana Ticaret Odası No:52",
    tel: "+90 (212) 370 31 00",
  },
  {
    sehir: "Antalya",
    adres: "Gazi Bulvarı, Antalya Ticaret Odası No:531",
    tel: "+90 (212) 370 31 00",
  },
];

// ─── Yardımcı bileşenler ──────────────────────────────────────────────────────

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium text-blue-500 tracking-widest uppercase mb-3">
      <span className="block w-4 h-px bg-blue-500 flex-shrink-0" />
      {children}
    </span>
  );
}

function InfoBox({
  type,
  children,
}: {
  type: "warning" | "info" | "success";
  children: React.ReactNode;
}) {
  const map = {
    warning: {
      wrap: "bg-amber-50 border-amber-200 text-amber-900",
      icon: (
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
    },
    info: {
      wrap: "bg-blue-50 border-blue-200 text-blue-900",
      icon: (
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
    },
    success: {
      wrap: "bg-emerald-50 border-emerald-200 text-emerald-900",
      icon: (
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
    },
  };
  const { wrap, icon } = map[type];
  return (
    <div
      className={`flex gap-3 border rounded-xl p-4 text-sm leading-relaxed font-light ${wrap}`}
    >
      {icon}
      <div>{children}</div>
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm font-light text-slate-600 leading-relaxed">
      <svg
        width="15"
        height="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
        className="flex-shrink-0 mt-0.5 text-blue-400"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
      {children}
    </li>
  );
}

function StepCard({
  no,
  title,
  desc,
}: {
  no: string;
  title: string;
  desc: string;
}) {
  return (
    <li className="flex gap-5 bg-slate-50 border border-slate-200 rounded-xl p-5">
      <span className="font-serif text-3xl leading-none text-blue-400 tracking-tight flex-shrink-0 mt-0.5">
        {no}
      </span>
      <div>
        <p className="text-sm font-medium text-slate-800 mb-1">{title}</p>
        <p className="text-sm font-light text-slate-500 leading-relaxed">
          {desc}
        </p>
      </div>
    </li>
  );
}

// ─── Sayfa ────────────────────────────────────────────────────────────────────

export default function IngiltereVizePage() {
  return (
    <article className="w-full bg-white font-sans">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <header className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=80&auto=format&fit=crop"
            alt="Londra Tower Bridge gece manzarası"
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 py-16 lg:py-24">
          <SectionTag>Vize Rehberi</SectionTag>
          <h1 className="font-serif text-4xl lg:text-5xl leading-tight tracking-tight text-white mb-5">
            İngiltere Vize Başvurusu{" "}
            <em className="italic text-blue-300">Rehberi</em>
          </h1>
          <p className="text-lg font-light text-white/70 leading-relaxed max-w-xl mb-10">
            Her yıl milyonlarca kişinin ziyaret ettiği İngiltere, Türk
            vatandaşlarından vize istemektedir. Vize türleri, gerekli belgeler,
            güncel ücretler ve başvuru merkezlerini bu rehberde bulabilirsiniz.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { sayi: "Evet", etiket: "Vize zorunlu" },
              { sayi: "15", etiket: "Ortalama iş günü" },
              { sayi: "10 yıl", etiket: "Maks. vize süresi" },
              { sayi: "7", etiket: "Başvuru merkezi" },
            ].map((s) => (
              <div
                key={s.etiket}
                className="bg-white/10 border border-white/20 rounded-xl p-4 text-center backdrop-blur-sm"
              >
                <p className="font-serif text-2xl leading-none text-white tracking-tight mb-1">
                  {s.sayi}
                </p>
                <p className="text-xs text-white/60 font-light">{s.etiket}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Görsel bant ───────────────────────────────────────────────────── */}
      {/*  <div className="relative h-56 lg:h-72 w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=1600&q=80&auto=format&fit=crop"
          alt="Londra Big Ben ve Thames Nehri"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
      </div> */}

      {/* ── Ana içerik ────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 py-14 lg:py-20 space-y-20">
        {/* ── Giriş ─────────────────────────────────────────────────────── */}
        <section aria-labelledby="giris">
          <SectionTag>Genel Bilgi</SectionTag>
          <h2
            id="giris"
            className="font-serif text-3xl text-slate-800 tracking-tight leading-snug mb-4"
          >
            İngiltere Vize İstiyor Mu?
          </h2>
          <p className="text-base font-light text-slate-500 leading-relaxed mb-5">
            Evet, İngiltere Türk vatandaşlarından vize istemektedir. Umuma
            mahsus (bordo), hizmet (gri) ve hususi (yeşil) pasaport sahiplerinin
            tamamının vize başvurusunda bulunması zorunludur.
          </p>
          <InfoBox type="info">
            Aldığınız İngiltere vizesiyle yalnızca İngiltere&apos;ye değil;
            Kuzey İrlanda, Galler ve İskoçya&apos;ya da seyahat edebilirsiniz.
            Öte yandan daha önce C tipi kısa süreli vize ile İngiltere&apos;ye
            giriş yapmış olanlar, İngiltere&apos;de bulunmalarına izin veren
            vize süresi içinde İrlanda&apos;ya da giriş yapabilmektedir.
          </InfoBox>
        </section>

        {/* ── Uçak Bileti Notu ──────────────────────────────────────────── */}
        <section aria-labelledby="ucak-bileti">
          <SectionTag>Başvuru İpucu</SectionTag>
          <h2
            id="ucak-bileti"
            className="font-serif text-3xl text-slate-800 tracking-tight leading-snug mb-4"
          >
            Vize başvurusunda uçak bileti
          </h2>
          <p className="text-base font-light text-slate-500 leading-relaxed">
            Konsoloslukların vize sürecinde talep ettiği belgeler arasında uçak
            bileti rezervasyonu yer almaktadır. Biletinizi erkenden almanız hem
            erken rezervasyon indirimlerinden faydalanmanızı hem de başvurunuzu
            eksiksiz tamamlamanızı kolaylaştırır.
          </p>
        </section>

        {/* ── Vize Türleri ──────────────────────────────────────────────── */}
        <section aria-labelledby="vize-turleri">
          <SectionTag>Vize Türleri</SectionTag>
          <h2
            id="vize-turleri"
            className="font-serif text-3xl text-slate-800 tracking-tight leading-snug mb-4"
          >
            İngiltere vize türleri
          </h2>
          <p className="text-base font-light text-slate-500 leading-relaxed mb-8">
            Seyahat süreniz ve amacınıza göre farklı vize türlerine başvurmanız
            gerekmektedir.
          </p>

          {/* C Tipi */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden mb-5">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center gap-3">
              <span className="inline-block bg-slate-800 text-white text-xs font-medium px-2.5 py-1 rounded-md tracking-wide">
                C Tipi
              </span>
              <h3 className="text-base font-medium text-slate-800">
                Kısa Süreli Vize
              </h3>
            </div>
            <div className="px-6 py-5 space-y-4">
              <p className="text-sm font-light text-slate-500 leading-relaxed">
                1 yıl içerisinde 180 günü aşmamak kaydıyla verilen C tipi vize;
                turistik, kültürel ve aile ziyareti gibi kısa süreli seyahatleri
                kapsar. 6 aylık, 2 yıllık, 5 yıllık veya 10 yıllık olarak
                alınabilir.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    ad: "Turistik Vize",
                    ac: "Turistik seyahatler için. En az 6 aylık alınır; süre uzatılabilir.",
                  },
                  {
                    ad: "Ticari Vize",
                    ac: "İş seyahatleri, müşteri toplantıları ve fuar ziyaretleri için. Davetiye zorunludur.",
                  },
                  {
                    ad: "Aile / Akraba / Arkadaş Ziyareti",
                    ac: "İlişki bağını kanıtlayan belgeler ve belediyeden davetiye mektubu gereklidir.",
                  },
                  {
                    ad: "Öğrenci Vizesi",
                    ac: "Dil okulu, eğitim programları ve stajlar için.",
                  },
                  {
                    ad: "Transit Vize",
                    ac: "İngiltere üzerinden 3. bir ülkeye aktarmalı seyahat edenler için.",
                  },
                ].map((v) => (
                  <div
                    key={v.ad}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="text-sm font-medium text-slate-800 mb-1">
                      {v.ad}
                    </p>
                    <p className="text-xs font-light text-slate-500 leading-relaxed">
                      {v.ac}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Çalışma Vizeleri */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden mb-5">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center gap-3">
              <span className="inline-block bg-blue-500 text-white text-xs font-medium px-2.5 py-1 rounded-md tracking-wide">
                Çalışma
              </span>
              <h3 className="text-base font-medium text-slate-800">
                Çalışma Vizeleri
              </h3>
            </div>
            <div className="px-6 py-5">
              <p className="text-sm font-light text-slate-500 leading-relaxed mb-5">
                İngiltere&apos;de çalışmak için işveren sponsorluğu gereklidir.
                İşverenden alınacak davetiye ve sponsorluk sertifikası
                başvurunun temel belgelerini oluşturur.
              </p>
              <div className="space-y-4">
                {[
                  {
                    etiket: "Tier 1 Vizesi",
                    renk: "bg-violet-50 border-violet-200",
                    badge: "bg-violet-100 text-violet-800",
                    alt: [
                      "Tier 1 Genel Vize",
                      "Tier 1 Girişimci Vizesi",
                      "Tier 1 Yatırımcı Vizesi",
                      "Tier 1 Olağanüstü Yetenekliler Vizesi",
                      "Tier 1 Üniversite Mezunu Girişimci Vizesi",
                    ],
                    aciklama:
                      "Belirli alanlarda çalışacak, yatırım yapacak veya girişimcilik faaliyetinde bulunacak kişiler için 5 farklı kategoriye ayrılmıştır.",
                  },
                  {
                    etiket: "Tier 2 Vizesi",
                    renk: "bg-blue-50 border-blue-200",
                    badge: "bg-blue-100 text-blue-800",
                    alt: [],
                    aciklama:
                      "İşverenden sponsorluk sertifikası alınarak başvurulan bu vize türüyle İngiltere&apos;de ikamet edilebilmektedir.",
                  },
                  {
                    etiket: "Tier 4 Vizesi",
                    renk: "bg-emerald-50 border-emerald-200",
                    badge: "bg-emerald-100 text-emerald-800",
                    alt: ["Tier 4 (Genel)", "Tier 4 (Çocuk)"],
                    aciklama:
                      "Lisans, yüksek lisans ve doktora gibi uzun süreli eğitim programları için alınan öğrenci vizesidir.",
                  },
                  {
                    etiket: "Tier 5 Vizesi",
                    renk: "bg-amber-50 border-amber-200",
                    badge: "bg-amber-100 text-amber-800",
                    alt: [],
                    aciklama:
                      "Gönüllü çalışma veya geçici çalışma izni için başvurulan bu vize türünde ilgili sponsor kurumdan kabul belgesi alınması zorunludur.",
                  },
                ].map((t) => (
                  <div
                    key={t.etiket}
                    className={`border rounded-xl p-5 ${t.renk}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded ${t.badge}`}
                      >
                        {t.etiket}
                      </span>
                    </div>
                    <p className="text-sm font-light text-slate-600 leading-relaxed mb-3">
                      {t.aciklama}
                    </p>
                    {t.alt.length > 0 && (
                      <ul className="space-y-1">
                        {t.alt.map((a) => (
                          <li
                            key={a}
                            className="flex items-center gap-2 text-xs font-light text-slate-500"
                          >
                            <span className="w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Başvuru Şartları ──────────────────────────────────────────── */}
        <section aria-labelledby="basvuru-sartlari">
          <SectionTag>Şartlar</SectionTag>
          <h2
            id="basvuru-sartlari"
            className="font-serif text-3xl text-slate-800 tracking-tight leading-snug mb-6"
          >
            İngiltere vize başvuru şartları
          </h2>
          <ul className="space-y-3">
            {[
              "Vize başvuruları, seyahat tarihinden en fazla 3 ay öncesine kadar yapılabilmektedir.",
              "Başvuru formu çevrimiçi, eksiksiz ve İngilizce olarak doldurulmalı; çıktısı ıslak imzayla imzalanmalıdır.",
              "Parmak izi ve yüz fotoğrafı için resmi vize danışmanlık merkezlerine bizzat gidilmesi zorunludur.",
              "Daha önce İngiltere için alınan parmak izleri geçerli sayılmaz. Her yeni seyahat başvurusunda parmak izi yeniden alınmaktadır.",
              "Kısa süreli vize 6 ay, 2 yıl, 5 yıl veya 10 yıllık alınabilir; ancak 1 yıl içinde 6 aydan fazla kalınması mümkün değildir.",
              "18 yaş altı çocukların tek başına, ebeveynden biriyle ya da her ikisiyle seyahat edeceği başvuruda belirtilmelidir. Tek başına seyahat edecek çocuklar için muvafakatname zorunludur.",
            ].map((s, i) => (
              <CheckItem key={i}>{s}</CheckItem>
            ))}
          </ul>
        </section>

        {/* ── Gerekli Belgeler ──────────────────────────────────────────── */}
        <section aria-labelledby="belgeler">
          <SectionTag>Belgeler</SectionTag>
          <h2
            id="belgeler"
            className="font-serif text-3xl text-slate-800 tracking-tight leading-snug mb-4"
          >
            İngiltere vizesi için gerekli belgeler
          </h2>
          <p className="text-base font-light text-slate-500 leading-relaxed mb-8">
            Tüm belgeler eksiksiz ve güncel olarak hazırlanmalıdır. Eksik evrak
            başvuruyu geciktirebilir ya da reddedilmesine yol açabilir.
          </p>

          <h3 className="font-serif text-xl text-slate-800 mb-4 tracking-tight">
            Tüm başvuru sahipleri için
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              "Pasaport — dönüş tarihinden itibaren en az 6 ay geçerli, en fazla 10 yıllık, en az 2 boş sayfası bulunan",
              "Eski pasaportların asılları (varsa)",
              "İngiltere vize başvuru formu — online doldurup çıktı alınmış, ıslak imzalı",
              "2 adet biyometrik fotoğraf — 3,5 x 4,5 cm, beyaz arka fon, son 3 ayda çekilmiş",
              "Nüfus cüzdanı fotokopisi",
              "Vukuatlı nüfus kayıt örneği",
              "Seyahat sağlık sigortası poliçesi",
              "Vize talep dilekçesi — İngilizce, seyahat amacı belirtilmiş",
              "Son 3 yıl içinde alınan Schengen vize fotokopileri (varsa)",
              "Banka hesap cüzdanı — son 3 aya ait aktif hareketler, TL / EUR / USD / GBP bakiyesi",
              "Konaklama ve uçuş rezervasyonları",
              "Tapu, araç ruhsatı ve kredi kartı ekstreleri (varsa)",
              "Askerlik durum belgesi — İngilizce (erkekler için)",
              "Belediyeden davetiye mektubu (varsa)",
              "Vize sponsor dilekçesi (maddi durumu yetersiz olanlar için)",
            ].map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3.5"
              >
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0 mt-0.5 text-blue-400"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs font-light text-slate-600 leading-relaxed">
                  {b}
                </span>
              </div>
            ))}
          </div>

          <h3 className="font-serif text-xl text-slate-800 mb-4 tracking-tight">
            Gruba özel ek belgeler
          </h3>
          <div className="space-y-3">
            {[
              {
                grup: "Sigortalı çalışanlar",
                belgeler: [
                  "SGK işe giriş belgesi",
                  "Son 3 aya ait maaş bordrosu",
                  "Görev belgesi veya meslek görev kaydı (ıslak imzalı, kaşeli, şirket antetli)",
                ],
              },
              {
                grup: "İşverenler",
                belgeler: [
                  "Güncel iş yeri faaliyet belgesi veya Ticaret Sicil Kaydı",
                ],
              },
              {
                grup: "Maddi durumu yetersiz olanlar",
                belgeler: [
                  "1. derece yakından (anne, baba, eş, çocuk) alınan vize sponsor dilekçesi",
                ],
              },
            ].map((g) => (
              <div
                key={g.grup}
                className="border border-slate-200 rounded-xl overflow-hidden"
              >
                <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
                  <p className="text-sm font-medium text-slate-800">{g.grup}</p>
                </div>
                <ul className="px-5 py-4 space-y-2">
                  {g.belgeler.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm font-light text-slate-500 leading-relaxed"
                    >
                      <svg
                        width="13"
                        height="13"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        className="flex-shrink-0 mt-0.5 text-blue-400"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <InfoBox type="info">
              <strong className="font-medium">
                Sponsor dilekçesi hakkında:
              </strong>{" "}
              Anne, baba, eş veya çocuktan alınan sponsorluk dilekçesi
              konsolosluklar tarafından kabul edilir. Vize başvurusuna büyük
              önem taşıyan bu belge, maddi durumu yetersiz öğrenci ve işsizlerin
              de başvurabilmesini sağlar.
            </InfoBox>
          </div>
        </section>

        {/* ── Vize Ücretleri ────────────────────────────────────────────── */}
        <section aria-labelledby="vize-ucreti">
          <SectionTag>Ücretler</SectionTag>
          <h2
            id="vize-ucreti"
            className="font-serif text-3xl text-slate-800 tracking-tight leading-snug mb-4"
          >
            İngiltere vize ücreti ne kadar?
          </h2>
          <p className="text-base font-light text-slate-500 leading-relaxed mb-6">
            Ücretler vize türüne göre değişmektedir. Konsolosluk harcına ek
            olarak biyometrik fotoğraf, belge çıktısı ve kargo giderleri de
            hesaba katılmalıdır. Aşağıdaki tablo Ağustos 2026 itibarıyla geçerli
            olan resmi ücretleri yansıtmaktadır.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-5 py-3.5 text-xs font-medium text-slate-700 tracking-wide uppercase">
                    Vize Türü
                  </th>
                  <th className="text-right px-5 py-3.5 text-xs font-medium text-slate-700 tracking-wide uppercase">
                    Ücret
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {vizUcretleri.map((v, i) => (
                  <tr
                    key={v.tur}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                  >
                    <td className="px-5 py-3.5 font-light text-slate-700">
                      {v.tur}
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <span className="inline-block bg-blue-50 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-md">
                        {v.ucret}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Görsel ara bant ───────────────────────────────────────────── */}
        <div className="relative aspect-[21/6] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=1400&q=80&auto=format&fit=crop"
            alt="Londra Westminster Köprüsü ve Parlamento binası"
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
            <p className="font-serif text-2xl text-white tracking-tight text-center px-4">
              Londra sizi bekliyor.
            </p>
          </div>
        </div>

        {/* ── Başvuru Merkezleri ────────────────────────────────────────── */}
        <section aria-labelledby="basvuru-merkezleri">
          <SectionTag>Başvuru Merkezleri</SectionTag>
          <h2
            id="basvuru-merkezleri"
            className="font-serif text-3xl text-slate-800 tracking-tight leading-snug mb-4"
          >
            Türkiye&apos;deki İngiltere vize başvuru merkezleri
          </h2>
          <p className="text-base font-light text-slate-500 leading-relaxed mb-6">
            İngiltere vizesi için başvurular doğrudan konsolosluklara değil,
            konsolosluklarca görevlendirilen resmi vize danışma merkezlerine
            yapılmaktadır. Bölge ayrımı olmadığından size en yakın merkezi
            tercih edebilirsiniz. Başvurular yalnızca{" "}
            <strong className="font-medium text-slate-700">
              İngiltere İstanbul Başkonsolosluğu
            </strong>{" "}
            tarafından değerlendirilmektedir.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {merkezler.map((m) => (
              <div
                key={m.sehir}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white"
              >
                <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
                  <h3 className="text-sm font-medium text-slate-800">
                    {m.sehir}
                  </h3>
                </div>
                <div className="px-5 py-4 space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="flex-shrink-0 mt-0.5 text-slate-400"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-xs font-light text-slate-500 leading-relaxed">
                      {m.adres}
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="flex-shrink-0 text-slate-400"
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-xs font-light text-slate-500">{m.tel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Başvuru Süreci ────────────────────────────────────────────── */}
        <section aria-labelledby="basvuru-sureci">
          <SectionTag>Başvuru Süreci</SectionTag>
          <h2
            id="basvuru-sureci"
            className="font-serif text-3xl text-slate-800 tracking-tight leading-snug mb-6"
          >
            Adım adım başvuru süreci
          </h2>
          <ol className="space-y-4">
            {[
              {
                no: "01",
                title: "Vize türünü ve süresini belirleyin",
                desc: "Seyahat amacınıza ve sürenize göre uygun vize türünü seçin. 6 aylıktan 10 yıllığa kadar seçenekler mevcut.",
              },
              {
                no: "02",
                title: "Online başvuru formunu doldurun",
                desc: "Form İngilizce, eksiksiz ve hatasız doldurulmalı; ıslak imzalı çıktısı hazırlanmalıdır.",
              },
              {
                no: "03",
                title: "Vize ücretini yatırın ve randevu alın",
                desc: "Ücret ödendikten sonra size en yakın resmi danışma merkezinden randevu alabilirsiniz.",
              },
              {
                no: "04",
                title: "Merkeze şahsen gidin",
                desc: "Parmak izi ve yüz fotoğrafı için danışma merkezine bizzat gitmeniz zorunludur.",
              },
              {
                no: "05",
                title: "Belgeleri teslim edin",
                desc: "Hazırladığınız tüm evrakları merkeze verin. Danışma merkezi belgeleri doğrudan konsolosluğa iletir; konsolosluğa ayrıca gitmeniz gerekmez.",
              },
              {
                no: "06",
                title: "Başvuruyu takip edin",
                desc: "Ortalama 15 iş günü içinde sonuçlanan başvurunuzu online veya danışma merkezi üzerinden takip edebilirsiniz.",
              },
            ].map((adim) => (
              <StepCard key={adim.no} {...adim} />
            ))}
          </ol>
          <div className="mt-5">
            <InfoBox type="warning">
              Ek belge talebi veya resmi tatillerin süreci uzatması durumunda
              değerlendirme süresi
              <strong className="font-medium"> 21 iş gününe</strong> kadar
              çıkabilmektedir. Bu nedenle başvurunuzu seyahat tarihinizden
              yeterince önce tamamlamanız önerilir.
            </InfoBox>
          </div>
        </section>

        {/* ── SSS ───────────────────────────────────────────────────────── */}
        <section aria-labelledby="sss">
          <SectionTag>SSS</SectionTag>
          <h2
            id="sss"
            className="font-serif text-3xl text-slate-800 tracking-tight leading-snug mb-6"
          >
            Sıkça sorulan sorular
          </h2>
          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {[
              {
                soru: "İngiltere vizesi kaç günde çıkar?",
                cevap:
                  "Teslim edilen belgeler incelendikten sonra süreç ortalama 15 iş günü içinde tamamlanır. Ek belge talebi veya resmi tatil nedeniyle bu süre 21 iş gününe uzayabilir.",
              },
              {
                soru: "Her seyahatte yeniden parmak izi vermek gerekiyor mu?",
                cevap:
                  "Evet. İngiltere için alınan parmak izleri sonraki başvurularda geçerli sayılmaz. Her yeni başvuruda parmak izi yeniden alınmaktadır.",
              },
              {
                soru: "Yeşil pasaportlular İngiltere'ye vizesiz gidebilir mi?",
                cevap:
                  "Hayır. Umuma mahsus (bordo), hizmet (gri) ve hususi (yeşil) pasaport sahiplerinin tamamı vize başvurusunda bulunmak zorundadır.",
              },
              {
                soru: "İngiltere vizesiyle İrlanda'ya gidebilir miyim?",
                cevap:
                  "Daha önce C tipi kısa süreli vize ile İngiltere'ye giriş yapmış olan Türk vatandaşları, İngiltere'de bulunmalarına izin veren vize süresi içinde İrlanda'ya da giriş yapabilir.",
              },
              {
                soru: "Vize başvurusu ne kadar önceden yapılabilir?",
                cevap:
                  "Seyahat tarihinden en fazla 3 ay öncesine kadar başvuru yapılabilmektedir.",
              },
              {
                soru: "Konsolosluğa bizzat gitmem gerekiyor mu?",
                cevap:
                  "Başvurunuzu doğrudan konsolosluğa yapmanız mümkün değildir. Resmi vize danışma merkezleri aracılığıyla başvuru yapılır; belgeler merkez tarafından konsolosluğa iletilir.",
              },
            ].map((item) => (
              <details
                key={item.soru}
                className="group border-b border-slate-200"
              >
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none">
                  <span className="text-sm font-medium text-slate-800 group-hover:text-blue-500 transition-colors">
                    {item.soru}
                  </span>
                  <span className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center flex-shrink-0 text-slate-400 text-sm group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="text-sm font-light text-slate-500 leading-relaxed pb-5">
                  {item.cevap}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        {/*  <section className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="font-serif text-3xl text-white tracking-tight leading-snug mb-3">
            Avrupa&apos;da çalışmayı planlıyor musunuz?
          </h2>
          <p className="text-sm font-light text-white/60 leading-relaxed mb-8 max-w-md mx-auto">
            Almanya ve Avusturya çalışma vizesi başvuru şansınızı puan hesaplama
            araçlarımızla dakikalar içinde öğrenin.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/araclar/almanya-chancen-karte-puan-hesaplama"
              className="inline-block bg-white text-slate-900 text-sm font-medium px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Almanya Chancen Karte
            </a>
            <a
              href="/araclar/avusturya-red-white-red-kart-puan-hesaplama"
              className="inline-block border border-white/30 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Avusturya Red-White-Red Kart
            </a>
          </div>
        </section> */}
      </div>
    </article>
  );
}
