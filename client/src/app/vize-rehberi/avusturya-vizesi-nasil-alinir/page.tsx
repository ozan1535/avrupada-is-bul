import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Avusturya Vize Nasıl Alınır - Avusturya Vizesi Rehberi 2026",
  description:
    "Avusturya vizesi nasıl alınır? Gerekli belgeler, başvuru şartları, vize türleri, ücretler ve randevu süreci — 2026 yılı için güncel ve eksiksiz rehber. T.C. vatandaşları için adım adım kılavuz.",
  keywords: [
    "Avusturya vize başvurusu",
    "Avusturya vizesi nasıl alınır 2026",
    "Avusturya turistik vize belgeleri",
    "Avusturya vize ücreti",
    "Avusturya vize randevu",
    "Avusturya Schengen vizesi",
    "Avusturya vize kaç günde çıkar",
    "Avusturya D tipi vize",
    "Avusturya vize şartları Türkiye",
    "Viyana vize başvurusu",
  ],
  openGraph: {
    title:
      "Avusturya Vize Başvurusu 2026 — Türk Vatandaşları İçin Eksiksiz Rehber",
    description:
      "C ve D tipi vize türleri, gerekli belgeler, ücretler ve randevu süreci dahil Avusturya vizesi için bilmeniz gereken her şey.",
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: "https://images.unsplash.com/photo-1702412130953-f9cb400da21b?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Viyana Schönbrunn Sarayı — Avusturya vize rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avusturya Vize Başvurusu 2026 | Türkler İçin Güncel Rehber",
    description:
      "Vize türleri, belgeler, ücretler ve randevu — Avusturya'ya gitmek için bilmeniz gereken her şey tek sayfada.",
  },
  alternates: {
    canonical: "/vize-rehberi/avusturya-vize-basvurusu",
  },
};

/* ─────────────────────────── DATA ─────────────────────────── */

const visaTypes = [
  {
    code: "C",
    label: "Kısa Süreli Vize",
    sublabel: "Schengen Vizesi",
    color: "blue",
    duration: "180 gün içinde 90 gün",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
    imageAlt: "Avrupa şehir turu — kısa süreli Schengen vizesi",
    desc: "Turistik gezi, ticari ziyaret, aile/arkadaş ziyareti, Erasmus ve kültürel etkinlikler gibi 90 günü aşmayan tüm kısa süreli seyahatler bu kategoriye giriyor.",
    subtypes: [
      {
        name: "Turistik Vize",
        detail:
          "90 güne kadar tatil amaçlı seyahatler için. Seyahat tarihinden en erken 3 ay, en geç 4 hafta önce başvurulmalı. Avusturya'da çalışmak kesinlikle yasak.",
      },
      {
        name: "Ticari / İş & Fuar Ziyareti Vizesi",
        detail:
          "Toplantı, fuar, sözleşme imzalama gibi ticari amaçlı seyahatler için. Başvuruya Avusturyalı firmanın davet mektubu veya fuar katılım belgesi eklenmelidir.",
      },
      {
        name: "Aile, Akraba & Arkadaş Ziyareti Vizesi",
        detail:
          "Avusturya'da ikamet eden yakınlarınızı ziyaret etmek için. Süre 3 aydır; başvuruda ev sahibinin davet yazısı zorunlu.",
      },
      {
        name: "Kültürel, Sportif & Konferans Vizesi",
        detail:
          "Kültürel etkinlik, spor organizasyonu veya kongreye katılım için. Etkinliği düzenleyen kurumun daveti başvuru dosyasında bulunmalı.",
      },
      {
        name: "Kısa Süreli Öğrenim (Erasmus) Vizesi",
        detail:
          "Üniversitelerarası iş birliği kapsamındaki öğrenci veya personel için. Türkiye'deki ve Avusturya'daki üniversitelerden yazılı belge zorunlu.",
      },
    ],
  },
  {
    code: "D",
    label: "Uzun Süreli Vize",
    sublabel: "Ulusal Vize",
    color: "indigo",
    duration: "6 aydan uzun",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
    imageAlt: "Avusturya'da uzun dönem yaşam ve yerleşim",
    desc: "Avusturya'ya 6 ayı aşan sürede yerleşmek veya kalmak isteyenler için. Aile birleşimi, çalışma ve öğrenci vizelerini kapsıyor. Stajlar 90 günü aşıyorsa D tipi başvuru yapılmalı.",
    subtypes: [
      {
        name: "Aile Birleşimi Vizesi",
        detail:
          "Avusturya'da yasal olarak ikamet eden aile üyesine kavuşmak için.",
      },
      {
        name: "Çalışma Vizesi",
        detail:
          "Avusturya'da uzun süreli istihdam için. Kültürel uyum, dil yeterliliği ve çalışma koşulları değerlendiriliyor.",
      },
      {
        name: "Uzun Süreli Öğrenci Vizesi",
        detail:
          "Avusturya'da tam zamanlı lisans, yüksek lisans veya doktora programı için.",
      },
      {
        name: "Uzun Süreli Staj Vizesi",
        detail:
          "90 günü aşan stajlar D tipi vizeye tabi. 90 günün altındaki stajlar C tipi ile karşılanıyor.",
      },
    ],
  },
];

const generalDocs = [
  {
    icon: "📘",
    name: "Geçerli Pasaport",
    detail:
      "10 yıldan eski olmamalı; seyahat sonrasında en az 3 ay geçerliliği kalmalı. Yıpranmamış ve en az 2 boş sayfası olmalı. Pasaportla birlikte eski vizelerin fotokopileri de sunulmalı.",
  },
  {
    icon: "📝",
    name: "Vize Başvuru Formu",
    detail:
      "İlgili vize türüne ait form başvuran tarafından eksiksiz doldurulup ıslak imzayla imzalanmalı.",
  },
  {
    icon: "📷",
    name: "2 Adet Biyometrik Fotoğraf",
    detail:
      "35×45 mm, beyaz arka fon; yüz ve boyun açıkça görünmeli. Fotoğraf yeni çekilmiş ve daha önce herhangi bir Schengen başvurusunda kullanılmamış olmalı.",
  },
  {
    icon: "🏠",
    name: "Tam Vukuatlı Nüfus Kayıt Örneği",
    detail: "Güncel tarihli; aile bilgisi ve ikametgâh adresini içermeli.",
  },
  {
    icon: "🪪",
    name: "Nüfus Cüzdanı Fotokopisi",
    detail: "Arkalı ön lü fotokopi.",
  },
  {
    icon: "🏥",
    name: "Seyahat Sağlık Sigortası",
    detail:
      "Tüm Schengen bölgesini kapsayan, seyahat süresince geçerli; minimum 30.000 € teminat.",
  },
  {
    icon: "✈️",
    name: "Ulaşım & Konaklama Rezervasyonu",
    detail:
      "Gidiş-dönüş bilet rezervasyonu ve onaylı otel / konaklama belgesi. Özel araç kullanacaklar için araç ruhsatı, yeşil sigorta ve uluslararası ehliyet ayrıca gerekli.",
  },
  {
    icon: "💰",
    name: "Son 3 Aylık Banka Dökümü",
    detail:
      "Bankadan son 1 hafta içinde alınmış; banka kaşesi ve yetkili imzası olan orijinal döküm veya fotokopi.",
  },
];

const employmentDocs: Record<string, { icon: string; text: string }[]> = {
  "Sigortalı Çalışan": [
    {
      icon: "📄",
      text: "İşveren kurumdan izin belgesi (görev, maaş, izin tarihleri, işe dönüş taahhüdü, masraf karşılama bilgisi — imzalı ve kaşeli)",
    },
    {
      icon: "🧾",
      text: "Son 3 aya ait maaş bordrosu (kurum kaşeli ve ıslak imzalı)",
    },
    { icon: "📋", text: "SGK hizmet dökümü ve işe giriş bildirgesi" },
  ],
  "İşveren / Serbest Meslek": [
    {
      icon: "📜",
      text: "Şirket antetli kâğıda seyahat amacı, planı ve pozisyon dilekçesi",
    },
    { icon: "🏛️", text: "Ticaret odası kaydı ve vergi levhası" },
    { icon: "📊", text: "Son 1 yılın vergi beyannamesi" },
    { icon: "📰", text: "Ticaret sicil gazetesi fotokopisi ve imza sirküleri" },
  ],
  Öğrenci: [
    { icon: "🎓", text: "Güncel öğrenci belgesi (asıl + fotokopi)" },
    {
      icon: "👨‍👩‍👦",
      text: "Sponsor ebeveynin taahhütnamesi (seyahat masrafları, ekonomik durum, iş ve pasaport belgeleri ekte)",
    },
  ],
  Emekli: [
    { icon: "📑", text: "Emekli maaşı belgesi veya emekli sandığı dökümü" },
    { icon: "💳", text: "Güncel banka dökümü" },
  ],
};

const fees = [
  { label: "Yetişkin (12 yaş ve üzeri)", fee: "90 Euro", badge: "" },
  { label: "Çocuk (6–12 yaş arası)", fee: "45 Euro", badge: "İndirimli" },
  { label: "Çocuk (0–6 yaş arası)", fee: "Ücretsiz", badge: "Muaf" },
];

const centers = [
  {
    city: "Ankara",
    name: "Avusturya Büyükelçiliği",
    address: "Atatürk Bulvarı No:189, 06680, Kavaklıdere / ANKARA",
    phone: "+90 312 405 51 90",
    coverage:
      "Ankara, Adana, Antalya, İzmir (örtüşme — aşağıya bakın), Diyarbakır, Erzurum, Gaziantep, Konya, Samsun, Trabzon ve diğer pek çok il",
  },
  {
    city: "İstanbul",
    name: "Avusturya Başkonsolosluğu",
    address: "Köybaşı Mah. No:46, 34464 Yeniköy / İSTANBUL",
    phone: "+90 212 363 84 10",
    coverage:
      "İstanbul, Bursa, Kocaeli, Sakarya, Tekirdağ, Edirne, Kırklareli, Çanakkale, Balıkesir, Bolu, Bilecik, Zonguldak",
  },
  {
    city: "İzmir",
    name: "İzmir Fahri Konsolosluğu",
    address: "Plevne Bulvarı No:1, Kat:5, Daire:9, Alsancak / İZMİR",
    phone: "+90 232 464 06 30",
    coverage: "İzmir, Aydın, Denizli, Manisa, Uşak",
  },
];

const steps = [
  {
    num: "01",
    title: "Vize Türünü Belirle",
    desc: "Seyahat amacına ve süresine göre C (kısa) ya da D (uzun) tipi vize seçin.",
  },
  {
    num: "02",
    title: "Evrakları Hazırla",
    desc: "Meslek grubunuza göre genel ve ek belgeler eksiksiz, güncel tarihli olacak şekilde tamamlanmalı.",
  },
  {
    num: "03",
    title: "Formu Doldur & İmzala",
    desc: "İlgili vize başvuru formunu başvuran bizzat doldurup imzalamalı.",
  },
  {
    num: "04",
    title: "Randevu Al",
    desc: "İDATA veya yetkili acenteler üzerinden randevu alın. Seyahat tarihinden en geç 15 gün önce — yoğun dönemlerde 4 hafta önceden harekete geçin.",
  },
  {
    num: "05",
    title: "Başvuruyu Teslim Et",
    desc: "Avusturya Konsolosluğu'na şahsen başvuru yapılamaz; yetkili başvuru merkezi veya acente üzerinden teslim edin.",
  },
  {
    num: "06",
    title: "Pasaportunuzu Teslim Alın",
    desc: "Sonuç genellikle 15 günde açıklanır. Pasaportunuz kargo ile gönderilir ya da acenteden elden teslim alınır.",
  },
];

const faqs = [
  {
    q: "Avusturya vizesi kaç günde çıkıyor?",
    a: "Standart süreç 15 iş günü. Resmi tatiller, ek evrak talebi veya yoğunluk dönemlerinde bu süre 45 güne uzayabiliyor. Seyahat tarihinizden en az 6 hafta önce başvurmanız riski azaltır.",
  },
  {
    q: "Schengen vizem varsa Avusturya'ya girebilir miyim?",
    a: "Evet. Geçerli Schengen vizesi olan bordo pasaport sahibi T.C. vatandaşları, 180 gün içinde 90 günü aşmamak kaydıyla Avusturya dahil tüm Schengen ülkelerine giriş yapabilir.",
  },
  {
    q: "Avusturya vizesine kimler direkt başvurabilir?",
    a: "Avusturya Konsolosluğu bireysel başvuru kabul etmiyor. Başvuruların yetkili vize merkezleri veya acenteler aracılığıyla yapılması gerekiyor. İstanbul yetki alanındaki bazı başvurucular parmak izi kaydı varsa şahsen gitmeden başvurabiliyor.",
  },
  {
    q: "Sabit geliri olmayan kişi nasıl başvuruyor?",
    a: "Öğrenci, ev hanımı veya sigortalı olmayan kişilerin birinci derece aile ferdi sponsor olabilir. Ebeveyn, eş veya aile üyesinin taahhütnamesi ile ekonomik belgeler dosyaya eklenir.",
  },
  {
    q: "Vize için uçak bileti almak zorunlu mu?",
    a: "Zorunlu belgeler listesinde yer almıyor, ancak rezervasyon bulunması olumlu etki yaratıyor. İptal edilebilir/esnek bilet rezervasyonları önerilir; vize onaylanmadan kesin alım yapılmaması daha güvenli.",
  },
  {
    q: "Vize ücreti geri alınabiliyor mu?",
    a: "Vize ücreti başvuru yapıldıktan sonra iade edilmiyor — başvurunun sonuçlanıp reddedilse dahi. Bu nedenle evrakların eksiksiz hazırlanması kritik.",
  },
];

/* ─────────────────────────── COMPONENT ─────────────────────────── */

export default function AvusturyaVizePage() {
  return (
    <div
      className={`${dmSerif.variable} ${dmSans.variable} bg-slate-50 text-slate-900 font-sans`}
    >
      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="relative h-screen min-h-[560px] max-h-[760px]">
          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80"
            alt="Schönbrunn Sarayı, Viyana — Avusturya vize rehberi"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/65 via-slate-900/40 to-slate-900/90" />

          <div className="relative h-full flex flex-col justify-end">
            <div className="mx-auto w-full max-w-5xl px-6 pb-16">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse inline-block" />
                  Vize Rehberi · 2026
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-medium px-4 py-2 rounded-full">
                  🇦🇹 Avusturya
                </span>
              </div>

              <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-5 max-w-3xl">
                Avusturya Vize Başvurusu:
                <br />
                <span className="text-blue-300">Adım Adım</span> Eksiksiz Rehber
              </h1>

              <p className="text-white/70 text-lg md:text-xl max-w-2xl font-sans leading-relaxed mb-10">
                T.C. vatandaşları için vize türleri, gerekli belgeler, başvuru
                şartları, ücretler ve randevu süreci — 2026 yılı güncel
                bilgilerle tek sayfada.
              </p>

              <div className="flex flex-wrap gap-8">
                {[
                  { v: "2", l: "Vize Türü" },
                  { v: "15", l: "İş Günü Süreç" },
                  { v: "3", l: "Başvuru Merkezi" },
                ].map((s) => (
                  <div key={s.l} className="flex items-baseline gap-2">
                    <span className="font-serif text-4xl text-blue-400">
                      {s.v}
                    </span>
                    <span className="text-white/55 text-sm">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── İÇİNDEKİLER ── */}
      <nav
        className="mx-auto max-w-5xl px-6 py-10"
        aria-label="Sayfa içindekiler"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-4">
            Bu Rehberde
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-10">
            {[
              ["#genel", "Kimler Vize Almak Zorunda?"],
              ["#vize-turleri", "Vize Türleri (C ve D Tipi)"],
              ["#sartlar", "Başvuru Şartları"],
              ["#belgeler", "Gerekli Belgeler"],
              ["#ucretler", "Vize Ücretleri"],
              ["#randevu", "Randevu & Başvuru Süreci"],
              ["#merkezler", "Başvuru Merkezleri"],
              ["#adimlar", "Süreç Adımları"],
              ["#sss", "Sıkça Sorulan Sorular"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-slate-600 hover:text-blue-600 transition-colors py-1 flex items-center gap-2 group"
              >
                <span className="w-1 h-1 rounded-full bg-blue-300 group-hover:bg-blue-500 transition-colors flex-shrink-0" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── KİMLER VİZE ALMAK ZORUNDA ── */}
      <section id="genel" className="mx-auto max-w-5xl px-6 pb-16 scroll-mt-20">
        <div className="flex items-start gap-4 mb-7">
          <div className="w-10 h-0.5 bg-blue-500 mt-5 flex-shrink-0" />
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
            Kimler Avusturya Vizesi Almak Zorunda?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          <div className="md:col-span-2 space-y-4">
            <p className="text-slate-600 text-base leading-relaxed">
              Avusturya, Schengen Bölgesi üyesidir. Kültürel mirası, Alplerin
              doğal güzelliği ve Viyana'nın başkent çekimiyle ön plana çıkan bu
              ülkeye seyahat etmek isteyen bordo (umuma mahsus) pasaport sahibi
              T.C. vatandaşlarının geçerli bir Schengen vizesi edinmesi
              gerekiyor.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Geçerli bir Schengen vizesine sahip olanlar, 180 günlük dönemde 90
              günü aşmamak koşuluyla Avusturya'ya ve diğer Schengen ülkelerine
              özgürce giriş yapabiliyor. Avusturya üzerinden alınan vize tüm
              Schengen coğrafyasında geçerli.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 text-white self-start">
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Vizeden Muaf Pasaportlar
            </p>
            <ul className="space-y-3">
              {[
                "Diplomatik pasaport",
                "Hizmet pasaportu",
                "Hususi pasaport",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-400 text-xs mt-4 leading-relaxed">
              Bu pasaport sahipleri 180 günde 90 günü aşmamak kaydıyla vizesiz
              Avusturya'ya giriş yapabilir.
            </p>
          </div>
        </div>

        {/* pull image */}
        <div className="relative rounded-2xl overflow-hidden h-56">
          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80"
            alt="Viyana şehir merkezi ve tarihi mimari"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent flex items-end p-7">
            <p className="text-white font-serif text-xl max-w-xs leading-snug">
              Avusturya vizeniz Schengen'in 27 ülkesinde geçerli.
            </p>
          </div>
        </div>
      </section>

      {/* ── VİZE TÜRLERİ ── */}
      <section
        id="vize-turleri"
        className="bg-white border-y border-slate-200 py-16 scroll-mt-20"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-10 h-0.5 bg-blue-500 mt-5 flex-shrink-0" />
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
                Avusturya Vize Türleri
              </h2>
              <p className="text-slate-500 text-base mt-2">
                Seyahat sürenize ve amacınıza göre iki ana vize kategorisi var.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            {visaTypes.map((vt) => (
              <div
                key={vt.code}
                className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
              >
                {/* Header */}
                <div className="relative h-48">
                  <img
                    src={vt.image}
                    alt={vt.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/20 flex items-end p-7">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-serif text-5xl text-white/15 leading-none select-none">
                          {vt.code}
                        </span>
                        <div>
                          <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-1">
                            {vt.sublabel}
                          </span>
                          <h3 className="font-serif text-2xl text-white">
                            {vt.label}
                          </h3>
                        </div>
                      </div>
                      <span className="text-white/65 text-sm">
                        ⏱ Azami süre: {vt.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-7">
                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {vt.desc}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {vt.subtypes.map((sub) => (
                      <div
                        key={sub.name}
                        className="bg-slate-50 border border-slate-200 rounded-xl p-5"
                      >
                        <h4 className="font-sans font-semibold text-slate-800 text-sm mb-2">
                          {sub.name}
                        </h4>
                        <p className="text-slate-500 text-sm leading-relaxed">
                          {sub.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BAŞVURU ŞARTLARI ── */}
      <section
        id="sartlar"
        className="mx-auto max-w-5xl px-6 py-16 scroll-mt-20"
      >
        <div className="flex items-start gap-4 mb-10">
          <div className="w-10 h-0.5 bg-blue-500 mt-5 flex-shrink-0" />
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
            Başvuru Şartları
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: "📅",
              title: "Başvuru Zamanlaması",
              body: "Seyahat tarihinden en erken 2 ay, en geç 15 gün önce başvuru yapılmalı. Yoğun dönemlerde 4 hafta önceden randevu takibine başlamanız önerilir.",
            },
            {
              icon: "🏛️",
              title: "Bireysel Başvuru Yok",
              body: "Avusturya Konsolosluğu doğrudan bireysel başvuru kabul etmiyor. Başvurular yetkili vize merkezleri veya acenteler üzerinden yapılmak zorunda.",
            },
            {
              icon: "📘",
              title: "Pasaport Koşulları",
              body: "Son 10 yıl içinde alınmış, yıpranmamış; seyahat bitiminden itibaren en az 3 ay geçerlilik süresi kalan ve en az 2 boş sayfası bulunan pasaport.",
            },
            {
              icon: "📷",
              title: "Fotoğraf Standardı",
              body: "Schengen kriterlerine uygun biyometrik fotoğraf. Daha önce herhangi bir Schengen vizesinde kullanılmamış olması şart.",
            },
            {
              icon: "👆",
              title: "Parmak İzi Zorunluluğu",
              body: "Son 5 yılda Schengen vizesi almış ancak parmak izi verdirilmemiş olan kişilerin bu başvuruda parmak izi vermesi gerekiyor.",
            },
            {
              icon: "📋",
              title: "Evrak Güncelliği",
              body: "Tüm belgeler güncel tarihli hazırlanmalı. Tarihi geçmiş banka dökümü, sigorta veya belgeler reddedilme riskini artırıyor.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-blue-300 hover:shadow-md transition-all"
            >
              {/*  <span className="text-3xl mb-4 block">{item.icon}</span> */}
              <h3 className="font-serif text-lg text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BELGELER ── */}
      <section id="belgeler" className="bg-slate-900 py-20 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-10 h-0.5 bg-blue-400 mt-5 flex-shrink-0" />
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-white">
                Gerekli Belgeler
              </h2>
              <p className="text-slate-400 text-base mt-2">
                Herkes için ortak evraklar + meslek grubuna göre ek belgeler.
              </p>
            </div>
          </div>

          {/* Genel Belgeler */}
          <div className="mb-10">
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-5">
              Tüm Başvurular İçin Zorunlu
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {generalDocs.map((doc) => (
                <div
                  key={doc.name}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-start gap-4 hover:bg-white/8 transition-colors"
                >
                  {/*  <span className="text-2xl flex-shrink-0">{doc.icon}</span> */}
                  <div>
                    <p className="font-semibold text-white text-sm mb-1">
                      {doc.name}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {doc.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Meslek Grubuna Göre Ek Belgeler */}
          <div>
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-5">
              Meslek Grubuna Göre Ek Belgeler
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {Object.entries(employmentDocs).map(([group, items]) => (
                <div
                  key={group}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <h4 className="font-serif text-lg text-white mb-4">
                    {group}
                  </h4>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li
                        key={item.text}
                        className="flex items-start gap-3 text-sm"
                      >
                        {/* <span className="flex-shrink-0">{item.icon}</span> */}
                        <span className="text-slate-400 leading-relaxed">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsor kutusu */}
          <div className="mt-8 border border-amber-400/30 bg-amber-400/8 rounded-2xl p-6 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">⚠️</span>
            <div>
              <p className="text-amber-300 font-semibold text-sm mb-1">
                Vize Sponsor Dilekçesi Gerekiyor Mu?
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sabit geliri olmayan öğrenciler, ev hanımları ve sigortalı
                olmayan kişiler için birinci derece aile ferdi (ebeveyn, eş veya
                diğer bir aile üyesi) sponsor olabilir. Sponsorun taahhütnamesi,
                ekonomik durumunu kanıtlayan belgeler, iş evrakları ve pasaport
                fotokopisi başvuru dosyasına eklenmelidir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ÜCRETLER ── */}
      <section
        id="ucretler"
        className="mx-auto max-w-5xl px-6 py-16 scroll-mt-20"
      >
        <div className="flex items-start gap-4 mb-10">
          <div className="w-10 h-0.5 bg-blue-500 mt-5 flex-shrink-0" />
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
            Vize Ücretleri
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-left">
                    <th className="px-5 py-4 text-slate-300 font-semibold text-xs tracking-wider uppercase">
                      Başvurucu
                    </th>
                    <th className="px-5 py-4 text-slate-300 font-semibold text-xs tracking-wider uppercase text-right">
                      Vize Ücreti
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`border-b border-slate-100 ${
                        i % 2 === 0 ? "bg-white" : "bg-slate-50"
                      }`}
                    >
                      <td className="px-5 py-4 text-slate-700">
                        {row.label}
                        {row.badge && (
                          <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                            {row.badge}
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-right font-semibold text-slate-900">
                        {row.fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-400 text-xs mt-3">
              * Temmuz 2024 itibarıyla geçerli ücretler. Hizmet, danışmanlık,
              biyometrik fotoğraf, kurye ve SMS gibi ek ücretler ayrıca
              uygulanır.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <p className="text-blue-800 font-semibold text-sm mb-2">
                💳 Ücrete Dahil Olanlar
              </p>
              <ul className="text-blue-700 text-sm space-y-1.5">
                {[
                  "Harç bedeli",
                  "Başvuru hizmet bedeli",
                  "Danışmanlık hizmet bedeli",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span>→</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <p className="text-amber-800 font-semibold text-sm mb-2">
                ⚠️ Ayrıca Ödenenler
              </p>
              <ul className="text-amber-700 text-sm space-y-1.5">
                {[
                  "Başvuru formu ücreti",
                  "Kurye hizmeti",
                  "Biyometrik fotoğraf ve fotokopi",
                  "SMS bildirim hizmet bedeli",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span>→</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
              <p className="text-red-800 text-sm leading-relaxed">
                <strong>Önemli:</strong> Başvuru yapıldıktan sonra vize ücreti
                iade edilmiyor vize reddedilse dahi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RANDEVU & BAŞVURU SÜRECİ ── */}
      <section
        id="randevu"
        className="bg-white border-y border-slate-200 py-16 scroll-mt-20"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-10 h-0.5 bg-blue-500 mt-5 flex-shrink-0" />
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
              Randevu Nasıl Alınır?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <p className="text-slate-600 text-base leading-relaxed">
                Kısa süreli (C tipi) vize başvurusu yapanların parmak izi
                vererek yetkili başvuru merkezinde randevu alması gerekiyor.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                İstanbul Konsolosluğu yetki alanındaki başvurucular, 2016 veya
                sonrasında parmak izi kaydı varsa yetkili kurumlar aracılığıyla
                şahsen gitmeden başvurabilir. Ankara Büyükelçiliği yetki
                alanında ikamet edenler için şahsen başvuru zorunlu.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <p className="text-blue-800 font-semibold text-sm mb-2">
                  🗓️ Randevu Zamanlaması
                </p>
                <p className="text-blue-700 text-sm leading-relaxed">
                  Vize randevusu seyahat tarihinden en geç 15 gün önce alınmalı.
                  Yoğunluk dönemlerinde aksilik yaşanmaması için{" "}
                  <strong>4 hafta öncesinden</strong> harekete geçilmesi
                  şiddetle tavsiye ediliyor.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-64">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80"
                alt="Belge ve pasaport hazırlığı — vize başvuru süreci"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── BAŞVURUMERKEZLERİ ── */}
      <section
        id="merkezler"
        className="mx-auto max-w-5xl px-6 py-16 scroll-mt-20"
      >
        <div className="flex items-start gap-4 mb-10">
          <div className="w-10 h-0.5 bg-blue-500 mt-5 flex-shrink-0" />
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
            Başvuru Merkezleri
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {centers.map((c) => (
            <div
              key={c.city}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                {/* <span className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 text-lg flex items-center justify-center flex-shrink-0">
                  🏛️
                </span> */}
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    {c.city}
                  </p>
                  <h3 className="font-serif text-base text-slate-900">
                    {c.name}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-3">
                📍 {c.address}
              </p>
              <a
                href={`tel:${c.phone}`}
                className="text-sm text-blue-600 hover:underline block mb-4"
              >
                📞 {c.phone}
              </a>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
                  Yetki Alanı
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {c.coverage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SÜREÇ ADIMLARI ── */}
      <section
        id="adimlar"
        className="bg-slate-50 border-y border-slate-200 py-16 scroll-mt-20"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-10 h-0.5 bg-blue-500 mt-5 flex-shrink-0" />
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
              Başvurudan Sonuça: 6 Adım
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm relative overflow-hidden"
              >
                <span className="absolute top-4 right-5 font-serif text-6xl text-slate-100 leading-none select-none">
                  {step.num}
                </span>
                <div className="relative z-10">
                  {/* <span className="inline-block w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center mb-4">
                    {idx + 1}
                  </span> */}
                  <h3 className="font-serif text-lg text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sonuç süresi */}
          <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start shadow-sm">
            {/* <div className="text-4xl flex-shrink-0">⏱️</div> */}
            <div>
              <h3 className="font-serif text-xl text-slate-900 mb-2">
                Vize Ne Kadar Sürede Çıkar?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Standart işlem süresi <strong>15 iş günü</strong>. Resmi tatil
                günleri, ek evrak talebi, özel durumlar veya yoğunluk
                dönemlerinde bu süre <strong>45 güne</strong> kadar
                uzayabiliyor. Riski azaltmak için seyahat tarihinizden en az 6–8
                hafta önce başvurmanız tavsiye ediliyor. Pasaportunuz işlemler
                tamamlandıktan sonra kargo ile ulaştırılır ya da acenteden elden
                teslim alınır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SSS ── */}
      <section
        id="sss"
        className="mx-auto max-w-5xl px-6 py-16 pb-24 scroll-mt-20"
      >
        <div className="flex items-start gap-4 mb-10">
          <div className="w-10 h-0.5 bg-blue-500 mt-5 flex-shrink-0" />
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
            Sıkça Sorulan Sorular
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-serif text-lg text-slate-900 mb-3 flex items-start gap-3">
                <span className="font-sans text-sm font-bold text-blue-600 mt-0.5 flex-shrink-0 w-6">
                  S{i + 1}
                </span>
                {faq.q}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed pl-9">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      {/* <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
                Profesyonel Destek
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                Avusturya Vize Başvurunuzu Birlikte Hazırlayalım
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                Evrak kontrol listesi, randevu takibi ve başvuru sürecine dair
                uzman rehberliği için danışmanlık ekibimize ulaşın.
              </p>
              <a
                href="/danismanlik"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-8 py-4 rounded-xl transition-colors"
              >
                Ücretsiz Danışmanlık Al →
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-64">
              <img
                src="https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=800&q=80"
                alt="Avusturya Alpleri ve doğa manzarası — seyahat planlaması"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
