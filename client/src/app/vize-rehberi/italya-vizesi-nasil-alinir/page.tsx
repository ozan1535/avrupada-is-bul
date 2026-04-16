import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İtalya Vizesi Nasıl Alınır? - İtalya Vize Rehberi 2026",
  description:
    "İtalya vizesi nasıl alınır? Schengen vizesi türleri, gerekli belgeler, başvuru şartları, vize ücreti ve randevu bilgileri. Türk vatandaşları için eksiksiz İtalya vize rehberi.",
  keywords: [
    "italya vize başvurusu",
    "italya vizesi nasıl alınır",
    "italya schengen vizesi",
    "italya vize belgeler",
    "italya vize ücreti",
    "italya vize şartları",
    "italya konsolosluk randevu",
    "schengen vizesi türkiye",
  ],
  alternates: {
    canonical: "/vize-rehberi/italya-vizesi-nasil-alinir",
  },
  openGraph: {
    title: "İtalya Vizesi Nasıl Alınır? - İtalya Vize Rehberi 2026",
    description:
      "İtalya vizesi nasıl alınır? Schengen vizesi türleri, gerekli belgeler, başvuru şartları ve randevu bilgileri ile eksiksiz rehber.",
    type: "article",
    locale: "tr_TR",
  },
};

// ─── Yardımcı bileşenler ──────────────────────────────────────────────────────

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

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[14px] font-light text-slate-600 leading-relaxed">
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
      {children}
    </li>
  );
}

// ─── Sayfa ────────────────────────────────────────────────────────────────────

export default function ItalyaVizePage() {
  return (
    <article className="w-full bg-white font-sans">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <header className="bg-[#F8F9FC] border-b border-slate-200">
        <div className="max-w-[900px] mx-auto px-6 py-14 lg:py-20">
          <InfoBox type="warning">
            T.C. vatandaşlarına yönelik bilgilerin güncelliğini resmi
            kaynaklardan kontrol etmeyi unutmayınız. Başvuru aşamasında resmi
            kurallar geçerlidir ve vize kontrolü yapılmalıdır.
          </InfoBox>

          <div className="mt-8">
            <SectionTag>Vize Rehberi</SectionTag>
            <h1 className="font-serif text-[38px] lg:text-[50px] leading-[1.1] tracking-tight text-[#1B2B4A] mb-5">
              İtalya Vize Başvurusu Rehberi
            </h1>
            <p className="text-[17px] font-light text-slate-500 leading-relaxed max-w-[680px]">
              Eşsiz tarihi dokusuyla her yıl milyonlarca turist ağırlayan
              İtalya&apos;ya seyahat için önce vize almanız gerekiyor. Vize
              türleri, başvuru şartları, gerekli belgeler, ücretler ve randevu
              bilgilerini bu rehberde bir arada bulabilirsiniz.
            </p>
          </div>

          {/* Hızlı bilgiler */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {[
              { sayi: "90", etiket: "Maks. kalış (gün)" },
              { sayi: "€90", etiket: "Başvuru harcı" },
              { sayi: "15", etiket: "Randevu öncesi gün" },
              { sayi: "5", etiket: "Sonuç süresi (iş günü)" },
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

      {/* ── İçerik ───────────────────────────────────────────────────────── */}
      <div className="max-w-[900px] mx-auto px-6 py-14 lg:py-20 space-y-20">
        {/* ── Uçak Bileti Notu ─────────────────────────────────────────── */}
        <section aria-labelledby="ucak-bileti">
          <SectionTag>Önemli Not</SectionTag>
          <h2
            id="ucak-bileti"
            className="font-serif text-[28px] lg:text-[32px] text-[#1B2B4A] tracking-tight leading-snug mb-4"
          >
            Vize başvurusunda uçak bileti
          </h2>
          <p className="text-[16px] font-light text-slate-500 leading-relaxed mb-4">
            İlk kez yurt dışı seyahati planlayan pek çok kişi, vize işlemi
            tamamlanmadan bilet almaktan kaçınır. Ancak İtalya vize başvurusunda
            satın aldığınız uçak biletine ait bilgileri yetkili makamlarla
            paylaşmanız, seyahate hazır olduğunuza dair olumlu bir izlenim
            bırakır.
          </p>
          <p className="text-[16px] font-light text-slate-500 leading-relaxed">
            Öte yandan biletinizi erkenden almanız, vize süreci belirli bir
            zaman aldığı için erken rezervasyon indirimlerinden yararlanmanızı
            da kolaylaştırır.
          </p>
        </section>

        {/* ── Vize Türleri ─────────────────────────────────────────────── */}
        <section aria-labelledby="vize-turleri">
          <SectionTag>Vize Türleri</SectionTag>
          <h2
            id="vize-turleri"
            className="font-serif text-[28px] lg:text-[32px] text-[#1B2B4A] tracking-tight leading-snug mb-4"
          >
            İtalya vize türleri nelerdir?
          </h2>
          <p className="text-[16px] font-light text-slate-500 leading-relaxed mb-8">
            Schengen ülkeleri arasında yer alan İtalya, ziyaret amacına ve
            süresine bağlı olarak çeşitli vize seçenekleri sunmaktadır.
          </p>

          {/* C Tipi */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden mb-6">
            <div className="bg-[#F8F9FC] px-6 py-4 border-b border-slate-200 flex items-center gap-3">
              <span className="inline-block bg-[#1B2B4A] text-white text-[11px] font-medium px-2.5 py-1 rounded-md tracking-wide">
                C Tipi
              </span>
              <h3 className="text-[17px] font-medium text-[#1B2B4A]">
                Kısa Süreli Vize (90 güne kadar)
              </h3>
            </div>
            <div className="px-6 py-5 space-y-4">
              <p className="text-[14px] font-light text-slate-500 leading-relaxed">
                Turistik, ticari, eğitim, sağlık, spor ve kültürel ziyaret gibi
                amaçlarla İtalya&apos;ya gidecekler Schengen Vizesi olarak da
                bilinen bu vizeye başvurur. Umuma mahsus (bordo) pasaport
                sahipleri, onaylanan vizeyle tüm Schengen ülkelerinde toplam 90
                günü aşmayacak şekilde seyahat edebilir.
              </p>
              <InfoBox type="success">
                <strong className="font-medium">
                  Hususi (yeşil), Diplomatik (siyah) ve Hizmet (gri) pasaport
                </strong>{" "}
                sahipleri 90 günü aşmayacak şekilde vizesiz seyahat
                edebilmektedir.
              </InfoBox>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  {
                    ad: "Turistik Vize",
                    aciklama: "90 günden kısa turistik seyahatler için.",
                  },
                  {
                    ad: "Ticari / İş Vizesi",
                    aciklama:
                      "İş ve fuar ziyaretleri için; davet mektubu gereklidir.",
                  },
                  {
                    ad: "Aile / Akraba Ziyareti",
                    aciklama:
                      "90 günlük geçici vize; davet belgesi zorunludur.",
                  },
                  {
                    ad: "Kültürel / Sportif",
                    aciklama:
                      "Konferans, sempozyum ve sportif etkinlikler için.",
                  },
                  {
                    ad: "Kısa Süreli Öğrenim",
                    aciklama:
                      "Eğitim süresi 90 günü geçmiyorsa bu vize geçerlidir.",
                  },
                ].map((v) => (
                  <div
                    key={v.ad}
                    className="bg-[#F8F9FC] border border-slate-200 rounded-xl p-4"
                  >
                    <p className="text-[13px] font-medium text-[#1B2B4A] mb-1">
                      {v.ad}
                    </p>
                    <p className="text-[12px] font-light text-slate-500 leading-relaxed">
                      {v.aciklama}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* D Tipi */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden">
            <div className="bg-[#F8F9FC] px-6 py-4 border-b border-slate-200 flex items-center gap-3">
              <span className="inline-block bg-[#4A7BC8] text-white text-[11px] font-medium px-2.5 py-1 rounded-md tracking-wide">
                D Tipi
              </span>
              <h3 className="text-[17px] font-medium text-[#1B2B4A]">
                Uzun Süreli Vize (90 günden fazla)
              </h3>
            </div>
            <div className="px-6 py-5">
              <p className="text-[14px] font-light text-slate-500 leading-relaxed">
                İtalya&apos;da kesintisiz olarak 90 günün üzerinde kalması
                gereken ve bunu belgeleyebilen kişiler (uzun süreli öğrencilik,
                çalışma izni, evlilik gibi durumlar) için düzenlenen ikamet
                vizesidir.
              </p>
            </div>
          </div>
        </section>

        {/* ── Başvuru Şartları ─────────────────────────────────────────── */}
        <section aria-labelledby="basvuru-sartlari">
          <SectionTag>Başvuru Şartları</SectionTag>
          <h2
            id="basvuru-sartlari"
            className="font-serif text-[28px] lg:text-[32px] text-[#1B2B4A] tracking-tight leading-snug mb-6"
          >
            İtalya vize başvuru şartları
          </h2>
          <ul className="space-y-3">
            {[
              "Konsolosluktan randevu alınması zorunludur. Randevunuzu seyahat tarihinizden en az 15 gün önce almanız önerilir.",
              "Hazırlanan belgelerin tamamı yetkililere elden teslim edilmelidir. E-posta, mektup veya faks gibi uzaktan teslim yöntemleri kabul edilmemektedir.",
              "Pasaport kopyası ve önceden alınmış tüm vize kopyaları başvuru anından itibaren en az 3 ay daha geçerli olmalıdır. Ayrıca pasaportunuzda en az 2 boş yaprak bulunmalıdır.",
              "Schengen vizesine ilk kez başvuranların parmak izi taraması yaptırması gerekmektedir. Bu örnek, sonraki başvurular için 5 yıl süreyle saklanır.",
              "Başvuruda beyan edilen pasaportun veriliş tarihi 10 yıldan daha eski olmamalıdır.",
            ].map((s, i) => (
              <CheckItem key={i}>{s}</CheckItem>
            ))}
          </ul>
        </section>

        {/* ── Gerekli Belgeler ─────────────────────────────────────────── */}
        <section aria-labelledby="gerekli-belgeler">
          <SectionTag>Belgeler</SectionTag>
          <h2
            id="gerekli-belgeler"
            className="font-serif text-[28px] lg:text-[32px] text-[#1B2B4A] tracking-tight leading-snug mb-4"
          >
            İtalya vizesi için gerekli belgeler
          </h2>
          <p className="text-[16px] font-light text-slate-500 leading-relaxed mb-8">
            Aşağıdaki belgeleri eksiksiz hazırlamak başvurunuzun olumlu
            sonuçlanması açısından kritik öneme sahiptir.
          </p>

          {/* Temel belgeler */}
          <h3 className="font-serif text-[20px] text-[#1B2B4A] mb-4 tracking-tight">
            Tüm başvuru sahipleri için
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              "Kimlik fotokopisi",
              "İtalya vize başvuru formu (doldurulmuş ve imzalanmış)",
              "2 adet biyometrik fotoğraf (3,5 x 4 cm, açık arka fon)",
              "Pasaportun aslı ve fotokopisi — dönüş tarihinden itibaren en az 90 gün geçerlilik",
              "Eski pasaportların fotokopisi",
              "Uluslararası geçerliliği bulunan seyahat sağlık sigortası",
              "Çalışılan şirkete ait imza sirküleri",
              "SGK işe giriş bildirgesi, son 3 aylık maaş bordrosu ve sigorta hizmet dökümü",
              "Konaklama ve uçak rezervasyon bilgileri ile acil iletişim kişisi",
              "Gelir beyanı dilekçesi",
              "Varsa gayrimenkul tapusu ve araç ruhsatı fotokopileri",
              "Son 3 aya ait, banka şubesince kaşelenmiş ve imzalanmış hesap özetleri",
              "Teminat için banka hesap cüzdanı fotokopisi, nakit para beyanı ve kredi kartı fotokopisi",
            ].map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 bg-[#F8F9FC] border border-slate-200 rounded-xl p-3.5"
              >
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="#4A7BC8"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0 mt-0.5"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[13px] font-light text-slate-600 leading-relaxed">
                  {b}
                </span>
              </div>
            ))}
          </div>

          {/* Özel gruplar */}
          <h3 className="font-serif text-[20px] text-[#1B2B4A] mb-5 tracking-tight">
            Gruba özel ek belgeler
          </h3>
          <div className="space-y-4">
            {[
              {
                grup: "İşverenler ve serbest meslek erbapları",
                belgeler: [
                  "Son 3 aya ait faaliyet belgesi",
                  "Vergi levhası fotokopisi",
                  "Ticaret Sicil Gazetesi fotokopisi",
                ],
              },
              {
                grup: "Masrafları şirket tarafından karşılanan çalışanlar",
                belgeler: [
                  "Şirketin antetli kâğıdına yazılmış, çalışanın İtalya'da bulunma gerekçesini ve tarihlerini içeren, kaşeli ve ıslak imzalı dilekçe",
                ],
              },
              {
                grup: "Emekliler",
                belgeler: [
                  "SGK emeklilik kartı fotokopisi",
                  "Maaşın yatırıldığı hesap cüzdanı fotokopisi",
                ],
              },
              {
                grup: "Öğrenciler",
                belgeler: ["Mevcut eğitim dönemine ait öğrenci belgesi"],
              },
              {
                grup: "Geliri bulunmayan kişiler",
                belgeler: ["Vize sponsor dilekçesi (1. derece akrabadan)"],
              },
            ].map((grup) => (
              <div
                key={grup.grup}
                className="border border-slate-200 rounded-xl overflow-hidden"
              >
                <div className="bg-[#F8F9FC] px-5 py-3 border-b border-slate-200">
                  <p className="text-[13px] font-medium text-[#1B2B4A]">
                    {grup.grup}
                  </p>
                </div>
                <ul className="px-5 py-4 space-y-2">
                  {grup.belgeler.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-[13px] font-light text-slate-500 leading-relaxed"
                    >
                      <svg
                        width="13"
                        height="13"
                        fill="none"
                        stroke="#4A7BC8"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        className="flex-shrink-0 mt-0.5"
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

          {/* Sponsor dilekçesi */}
          <div className="mt-6">
            <InfoBox type="info">
              <div>
                <strong className="font-medium block mb-1">
                  Vize Sponsor Dilekçesi
                </strong>
                Maddi durumu yurt dışı seyahate yetmeyen öğrenci ve işsiz gibi
                kişiler, 1. derece akrabasından alacağı sponsor dilekçesiyle
                başvurabilir. Ancak banka hesabında yeterli bakiye bulunan
                başvuru sahipleri, sponsor desteğine gerek kalmaksızın kendi
                adlarına hesap dökümleri, varsa öğrenci belgesi ve 1. derece
                akrabanın maddi yeterliliği onaylayan dilekçesiyle de başvuru
                yapabilir.
              </div>
            </InfoBox>
          </div>
        </section>

        {/* ── Vize Ücreti ──────────────────────────────────────────────── */}
        <section aria-labelledby="vize-ucreti">
          <SectionTag>Ücret</SectionTag>
          <h2
            id="vize-ucreti"
            className="font-serif text-[28px] lg:text-[32px] text-[#1B2B4A] tracking-tight leading-snug mb-6"
          >
            İtalya vize ücreti ne kadar?
          </h2>
          <p className="text-[16px] font-light text-slate-500 leading-relaxed mb-6">
            Başvuru için ödenecek tutarlar arasında konsolosluk harcının yanı
            sıra başvuru formu, fotoğraf ve vize danışmanlık ücretleri de yer
            alabilir. Ağustos 2024 itibarıyla geçerli olan resmi ücretler şu
            şekildedir:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-xl p-6 bg-white text-center">
              <p className="text-[13px] font-light text-slate-400 mb-2">
                Standart başvuru harcı
              </p>
              <p className="font-serif text-[42px] leading-none text-[#1B2B4A] tracking-tight mb-1">
                €90
              </p>
              <p className="text-[12px] text-slate-400 font-light">
                12 yaş ve üzeri
              </p>
            </div>
            <div className="border border-slate-200 rounded-xl p-6 bg-white text-center">
              <p className="text-[13px] font-light text-slate-400 mb-2">
                İndirimli başvuru harcı
              </p>
              <p className="font-serif text-[42px] leading-none text-[#1B2B4A] tracking-tight mb-1">
                €45
              </p>
              <p className="text-[12px] text-slate-400 font-light">
                6–12 yaş arası
              </p>
            </div>
          </div>
        </section>

        {/* ── Başvuru Merkezleri ───────────────────────────────────────── */}
        <section aria-labelledby="basvuru-merkezleri">
          <SectionTag>Başvuru Merkezleri</SectionTag>
          <h2
            id="basvuru-merkezleri"
            className="font-serif text-[28px] lg:text-[32px] text-[#1B2B4A] tracking-tight leading-snug mb-6"
          >
            İtalya konsolosluğu ve büyükelçilik bilgileri
          </h2>
          <div className="space-y-4">
            {[
              {
                ad: "İtalya Büyükelçiliği — Ankara",
                adres: "Atatürk Bulvarı No:11/B 06680 Kavaklıdere / ANKARA",
                tel: "+90 (312) 457 42 00",
                yetki:
                  "Ankara, Bolu, Çankırı, Eskişehir, Kırşehir, Kırıkkale, Kütahya, Nevşehir",
              },
              {
                ad: "İtalya Başkonsolosluğu — İstanbul",
                adres:
                  "Boğazkesen Cad. Tom Tom Kaptan Sok. No:5 34433 Tophane Beyoğlu / İSTANBUL",
                tel: "+90 (212) 243 10 24",
                yetki:
                  "Amasya, Ardahan, Artvin, Bayburt, Bartın, Bilecik, Bursa, Çanakkale, Çorum, Düzce, Edirne, Erzurum, Erzincan, Giresun, Gümüşhane, Iğdır, Kars, Karabük, Kastamonu, Kırklareli, Kocaeli, Ordu, Rize, Sakarya, Samsun, Sinop, Sivas, Tekirdağ, Tokat, Trabzon, Yalova, Yozgat, Zonguldak",
              },
              {
                ad: "İtalya Konsolosluğu — İzmir",
                adres: "Akdeniz Mah. Şehit Fethi Bey Cad. No:55 Konak / İZMİR",
                tel: "+90 (232) 463 66 76",
                yetki:
                  "İzmir, Adıyaman, Adana, Ağrı, Afyon, Antalya, Aksaray, Batman, Aydın, Bitlis, Bingöl, Burdur, Diyarbakır, Denizli, Gaziantep, Elazığ, Hatay, Hakkari, Kahramanmaraş, Isparta, Kayseri, Karaman, Konya, Kilis, Manisa, Malatya, Mersin, Mardin, Muş, Muğla, Osmaniye, Niğde, Şanlıurfa, Siirt, Van, Şırnak, Uşak, Tunceli",
              },
            ].map((k) => (
              <div
                key={k.ad}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white"
              >
                <div className="bg-[#F8F9FC] px-6 py-4 border-b border-slate-200">
                  <h3 className="text-[16px] font-medium text-[#1B2B4A]">
                    {k.ad}
                  </h3>
                </div>
                <div className="px-6 py-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <svg
                      width="15"
                      height="15"
                      fill="none"
                      stroke="#94A3B8"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-[13px] font-light text-slate-500 leading-relaxed">
                      {k.adres}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      width="15"
                      height="15"
                      fill="none"
                      stroke="#94A3B8"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="flex-shrink-0"
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-[13px] font-light text-slate-500">
                      {k.tel}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      width="15"
                      height="15"
                      fill="none"
                      stroke="#94A3B8"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6-10l6 3m0 7l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 10m0 7V10" />
                    </svg>
                    <p className="text-[13px] font-light text-slate-500 leading-relaxed">
                      <span className="font-medium text-[#1B2B4A]">
                        Yetki alanı:{" "}
                      </span>
                      {k.yetki}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <InfoBox type="info">
              Ankara, İstanbul ve İzmir konsolosluklarına ek olarak Bursa,
              Gaziantep, Trabzon ve Antalya&apos;daki fahri konsolosluklara da
              başvuru evrakı teslim edilebilir. Ancak bu merkezlere verilen
              belgeler değerlendirilmek üzere bağlı bulundukları konsolosluğa
              yönlendirilir; bu durum süreci uzatabilir.
            </InfoBox>
          </div>
        </section>

        {/* ── Randevu ve Süreç ─────────────────────────────────────────── */}
        <section aria-labelledby="randevu-surec">
          <SectionTag>Başvuru Süreci</SectionTag>
          <h2
            id="randevu-surec"
            className="font-serif text-[28px] lg:text-[32px] text-[#1B2B4A] tracking-tight leading-snug mb-6"
          >
            Randevu ve vize süreci nasıl işler?
          </h2>

          <ol className="space-y-4">
            {[
              {
                no: "01",
                baslik: "Seyahat süresini belirleyin",
                aciklama:
                  "90 günü aşmayan seyahatler için kısa süreli Schengen vizesi, 90 günden uzun planlar için uzun süreli D vizesi gereklidir.",
              },
              {
                no: "02",
                baslik: "Belgeleri hazırlayın",
                aciklama:
                  "Yukarıdaki listeye göre tüm evrakları eksiksiz ve güncel tarihli olarak hazırlayın. Eksik belge başvuruyu geciktirir veya reddedilmesine neden olabilir.",
              },
              {
                no: "03",
                baslik: "Randevu alın",
                aciklama:
                  "Kısa süreli vize başvuruları, yetkili vize danışma merkezleri aracılığıyla yapılır. Uzun süreli vize başvuruları şahsen konsoloslukta gerçekleştirilir. Randevuyu seyahat tarihinizden en az 15 gün önce alın.",
              },
              {
                no: "04",
                baslik: "Başvuruyu şahsen tamamlayın",
                aciklama:
                  "Başvuru fiziki olarak yapılmak zorundadır. Konsoloslukta evraklarınızı teslim edin ve ilk kez başvuruyorsanız parmak izi taramasını yaptırın.",
              },
              {
                no: "05",
                baslik: "Sonucu takip edin",
                aciklama:
                  "Başvurunuz resmi tatiller hariç ortalama 15 iş günü içerisinde sonuçlanır. Belgelerinizde sorun yoksa bu süre 5 iş gününe kadar kısalabilir. Resmi yetkilendirme ile iDATA üzerinden başvuru durumunuzu sorgulayabilirsiniz.",
              },
            ].map((adim) => (
              <li
                key={adim.no}
                className="flex gap-5 bg-[#F8F9FC] border border-slate-200 rounded-xl p-5"
              >
                <span className="font-serif text-[28px] leading-none text-[#4A7BC8] tracking-tight flex-shrink-0 mt-0.5">
                  {adim.no}
                </span>
                <div>
                  <p className="text-[15px] font-medium text-[#1B2B4A] mb-1">
                    {adim.baslik}
                  </p>
                  <p className="text-[13px] font-light text-slate-500 leading-relaxed">
                    {adim.aciklama}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── SSS ──────────────────────────────────────────────────────── */}
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
                soru: "İtalya vizesi kaç günde çıkar?",
                cevap:
                  "Belgelerinizde herhangi bir sorun yoksa başvurunuz en geç 5 iş günü içerisinde sonuçlandırılır. Genel ortalama ise resmi tatiller hariç 15 iş günüdür.",
              },
              {
                soru: "İtalya vizesi için parmak izi zorunlu mu?",
                cevap:
                  "Schengen vizesine ilk kez başvuranların parmak izi taraması yaptırması zorunludur. Alınan örnek sonraki başvurular için 5 yıl boyunca sistemde saklanır.",
              },
              {
                soru: "Randevu ne zaman alınmalı?",
                cevap:
                  "Seyahat tarihinizden en az 15 gün önce randevu almanız önerilir. Resmi tatiller ve yoğun dönemlerde bu süre daha da uzayabilir; bu nedenle mümkün olan en erken tarihi tercih edin.",
              },
              {
                soru: "Belgeler posta ile gönderilebilir mi?",
                cevap:
                  "Hayır. Tüm belgeler elden ve şahsen teslim edilmek zorundadır. E-posta, mektup veya faks gibi uzaktan teslim yöntemleri kabul edilmemektedir.",
              },
              {
                soru: "Yeşil pasaportlular için İtalya vizesi gerekiyor mu?",
                cevap:
                  "Hususi (yeşil), Diplomatik (siyah) ve Hizmet (gri) pasaport sahipleri 90 günü aşmayacak şekilde vizesiz seyahat edebilir.",
              },
              {
                soru: "Kısa süreli vize başvurusu nerede yapılır?",
                cevap:
                  "Kısa süreli (C tipi) vize başvuruları İtalya Konsolosluğu'nun yetkilendirdiği vize danışma merkezleri veya turizm acenteleri aracılığıyla yapılmaktadır.",
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

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="bg-[#1B2B4A] rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="font-serif text-[28px] lg:text-[34px] text-white tracking-tight leading-snug mb-3">
            Avrupa&apos;da çalışmayı mı planlıyorsunuz?
          </h2>
          <p className="text-[15px] font-light text-white/60 leading-relaxed mb-8 max-w-[480px] mx-auto">
            Almanya ve Avusturya çalışma vizelerine başvuru şansınızı puan
            hesaplama araçlarımızla dakikalar içinde öğrenin.
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
