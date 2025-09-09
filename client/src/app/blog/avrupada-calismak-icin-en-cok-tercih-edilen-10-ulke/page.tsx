"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  DollarSign,
  Users,
  TrendingUp,
  Globe,
  Calendar,
} from "lucide-react";
import { Metadata } from "next";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Avrupa'da Çalışmak İçin En Çok Tercih Edilen 10 Ülke (2025 Rehberi)",
//   description:
//     "Avrupa'da çalışmak isteyenler için en popüler 10 ülkeyi maaş, yaşam kalitesi, iş piyasası ve kültür açısından inceledik. 2025 için güncel ve kapsamlı bir rehber!",
//   keywords: [
//     "Avrupa'da çalışmak",
//     "Yurtdışında iş",
//     "Avrupa iş fırsatları",
//     "Almanya'da çalışmak",
//     "İsveç iş imkanları",
//     "2025 iş rehberi",
//     "Hollanda vizesi",
//     "Avrupa yaşam maliyeti",
//     "En iyi Avrupa ülkeleri",
//     "Yurtdışında kariyer",
//   ],
//   // authors: [
//   //   {
//   //     name: "Senin Adın",
//   //     url: "https://seninsiten.com", // Opsiyonel
//   //   },
//   // ],
//   // openGraph: {
//   //   title: "Avrupa'da Çalışmak İçin En Çok Tercih Edilen 10 Ülke (2025)",
//   //   description:
//   //     "Yurtdışında çalışmak isteyenler için Avrupa'nın en cazip 10 ülkesi. Maaş, sektörler, yaşam tarzı ve vize süreçleriyle dolu detaylı rehber.",
//   //   url: "https://seninsiten.com/avrupada-calisilacak-ulkeler",
//   //   siteName: "Senin Blog İsmin",
//   //   type: "article",
//   //   locale: "tr_TR",
//   //   images: [
//   //     {
//   //       url: "https://seninsiten.com/images/avrupa-calisma-rehberi-2025.jpg", // Blog kapağı için bir görsel URL’si
//   //       width: 1200,
//   //       height: 630,
//   //       alt: "Avrupa’da Çalışmak İçin En Popüler Ülkeler",
//   //     },
//   //   ],
//   // },
//   // twitter: {
//   //   card: "summary_large_image",
//   //   title: "Avrupa'da Çalışmak İçin En Çok Tercih Edilen 10 Ülke (2025)",
//   //   description:
//   //     "2025 yılı için Avrupa'da çalışmak isteyenlere özel hazırlanan, en güncel ve kapsamlı ülke karşılaştırması.",
//   //   images: ["https://seninsiten.com/images/avrupa-calisma-rehberi-2025.jpg"],
//   //   creator: "@seninkullaniciadın", // Twitter kullanıcı adın
//   // },
//   //metadataBase: new URL("https://seninsiten.com"),
// };

export const metadata: Metadata = {
  title: "Uluslararası Kariyer - Avrupa'da Çalışmak için En İyi 10 Ülke",
  description:
    "Avrupa’da çalışmak isteyenler için en iyi 10 ülkeyi yaşam kalitesi, iş imkanları ve sosyal haklar açısından karşılaştırdık. Hangi ülke sizin için uygun?",
};

const page = () => {
  const [expandedCountries, setExpandedCountries] = useState({});
  const [activeTab, setActiveTab] = useState("overview");

  const toggleCountry = (countryId) => {
    setExpandedCountries((prev) => ({
      ...prev,
      [countryId]: !prev[countryId],
    }));
  };

  const countries = [
    {
      id: "germany",
      name: "Almanya",
      flag: "🇩🇪",
      tagline: "Avrupa'nın Ekonomik Kalbi",
      sectors: ["Mühendislik", "Otomotiv", "Sağlık", "IT"],
      salary: "2.500 - 4.000 €",
      unemployment: "3.1%",
      population: "83 milyon",
      description:
        "Almanya, 83 milyon nüfusu ve 4 trilyon dolarlık GSYİH'si ile Avrupa'nın en büyük ekonomisine sahip. \"Made in Germany\" kalite markası dünya çapında tanınıyor ve ülke, özellikle teknoloji ve mühendislik alanlarında küresel liderlik konumunda.",
      workCulture:
        "Alman iş kültürü disiplin, dakiklik ve verimlilik üzerine kurulu. Çalışma saatleri genelde 8:00-17:00 arası ve fazla mesai yaygın değil.",
      livingCosts: {
        berlin: "800-1.200 €",
        munich: "1.200-1.800 €",
        frankfurt: "1.000-1.500 €",
      },
      pros: [
        "Avrupa'nın en güçlü ekonomisi",
        "Mükemmel sosyal güvenlik sistemi",
        "3,5 milyon Türk kökenli vatandaş",
        "Ücretsiz eğitim sistemi",
        "Gelişmiş altyapı",
      ],
      cons: [
        "Büyük şehirlerde yüksek kiralar",
        "Almanca zorunlu",
        "Bürokrasi yoğunluğu",
        "Soğuk kış ayları",
      ],
    },
    {
      id: "netherlands",
      name: "Hollanda",
      flag: "🇳🇱",
      tagline: "Tolerans ve İnovasyonun Ülkesi",
      sectors: ["Finans", "Tarım Teknolojileri", "Yazılım", "Lojistik"],
      salary: "2.800 - 4.500 €",
      unemployment: "3.5%",
      population: "17 milyon",
      description:
        "17 milyon nüfuslu Hollanda, küçük yüzölçümüne rağmen dünyanın en gelişmiş ekonomilerinden birine sahip. Amsterdam'ı Avrupa'nın finans merkezlerinden biri haline getiren ülke, özellikle çok uluslu şirketler için cazip bir lokasyon.",
      workCulture:
        "İş-yaşam dengesi çok önemli ve part-time çalışma oldukça yaygın. Bisiklet kültürü gelişmiş ve çevre dostu yaşam tarzı hakım.",
      livingCosts: {
        amsterdam: "1.400-2.000 €",
        rotterdam: "1.000-1.400 €",
        utrecht: "1.200-1.600 €",
      },
      pros: [
        "İngilizce ile iş bulmak kolay",
        "Çok kültürlü toplum",
        "Mükemmel iş-yaşam dengesi",
        "Yüksek yaşam kalitesi",
        "AB içinde serbest dolaşım",
      ],
      cons: [
        "Amsterdam'da konut krizi",
        "Yüksek vergi oranları",
        "Değişken hava koşulları",
        "Sosyal çevre kurma zorluğu",
      ],
    },
    {
      id: "france",
      name: "Fransa",
      flag: "🇫🇷",
      tagline: "Kültür ve Sanatın Başkenti",
      sectors: ["Moda", "Turizm", "Gastronomi", "Mühendislik"],
      salary: "2.300 - 3.800 €",
      unemployment: "7.3%",
      population: "67 milyon",
      description:
        "67 milyon nüfuslu Fransa, dünyanın 7. büyük ekonomisi ve Avrupa'nın AB içindeki en büyük ülkesi. Gastronomi, moda, turizm ve mühendislik alanlarında dünya lideri konumunda.",
      workCulture:
        "Fransızlar yaşam kalitesine çok önem veriyor. Uzun öğle yemekleri, café kültürü ve sanat hayatı günlük yaşamın ayrılmaz parçası.",
      livingCosts: {
        paris: "1.500-2.200 €",
        lyon: "900-1.300 €",
        marseille: "800-1.200 €",
      },
      pros: [
        "Zengin kültürel yaşam",
        "Mükemmel sağlık sistemi",
        "Güçlü sosyal haklar",
        "AB'nin en büyük iş piyasası",
        "Gastronomi ve yaşam kalitesi",
      ],
      cons: [
        "Fransızca zorunlu",
        "Paris'te yüksek yaşam maliyeti",
        "Bürokrasi yoğunluğu",
        "İş bulma süreci uzun",
      ],
    },
    {
      id: "switzerland",
      name: "İsviçre",
      flag: "🇨🇭",
      tagline: "Alplerin Finans Merkezi",
      sectors: ["Finans", "İlaç", "Biyoteknoloji", "Mühendislik"],
      salary: "5.000 - 7.500 €",
      unemployment: "2.1%",
      population: "8.7 milyon",
      description:
        "8.7 milyon nüfuslu İsviçre, kişi başına düşen gelirde dünya lideri. Dört resmi dili olan ülke, siyasi ve ekonomik istikrarıyla ünlü.",
      workCulture:
        "Temizlik, düzen ve dakiklik İsviçre kültürünün temel taşları. Doğa sporları ve açık hava aktiviteleri yaşamın önemli parçası.",
      livingCosts: {
        zurich: "2.500-3.500 €",
        geneva: "2.300-3.200 €",
        basel: "2.000-2.800 €",
      },
      pros: [
        "Dünyanın en yüksek maaşları",
        "Mükemmel yaşam kalitesi",
        "Doğayla iç içe yaşam",
        "Politik istikrar",
        "Vergi avantajları",
      ],
      cons: [
        "Çok yüksek yaşam maliyeti",
        "Sosyal entegrasyon zor",
        "Sıkı çalışma kültürü",
        "Konut bulmak zor",
      ],
    },
    {
      id: "belgium",
      name: "Belçika",
      flag: "🇧🇪",
      tagline: "Avrupa'nın Başkenti",
      sectors: ["AB Kurumları", "Lojistik", "Kimya", "Mühendislik"],
      salary: "2.500 - 3.800 €",
      unemployment: "5.6%",
      population: "11.5 milyon",
      description:
        '11.5 milyon nüfuslu Belçika, AB kurumlarına ev sahipliği yapması dolayısıyla "Avrupa\'nın başkenti" olarak anılıyor.',
      workCulture:
        "Çok dilli çalışma ortamları ve uluslararası kariyer fırsatları sunan dinamik bir iş kültürü.",
      livingCosts: {
        brussels: "1.000-1.500 €",
        antwerp: "900-1.300 €",
        ghent: "800-1.200 €",
      },
      pros: [
        "Stratejik konum",
        "Çok dilli ortamlar",
        "Uluslararası kariyer",
        "Kültürel çeşitlilik",
        "AB avantajları",
      ],
      cons: ["Yüksek vergiler", "Kapalı hava", "Bürokrasi", "Dil karmaşası"],
    },
    {
      id: "sweden",
      name: "İsveç",
      flag: "🇸🇪",
      tagline: "İnovasyonun ve Refahın Ülkesi",
      sectors: ["IT", "Mühendislik", "Orman Ürünleri", "Sağlık Teknolojisi"],
      salary: "3.000 - 4.800 €",
      unemployment: "7.5%",
      population: "10.4 milyon",
      description:
        "10.4 milyon nüfuslu İsveç, İskandinav modeliyle tanınan sosyal refah devleti. IKEA, Volvo, Spotify, H&M gibi küresel markaların doğduğu ülke.",
      workCulture:
        "Lagom felsefesi (dengenin ortası) İsveç yaşam tarzının temeli. İş-yaşam dengesi mükemmel, ebeveyn izinleri cömert. Doğaya saygı ve sürdürülebilirlik önemli.",
      livingCosts: {
        stockholm: "1.200-1.800 €",
        göteborg: "1.000-1.400 €",
        malmö: "900-1.300 €",
      },
      pros: [
        "Mükemmel iş-yaşam dengesi",
        "Güçlü sosyal haklar",
        "İngilizce yaygın kullanım",
        "Kültürel çeşitlilik",
        "İnovasyon odaklı ekonomi",
      ],
      cons: [
        "Uzun ve karanlık kışlar",
        "Yüksek vergi oranları",
        "Sosyal mesafe (kişiler arası ilişkiler)",
        "Konut sorunu büyük şehirlerde",
      ],
    },
    {
      id: "norway",
      name: "Norveç",
      flag: "🇳🇴",
      tagline: "Petrolün Gücüyle Refah",
      sectors: [
        "Petrol ve doğalgaz",
        "Denizcilik",
        "Balıkçılık",
        "Yenilenebilir enerji",
      ],
      salary: "4.000 - 6.500 €",
      unemployment: "3.4%",
      population: "5.4 milyon",
      description:
        "5.4 milyon nüfuslu Norveç, petrol rezervleri sayesinde dünyada kişi başına düşen gelirde ilk sıralarda. Devlet Petrol Fonu ile gelecek nesiller için tasarruf yapıyor.",
      workCulture:
        "Norveçliler açık hava aktivitelerini çok seviyor. Friluftsliv (açık hava yaşamı) kültürün temel parçası. Kış sporları ve doğa yürüyüşleri yaygın.",
      livingCosts: {
        oslo: "1.800-2.500 €",
        bergen: "1.500-2.000 €",
        trondheim: "1.300-1.800 €",
      },
      pros: [
        "Dünyada en yüksek maaşlardan",
        "Mükemmel doğa ve yaşam kalitesi",
        "Güçlü sosyal güvenlik",
        "İş güvenliği yüksek",
        "Eğitim sistemi ücretsiz",
      ],
      cons: [
        "Çok yüksek yaşam maliyeti",
        "Norveççe öğrenmek gerekli",
        "Karanlık kış ayları",
        "Sosyal çevre kurma zorluğu",
      ],
    },
    {
      id: "austria",
      name: "Avusturya",
      flag: "🇦🇹",
      tagline: "Müziğin ve Kültürün Merkezi",
      sectors: ["Turizm", "Mühendislik", "Sağlık", "Eğitim"],
      salary: "2.500 - 3.800 €",
      unemployment: "6.3%",
      population: "9 milyon",
      description:
        "9 milyon nüfuslu Avusturya, Orta Avrupa'nın kalbi konumunda. Viyana sürekli olarak dünyanın en yaşanabilir şehirleri listesinin başında.",
      workCulture:
        "Kahve kültürü, klasik müzik ve sanat Avusturya yaşamının ayrılmaz parçası. Alp Dağları'nın eteklerinde doğayla iç içe yaşam mümkün.",
      livingCosts: {
        viyana: "1.200-1.700 €",
        salzburg: "1.100-1.600 €",
        innsbruck: "1.000-1.500 €",
      },
      pros: [
        "Dünyaca ünlü yaşam kalitesi",
        "Güçlü sosyal güvenlik sistemi",
        "Kültürel zenginlik",
        "Doğal güzellikler",
        "AB üyeliği avantajları",
      ],
      cons: [
        "Yüksek vergiler",
        "Büyük şehirlerde kira artışı",
        "Dil karmaşası",
      ],
    },
    {
      id: "denmark",
      name: "Danimarka",
      flag: "🇩🇰",
      tagline: "Mutluluğun Ülkesi",
      sectors: ["IT", "Sağlık", "Denizcilik", "Tarım"],
      salary: "2.500 - 3.800 €",
      unemployment: "5.1%",
      population: "5.8 milyon",
      description:
        '5.8 milyon nüfuslu Danimarka, dünya mutluluk endeksinde sürekli ilk sıralarda yer alıyor. "Hygge" kültürüyle tanınan ülke, İskandinav modelinin başarılı örneklerinden.',
      workCulture:
        'Danimarkalılar "hygge" (konforlu, rahat) yaşam tarzını benimsiyor. Bisiklet kültürü çok gelişmiş - Kopenhag dünyada bisiklet dostu şehirlerin başında.',
      livingCosts: {
        kopenhag: "1.400-2.000 €",
        aarhus: "1.100-1.500 €",
        odense: "1.000-1.400 €",
      },
      pros: [
        "Dünya mutluluk endeksinde lider",
        "Mükemmel iş-yaşam dengesi",
        "İngilizce yaygın kullanım",
        "Çevre dostu yaşam tarzı",
        "Güçlü sosyal politikalar",
      ],
      cons: [
        "Çok yüksek vergiler",
        "Pahalı yaşam maliyeti",
        "Kapalı ve soğuk hava",
        "Dil karmaşası",
      ],
    },
    {
      id: "ireland",
      name: "İrlanda",
      flag: "🇮🇪",
      tagline: "Avrupa'nın Teknoloji Üssü",
      sectors: ["Teknoloji", "Yazılım", "Finans", "İlaç"],
      salary: "2.800 - 4.200 €",
      unemployment: "4.3%",
      population: "5 milyon",
      description:
        '5 milyon nüfuslu İrlanda, "Celtic Tiger" lakabıyla tanınıyor. AB üyesi olmasına rağmen İngilizce konuşuluyor. Teknoloji devlerinin Avrupa merkezi.',
      workCulture:
        "Google, Facebook (Meta), Apple, Microsoft'un Avrupa merkezleri Dublin'de. 'Silicon Valley of Europe' olarak anılıyor.",
      livingCosts: {
        dublin: "1.300-1.800 €",
        cork: "1.000-1.400 €",
        galway: "900-1.300 €",
      },
      pros: [
        "İngilizce resmi dil ",
        "Teknoloji devlerinde kariyer fırsatı",
        "Genç ve dinamik nüfus",
        "Girişimci dostu ortam",
        "AB avantajları",
      ],
      cons: ["Dublin'de konut krizi", "Kapalı hava", "Sınırlı toplu taşıma"],
    },
  ];

  const tabs = [
    { id: "overview", label: "Genel Bakış", icon: Globe },
    { id: "strategies", label: "İş Arama", icon: TrendingUp },
    { id: "tips", label: "Pratik Öneriler", icon: Users },
  ];

  return (
    <div className="min-h-screenn sm:mt-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Avrupa'da Çalışmak için En İyi 10 Ülke
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              2025 yılına özel kapsamlı rehber ile Avrupa'da kariyer yapmanın
              sırlarını keşfedin
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Güncellenme: Eylül 2025
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                10+ Ülke Analizi
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                500M+ Nüfus
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Neden Avrupa'da Çalışmalı?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Avrupa kıtası, gelişmiş ekonomisi, güçlü sosyal hakları, çok
                    kültürlü yapısı ve yüksek yaşam standartları ile dünya
                    çapında profesyonellerin gözde tercihi konumunda. 500
                    milyondan fazla nüfusu ile dünyanın en büyük tek pazarını
                    oluşturuyor.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span className="text-gray-600">
                        Güçlü sosyal güvenlik sistemleri
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <span className="text-gray-600">
                        Mükemmel iş-yaşam dengesi
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                      <span className="text-gray-600">
                        Çok kültürlü çalışma ortamları
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Avrupa İstatistikleri
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        500M+
                      </div>
                      <div className="text-sm text-gray-600">Toplam Nüfus</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        27
                      </div>
                      <div className="text-sm text-gray-600">AB Üye Ülkesi</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">
                        €16T
                      </div>
                      <div className="text-sm text-gray-600">Toplam GSYİH</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        6.2%
                      </div>
                      <div className="text-sm text-gray-600">Ort. İşsizlik</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Countries List */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                En Çok Tercih Edilen Ülkeler
              </h2>
              {countries.map((country, index) => (
                <div
                  key={country.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{country.flag}</div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                              #{index + 1}
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900">
                              {country.name}
                            </h3>
                          </div>
                          <p className="text-gray-600 italic">
                            {country.tagline}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleCountry(country.id)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {expandedCountries[country.id] ? (
                          <ChevronUp className="w-6 h-6" />
                        ) : (
                          <ChevronDown className="w-6 h-6" />
                        )}
                      </button>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium text-gray-700">
                            Maaş
                          </span>
                        </div>
                        <div className="text-lg font-semibold text-gray-900">
                          {country.salary}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <TrendingUp className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-gray-700">
                            İşsizlik
                          </span>
                        </div>
                        <div className="text-lg font-semibold text-gray-900">
                          {country.unemployment}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <Users className="w-4 h-4 text-purple-600" />
                          <span className="text-sm font-medium text-gray-700">
                            Nüfus
                          </span>
                        </div>
                        <div className="text-lg font-semibold text-gray-900">
                          {country.population}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <Globe className="w-4 h-4 text-indigo-600" />
                          <span className="text-sm font-medium text-gray-700">
                            Sektörler
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          {country.sectors.length}+ Alan
                        </div>
                      </div>
                    </div>

                    {/* Sectors */}
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {country.sectors.map((sector, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                          >
                            {sector}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedCountries[country.id] && (
                      <div className="mt-8 space-y-8 border-t border-gray-100 pt-8">
                        {/* Description */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            Genel Bakış
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {country.description}
                          </p>
                        </div>

                        {/* Work Culture */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            Çalışma Kültürü
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {country.workCulture}
                          </p>
                        </div>

                        {/* Living Costs */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            Yaşam Maliyeti (Aylık)
                          </h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            {Object.entries(country.livingCosts).map(
                              ([city, cost]) => (
                                <div
                                  key={city}
                                  className="bg-gray-50 rounded-lg p-4"
                                >
                                  <div className="font-medium text-gray-900 capitalize">
                                    {city}
                                  </div>
                                  <div className="text-lg font-semibold text-blue-600">
                                    {cost}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        {/* Pros and Cons */}
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                              Avantajlar
                            </h4>
                            <ul className="space-y-2">
                              {country.pros.map((pro, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start space-x-2"
                                >
                                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                  <span className="text-gray-600">{pro}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                              Dezavantajlar
                            </h4>
                            <ul className="space-y-2">
                              {country.cons.map((con, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start space-x-2"
                                >
                                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                  <span className="text-gray-600">{con}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Job Search Strategies Tab */}
        {activeTab === "strategies" && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Avrupa'da İş Arama Stratejileri
              </h2>
              <p className="text-xl text-gray-600">
                Başarılı bir kariyer için adım adım rehber
              </p>
            </div>

            <div className="grid gap-8">
              {[
                {
                  title: "Dil Hazırlığı",
                  description:
                    "Hedef ülkenin dilini öğrenmek kritik önemde. En azından B1-B2 seviyesinde olmak gerekiyor.",
                  tips: [
                    "İngilizce'nin yeterli olduğu ülkeler: İrlanda, Hollanda, İsveç, Danimarka",
                    "Almanca gerekli: Almanya, Avusturya, İsviçre",
                    "Fransızca gerekli: Fransa, Belçika (kısmen)",
                    "Online dil kursları: Duolingo, Babbel, Busuu",
                  ],
                },
                {
                  title: "CV ve Motivasyon Mektubu",
                  description:
                    "Her ülkenin CV formatı farklı. Europass CV formatı genel kabul görüyor.",
                  tips: [
                    "Europass CV formatını kullanın",
                    "Fotoğraf gereklilikleri ülkeye göre değişir",
                    "Motivasyon mektubunu kişiselleştirin",
                    "Referanslarınızı hazır bulundurun",
                  ],
                },
                {
                  title: "Networking",
                  description:
                    "Avrupa'da iş bulmanın %70'i networking ile gerçekleşiyor.",
                  tips: [
                    "Sektörel etkinliklere katılın",
                    "Meetup gruplarına dahil olun",
                    "Alumni ağlarınızı kullanın",
                  ],
                },
              ].map((strategy, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {strategy.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {strategy.description}
                      </p>
                      <ul className="space-y-2">
                        {strategy.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-600">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tips Tab */}
        {activeTab === "tips" && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pratik Öneriler
              </h2>
              <p className="text-xl text-gray-600">
                Başarılı bir Avrupa deneyimi için önemli ipuçları
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Short Term */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  Kısa Vadeli Stratejiler
                </h3>
                <div className="space-y-4">
                  {[
                    "Dil öğrenmeye hemen başlayın (6-12 ay sürer)",
                    "CV'nizi Avrupa formatına uygun hale getirin",
                    "LinkedIn profilinizi güçlendirin",
                    "Hedef ülke hakkında detaylı araştırma yapın",
                    "Türk toplulukları ile iletişim kurun",
                  ].map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-gray-600">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Long Term */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  Uzun Vadeli Başarı Faktörleri
                </h3>
                <div className="space-y-4">
                  {[
                    "Sabır ve azim - İş bulma süreci 3-6 ay alabilir",
                    "Kültürel adaptasyon - Yerel çalışma kültürünü anlayın",
                    "Sürekli öğrenme - Mesleki gelişiminizi devam ettirin",
                    "Sosyal entegrasyon - Yerel halkla etkileşim kurun",
                    "Finansal planlama - İlk aylar için yeterli birikim yapın",
                  ].map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-gray-600">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">⚠️</span>
                Önemli Hatırlatmalar
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Vize Süreçleri
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• AB vatandaşları için vize gerekmez</li>
                    <li>• Türk vatandaşları için iş teklifi gerekli</li>
                    <li>• Kalifiye eleman belgeleri hazır olmalı</li>
                    <li>• Dil yeterlilik belgesi şart</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Mali Durum
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• İlk 3-6 ay için birikim yapın</li>
                    <li>• Banka hesap açma süreçlerini araştırın</li>
                    <li>• Vergi sistemlerini öğrenin</li>
                    <li>• Sigorta gerekliliklerini kontrol edin</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Başarı Hikayeleri İpuçları
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl mb-2">🎯</div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Hedef Belirleyin
                  </h4>
                  <p className="text-sm text-gray-600">
                    Hangi ülke, şehir ve sektörde çalışmak istediğinizi net
                    olarak belirleyin.
                  </p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl mb-2">🌐</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ağ Kurun</h4>
                  <p className="text-sm text-gray-600">
                    LinkedIn ve sektörel etkinlikler ile profesyonel ağınızı
                    genişletin.
                  </p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Harekete Geçin
                  </h4>
                  <p className="text-sm text-gray-600">
                    Planlamaktan çok uygulama yapın. İlk adımı atmaktan
                    çekinmeyin.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Avrupa Rüyanızı Gerçekleştirin!
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Hangi ülkeyi seçerseniz seçin, dil bilgisi, mesleki yeterlilik
                ve kültürel uyum, Avrupa'da başarılı bir kariyer için
                vazgeçilmez üç unsurdur.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="text-sm text-blue-100">Ortalama Süreç</div>
                  <div className="text-xl font-bold">6-12 Ay</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="text-sm text-blue-100">Başarı Oranı</div>
                  <div className="text-xl font-bold">+75%</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="text-sm text-blue-100">Maaş Artışı</div>
                  <div className="text-xl font-bold">2-3x</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">
              Avrupa Kariyer Rehberi 2025
            </h3>
            <p className="text-gray-400 mb-6">
              Bu rehber Avrupa'da çalışmak isteyen profesyoneller için kapsamlı
              bir kaynak niteliğindedir.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span>📅 Son Güncelleme: Eylül 2025</span>
              <span>🌍 10+ Ülke Analizi</span>
              <span>📊 Güncel Veriler</span>
              <span>💼 Pratik Öneriler</span>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                ⚠️ <strong>Önemli:</strong> Maaş ve maliyet bilgileri 2025
                tahminlerine dayanır. Güncel vize kuralları için resmi
                kaynaklara başvurun.
              </p>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default page;
