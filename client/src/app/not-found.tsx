"use client";
import Link from "next/link";
import { Home } from "lucide-react";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200 select-none">404</h1>
          <div className="relative -mt-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl">😕</div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Sayfa Bulunamadı
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
          <p className="text-gray-500">
            Ana sayfaya giderek istediğiniz içeriği bulabilirsiniz.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Home className="w-5 h-5 mr-2" />
            Anasayfaya Dön
          </Link>

          <div className="text-sm text-gray-500">
            veya{" "}
            <button
              onClick={() => window.history.back()}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              önceki sayfaya dön
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
