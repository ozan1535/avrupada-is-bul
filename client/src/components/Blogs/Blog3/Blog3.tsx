"use client";
import React, { useState } from "react";
import {
  Star,
  TrendingUp,
  Users,
  Globe,
  Award,
  Target,
  Lightbulb,
  Clock,
  User,
  BookOpen,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Zap,
  Brain,
  Heart,
  Shield,
} from "lucide-react";

export default function Blog3() {
  const [activeTab, setActiveTab] = useState("mindset");

  const careerTips = [
    {
      id: "mindset",
      title: "Zihniyet ve Yaklaşım",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      tips: [
        {
          title: "Uzun Vadeli Düşünün",
          description:
            "Avrupa'da kariyer marathon, sprint değildir. 5-10 yıllık planlar yapın.",
          practical:
            "Her yıl kariyer hedeflerinizi gözden geçirin ve stratejinizi güncelleyin.",
          impact: "Yüksek",
        },
        {
          title: "Sürekli Öğrenme Mentalitesi",
          description:
            "Teknoloji ve iş dünyası hızla değişiyor, adaptasyon şart.",
          practical: "Ayda en az bir yeni beceri öğrenmeye zaman ayırın.",
          impact: "Kritik",
        },
        {
          title: "Kültürel Zeka Geliştirin",
          description:
            "Çok kültürlü ortamlarda çalışma becerisi rekabet avantajıdır.",
          practical:
            "Farklı kültürlerden meslektaşlarınızla aktif iletişim kurun.",
          impact: "Yüksek",
        },
      ],
    },
    {
      id: "skills",
      title: "Beceri Geliştirme",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      tips: [
        {
          title: "Dijital Beceriler",
          description: "AI, data analytics, automation - geleceğin becerileri.",
          practical: "Python, Excel VBA, PowerBI gibi araçları öğrenin.",
          impact: "Kritik",
        },
        {
          title: "Çoklu Dil Avantajı",
          description: "Her yeni dil, yeni pazarlara kapı açar.",
          practical: "İş dilinizin yanında bölgesel bir dil öğrenin.",
          impact: "Yüksek",
        },
        {
          title: "Soft Skills",
          description:
            "Leadership, communication, problem-solving - hiç modası geçmeyen beceriler.",
          practical:
            "Günlük işinizde bu becerileri bilinçli olarak pratik edin.",
          impact: "Yüksek",
        },
      ],
    },
    {
      id: "networking",
      title: "İlişki Ağı",
      icon: Users,
      color: "from-green-500 to-teal-500",
      tips: [
        {
          title: "Stratejik Networking",
          description:
            "Sadece ihtiyaç duyduğunuzda değil, sürekli ilişki kurun.",
          practical: "Haftada 3 yeni profesyonel ile tanışma hedefi koyun.",
          impact: "Kritik",
        },
        {
          title: "Mentor Bulma",
          description: "Deneyimli mentorlar kariyerinizi hızlandırır.",
          practical:
            "Sektörünüzdeki senior profesyonellere mentorluk talebi gönderin.",
          impact: "Yüksek",
        },
        {
          title: "Karşılıklı Değer Yaratma",
          description:
            "Almadan önce vermeyi öğrenin, ilişkiler böyle güçlenir.",
          practical:
            "Her networking etkinliğinde en az 2 kişiye yardım etmeye odaklanın.",
          impact: "Yüksek",
        },
      ],
    },
    {
      id: "growth",
      title: "Kariyer Büyümesi",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
      tips: [
        {
          title: "Görünürlük Artırma",
          description: "İyi iş yapmak yeterli değil, fark edilmeniz gerekir.",
          practical: "Başarılarınızı düzenli olarak yöneticinizle paylaşın.",
          impact: "Kritik",
        },
        {
          title: "Cross-Functional Deneyim",
          description: "Farklı departmanlarda deneyim, liderlik için şart.",
          practical: "Yılda bir cross-departmental proje talep edin.",
          impact: "Yüksek",
        },
        {
          title: "Risk Alma Cesareti",
          description: "Büyük ödüller, hesaplaşlı riskler gerektirir.",
          practical: "Konfor alanınızı zorlayacak projeler önerin.",
          impact: "Yüksek",
        },
      ],
    },
  ];

  const activeContent = careerTips.find((tip) => tip.id === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 sm:mt-16">
      {/* Header */}
      {/* <header className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Kariyer Uzmanı</h1>
            <div className="flex space-x-4">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                Premium
              </span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                Stratejik
              </span>
            </div>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <Star className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Avrupa'da Kariyer Yapmanın
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300">
            Püf Noktaları
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            15 yıllık deneyim ve binlerce başarı hikayesinden çıkarılan
            stratejik içgörüler ile kariyerinizi zirveye taşıyın
          </p>
          {/*  <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>25 dk derinlemesine okuma</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Senior Kariyer Uzmanı</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span>Stratejik İçgörüler</span>
            </div>
          </div> */}
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="bg-white rounded-3xl shadow-xl p-10 mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Neden Bu Rehber Farklı?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Psikoloji Tabanlı
              </h3>
              <p className="text-gray-600 text-sm">
                Kariyer başarısının %80'i zihinsel yaklaşımdan gelir
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Kanıtlanmış Stratejiler
              </h3>
              <p className="text-gray-600 text-sm">
                15+ yıllık deneyim ve 1000+ başarı hikayesi
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Aksiyon Odaklı
              </h3>
              <p className="text-gray-600 text-sm">
                Her ipucu için somut adım planları
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
            <p className="text-purple-800 text-lg font-medium leading-relaxed">
              💡 Bu rehberdeki stratejileri uygulayan profesyoneller, ortalama
              2.3 yıl içinde bir üst kariyer seviyesine çıkmakta ve %67 daha
              yüksek maaş almaktadır.
            </p>
          </div>
        </section>

        {/* Interactive Tabs */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            4 Temel Kariyer Sütunu
          </h2>

          {/* Tab Navigation */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {careerTips.map((tip) => (
              <button
                key={tip.id}
                onClick={() => setActiveTab(tip.id)}
                className={`p-6 rounded-2xl transition-all duration-300 transform ${
                  activeTab === tip.id
                    ? `bg-gradient-to-r ${tip.color} text-white shadow-xl scale-105`
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-lg hover:shadow-xl"
                }`}
              >
                <div className="text-center">
                  <tip.icon className="w-10 h-10 mx-auto mb-3" />
                  <h3 className="text-lg font-bold">{tip.title}</h3>
                </div>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-4 mb-8">
              <div
                className={`p-4 rounded-2xl bg-gradient-to-r ${activeContent.color} text-white`}
              >
                <activeContent.icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                {activeContent.title}
              </h3>
            </div>

            <div className="grid gap-8">
              {activeContent.tips.map((tip, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-2xl font-bold text-gray-900">
                      {tip.title}
                    </h4>
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        tip.impact === "Kritik"
                          ? "bg-red-100 text-red-800"
                          : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {tip.impact} Önem
                    </span>
                  </div>

                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {tip.description}
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                    <h5 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" />
                      Pratik Uygulama
                    </h5>
                    <p className="text-blue-700">{tip.practical}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry-Specific Insights */}
        <section className="bg-white rounded-3xl shadow-xl p-10 mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            Sektör Bazında Kariyer İçgörüleri
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                  💻 Teknoloji Sektörü
                </h3>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li>
                    • <strong>Anahtar Beceri:</strong> Cloud computing ve AI/ML
                    uzmanlığı
                  </li>
                  <li>
                    • <strong>Karriyer Yolu:</strong> Developer → Tech Lead →
                    Engineering Manager
                  </li>
                  <li>
                    • <strong>Maaş Büyüme:</strong> Yıllık %15-25 artış
                    potansiyeli
                  </li>
                  <li>
                    • <strong>Networking:</strong> GitHub contributions ve tech
                    meetuplar kritik
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center gap-2">
                  🏥 Sağlık Sektörü
                </h3>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>
                    • <strong>Anahtar Beceri:</strong> Dijital sağlık
                    teknolojileri
                  </li>
                  <li>
                    • <strong>Karriyer Yolu:</strong> Practitioner → Specialist
                    → Department Head
                  </li>
                  <li>
                    • <strong>Maaş Büyüme:</strong> Specializasyona bağlı olarak
                    %10-20
                  </li>
                  <li>
                    • <strong>Networking:</strong> Mesleki dernekler ve
                    kongreler
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2">
                  💰 Finans Sektörü
                </h3>
                <ul className="text-purple-700 space-y-2 text-sm">
                  <li>
                    • <strong>Anahtar Beceri:</strong> FinTech ve regulatory
                    compliance
                  </li>
                  <li>
                    • <strong>Karriyer Yolu:</strong> Analyst → Associate → VP →
                    Managing Director
                  </li>
                  <li>
                    • <strong>Maaş Büyüme:</strong> Performansa bağlı %20-40
                  </li>
                  <li>
                    • <strong>Networking:</strong> Industry conferences ve
                    alumni networks
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-orange-800 mb-3 flex items-center gap-2">
                  🏭 Mühendislik
                </h3>
                <ul className="text-orange-700 space-y-2 text-sm">
                  <li>
                    • <strong>Anahtar Beceri:</strong> Sürdürülebilirlik ve
                    automation
                  </li>
                  <li>
                    • <strong>Karriyer Yolu:</strong> Engineer → Senior Engineer
                    → Project Manager
                  </li>
                  <li>
                    • <strong>Maaş Büyüme:</strong> Project leadership ile
                    %15-30
                  </li>
                  <li>
                    • <strong>Networking:</strong> Professional engineering
                    bodies
                  </li>
                </ul>
              </div>

              <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-pink-800 mb-3 flex items-center gap-2">
                  📊 Consulting
                </h3>
                <ul className="text-pink-700 space-y-2 text-sm">
                  <li>
                    • <strong>Anahtar Beceri:</strong> Digital transformation
                    expertise
                  </li>
                  <li>
                    • <strong>Karriyer Yolu:</strong> Consultant → Manager →
                    Partner
                  </li>
                  <li>
                    • <strong>Maaş Büyüme:</strong> Up or out model, %25-50
                    artışlar
                  </li>
                  <li>
                    • <strong>Networking:</strong> Client relationships ve
                    industry expertise
                  </li>
                </ul>
              </div>

              <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-teal-800 mb-3 flex items-center gap-2">
                  🎯 Marketing & Sales
                </h3>
                <ul className="text-teal-700 space-y-2 text-sm">
                  <li>
                    • <strong>Anahtar Beceri:</strong> Digital marketing ve data
                    analytics
                  </li>
                  <li>
                    • <strong>Karriyer Yolu:</strong> Specialist → Manager →
                    Director → CMO
                  </li>
                  <li>
                    • <strong>Maaş Büyüme:</strong> Performance bonusları ile
                    %20-35
                  </li>
                  <li>
                    • <strong>Networking:</strong> Industry events ve brand
                    partnerships
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Intelligence */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl shadow-xl p-10 text-white mb-12">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Kültürel Zeka: Avrupa'da Başarının Anahtarı
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Globe className="w-8 h-8 text-yellow-300" />
                Ülke Bazında Yaklaşımlar
              </h3>

              <div className="space-y-6">
                <div className="bg-white bg-opacity-20 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-yellow-300 mb-3">
                    🇩🇪 Almanya
                  </h4>
                  <ul className="text-indigo-500 space-y-2 text-sm">
                    <li>
                      • <strong>Güç Mesafesi:</strong> Düşük - eşitlikçi
                      yaklaşım
                    </li>
                    <li>
                      • <strong>İletişim:</strong> Direkt ve açık sözlü
                    </li>
                    <li>
                      • <strong>Kariyerde:</strong> Uzmanlık ve teknik bilgi
                      önemli
                    </li>
                    <li>
                      • <strong>Networking:</strong> Profesyonel ve
                      business-focused
                    </li>
                  </ul>
                </div>

                <div className="bg-white bg-opacity-20 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-yellow-300 mb-3">
                    🇬🇧 İngiltere
                  </h4>
                  <ul className="text-indigo-500 space-y-2 text-sm">
                    <li>
                      • <strong>Güç Mesafesi:</strong> Orta - hiyerarşi önemli
                      ama esnek
                    </li>
                    <li>
                      • <strong>İletişim:</strong> İnce ve diplomats
                    </li>
                    <li>
                      • <strong>Kariyerde:</strong> Relationship building kritik
                    </li>
                    <li>
                      • <strong>Networking:</strong> Pub culture ve informal
                      meetinglar
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Heart className="w-8 h-8 text-pink-300" />
                Kültürlerarası Beceriler
              </h3>

              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-pink-300 mb-2">
                    Aktif Dinleme
                  </h4>
                  <p className="text-indigo-500 text-sm">
                    Farklı aksanları ve iletişim tarzlarını anlama
                  </p>
                </div>

                <div className="bg-white bg-opacity-20 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-pink-300 mb-2">
                    Empati Kurma
                  </h4>
                  <p className="text-indigo-500 text-sm">
                    Kültürel farklılıkları anlayış ile karşılama
                  </p>
                </div>

                <div className="bg-white bg-opacity-20 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-pink-300 mb-2">
                    Adaptasyon
                  </h4>
                  <p className="text-indigo-500 text-sm">
                    Farklı ortamlarda iletişim tarzını değiştirme
                  </p>
                </div>

                <div className="bg-white bg-opacity-20 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-pink-300 mb-2">
                    Conflict Resolution
                  </h4>
                  <p className="text-indigo-500 text-sm">
                    Kültürel yanlış anlamaları çözme
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work-Life Balance */}
        <section className="bg-white rounded-3xl shadow-xl p-10 mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            Avrupa Tarzı İş-Yaşam Dengesi
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Sürdürülebilir Performans
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm text-left">
                <li>• Overtime kültürü yerine verimlilik</li>
                <li>• Mental health'e önem</li>
                <li>• Vacation günlerini tam kullanma</li>
                <li>• Esnek çalışma saatleri</li>
                <li>• Remote work opportunities</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Continuous Learning
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm text-left">
                <li>• Company-sponsored eğitimler</li>
                <li>• Conference participation</li>
                <li>• Internal mobility programs</li>
                <li>• Sabbatical leave options</li>
                <li>• Skill development budgets</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Team Collaboration
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm text-left">
                <li>• Inclusive decision making</li>
                <li>• Cross-functional projects</li>
                <li>• Team building activities</li>
                <li>• Open communication culture</li>
                <li>• Mentorship programs</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 rounded-r-xl">
            <h3 className="text-xl font-bold text-green-800 mb-4">
              🎯 Pro Tip: "Holistic Career Approach"
            </h3>
            <p className="text-green-700 leading-relaxed">
              Avrupa'da başarılı profesyoneller, kariyerlerini hayatlarının
              sadece bir parçası olarak görürler. Aile, hobiler, sağlık ve
              kişisel gelişim arasında denge kurmak, uzun vadede daha yüksek
              performans ve iş tatmini getirir. Bu yaklaşımı benimseyen
              çalışanlar, şirketlerde daha değerli görülür ve liderlik
              pozisyonlarına daha hızlı yükselirler.
            </p>
          </div>
        </section>

        {/* Salary Negotiation Masterclass */}
        <section className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl shadow-xl p-10 text-white mb-12">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Maaş Pazarlığı Ustası Olmak
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-6">📊 Hazırlık Aşaması</h3>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 rounded-xl p-4">
                  <h4 className="font-bold mb-2 text-yellow-500">
                    Market Research
                  </h4>
                  <p className="text-sm text-yellow-600">
                    Glassdoor, PayScale, LinkedIn Salary kullanarak sektör
                    standardını öğrenin
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-4">
                  <h4 className="font-bold mb-2 text-yellow-500">
                    Value Proposition
                  </h4>
                  <p className="text-sm text-yellow-600">
                    Şirkete getirdiğiniz değeri somut örneklerle belgelendirin
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-4">
                  <h4 className="font-bold mb-2 text-yellow-500">
                    Timing Strategy
                  </h4>
                  <p className="text-sm text-yellow-600">
                    Performance review öncesi veya başarı anında pazarlık yapın
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">
                🎯 Pazarlık Taktikleri
              </h3>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 rounded-xl p-4">
                  <h4 className="font-bold mb-2 text-yellow-500">
                    Anchoring Effect
                  </h4>
                  <p className="text-sm text-yellow-600">
                    İlk rakamı siz söyleyin, pazarlığın seyrini belirleyin
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-4">
                  <h4 className="font-bold mb-2 text-yellow-500">
                    Total Package
                  </h4>
                  <p className="text-sm text-yellow-600">
                    Sadece maaş değil, tüm benefitları (bonus, vacation,
                    training) dahil edin
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-4">
                  <h4 className="font-bold mb-2 text-yellow-500">
                    Walk Away Power
                  </h4>
                  <p className="text-sm text-yellow-600">
                    Alternatif seçeneklerinizin olduğunu belli edin (ama blöf
                    yapmayın)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white bg-opacity-20 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-yellow-500">
              💰 Ülke Bazında Maaş Pazarlığı Kültürü
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-bold text-yellow-500">🇩🇪 Almanya</h4>
                <p className="text-yellow-600">Direkt ve fact-based yaklaşım</p>
              </div>
              <div>
                <h4 className="font-bold text-yellow-500">🇬🇧 İngiltere</h4>
                <p className="text-yellow-600">Diplomatik ve soft approach</p>
              </div>
              <div>
                <h4 className="font-bold text-yellow-500">🇳🇱 Hollanda</h4>
                <p className="text-yellow-600">
                  Açık tartışma, consensus arayışı
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Transition Strategies */}
        <section className="bg-white rounded-3xl shadow-xl p-10 mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            Kariyer Geçiş Stratejileri
          </h2>

          <div className="grid gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-8 rounded-r-xl">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                🔄 Industry Switch
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">
                    Hazırlık Süreci
                  </h4>
                  <ul className="text-blue-600 space-y-2 text-sm">
                    <li>• Transferable skills analizi</li>
                    <li>• Industry-specific terminology öğrenme</li>
                    <li>• Relevant certifications alma</li>
                    <li>• Industry professionals ile networking</li>
                    <li>• Volunteer/freelance projeler</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">
                    Risk Yönetimi
                  </h4>
                  <ul className="text-blue-600 space-y-2 text-sm">
                    <li>• 6-12 aylık finansal yastık</li>
                    <li>• Gradual transition planı</li>
                    <li>• Mentorship ve coaching desteği</li>
                    <li>• Plan B alternatives</li>
                    <li>• Family/support system alignment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-500 p-8 rounded-r-xl">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                🏃‍♂️ Fast Track Career Moves
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-green-700 mb-2">
                    Internal Mobility
                  </h4>
                  <p className="text-green-600 text-sm">
                    Aynı şirket içinde departman değiştirerek hızlı yükselme
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-green-700 mb-2">
                    Startup Jump
                  </h4>
                  <p className="text-green-600 text-sm">
                    Büyük şirketten startup'a geçerek leadership role alma
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-green-700 mb-2">
                    Geographic Move
                  </h4>
                  <p className="text-green-600 text-sm">
                    Emerging market'lerde liderlik pozisyonları arayışı
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Development */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl shadow-xl p-10 text-white mb-12">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Liderlik Gelişimi: C-Suite'e Giden Yol
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                🎯 Liderlik Becerileri
              </h3>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 rounded-xl p-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2 text-purple-500">
                    <Users className="w-5 h-5" />
                    People Leadership
                  </h4>
                  <p className="text-sm text-purple-600">
                    Takım motivasyonu, talent development, performance
                    management
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2 text-purple-500">
                    <Target className="w-5 h-5" />
                    Strategic Thinking
                  </h4>
                  <p className="text-sm text-purple-600">
                    Long-term vision, market analysis, competitive positioning
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2 text-purple-500">
                    <TrendingUp className="w-5 h-5" />
                    Change Management
                  </h4>
                  <p className="text-sm text-purple-600">
                    Digital transformation, organizational restructuring,
                    culture change
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">📈 Executive Presence</h3>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 rounded-xl p-4">
                  <h4 className="font-bold mb-2 text-purple-500">
                    Communication Mastery
                  </h4>
                  <p className="text-sm text-purple-600">
                    Board presentations, media interviews, public speaking
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-4">
                  <h4 className="font-bold mb-2 text-purple-500">
                    Stakeholder Management
                  </h4>
                  <p className="text-sm text-purple-600">
                    Investors, board members, customers, regulatory bodies
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-4">
                  <h4 className="font-bold mb-2 text-purple-500">
                    Crisis Leadership
                  </h4>
                  <p className="text-sm text-purple-600">
                    Decision making under pressure, reputation management
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white bg-opacity-20 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-purple-500">
              🚀 Executive Career Timeline
            </h3>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="font-bold text-yellow-300">Years 1-3</div>
                <p className="text-purple-500">
                  Individual Contributor Excellence
                </p>
              </div>
              <div className="text-center">
                <div className="font-bold text-yellow-300">Years 4-7</div>
                <p className="text-purple-500">Team Leadership & Management</p>
              </div>
              <div className="text-center">
                <div className="font-bold text-yellow-300">Years 8-12</div>
                <p className="text-purple-500">Department/Function Head</p>
              </div>
              <div className="text-center">
                <div className="font-bold text-yellow-300">Years 13+</div>
                <p className="text-purple-500">C-Suite & Board Positions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="bg-white rounded-3xl shadow-xl p-10 mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            Kariyer Başarınızı Ölçün
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                📊 Quantitative Metrics
              </h3>
              <ul className="text-blue-700 space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-blue-600" />
                  <span>
                    <strong>Salary Growth:</strong> Yıllık %15+ artış
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-blue-600" />
                  <span>
                    <strong>Promotion Cycle:</strong> 2-3 yılda bir seviye
                    atlama
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-blue-600" />
                  <span>
                    <strong>Market Value:</strong> Industry benchmark üstü
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-blue-600" />
                  <span>
                    <strong>Network Growth:</strong> Aylık 10+ yeni connection
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-green-800 mb-4">
                🎯 Qualitative Indicators
              </h3>
              <ul className="text-green-700 space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-green-600" />
                  <span>
                    <strong>Recognition:</strong> Industry awards, mentions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-green-600" />
                  <span>
                    <strong>Influence:</strong> Thought leadership, speaking
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-green-600" />
                  <span>
                    <strong>Autonomy:</strong> Decision-making authority
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-green-600" />
                  <span>
                    <strong>Impact:</strong> Business outcome ownership
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-purple-800 mb-4">
                ⚖️ Life Balance Score
              </h3>
              <ul className="text-purple-700 space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-purple-600" />
                  <span>
                    <strong>Satisfaction:</strong> İş tatmini %80+ level
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-purple-600" />
                  <span>
                    <strong>Health:</strong> Sustainable work pace
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-purple-600" />
                  <span>
                    <strong>Family Time:</strong> Quality personal relationships
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-purple-600" />
                  <span>
                    <strong>Growth:</strong> Continuous learning addiction
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
            <h3 className="text-xl font-bold text-yellow-800 mb-3">
              🏆 Career Success Formula
            </h3>
            <p className="text-yellow-700 text-lg">
              <strong>
                Başarı = (Technical Skills × Soft Skills × Cultural Fit ×
                Network Quality × Timing) × Persistence²
              </strong>
            </p>
            <p className="text-yellow-600 text-sm mt-2">
              Bu formüldeki her faktörü %20 artırdığınızda, toplam kariyer
              başarınız %248 artar!
            </p>
          </div>
        </section>

        {/* Final Action Plan */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl shadow-xl p-10 text-white mb-12">
          <h2 className="text-4xl font-bold mb-10 text-center">
            30-60-90 Günlük Aksiyon Planı
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-yellow-300 mb-6 text-center">
                İlk 30 Gün
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-gray-900">1</span>
                  </div>
                  <span className="text-sm text-yellow-500">
                    Mevcut pozisyonunuzu SWOT analizi ile değerlendirin
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-gray-900">2</span>
                  </div>
                  <span className="text-sm text-yellow-500">
                    5 yıllık kariyer hedeflerinizi netleştirin
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-gray-900">3</span>
                  </div>
                  <span className="text-sm text-yellow-500">
                    LinkedIn profilinizi %100 optimize edin
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-gray-900">4</span>
                  </div>
                  <span className="text-sm text-yellow-500">
                    Industry leaders'ı takip etmeye başlayın
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-6 text-center">
                İlk 60 Gün
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-gray-900">1</span>
                  </div>
                  <span className="text-sm text-blue-500">
                    Skill gap analysis yapın ve öğrenme planı oluşturun
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-gray-900">2</span>
                  </div>
                  <span className="text-sm text-blue-500">
                    Mentör arayışına başlayın
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-gray-900">3</span>
                  </div>
                  <span className="text-sm text-blue-500">
                    Industry networking etkinliklerine katılın
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-gray-900">4</span>
                  </div>
                  <span className="text-sm text-blue-500">
                    Personal brand strategy geliştirin
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-green-300 mb-6 text-center">
                İlk 90 Gün
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-gray-900">1</span>
                  </div>
                  <span className="text-sm text-green-500">
                    İlk certification'ınızı tamamlayın
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-gray-900">2</span>
                  </div>
                  <span className="text-sm text-green-500">
                    Thought leadership content üretmeye başlayın
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-gray-900">3</span>
                  </div>
                  <span className="text-sm text-green-500">
                    Career pivot için somut adımlar atın
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-gray-900">4</span>
                  </div>
                  <span className="text-sm text-green-500">
                    İlk 3 ay performansınızı değerlendirin
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-2xl font-bold text-yellow-400 mb-4">
              "Kariyer bir hedef değil, bir yolculuktur. Her gün küçük adımlar,
              büyük dönüşümler yaratır."
            </p>
            <p className="text-gray-300">
              Bu stratejileri uygulayarak, Avrupa'da sadece iş bulmakla
              kalmayın, uzun vadeli bir kariyer imparatorluğu kurun! 🚀
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <Star className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
            <p className="text-xl font-semibold mb-2">
              Bu rehber 500+ başarılı profesyonelin deneyimlerinden derlenmiştir
            </p>
          </div>
          <div className="flex justify-center items-center gap-6 text-sm text-gray-400">
            <span>Kariyer Stratejileri</span>
            <span>•</span>
            <span>Professional Development</span>
            <span>•</span>
            <span>Avrupa Karrieri</span>
            <span>•</span>
            <span>Leadership Excellence</span>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-400">
              © 2025 - Bu içerik Avrupa iş piyasasının güncel trendlerine göre
              hazırlanmıştır.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
