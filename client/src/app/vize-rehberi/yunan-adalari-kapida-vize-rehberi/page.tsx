import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Yunan Adaları Kapıda Vize 2026 | 12 Ada, Şartlar ve Ücretler",
  description:
    "2026'da Türk vatandaşları için Yunan Adaları kapıda vize rehberi: 80 € ücret, başvuru şartları, hangi 12 adaya gidilir, feribot limanları ve ada başına gezi önerileri.",
  keywords: [
    "yunan adaları kapıda vize",
    "yunanistan kapı vizesi 2026",
    "yunan adaları vizesiz",
    "rodos kapıda vize",
    "kos adası vize",
    "sakız adası kapı vizesi",
    "yunanistan vize ücreti",
    "türklerden yunan adaları",
    "doğu ege adaları vize",
  ],
  alternates: {
    canonical: "/vize-rehberi/yunan-adalari-kapida-vize",
  },
  openGraph: {
    title: "Yunan Adaları Kapıda Vize 2026 | 12 Ada Rehberi",
    description:
      "80 € kapıda vizeyle 12 Yunan adasına nasıl gidilir? Başvuru şartları, feribot limanları ve ada bazında gezi önerileri.",
    type: "article",
    locale: "tr_TR",
  },
};

// ─── Yardımcı bileşenler ─────────────────────────────────────────────────────

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-medium text-[#4A7BC8] tracking-[1.4px] uppercase mb-3">
      <span className="block w-[18px] h-[1.5px] bg-[#4A7BC8] flex-shrink-0" />
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
  const styles = {
    warning: "bg-amber-50 border-amber-200 text-amber-900",
    info: "bg-blue-50 border-blue-200 text-blue-900",
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

// ─── Ada verisi ───────────────────────────────────────────────────────────────

const adalar = [
  {
    no: "01",
    trAd: "Midilli",
    grAd: "Lesvos",
    liman: "Ayvalık",
    gorsel:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=900&q=80&auto=format&fit=crop",
    gorselAlt: "Midilli Adası Molivos limanı",
    aciklama:
      "Adanın asıl adı Lesvos. Bizim Midilli dediğimiz yer aslında adanın bir şehri. Ayvalık'ın hemen karşısında, denizi ve tarihi dokusuyla sakin bir kaçamak arayan herkes için biçilmiş kaftan.",
    aktiviteler: [
      "Petra veya Molivos kıyılarında denize girin; her ikisi de sakin ve berrak.",
      "Mantamados'ta yöreye özgü ladotiri peynirini tadın.",
      "Tek bir nokta seçmek zorundaysanız hem denizi hem sokakları güzel olan Molivos'u tercih edin.",
    ],
    ulasim:
      "Edremit'e uçup oradan araçla Ayvalık'a geçin, ardından feribota binin.",
  },
  {
    no: "02",
    trAd: "Sakız",
    grAd: "Chios",
    liman: "Çeşme",
    gorsel:
      "https://images.unsplash.com/photo-1565588514814-6a9e7bcd7657?w=900&q=80&auto=format&fit=crop",
    gorselAlt: "Sakız Adası Mesta köyü dar sokaklar",
    aciklama:
      "Adının Sakız olmasının sebebi gayet açık: sakız ağaçlarının tüm adaya yayılmış olması. Çeşme'den kısa bir feribot yolculuğuyla ulaşabileceğiniz bu ada, özgün köyleri ve uzun plajlarıyla farklı bir deneyim vadediyor.",
    aktiviteler: [
      "Orta Çağ'dan kalma Mesta köyünü gezin; arnavut kaldırımlı labirent sokakları ve sarmaşıklı duvarlarıyla etkileyici.",
      "Karfas kumsallarında güneşlenip denize girin.",
      "Kambos'taki narenciye bahçeleri arasında konaklayarak adanın ruhunu hissedin.",
    ],
    ulasim: "İzmir'e uçup Çeşme Limanı'ndan feribota binin.",
  },
  {
    no: "03",
    trAd: "Sisam",
    grAd: "Samos",
    liman: "Kuşadası",
    gorsel: "https://images.unsplash.com/photo-1518557984649-7b161c230cfa",
    gorselAlt: "Samos adası turkuaz deniz ve kayalık koy",
    aciklama:
      "Dilek Yarımadası'nın hemen karşısında yer alan Sisam, berrak koylları ve şarap geleneğiyle öne çıkan bir ada. Kuşadası'ndan hareket eden feribotlarla kolayca ulaşabilirsiniz.",
    aktiviteler: [
      "Tsamadou Beach'te (Navagos) kristal berraklığındaki suda yüzün; alternatif olarak Lemonakia Beach de mükemmel.",
      "Manolates Köyü'nden Ege'nin panoramik manzarasını seyredin.",
      "Adanın yerel şaraplarını bir meyhane terasında deneyin.",
    ],
    ulasim: "İzmir'e uçup Kuşadası Limanı'ndan feribota binin.",
  },
  {
    no: "04",
    trAd: "Limni",
    grAd: "Limnos",
    liman: "Çanakkale",
    gorsel:
      "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=900&q=80&auto=format&fit=crop",
    gorselAlt: "Yunan adası balıkçı tekneleri liman",
    aciklama:
      "Gökçeada'nın güneybatısında kalan Limni, kalabalıktan uzak, otantik Yunan adasını deneyimlemek isteyenler için ideal. Çanakkale'den kalkan feribotlarla ulaşabilirsiniz.",
    aktiviteler: [
      "Efsanevi kahraman Philoctetes'in bırakıldığı mağarayı ziyaret edin; tarihe ilgi duyanlar için unutulmaz.",
      "Başkent Myrina'nın üzerindeki Orta Çağ Kalesi'ne çıkın; manzara nefes kesiyor.",
      "Tenekeli plajında sakin bir yaz günü geçirin.",
    ],
    ulasim: "Balıkesir'e uçup Çanakkale'ye geçin, oradan feribota binin.",
  },
  {
    no: "05",
    trAd: "Leros",
    grAd: "İleryoz",
    liman: "Bodrum",
    gorsel:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=900&q=80&auto=format&fit=crop",
    gorselAlt: "Yunan adası renkli evler ve liman",
    aciklama:
      "Bodrum açıklarındaki Leros, kalabalık turizmin henüz ulaşmadığı sakin bir ada. Yemek kültürü ve samimi atmosferiyle yüksek beklentileri karşılıyor.",
    aktiviteler: [
      "Panteli Koyu'nda deniz ürünleri yiyin; turkuaz deniz eşliğinde bir öğle yemeği deneyimi.",
      "Ücretsiz Blefoutis Plajı'nda güne başlayın, akşamları ise koyun etrafındaki mekânlarda vakit geçirin.",
      "To Steki restoranında yemek yiyip Yunan müziği eşliğinde manzaranın keyfini çıkarın.",
    ],
    ulasim: "Bodrum'a uçup Turgutreis Limanı'ndan feribota binin.",
  },
  {
    no: "06",
    trAd: "Kalimnos",
    grAd: "Kelemez",
    liman: "Bodrum / Turgutreis",
    gorsel:
      "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=900&q=80&auto=format&fit=crop",
    gorselAlt: "Kalimnos adası tepeden manzara ve koy",
    aciklama:
      "Bodrum Turgutreis'in tam karşı kıyısında bulunan Kalimnos, sünger avcılığıyla ünlü bir ada. Türk ziyaretçiler arasında giderek popülerleşiyor.",
    aktiviteler: [
      "St Savvas Kilisesi'ne çıkın; manzara adanın en iyi bakış noktalarından.",
      "Papachatzis Sünger Fabrikası'nı ziyaret edin; müze, imalathane ve satış noktası bir arada.",
      "The Italian Road boyunca yürüyüş yapın; adayı çevreleyen panoramik bu yol benzersiz manzaralar sunuyor. Şapka ve su götürmeyi unutmayın.",
    ],
    ulasim: "Bodrum'a uçup Bodrum merkez ya da Turgutreis'ten feribota binin.",
  },
  {
    no: "07",
    trAd: "Kos",
    grAd: "İstanköy",
    liman: "Bodrum / Turgutreis",
    gorsel:
      "https://images.unsplash.com/photo-1535919020263-f79f5313f336?w=900&q=80&auto=format&fit=crop",
    gorselAlt: "Kos adası antik kalıntılar ve palmiye ağaçları",
    aciklama:
      "Modern tıbbın kurucusu Hipokrat'ın doğduğu ada olarak tarihe geçen Kos, hem antik miras hem de uzun plajlarıyla ziyaretçilerini karşılıyor. Bodrum'a en yakın adalardan biri.",
    aktiviteler: [
      "Asklepion Antik Kenti'ni mutlaka görün; Yunan mitolojisinde sağlık tanrısından adını alan bu antik sağlık merkezi etkileyici.",
      "Lambi Beach'in masmavi sularında yüzün.",
      "Hipokrat'a adanın en büyük çınarı olan Hipokrat Ağacı'nı ziyaret ederek saygılarınızı sunun.",
    ],
    ulasim:
      "Bodrum'a uçup Bodrum merkez ya da Turgutreis Limanı'ndan feribota binin.",
  },
  {
    no: "08",
    trAd: "Simi",
    grAd: "Sömbeki",
    liman: "Bodrum / Datça",
    gorsel:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900&q=80&auto=format&fit=crop",
    gorselAlt: "Simi adası renkli neoklasik binalar ve liman",
    aciklama:
      "12 adanın en küçüğü olan Simi, rengarenk neoklasik yapıları ve berrak koyleriyle tam anlamıyla bir Ege kartpostali. Adanın ismi deniz tanrısı Poseidon'un eşinden geliyor.",
    aktiviteler: [
      "Simi Roukouniotis Manastırı'nı ziyaret edin; etkileyici ikonaları ve sessiz atmosferiyle manevi bir deneyim.",
      "Yöreye özgü Simi karidesini deneyin; adanın en meşhur lezzeti.",
      "375 basamaklı Kali Strada merdivenini tırmanın; zirveden adanın manzarası muhteşem.",
      "Pedi Koyu'nda güne son verin.",
    ],
    ulasim: "Bodrum ya da Datça'dan feribota binin.",
  },
  {
    no: "09",
    trAd: "Rodos",
    grAd: "Rhodes",
    liman: "Marmaris / Fethiye",
    gorsel:
      "https://images.unsplash.com/photo-1601836743857-4d1e6da20a32?w=900&q=80&auto=format&fit=crop",
    gorselAlt: "Rodos adası tarihi sur ve deniz",
    aciklama:
      "12 adanın en büyüğü olan Rodos, görkemli Orta Çağ surları, şehir merkezindeki tarihi doku ve uzun plajlarıyla farklı zevklere hitap ediyor. Bodrum, Marmaris ya da Fethiye'den ulaşabilirsiniz.",
    aktiviteler: [
      "Lindos'taki St. Paul's Koyu'nda hem tarihi akropol hem de turkuaz denizin tadını birlikte çıkarın.",
      "Surlarla çevrili tarihi şehir merkezini yürüyerek keşfedin; bu şehri görmeden Rodos'u görmüş saymak mümkün değil.",
      "Orta Çağ Gül Festivali'ne denk gelirseniz kaçırmayın (Medieval Rose Festival of Rhodes).",
    ],
    ulasim:
      "Bodrum, Marmaris veya Fethiye'den düzenlenen feribot seferlerinden birini tercih edin.",
  },
  {
    no: "10",
    trAd: "Meis",
    grAd: "Kastellorizo",
    liman: "Kaş",
    gorsel:
      "https://images.unsplash.com/photo-1700850139282-9e01d348bf65?w=900&q=80&auto=format&fit=crop",
    gorselAlt: "Meis adası küçük liman ve renkli evler",
    aciklama:
      "Kaş'ın hemen karşısında, 500'ü aşmayan nüfusuyla dünyanın en küçük adalarından biri olan Meis, yavaş ve derin bir tatil arayan gezginler için eşsiz. Kaş'taki yüksek noktalardan adanın ışıklarını görebilirsiniz.",
    aktiviteler: [
      "Saint George Plajı'nda (adacığında) yüzün; berraklığıyla iz bırakıyor.",
      "Motor kiralayarak adayı keşfedin; küçük boyutu sayesinde birkaç saatte turlanabiliyor.",
      "Mavi Mağara'ya tekneyle girin; içerisi turkuaz bir ışık şölenine dönüşüyor.",
      "400 basamaklı kaleye çıkıp panoramik manzaranın keyfini çıkarın.",
    ],
    ulasim:
      "Dalaman'a uçup Kaş'a geçin, ardından Kaş Limanı'ndan feribota binin.",
  },
  {
    no: "11",
    trAd: "Batnoz",
    grAd: "Patmos",
    liman: "Bodrum (Kos aktarmalı)",
    gorsel:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=900&q=80&auto=format&fit=crop",
    gorselAlt: "Patmos adası beyaz taraçalar ve deniz manzarası",
    aciklama:
      "Hem Ortodoks hem de Katolikler için kutsal bir merkez olan Patmos, Bodrum'a yakın konumuyla ulaşılabilir bir hac ve kültür turizmi destinasyonu. Adanın sakinliği ve mistik atmosferi herkesin takdir ettiği bir ayrıcalık.",
    aktiviteler: [
      "UNESCO Dünya Mirası listesindeki Aziz Yuhanna Manastırı'nı ziyaret edin; hem mimari hem manzara olağanüstü.",
      "Ulaşımı zahmetli ama değer olan Psili Ammos Beach'e gidin; alternatif olarak sakin Petra Beach de tercih edilebilir.",
      "El yapımı ürünleri için Tourlou hediyelik eşya dükkanını ziyaret edin.",
    ],
    ulasim:
      "Bodrum'a uçup feribotla önce Kos'a, oradan Patmos'a aktarma yapın.",
  },
  {
    no: "12",
    trAd: "Semadirek",
    grAd: "Samothraki",
    liman: "Alexandroupoli (Dedeağaç)",
    gorsel:
      "https://images.unsplash.com/photo-1598845511224-75cd1ac5fd23?w=900&q=80&auto=format&fit=crop",
    gorselAlt: "Dağlık ada manzarası ve şelale",
    aciklama:
      "Yunanistan'ın en az bilinen, en büyüleyici adalarından biri olan Semadirek, deniz, şelale ve yürüyüş parkurlarıyla doğa tutkunlarına hitap ediyor. Kalabalıktan uzak, ham güzelliğini koruyan nadir adalardan.",
    aktiviteler: [
      "Adanın simgesi olan Fonias Şelalesi'ne yürüyüş yapın; orman içinde serin sularla yeniden doğmuş gibi hissedeceksiniz.",
      "Therma Köyü'ndeki doğal sıcak su kaynaklarında dinlenin.",
      "Saos Dağı'na tırmanın; zirveden deniz manzarası nefes kesici.",
    ],
    ulasim:
      "İstanbul veya Edirne üzerinden Dedeağaç'a (Alexandroupoli) geçin, oradan feribotla Semadirek'e ulaşın.",
  },
];

// ─── Sayfa ────────────────────────────────────────────────────────────────────

export default function YunanAdalarKapidaVizePage() {
  return (
    <article className="w-full bg-white font-sans">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <header className="relative bg-[#1B2B4A] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1600&q=80&auto=format&fit=crop"
            alt="Yunan adaları manzarası"
            fill
            priority
            className="object-cover opacity-25"
          />
        </div>
        <div className="relative max-w-[900px] mx-auto px-6 py-16 lg:py-24">
          <SectionTag>Vize Rehberi</SectionTag>
          <h1 className="font-serif text-[38px] lg:text-[54px] leading-[1.08] tracking-tight text-white mb-5">
            Yunan Adaları Kapıda Vize{" "}
            <em className="italic text-[#6B9BD9]">2026 Rehberi</em>
          </h1>
          <p className="text-[17px] font-light text-white/70 leading-relaxed max-w-[640px] mb-8">
            Türk vatandaşları 80 € kapıda vizeyle 12 Yunan adasını ziyaret
            edebiliyor. Başvuru şartları, feribot limanları ve her ada için gezi
            önerilerini bu rehberde bir arada bulabilirsiniz.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { sayi: "12", etiket: "Yunan adası" },
              { sayi: "€80", etiket: "Toplam vize ücreti" },
              { sayi: "7 gün", etiket: "Maksimum kalış" },
              { sayi: "2026", etiket: "Geçerlilik yılı" },
            ].map((s) => (
              <div
                key={s.etiket}
                className="bg-white/10 border border-white/20 rounded-xl p-4 text-center backdrop-blur-sm"
              >
                <p className="font-serif text-[26px] leading-none text-white tracking-tight mb-1">
                  {s.sayi}
                </p>
                <p className="text-[11px] text-white/60 font-light">
                  {s.etiket}
                </p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── İçerik ────────────────────────────────────────────────────────── */}
      <div className="max-w-[900px] mx-auto px-6 py-14 lg:py-20 space-y-20">
        {/* ── Genel Bilgi ────────────────────────────────────────────────── */}
        <section aria-labelledby="genel-bilgi">
          <InfoBox type="info">
            <strong className="font-medium">Önemli:</strong> Kapıda vize
            uygulaması Mart 2024'te başladı ve 1 Nisan 2025 itibarıyla bir yıl
            daha uzatılarak{" "}
            <strong className="font-medium">Nisan 2026'ya kadar</strong> geçerli
            kılındı. Bu uzatmayla birlikte listeye Semadirek (Samothraki) ve
            Batnoz (Patmos) adaları da eklenerek toplam ada sayısı 12'ye
            yükseldi.
          </InfoBox>

          <div className="mt-10">
            <SectionTag>Nedir?</SectionTag>
            <h2
              id="genel-bilgi"
              className="font-serif text-[28px] lg:text-[32px] text-[#1B2B4A] tracking-tight leading-snug mb-4"
            >
              Yunan Adaları kapıda vize nedir?
            </h2>
            <p className="text-[16px] font-light text-slate-500 leading-relaxed mb-4">
              Türkiye Cumhuriyeti vatandaşları, 80 € kapıda vize ücretiyle yıl
              boyunca 7 gün süreyle ve tek girişle 12 Yunan adasını ziyaret
              edebiliyor. Bu vizeyle birlikte Schengen vizesine gerek
              duyulmuyor.
            </p>
            <p className="text-[16px] font-light text-slate-500 leading-relaxed">
              "Kapıda vize" ifadesi, orada ödeme yaparak girileceği anlamına
              gelmez. Başvuruyu seyahatinizden en az{" "}
              <strong className="font-medium text-[#1B2B4A]">
                1 hafta önce
              </strong>{" "}
              tamamlamanız ve elektronik onayı almanız gerekiyor.
            </p>
          </div>
        </section>

        {/* ── Başvuru Şartları ───────────────────────────────────────────── */}
        <section aria-labelledby="basvuru-sartlari">
          <SectionTag>Başvuru Şartları</SectionTag>
          <h2
            id="basvuru-sartlari"
            className="font-serif text-[28px] lg:text-[32px] text-[#1B2B4A] tracking-tight leading-snug mb-6"
          >
            Kapıda vize için gerekli şartlar
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {[
              "En az 6 ay geçerliliği bulunan bordo pasaport",
              "Gidiş-dönüş feribot bileti",
              "Otel rezervasyonu",
              "Seyahat sigortası",
              "Vize başvuru formu",
              "3 aylık banka hesap dökümü (konaklamalı seyahat için)",
              "60 € vize ücreti + 20 € hizmet bedeli = toplam 80 €",
              "Pasaportunda KKTC vize damgası bulunmamalı",
            ].map((s) => (
              <div
                key={s}
                className="flex items-start gap-3 bg-[#F8F9FC] border border-slate-200 rounded-xl p-3.5"
              >
                <svg
                  width="15"
                  height="15"
                  fill="none"
                  stroke="#4A7BC8"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0 mt-0.5"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[13px] font-light text-slate-600 leading-relaxed">
                  {s}
                </span>
              </div>
            ))}
          </div>
          <InfoBox type="warning">
            <strong className="font-medium">KKTC vize damgası:</strong>{" "}
            Pasaportunuzda Kuzey Kıbrıs Türk Cumhuriyeti vize damgası
            bulunuyorsa Yunanistan kapıda vize başvurunuz kabul edilmemektedir.
          </InfoBox>
        </section>

        {/* ── Ada + Liman Tablosu ────────────────────────────────────────── */}
        <section aria-labelledby="adalar-tablo">
          <SectionTag>Hangi Adalara?</SectionTag>
          <h2
            id="adalar-tablo"
            className="font-serif text-[28px] lg:text-[32px] text-[#1B2B4A] tracking-tight leading-snug mb-4"
          >
            Kapıda vizeyle gidilen 12 ada ve feribot limanları
          </h2>
          <p className="text-[15px] font-light text-slate-500 leading-relaxed mb-6">
            Türk vatandaşları ve Türkiye'de oturum izni bulunan bazı yabancı
            uyruklu vatandaşlar aşağıdaki Doğu Ege adalarını kapıda vize ile
            ziyaret edebilir.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F8F9FC] border-b border-slate-200">
                  <th className="text-left px-5 py-3.5 text-[12px] font-medium text-[#1B2B4A] tracking-wide uppercase">
                    #
                  </th>
                  <th className="text-left px-5 py-3.5 text-[12px] font-medium text-[#1B2B4A] tracking-wide uppercase">
                    Türkçe Adı
                  </th>
                  <th className="text-left px-5 py-3.5 text-[12px] font-medium text-[#1B2B4A] tracking-wide uppercase">
                    Yunanca Adı
                  </th>
                  <th className="text-left px-5 py-3.5 text-[12px] font-medium text-[#1B2B4A] tracking-wide uppercase">
                    Kalkış Limanı (TR)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {adalar.map((ada, i) => (
                  <tr
                    key={ada.trAd}
                    className="bg-white hover:bg-[#F8F9FC] transition-colors"
                  >
                    <td className="px-5 py-3.5 text-[13px] text-slate-400 font-light">
                      {i + 1}
                    </td>
                    <td className="px-5 py-3.5 font-medium text-[#1B2B4A] whitespace-nowrap">
                      {ada.trAd}
                    </td>
                    <td className="px-5 py-3.5 text-slate-500 font-light whitespace-nowrap">
                      {ada.grAd}
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="inline-block bg-blue-50 text-[#1B2B4A] text-[12px] font-medium px-2.5 py-1 rounded-md whitespace-nowrap">
                        {ada.liman}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Ada Rehberleri ─────────────────────────────────────────────── */}
        <section aria-labelledby="ada-rehberleri">
          <SectionTag>Ada Rehberleri</SectionTag>
          <h2
            id="ada-rehberleri"
            className="font-serif text-[28px] lg:text-[32px] text-[#1B2B4A] tracking-tight leading-snug mb-10"
          >
            Her adada ne yapmalı?
          </h2>

          <div className="space-y-16">
            {adalar.map((ada) => (
              <article key={ada.trAd} aria-labelledby={`ada-${ada.trAd}`}>
                {/* Görsel */}
                <div className="relative aspect-[16/7] rounded-2xl overflow-hidden mb-6 bg-[#F1F4F9]">
                  <Image
                    src={ada.gorsel}
                    alt={ada.gorselAlt}
                    fill
                    sizes="(min-width: 900px) 900px, 100vw"
                    className="object-cover"
                  />
                  {/* Numara badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
                    <span className="font-serif text-[13px] text-[#4A7BC8] font-medium">
                      {ada.no}
                    </span>
                    <span className="w-[1px] h-3 bg-slate-300" />
                    <span className="text-[12px] font-medium text-[#1B2B4A]">
                      {ada.trAd}
                    </span>
                  </div>
                </div>

                {/* İçerik */}
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
                  <div>
                    <h3
                      id={`ada-${ada.trAd}`}
                      className="font-serif text-[24px] text-[#1B2B4A] tracking-tight leading-snug mb-1"
                    >
                      {ada.trAd} Adası
                    </h3>
                    <p className="text-[13px] text-[#4A7BC8] font-medium mb-4">
                      {ada.grAd} — Kalkış: {ada.liman}
                    </p>
                    <p className="text-[15px] font-light text-slate-500 leading-relaxed mb-5">
                      {ada.aciklama}
                    </p>
                    <div className="flex items-start gap-3 bg-[#F8F9FC] border border-slate-200 rounded-xl p-4">
                      <svg
                        width="15"
                        height="15"
                        fill="none"
                        stroke="#4A7BC8"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="flex-shrink-0 mt-0.5"
                      >
                        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6-10l6 3m0 7l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 10m0 7V10" />
                      </svg>
                      <div>
                        <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wide mb-0.5">
                          Nasıl Gidilir
                        </p>
                        <p className="text-[13px] font-light text-slate-600 leading-relaxed">
                          {ada.ulasim}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] font-medium text-[#4A7BC8] uppercase tracking-[1.2px] mb-3">
                      Yapılacaklar
                    </p>
                    <ul className="space-y-3">
                      {ada.aktiviteler.map((a) => (
                        <li
                          key={a}
                          className="flex items-start gap-3 text-[14px] font-light text-slate-600 leading-relaxed"
                        >
                          <svg
                            width="15"
                            height="15"
                            fill="none"
                            stroke="#4A7BC8"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                            className="flex-shrink-0 mt-0.5"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Ayırıcı */}
                <div className="mt-12 border-b border-slate-100" />
              </article>
            ))}
          </div>
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
                soru: "Kapıda vize başvurusu ne kadar önceden yapılmalı?",
                cevap:
                  "Seyahatinizden en az 1 hafta önce başvurunuzu tamamlamanız öneriliyor. Onay elektronik ortamda iletildiği için son dakika başvurularında onay alamama riskiyle karşılaşabilirsiniz.",
              },
              {
                soru: "Kapıda vize ile Schengen ülkelerine de gidebilir miyim?",
                cevap:
                  "Hayır. Bu vize yalnızca belirtilen 12 Yunan adasına giriş için geçerlidir. Schengen bölgesinin tamamında geçerliliği bulunmamaktadır.",
              },
              {
                soru: "Vize ne kadar süre geçerli ve kaç kez kullanılabilir?",
                cevap:
                  "Kapıda vize tek giriş hakkı tanımaktadır ve kalış süresi en fazla 7 gündür. Yıl boyunca geçerliliği olmasına karşın her seyahat için ayrı başvuru yapmanız gerekmektedir.",
              },
              {
                soru: "KKTC damgam varsa başvurabilir miyim?",
                cevap:
                  "Maalesef hayır. Pasaportunuzda KKTC vize damgası bulunması durumunda Yunanistan kapıda vize başvurunuz reddedilmektedir.",
              },
              {
                soru: "Kaç Yunan adasına kapıda vize ile gidilir?",
                cevap:
                  "2025 yılında yapılan uzatmayla birlikte Semadirek ve Batnoz da eklenerek toplam 12 adaya kapıda vize ile gidilebiliyor: Midilli, Sakız, Sisam, Limni, Leros, Kalimnos, Kos, Simi, Rodos, Meis, Semadirek ve Batnoz.",
              },
              {
                soru: "Türkiye'de oturum izni olan yabancılar da başvurabilir mi?",
                cevap:
                  "Evet, Türkiye'de geçerli oturum izni bulunan bazı yabancı uyruklu vatandaşlar da bu kapıda vize uygulamasından yararlanabilmektedir.",
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
        {/*  <section className="bg-[#1B2B4A] rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="font-serif text-[28px] lg:text-[34px] text-white tracking-tight leading-snug mb-3">
            Avrupa&apos;da çalışmayı düşünüyor musunuz?
          </h2>
          <p className="text-[15px] font-light text-white/60 leading-relaxed mb-8 max-w-[480px] mx-auto">
            Almanya ve Avusturya çalışma vizesi başvuru şansınızı puan hesaplama
            araçlarımızla dakikalar içinde öğrenin.
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
        </section> */}
      </div>
    </article>
  );
}
