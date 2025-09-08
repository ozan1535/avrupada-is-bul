import { text } from "stream/consumers";

export const euCountries = [
  { id: 0, name: "Almanya", filterName: "DE" },
  { id: 1, name: "Avusturya", filterName: "AT" },
  { id: 2, name: "Belçika", filterName: "BE" },
  { id: 3, name: "Bulgaristan", filterName: "BG" },
  { id: 4, name: "Çekya", filterName: "CZ" },
  { id: 5, name: "Danimarka", filterName: "DK" },
  { id: 6, name: "Estonya", filterName: "EE" },
  { id: 7, name: "Finlandiya", filterName: "FI" },
  { id: 8, name: "Fransa", filterName: "FR" },
  { id: 9, name: "Hırvatistan", filterName: "HR" },
  { id: 10, name: "Hollanda", filterName: "NL" },
  { id: 11, name: "İrlanda", filterName: "IE" },
  { id: 12, name: "İspanya", filterName: "ES" },
  { id: 13, name: "İsveç", filterName: "SE" },
  { id: 28, name: "İsviçre", filterName: "CH" },
  { id: 14, name: "İzlanda", filterName: "IS" },
  { id: 15, name: "İtalya", filterName: "IT" },
  { id: 16, name: "Kıbrıs", filterName: "CY" },
  { id: 17, name: "Letonya", filterName: "LV" },
  { id: 18, name: "Lihtenştayn", filterName: "LI" },
  { id: 19, name: "Litvanya", filterName: "LT" },
  { id: 20, name: "Lüksemburg", filterName: "LU" },
  { id: 21, name: "Macaristan", filterName: "HU" },
  { id: 22, name: "Malta", filterName: "MT" },
  { id: 30, name: "Norveç", filterName: "NO" },
  { id: 23, name: "Polonya", filterName: "PL" },
  { id: 24, name: "Portekiz", filterName: "PT" },
  { id: 25, name: "Romanya", filterName: "RO" },
  { id: 26, name: "Slovakya", filterName: "SK" },
  { id: 27, name: "Slovenya", filterName: "SI" },
  { id: 29, name: "Yunanistan", filterName: "ES" },
];

export const workingSchedules = [
  {
    id: 1,
    name: "Tam Zamanlı",
    filterName: "fulltime",
  },
  {
    id: 2,
    name: "Yarı Zamanlı",
    filterName: "parttime",
  },
  {
    id: 3,
    name: "Esnek",
    filterName: "flextime",
  },
];

export const euLanguages = [
  { id: 10, name: "Almanca", filterName: "de" },
  { id: 1, name: "Bulgarca", filterName: "bg" },
  { id: 3, name: "Çekçe", filterName: "cs" },
  { id: 4, name: "Danca", filterName: "da" },
  { id: 7, name: "Estonca", filterName: "et" },
  { id: 8, name: "Fince", filterName: "fi" },
  { id: 5, name: "Flemenkçe", filterName: "nl" },
  { id: 9, name: "Fransızca", filterName: "fr" },
  { id: 2, name: "Hırvatça", filterName: "hr" },
  { id: 6, name: "İngilizce", filterName: "en" },
  { id: 15, name: "İtalyanca", filterName: "it" },
  { id: 14, name: "İrlandaca", filterName: "ga" },
  { id: 18, name: "İspanyolca", filterName: "es" },
  { id: 17, name: "İsveççe", filterName: "sv" },
  { id: 13, name: "İzlandaca", filterName: "is" },
  { id: 23, name: "Lehçe", filterName: "pl" },
  { id: 16, name: "Letonca", filterName: "lv" },
  { id: 24, name: "Litvanca", filterName: "lt" },
  { id: 12, name: "Macarca", filterName: "hu" },
  { id: 25, name: "Malta Dili", filterName: "mt" },
  { id: 26, name: "Norveççe", filterName: "no" },
  { id: 22, name: "Portekizce", filterName: "pt" },
  { id: 21, name: "Rumence", filterName: "ro" },
  { id: 19, name: "Slovence", filterName: "sl" },
  { id: 20, name: "Slovakça", filterName: "sk" },
  { id: 11, name: "Yunanca", filterName: "el" },
];

export const jobPortalSectors = [
  { id: 1, name: "Konaklama ve Yiyecek Hizmetleri", filterName: "i" },
  { id: 2, name: "Uluslararası Kuruluşlar", filterName: "u" },
  { id: 3, name: "Hanehalkı Faaliyetleri", filterName: "t" },
  { id: 4, name: "İdari ve Destek Hizmetleri", filterName: "n" },
  { id: 5, name: "Tarım ve Ormancılık", filterName: "a" },
  { id: 6, name: "Sanat ve Eğlence", filterName: "r" },
  { id: 7, name: "İnşaat", filterName: "f" },
  { id: 8, name: "Eğitim", filterName: "p" },
  { id: 9, name: "Enerji Üretimi ve Dağıtımı", filterName: "d" },
  { id: 10, name: "Finans ve Sigorta", filterName: "k" },
  { id: 11, name: "Sağlık ve Sosyal Hizmetler", filterName: "q" },
  { id: 12, name: "Bilgi ve İletişim", filterName: "j" },
  { id: 13, name: "İmalat", filterName: "c" },
  { id: 14, name: "Madencilik", filterName: "b" },
  { id: 15, name: "Diğer Hizmetler", filterName: "s" },
  { id: 16, name: "Bilimsel ve Teknik Faaliyetler", filterName: "m" },
  { id: 17, name: "Kamu Yönetimi ve Savunma", filterName: "o" },
  { id: 18, name: "Gayrimenkul", filterName: "l" },
  { id: 19, name: "Ulaşım ve Depolama", filterName: "h" },
  { id: 20, name: "Su ve Atık Yönetimi", filterName: "e" },
  { id: 21, name: "Ticaret ve Onarım", filterName: "g" },
];

export const sortJobItemsBy = [
  {
    id: 1,
    name: "En İlgili",
    filterName: "BEST_MATCH",
  },
  {
    id: 2,
    name: "En Yakın",
    filterName: "MOST_RECENT",
  },
];

export const sidebarItems = (
  countries,
  workSchedules,
  languages,
  jobSectors
) => [
  {
    label: "Ülke",
    data: euCountries,
    selectedData: countries,
    title: "Ülke Seç",
    key: "countries",
  },
  {
    label: "Çalışma Şekli",
    data: workingSchedules,
    selectedData: workSchedules,
    title: "Çalışma Şekli",
    key: "workSchedules",
  },
  {
    label: "Dil Becerileri",
    data: euLanguages,
    selectedData: languages,
    title: "Dil Seç",
    key: "languages",
  },
  {
    label: "Sektör",
    data: jobPortalSectors,
    selectedData: jobSectors,
    title: "Sektör Seç",
    key: "jobSectors",
  },
];

export const rwrCardVisaTypes = [
  {
    id: 0,
    text: "Eleman açığı olan mesleklerde çalışan nitelikli işçiler için (For skilled workers in shortage occupations)",
  },
  {
    id: 1,
    text: "Diğer kilit sektör çalışanları için (For other key workers)",
  },
  {
    id: 2,
    text: "Yüksek derecede nitelikli çalışanlar için (For very highly qualified workers)",
  },
  {
    id: 3,
    text: "Start-up kurucuları için (For start-up founders)",
  },
];

export const rwrCardTabs = [
  {
    id: 0,
    text: "Nitelikler",
    value: "nitelikler",
  },
  {
    id: 1,
    text: "Deneyim",
    value: "deneyim",
  },
  {
    id: 2,
    text: "Diller",
    value: "diller",
  },
  {
    id: 3,
    text: "Yaş",
    value: "yas",
  },
  {
    id: 4,
    text: "Ek olarak",
    value: "ek",
  },
];

export const rwrCardCalculatorAdditionalItems = [
  {
    id: 66,
    text: "€50,000'dan düşük (0 puan)",
    point: 0,
    isRadio: true,
  },
  {
    id: 67,
    text: "€50,000 - €60,000 arası (20 puan)",
    point: 20,
    isRadio: true,
  },
  {
    id: 68,
    text: "€60,000 - €70,000 arası (25 puan)",
    point: 25,
    isRadio: true,
  },
  {
    id: 69,
    text: "€70,000 üzeri (30 puan)",
    point: 30,
    isRadio: true,
  },
];

export const rwrCardCalculatorItems = [
  {
    0: [
      {
        id: 0,
        text: "Eleman açığı olan bir meslek dalında tamamlanmış mesleki eğitim (30 puan)",
        point: 30,
      },
      {
        id: 1,
        text: "İlgili nitelik yok (0 puan)",
        point: 0,
      },
    ],
    1: [
      {
        id: 2,
        text: "3 yıllık yükseköğretim diploması (30 puan)",
        point: 30,
      },
      {
        id: 3,
        text: "Üniversiteye kabul için uygunluk (25 puan)",
        point: 25,
      },
      {
        id: 4,
        text: "Mesleki eğitim veya özel beceriler (20 puan)",
        point: 20,
      },
      {
        id: 5,
        text: "Tamamlanmış eğitim yok (0 puan)",
        point: 0,
      },
    ],
    2: [
      {
        id: 6,
        text: "Doktora/Habilitasyon (30 puan)",
        point: 30,
      },
      {
        id: 7,
        text: "4 yıllık yükseköğretim derecesi - STEM (30 puan)",
        point: 30,
      },
      {
        id: 8,
        text: "4 yıllık yükseköğretim derecesi (30 puan)",
        point: 30,
      },
      {
        id: 9,
        text: "Tamamlanmış eğitim yok (0 puan)",
        point: 0,
      },
    ],
    3: [
      {
        id: 10,
        text: "Avusturya diploması (30 puan)",
        point: 30,
      },
      {
        id: 11,
        text: "3 yıllık yükseköğretim (20 puan)",
        point: 20,
      },
      {
        id: 12,
        text: "Mesleki/özel beceriler (20 puan)",
        point: 20,
      },
      {
        id: 13,
        text: "Tamamlanmış eğitim yok (0 puan)",
        point: 0,
      },
    ],
  },
  {
    0: [
      {
        id: 14,
        text: "Genel çalışma tecrübesi (Her yıl için 2 puan)",
        point: 2,
      },
      {
        id: 15,
        text: "Avusturya'da çalışma tecrübesi (Her yıl için 4 puan)",
        point: 4,
      },
    ],
    1: [
      {
        id: 16,
        text: "Genel çalışma tecrübesi (Her yıl için 2 puan)",
        point: 2,
      },
      {
        id: 17,
        text: "Avusturya'da çalışma tecrübesi (Her yıl için 4 puan)",
        point: 4,
      },
    ],
    2: [
      {
        id: 18,
        text: "Genel çalışma tecrübesi (Her yıl için 2 puan)",
        point: 2,
      },
      {
        id: 19,
        text: "Avusturya'da çalışma tecrübesi (Her yıl için 20 puan)",
        point: 20,
      },
    ],
    3: [
      {
        id: 20,
        text: "Genel çalışma tecrübesi (Her yıl için 2 puan)",
        point: 2,
      },
    ],
  },
  {
    0: {
      german: [
        { id: 21, text: "Hiç bilmiyorum (0 puan)", point: 0 },
        { id: 22, text: "A1 seviye (5 puan)", point: 5 },
        { id: 23, text: "A2 seviye (10 puan)", point: 10 },
        { id: 24, text: "B1 seviye (15 puan)", point: 15 },
      ],
      english: [
        { id: 25, text: "Hiç bilmiyorum (0 puan)", point: 0 },
        { id: 26, text: "A2 seviye (5 puan)", point: 5 },
        { id: 27, text: "B1 seviye (10 puan)", point: 10 },
      ],
    },
    1: {
      german: [
        { id: 28, text: "Hiç bilmiyorum (0 puan)", point: 0 },
        { id: 29, text: "A1 seviye (5 puan)", point: 5 },
        { id: 30, text: "A2 seviye (10 puan)", point: 10 },
      ],
      english: [
        { id: 31, text: "Hiç bilmiyorum (0 puan)", point: 0 },
        { id: 32, text: "A2 seviye (5 puan)", point: 5 },
        { id: 33, text: "B1 seviye (10 puan)", point: 10 },
      ],
    },
    2: {
      german: [
        { id: 34, text: "Hiç bilmiyorum (0 puan)", point: 0 },
        { id: 35, text: "A1 seviye (5 puan)", point: 5 },
        { id: 36, text: "A2 seviye (10 puan)", point: 10 },
      ],
      english: [
        { id: 37, text: "Hiç bilmiyorum (0 puan)", point: 0 },
        { id: 38, text: "A2 seviye (5 puan)", point: 5 },
        { id: 39, text: "B1 seviye (10 puan)", point: 10 },
      ],
    },
    3: {
      german: [
        { id: 40, text: "Hiç bilmiyorum (0 puan)", point: 0 },
        { id: 41, text: "A2 seviye (5 puan)", point: 5 },
        { id: 42, text: "B1-B2 seviye (10 puan)", point: 10 },
        { id: 43, text: "C1-C2 seviye (15 puan)", point: 15 },
      ],
      english: [
        { id: 44, text: "Below B2 (0 puan)", point: 0 },
        { id: 45, text: "B2 level (10 puan)", point: 10 },
      ],
    },
  },
  {
    0: [
      {
        id: 46,
        text: "30 yaşa kadar (30 puan)",
        point: 30,
      },
      {
        id: 47,
        text: "31-40 yaş arası (10 puan)",
        point: 10,
      },
      {
        id: 48,
        text: "40 yaşından büyük (0 puan)",
        point: 0,
      },
    ],
    1: [
      {
        id: 49,
        text: "30 yaşa kadar (30 puan)",
        point: 30,
      },
      {
        id: 50,
        text: "31-40 yaş arası (10 puan)",
        point: 10,
      },
      {
        id: 51,
        text: "40 yaşından büyük (0 puan)",
        point: 0,
      },
    ],
    2: [
      {
        id: 52,
        text: "35 yaşa kadar (15 puan)",
        point: 15,
      },
      {
        id: 53,
        text: "36-40 yaş arası (10 puan)",
        point: 10,
      },
      {
        id: 54,
        text: "41-45 yaş arası (5 puan)",
        point: 5,
      },
      {
        id: 55,
        text: "45 yaşından büyük (0 puan)",
        point: 0,
      },
    ],
    3: [
      {
        id: 56,
        text: "35 yaşa kadar (10 puan)",
        point: 10,
      },
      {
        id: 57,
        text: "35 yaşından büyük (0 puan)",
        point: 0,
      },
    ],
  },
  {
    0: [
      {
        id: 58,
        text: "Şirketin resmi dili İngilizce (5 puan)",
        point: 5,
      },
    ],
    1: [
      {
        id: 59,
        text: "Şirketin resmi dili İngilizce (5 puan)",
        point: 5,
      },
      {
        id: 60,
        text: "Profeyonel atlet/koç (20 puan)",
        point: 20,
      },
    ],
    2: [
      {
        id: 61,
        text: "Araştırma ve Yenilik Faaliyetleri (Patentler, Yayınlar) (20 puan)",
        point: 20,
      },
      {
        id: 62,
        text: "Resmî olarak tanınan bilimsel veya profesyonel ödüller (20 puan)",
        point: 20,
      },
      {
        id: 63,
        text: "Avusturya’da Tamamlanmış Eğitim (Lisans ve Yüksek Lisans) (10 puan)",
        point: 10,
      },
    ],
    3: [
      {
        id: 64,
        text: "€50,000 yatırım (10 puan)",
        point: 10,
      },
      {
        id: 65,
        text: "Girişim destek programı veya hibe (10 puan)",
        point: 10,
      },
    ],
  },
];
