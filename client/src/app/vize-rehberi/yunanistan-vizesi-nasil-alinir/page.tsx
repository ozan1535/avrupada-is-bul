import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yunanistan Vizesi Nasıl Alınır - Yunanistan Vize Rehberi 2026",
  description:
    "Yunanistan vizesi için eksiksiz rehber: başvuru şartları, gerekli belgeler, vize türleri, ücretler ve başvuru merkezleri. Türk vatandaşları için güncel Schengen vizesi bilgileri.",
  keywords: [
    "Yunanistan vizesi",
    "Yunanistan vize başvurusu",
    "Schengen vizesi",
    "Yunanistan vize şartları",
    "Yunanistan vize belgeleri",
    "Yunanistan turistik vize",
    "Yunanistan vize ücreti",
    "Yunanistan vize başvuru merkezi",
    "Türkiye Yunanistan vize",
    "Yunanistan vize rehberi 2026",
  ],
  openGraph: {
    title: "Yunanistan Vize Rehberi 2026 | Eksiksiz Başvuru Kılavuzu",
    description:
      "Türk vatandaşları için Yunanistan vize başvurusu: türler, belgeler, ücretler ve başvuru merkezleri hakkında güncel bilgiler.",
    locale: "tr_TR",
    type: "article",
  },
  alternates: {
    canonical: "/vize-rehberi/yunanistan-vizesi-nasil-alinir",
  },
};

const vizetypes = [
  {
    id: "c-tipi",
    label: "C Tipi",
    title: "C Tipi (Kısa Süreli) Schengen Vizesi",
    icon: "✈️",
    description:
      "180 günlük zaman dilimi içinde farklı amaçlarla 90 güne kadar kısa süreli seyahatler yapmanızı sağlar. Umuma mahsus (bordo) pasaport sahiplerinin Yunanistan ziyareti için Schengen vizesi alması zorunludur. Hususi (yeşil), diplomatik (siyah) ve hizmet (gri) pasaport sahipleri 90 günü aşmamak kaydıyla vizeden muaftır.",
    duration: "90 güne kadar",
    tag: "En Yaygın",
  },
  {
    id: "turistik",
    label: "Turistik",
    title: "Yunanistan Turistik Vizesi",
    icon: "🏛️",
    description:
      "Schengen Bölgesi'nde yer alan Yunanistan'a turistik amaçla en çok 90 güne kadar yapılacak seyahatler için başvurulur. Turistik vizeyle Yunanistan'da başlayan seyahate farklı Schengen ülkelerinde de devam edilebilir.",
    duration: "90 güne kadar",
    tag: null,
  },
  {
    id: "ticari",
    label: "Ticari / İş",
    title: "Ticari ve İş / Fuar Ziyareti Vizesi",
    icon: "💼",
    description:
      "Ticari amaçla ya da iş veya fuar ziyareti için 90 günü aşmamak kaydıyla Yunanistan'a seyahat edecekler için gereklidir. Başvuruda her iki ülkenin resmi mercilerince tanınan bir ticari faaliyet belgesi mutlaka sunulmalıdır.",
    duration: "90 güne kadar",
    tag: null,
  },
  {
    id: "aile",
    label: "Aile / Arkadaş",
    title: "Aile, Akraba ve Arkadaş Ziyareti Vizesi",
    icon: "👨‍👩‍👧",
    description:
      "Tarihi ve kültürel bağlar nedeniyle Türkiye-Yunanistan arasında yoğun sosyal ilişkiler mevcuttur. Aile, akraba veya arkadaş ziyareti amacıyla yapılacak seyahatlerde bu vize türüne başvurulur. İçinde iş ve kimlik bilgilerinin yer aldığı yazılı bir davetiye zorunlu belgeler arasındadır.",
    duration: "90 güne kadar",
    tag: null,
  },
  {
    id: "kulturel",
    label: "Kültür / Spor",
    title: "Kültürel, Sportif Faaliyet ve Konferans Vizesi",
    icon: "🎭",
    description:
      "Yunanistan'da gerçekleşecek kültürel ya da sportif etkinliklere ya da konferanslara katılım için bu vize türü geçerlidir. Adınıza gönderilen bir etkinlik katılım belgesi veya davetiye zorunludur.",
    duration: "90 güne kadar",
    tag: null,
  },
  {
    id: "ogrenim",
    label: "Öğrenim",
    title: "Kısa Süreli Öğrenim Vizesi",
    icon: "🎓",
    description:
      "Yunanistan'da 90 güne kadar sürecek kısa süreli eğitim programları için gerekli vize türüdür.",
    duration: "90 güne kadar",
    tag: null,
  },
  {
    id: "d-tipi",
    label: "D Tipi",
    title: "D Tipi (Uzun Süreli) Ulusal Vize",
    icon: "🏠",
    description:
      "90 günü aşan oturum vizesi olarak da bilinen D Tipi ulusal vize; eğitim, iş veya yaşama amaçlı uzun süreli Yunanistan seyahatleri için kullanılır. Farklı kategorilerde çeşitli alt türleri bulunmaktadır.",
    duration: "90 günden fazla",
    tag: "Uzun Süreli",
  },
];

const documentGroups = [
  {
    title: "Tüm Başvuru Sahiplerinden İstenenler",
    color: "#1B2B4A",
    items: [
      "Eksiksiz doldurulup imzalanmış Yunanistan vize başvuru formu",
      "Son 10 yılda alınmış, dönüş tarihinden itibaren en az 3 ay geçerli ve en az 2 boş sayfası olan pasaport",
      "Varsa eski pasaport",
      "Son 3 ay içinde çekilmiş, 3,5×4,5 cm boyutunda, beyaz fon üzerinde 2 adet biyometrik fotoğraf",
      "Seyahat sağlık sigortası",
      "Uçak bileti ve otel ön rezervasyonunu kapsayan konaklama bilgileri",
      "Son 3 aya ait, minimum 5.000 TL bakiyeli, ıslak imza ve banka imza sirküleri ile sunulan banka hesap dökümü",
      "Tam vukuatlı nüfus kayıt örneği",
      "Kimlik kartının ön-arka fotokopisi",
      "Ek gelir belgeleri",
    ],
  },
  {
    title: "Çalışan / Şirket Personeli",
    color: "#2E4A7A",
    items: [
      "Son 3 aya ait ıslak imzalı ve kaşeli maaş bordroları",
      "SGK işe giriş bildirgesi ve SGK 4A detaylı hizmet dökümü",
      "Şirket yetkilisi tarafından konsolosluğa hitaben hazırlanmış, çalışıldığını ve izin tarihlerini gösteren şirket yazısı",
    ],
  },
  {
    title: "Şirket Sahibi / Esnaf",
    color: "#3A5A8A",
    items: [
      "Noter onaylı iş sözleşmesi (serbest meslek mensupları için)",
      "Orijinal faaliyet belgesi, ticaret sicil gazetesi, vergi levhası ve imza sirküleri fotokopileri",
      "SGK/BAĞ-KUR 4B detaylı hizmet dökümü",
    ],
  },
  {
    title: "Devlet Memuru",
    color: "#4A6A9A",
    items: [
      "Bağlı bulunduğu kurumdan çalışma belgesi",
      "Görev kimlik kartı fotokopisi",
      "Kurumdan alınan resmi izin yazısı",
    ],
  },
  {
    title: "Öğrenci / Mezun",
    color: "#2A527A",
    items: [
      "Öğrenci belgesi",
      "Diploma fotokopisi (mezun durumundaki başvuru sahipleri için)",
      "Sponsor dilekçesi (yeterli banka bakiyesi yoksa)",
    ],
  },
  {
    title: "Diğer Durumlar",
    color: "#1E3D6A",
    items: [
      "Ziraat Odası'ndan çiftçilik belgesi (çiftçiler için)",
      "Emekli maaşını gösteren belge (emekliler için)",
      "Orijinal muvafakatname belgesi (18 yaş altı başvuru sahipleri için)",
      "Sponsor dilekçesi (işsizler ve yeterli geliri olmayanlar için)",
      "Varsa davet mektubu",
    ],
  },
];

const consulates = [
  {
    city: "Ankara",
    name: "Yunanistan Büyükelçiliği",
    address:
      "Gazi Osman Paşa Mah. Zia Ür Rahman Cad. No: 9-11, 06700 Çankaya/Ankara",
    phone: "0312 448 06 47",
    coverage:
      "Adana, Adıyaman, Ağrı, Aksaray, Amasya, Ankara, Ardahan, Batman, Bilecik, Bingöl, Bitlis, Çankırı, Çorum, Diyarbakır, Elazığ, Erzincan, Erzurum, Eskişehir, Gaziantep, Hakkari, Hatay, Iğdır, Kahramanmaraş, Karaman, Kars, Kayseri, Kilis, Kırıkkale, Kırşehir, Konya, Malatya, Mardin, Mersin, Muş, Nevşehir, Niğde, Osmaniye, Siirt, Sivas, Şırnak, Şanlıurfa, Tokat, Tunceli, Van, Yozgat",
    highlight: false,
  },
  {
    city: "İstanbul",
    name: "Yunanistan Başkonsolosluğu",
    address: "Turnacıbaşı Sok. No:22, 34433 Beyoğlu/İstanbul",
    phone: "(0212) 393 82 90-91",
    coverage:
      "Artvin, Bartın, Bayburt, Bolu, Bursa, Çanakkale, Düzce, Giresun, Gümüşhane, İstanbul, Karabük, Kastamonu, Kocaeli, Ordu, Rize, Sakarya, Samsun, Sinop, Trabzon, Yalova, Zonguldak",
    highlight: false,
  },
  {
    city: "İzmir",
    name: "Yunanistan Başkonsolosluğu",
    address: "Atatürk Caddesi No:262 Alsancak, 35220 İzmir",
    phone: "0232 464 31 60-61",
    coverage:
      "Afyon, Antalya, Aydın, Burdur, Balıkesir, Denizli, Isparta, İzmir, Kütahya, Manisa, Muğla, Uşak",
    highlight: true,
  },
  {
    city: "Edirne",
    name: "Yunanistan Konsolosluğu",
    address: "Şükrüpaşa Mah. 123 Sok. No:2, Edirne",
    phone: "0284 235 58 04",
    coverage: "Edirne, Kırklareli, Tekirdağ",
    highlight: false,
  },
];

export default function YunanistanVizeRehberi() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');

        .vize-page {
          font-family: 'DM Sans', sans-serif;
          background: #F8F9FC;
          color: #1B2B4A;
          min-height: 100vh;
        }

        .vize-page * {
          box-sizing: border-box;
        }

        /* ── Hero ── */
       .hero {
  background: linear-gradient(135deg, #1B2B4A 0%, #2E4A7A 60%, #4A7BC8 100%);
  padding: 72px 24px 80px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  background-repeat: repeat;
  background-size: 60px 60px;
  pointer-events: none;
}

.hero-inner {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  gap: 48px;
}

.hero-content {
  flex: 1;
  min-width: 0;
}

.hero-image-wrapper {
  flex: 0 0 380px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
}

.hero-image {
  width: 100%;
  height: 340px;
  object-fit: cover;
  display: block;
}

.hero-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(27, 43, 74, 0.35) 0%,
    transparent 60%
  );
  pointer-events: none;
}

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(74, 123, 200, 0.25);
  border: 1px solid rgba(74, 123, 200, 0.4);
  border-radius: 100px;
  padding: 6px 16px;
  font-size: 13px;
  font-weight: 500;
  color: #a8c4e8;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.hero-title {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  color: #ffffff;
  line-height: 1.15;
  margin: 0 0 20px;
  max-width: 720px;
}

.hero-title em {
  font-style: italic;
  color: #7eb8f7;
}

.hero-desc {
  font-size: 17px;
  color: rgba(255,255,255,0.72);
  line-height: 1.65;
  max-width: 600px;
  margin: 0 0 36px;
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.hero-meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: rgba(255,255,255,0.6);
}

.hero-meta-item strong {
  color: rgba(255,255,255,0.9);
  font-weight: 500;
}

/* Responsive: stack on mobile */
@media (max-width: 768px) {
  .hero-inner {
    flex-direction: column;
  }

  .hero-image-wrapper {
    flex: none;
    width: 100%;
  }

  .hero-image {
    height: 220px;
  }
}

        /* ── Layout ── */
        .page-content {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px 80px;
        }

        /* ── Notice Banner ── */
        .notice-banner {
          background: #FFF8E7;
          border-left: 4px solid #F0A500;
          border-radius: 0 8px 8px 0;
          padding: 16px 20px;
          margin: 40px 0 48px;
          font-size: 14px;
          line-height: 1.6;
          color: #7A5200;
        }

        .notice-banner strong {
          color: #5A3800;
        }

        /* ── Section ── */
        .section {
          margin-bottom: 64px;
        }

        .section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #4A7BC8;
          margin-bottom: 10px;
        }

        .section-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          color: #1B2B4A;
          margin: 0 0 12px;
          line-height: 1.2;
        }

        .section-lead {
          font-size: 16px;
          color: #4A5568;
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 700px;
        }

        /* ── Divider ── */
        .divider {
          height: 1px;
          background: linear-gradient(to right, #D0D9EC, transparent);
          margin: 64px 0;
        }

        /* ── Vize Type Cards ── */
        .vize-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }

        .vize-card {
          background: #ffffff;
          border: 1px solid #E2E8F4;
          border-radius: 12px;
          padding: 24px;
          transition: box-shadow 0.2s, transform 0.2s;
          position: relative;
        }

        .vize-card:hover {
          box-shadow: 0 8px 32px rgba(27,43,74,0.1);
          transform: translateY(-2px);
        }

        .vize-card-tag {
          position: absolute;
          top: 16px;
          right: 16px;
          background: #EBF2FF;
          color: #4A7BC8;
          font-size: 11px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 100px;
          letter-spacing: 0.04em;
        }

        .vize-card-icon {
          font-size: 28px;
          margin-bottom: 12px;
          line-height: 1;
        }

        .vize-card h3 {
          font-family: 'DM Serif Display', serif;
          font-size: 1.15rem;
          color: #1B2B4A;
          margin: 0 0 10px;
          line-height: 1.25;
        }

        .vize-card p {
          font-size: 14px;
          color: #5A6A82;
          line-height: 1.65;
          margin: 0 0 16px;
        }

        .vize-card-duration {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: #1B2B4A;
          background: #F0F4FA;
          padding: 5px 12px;
          border-radius: 100px;
        }

        /* ── Requirements Steps ── */
        .req-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .req-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background: #ffffff;
          border: 1px solid #E2E8F4;
          border-radius: 10px;
          padding: 18px 20px;
        }

        .req-num {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          background: #1B2B4A;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 600;
          margin-top: 2px;
        }

        .req-text {
          font-size: 15px;
          line-height: 1.65;
          color: #2D3A50;
        }

        .req-text strong {
          color: #1B2B4A;
        }

        /* ── Documents ── */
        .doc-groups {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .doc-group {
          background: #ffffff;
          border: 1px solid #E2E8F4;
          border-radius: 12px;
          overflow: hidden;
        }

        .doc-group-header {
          padding: 16px 24px;
          font-family: 'DM Serif Display', serif;
          font-size: 1rem;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .doc-group-body {
          padding: 20px 24px;
        }

        .doc-group-body ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .doc-group-body li {
          display: flex;
          gap: 12px;
          font-size: 14.5px;
          color: #3A4A60;
          line-height: 1.55;
        }

        .doc-group-body li::before {
          content: '→';
          color: #4A7BC8;
          flex-shrink: 0;
          font-weight: 600;
          margin-top: 1px;
        }

        /* ── Sponsor ── */
        .sponsor-box {
          background: linear-gradient(135deg, #EBF2FF 0%, #F0F4FA 100%);
          border: 1px solid #C8D8F0;
          border-radius: 12px;
          padding: 28px 32px;
          margin-top: 32px;
        }

        .sponsor-box h3 {
          font-family: 'DM Serif Display', serif;
          font-size: 1.2rem;
          color: #1B2B4A;
          margin: 0 0 12px;
        }

        .sponsor-box p {
          font-size: 15px;
          line-height: 1.65;
          color: #4A5568;
          margin: 0;
        }

        /* ── Fee Cards ── */
        .fee-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .fee-card {
          background: #1B2B4A;
          border-radius: 16px;
          padding: 32px 28px;
          color: #fff;
          text-align: center;
        }

        .fee-card-label {
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          font-weight: 500;
          margin-bottom: 12px;
          letter-spacing: 0.04em;
        }

        .fee-card-price {
          font-family: 'DM Serif Display', serif;
          font-size: 3rem;
          line-height: 1;
          color: #7eb8f7;
          margin-bottom: 6px;
        }

        .fee-card-note {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
        }

        .fee-extras {
          background: #ffffff;
          border: 1px solid #E2E8F4;
          border-radius: 12px;
          padding: 20px 24px;
          margin-top: 20px;
          font-size: 14px;
          color: #4A5568;
          line-height: 1.7;
        }

        .fee-extras strong {
          color: #1B2B4A;
        }

        /* ── Consulates ── */
        .consulate-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .consulate-card {
          background: #ffffff;
          border: 1px solid #E2E8F4;
          border-radius: 12px;
          padding: 24px 28px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 20px 28px;
          align-items: start;
        }

        .consulate-card.highlighted {
          border-color: #4A7BC8;
          box-shadow: 0 0 0 3px rgba(74,123,200,0.12);
        }

        .consulate-city {
          font-family: 'DM Serif Display', serif;
          font-size: 1.5rem;
          color: #1B2B4A;
          min-width: 90px;
        }

        .consulate-city span {
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #4A7BC8;
          margin-bottom: 4px;
        }

        .consulate-info h4 {
          font-size: 15px;
          font-weight: 600;
          color: #1B2B4A;
          margin: 0 0 8px;
        }

        .consulate-detail {
          font-size: 14px;
          color: #5A6A82;
          line-height: 1.6;
          margin-bottom: 4px;
        }

        .consulate-coverage {
          font-size: 12.5px;
          color: #7A8EA8;
          line-height: 1.55;
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px solid #EEF1F8;
        }

        .consulate-coverage strong {
          color: #4A5568;
          font-weight: 600;
        }

        /* ── Timeline ── */
        .timeline {
          position: relative;
          padding-left: 32px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 12px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: linear-gradient(to bottom, #4A7BC8, #D0D9EC);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 28px;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -24px;
          top: 6px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #4A7BC8;
          border: 2px solid #F8F9FC;
          box-shadow: 0 0 0 2px #4A7BC8;
        }

        .timeline-item h4 {
          font-weight: 600;
          font-size: 15px;
          color: #1B2B4A;
          margin: 0 0 6px;
        }

        .timeline-item p {
          font-size: 14.5px;
          color: #5A6A82;
          line-height: 1.65;
          margin: 0;
        }

        /* ── Duration Highlight ── */
        .duration-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .duration-card {
          background: #ffffff;
          border: 1px solid #E2E8F4;
          border-radius: 10px;
          padding: 20px 22px;
        }

        .duration-card h4 {
          font-size: 14px;
          font-weight: 600;
          color: #4A7BC8;
          margin: 0 0 8px;
        }

        .duration-card p {
          font-size: 14px;
          color: #5A6A82;
          line-height: 1.6;
          margin: 0;
        }

        /* ── CTA ── */
        .cta-section {
          background: linear-gradient(135deg, #1B2B4A 0%, #2E4A7A 100%);
          border-radius: 20px;
          padding: 48px 40px;
          text-align: center;
          margin-top: 64px;
        }

        .cta-section h2 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.6rem, 3vw, 2rem);
          color: #ffffff;
          margin: 0 0 14px;
        }

        .cta-section p {
          font-size: 16px;
          color: rgba(255,255,255,0.65);
          margin: 0 0 28px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.65;
        }

        .cta-btn {
          display: inline-block;
          background: #4A7BC8;
          color: #fff;
          font-weight: 600;
          font-size: 15px;
          padding: 14px 32px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.2s;
        }

        .cta-btn:hover {
          background: #3A6AB8;
        }

        /* ── Responsive ── */
        @media (max-width: 600px) {
          .hero { padding: 48px 20px 56px; }
          .page-content { padding: 0 16px 60px; }
          .consulate-card { grid-template-columns: 1fr; }
          .cta-section { padding: 36px 24px; }
          .fee-card-price { font-size: 2.4rem; }
        }
      `}</style>

      <div className="vize-page">
        {/* ── Hero ── */}
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-eyebrow">Yunanistan Vize Rehberi</div>
              <h1 className="hero-title">
                Yunanistan Vizesi:
                <br />
                <em>Eksiksiz Başvuru Rehberi</em>
              </h1>
              <p className="hero-desc">
                Türk vatandaşları için Yunanistan Schengen vizesi başvurusu;
                türler, belgeler, ücretler ve başvuru merkezleri hakkında güncel
                bilgiler.
              </p>
              <div className="hero-meta">
                <div className="hero-meta-item">
                  ⏱ <strong>Okuma süresi:</strong> ~6 dakika
                </div>
                <div className="hero-meta-item">
                  ✅ <strong>Kaynak:</strong> Resmi konsolosluk bilgileri
                </div>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=700&q=80&auto=format&fit=crop"
                alt="Yunanistan Santorini manzarası"
                className="hero-image"
              />
              <div className="hero-image-overlay" />
            </div>
          </div>
        </section>

        {/* ── Content ── */}
        <div className="page-content">
          <div className="notice-banner">
            <strong>⚠️ Önemli Not:</strong> Bu içerik Ağustos 2026 tarihi
            itibarıyla hazırlanmıştır. T.C. vatandaşlarına yönelik bilgilerin
            güncelliğini resmi kaynaklardan teyit etmeyi unutmayınız. Başvuru
            aşamasında resmi kurallar geçerlidir; vize kontrolü yapılmalıdır.
          </div>

          {/* Vize Türleri */}
          <section className="section">
            <p className="section-label">Vize Türleri</p>
            <h2 className="section-title">
              Hangi Vize Türüne Başvurmalısınız?
            </h2>
            <p className="section-lead">
              Yunanistan ziyaretinizin amacına ve süresine göre farklı vize
              kategorileri mevcuttur. Aşağıdaki tabloda ziyaret amacınıza uygun
              vize türünü bulabilirsiniz.
            </p>
            <div className="vize-grid">
              {vizetypes.map((v) => (
                <div key={v.id} className="vize-card">
                  {v.tag && <span className="vize-card-tag">{v.tag}</span>}
                  {/*  <div className="vize-card-icon">{v.icon}</div> */}
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                  <span className="vize-card-duration">🕐 {v.duration}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="divider" />

          {/* Başvuru Şartları */}
          <section className="section">
            <p className="section-label">Başvuru Şartları</p>
            <h2 className="section-title">
              Vize Başvurusu İçin Temel Koşullar
            </h2>
            <p className="section-lead">
              Yunanistan vizesi almak için aşağıdaki koşulların tamamının
              eksiksiz karşılanması gerekmektedir.
            </p>
            <ul className="req-list">
              {[
                {
                  text: (
                    <>
                      <strong>Randevu alın:</strong> Başvuru için elçilik veya
                      konsolosluktan randevu almanız zorunludur. Randevuların
                      planlanan seyahat tarihinden en geç 1 ay önce, minimum ise
                      2 hafta önce alınmış olması gerekmektedir. Resmi tatil
                      dönemleri de hesaba katılmalıdır.
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Pasaport geçerliliği:</strong> Pasaportunuzun,
                      dönüş tarihinden itibaren en az 3 ay daha geçerli olması,
                      son 10 yıl içinde alınmış bulunması ve en az 2 boş sayfaya
                      sahip olması şarttır.
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Belge güncelliği:</strong> Konsolosluğa sunulan
                      tüm belgeler 3 aydan eski olmamalıdır.
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Parmak izi:</strong> Vize başvurusunda parmak izi
                      verilmesi zorunludur. Geçerlilik süresi 5 yıldır; ancak
                      başvurunun reddedilmesi halinde parmak izi geçerliliğini
                      yitirir ve yeni başvuruda tekrar verilmesi gerekir.
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Başvuru formu:</strong> Resmi nitelikteki
                      Yunanistan vize başvuru formu eksiksiz ve doğru
                      doldurulmalıdır. Hatalı, eksik ya da tutarsız bilgiler
                      başvurunun reddedilmesine yol açar.
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>KKTC damgası:</strong> Pasaportunda KKTC damgası
                      bulunan T.C. vatandaşlarının Yunanistan'a girişi mümkün
                      değildir.
                    </>
                  ),
                },
              ].map((item, i) => (
                <li key={i} className="req-item">
                  <div className="req-num">{i + 1}</div>
                  <div className="req-text">{item.text}</div>
                </li>
              ))}
            </ul>
          </section>

          <div className="divider" />

          {/* Gerekli Belgeler */}
          <section className="section">
            <p className="section-label">Gerekli Belgeler</p>
            <h2 className="section-title">
              Mesleğinize Göre Hazırlamanız Gereken Belgeler
            </h2>
            <p className="section-lead">
              Çalışma durumunuza ve başvuru amacınıza göre talep edilen belgeler
              farklılık göstermektedir. Aşağıda tüm gruplar için gerekli
              belgeler listelenmiştir.
            </p>
            <div className="doc-groups">
              {documentGroups.map((group, i) => (
                <div key={i} className="doc-group">
                  <div
                    className="doc-group-header"
                    style={{ background: group.color }}
                  >
                    <span>📋</span> {group.title}
                  </div>
                  <div className="doc-group-body">
                    <ul>
                      {group.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="sponsor-box">
              <h3>💡 Sponsor Dilekçesi Ne Zaman Gerekir?</h3>
              <p>
                İşsizler, öğrenciler ya da yeterli geliri bulunmayan kişiler
                sponsor desteğiyle Yunanistan vizesi için başvurabilirler. Banka
                hesaplarında yeterli bakiye bulunan işsizler ve öğrenciler,
                sponsor desteğine gerek kalmaksızın da başvuruda
                bulunabilmektedir.
              </p>
            </div>
          </section>

          <div className="divider" />

          {/* Vize Ücreti */}
          <section className="section">
            <p className="section-label">Vize Ücreti</p>
            <h2 className="section-title">Yunanistan Vize Harç Bedelleri</h2>
            <p className="section-lead">
              Vize harç bedeli; vize merkezine ödenen hizmet ücreti ile ek
              hizmet ücretlerini kapsamaktadır. Aşağıdaki ücretler Ağustos 2026
              itibarıyla geçerlidir.
            </p>
            <div className="fee-grid">
              <div className="fee-card">
                <div className="fee-card-label">YETİŞKİNLER</div>
                <div className="fee-card-price">90€</div>
                <div className="fee-card-note">18 yaş ve üzeri</div>
              </div>
              <div className="fee-card" style={{ background: "#2E4A7A" }}>
                <div className="fee-card-label">6–12 YAŞ ARASI</div>
                <div className="fee-card-price">45€</div>
                <div className="fee-card-note">6 yaş altı ücretsizdir</div>
              </div>
            </div>
            <div className="fee-extras">
              <strong>Ek ücretler ayrıca alınmaktadır:</strong> Başvuru formu
              ücreti, fotoğraf ücreti, fotokopi ve çıktı ücretleri vize harç
              bedeline dahil değildir; vize merkezince ayrıca tahsil edilir.
            </div>
          </section>

          <div className="divider" />

          {/* Başvuru Merkezleri */}
          <section className="section">
            <p className="section-label">Başvuru Merkezleri</p>
            <h2 className="section-title">
              İkamet Ettiğiniz İle Göre Başvuru Merkezi
            </h2>
            <p className="section-lead">
              Başvurular, ikamet adresinize göre belirlenen büyükelçilik veya
              konsolosluğa yapılmaktadır.
            </p>
            <div className="consulate-list">
              {consulates.map((c) => (
                <div
                  key={c.city}
                  className={`consulate-card${
                    c.highlight ? " highlighted" : ""
                  }`}
                >
                  <div className="consulate-city">
                    <span>Başvuru Merkezi</span>
                    {c.city}
                  </div>
                  <div className="consulate-info">
                    <h4>{c.name}</h4>
                    <p className="consulate-detail">📍 {c.address}</p>
                    <p className="consulate-detail">📞 {c.phone}</p>
                    <p className="consulate-coverage">
                      <strong>Yetki alanı:</strong> {c.coverage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="divider" />

          {/* Randevu ve Süreç */}
          <section className="section">
            <p className="section-label">Başvuru Süreci</p>
            <h2 className="section-title">Vize Başvurusu Nasıl Yapılır?</h2>
            <p className="section-lead">
              Yunanistan vizesi başvurusunda izlemeniz gereken adımları ve
              dikkat etmeniz gereken önemli noktaları aşağıda bulabilirsiniz.
            </p>

            <div className="timeline">
              {[
                {
                  title: "Vize türünü belirleyin",
                  desc: "Seyahatin amacına ve süresine göre C Tipi (kısa süreli) ya da D Tipi (uzun süreli) vize seçimini yapın.",
                },
                {
                  title: "Belgeleri toplayın",
                  desc: "Mesleğinize ve başvuru amacınıza uygun belgeleri eksiksiz ve güncel biçimde hazırlayın. Hiçbir belge 3 aydan eski olmamalıdır.",
                },
                {
                  title: "Randevu alın",
                  desc: "Kısa süreli vize başvuruları için vize danışmanlık merkezlerinden; uzun süreli başvurular için ise doğrudan konsolosluktan şahsen randevu alın. Randevuyu seyahat tarihinden en az 2 hafta, tercihen 1 ay önce ayarlayın.",
                },
                {
                  title: "Başvurunuzu yapın ve parmak izinizi verin",
                  desc: "İlk kez Schengen vizesi başvuracaklar bizzat giderek parmak izi vermek zorundadır. Tüm belgeler elden teslim edilmelidir.",
                },
                {
                  title: "Başvurunuzu takip edin",
                  desc: "Başvuru durumunuzu iDATA sitesi üzerinden takip edebilirsiniz.",
                },
              ].map((item, i) => (
                <div key={i} className="timeline-item">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="duration-cards">
              <div className="duration-card">
                <h4>⏱ Kısa Süreli Vize Süreci</h4>
                <p>
                  Başvurular genellikle <strong>7–15 iş günü</strong> içinde
                  sonuçlanır. Konsolosluk tarafından belirlenen azami süre 21 iş
                  günüdür.
                </p>
              </div>
              <div className="duration-card">
                <h4>📅 Uzun Süreli Vize Süreci</h4>
                <p>
                  D Tipi (ulusal) vize başvuruları sonuçlanma süresi
                  <strong> 2 aya kadar</strong> uzayabilmektedir.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          {/* <div className="cta-section">
            <h2>Yunanistan'a Seyahat Planlıyorsunuz?</h2>
            <p>
              Uçak biletinizi önceden alarak hem randevu sürecini kolaylaştırın
              hem de erken rezervasyon avantajlarından yararlanın.
            </p>
            <a href="/ucak-bileti/yunanistan" className="cta-btn">
              Yunanistan Uçak Bileti Ara →
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
}
