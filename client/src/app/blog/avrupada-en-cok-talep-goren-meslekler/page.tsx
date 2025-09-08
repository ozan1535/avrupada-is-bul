import React from "react";
import {
  Clock,
  User,
  TrendingUp,
  MapPin,
  Euro,
  Users,
  Code,
  Stethoscope,
  Wrench,
  Calculator,
  Truck,
  Heart,
} from "lucide-react";

export default function page() {
  const jobCategories = [
    {
      icon: Code,
      title: "Teknoloji & Yazılım",
      jobs: [
        "Yazılım Geliştirici",
        "Veri Analisti",
        "Siber Güvenlik Uzmanı",
        "DevOps Mühendisi",
      ],
      color: "bg-blue-500",
    },
    {
      icon: Stethoscope,
      title: "Sağlık",
      jobs: ["Hemşire", "Doktor", "Fizyoterapist", "Ebe"],
      color: "bg-green-500",
    },
    {
      icon: Wrench,
      title: "Mühendislik",
      jobs: [
        "Makine Mühendisi",
        "İnşaat Mühendisi",
        "Elektrik Mühendisi",
        "Endüstri Mühendisi",
      ],
      color: "bg-orange-500",
    },
    {
      icon: Calculator,
      title: "Finans",
      jobs: [
        "Mali Müşavir",
        "Finansal Analist",
        "Risk Yöneticisi",
        "Muhasebe Uzmanı",
      ],
      color: "bg-purple-500",
    },
    {
      icon: Truck,
      title: "Lojistik",
      jobs: [
        "Kamyon Şoförü",
        "Depo Sorumlusu",
        "Lojistik Koordinatörü",
        "Forklift Operatörü",
      ],
      color: "bg-yellow-500",
    },
    {
      icon: Heart,
      title: "Sosyal Hizmetler",
      jobs: [
        "Öğretmen",
        "Sosyal Hizmet Uzmanı",
        "Çocuk Bakımı",
        "Yaşlı Bakımı",
      ],
      color: "bg-pink-500",
    },
  ];

  const topCountries = [
    {
      name: "Almanya",
      demand: "Çok Yüksek",
      sectors: "Teknoloji, Mühendislik, Sağlık",
    },
    {
      name: "Hollanda",
      demand: "Yüksek",
      sectors: "Teknoloji, Lojistik, Tarım",
    },
    {
      name: "İsveç",
      demand: "Yüksek",
      sectors: "Teknoloji, Sağlık, Mühendislik",
    },
    {
      name: "Norveç",
      demand: "Orta-Yüksek",
      sectors: "Mühendislik, Sağlık, Denizcilik",
    },
    {
      name: "İsviçre",
      demand: "Orta-Yüksek",
      sectors: "Finans, Sağlık, Teknoloji",
    },
    { name: "Fransa", demand: "Orta", sectors: "Teknoloji, Sağlık, Turizm" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 sm:mt-16">
      {/* Header */}
      {/* <header className="bg-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Kariyer Blog</h1>
            <div className="flex space-x-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Güncel
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                2025
              </span>
            </div>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Avrupa'da En Çok Talep Gören Meslekler
          </h1>
          <p className="text-xl text-blue-100">
            2025 Yılında Avrupa İş Piyasasında Hangi Meslekler Aranıyor?
            Kapsamlı Rehber
          </p>
          {/* <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>15 dk okuma</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Kariyer Uzmanı</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>Güncel Veriler</span>
            </div>
          </div> */}
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Avrupa İş Piyasasına Genel Bakış
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Avrupa, dünyanın en gelişmiş ekonomilerinden birine sahip olan ve
              sürekli nitelikli işgücü arayışında olan bir kıtadır. Demografik
              değişimler, teknolojik gelişmeler ve pandemi sonrası ekonomik
              dönüşüm, Avrupa iş piyasasında köklü değişikliklere neden
              olmuştur.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              2025 yılında Avrupa'da işsizlik oranları düşük seviyelerde
              seyretmekte ve birçok sektörde ciddi işgücü açığı yaşanmaktadır.
              Bu durum, doğru becerilerle donatılmış profesyoneller için büyük
              fırsatlar yaratmaktadır.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-blue-800 font-medium">
                💡 Bilgi: Avrupa Birliği ülkelerinde ortalama 7.4 milyon açık
                pozisyon bulunmaktadır ve bu rakam her geçen yıl artmaktadır.
              </p>
            </div>
          </div>
        </section>

        {/* Top Job Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            En Çok Talep Gören Meslek Kategorileri
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className={`${category.color} p-4 text-white`}>
                  <category.icon className="w-8 h-8 mb-2" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {category.jobs.map((job, jobIndex) => (
                      <li
                        key={jobIndex}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        {job}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Analysis */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Sektör Bazında Detaylı Analiz
          </h2>

          {/* Technology Sector */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Teknoloji ve Yazılım Sektörü
            </h3>
            <div className="bg-blue-50 rounded-lg p-6 mb-4">
              <p className="text-gray-800 leading-relaxed mb-4">
                Avrupa'da teknoloji sektörü hızla büyümeye devam ediyor. Dijital
                dönüşüm, yapay zeka ve bulut teknolojileri alanında ciddi
                yatırımlar yapılıyor.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    En Çok Aranan Pozisyonlar:
                  </h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Full-Stack Developer (€45,000-80,000)</li>
                    <li>• DevOps Mühendisi (€50,000-90,000)</li>
                    <li>• Veri Bilimci (€55,000-95,000)</li>
                    <li>• Siber Güvenlik Uzmanı (€60,000-100,000)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Öne Çıkan Teknolojiler:
                  </h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Python, JavaScript, React</li>
                    <li>• AWS, Azure, Google Cloud</li>
                    <li>• Docker, Kubernetes</li>
                    <li>• Machine Learning, AI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Healthcare Sector */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
              <Stethoscope className="w-6 h-6" />
              Sağlık Sektörü
            </h3>
            <div className="bg-green-50 rounded-lg p-6 mb-4">
              <p className="text-gray-800 leading-relaxed mb-4">
                Yaşlanan nüfus ve pandemi sonrası sağlık sistemlerinin
                güçlendirilmesi ihtiyacı, sağlık sektöründe büyük fırsatlar
                yaratıyor.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Kritik İhtiyaç Alanları:
                  </h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Hemşirelik (€35,000-60,000)</li>
                    <li>• Fizyoterapi (€40,000-65,000)</li>
                    <li>• Radyoloji Teknisyeni (€38,000-55,000)</li>
                    <li>• Yaşlı Bakım Uzmanı (€30,000-45,000)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Avantajlar:
                  </h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• İş güvencesi çok yüksek</li>
                    <li>• Sosyal haklar geniş</li>
                    <li>• Kariyer gelişim imkanları</li>
                    <li>• Toplumsal saygınlık</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Engineering Sector */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
              <Wrench className="w-6 h-6" />
              Mühendislik Sektörü
            </h3>
            <div className="bg-orange-50 rounded-lg p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Yeşil enerji dönüşümü ve altyapı modernizasyonu projeleri,
                mühendislik alanında yoğun talep yaratıyor.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Yüksek Talep Alanları:
                  </h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Yenilenebilir Enerji Mühendisi</li>
                    <li>• Elektrik Mühendisi</li>
                    <li>• Makine Mühendisi</li>
                    <li>• İnşaat Mühendisi</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Gelişen Alanlar:
                  </h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Sürdürülebilir teknolojiler</li>
                    <li>• Otomotiv elektrifikasyonu</li>
                    <li>• Akıllı şehir projeleri</li>
                    <li>• Endüstri 4.0 uygulamaları</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Countries */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <MapPin className="w-8 h-8 text-red-500" />
            Ülke Bazında İş Fırsatları
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {topCountries.map((country, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {country.name}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      country.demand === "Çok Yüksek"
                        ? "bg-red-100 text-red-800"
                        : country.demand === "Yüksek"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {country.demand}
                  </span>
                </div>
                <p className="text-gray-600">
                  <strong>Öne çıkan sektörler:</strong> {country.sectors}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills and Requirements */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Avrupa'da Çalışmak İçin Gereksinimler
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                Dil Becerileri
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>İngilizce:</strong> B2 seviyesi minimum, çoğu
                    teknoloji ve finans pozisyonu için yeterli
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Almanca:</strong> Almanya, Avusturya, İsviçre için
                    kritik önem taşıyor
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Yerel Dil:</strong> Sağlık ve eğitim sektörlerinde
                    çoğunlukla zorunlu
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">
                Yasal Gereksinimler
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>AB Vatandaşları:</strong> Herhangi bir AB ülkesinde
                    serbestçe çalışabilir
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>AB Dışı Vatandaşlar:</strong> Çalışma izni ve/veya
                    Blue Card gereksinimi
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Diploma Denkliği:</strong> Mesleki
                    sertifikasyonların tanınması süreçleri
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              💼 EU Blue Card Avantajları
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-700">
                <li>• Hızlı başvuru süreci (90 gün)</li>
                <li>• Aile birleşimi hakkı</li>
                <li>• AB içinde hareket serbestisi</li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li>• Kalıcı oturma yoluna açılan kapı</li>
                <li>• Yüksek maaş garantisi</li>
                <li>• Sosyal güvenlik hakları</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Salary Information */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <Euro className="w-8 h-8 text-green-500" />
            Maaş Bilgileri ve Yaşam Standartları
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                    Ülke
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                    Ortalama Maaş
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                    Yaşam Maliyeti
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                    Vergi Oranı
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    Almanya
                  </td>
                  <td className="border border-gray-300 px-4 py-3">€47,000</td>
                  <td className="border border-gray-300 px-4 py-3 text-orange-600">
                    Orta-Yüksek
                  </td>
                  <td className="border border-gray-300 px-4 py-3">%25-45</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    Hollanda
                  </td>
                  <td className="border border-gray-300 px-4 py-3">€52,000</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">
                    Yüksek
                  </td>
                  <td className="border border-gray-300 px-4 py-3">%37-52</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    İsveç
                  </td>
                  <td className="border border-gray-300 px-4 py-3">€43,000</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">
                    Yüksek
                  </td>
                  <td className="border border-gray-300 px-4 py-3">%30-55</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    İsviçre
                  </td>
                  <td className="border border-gray-300 px-4 py-3">€75,000</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">
                    Çok Yüksek
                  </td>
                  <td className="border border-gray-300 px-4 py-3">%15-40</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-yellow-800">
              <strong>Not:</strong> Maaş bilgileri brüt tutardır ve sektöre,
              deneyim seviyesine göre değişiklik gösterebilir. Yaşam maliyeti de
              şehire göre önemli farklılıklar göstermektedir.
            </p>
          </div>
        </section>

        {/* Tips for Success */}
        {/* <section className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl shadow-lg p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Avrupa'da Başarılı Olmak İçin İpuçları
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">🎯 Hazırlık Aşaması</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  LinkedIn profilinizi optimize edin ve Avrupa ağınızı
                  genişletin
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  Dil sertifikalarınızı güncel tutun (IELTS, TOEFL, Goethe vb.)
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  CV'nizi Europass formatına uyarlayın
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  Sektörünüze özel sertifikasyonlar alın
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">🚀 İş Arama Süreci</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  EURES (European Job Mobility Portal) kullanın
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  Ülkeye özgü iş platformlarında aktif olun
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  Networking etkinliklerine katılın
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  Headhunter şirketlerle iletişim kurun
                </li>
              </ul>
            </div>
          </div>
        </section> */}

        {/* Future Trends */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <TrendingUp className="w-8 h-8 text-purple-500" />
            Gelecekteki Trendler ve Fırsatlar
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                🤖 Yapay Zeka ve Otomasyon
              </h3>
              <p className="text-gray-700">
                AI ve makine öğrenmesi uzmanlarına olan talep katlanarak
                artıyor. Özellikle etik AI geliştirme, AI ile insan etkileşimi
                ve AI güvenliği alanlarında uzmanlaşanlar için büyük fırsatlar
                var.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                🌱 Yeşil Ekonomi
              </h3>
              <p className="text-gray-700">
                Karbon nötr hedefleri doğrultusunda sürdürülebilir teknoloji
                uzmanları, çevre mühendisleri ve yeşil enerji projesi
                yöneticilerine olan ihtiyaç hızla artıyor.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                💻 Hibrit Çalışma Modeli
              </h3>
              <p className="text-gray-700">
                Pandemi sonrası hibrit çalışma modelini destekleyen uzaktan
                çalışma araçları uzmanları, dijital işbirliği platformu
                geliştiricileri ve sanal takım yöneticilerine talep artıyor.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Sonuç ve Öneriler
          </h2>
          <div className="prose prose-lg max-w-none text-gray-300">
            <p className="leading-relaxed mb-6">
              Avrupa iş piyasası, doğru beceriler ve hazırlıkla büyük fırsatlar
              sunan dinamik bir ekosistemdir. Teknoloji, sağlık, mühendislik ve
              finans sektörlerindeki yoğun talep, nitelikli profesyoneller için
              cazip kariyer yolları açmaktadır.
            </p>
            <p className="leading-relaxed mb-6">
              Başarılı olmak için sürekli öğrenme, dil becerilerinizi geliştirme
              ve sektörünüzdeki trendleri takip etme konularına odaklanmanız
              kritik önem taşımaktadır. Ayrıca, kültürel adaptasyon ve yerel iş
              kültürünü anlama da uzun vadeli başarınız için hayati unsurlardır.
            </p>
            <div className="text-center mt-8">
              <p className="text-xl font-semibold text-blue-300">
                Avrupa'daki kariyer yolculuğunuzda başarılar dileriz! 🚀
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/*  <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="mb-4">
            Bu makale 2025 yılının güncel verileri kullanılarak hazırlanmıştır.
          </p>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-400">
            <span>Kariyer Rehberi</span>
            <span>•</span>
            <span>Güncel İş Fırsatları</span>
            <span>•</span>
            <span>Avrupa İş Piyasası</span>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
