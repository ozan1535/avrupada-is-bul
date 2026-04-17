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
  title: "Almanya'da İş Bulma Rehberi 2026 | Yabancılar İçin Adım Adım Kılavuz",
  description:
    "Almanya'da iş aramak için bilmeniz gereken her şey: hangi sektörler yabancılara açık, CV ve motivasyon mektubu nasıl hazırlanır, çalışma vizesi nasıl alınır. 2026 güncel rehber.",
  keywords: [
    "Almanya'da iş bulmak",
    "Almanya çalışma vizesi 2026",
    "yabancılar için Almanya iş rehberi",
    "Almanya CV nasıl hazırlanır",
    "Almanya mavi kart",
    "Almanya iş imkanları Türkler için",
    "Almanya'da çalışmak",
    "EU Blue Card nedir",
    "Almanya'da kariyer",
    "Almanya blocked account",
  ],
  openGraph: {
    title:
      "Almanya'da İş Bulma Rehberi 2026 — Yabancılar İçin Eksiksiz Kılavuz",
    description:
      "Almanya iş pazarını anlamak, CV hazırlamak, vize almak ve doğru sektörü seçmek için kapsamlı Türkçe rehber.",
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Almanya Frankfurt şehir manzarası iş rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Almanya'da İş Bulma Rehberi 2026",
    description:
      "Sektörler, CV formatı, çalışma vizesi ve Fintiba gibi pratik adımlarla Almanya'da kariyer rehberi.",
  },
  alternates: {
    canonical: "/almanya-is-bulma-rehberi",
  },
};

const sectors = [
  {
    icon: "⚙️",
    title: "Mühendislik",
    desc: "Makine, otomotiv ve elektrik mühendisleri yoğun talep görüyor. Almanya'nın üretim altyapısı bu alanda sürekli uzman arıyor.",
  },
  {
    icon: "💻",
    title: "Bilgi Teknolojileri",
    desc: "Yazılım geliştirici, veri analisti ve siber güvenlik uzmanları için fırsatlar her yıl artıyor. İngilizce yeten birçok pozisyon mevcut.",
  },
  {
    icon: "🏥",
    title: "Sağlık & Bakım",
    desc: "Doktor, hemşire ve bakım personeli tüm federal eyaletlerde kritik öncelik. Dil desteği sunan kurumlar da artıyor.",
  },
  {
    icon: "🔌",
    title: "Usta Meslekler",
    desc: "Elektrikçi, tesisatçı ve metal işçisi gibi sertifikalı meslek sahipleri Almanya'da iş bulmada önemli avantaj yaşıyor.",
  },
  {
    icon: "🚛",
    title: "Lojistik",
    desc: "E-ticaretin büyümesiyle depo, nakliye ve tedarik zinciri uzmanlarına olan ihtiyaç hızla artıyor.",
  },
  {
    icon: "🎓",
    title: "Akademi & Araştırma",
    desc: "Almanya üniversitelerinden mezun uluslararası öğrenciler yerel iş piyasasına entegrasyonda ciddi avantaj yaşıyor.",
  },
];

const cvSections = [
  { label: "Kişisel Bilgiler", detail: "Ad, iletişim, doğum tarihi ve uyruk" },
  {
    label: "Eğitim",
    detail: "Okul, üniversite, derece — tarih ve lokasyon ile",
  },
  {
    label: "İş Deneyimi",
    detail: "Ünvan, sorumluluklar, başarılar — ters kronolojik",
  },
  {
    label: "Beceriler",
    detail: "Dil seviyeleri, teknik yetkinlikler, sertifikalar",
  },
  { label: "Fotoğraf", detail: "Profesyonel fotoğraf hâlâ yaygın tercih" },
];

const coverLetterItems = [
  "Hangi pozisyona başvurduğunuz ve kaynağı",
  "Bu şirkete ve role özel ilginizin nedeni",
  "İş tanımıyla örtüşen beceri ve başarılarınız",
  "Görüşmeye açık olduğunuzu belirten net kapanış",
];

const visaOptions = [
  {
    name: "EU Mavi Kart",
    label: "Vasıflı Profesyoneller İçin",
    color: "bg-blue-50 border-blue-200",
    badgeColor: "bg-[#4A7BC8] text-white",
    desc: "Yüksek vasıflı profesyoneller (BT, mühendislik, sağlık) için tercihli yol. Kalıcı oturuma daha hızlı geçiş imkânı sunuyor.",
    items: [
      "İş teklifi zorunlu",
      "Tanınan yabancı diploma şartı",
      "21 ayda yerleşik statüsü (Almanca B1 ile)",
      "Yüksek maaş eşiği gereksinimi",
    ],
  },
  {
    name: "Fırsat Kartı",
    label: "Opportunity Card",
    color: "bg-emerald-50 border-emerald-200",
    badgeColor: "bg-emerald-600 text-white",
    desc: "İş teklifi olmadan Almanya'ya gelip arama yapmanızı sağlıyor. Süreç boyunca yarı zamanlı çalışmanıza da izin veriyor.",
    items: [
      "6 aya kadar Almanya'da kalış",
      "Yarı zamanlı çalışma hakkı",
      "Aktif iş arama dönemi için tasarlandı",
      "Blocked account ile finansal kanıt şartı",
    ],
  },
];

const tips = [
  {
    icon: "🌐",
    title: "Yurt Dışından Başlayın",
    desc: "Make it in Germany, EURES, StepStone ve LinkedIn gibi portallarda binlerce pozisyon listeleniyor. Yabancı başvurulara açık filtresi kullanın.",
  },
  {
    icon: "🤝",
    title: "Ağ Kurun",
    desc: "Almanya'da işe alım süreçlerinde referanslar belirleyici olabiliyor. LinkedIn ve Xing (Alman profesyonel ağı) üzerinde bağlantı kurmaya başlayın.",
  },
  {
    icon: "🏢",
    title: "Şirket Sayfalarını Takip Edin",
    desc: "Pek çok Alman şirketi pozisyonları önce kendi web sitesinde yayımlıyor. Hedeflediğiniz firmaların kariyer sayfalarını düzenli kontrol edin.",
  },
  {
    icon: "🏛️",
    title: "İş Kurumları & Fuarlar",
    desc: "Almanya'da iseniz Agentur für Arbeit ücretsiz rehberlik sunuyor. Kariyer fuarları ve networking etkinlikleri çevrimiçi başvurudan çok daha güçlü izlenim bırakabiliyor.",
  },
  {
    icon: "🏦",
    title: "Blocked Account Hazırlayın",
    desc: "Vize veya oturma izni başvurusunda yasal minimum tutarın yatırıldığı özel hesap zorunlu. Almanya'ya varışın ardından aylık ödemeye dönüşüyor.",
  },
  {
    icon: "🗣️",
    title: "Almanca Öğrenin",
    desc: "Uluslararası şirketlerde İngilizce yetebilir; ancak B1 düzeyinde Almanca fırsatları ciddi ölçüde genişletiyor ve entegrasyonu hızlandırıyor.",
  },
];

const faqs = [
  {
    q: "Almanya'da iş bulmak için Almanca bilmek şart mı?",
    a: "Uluslararası şirketlerde ve BT sektöründe İngilizce konuşulan pozisyonlar mevcuttur. Ancak çoğu meslekte B1 düzeyinde Almanca hem yasal hem pratik bir gereklilik. Dil becerisi fırsatları önemli ölçüde genişletiyor.",
  },
  {
    q: "Yabancı diplomam Almanya'da geçerli mi?",
    a: "Yabancı diplomanın Almanya'daki eşdeğerliği Anerkennung (tanıma) süreciyle belirlenir. Özellikle düzenlemeli mesleklerde (tıp, hukuk, mühendislik) bu adım zorunlu; anabaserver.de portalından süreç başlatılabilir.",
  },
  {
    q: "İş teklifi olmadan Almanya'ya gidip iş arayabilir miyim?",
    a: "Evet. Fırsat Kartı (Opportunity Card) ile 6 aya kadar Almanya'da kalarak iş arayabilir, bu süreçte yarı zamanlı çalışabilirsiniz. Finansal yeterlilik ve blocked account şartı aranmaktadır.",
  },
  {
    q: "Alman stili CV nasıl olmalı?",
    a: "Tablo formatında, tersi kronolojik sırayla, maksimum 2 sayfa. Profesyonel fotoğraf eklenmesi hâlâ yaygın. Tarihler arasında boşluk bırakmayın; kariyer molası varsa kısa açıklama ekleyin.",
  },
  {
    q: "EU Mavi Kart kimler için geçerli?",
    a: "Almanya'da tanınan yükseköğretim diploması ve minimum maaş eşiğini karşılayan iş teklifine sahip vasıflı profesyoneller için. BT, mühendislik ve sağlık sektörlerinde özellikle etkin bir yol.",
  },
  {
    q: "İşe alım ajansları ne kadar işe yarar?",
    a: "Özellikle BT, mühendislik ve sağlık gibi uzmanlaşmış sektörlerde işe alım ajansları kamusal ilan çıkmadan önce fırsatlara erişmenizi sağlayabiliyor. Başvuru sahibinden ücret alınmaz; maliyeti şirket karşılar.",
  },
];

export default function AlmanyaIsRehberiPage() {
  return (
    <div
      className={`${dmSerif.variable} ${dmSans.variable} bg-[#F8F9FC] text-[#1B2B4A] font-sans`}
    >
      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="relative h-[72vh] min-h-[540px] max-h-[740px]">
          <img
            src="https://images.unsplash.com/photo-1587330979470-3595ac045ab0"
            alt="Berlin skyline — Almanya iş ve kariyer rehberi"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B2B4A]/60 via-[#1B2B4A]/45 to-[#1B2B4A]/92" />

          <div className="relative h-full flex flex-col justify-end">
            <div className="mx-auto w-full max-w-[900px] px-6 pb-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-sans font-medium tracking-widest uppercase px-4 py-2 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4A7BC8] animate-pulse inline-block" />
                  Kariyer Rehberi · 2026
                </div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-sans font-medium px-4 py-2 rounded-full">
                  🇩🇪 Almanya
                </div>
              </div>

              <h1 className="font-serif text-4xl md:text-[3.4rem] text-white leading-tight mb-5 max-w-[700px]">
                Almanya'da İş Bulma
                <br />
                <span className="text-[#7AAEE8]">Yabancılar İçin</span> Eksiksiz
                Rehber
              </h1>

              <p className="text-white/70 text-lg max-w-[580px] font-sans leading-relaxed mb-10">
                Sektör analizi, Alman stili CV hazırlığı, çalışma vizesi
                seçenekleri ve pratik adımlarla Almanya'da kariyer yolculuğunuza
                başlayın.
              </p>

              <div className="flex flex-wrap gap-8">
                {[
                  { v: "6", l: "Talep Gören Sektör" },
                  { v: "2", l: "Vize Yolu" },
                  { v: "7 dk", l: "Okuma Süresi" },
                ].map((s) => (
                  <div key={s.l} className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl text-[#4A7BC8]">
                      {s.v}
                    </span>
                    <span className="text-white/55 text-sm font-sans">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
            {[
              ["#pazar", "Almanya İş Pazarını Anlamak"],
              ["#sektorler", "Hangi Sektörler Yabancılara Açık?"],
              ["#nerede", "Nereden Başlamalı?"],
              ["#portaller", "İş Bulma Kanalları"],
              ["#belgeler", "Başvuru Belgelerini Hazırlamak"],
              ["#vize", "Çalışma Vizesi & Yasal Gereksinimler"],
              ["#ipuclari", "Pratik İpuçları"],
              ["#sss", "Sıkça Sorulan Sorular"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-[#1B2B4A]/65 hover:text-[#4A7BC8] transition-colors py-1 flex items-center gap-2 group"
              >
                <span className="w-1 h-1 rounded-full bg-[#4A7BC8]/35 group-hover:bg-[#4A7BC8] transition-colors flex-shrink-0" />
                {label}
              </a>
            ))}
          </div>
        </nav>
      </section>

      {/* ── İŞ PAZARI GENEL ── */}
      <section
        id="pazar"
        className="mx-auto max-w-[900px] px-6 pb-16 scroll-mt-20"
      >
        <div className="flex items-start gap-4 mb-7">
          <div className="w-10 h-[3px] bg-[#4A7BC8] mt-4 flex-shrink-0" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#1B2B4A]">
            Almanya İş Pazarını Anlamak
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-3 space-y-4">
            <p className="text-[#1B2B4A]/72 text-base leading-relaxed">
              Avrupa'nın en güçlü ekonomilerinden birini barındıran Almanya,
              yurt dışından iş arayan profesyoneller için önemli bir çekim
              merkezi. Düşük işsizlik oranı, rekabetçi maaşlar ve köklü sosyal
              haklar sistemi ülkeyi cazip kılıyor; ancak yapılandırılmış ve
              düzenlemeli bir iş piyasasına girmek planlama gerektiriyor.
            </p>
            <p className="text-[#1B2B4A]/72 text-base leading-relaxed">
              Alman işverenler resmi belgelere, sertifikalara ve eğitim
              kanıtlarına büyük önem veriyor. Yabancı bir diplomayla
              başvuruyorsanız
              <strong className="text-[#1B2B4A]"> Anerkennung</strong> (tanıma)
              sürecini başlatmanız genellikle zorunlu. Dil konusunda ise manzara
              değişiyor: büyük uluslararası şirketlerde İngilizce çalışma ortamı
              yaygınlaşırken Almanca bilmek fırsat havuzunu ve entegrasyon
              hızını belirgin biçimde artırıyor.
            </p>
          </div>

          <div className="md:col-span-2 bg-[#1B2B4A] rounded-2xl p-6 text-white self-start">
            <p className="text-[#4A7BC8] text-xs font-semibold tracking-widest uppercase mb-4">
              Temel Gerçekler
            </p>
            <ul className="space-y-3">
              {[
                "Avrupa'nın en büyük ekonomisi",
                "Yapılandırılmış ve belge odaklı işe alım",
                "Yabancı diplomanın tanınması zorunlu olabilir",
                "B1 Almanca pek çok meslekte asgari şart",
                "Öğrenci veya mezun için yerel avantaj",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-[#4A7BC8] mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-white/78">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pull quote */}
        <blockquote className="border-l-4 border-[#4A7BC8] pl-6 py-2">
          <p className="font-serif text-xl text-[#1B2B4A] italic leading-snug">
            "Alman iş pazarı yabancı profesyonellere açık — ancak doğru hazırlık
            olmadan kapılar zorlanabiliyor."
          </p>
        </blockquote>
      </section>

      {/* ── SEKTÖRLER ── */}
      <section
        id="sektorler"
        className="bg-white border-y border-[#1B2B4A]/8 py-16 scroll-mt-20"
      >
        <div className="mx-auto max-w-[900px] px-6">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-10 h-[3px] bg-[#4A7BC8] mt-4 flex-shrink-0" />
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1B2B4A]">
                Hangi Sektörler Yabancılara Açık?
              </h2>
              <p className="text-[#1B2B4A]/55 text-base mt-2">
                İşgücü açığı bulunan alanlarda yabancı profesyonellere olan
                talep artıyor.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectors.map((s) => (
              <div
                key={s.title}
                className="border border-[#1B2B4A]/10 rounded-2xl p-6 hover:border-[#4A7BC8]/40 hover:shadow-md transition-all group"
              >
                {/* { <span className="text-3xl mb-4 block">{s.icon}</span>} */}
                <h3 className="font-serif text-xl text-[#1B2B4A] mb-2 group-hover:text-[#4A7BC8] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-[#1B2B4A]/60 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEREDEN BAŞLAMALIYIM ── */}
      <section
        id="nerede"
        className="mx-auto max-w-[900px] px-6 py-16 scroll-mt-20"
      >
        <div className="flex items-start gap-4 mb-10">
          <div className="w-10 h-[3px] bg-[#4A7BC8] mt-4 flex-shrink-0" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#1B2B4A]">
            Nereden Başlamalı?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Yurt dışından */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
              alt="Dizüstü bilgisayarda iş araştırması — yurt dışından başvuru"
              className="w-full h-52 object-cover"
            />
            <div className="bg-[#1B2B4A] p-6">
              <h3 className="font-serif text-xl text-white mb-3">
                🌍 Yurt Dışından Başvuruyorsanız
              </h3>
              <p className="text-white/65 text-sm leading-relaxed mb-4">
                Make it in Germany, EURES, StepStone ve LinkedIn portalları
                binlerce pozisyon sunuyor. Yabancı başvurulara açık ve Almanca
                gerektirmeyen filtreler kullanarak aramayı daraltabilirsiniz.
              </p>
              <p className="text-white/65 text-sm leading-relaxed">
                İş teklifiniz yoksa Fırsat Kartı ile 6 aya kadar Almanya'da
                kalarak arama yapabilir, bu süreçte yarı zamanlı
                çalışabilirsiniz.
              </p>
            </div>
          </div>

          {/* Almanya'dayken */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80"
              alt="Ofis ortamında networking etkinliği — Almanya iş arama"
              className="w-full h-52 object-cover"
            />
            <div className="bg-[#243a63] p-6">
              <h3 className="font-serif text-xl text-white mb-3">
                🏙️ Almanya'da İseniz
              </h3>
              <p className="text-white/65 text-sm leading-relaxed mb-4">
                Kariyer fuarları ve yüz yüze görüşmeler çevrimiçi başvurudan
                belirgin biçimde daha güçlü izlenim bırakıyor. Agentur für
                Arbeit ücretsiz rehberlik ve iş ilanı hizmeti sunuyor.
              </p>
              <p className="text-white/65 text-sm leading-relaxed">
                Üniversite kariyer merkezi, profesyonel ağlar ve kişisel
                bağlantılar zaman zaman henüz duyurulmamış pozisyonlara
                ulaşmanızı sağlıyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── İŞ BULMA KANALLARI ── */}
      <section
        id="portaller"
        className="bg-[#F8F9FC] border-y border-[#1B2B4A]/8 py-16 scroll-mt-20"
      >
        <div className="mx-auto max-w-[900px] px-6">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-10 h-[3px] bg-[#4A7BC8] mt-4 flex-shrink-0" />
            <h2 className="font-serif text-3xl md:text-4xl text-[#1B2B4A]">
              İş Bulma Kanalları
            </h2>
          </div>

          <div className="space-y-5">
            {[
              {
                num: "01",
                title: "İş Portalları & Şirket Web Siteleri",
                body: "Make it in Germany, StepStone, Indeed.de, Monster.de ve LinkedIn en yaygın başlangıç noktaları. Hedeflediğiniz şirketlerin kariyer sayfalarını doğrudan takip etmek, ilgi ve inisiyatif göstermenin yanı sıra henüz portallara düşmemiş pozisyonlara erişim sağlıyor.",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
                imgAlt: "Laptop ekranında iş portalı",
              },
              {
                num: "02",
                title: "Ağ Oluşturma & Profesyonel Etkinlikler",
                body: "Almanya'da referans yoluyla doldurulan pozisyonların oranı göz ardı edilemez. Kariyer fuarları, sektör konferansları ve networking etkinlikleri işverenlerle yüz yüze temas fırsatı yaratıyor. LinkedIn ve Xing (Almanya merkezli profesyonel ağ) dijital ayak izinizi güçlendiriyor.",
                img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&q=80",
                imgAlt: "Profesyonel networking etkinliği",
              },
              {
                num: "03",
                title: "İşe Alım Ajansları & Headhunter'lar",
                body: "BT, mühendislik ve sağlık gibi uzmanlaşmış alanlarda işe alım ajansları kamuoyunda ilan edilmeden önce açık pozisyonlara erişmenizi sağlayabiliyor. Başvuru sahibinden herhangi bir ücret alınmaz; maliyeti işe alan şirket üstlenir.",
                img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&q=80",
                imgAlt: "İşe alım görüşmesi ofis ortamı",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white border border-[#1B2B4A]/8 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-sm"
              >
                <div className="md:w-44 h-40 md:h-auto flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.imgAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-serif text-4xl text-[#1B2B4A]/10 leading-none">
                      {item.num}
                    </span>
                    <h3 className="font-serif text-xl text-[#1B2B4A]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#1B2B4A]/65 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BELGELER ── */}
      <section
        id="belgeler"
        className="mx-auto max-w-[900px] px-6 py-16 scroll-mt-20"
      >
        <div className="flex items-start gap-4 mb-10">
          <div className="w-10 h-[3px] bg-[#4A7BC8] mt-4 flex-shrink-0" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#1B2B4A]">
            Başvuru Belgelerini Hazırlamak
          </h2>
        </div>

        <div className="relative rounded-2xl overflow-hidden mb-10 h-60">
          <img
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80"
            alt="Masa üzerinde iş başvurusu belgeleri"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B2B4A]/70 to-transparent flex items-center">
            <p className="text-white font-serif text-2xl ml-8 max-w-[340px] leading-snug">
              Alman iş başvurusu formatını bilmek, niteliklerin önüne
              geçebiliyor.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* CV */}
          <div>
            <h3 className="font-serif text-2xl text-[#1B2B4A] mb-4">
              Alman Stili CV (Lebenslauf)
            </h3>
            <p className="text-[#1B2B4A]/65 text-sm leading-relaxed mb-5">
              Tablo formatında, ters kronolojik sırayla ve maksimum 2 sayfa.
              Tarihler arasında boşluk bırakmayın; kariyer molası varsa kısa bir
              açıklamayla belirtin. Profesyonel fotoğraf eklenmesi hâlâ yaygın
              bir beklenti.
            </p>
            <div className="space-y-3">
              {cvSections.map((s, i) => (
                <div
                  key={s.label}
                  className="flex items-start gap-4 p-4 bg-[#F8F9FC] rounded-xl border border-[#1B2B4A]/8"
                >
                  <span className="font-serif text-lg text-[#4A7BC8] w-6 flex-shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#1B2B4A]">
                      {s.label}
                    </p>
                    <p className="text-xs text-[#1B2B4A]/55 mt-0.5">
                      {s.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Motivasyon Mektubu */}
          <div>
            <h3 className="font-serif text-2xl text-[#1B2B4A] mb-4">
              Motivasyon Mektubu (Anschreiben)
            </h3>
            <p className="text-[#1B2B4A]/65 text-sm leading-relaxed mb-5">
              Her pozisyon için özelleştirilmiş, tek sayfalık bir mektup. Alman
              işverenler kişiselleştirilmiş yaklaşıma değer veriyor; şirketin
              değerlerine veya projelerine atıfta bulunmak dikkate değer bir
              fark yaratıyor.
            </p>
            <div className="bg-[#1B2B4A] rounded-2xl p-6">
              <p className="text-[#4A7BC8] text-xs font-semibold tracking-widest uppercase mb-4">
                Güçlü Anschreiben Şunları İçermeli
              </p>
              <ul className="space-y-3">
                {coverLetterItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="text-[#4A7BC8] mt-0.5 flex-shrink-0">
                      →
                    </span>
                    <span className="text-white/75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 bg-[#4A7BC8]/8 border border-[#4A7BC8]/20 rounded-xl p-5">
              <p className="text-xs font-semibold text-[#4A7BC8] uppercase tracking-wider mb-1">
                Altın Kural
              </p>
              <p className="text-sm text-[#1B2B4A]/70 leading-relaxed">
                Her başvuru için mektubunuzu yeniden yazın. Şirket adını, ilgili
                projeyi veya değerini referans verin. Genel şablonlar Alman
                işverenler tarafından hızla fark ediliyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VİZE ── */}
      <section id="vize" className="bg-[#1B2B4A] py-20 scroll-mt-20">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-10 h-[3px] bg-[#4A7BC8] mt-4 flex-shrink-0" />
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Çalışma Vizesi & Yasal Gereksinimler
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {visaOptions.map((v) => (
              <div
                key={v.name}
                className="bg-white/6 border border-white/12 rounded-2xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif text-xl text-white">{v.name}</h3>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#4A7BC8]/20 text-[#7AAEE8]">
                    {v.label}
                  </span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  {v.desc}
                </p>
                <ul className="space-y-2">
                  {v.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="text-[#4A7BC8] mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Blocked Account kutusu */}
          <div className="bg-white/5 border border-[#4A7BC8]/30 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start">
            {/*  <div className="text-4xl flex-shrink-0">🏦</div> */}
            <div>
              <h3 className="font-serif text-xl text-white mb-2">
                Blocked Account Nedir ve Neden Gerekli?
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Almanya'da vize veya oturma izni başvurusunda yasal minimum
                tutarın yatırıldığı özel bir hesabı ibraz etmeniz gerekiyor. Bu
                hesap finansal yeterliliğinizi resmi makamlara kanıtlıyor.
                Almanya'ya varışın ardından aylık belirlenen miktarı normal
                banka hesabınıza aktarabiliyorsunuz. Fintiba gibi platformlar
                hem blocked account hem de zorunlu sağlık sigortası çözümleri
                sunuyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRATİK İPUÇLARI ── */}
      <section
        id="ipuclari"
        className="mx-auto max-w-[900px] px-6 py-16 scroll-mt-20"
      >
        <div className="flex items-start gap-4 mb-10">
          <div className="w-10 h-[3px] bg-[#4A7BC8] mt-4 flex-shrink-0" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#1B2B4A]">
            Pratik İpuçları
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="bg-white border border-[#1B2B4A]/8 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/*  <span className="text-3xl mb-4 block">{tip.icon}</span> */}
              <h3 className="font-serif text-lg text-[#1B2B4A] mb-2">
                {tip.title}
              </h3>
              <p className="text-sm text-[#1B2B4A]/60 leading-relaxed">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SONUÇ + GÖRSEL ── */}
      <section className="bg-[#F8F9FC] border-t border-[#1B2B4A]/8 py-16">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-2xl overflow-hidden h-72 order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&q=80"
                alt="Almanya'da çalışma hayatı — modern ofis ortamı"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B4A]/35 to-transparent" />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-[3px] bg-[#4A7BC8] mt-4 flex-shrink-0" />
                <h2 className="font-serif text-3xl text-[#1B2B4A]">Sonuç</h2>
              </div>
              <p className="text-[#1B2B4A]/70 text-base leading-relaxed mb-4">
                Almanya, yabancı profesyonellere gerçek kariyer fırsatları sunan
                bir pazar; ancak bu fırsatları yakalamak hazırlık gerektiriyor.
                Doğru sektörü belirlemek, belgeleri Alman standartlarına uygun
                hazırlamak ve vize yolunu netleştirmek başarının temel adımları.
              </p>
              <p className="text-[#1B2B4A]/70 text-base leading-relaxed">
                Yurt dışından ya da Almanya içinden başvuruyor olun, erken
                planlama, tutarlı belgeler ve güçlü bir ağ bu sürecin
                belirleyici faktörleri. Dil yatırımı ise hem fırsatları
                genişletiyor hem de entegrasyon sürecini hızlandırıyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SSS ── */}
      <section
        id="sss"
        className="mx-auto max-w-[900px] px-6 py-16 pb-24 scroll-mt-20"
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
              <p className="text-[#1B2B4A]/62 text-sm leading-relaxed pl-9">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      {/* <section className="bg-gradient-to-br from-[#1B2B4A] to-[#243a63] py-16">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <p className="text-[#4A7BC8] text-xs font-semibold tracking-widest uppercase mb-4">
            Almanya Kariyer Planlaması
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Almanya'da Kariyer Yolculuğunuzu Birlikte Planlayalım
          </h2>
          <p className="text-white/55 text-base max-w-[500px] mx-auto mb-8 leading-relaxed">
            CV danışmanlığı, vize rehberliği ve Almanya'daki kariyer
            hedeflerinize yönelik kişisel yol haritası
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
