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
  title: "Türklere En Kolay Schengen Vizesi Veren 5 Ülke (2026)",
  description:
    "Almanya, İtalya, Fransa, Yunanistan ve İspanya için Schengen vize başvurusu ipuçları, randevu stratejisi ve multi vize rehberi. 2026 güncel bilgilerle Türk vatandaşları için en kapsamlı vize kılavuzu.",
  keywords: [
    "Schengen vizesi 2026",
    "Türklere en kolay vize veren ülkeler",
    "Almanya vizesi nasıl alınır",
    "İtalya Schengen vizesi",
    "Yunanistan vizesi Türkiye",
    "multi entry vize",
    "çok girişli Schengen vizesi",
    "vize randevu stratejisi",
  ],
  openGraph: {
    title: "2026 Schengen Vize Rehberi: Türklere En Kolay 5 Ülke",
    description:
      "Hangi Schengen ülkesi vizeyi daha kolay veriyor? Randevu ipuçları, gerekli belgeler ve multi vize stratejisiyle 2026 yılı için eksiksiz rehber.",
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Avrupa Schengen bölgesi haritası ve seyahat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2026 Schengen Vize Rehberi: Türklere En Kolay 5 Ülke",
    description:
      "Almanya, İtalya, Fransa, Yunanistan, İspanya — hangi ülke daha kolay vize veriyor? Kapsamlı 2026 rehberi.",
  },
  alternates: {
    canonical: "/vize-rehberi/turklere-en-kolay-schengen-vizesi-veren-5-ulke",
  },
};

const countries = [
  {
    number: "01",
    name: "Almanya",
    label: "Deutschland",
    emoji: "🇩🇪",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=900&q=80",
    imageAlt: "Brandenburg Kapısı, Berlin - Almanya simgesi",
    tag: "İş & Aile",
    tagColor: "bg-blue-100 text-blue-800",
    accentColor: "#4A7BC8",
    ideal: "İş seyahati, aile ziyareti, akademik",
    randevu: "İstikrarlı (yıl boyu)",
    sezon: "Orta–Yüksek",
    multi: "Orta–Yüksek",
    summary:
      "Türkiye–Almanya arasındaki derin akrabalık ve ticaret ağı, başvuru hacmini yıl boyunca yüksek tutuyor. Konsolosluk ağının genişliği ve düzenli işlem akışı, Almanya'yı planlı başvuru sahipleri için güvenilir bir tercih yapıyor.",
    detail:
      "Özellikle iş daveti, fuar katılımı veya aile ziyareti gibi net gerekçelere sahip başvurular güçlü profil oluşturuyor. Daha önce Almanya vizesi kullananlar ve Schengen geçmişi temiz olanlar, çok girişli vize için olumlu değerlendirme alma şansını artırıyor.",
    tip: "İş davetiyeleri, fuar kayıtları ve konaklama belgelerinin birbirini desteklediğinden emin olun. Schengen geçmişiniz güçlüyse multi talebini dilekçede kısa ve net biçimde belirtin.",
    stat: { label: "Vize Geçerliliği", value: "90 Gün" },
  },
  {
    number: "02",
    name: "İtalya",
    label: "Italia",
    emoji: "🇮🇹",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=900&q=80",
    imageAlt: "Kolosseum, Roma - İtalya simgesi",
    tag: "Turizm & Kültür",
    tagColor: "bg-amber-100 text-amber-800",
    accentColor: "#C84A4A",
    ideal: "Turizm, gastronomi, sanat etkinlikleri",
    randevu: "Orta (sezon bağımlı)",
    sezon: "Yüksek",
    multi: "Orta",
    summary:
      "Roma, Floransa, Venedik ve Milano'nun büyüsü, İtalya'yı Türk ziyaretçiler için yıl boyunca cazibe merkezi yapıyor. Yüksek başvuru hacmine karşın dağıtılan vize miktarı öne çıkan ülkeler arasında.",
    detail:
      "Gastronomi turu, sanat müzesi programları ve çift şehirli rotalar (Roma–Floransa, Milano–Venedik) İtalya başvurularında öne çıkan motivasyonlar. Kongre ve etkinlik katılımları da güçlü gerekçe oluşturuyor.",
    tip: "Konaklama rezervasyonlarını bilet güzergahınızla tam uyumlu tutun. Yaz için başvuru yapıyorsanız randevuyu en az 7–8 hafta öncesinden alın.",
    stat: { label: "En İyi Sezon", value: "İlkbahar & Sonbahar" },
  },
  {
    number: "03",
    name: "Fransa",
    label: "France",
    emoji: "🇫🇷",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900&q=80",
    imageAlt: "Eyfel Kulesi, Paris - Fransa simgesi",
    tag: "Kültür & Sanat",
    tagColor: "bg-rose-100 text-rose-800",
    accentColor: "#C84A7B",
    ideal: "Kültür turu, aile gezisi, iş seyahati",
    randevu: "Orta",
    sezon: "Yüksek",
    multi: "Orta",
    summary:
      "Paris'in çekimi, moda etkinlikleri ve gastronomi kültürü Fransa'yı Türk vatandaşlarının sürekli radarında tutuyor. Turistik başvurularda belge bütünlüğü ve finansal yeterlilik belirleyici faktörler.",
    detail:
      "Kısa kültür turları, müze gezileri ve aile tatilleri başlıca başvuru motivasyonları. Konaklama–uçuş–gezi planının birbirini tutarlı biçimde desteklemesi başarı oranını artırıyor.",
    tip: "Paris dışındaki destinasyonları (Lyon, Nice, Bordeaux) güzergaha ekleyerek planın gerçekçiliğini güçlendirin. TGV ve bölgesel tren kullanımını belgeye yansıtın.",
    stat: { label: "İdeal Başvuru Dönemi", value: "İlkbahar" },
  },
  {
    number: "04",
    name: "Yunanistan",
    label: "Ελλάδα",
    emoji: "🇬🇷",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900&q=80",
    imageAlt: "Santorini, Yunanistan mavi kubbeli kiliseler",
    tag: "Yaz Kaçamağı",
    tagColor: "bg-sky-100 text-sky-800",
    accentColor: "#4A9BC8",
    ideal: "Ada turu, yaz tatili, kısa kaçamak",
    randevu: "İyi (erken planla)",
    sezon: "Yüksek (yaz)",
    multi: "Orta",
    summary:
      "Coğrafi yakınlık, uygun maliyet ve ada rotaları Yunanistan'ı Türk başvuru sahipleri arasında en popüler Schengen destinasyonlarından biri yapıyor. Ege ve Akdeniz güzergahlarında bahar–yaz dönemi talep sıçraması yaşanıyor.",
    detail:
      "Santorini, Mykonos, Rodos ve Girit gibi ada rotaları; İstanbul veya İzmir'den feribot seçenekleriyle desteklenince başvuru dosyasına güçlü bir gerçekçilik katıyor. Kara ve deniz yolu alternatifleri planlamayı esnek kılıyor.",
    tip: "Konaklama rezervasyonlarını iade kolaylığı olan tesislerden yapın. Feribot biletleri veya ada geçiş taslağı eklemek dosya bütünlüğünü artırır.",
    stat: { label: "Mesafe Avantajı", value: "En Yakın Schengen" },
  },
  {
    number: "05",
    name: "İspanya",
    label: "España",
    emoji: "🇪🇸",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=900&q=80",
    imageAlt: "Sagrada Familia, Barselona - İspanya simgesi",
    tag: "Kültür & Spor",
    tagColor: "bg-orange-100 text-orange-800",
    accentColor: "#C87A4A",
    ideal: "Kültür turu, spor etkinlikleri, iş",
    randevu: "Orta",
    sezon: "Orta–Yüksek",
    multi: "Orta",
    summary:
      "Barselona, Madrid, Endülüs rotası ve Balear adaları İspanya'yı Türk ziyaretçiler için dört mevsim cazip kılıyor. Festival ve spor etkinlikleri talebi yılın farklı dönemlerine yayıyor.",
    detail:
      "Futbol maçları, mimari turlar ve gastronomi odaklı kısa seyahatler güçlü başvuru gerekçeleri oluşturuyor. Schengen geçmişi olan başvuru sahipleri multi talepleri için değerlendirmeye alınabiliyor.",
    tip: "Çok şehirli rotalarda iç hat uçuş veya AVE tren biletlerini dosyaya ekleyin. Şehir sıralamanız ve tarihleriniz tutarlı olsun.",
    stat: { label: "Festival Çeşitliliği", value: "4 Mevsim" },
  },
];

const tips = [
  {
    icon: "📅",
    title: "Erken Randevu",
    desc: "Yoğun sezonlarda 6–8 hafta öncesinden randevu takibine başlayın. İade koşulları uygun rezervasyonlar, onay gelmeden parayı bağlamaktan korur.",
  },
  {
    icon: "📋",
    title: "Belge Tutarlılığı",
    desc: "Pasaportunuzdaki eski vizeler, konaklama ve finansal kanıtlar birbiriyle uyumlu olmalı. Çok duraklı rotalarda her şehir için ayrı konaklama kanıtı hazırlayın.",
  },
  {
    icon: "🔄",
    title: "Multi Vize Stratejisi",
    desc: "Son 2–3 yılda düzenli Schengen kullanımı yaptıysanız, niyet dilekçenizde çok giriş talebini kısa ve net ifade edin. Planlı rota güven verir.",
  },
  {
    icon: "🎓",
    title: "Öğrenciler İçin",
    desc: "Kabul mektubu, ödeme planı ve konaklama detayları net olmalı. Dil seviyenizi belgeleyen sertifikalar dosyanın ikna ediciliğini ciddi ölçüde artırır.",
  },
  {
    icon: "🔍",
    title: "Uzman Gözü",
    desc: "Evrak setinizi profesyonel bir danışmana kontrol ettirin. Çelişen belgeler veya eksik detaylar ret riskini anlamlı biçimde yükseltiyor.",
  },
];

const faqs = [
  {
    q: "2026'da Türklere en kolay vize hangi Schengen ülkesi veriyor?",
    a: "Konsolosluk kapasitesi, başvuru akışı ve saha deneyimleri değerlendirildiğinde Almanya, İtalya, Fransa, Yunanistan ve İspanya öne çıkıyor. Yıllık resmi istatistikler dönem sonunda yayımlanır; ancak bu beş ülke tutarlı biçimde üst sıralarda yer alıyor.",
  },
  {
    q: "Çok girişli (multi-entry) Schengen vizesi nasıl alınır?",
    a: "Multi vize, bireysel seyahat geçmişi ve dosya kalitesine bağlıdır. Son 2–3 yılda düzenli ve doğru kullanım geçmişi, güçlü finansal bağlar ve açık bir seyahat planı multi şansını artırır. Almanya ve İtalya bu konuda sık tercih edilen ülkeler arasında.",
  },
  {
    q: "Schengen vize randevusu için en doğru zamanlama nedir?",
    a: "Yaz yoğunluğunu göz önünde bulundurarak 6–8 hafta öncesinden randevu kovalayın. Esnek tarih aralığı belirleyin ve alternatif başvuru merkezlerini (İstanbul dışı şehirler) takip edin.",
  },
  {
    q: "Vize başvurusu reddedilirse ne yapılmalı?",
    a: "Ret gerekçelerini dikkatlice analiz edin; eksik belge, tutarsız plan veya finansal yetersizlik gibi sorunları gidermeden yeniden başvurmak başarı şansını düşürür. Güçlendirilmiş yeni bir dosyayla başvurmak doğru yaklaşım.",
  },
  {
    q: "Bilet ve otel rezervasyonu vize onayından önce kesinleştirilmeli mi?",
    a: "Kesinlikle iade koşulları uygun, esnek rezervasyonlar tercih edin. Randevu ve onay sürecine göre planı güncellemek hem finansal hem de lojistik riski azaltır.",
  },
];

export default function SchengenVisaPage() {
  return (
    <div
      className={`${dmSerif.variable} ${dmSans.variable} bg-[#F8F9FC] text-[#1B2B4A] font-sans`}
    >
      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="relative h-[70vh] min-h-[520px] max-h-[720px]">
          <img
            src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=1600&q=85"
            alt="Avrupa şehir manzarası - Schengen seyahat rehberi"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B2B4A]/70 via-[#1B2B4A]/50 to-[#1B2B4A]/90" />
          <div className="relative h-full flex flex-col justify-end">
            <div className="mx-auto w-full max-w-[900px] px-6 pb-14">
              <div className="inline-flex items-center gap-2 bg-[#4A7BC8]/20 backdrop-blur-sm border border-[#4A7BC8]/30 text-[#A8C4F0] text-xs font-sans font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4A7BC8] animate-pulse inline-block" />
                Güncelleme: Ocak 2026
              </div>
              <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-5">
                Türklere En Kolay Vize
                <br />
                Veren 5 Schengen Ülkesi
              </h1>
              <p className="text-white/75 text-lg md:text-xl max-w-[620px] font-sans leading-relaxed">
                2026 sezonunda randevu stratejisi, belge hazırlığı ve çok
                girişli vize olasılığıyla kapsamlı rehber.
              </p>
              {/* Quick stats */}
              <div className="flex flex-wrap gap-6 mt-10">
                {[
                  { v: "5", l: "Ülke Analizi" },
                  { v: "7", l: "SSS Yanıtı" },
                  { v: "2026", l: "Güncel Veri" },
                ].map((s) => (
                  <div key={s.l} className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl text-[#4A7BC8]">
                      {s.v}
                    </span>
                    <span className="text-white/60 text-sm font-sans">
                      {s.l}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── İÇİNDEKİLER ── */}
      <section className="mx-auto max-w-[900px] px-6 py-10">
        <nav
          className="bg-white border border-[#1B2B4A]/10 rounded-2xl p-6 shadow-sm"
          aria-label="İçindekiler"
        >
          <p className="text-xs font-sans font-semibold tracking-widest uppercase text-[#4A7BC8] mb-4">
            Bu Rehberde
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              ["#genel", "2026 Schengen Vize Eğilimleri"],
              ["#almanya", "🇩🇪 Almanya"],
              ["#italya", "🇮🇹 İtalya"],
              ["#fransa", "🇫🇷 Fransa"],
              ["#yunanistan", "🇬🇷 Yunanistan"],
              ["#ispanya", "🇪🇸 İspanya"],
              ["#tablo", "Karşılaştırma Tablosu"],
              ["#ipuclari", "2026 Başvuru İpuçları"],
              ["#sss", "Sıkça Sorulan Sorular"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-[#1B2B4A]/70 hover:text-[#4A7BC8] transition-colors py-1 flex items-center gap-2 group"
              >
                <span className="w-1 h-1 rounded-full bg-[#4A7BC8]/40 group-hover:bg-[#4A7BC8] transition-colors flex-shrink-0" />
                {label}
              </a>
            ))}
          </div>
        </nav>
      </section>

      {/* ── GENEL BAKIŞ ── */}
      <section
        id="genel"
        className="mx-auto max-w-[900px] px-6 pb-16 scroll-mt-20"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-[3px] bg-[#4A7BC8] mt-4 flex-shrink-0" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#1B2B4A]">
            2026'da Schengen Vize Eğilimleri
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-[#1B2B4A]/70 text-base leading-relaxed mb-4">
              2026, Schengen vize süreçlerinde dijital dönüşümün ivme kazandığı
              bir yıl olarak öne çıkıyor. Başvuru merkezlerinin randevu
              planlamasını daha şeffaf hale getirmesi ve erken rezervasyon yapan
              başvuru sahiplerine alternatif lokasyon seçenekleri sunulması,
              sürecin öngörülebilirliğini artırıyor.
            </p>
            <p className="text-[#1B2B4A]/70 text-base leading-relaxed">
              Düzenli seyahat geçmişine sahip ve önceki vizelerini kurallara
              uygun kullanan başvuru sahipleri, çok girişli Schengen vizesi
              almanın daha gerçekçi bir hedef haline geldiğini bildiriyor.
            </p>
          </div>
          <div className="bg-[#1B2B4A] rounded-2xl p-6 text-white">
            <p className="text-[#4A7BC8] text-xs font-semibold tracking-widest uppercase mb-4">
              2026 Ana Belirleyiciler
            </p>
            <ul className="space-y-3">
              {[
                "Seyahat sigortası kapsamı ve geçerliliği",
                "Finansal yeterlilik ve banka ekstreleri",
                "Konaklama ve bilet tutarlılığı",
                "Schengen geçmiş vize kullanım disiplini",
                "Seyahat amacını destekleyen belgeler",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-[#4A7BC8] mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#4A7BC8]/8 border-l-4 border-[#4A7BC8] rounded-r-xl p-5">
          <p className="text-sm text-[#1B2B4A]/70 leading-relaxed">
            <strong className="text-[#1B2B4A]">Önemli Not:</strong> Resmi yıllık
            istatistikler dönem sonunda kamuoyuyla paylaşılır. Bu rehberdeki
            değerlendirmeler; konsolosluk kapasiteleri, randevu akışları, talep
            trendleri ve başvuru sahiplerinin saha deneyimlerine dayanmaktadır.
            Bireysel profiliniz (seyahat geçmişi, gelir düzeyi, sosyal bağlar)
            sonucu doğrudan etkiler.
          </p>
        </div>
      </section>

      {/* ── ÜLKELER ── */}
      <section className="mx-auto max-w-[900px] px-6 pb-6">
        <div className="space-y-24">
          {countries.map((country, idx) => (
            <article
              key={country.name}
              id={country.name
                .toLowerCase()
                .replace("ı", "i")
                .replace("İ", "i")}
              className="scroll-mt-20"
            >
              {/* Number + name header */}
              <div className="flex items-end gap-4 mb-8">
                <span className="font-serif text-7xl text-[#1B2B4A]/8 leading-none select-none">
                  {country.number}
                </span>
                <div className="pb-1">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#4A7BC8] block mb-1">
                    {country.label}
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl text-[#1B2B4A] flex items-center gap-3">
                    {country.emoji} {country.name}
                  </h2>
                </div>
              </div>

              {/* Hero image */}
              <div className="relative rounded-2xl overflow-hidden mb-8 h-72 md:h-96">
                <img
                  src={country.image}
                  alt={country.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B4A]/50 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full ${country.tagColor}`}
                  >
                    {country.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 right-5 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 text-center">
                  <p className="text-[10px] font-sans text-[#1B2B4A]/50 uppercase tracking-wider">
                    {country.stat.label}
                  </p>
                  <p className="font-serif text-lg text-[#1B2B4A] leading-tight">
                    {country.stat.value}
                  </p>
                </div>
              </div>

              {/* Content grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-[#1B2B4A]/80 text-base leading-relaxed">
                    {country.summary}
                  </p>
                  <p className="text-[#1B2B4A]/65 text-base leading-relaxed">
                    {country.detail}
                  </p>
                </div>

                {/* Stats card */}
                <div className="bg-white border border-[#1B2B4A]/8 rounded-2xl p-5 shadow-sm self-start">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#4A7BC8] mb-4">
                    Hızlı Bakış
                  </p>
                  <div className="space-y-3">
                    {[
                      { l: "İdeal İçin", v: country.ideal },
                      { l: "Randevu", v: country.randevu },
                      { l: "Yoğun Sezon", v: country.sezon },
                      { l: "Multi Eğilim", v: country.multi },
                    ].map((item) => (
                      <div key={item.l}>
                        <p className="text-[10px] text-[#1B2B4A]/40 uppercase tracking-wider font-semibold">
                          {item.l}
                        </p>
                        <p className="text-sm text-[#1B2B4A] font-medium mt-0.5">
                          {item.v}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tip box */}
              <div className="flex items-start gap-4 bg-[#4A7BC8]/6 border border-[#4A7BC8]/15 rounded-xl p-5">
                <span className="text-2xl flex-shrink-0">💡</span>
                <div>
                  <p className="text-xs font-semibold text-[#4A7BC8] uppercase tracking-wider mb-1">
                    Uzman İpucu
                  </p>
                  <p className="text-sm text-[#1B2B4A]/75 leading-relaxed">
                    {country.tip}
                  </p>
                </div>
              </div>

              {idx < countries.length - 1 && (
                <div className="border-b border-[#1B2B4A]/8 mt-16" />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ── KARŞILAŞTIRMA TABLOSU ── */}
      <section
        id="tablo"
        className="mx-auto max-w-[900px] px-6 py-20 scroll-mt-20"
      >
        <div className="flex items-start gap-4 mb-10">
          <div className="w-10 h-[3px] bg-[#4A7BC8] mt-4 flex-shrink-0" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#1B2B4A]">
            Karşılaştırma Tablosu
          </h2>
        </div>

        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="border-b-2 border-[#1B2B4A]">
                {[
                  "Ülke",
                  "Randevu (Sezon Dışı)",
                  "Yoğun Sezon",
                  "Multi Eğilim",
                  "İdeal Profil",
                ].map((h) => (
                  <th
                    key={h}
                    className="text-left text-[10px] font-semibold uppercase tracking-wider text-[#1B2B4A]/50 pb-3 pr-4"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "🇩🇪 Almanya",
                  randevu: "İstikrarlı",
                  sezon: "Orta–Yüksek",
                  multi: "Orta–Yüksek",
                  ideal: "İş, aile, kültür",
                },
                {
                  name: "🇮🇹 İtalya",
                  randevu: "Orta",
                  sezon: "Yüksek",
                  multi: "Orta",
                  ideal: "Turizm, etkinlik",
                },
                {
                  name: "🇫🇷 Fransa",
                  randevu: "Orta",
                  sezon: "Yüksek",
                  multi: "Orta",
                  ideal: "Turizm, iş, aile",
                },
                {
                  name: "🇬🇷 Yunanistan",
                  randevu: "İyi",
                  sezon: "Yüksek (yaz)",
                  multi: "Orta",
                  ideal: "Yaz tatili, ada turu",
                },
                {
                  name: "🇪🇸 İspanya",
                  randevu: "Orta",
                  sezon: "Orta–Yüksek",
                  multi: "Orta",
                  ideal: "Turizm, spor",
                },
              ].map((row, i) => (
                <tr
                  key={row.name}
                  className={`border-b border-[#1B2B4A]/8 ${
                    i % 2 === 0 ? "bg-white/60" : ""
                  }`}
                >
                  <td className="py-4 pr-4 font-medium text-[#1B2B4A]">
                    {row.name}
                  </td>
                  <td className="py-4 pr-4 text-[#1B2B4A]/70">{row.randevu}</td>
                  <td className="py-4 pr-4 text-[#1B2B4A]/70">{row.sezon}</td>
                  <td className="py-4 pr-4">
                    <span className="inline-block bg-[#4A7BC8]/10 text-[#4A7BC8] text-xs font-medium px-2.5 py-1 rounded-full">
                      {row.multi}
                    </span>
                  </td>
                  <td className="py-4 text-[#1B2B4A]/70">{row.ideal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#1B2B4A]/40 mt-4">
          * Multi vize eğilimi genel trendi yansıtır. Nihai karar bireysel
          profil ve konsolosluk değerlendirmesine bağlıdır.
        </p>
      </section>

      {/* ── BAŞVURU İPUÇLARI ── */}
      <section id="ipuclari" className="bg-[#1B2B4A] py-20 scroll-mt-20">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-10 h-[3px] bg-[#4A7BC8] mt-4 flex-shrink-0" />
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              2026 Başvuru İpuçları
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tips.map((tip) => (
              <div
                key={tip.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors"
              >
                {/*    <span className="text-3xl mb-4 block">{tip.icon}</span> */}
                <h3 className="font-serif text-xl text-white mb-2">
                  {tip.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SONUÇ ── */}
      <section className="mx-auto max-w-[900px] px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-[3px] bg-[#4A7BC8] mt-4 flex-shrink-0" />
              <h2 className="font-serif text-3xl md:text-4xl text-[#1B2B4A]">
                Sonuç
              </h2>
            </div>
            <p className="text-[#1B2B4A]/70 text-base leading-relaxed mb-4">
              2026 yılında Türk vatandaşlarına Schengen vizesi konusunda öne
              çıkan ülkeler; güçlü konsolosluk altyapıları, yüksek turizm talebi
              ve Türkiye ile yoğun seyahat trafiğiyle Almanya, İtalya, Fransa,
              Yunanistan ve İspanya olarak sıralanıyor.
            </p>
            <p className="text-[#1B2B4A]/70 text-base leading-relaxed">
              Randevu planlamasını erkene almak, belgelerde tutarlılık sağlamak
              ve seyahat geçmişinizi stratejik yönetmek; yalnızca onay oranınızı
              değil, multi vize alma olasılığınızı da anlamlı biçimde
              yükseltiyor. Başvuru ülkesini seçerken gerçek varış noktanızı ve
              en uzun konaklamanızı temel alın.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-72">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80"
              alt="Uçak penceresi - seyahat özgürlüğü"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B4A]/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── SSS ── */}
      <section
        id="sss"
        className="mx-auto max-w-[900px] px-6 pb-24 scroll-mt-20"
      >
        <div className="flex items-start gap-4 mb-10">
          <div className="w-10 h-[3px] bg-[#4A7BC8] mt-4 flex-shrink-0" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#1B2B4A]">
            Sıkça Sorulan Sorular
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-[#1B2B4A]/10 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-serif text-lg text-[#1B2B4A] mb-3 flex items-start gap-3">
                <span className="font-sans text-sm font-bold text-[#4A7BC8] mt-0.5 flex-shrink-0 w-6">
                  S{i + 1}
                </span>
                {faq.q}
              </h3>
              <p className="text-[#1B2B4A]/65 text-sm leading-relaxed pl-9">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      {/*  <section className="bg-gradient-to-br from-[#1B2B4A] to-[#243a63] py-16">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <p className="text-[#4A7BC8] text-xs font-semibold tracking-widest uppercase mb-4">
            Profesyonel Destek
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Vize Sürecinizi Birlikte Planlayalım
          </h2>
          <p className="text-white/60 text-base max-w-[500px] mx-auto mb-8">
            Randevu planlaması, evrak kontrolü ve rota danışmanlığından oluşan
            uçtan uca vize desteği için uzman ekibimizle iletişime geçin.
          </p>
          <a
            href="/danismanlik"
            className="inline-block bg-[#4A7BC8] hover:bg-[#3a6ab8] text-white font-sans font-semibold text-sm px-8 py-4 rounded-xl transition-colors"
          >
            Ücretsiz Danışmanlık Al →
          </a>
        </div>
      </section> */}
    </div>
  );
}
