"use client";
import React, { useState } from "react";
import {
  Download,
  FileText,
  GraduationCap,
  Briefcase,
  Heart,
} from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";
import LoginDialog from "../Dialog/LoginDialog/LoginDialog";
import Image from "next/image";
import EmailDialog from "../Dialog/EmailDialog/EmailDialog";

function GermanVisaGuide(/* {
  user,
}: {
  user: KindeUser<Record<string, any>> | null;
} */) {
  /*   const router = useRouter(); */
  const [canShowDialog, setCanShowDialog] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 sm:mt-20 via-white to-yellow-50">
      {canShowDialog && (
        <EmailDialog
          open={canShowDialog}
          setOpen={setCanShowDialog}
          title="Almanya Vize Rehberi"
          cancelText="Vazgeç"
          continueText="İndir"
          href="almanya-vize-rehberi.pdf"
          gaEventText="Almanya Vize Rehberi indirildi."
        />
      )}
      {/* {canShowDialog && (
        <LoginDialog
          open={canShowDialog}
          setOpen={setCanShowDialog}
          title="Giriş Yapınız"
          description="Dosyayı indirmek için lütfen giriş yapınız."
          cancelText="Kapat"
          continueText="Giriş Yap"
          handleContinue={() => {
            router.push("/giris-yap");
          }}
        />
      )} */}
      {/* Header */}
      {/*  <header className="bg-white shadow-sm border-b-2 border-red-600">
    <div className="max-w-4xl mx-auto px-6 py-4">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
          <FileText className="w-7 h-7 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">
          Almanya Vize Rehberi
        </h1>
      </div>
    </div>
  </header> */}

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white mb-8 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">
                Almanya'ya Giden Yolunuz Bu Rehberle Başlıyor!
              </h2>
              <p className="text-red-100 text-lg mb-6">
                Almanya, Avrupa'nın en güçlü ekonomilerinden biri olarak Türk
                vatandaşları için cazip fırsatlar sunuyor. İster turistik bir
                gezi, ister kariyer hedefleri, ister eğitim fırsatları - doğru
                vize türünü seçmek başarının anahtarı!
              </p>
              <button
                onClick={() => setCanShowDialog(true)}
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Download className="w-5 h-5" />
                Ücretsiz İndir (PDF)
              </button>
            </div>
            <div className="flex-shrink-0">
              <div className="w-64 h-80 bg-white/20 rounded-lg border-2 border-white/30 flex items-center justify-center backdrop-blur-sm">
                <Image
                  src="/german-visa-type-ebook.png"
                  alt="Almanya Vize Rehberi"
                  width={256}
                  height={320}
                  className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FileText className="w-7 h-7 text-red-600" />
            Rehber İçeriği
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg">
                <div className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Giriş ve Genel Bilgiler
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Almanya vize sistemine genel bakış ve temel bilgiler
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Schengen Vizesi
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Kısa süreli ziyaretler için vize başvuru süreci
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Çalışma Vizesi & EU Blue Card
                  </h4>
                  <p className="text-gray-600 text-sm">
                    İş fırsatları ve yüksek vasıflı çalışan vizesi
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Aile Birleşimi & Eşlik Vizesi
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Aile ile birleşme ve eş vizesi başvuruları
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-lg flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Öğrenci Vizesi & Diğer Türler
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Eğitim fırsatları ve özel durum vizeleri
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why This Guide */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Neden Bu Rehber?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                İş Fırsatları
              </h4>
              <p className="text-gray-600 text-sm">
                Almanya'daki iş imkanları ve çalışma vizesi süreçleri hakkında
                detaylı bilgi
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Eğitim İmkanları
              </h4>
              <p className="text-gray-600 text-sm">
                Almanya'da eğitim almak için gerekli vize türleri ve başvuru
                süreçleri
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Aile Birleşimi
              </h4>
              <p className="text-gray-600 text-sm">
                Sevdiklerinizle Almanya'da buluşmak için aile birleşimi vize
                prosedürleri
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Bu Rehberden Neler Öğreneceksiniz?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Hangi vize türünün size uygun olduğunu belirleme",
              "Başvuru sürecinde gerekli belgeler ve adımlar",
              "Vize başvurusunda dikkat edilmesi gereken noktalar",
              "Başvuru süresini hızlandırmanın yolları",
              "Red durumunda yapılması gerekenler",
              "Almanya'da yaşam hakkında pratik bilgiler",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Hemen İndirin ve Almanya Yolculuğunuza Başlayın!
          </h3>
          <p className="text-red-100 mb-6 text-lg">
            Bu kapsamlı rehberle vize başvuru sürecinizi kolaylaştırın ve
            hayalinizdeki Almanya deneyimini yaşayın.
          </p>
          <button
            onClick={() => setCanShowDialog(true)}
            className="bg-white text-red-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Download className="w-6 h-6" />
            Ücretsiz PDF İndir
          </button>
        </div>
      </main>

      {/* Footer */}
      {/*  <footer className="bg-gray-900 text-white py-8 mt-16">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <p className="text-gray-400">
        © 2025 Almanya Vize Rehberi. Tüm hakları saklıdır.
      </p>
    </div>
  </footer> */}
    </div>
  );
}

export default GermanVisaGuide;
