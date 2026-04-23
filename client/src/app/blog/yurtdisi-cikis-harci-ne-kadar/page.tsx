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
  title: "Yurt Dışı Çıkış Harcı Ne Kadar 2026 — Nasıl Ödenir, Kimler Muaf?",
  description:
    "2026 yılında güncellenen yurt dışı çıkış harcını kim öder, kim muaf, nereye nasıl ödenir? Dijital ödeme linki, muafiyet listesi ve sık sorulan sorularla eksiksiz rehber.",
  keywords: [
    "yurt dışı çıkış harcı 2026",
    "yurt dışı çıkış harcı ne kadar 2026",
    "yurt dışı çıkış harcı nasıl ödenir",
    "yurt dışı çıkış harcı muafiyet",
    "yurt dışı çıkış harcı",
    "çıkış harcı ödeme yöntemleri",
    "yurt dışı çıkış harcı sorgulama",
    "yurt dışı çıkış harcı çocuk muafiyet",
    "yeşil pasaport çıkış harcı",
    "dijital vergi dairesi çıkış harcı",
  ],
  openGraph: {
    title:
      "Yurt Dışı Çıkış Harcı Ne Kadar 2026 | Ödeme, Muafiyet, Sık Sorulanlar",
    description:
      "2026'da yurt dışı çıkış harcını kim öder, nasıl ödenir, 30 günlük geçerlilik süresi nasıl işler? Tüm detaylar ve direkt ödeme linki bu sayfada.",
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Havalimanı — yurt dışı çıkış harcı 2026 rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yurt Dışı Çıkış Harcı 2026",
    description:
      "Kim öder, kim muaf, nereye ödenir? 30 günlük geçerlilik ve direkt ödeme linki.",
  },
  alternates: {
    canonical: "/blog/yurtdisi-cikis-harci-ne-kadar",
  },
};

const paymentMethods = [
  {
    icon: "💻",
    title: "Dijital Vergi Dairesi",
    badge: "Önerilen",
    badgeColor: "bg-emerald-100 text-emerald-700",
    desc: "7/24 açık, ödeme Emniyet Genel Müdürlüğü'ne anlık iletilir. Fiziki makbuz taşımanıza gerek kalmaz.",
    cta: true,
  },
  {
    icon: "📱",
    title: "GİB Mobil Uygulaması",
    badge: "Hızlı",
    badgeColor: "bg-blue-100 text-blue-700",
    desc: "Seyahate kısa süre kala bile cep telefonunuzdan dakikalar içinde ödeyebilirsiniz.",
    cta: false,
  },
  {
    icon: "🏦",
    title: "Anlaşmalı Bankalar",
    badge: "İnternet / ATM / Gişe",
    badgeColor: "bg-slate-100 text-slate-600",
    desc: "00:10–23:50 saatleri arasında internet bankacılığı, mobil uygulama, ATM veya banka gişesinden ödeme yapılabilir.",
    cta: false,
  },
  {
    icon: "🏤",
    title: "PTT Şubeleri",
    badge: "Fiziksel",
    badgeColor: "bg-amber-100 text-amber-700",
    desc: "Tüm PTT şubelerinden ödeme yapılabilir. Yoğunluk nedeniyle dijital kanallar tercih edilmeli.",
    cta: false,
  },
  {
    icon: "🏛️",
    title: "Vergi Daireleri",
    badge: "Resmi",
    badgeColor: "bg-slate-100 text-slate-600",
    desc: "Değerli kâğıt bedeli tahsilatına yetkili vergi dairelerinden kimlik/pasaport ile ödeme yapılabilir.",
    cta: false,
  },
  {
    icon: "✈️",
    title: "Havalimanı Ödeme Noktaları",
    badge: "Son Çare",
    badgeColor: "bg-red-100 text-red-700",
    desc: "Gişe, kiosk veya banka noktasından yapılabilir. Yoğunluk riski nedeniyle önceden ödeme çok daha güvenli.",
    cta: false,
  },
];

const exemptions = [
  {
    icon: "👶",
    title: "7 Yaş Altı Çocuklar",
    desc: "7 yaşını doldurmamış çocuklardan ücret alınmaz. Muafiyet yalnızca yaşa bağlı olup başka koşul aranmaz. 7. yaş günü tamamlandığında yükümlülük başlar.",
  },
  {
    icon: "🇨🇾",
    title: "KKTC'ye Kimlikle Gidenler",
    desc: "Türkiye Cumhuriyeti kimlik kartıyla KKTC'ye geçiş yapan vatandaşlar harçtan muaftır. Bu muafiyet yalnızca kimlikle yapılan geçişlerde geçerlidir; pasaport kullanılırsa ödeme zorunludur.",
  },
  {
    icon: "🚢",
    title: "Taşıt Personeli",
    desc: "Kara, hava, deniz ve demiryolu taşıtlarında ticari amaçla görev yapan personel muaf tutulur.",
  },
  /* {
    icon: "🌍",
    title: "Yurt Dışında İkamet Edenler",
    desc: "Yurt dışında oturma iznine sahip TC vatandaşları muaf değildir. Ancak başka ülke pasaportuyla çıkış yapan çift uyruklu vatandaşlar ödeme yapmaz.",
  }, */
  {
    icon: "🏛️",
    title: "Resmi Görevle Yurt Dışına Gidenler",
    desc: "Devlet adına görevlendirilen memur ve kamu personeli, durumlarını resmi belgeyle kanıtladıklarında muaf sayılır.",
  },
  {
    icon: "📄",
    title: "Pasavan Belgesiyle Çıkış Yapanlar",
    desc: "Pasaport yerine geçici olarak düzenlenen pasavan belgesiyle yapılan çıkışlarda harç ödenmez.",
  },
];

const faqs = [
  {
    q: "Yurt dışı çıkış harcı 2026'da ne kadar?",
    a: "9 Eylül 2026 itibarıyla geçerli olan tutar 1.250 TL'dir. Hazine ve Maliye Bakanlığı tarafından yıllık yeniden değerleme oranına göre güncellenir.",
  },
  {
    q: "Her seyahatte ayrı ayrı ödenmesi gerekiyor mu?",
    a: "Evet. Harç kişi başına ve her çıkış için ayrı ayrı tahsil edilir. Yıl içinde birden fazla yurt dışı seyahati yapacaklar her çıkışta yeniden ödemek zorundadır. Yeşil ve bordo pasaport ayrımı olmaksızın tüm vatandaşlar bu yükümlülüğe tabidir.",
  },
  {
    q: "Ödemenin geçerlilik süresi ne kadar?",
    a: "Dijital sistemler üzerinden yapılan ödemeler ödeme tarihinden itibaren 30 gün geçerlidir. Bu süre dolmadan yurt dışına çıkılmazsa ödeme geçersiz sayılır ve yeniden ödeme yapılması gerekir. Çok erken ya da çok geç ödeme yapmaktan kaçının.",
  },
  {
    q: "Yanlışlıkla ödedim, iade alabilir miyim?",
    a: "Evet. Gelir İdaresi Başkanlığı'na dilekçe ve ödeme dekontuyla başvurulması gerekir. Ödeme yapılmasına rağmen çıkış gerçekleşmemişse veya hatalı mükerrer ödeme yapıldıysa belgelenmiş durumda iade alınabilir.",
  },
  {
    q: "Havalimanına geldiğimde ödemeyi unuttuysam ne olur?",
    a: "Havalimanındaki gişeler, kiosklar veya PTT noktalarından ödeme yapılabilir. Ancak yoğunluk yaşanabileceğinden seyahatten önce dijital kanallardan ödemeyi tamamlamak çok daha güvenli.",
  },
  {
    q: "Azerbaycan'a giderken de ödenmesi gerekiyor mu?",
    a: "Evet. KKTC dışındaki tüm ülkelere pasaportla yapılan çıkışlar bu harca tabidir. Azerbaycan ile özel muafiyet anlaşması bulunmadığından ödeme zorunludur.",
  },
  {
    q: "Makbuzu yanımda taşımam gerekiyor mu?",
    a: "Dijital Vergi Dairesi veya GİB sistemi üzerinden yapılan ödemelerde makbuz taşıma zorunluluğu yok; sistem Emniyet Genel Müdürlüğü ile anlık entegre çalışıyor. Olası teknik aksaklıklara karşı ekran görüntüsü veya çıktı bulundurmak iyi bir önlem.",
  },
  {
    q: "Yeşil pasaport sahipleri muaf mı?",
    a: "Hayır. Yeşil pasaport vizeye giriş kolaylığı sağlar; ancak yurt dışı çıkış harcından muafiyet tanımaz. Tüm TC pasaportlarıyla yapılan çıkışlarda ödeme zorunludur.",
  },
];

const worldExamples = [
  {
    country: "🇯🇵 Japonya",
    name: "Sayonara Vergisi",
    detail: "~1.000 ¥ · 2019'dan bu yana · Havalimanı altyapı geliştirme fonu",
  },
  {
    country: "🇲🇽 Meksika",
    name: "Çıkış Harcı",
    detail:
      "Genellikle bilete dahil · Bazı durumlarda havalimanında ayrıca alınır",
  },
  {
    country: "🇦🇺 Avustralya",
    name: "Çıkış Vergisi",
    detail: "Bilet fiyatına yansıtılır · Ayrıca ödeme noktası yok",
  },
  {
    country: "🇦🇷 Arjantin",
    name: "Çıkış Harcı",
    detail: "Bilete dahil · Uluslararası uçuşlarda geçerli",
  },
  {
    country: "🇨🇺 Küba",
    name: "Havalimanı Çıkış Vergisi",
    detail: "Havalimanında nakit olarak tahsil edilir",
  },
];

export default function YurtDisiCikisHarciPage() {
  return (
    <div
      className={`${dmSerif.variable} ${dmSans.variable} bg-slate-50 text-slate-900 font-sans`}
    >
      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="relative h-screen min-h-[540px] max-h-[700px]">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=85"
            alt="Havalimanı gidiş salonu — yurt dışı çıkış harcı 2026"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/95" />

          <div className="relative h-full flex flex-col justify-end">
            <div className="mx-auto w-full max-w-4xl px-6 pb-14">
              <div className="flex flex-wrap gap-3 mb-6">
                {/* <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse inline-block" />
                  Güncel · Eylül 2026
                </span> */}
              </div>

              <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-5 max-w-3xl">
                Yurt Dışı Çıkış Harcı 2026:
                <br />
                <span className="text-amber-300">1.250 TL</span> — Bilmeniz
                Gereken Her Şey
              </h1>

              <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
                Kim öder, kim muaf, nereye nasıl ödenir, geçerlilik süresi ne
                kadar? Dijital ödeme linki ve merak edilen tüm sorularla
                eksiksiz rehber.
              </p>

              {/* <div className="flex flex-wrap gap-8">
                {[
                  { v: "1.250 ₺", l: "2026 Harç Tutarı" },
                  { v: "30 Gün", l: "Geçerlilik Süresi" },
                  { v: "6", l: "Muafiyet Grubu" },
                ].map((s) => (
                  <div key={s.l} className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl text-amber-300">
                      {s.v}
                    </span>
                    <span className="text-white/50 text-sm">{s.l}</span>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ── HIZLI ÖDEME CTA BANDI ── */}
      {/*  <div className="bg-amber-400 py-5">
        <div className="mx-auto max-w-4xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚡</span>
            <div>
              <p className="font-semibold text-slate-900 text-sm">
                Şimdi öde, 30 gün geçerli — seyahat güvencende
              </p>
              <p className="text-slate-700 text-xs">
                GİB Dijital Vergi Dairesi · 7/24 açık · Otomatik sistem
                entegrasyonu
              </p>
            </div>
          </div>
          <a
            href="https://dijital.gib.gov.tr/hizliOdemeler/yurtDisinaCikisHarciOdeme"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-7 py-3 rounded-xl transition-colors whitespace-nowrap"
          >
            Harcı Öde →
          </a>
        </div>
      </div> */}

      {/* ── İÇİNDEKİLER ── */}
      <nav className="mx-auto max-w-4xl px-6 py-10" aria-label="İçindekiler">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-500 mb-4">
            Bu Rehberde
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-10">
            {[
              ["#nedir", "Yurt Dışı Çıkış Harcı Nedir?"],
              ["#ne-kadar", "2026'da Harç Ne Kadar?"],
              ["#nasil-odenir", "Nasıl ve Nereye Ödenir?"],
              ["#gecerlilik", "Ödeme Ne Zaman Yapılmalı?"],
              ["#muafiyet", "Kimler Muaf?"],
              ["#dunya", "Dünyada Benzer Uygulamalar"],
              ["#sss", "Sık Sorulan Sorular"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-slate-600 hover:text-amber-600 transition-colors py-1 flex items-center gap-2 group"
              >
                <span className="w-1 h-1 rounded-full bg-amber-300 group-hover:bg-amber-500 transition-colors flex-shrink-0" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── NEDİR ── */}
      <section id="nedir" className="mx-auto max-w-4xl px-6 pb-16 scroll-mt-20">
        <div className="flex items-start gap-4 mb-7">
          <div className="w-10 h-0.5 bg-amber-400 mt-5 flex-shrink-0" />
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
            Yurt Dışı Çıkış Harcı Nedir?
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-3 space-y-4">
            <p className="text-slate-600 text-base leading-relaxed">
              Yurt Dışı Çıkış Harcı,{" "}
              <strong className="text-slate-800">
                5597 sayılı Yurt Dışına Çıkış Harcı Kanunu
              </strong>{" "}
              kapsamında Türkiye Cumhuriyeti sınırlarını terk eden her TC
              vatandaşından her çıkışta alınan sabit bir vergidir. Kamu
              hizmetlerinin finansmanına katkı amacıyla 2001 yılında yürürlüğe
              girmiş; başlangıçta fiziki harç pullarıyla tahsil edilirken bugün
              tamamen dijital sisteme taşınmıştır.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Harç kişi başına ayrı ayrı ve her seyahat için tek seferlik tahsil
              edilir. Vize başvurusu, pasaport işlemleri veya başka kamu
              hizmetlerinde kullanılamaz; yalnızca yurt dışı çıkışı için
              geçerlidir.
            </p>
          </div>
          <div className="md:col-span-2 bg-slate-900 rounded-2xl p-6 text-white self-start">
            <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Özet Bilgi
            </p>
            <ul className="space-y-3">
              {[
                "Kanun No: 5597",
                "İlk uygulama: 2001",
                "Her çıkışta kişi başı tahsil edilir",
                "Fiziki pul uygulaması sona erdi",
                "Dijital sistemle otomatik kontrol",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-amber-400 mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── NE KADAR ── */}
      <section
        id="ne-kadar"
        className="bg-white border-y border-slate-200 py-16 scroll-mt-20"
      >
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-10 h-0.5 bg-amber-400 mt-5 flex-shrink-0" />
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
              2026'da Harç Ne Kadar?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Fiyat kutusu */}
            <div className="bg-slate-900 rounded-3xl p-10 text-center">
              <p className="text-slate-400 text-sm uppercase tracking-widest font-semibold mb-3">
                9 Eylül 2026 İtibarıyla
              </p>
              <p className="font-serif text-7xl text-amber-400 leading-none mb-2">
                1.250
              </p>
              <p className="font-serif text-3xl text-white mb-6">Türk Lirası</p>
              <div className="border-t border-white/10 pt-6 space-y-2 text-sm text-slate-400">
                <p>Kişi başı · Her çıkışta · Tek seferlik</p>
                <p>30 gün geçerlilik süresi</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <p className="font-semibold text-amber-800 text-sm mb-2">
                  📊 Her Yıl Güncelleniyor
                </p>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Harç tutarı Hazine ve Maliye Bakanlığı'nın belirlediği{" "}
                  <strong>yeniden değerleme oranı</strong> doğrultusunda her yıl
                  revize edilir. Yeni karar alınmadığı sürece belirlenen tutar
                  yıl boyunca sabit kalır.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <p className="font-semibold text-slate-800 text-sm mb-2">
                  💡 Dikkat Edilmesi Gereken
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Yıl içinde birden fazla yurt dışı seyahati yapacaklar{" "}
                  <strong>her çıkışta yeniden ödemek zorundadır.</strong> Yeşil,
                  bordo veya hususi pasaport fark etmeksizin tüm TC
                  pasaportlarıyla yapılan çıkışlarda geçerlidir.
                </p>
              </div>
              <a
                href="https://dijital.gib.gov.tr/hizliOdemeler/yurtDisinaCikisHarciOdeme"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold text-sm px-6 py-4 rounded-xl transition-colors"
              >
                <span>⚡</span>
                Harcı Hemen Öde — GİB Dijital Vergi Dairesi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── NASIL ÖDENİR ── */}
      <section
        id="nasil-odenir"
        className="mx-auto max-w-4xl px-6 py-16 scroll-mt-20"
      >
        <div className="flex items-start gap-4 mb-10">
          <div className="w-10 h-0.5 bg-amber-400 mt-5 flex-shrink-0" />
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
            Nasıl ve Nereye Ödenir?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {paymentMethods.map((method) => (
            <div
              key={method.title}
              className={`bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col ${
                method.cta
                  ? "border-amber-300 ring-1 ring-amber-200"
                  : "border-slate-200"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                {/*  <span className="text-3xl">{method.icon}</span> */}
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${method.badgeColor}`}
                >
                  {method.badge}
                </span>
              </div>
              <h3 className="font-serif text-lg text-slate-900 mb-2">
                {method.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed flex-1">
                {method.desc}
              </p>
              {method.cta && (
                <a
                  href="https://dijital.gib.gov.tr/hizliOdemeler/yurtDisinaCikisHarciOdeme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold text-sm px-5 py-3 rounded-xl transition-colors"
                >
                  Hemen Öde →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── GEÇERLİLİK / ZAMANLAMA ── */}
      <section id="gecerlilik" className="bg-slate-900 py-16 scroll-mt-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-10 h-0.5 bg-amber-400 mt-5 flex-shrink-0" />
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Ödeme Ne Zaman Yapılmalı?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              {
                icon: "⏳",
                title: "30 Gün Geçerlilik",
                body: "Dijital sistemler üzerinden yapılan ödeme, işlem tarihinden itibaren tam 30 gün boyunca geçerlidir. Süre dolduğunda otomatik olarak geçersiz sayılır.",
                color: "border-amber-400/40",
              },
              {
                icon: "✅",
                title: "İdeal Zamanlama",
                body: "Seyahat tarihinize en fazla 30 gün, en az birkaç gün kala ödemeyi tamamlayın. Sisteme entegrasyon anlık sağlandığından son dakika işlemi de mümkündür.",
                color: "border-emerald-400/40",
              },
              {
                icon: "⚠️",
                title: "Riskli Durumlar",
                body: "Çok erken yapılan ödemeler seyahatten önce geçerliliğini yitirebilir. Son dakikada yaşanabilecek teknik aksaklıklar çıkışı geciktirebilir.",
                color: "border-red-400/40",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`bg-white/5 border ${item.color} rounded-2xl p-6`}
              >
                {/* <span className="text-3xl block mb-4">{item.icon}</span> */}
                <h3 className="font-serif text-xl text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* Sorgulama notu */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4">
            {/* <span className="text-3xl flex-shrink-0">🔍</span> */}
            <div>
              <p className="text-white font-semibold text-sm mb-1">
                Ödeme Sorgulama
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Seyahate çıkmadan önce daha önce yaptığınız bir ödemenin hâlâ
                geçerli olup olmadığını GİB dijital sistemi üzerinden
                sorgulayabilirsiniz. Geçerli ödeme tespit edilirse yeniden ödeme
                yapmanıza gerek kalmaz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MUAFİYET ── */}
      <section
        id="muafiyet"
        className="mx-auto max-w-4xl px-6 py-16 scroll-mt-20"
      >
        <div className="flex items-start gap-4 mb-10">
          <div className="w-10 h-0.5 bg-amber-400 mt-5 flex-shrink-0" />
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
              Kimler Muaf Tutuluyor?
            </h2>
            <p className="text-slate-500 text-base mt-2">
              Yasal ve idari gerekçelerle harç ödeme yükümlülüğünden muaf olan
              gruplar.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {exemptions.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-amber-200 hover:shadow-md transition-all flex items-start gap-4"
            >
              {/* <span className="text-3xl flex-shrink-0">{item.icon}</span> */}
              <div>
                <h3 className="font-serif text-lg text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/*  <div className="mt-6 bg-red-50 border border-red-200 rounded-2xl p-5 flex items-start gap-4">
          <span className="text-2xl flex-shrink-0">🚫</span>
          <p className="text-red-800 text-sm leading-relaxed">
            <strong>Muaf olmadığı durumlar:</strong> Yeşil pasaport sahipleri ve
            Azerbaycan dahil KKTC dışındaki tüm ülkelere pasaportla seyahat
            edenler harcı ödemek zorundadır.
          </p>
        </div> */}
      </section>

      {/* ── DÜNYADA BENZER UYGULAMALAR ── */}
      <section
        id="dunya"
        className="bg-white border-y border-slate-200 py-16 scroll-mt-20"
      >
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-10 h-0.5 bg-amber-400 mt-5 flex-shrink-0" />
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
                Dünyada Benzer Uygulamalar
              </h2>
              <p className="text-slate-500 text-base mt-2">
                Çıkış harcı yalnızca Türkiye'ye özgü değil; pek çok ülkede
                benzer vergiler var.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-8 h-48">
            <img
              src="https://images.unsplash.com/photo-1542296332-2e4473faf563?w=1200&q=80"
              alt="Dünya genelinde uluslararası havalimanları ve çıkış vergileri"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 to-transparent flex items-center px-8">
              <p className="text-white font-serif text-xl max-w-xs leading-snug">
                Japonya'dan Küba'ya — çıkış vergisi global bir uygulama.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {worldExamples.map((ex) => (
              <div
                key={ex.country}
                className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6"
              >
                <span className="font-semibold text-slate-800 text-sm w-40 flex-shrink-0">
                  {ex.country}
                </span>
                <span className="font-medium text-slate-700 text-sm w-40 flex-shrink-0">
                  {ex.name}
                </span>
                <span className="text-slate-500 text-sm">{ex.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SSS ── */}
      <section
        id="sss"
        className="mx-auto max-w-4xl px-6 py-16 pb-24 scroll-mt-20"
      >
        <div className="flex items-start gap-4 mb-10">
          <div className="w-10 h-0.5 bg-amber-400 mt-5 flex-shrink-0" />
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
            Sık Sorulan Sorular
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-serif text-lg text-slate-900 mb-3 flex items-start gap-3">
                <span className="font-sans text-sm font-bold text-amber-500 mt-0.5 flex-shrink-0 w-6">
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

      {/* ── SON CTA ── */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">
                Hızlı Ödeme
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                Seyahate Çıkmadan Harcınızı Ödeyin
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                GİB Dijital Vergi Dairesi üzerinden 7/24 ödeme yapın. Ödeme
                bilgisi Emniyet Genel Müdürlüğü ile anlık entegre edilir; fiziki
                makbuz taşımanıza gerek kalmaz.
              </p>
              <a
                href="https://dijital.gib.gov.tr/hizliOdemeler/yurtDisinaCikisHarciOdeme"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold text-sm px-8 py-4 rounded-xl transition-colors"
              >
                <span>⚡</span>
                Harcı Hemen Öde
              </a>
              <p className="text-slate-500 text-xs mt-3">
                dijital.gib.gov.tr · Resmi GİB platformu
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-64">
              <img
                src="https://images.unsplash.com/photo-1542296332-2e4473faf563?w=800&q=80"
                alt="Uçağa binen yolcu — seyahat öncesi çıkış harcı"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
