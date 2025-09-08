"use client";
import React, { useState, useEffect } from "react";
import {
  Globe,
  TrendingUp,
  Users,
  Star,
  MapPin,
  BarChart3,
  Languages,
  Award,
  ArrowRight,
  Clock,
  DollarSign,
  Briefcase,
} from "lucide-react";

const LanguagesBlog = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrollY, setScrollY] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = [
    {
      id: "english",
      name: "İngilizce",
      flag: "🇺🇸",
      globalRank: 1,
      speakers: "1.5 milyar",
      jobOpportunities: "95%",
      salaryBoost: "+40-60%",
      difficulty: "Orta",
      timeToLearn: "6-12 ay",
      color: "blue",
      description:
        "Küresel iş dilinin tartışmasız lideri. Teknoloji, finans, turizm ve akademik alanlarda vazgeçilmez.",
      countries: [
        "ABD",
        "Kanada",
        "İngiltere",
        "Avustralya",
        "İrlanda",
        "Yeni Zelanda",
      ],
      sectors: [
        "Teknoloji",
        "Finans",
        "Turizm",
        "Eğitim",
        "Sağlık",
        "Havacılık",
      ],
      pros: [
        "En çok konuşulan ikinci dil",
        "Teknoloji sektörünün ana dili",
        "Uluslararası iş dünyasının ortak dili",
        "Online kaynak bolluğu",
        "Pop kültür desteği",
      ],
      cons: [
        "Rekabet çok yüksek",
        "Anadili olmayanlar için telaffuz zorlukları",
        "İş piyasasında beklenti seviyesi yüksek",
      ],
      learningTips: [
        "Netflix ve YouTube ile günlük pratik",
        "Podcast dinleme alışkanlığı edinin",
        "Konuşma kulüplerine katılın",
        "Business English kurslarına odaklanın",
      ],
    },
    {
      id: "chinese",
      name: "Çince (Mandarin)",
      flag: "🇨🇳",
      globalRank: 2,
      speakers: "918 milyon",
      jobOpportunities: "75%",
      salaryBoost: "+50-80%",
      difficulty: "Çok Zor",
      timeToLearn: "2-4 yıl",
      color: "orange",
      description:
        "Dünyanın en büyük ekonomilerinden birinin dili. Özellikle manufaktur, teknoloji ve ticaret alanlarında büyük avantaj.",
      countries: ["Çin", "Tayvan", "Singapur", "Hong Kong"],
      sectors: ["Manufaktur", "E-ticaret", "Teknoloji", "Enerji", "İnşaat"],
      pros: [
        "En çok konuşulan ana dil",
        "Çin pazarına giriş anahtarı",
        "Nadir bulunur beceri",
        "Yüksek maaş primi",
        "Gelecek vaat eden pazar",
      ],
      cons: [
        "Öğrenmesi çok zor",
        "Karakter sistemi karmaşık",
        "Kültürel adaptasyon gerekli",
        "Sınırlı coğrafi kullanım",
      ],
      learningTips: [
        "Karakter yazımına erken odaklanın",
        "Çince film ve diziler izleyin",
        "Tonlama çalışmasına önem verin",
        "Language exchange partnerleri bulun",
      ],
    },
    {
      id: "spanish",
      name: "İspanyolca",
      flag: "🇪🇸",
      globalRank: 3,
      speakers: "500 milyon",
      jobOpportunities: "80%",
      salaryBoost: "+25-45%",
      difficulty: "Kolay-Orta",
      timeToLearn: "4-8 ay",
      color: "blue",
      description:
        "21 ülkede resmi dil. ABD'de hızla büyüyen Hispanic pazarı için kritik önemde.",
      countries: ["İspanya", "Meksika", "Arjantin", "Kolombiya", "Şili", "ABD"],
      sectors: ["Turizm", "Sağlık", "Eğitim", "Bankacılık", "Tarım"],
      pros: [
        "Öğrenmesi kolay",
        "Geniş coğrafi yayılım",
        "ABD'de büyüyen pazar",
        "Kültürel zenginlik",
        "Turizm sektörü fırsatları",
      ],
      cons: [
        "Ülkeler arası akssan farkları",
        "Teknoloji sektöründe sınırlı",
        "Maaş primi diğerlerine göre düşük",
      ],
      learningTips: [
        "Latin müzik dinleyin",
        "Telenovela izleme alışkanlığı",
        "Gramer kuralları Türkçeye benzer",
        "Konuşma pratiğine odaklanın",
      ],
    },
    {
      id: "german",
      name: "Almanca",
      flag: "🇩🇪",
      globalRank: 4,
      speakers: "130 milyon",
      jobOpportunities: "85%",
      salaryBoost: "+35-55%",
      difficulty: "Zor",
      timeToLearn: "12-18 ay",
      color: "green",
      description:
        "Avrupa'nın ekonomik gücü Almanya'nın dili. Mühendislik ve otomotiv sektörlerinde altın değerde.",
      countries: ["Almanya", "Avusturya", "İsviçre", "Lüksemburg"],
      sectors: ["Mühendislik", "Otomotiv", "Kimya", "Makine", "Finans"],
      pros: [
        "Avrupa'nın en güçlü ekonomisi",
        "Mühendislik alanında lider",
        "Yüksek yaşam standardı",
        "AB içinde ücretsiz dolaşım",
        "Güçlü sosyal haklar",
      ],
      cons: [
        "Karmaşık gramer yapısı",
        "Uzun kelime birleştirmeleri",
        "Resmi dil tonu ağır",
        "Sınırlı coğrafi kullanım",
      ],
      learningTips: [
        "Deutsche Welle kaynaklarını kullanın",
        "Almanca podcast dinleyin",
        "Gramer tablolarını ezberleyin",
        "Goethe Enstitüsü kurslarına katılın",
      ],
    },
    {
      id: "french",
      name: "Fransızca",
      flag: "🇫🇷",
      globalRank: 5,
      speakers: "280 milyon",
      jobOpportunities: "70%",
      salaryBoost: "+30-50%",
      difficulty: "Orta-Zor",
      timeToLearn: "8-15 ay",
      color: "blue",
      description:
        "29 ülkede resmi dil. Diplomasi, moda, gastronomi ve lüks sektörlerde vazgeçilmez.",
      countries: ["Fransa", "Kanada", "İsviçre", "Belçika", "Afrika ülkeleri"],
      sectors: ["Diplomasi", "Moda", "Gastronomi", "Turizm", "Lüks mallar"],
      pros: [
        "Uluslararası diplomasi dili",
        "Afrika'da büyüyen pazar",
        "Kültürel prestij",
        "Moda ve sanat dünyasında geçerli",
        "AB avantajları",
      ],
      cons: [
        "Karmaşık telaffuz kuralları",
        "Formal/informal ayrımı zor",
        "Teknoloji sektöründe sınırlı",
        "Öğrenmesi zaman alıcı",
      ],
      learningTips: [
        "Fransız filmleri altyazısız izleyin",
        "France24 haber kanalını takip edin",
        "Telaffuza çok odaklanın",
        "Alliance Française kurslarına katılın",
      ],
    },
    {
      id: "arabic",
      name: "Arapça",
      flag: "🇸🇦",
      globalRank: 6,
      speakers: "422 milyon",
      jobOpportunities: "65%",
      salaryBoost: "+60-90%",
      difficulty: "Çok Zor",
      timeToLearn: "2-3 yıl",
      color: "yellow",
      description:
        "26 ülkede resmi dil. Petrol, finans ve diplomasi sektörlerinde yüksek katma değer.",
      countries: ["Suudi Arabistan", "BAE", "Katar", "Mısır", "Ürdün"],
      sectors: [
        "Petrol & Gaz",
        "İslam Bankacılığı",
        "Diplomasi",
        "Çeviri",
        "Turizm",
      ],
      pros: [
        "Çok yüksek maaş primi",
        "Nadir bulunur yetenek",
        "Ortadoğu pazarına giriş",
        "Dini/kültürel bağlantı avantajı",
        "Petrol sektörü fırsatları",
      ],
      cons: [
        "Çok zor öğrenilir",
        "Sağdan sola yazım sistemi",
        "Lehçe farklılıkları",
        "Kültürel adaptasyon gerekli",
      ],
      learningTips: [
        "Modern Standart Arapça'ya odaklanın",
        "Al Jazeera izleyin",
        "Arap müziği dinleyin",
        "Online Arapça kursları alın",
      ],
    },
  ];

  const stats = [
    {
      icon: Globe,
      label: "Küresel Dil Sayısı",
      value: "7,000+",
      color: "blue",
    },
    {
      icon: Users,
      label: "İngilizce Konuşanlar",
      value: "1.5M",
      color: "green",
    },
    {
      icon: TrendingUp,
      label: "Dil Premium Oranı",
      value: "60%",
      color: "purple",
    },
    {
      icon: Briefcase,
      label: "Çok Dilli İş İlanı",
      value: "35%",
      color: "orange",
    },
  ];

  const sections = [
    { id: "overview", label: "Genel Bakış", icon: Globe },
    { id: "languages", label: "Diller", icon: Languages },
    { id: "strategies", label: "Strateji", icon: TrendingUp },
    { id: "tips", label: "Öneriler", icon: Star },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              <div className="w-2 h-2 bg-white/20 rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center text-white">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-600/30 backdrop-blur-sm rounded-full text-sm font-medium border border-blue-400/30">
                🌍 Kariyer Rehberi 2025
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Yurt Dışında Çalışmak İçin
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Hangi Diller Avantaj Sağlıyor?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Küresel iş piyasasında fark yaratacak dil becerilerini keşfedin.
              Hangi dillerin kariyerinizi nasıl dönüştürebileceğini öğrenin.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-${stat.color}-600/30 backdrop-blur-sm rounded-xl mb-3`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Navigation */}
      <nav
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300 ${
          scrollY > 100 ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Languages className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-gray-900">Dil Rehberi</span>
            </div>
            <div className="flex space-x-8">
              {sections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-colors ${
                      activeSection === section.id
                        ? "bg-blue-100 text-blue-600"
                        : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="hidden md:block">{section.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Section */}
        <section id="overview" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Neden Dil Becerisi Bu Kadar Önemli?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Küreselleşen iş dünyasında, dil becerileri artık lüks değil
              zorunluluk haline geldi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: DollarSign,
                title: "Maaş Artışı",
                description:
                  "Yabancı dil bilen profesyoneller ortalama %25-60 daha fazla maaş alıyor.",
                color: "green",
              },
              {
                icon: Briefcase,
                title: "İş Fırsatları",
                description:
                  "Çok dilli adaylar %35 daha fazla iş fırsatına erişim sağlıyor.",
                color: "blue",
              },
              {
                icon: TrendingUp,
                title: "Kariyer Gelişimi",
                description:
                  "Uluslararası pozisyonlarda terfi imkanları 3 kat artıyor.",
                color: "purple",
              },
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-${benefit.color}-100 rounded-2xl mb-6`}
                  >
                    <IconComponent
                      className={`w-8 h-8 text-${benefit.color}-600`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Quick Facts */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Hızlı Gerçekler
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  label: "Küresel şirketlerin",
                  value: "87%",
                  detail: "çok dilli eleman arıyor",
                },
                {
                  label: "İngilizce bilen",
                  value: "1.5M",
                  detail: "insan var dünyada",
                },
                {
                  label: "Dil öğrenme",
                  value: "ROI",
                  detail: "yatırımı %300+ getiri",
                },
                {
                  label: "Uzaktan çalışma",
                  value: "60%",
                  detail: "dil becerisi gerektiriyor",
                },
              ].map((fact, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    {fact.value}
                  </div>
                  <div className="text-sm text-blue-100">{fact.label}</div>
                  <div className="text-sm text-blue-200">{fact.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section id="languages" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              En Avantajlı 6 Dil
            </h2>
            <p className="text-xl text-gray-600">
              Küresel iş piyasasında en çok değer gören diller ve özellikleri
            </p>
          </div>

          <div className="grid gap-8">
            {languages.map((language, index) => (
              <div
                key={language.id}
                className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 ${
                  selectedLanguage === language.id ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-5xl">{language.flag}</div>
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <span
                            className={`px-3 py-1 bg-${language.color}-100 text-${language.color}-800 rounded-full text-sm font-medium`}
                          >
                            #{language.globalRank} Küresel Sıralama
                          </span>
                          <h3 className="text-3xl font-bold text-gray-900">
                            {language.name}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-lg italic">
                          {language.description}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setSelectedLanguage(
                          selectedLanguage === language.id ? null : language.id
                        )
                      }
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <ArrowRight
                        className={`w-6 h-6 transform transition-transform ${
                          selectedLanguage === language.id ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Quick Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <Users className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm text-gray-600">Konuşan</div>
                      <div className="font-bold text-gray-900">
                        {language.speakers}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <Briefcase className="w-5 h-5 text-green-600 mx-auto mb-2" />
                      <div className="text-sm text-gray-600">İş Fırsatı</div>
                      <div className="font-bold text-gray-900">
                        {language.jobOpportunities}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <DollarSign className="w-5 h-5 text-purple-600 mx-auto mb-2" />
                      <div className="text-sm text-gray-600">Maaş Artışı</div>
                      <div className="font-bold text-gray-900">
                        {language.salaryBoost}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <BarChart3 className="w-5 h-5 text-orange-600 mx-auto mb-2" />
                      <div className="text-sm text-gray-600">Zorluk</div>
                      <div className="font-bold text-gray-900">
                        {language.difficulty}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <Clock className="w-5 h-5 text-red-600 mx-auto mb-2" />
                      <div className="text-sm text-gray-600">Süre</div>
                      <div className="font-bold text-gray-900">
                        {language.timeToLearn}
                      </div>
                    </div>
                  </div>

                  {/* Sectors */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      🎯 Popüler Sektörler
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {language.sectors.map((sector, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 bg-${language.color}-100 text-${language.color}-500 rounded-full text-sm font-medium`}
                        >
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Countries */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      🌍 Ana Ülkeler
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {language.countries.map((country, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {selectedLanguage === language.id && (
                    <div className="mt-8 pt-8 border-t border-gray-100 space-y-8">
                      {/* Pros and Cons */}
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                            Avantajlar
                          </h4>
                          <ul className="space-y-3">
                            {language.pros.map((pro, idx) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-3"
                              >
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-gray-600">{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                            <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                            Zorluklar
                          </h4>
                          <ul className="space-y-3">
                            {language.cons.map((con, idx) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-3"
                              >
                                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-gray-600">{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Learning Tips */}
                      <div className="bg-blue-50 rounded-xl p-6">
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                          <Star className="w-5 h-5 text-blue-600 mr-2" />
                          Öğrenme İpuçları
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {language.learningTips.map((tip, idx) => (
                            <div
                              key={idx}
                              className="flex items-start space-x-3"
                            >
                              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                {idx + 1}
                              </span>
                              <span className="text-gray-700">{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Strategy Section */}
        <section id="strategies" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dil Öğrenme Stratejileri
            </h2>
            <p className="text-xl text-gray-600">
              Hangi dili seçeceğinizden nasıl öğreneceğinize kadar tüm süreç
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hedef Belirleme",
                description: "Kariyer hedeflerinize uygun dil seçimi yapın",
                steps: [
                  "Hangi sektörde çalışmak istediğinizi belirleyin",
                  "Hedef ülkeleri araştırın",
                  "Zaman ve bütçe planlaması yapın",
                  "Kısa ve uzun vadeli hedefler koyun",
                ],
                color: "blue",
              },
              {
                title: "Öğrenme Yöntemi",
                description: "Size en uygun öğrenme stilini keşfedin",
                steps: [
                  "Kişisel öğrenme stilinizi belirleyin",
                  "Online/offline seçenekleri değerlendirin",
                  "Pratik yapma fırsatları yaratın",
                  "İlerlemenizi düzenli takip edin",
                ],
                color: "green",
              },
              {
                title: "Uygulama ve Pratik",
                description: "Teorik bilgiyi pratikte nasıl kullanacağınız",
                steps: [
                  "Language exchange partnerleri bulun",
                  "İş ortamında kullanım fırsatları yaratın",
                  "Sertifika programlarına katılın",
                  "Portfolio ve CV'nizi güncelleyin",
                ],
                color: "purple",
              },
            ].map((strategy, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 bg-${strategy.color}-100 rounded-xl mb-6`}
                >
                  <span
                    className={`text-2xl font-bold text-${strategy.color}-600`}
                  >
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {strategy.title}
                </h3>
                <p className="text-gray-600 mb-6">{strategy.description}</p>
                <ul className="space-y-3">
                  {strategy.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span
                        className={`w-1.5 h-1.5 bg-${strategy.color}-500 rounded-full mt-2 flex-shrink-0`}
                      ></span>
                      <span className="text-gray-700 text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mt-16 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Dil Öğrenme Zaman Çizelgesi
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
              {[
                {
                  month: "1-3",
                  title: "Temel Seviye",
                  description: "Alfabe, temel kelimeler, günlük ifadeler",
                },
                {
                  month: "4-6",
                  title: "Orta Seviye",
                  description: "Gramer kuralları, konuşma pratiği, okuma",
                },
                {
                  month: "7-12",
                  title: "İleri Seviye",
                  description: "İş İngilizcesi, profesyonel terimler",
                },
                {
                  month: "12+",
                  title: "Uzmanlık",
                  description: "Sertifika sınavları, iş görüşmeleri",
                },
              ].map((phase, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-between mb-8"
                >
                  <div
                    className={`${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } flex items-center w-full`}
                  >
                    <div
                      className={`${
                        index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                      } flex-1`}
                    >
                      <div className="bg-blue-50 rounded-xl p-6">
                        <h4 className="font-bold text-gray-900 mb-2">
                          {phase.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                          {phase.description}
                        </p>
                        <span className="text-blue-600 font-medium text-sm">
                          {phase.month}. Ay
                        </span>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section id="tips" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pratik Öneriler ve İpuçları
            </h2>
            <p className="text-xl text-gray-600">
              Deneyimli profesyonellerden öğrenilmiş değerli tavsiyeler
            </p>
          </div>

          {/* Success Stories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Mehmet A.",
                role: "Software Engineer",
                language: "İngilizce",
                salary: "+65%",
                country: "Amsterdam",
                story:
                  "6 aylık yoğun İngilizce kursundan sonra Hollanda'da teknoloji şirketinde işe başladım.",
                tip: "Teknik terimler ve coding interview'lara odaklanın.",
              },
              {
                name: "Ayşe K.",
                role: "Marketing Manager",
                language: "Almanca",
                salary: "+45%",
                country: "Berlin",
                story:
                  "Almanca öğrendikten sonra BMW'de pazarlama müdürü oldum. Kültürel adaptasyon çok önemliydi.",
                tip: "Alman iş kültürünü öğrenmek dil kadar önemli.",
              },
              {
                name: "Can S.",
                role: "Business Analyst",
                language: "Çince",
                salary: "+80%",
                country: "Shanghai",
                story:
                  "Mandarin öğrenmek zor oldu ama Çin'deki iş fırsatları inanılmazdı.",
                tip: "Karakter yazımına sabırla odaklanın, konuşmaya erken başlayın.",
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <p className="text-gray-600 text-sm">{story.role}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-green-600 font-medium">
                        {story.salary}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-blue-600">{story.country}</span>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-3">
                    {story.language}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {story.story}
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm text-gray-700 italic">
                    <strong>💡 Tavsiye:</strong> {story.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Plan */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                30 Günlük Aksiyon Planı
              </h3>
              <p className="text-blue-100">
                Bugün başlayıp ilk ayda yapabileceğiniz adımlar
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  week: "1. Hafta",
                  tasks: [
                    "Hedef dili belirle",
                    "Online kaynak araştır",
                    "Öğrenme planı oluştur",
                    "İlk derslere başla",
                  ],
                },
                {
                  week: "2. Hafta",
                  tasks: [
                    "Günlük kelime hedefi koy",
                    "Podcast dinlemeye başla",
                    "Temel gramer öğren",
                    "Mobile app indir",
                  ],
                },
                {
                  week: "3. Hafta",
                  tasks: [
                    "Language exchange partner bul",
                    "Film/dizi izlemeye başla",
                    "İlk konuşma pratiği",
                    "Progress takip et",
                  ],
                },
                {
                  week: "4. Hafta",
                  tasks: [
                    "İlk seviye testi al",
                    "CV'ni güncelle",
                    "Kurs araştır",
                    "Uzun vadeli plan yap",
                  ],
                },
              ].map((week, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-6"
                >
                  <h4 className="font-bold text-white mb-4">{week.week}</h4>
                  <ul className="space-y-2">
                    {week.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-blue-100 text-sm">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <Languages className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Dil Öğrenme Yolculuğunuz Başlasın!
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Küresel kariyer fırsatlarınızı artırmak için bugün harekete
                geçin. Hangi dili seçerseniz seçin, başarının anahtarı
                tutarlılık ve pratik.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
                <div className="text-gray-400">Analiz Edilen Dil</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  50+
                </div>
                <div className="text-gray-400">Ülke Verisi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  2025
                </div>
                <div className="text-gray-400">Güncel Rehber</div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500 text-sm">
                ⚠️ <strong>Önemli:</strong> Bu rehberdeki bilgiler genel
                bilgilendirme amaçlıdır. Güncel vize ve iş kuralları için resmi
                kaynaklara başvurun.
              </p>
              <p className="text-gray-600 text-sm mt-4">
                © 2025 Dil Öğrenme Rehberi. Kariyerinizi global yapın! 🌍
              </p>
            </div>
          </div>
        </div>
      </footer> */}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LanguagesBlog;
