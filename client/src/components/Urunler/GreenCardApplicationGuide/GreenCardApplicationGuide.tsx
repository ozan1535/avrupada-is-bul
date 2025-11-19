"use client";
import React, { useState } from "react";
import {
  Download,
  CheckCircle,
  AlertCircle,
  Loader2,
  Star,
  ArrowRight,
  X,
} from "lucide-react";
import EmailDialog from "@/components/Dialog/EmailDialog/EmailDialog";

export default function GreenCardLanding() {
  const [canShowDialog, setCanShowDialog] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {canShowDialog && (
        <EmailDialog
          open={canShowDialog}
          setOpen={setCanShowDialog}
          title="Green Card Basvuru Rehberi"
          cancelText="Vazgeç"
          continueText="İndir"
          href="green-card-basvuru-rehberi.pdf"
          gaEventText="Green Card Basvuru Rehberi indirildi."
        />
      )}
      <main className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
              🎉 Güncel - Tamamen Ücretsiz!
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Green Card
              </span>
              <br />
              Başvuru Rehberi
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Amerika'ya yerleşmek için <strong>adım adım</strong> kılavuz.
              Başvuru sürecinden fotoğraf gereksinimlerine kadar her şey!
            </p>

            <div className="space-y-3">
              {[
                "Başvuru süreci (adım adım)",
                "Gerekli belgeler checklist",
                "Fotoğraf gereksinimleri (örneklerle)",
                "En sık yapılan hatalar",
                "Mülakat hazırlığı",
                "Başarı ipuçları",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">10</div>
                <div className="text-xs text-gray-500">Sayfa</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">2,500+</div>
                <div className="text-xs text-gray-500">İndirme</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">%100</div>
                <div className="text-xs text-gray-500">Ücretsiz</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 blur-3xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl shadow-2xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🇺🇸</div>
                  <h3 className="text-3xl font-bold">GREEN CARD</h3>
                  <p className="text-xl opacity-90">Çeşitlilik Vizesi</p>
                  <p className="text-lg">Başvuru Rehberi</p>
                  <div className="pt-4 space-y-2 text-sm opacity-75">
                    <div>✅ Başvuru Süreci</div>
                    <div>✅ Gerekli Belgeler</div>
                    <div>✅ Püf Noktalar</div>
                    <div>✅ 2025 Güncel</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-emerald-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                🎁 Hemen Ücretsiz İndir
              </h3>

              <div className="space-y-4">
                <button
                  onClick={() => setCanShowDialog(true)}
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <>
                    <Download className="w-5 h-5" />
                    Hemen Ücretsiz İndir
                  </>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            📚 Rehberde Neler Var?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📋",
                title: "Adım Adım Başvuru",
                desc: "Online başvurudan mülakat sonrasına kadar tüm süreç detaylı anlatılıyor.",
              },
              {
                icon: "📸",
                title: "Fotoğraf Örnekleri",
                desc: "Doğru ve yanlış fotoğraf örnekleriyle en sık yapılan hatalardan kaçının.",
              },
              {
                icon: "✅",
                title: "Belge Checklist",
                desc: "Hangi belgelere ihtiyacınız var? Hiçbir şeyi kaçırmayın!",
              },
              {
                icon: "⚠️",
                title: "Yaygın Hatalar",
                desc: "En sık yapılan 7 hata ve nasıl önleyeceğiniz detaylı açıklanıyor.",
              },
              {
                icon: "💬",
                title: "Mülakat Hazırlığı",
                desc: "Sık sorulan sorular ve nasıl cevap vermeniz gerektiği.",
              },
              {
                icon: "🎯",
                title: "Başarı İpuçları",
                desc: "10 pratik ipucu ile başarı şansınızı artırın.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            💬 Kullanıcı Yorumları
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Mehmet K.",
                city: "İstanbul",
                text: "Fotoğraf bölümü hayat kurtardı! İlk başvurumda doğru fotoğraf çektirebildim.",
              },
              {
                name: "Ayşe T.",
                city: "Ankara",
                text: "Adım adım anlatım sayesinde hiç zorlanmadan başvuru yaptım. Çok teşekkürler!",
              },
              {
                name: "Can Y.",
                city: "İzmir",
                text: "En sık yapılan hatalar bölümü beni büyük hatalardan kurtardı. Kesinlikle okuyun!",
              },
            ].map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            🎉 Hayallerini Gerçekleştir!
          </h3>
          <p className="text-xl mb-8 opacity-90">
            2024'te 55,000 kişi Green Card aldı. Sıra sende!
          </p>
          <button
            onClick={() => setCanShowDialog(true)}
            className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105 inline-flex items-center gap-2"
          >
            Hemen Ücretsiz İndir
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </main>
    </div>
  );
}
