"use client";
import React, { useState } from "react";
import {
  Download,
  CheckCircle,
  Star,
  Users,
  Clock,
  Shield,
  AlertCircle,
  TrendingUp,
  Award,
  FileText,
  Zap,
} from "lucide-react";
import EmailDialog from "@/components/Dialog/EmailDialog/EmailDialog";

export default function SchengenVisaLanding() {
  const [canShowDialog, setCanShowDialog] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {canShowDialog && (
        <EmailDialog
          open={canShowDialog}
          setOpen={setCanShowDialog}
          title="Schengen Vizesi Başvuru Rehberi"
          cancelText="Vazgeç"
          continueText="İndir"
          href="schengen-vizesi-basvuru-rehberi.pdf"
          gaEventText="Green Card Başvuru Rehberi indirildi."
        />
      )}
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                <Zap className="w-4 h-4" />
                <span>2026 Güncel - Tamamen Ücretsiz!</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Schengen Vizesi
                  </span>
                  <br />
                  Başvuru Rehberi
                </h1>
                <p className="text-2xl text-gray-600 font-medium">
                  Reddedilmemek İçin Adım Adım Kılavuz
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3">
                {[
                  {
                    icon: CheckCircle,
                    text: "Detaylı belge checklist",
                    color: "text-green-600",
                  },
                  {
                    icon: CheckCircle,
                    text: "Fotoğraf gereksinimleri (örneklerle)",
                    color: "text-green-600",
                  },
                  {
                    icon: CheckCircle,
                    text: "Mülakat soruları + cevapları",
                    color: "text-green-600",
                  },
                  {
                    icon: CheckCircle,
                    text: "En sık yapılan 12 hata",
                    color: "text-green-600",
                  },
                  {
                    icon: CheckCircle,
                    text: "Red sebepleri + çözümleri",
                    color: "text-green-600",
                  },
                  {
                    icon: CheckCircle,
                    text: "Ülke özel ipuçları",
                    color: "text-green-600",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-lg">
                    <item.icon
                      className={`w-6 h-6 ${item.color} flex-shrink-0`}
                    />
                    <span className="text-gray-700 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      2,600+
                    </div>
                    <div className="text-sm text-gray-500">İndirme</div>
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">%85</div>
                    <div className="text-sm text-gray-500">Başarı Oranı</div>
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">+23</div>
                    <div className="text-sm text-gray-500">Sayfa</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setCanShowDialog(true)}
                className="group relative w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-5 rounded-2xl font-bold text-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                Hemen Ücretsiz İndir
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition"></div>
              </button>
            </div>

            {/* Right - E-book Preview */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>

              {/* Book Image */}
              <div className="relative transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl shadow-2xl p-4 border-4 border-blue-100">
                  <img
                    src="/schengen-vizesi-basvuru-rehberi.png"
                    alt="Schengen Vizesi Başvuru Rehberi"
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
                  ÜCRETSİZ!
                </div>
                <div className="absolute -bottom-4 -left-4 bg-amber-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  2026 GÜNCEL
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white/80 backdrop-blur-sm py-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, label: "%85 Başarı", color: "text-blue-600" },
              { icon: Clock, label: "23 Sayfa", color: "text-green-600" },
              {
                icon: Users,
                label: "2,600+ İndirme",
                color: "text-indigo-600",
              },
              { icon: Shield, label: "100% Güvenli", color: "text-purple-600" },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-2">
                <item.icon className={`w-8 h-8 ${item.color} mx-auto`} />
                <div className="font-semibold text-gray-900">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              📚 Rehberde Neler Var?
            </h2>
            <p className="text-xl text-gray-600">
              Başvuru sürecinden red sebepleri çözümüne kadar her şey!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Gerekli Belgeler",
                description:
                  "Eksik belge bırakmayın! Tüm belgeler detaylı checklist ile.",
                icon: "📋",
                color: "from-blue-500 to-indigo-500",
              },
              {
                title: "Fotoğraf Rehberi",
                description:
                  "Doğru/yanlış örneklerle fotoğraf gereksinimlerini öğrenin.",
                icon: "📸",
                color: "from-green-500 to-emerald-500",
              },
              {
                title: "Mülakat Hazırlığı",
                description: "En çok sorulan sorular ve ideal cevapları.",
                icon: "💬",
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "En Sık Yapılan Hatalar",
                description: "12 kritik hata ve nasıl önleyeceğiniz.",
                icon: "⚠️",
                color: "from-amber-500 to-orange-500",
              },
              {
                title: "Red Sebepleri",
                description: "Tüm red sebepleri ve çözüm yolları detaylı.",
                icon: "❌",
                color: "from-red-500 to-rose-500",
              },
              {
                title: "Özel İpuçları",
                description: "Hangi ülke neye dikkat ediyor? İstatistikler.",
                icon: "🌍",
                color: "from-cyan-500 to-blue-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            💬 Kullanıcı Yorumları
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mehmet K.",
                location: "İstanbul",
                text: "Fotoğraf bölümü hayat kurtardı! Belge checklist sayesinde hiçbir şey kaçırmadım. İlk başvurumda onay aldım!",
                rating: 5,
              },
              {
                name: "Ayşe T.",
                location: "Ankara",
                text: "Mülakat soruları çok işime yaradı. Hazırlıklı gittiğim için rahat cevap verebildim. Kesinlikle tavsiye ederim.",
                rating: 5,
              },
              {
                name: "Can Y.",
                location: "İzmir",
                text: "En sık yapılan hatalar bölümü beni büyük hatalardan kurtardı. Mali belgeler kısmı çok detaylı anlatılmış.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-12 bg-gradient-to-r from-amber-50 to-orange-50 border-y border-amber-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
            <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                ⚠️ Önemli Uyarı
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Fotoğraf hatası</strong>, vize red sebeplerinin{" "}
                <strong>%40'ını</strong> oluşturuyor! Bu rehberdeki fotoğraf
                bölümünü mutlaka okuyun. Doğru/yanlış örneklerle en sık yapılan
                hataları öğrenin ve red riskini azaltın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🎯 Hayalindeki Avrupa Seyahatini Gerçekleştir!
          </h2>
          <p className="text-2xl text-blue-100 mb-8">
            2,600+ kişi bu rehberle vize aldı. Şimdi sıra sende!
          </p>

          <button
            onClick={() => setCanShowDialog(true)}
            className="group bg-white text-blue-600 px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center gap-4"
          >
            <Download className="w-8 h-8 group-hover:animate-bounce" />
            Hemen Ücretsiz İndir
          </button>

          <p className="text-blue-100 mt-6 text-lg">
            📧 Sadece email adresinizle anında indirin
          </p>

          {/* Mini Stats */}
          <div className="flex justify-center gap-8 mt-12 text-white">
            <div>
              <div className="text-3xl font-bold">2,600+</div>
              <div className="text-blue-200">Mutlu Kullanıcı</div>
            </div>
            <div className="w-px h-16 bg-blue-400"></div>
            <div>
              <div className="text-3xl font-bold">%85</div>
              <div className="text-blue-200">Başarı Oranı</div>
            </div>
            <div className="w-px h-16 bg-blue-400"></div>
            <div>
              <div className="text-3xl font-bold">23</div>
              <div className="text-blue-200">Detaylı Sayfa</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: "✅",
                text: "Detaylı Checklist",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: "📸",
                text: "Fotoğraf Örnekleri",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: "💬",
                text: "Mülakat Soruları",
                color: "bg-purple-100 text-purple-600",
              },
              {
                icon: "🎯",
                text: "12 Kritik Hata",
                color: "bg-red-100 text-red-600",
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <div
                  className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-lg`}
                >
                  {item.icon}
                </div>
                <div className="font-semibold text-gray-900">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
