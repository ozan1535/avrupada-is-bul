"use client";
import React, { useState } from "react";
import {
  CheckCircle,
  FileText,
  Globe,
  Users,
  Shield,
  TrendingUp,
  Target,
  MapPin,
  Euro,
  Award,
} from "lucide-react";

export default function Blog2() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: "CV ve Motivasyon Mektubu Optimizasyonu",
      icon: FileText,
      color: "bg-blue-500",
      description:
        "Avrupa standartlarına uygun profesyonel başvuru dokümanları hazırlayın",
    },
    {
      number: 2,
      title: "Dil Yeterliliğinizi Belgelendirin",
      icon: Globe,
      color: "bg-green-500",
      description:
        "Hedef ülkenin dilinde yeterli seviyeye sahip olduğunuzu kanıtlayın",
    },
    {
      number: 3,
      title: "Diploma ve Sertifikalarınızı Denklik Ettirin",
      icon: Award,
      color: "bg-purple-500",
      description: "Eğitim belgelerinizin Avrupa'da geçerli olmasını sağlayın",
    },
    {
      number: 4,
      title: "Hedef Ülkenin İş Kültürünü Öğrenin",
      icon: Users,
      color: "bg-orange-500",
      description: "Yerel iş kültürü ve beklentilerini anlayarak uyum sağlayın",
    },
    {
      number: 5,
      title: "Yasal Süreçleri ve İzinleri Araştırın",
      icon: Shield,
      color: "bg-red-500",
      description:
        "Çalışma izinleri ve yasal gereksinimlerle ilgili bilgi edinin",
    },
    {
      number: 6,
      title: "Professional Network Oluşturun",
      icon: TrendingUp,
      color: "bg-indigo-500",
      description:
        "Sektörünüzdeki profesyonellerle bağlantı kurun ve ağınızı genişletin",
    },
    {
      number: 7,
      title: "Mülakat Süreçlerine Hazırlanın",
      icon: Target,
      color: "bg-pink-500",
      description: "Avrupa tarzı mülakat tekniklerini öğrenin ve pratik yapın",
    },
  ];

  const StepIcon = steps[activeStep - 1].icon;

  return (
    <div className="min-h-screen bg-gray-50 sm:mt-16">
      {/* Header */}
      {/* <header className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Kariyer Rehberi
            </h1>
            <div className="flex space-x-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Rehber
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                2025
              </span>
            </div>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Avrupa'da İş Ararken Dikkat Etmeniz Gereken
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300">
            7 Önemli Adım
          </h2>
          <p className="text-xl text-indigo-100">
            Başarılı bir kariyer için adım adım rehberiniz
          </p>
          {/* <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>20 dk okuma</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Kariyer Uzmanı</span>
            </div>
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              <span>Pratik İpuçları</span>
            </div>
          </div> */}
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Neden Bu Rehber Önemli?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Avrupa'da iş aramak, sadece doğru pozisyonu bulmaktan çok daha
              fazlasını gerektirir. Farklı kültürler, yasal düzenlemeler ve
              beklentilerle dolu bu süreçte, doğru adımları takip etmek
              başarınızı önemli ölçüde artıracaktır.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bu rehberde, binlerce başarılı profesyonelin deneyimlerinden yola
              çıkarak hazırlanmış 7 kritik adımı bulacaksınız. Her adım, Avrupa
              iş piyasasının gerçekleri doğrultusunda şekillendirilmiş praktik
              öneriler içermektedir.
            </p>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
              <p className="text-indigo-800 font-medium">
                💡 Bu rehberi takip eden adayların %75'i ilk 6 ay içinde iş
                bulma başarısı göstermektedir.
              </p>
            </div>
          </div>
        </section>

        {/* Step Navigation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            7 Adımda Başarıya Giden Yol
          </h2>
          <div className="grid md:grid-cols-7 gap-4 mb-8">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(step.number)}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  activeStep === step.number
                    ? `${step.color} text-white shadow-lg scale-105`
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
                }`}
              >
                <div className="text-center">
                  <step.icon className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">{step.number}</div>
                  <div className="text-xs font-medium leading-tight">
                    {step.title.split(" ").slice(0, 2).join(" ")}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Active Step Content */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`${
                steps[activeStep - 1].color
              } p-3 rounded-xl text-white`}
            >
              <StepIcon className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Adım {activeStep}: {steps[activeStep - 1].title}
              </h2>
              <p className="text-gray-600 mt-2">
                {steps[activeStep - 1].description}
              </p>
            </div>
          </div>

          {/* Step 1 Content */}
          {activeStep === 1 && (
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  Europass CV Formatı
                </h3>
                <p className="text-blue-700 mb-4">
                  Avrupa Birliği'nin resmi CV formatı olan Europass, tüm AB
                  ülkelerinde tanınan standart bir formattır.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">
                      ✅ Mutlaka Dahil Edin:
                    </h4>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Kişisel bilgiler ve iletişim</li>
                      <li>• İş deneyimi (kronolojik sıra)</li>
                      <li>• Eğitim geçmişi</li>
                      <li>• Dil becerileri (CEFR seviyesi)</li>
                      <li>• Dijital beceriler</li>
                      <li>• Sertifikalar ve başarılar</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">
                      ❌ Kesinlikle Eklemeyin:
                    </h4>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Fotoğraf (özel talep olmadıkça)</li>
                      <li>• Yaş, medeni durum</li>
                      <li>• Maaş beklentisi</li>
                      <li>• Kişisel hobiler (alakasızsa)</li>
                      <li>• Referans kişi bilgileri</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Motivasyon Mektubu (Cover Letter)
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">
                      1. Paragraf - Giriş
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Hangi pozisyon için başvurduğunuzu ve bu fırsatı nasıl
                      öğrendiğinizi belirtin.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800">
                      2. Paragraf - Değer Önerisi
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Şirketin ihtiyaçlarını nasıl karşılayabileceğinizi konkret
                      örneklerle açıklayın.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-800">
                      3. Paragraf - Sonuç
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Görüşme talebinizi belirtip, profesyonel bir kapanış
                      yapın.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2 Content */}
          {activeStep === 2 && (
            <div className="space-y-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  CEFR Dil Seviyeleri
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">
                      A Seviyesi (Başlangıç)
                    </h4>
                    <ul className="text-green-700 space-y-1 text-sm">
                      <li>• A1: Temel günlük ifadeler</li>
                      <li>• A2: Basit durumlar, alışveriş</li>
                      <li>• Genellikle iş için yeterli değil</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">
                      B Seviyesi (Orta)
                    </h4>
                    <ul className="text-green-700 space-y-1 text-sm">
                      <li>• B1: Tanıdık konularda anlayış</li>
                      <li>• B2: Karmaşık metinleri anlama</li>
                      <li>• Çoğu iş pozisyonu için minimum</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">
                      C Seviyesi (İleri)
                    </h4>
                    <ul className="text-green-700 space-y-1 text-sm">
                      <li>• C1: Akıcı ve esnek kullanım</li>
                      <li>• C2: Ana dil seviyesinde</li>
                      <li>• Üst düzey pozisyonlar için ideal</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">
                    📋 Kabul Edilen Sertifikalar
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-blue-700">
                        İngilizce:
                      </h4>
                      <p className="text-blue-600 text-sm">
                        IELTS, TOEFL, Cambridge (FCE, CAE, CPE)
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700">Almanca:</h4>
                      <p className="text-blue-600 text-sm">
                        Goethe, TestDaF, DSH
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700">
                        Fransızca:
                      </h4>
                      <p className="text-blue-600 text-sm">DELF, DALF, TCF</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-yellow-800 mb-3">
                    ⚡ Hızlı Gelişim İpuçları
                  </h3>
                  <ul className="text-yellow-700 space-y-2 text-sm">
                    <li>• Hedef ülkenin medyasını takip edin</li>
                    <li>• Online language exchange platformları kullanın</li>
                    <li>• Sektörünüze özgü terminolojiyi öğrenin</li>
                    <li>• Video konferans görüşmelerini pratik edin</li>
                    <li>• Business English kurslarına katılın</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Step 3 Content */}
          {activeStep === 3 && (
            <div className="space-y-6">
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-800 mb-4">
                  Diploma Denklik Süreçleri
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-3">
                      🎓 Akademik Denklik
                    </h4>
                    <ul className="text-purple-700 space-y-2 text-sm">
                      <li>
                        • NARIC (National Academic Recognition Information
                        Centres)
                      </li>
                      <li>• Her ülkenin kendi denklik kurumu var</li>
                      <li>• İşlem süresi: 2-6 ay</li>
                      <li>• Maliyet: €50-300 arası</li>
                      <li>
                        • Gerekli belgeler: Diploma, transkript, çeviriler
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-3">
                      🔧 Mesleki Denklik
                    </h4>
                    <ul className="text-purple-700 space-y-2 text-sm">
                      <li>• Düzenlenmiş meslekler için zorunlu</li>
                      <li>• Doktor, hemşire, mimar, mühendis vb.</li>
                      <li>• Mesleki sınav gerekebilir</li>
                      <li>• Staj/deneyim şartı olabilir</li>
                      <li>• Ülkeye göre farklı prosedürler</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Ülke Bazında Denklik Prosedürleri
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                          Ülke
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                          Denklik Kurumu
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                          Süre
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                          Maliyet
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">
                          Almanya
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          ZAB
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          2-4 ay
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          €100-600
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">
                          Hollanda
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          NUFFIC
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          4-12 hafta
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          €150-300
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">
                          Fransa
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          CIEP
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          2-6 ay
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          €70-200
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Step 4 Content */}
          {activeStep === 4 && (
            <div className="space-y-6">
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-orange-800 mb-4">
                  Avrupa İş Kültürü Temelleri
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">
                      🇩🇪 Alman İş Kültürü
                    </h4>
                    <ul className="text-orange-700 space-y-1 text-sm">
                      <li>• Dakiklik çok önemli</li>
                      <li>• Direkt iletişim</li>
                      <li>• Uzun vadeli planlama</li>
                      <li>• Hiyerarşiye saygı</li>
                      <li>• İş-özel yaşam ayrımı</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">
                      🇳🇱 Hollanda İş Kültürü
                    </h4>
                    <ul className="text-orange-700 space-y-1 text-sm">
                      <li>• Eşitlikçi yaklaşım</li>
                      <li>• Açık tartışma kültürü</li>
                      <li>• Konsensüs arayışı</li>
                      <li>• Samimi ortam</li>
                      <li>• Bisiklet kültürü</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">
                      🇸🇪 İskandinav Kültürü
                    </h4>
                    <ul className="text-orange-700 space-y-1 text-sm">
                      <li>• Esnek çalışma saatleri</li>
                      <li>• Takım ruhu</li>
                      <li>• Sürdürülebilirlik</li>
                      <li>• İnovasyon odaklı</li>
                      <li>• Kafé toplantıları</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">
                    📝 Temel İş Etiği
                  </h3>
                  <ul className="text-blue-700 space-y-2 text-sm">
                    <li>• Toplantılara zamanında katılım</li>
                    <li>• E-mail'lere hızlı cevap verme</li>
                    <li>• Kişisel sorumluluğunu alma</li>
                    <li>• Şeffaf iletişim kurma</li>
                    <li>• Sürekli öğrenme eğilimi</li>
                    <li>• Çeşitliliği değer olarak görme</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-800 mb-3">
                    ⚠️ Kaçınılması Gerekenler
                  </h3>
                  <ul className="text-red-700 space-y-2 text-sm">
                    <li>• Geç kalma ve mazeret üretme</li>
                    <li>• Aşırı kişisel paylaşımlar</li>
                    <li>• Hiyerarşiyi atlamak</li>
                    <li>• Yüksek sesle telefon konuşması</li>
                    <li>• İş saatleri dışında görüşme beklentisi</li>
                    <li>• Kültürel önyargıları dile getirme</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Step 5 Content */}
          {activeStep === 5 && (
            <div className="space-y-6">
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-800 mb-4">
                  Çalışma İzinleri ve Yasal Süreçler
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-3">
                      🇪🇺 AB Vatandaşları
                    </h4>
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>• Hiçbir çalışma izni gerekmez</li>
                      <li>• Serbestçe yaşama ve çalışma hakkı</li>
                      <li>• Sadece kimlik belgesi yeterli</li>
                      <li>• Sosyal güvenlik hakları otomatik</li>
                      <li>• Aile birleşimi kolaylığı</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-3">
                      🌍 AB Dışı Vatandaşlar
                    </h4>
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>• Çalışma izni zorunlu</li>
                      <li>• İş teklifi önce gerekli</li>
                      <li>• Blue Card için uygunluk</li>
                      <li>• Dil yeterliliği belgesi</li>
                      <li>• Sağlık sigortası mecburiyet</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  EU Blue Card Kriterleri
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">
                      ✅ Gereksinimler
                    </h4>
                    <ul className="text-blue-700 space-y-2 text-sm">
                      <li>• Üniversite diploması (3 yıllık minimum)</li>
                      <li>• Yüksek nitelikli iş teklifi</li>
                      <li>• Minimum maaş şartı (ülkeye göre değişir)</li>
                      <li>• Sağlık sigortası</li>
                      <li>• Temiz adli sicil kaydı</li>
                      <li>• Yeterli gelir belgesi</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">
                      🎯 Avantajları
                    </h4>
                    <ul className="text-blue-700 space-y-2 text-sm">
                      <li>• 4 yıla kadar geçerli</li>
                      <li>• Aile birleşimi hakkı</li>
                      <li>• AB içinde mobilite</li>
                      <li>• Kalıcı oturma yoluna açılım</li>
                      <li>• İşsizlik sigortasından yararlanma</li>
                      <li>• Eğitim hakları</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-4">
                  Maaş Şartları (2025)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-yellow-300">
                    <thead className="bg-yellow-100">
                      <tr>
                        <th className="border border-yellow-300 px-4 py-3 text-left font-semibold">
                          Ülke
                        </th>
                        <th className="border border-yellow-300 px-4 py-3 text-left font-semibold">
                          Blue Card Minimum Maaş
                        </th>
                        <th className="border border-yellow-300 px-4 py-3 text-left font-semibold">
                          Eksik Meslek Minimum
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-yellow-300 px-4 py-3 font-medium">
                          Almanya
                        </td>
                        <td className="border border-yellow-300 px-4 py-3">
                          €56,800
                        </td>
                        <td className="border border-yellow-300 px-4 py-3">
                          €44,304
                        </td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="border border-yellow-300 px-4 py-3 font-medium">
                          Hollanda
                        </td>
                        <td className="border border-yellow-300 px-4 py-3">
                          €59,508
                        </td>
                        <td className="border border-yellow-300 px-4 py-3">
                          €45,523
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Step 6 Content */}
          {activeStep === 6 && (
            <div className="space-y-6">
              <div className="bg-indigo-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-indigo-800 mb-4">
                  Professional Network Stratejileri
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-indigo-800 mb-3">
                      🔗 LinkedIn Optimizasyonu
                    </h4>
                    <ul className="text-indigo-700 space-y-2 text-sm">
                      <li>• Profesyonel profil fotoğrafı</li>
                      <li>• Anahtar kelime optimizasyonu</li>
                      <li>• Düzenli içerik paylaşımı</li>
                      <li>• Sektör influencerlarını takip</li>
                      <li>• Grup tartışmalarına katılım</li>
                      <li>• Referans ve onay toplama</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-800 mb-3">
                      🤝 Offline Networking
                    </h4>
                    <ul className="text-indigo-700 space-y-2 text-sm">
                      <li>• Sektörel konferanslara katılım</li>
                      <li>• Mesleki derneklere üyelik</li>
                      <li>• Meetup etkinlikleri</li>
                      <li>• Alumni ağlarını kullanma</li>
                      <li>• Coworking spacelerde çalışma</li>
                      <li>• Mentorlar bulma</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  Networking İpuçları
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-800">
                      Değer Yaratın
                    </h4>
                    <p className="text-green-700 text-sm">
                      Sadece iş aramayın, karşınızdaki kişiye nasıl değer
                      katabileceğinizi düşünün.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-green-800">Takip Edin</h4>
                    <p className="text-green-700 text-sm">
                      Tanıştığınız kişilerle 48 saat içinde iletişime geçin.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-green-800">
                      Sabırlı Olun
                    </h4>
                    <p className="text-green-700 text-sm">
                      Network oluşturma uzun vadeli bir süreçtir, hemen sonuç
                      beklemeyin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 7 Content */}
          {activeStep === 7 && (
            <div className="space-y-6">
              <div className="bg-pink-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-pink-800 mb-4">
                  Mülakat Türleri ve Hazırlık
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-pink-200">
                    <h4 className="font-semibold text-pink-800 mb-2">
                      📞 Telefon Mülakatı
                    </h4>
                    <ul className="text-pink-700 space-y-1 text-sm">
                      <li>• 15-30 dakika sürer</li>
                      <li>• Temel bilgiler sorulur</li>
                      <li>• Dil seviyesi test edilir</li>
                      <li>• Maaş beklentisi sorulabilir</li>
                      <li>• Sessiz ortam önemli</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-pink-200">
                    <h4 className="font-semibold text-pink-800 mb-2">
                      💻 Video Mülakat
                    </h4>
                    <ul className="text-pink-700 space-y-1 text-sm">
                      <li>• Teknik altyapıyı test edin</li>
                      <li>• Profesyonel arka plan</li>
                      <li>• Göz teması kurma</li>
                      <li>• Ses kalitesi kontrol</li>
                      <li>• Yedek plan hazırlığı</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-pink-200">
                    <h4 className="font-semibold text-pink-800 mb-2">
                      🏢 Yüz Yüze Mülakat
                    </h4>
                    <ul className="text-pink-700 space-y-1 text-sm">
                      <li>• Profesyonel kıyafet</li>
                      <li>• 15 dakika erkenden varış</li>
                      <li>• Firma hakkında araştırma</li>
                      <li>• Vücut dili önemi</li>
                      <li>• Sorularınızı hazırlayın</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">
                    💬 Sık Sorulan Sorular
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-blue-700 text-sm">
                        Kendinizi tanıtır mısınız?
                      </h4>
                      <p className="text-blue-600 text-xs">
                        2-3 dakikalık özet, kariyerinize odaklı
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 text-sm">
                        Neden bu şirketi seçtiniz?
                      </h4>
                      <p className="text-blue-600 text-xs">
                        Şirket araştırmanızı gösterin
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 text-sm">
                        Zayıf yönünüz nedir?
                      </h4>
                      <p className="text-blue-600 text-xs">
                        Gerçek zayıflık + gelişim planı
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 text-sm">
                        5 yıl sonra nerede görüyorsunuz?
                      </h4>
                      <p className="text-blue-600 text-xs">
                        Gerçekçi ve şirketle uyumlu hedefler
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-yellow-800 mb-3">
                    🎯 STAR Tekniği
                  </h3>
                  <div className="space-y-2">
                    <div className="border-l-4 border-yellow-500 pl-3">
                      <h4 className="font-semibold text-yellow-800 text-sm">
                        Situation (Durum)
                      </h4>
                      <p className="text-yellow-700 text-xs">
                        Karşılaştığınız durumu açıklayın
                      </p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-3">
                      <h4 className="font-semibold text-yellow-800 text-sm">
                        Task (Görev)
                      </h4>
                      <p className="text-yellow-700 text-xs">
                        Sorumluluğunuzu belirtin
                      </p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-3">
                      <h4 className="font-semibold text-yellow-800 text-sm">
                        Action (Eylem)
                      </h4>
                      <p className="text-yellow-700 text-xs">
                        Attığınız adımları detaylandırın
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-3">
                      <h4 className="font-semibold text-yellow-800 text-sm">
                        Result (Sonuç)
                      </h4>
                      <p className="text-yellow-700 text-xs">
                        Elde ettiğiniz başarıları sayısallaştırın
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Success Stories */}
        <section className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl shadow-lg p-8 text-black mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Başarı Hikayeleri
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-2xl">
                  👨‍💻
                </div>
                <div>
                  <h3 className="font-bold">Mehmet A.</h3>
                  <p className="text-green-400 text-sm">Software Developer</p>
                </div>
              </div>
              <p className="text-sm text-green-500">
                "Bu rehberi takip ettikten 4 ay sonra Berlin'de düş işimi
                buldum. Özellikle networking ve mülakat hazırlığı çok faydalı
                oldu."
              </p>
            </div>

            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center text-2xl">
                  👩‍⚕️
                </div>
                <div>
                  <h3 className="font-bold">Ayşe K.</h3>
                  <p className="text-green-400 text-sm">Nurse</p>
                </div>
              </div>
              <p className="text-sm text-green-500">
                "Denklik süreçlerini bu rehber sayesinde doğru yönettim.
                Amsterdam'da hemşire olarak çalışmaya başladım."
              </p>
            </div>

            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-2xl">
                  👨‍🔧
                </div>
                <div>
                  <h3 className="font-bold">Can T.</h3>
                  <p className="text-green-400 text-sm">Engineer</p>
                </div>
              </div>
              <p className="text-sm text-green-500">
                "CV optimizasyonu ve Blue Card başvuru sürecim çok hızlı geçti.
                Münih'te mühendis olarak işe başladım."
              </p>
            </div>
          </div>
        </section>

        {/* Action Plan */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Kişiselleştirilmiş Aksiyon Planı
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                📅 İlk 30 Gün
              </h3>
              <div className="space-y-3">
                {[
                  "CV'nizi Europass formatına dönüştürün",
                  "Dil sertifikanızı güncelleyin veya alın",
                  "LinkedIn profilinizi optimize edin",
                  "Hedef ülkenin iş kültürünü araştırın",
                  "Diploma denklik sürecini başlatın",
                ].map((task, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{task}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-purple-600 mb-4">
                🚀 İlk 60 Gün
              </h3>
              <div className="space-y-3">
                {[
                  "Professional network oluşturmaya başlayın",
                  "Sektörel etkinliklere katılım planlayın",
                  "Mülakat pratiği yapın",
                  "Blue Card şartlarını kontrol edin",
                  "İş başvurularınızı yapmaya başlayın",
                ].map((task, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              💡 Unutmayın: Bu süreç bir maraton, sprint değil!
            </h3>
            <p className="text-gray-700 text-center">
              Her adımı sabırla tamamlayın ve sürekli kendinizi geliştirmeye
              odaklanın. Başarı sadece doğru iş bulmak değil, aynı zamanda
              sürdürülebilir bir kariyer inşa etmektir.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Yolculuğunuzun Başlangıcı
          </h2>
          <div className="prose prose-lg max-w-none text-gray-300">
            <p className="leading-relaxed mb-6 text-center">
              Avrupa'da iş bulma sürecinde başarılı olmak, doğru stratejiler ve
              sistematik bir yaklaşım gerektirir. Bu 7 adımı takip ederek,
              hedeflediğiniz pozisyona ulaşma şansınızı önemli ölçüde
              artıracaksınız.
            </p>
            <p className="leading-relaxed mb-6 text-center">
              Unutmayın ki her adım, bir sonraki adım için temel oluşturur.
              Sabırlı olun, sürekli öğrenin ve azimle hedefinize doğru
              ilerleyin. Başarı sizin elinizdedir!
            </p>
            <div className="text-center mt-8">
              <p className="text-2xl font-bold text-yellow-400 mb-4">
                Başarılı bir Avrupa kariyeri için yolculuğunuz başlıyor! 🌟
              </p>
              <div className="flex justify-center items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Avrupa</span>
                <span>•</span>
                <Euro className="w-4 h-4" />
                <span>Yeni Fırsatlar</span>
                <span>•</span>
                <TrendingUp className="w-4 h-4" />
                <span>Kariyer Büyüme</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/*  <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4">
            Bu rehber, Avrupa iş piyasasının 2025 koşulları göz önünde
            bulundurularak hazırlanmıştır.
          </p>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-400">
            <span>Kariyer Rehberi</span>
            <span>•</span>
            <span>İş Arama Stratejileri</span>
            <span>•</span>
            <span>Avrupa Kariyer Fırsatları</span>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
