import React from "react";
import {
  FileText,
  Users,
  AlertTriangle,
  Scale,
  Shield,
  Gavel,
} from "lucide-react";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 sm:mt-16">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-3">
            <FileText className="text-[#0a66c2]" size={32} />
            <h1 className="text-3xl font-bold text-gray-900">
              Kullanım Şartları
            </h1>
          </div>
          <p className="mt-4 text-gray-600">Son güncellenme: 5 Eylül 2025</p>
          <p className="mt-2 text-gray-600">Yürürlük tarihi: 5 Eylül 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Introduction */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="text-[#0a66c2]" size={20} />
              <h2 className="text-xl font-semibold text-gray-900">
                Genel Hükümler
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bu Kullanım Şartları ("Şartlar"), Uluslararası Kariyer platformu
              ("Platform", "Hizmet") kullanımını düzenler. Platformu kullanarak
              bu şartları kabul etmiş sayılırsınız. Şartları kabul etmiyorsanız,
              lütfen platformu kullanmayınız.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>Önemli:</strong> Bu şartlar yasal olarak bağlayıcıdır.
                Platform kullanımından önce dikkatlice okuyunuz ve
                anladığınızdan emin olunuz.
              </p>
            </div>
          </section>

          {/* Company Information */}
          {/* <section>
            <div className="flex items-center space-x-2 mb-4">
              <Users className="text-[#0a66c2]" size={20} />
              <h2 className="text-xl font-semibold text-gray-900">
                Hizmet Sağlayıcı Bilgileri
              </h2>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700 mb-2">
                    <strong>Şirket:</strong> EuroJobs Teknoloji A.Ş.
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Mersis No:</strong> [Mersis numarası]
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Vergi Dairesi:</strong> [Vergi dairesi]
                  </p>
                  <p className="text-gray-700">
                    <strong>Vergi No:</strong> [Vergi numarası]
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 mb-2">
                    <strong>Adres:</strong> [Şirket adresi]
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>E-posta:</strong> destek@eurojobs.com
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Telefon:</strong> +90 232 XXX XX XX
                  </p>
                  <p className="text-gray-700">
                    <strong>Website:</strong> www.eurojobs.com
                  </p>
                </div>
              </div>
            </div>
          </section> */}

          {/* Service Definition */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Hizmet Tanımı ve Kapsamı
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Uluslararası Kariyer, iş arayanlar ile işverenleri buluşturan
                çevrimiçi bir platformdur. Hizmetlerimiz aşağıdakileri içerir:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">
                    İş Arayan Kullanıcılar İçin:
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• İş ilanlarına göz atma ve arama</li>
                    <li>• Özgeçmiş oluşturma ve yönetme</li>
                    <li>• İş başvurusu yapma</li>
                    <li>• İş önerileri alma</li>
                    <li>• Kariyer tavsiyeleri</li>
                    <li>• Maaş rehberi erişimi</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">
                    İşveren Kullanıcılar İçin:
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• İş ilanı yayınlama</li>
                    <li>• Aday arama ve filtreleme</li>
                    <li>• Başvuru yönetimi</li>
                    <li>• Şirket profili oluşturma</li>
                    <li>• İşe alım analitikleri</li>
                    <li>• Premium işveren hizmetleri</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* User Obligations */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="text-[#0a66c2]" size={20} />
              <h2 className="text-xl font-semibold text-gray-900">
                Kullanıcı Yükümlülükleri
              </h2>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                Genel Yükümlülükler:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Doğru, güncel ve eksiksiz bilgi sağlamak</li>
                <li>Hesap güvenliğini korumak ve şifreyi gizli tutmak</li>
                <li>Platform kurallarına ve yasalara uygun davranmak</li>
                <li>Diğer kullanıcılara saygılı davranmak</li>
                <li>Fikri mülkiyet haklarına saygı göstermek</li>
                <li>Spam, sahte içerik veya yanıltıcı bilgi paylaşmamak</li>
              </ul>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-medium text-red-900 mb-2">
                    Yasaklanan Davranışlar:
                  </h3>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Sahte hesap oluşturma</li>
                    <li>• Dolandırıcılık faaliyetleri</li>
                    <li>• Ayrımcı içerik paylaşma</li>
                    <li>• Sistemin güvenliğini tehdit etme</li>
                    <li>• Telif hakkı ihlali</li>
                    <li>• Rekabet karşıtı uygulamalar</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-medium text-green-900 mb-2">
                    Önerilen Davranışlar:
                  </h3>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Profesyonel dil kullanma</li>
                    <li>• Zamanında yanıt verme</li>
                    <li>• Geri bildirim sağlama</li>
                    <li>• Platform özelliklerini etkin kullanma</li>
                    <li>• Diğer kullanıcılara yardım etme</li>
                    <li>• Platformu tanıtma</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Registration and Account */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Kayıt ve Hesap Yönetimi
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-[#0a66c2] pl-4">
                <h3 className="font-medium text-gray-900 mb-2">
                  Kayıt Şartları:
                </h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• 18 yaşını doldurmuş olmak</li>
                  <li>• Geçerli bir e-posta adresine sahip olmak</li>
                  <li>
                    • Türkiye Cumhuriyeti veya AB ülkelerinde ikamet etmek
                  </li>
                  <li>• Bu kullanım şartlarını kabul etmek</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-medium text-yellow-900 mb-2">
                  Hesap Güvenliği:
                </h3>
                <p className="text-yellow-800 text-sm">
                  Hesabınızın güvenliğinden tamamen siz sorumlusunuz. Şüpheli
                  aktivite durumunda derhal bizimle iletişime geçiniz.
                  Hesabınızda gerçekleşen tüm aktivitelerden sorumlu olacağınızı
                  kabul edersiniz.
                </p>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          {/* <section>
            <h2 className="text-xl font-semibent text-gray-900 mb-4">
              Ödeme ve Faturalandırma
            </h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Ücretsiz Hizmetler:
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Temel iş arama</li>
                    <li>• Özgeçmiş oluşturma</li>
                    <li>• İş başvurusu (sınırlı)</li>
                    <li>• Temel şirket profili</li>
                  </ul>
                </div>
                <div className="border border-[#0a66c2] rounded-lg p-4 bg-blue-50">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Premium Hizmetler:
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Öncelikli iş ilanları</li>
                    <li>• Gelişmiş arama filtreleri</li>
                    <li>• Sınırsız başvuru</li>
                    <li>• Detaylı analitikler</li>
                    <li>• Öncelikli müşteri desteği</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">
                  Ödeme Koşulları:
                </h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Tüm ücretler KDV dahildir</li>
                  <li>• Ödemeler Türk Lirası olarak alınır</li>
                  <li>• Abonelik ödemeleri aylık veya yıllık olabilir</li>
                  <li>• İade koşulları ayrı olarak belirtilmiştir</li>
                  <li>• Fiyat değişiklikleri 30 gün önceden bildirilir</li>
                </ul>
              </div>
            </div>
          </section> */}

          {/* Cancellation and Refund */}
          {/* <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              İptal ve İade Politikası
            </h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">
                  İptal Hakları (6502 sayılı TKHK uyarınca):
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    • <strong>14 gün cayma hakkı:</strong> Abonelik
                    başlangıcından itibaren
                  </li>
                  <li>
                    • <strong>Anında iptal:</strong> Hizmet kullanılmaya
                    başlanmamışsa
                  </li>
                  <li>
                    • <strong>Kısmi iade:</strong> Kullanılmayan süre için
                    orantılı iade
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h3 className="font-medium text-amber-900 mb-2">
                  İade Süreci:
                </h3>
                <p className="text-amber-800 text-sm">
                  İade talepleri destek@eurojobs.com adresine gönderilebilir.
                  İadeler 14 iş günü içerisinde aynı ödeme yöntemi ile
                  gerçekleştirilir. Banka işlem ücretleri kullanıcıya aittir.
                </p>
              </div>
            </div>
          </section> */}

          {/* Intellectual Property */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Fikri Mülkiyet Hakları
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-[#0a66c2] pl-4">
                <h3 className="font-medium text-gray-900 mb-2">
                  Platform Hakları:
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  Platform üzerindeki tüm içerik, tasarım, yazılım, logo, marka
                  ve diğer fikri mülkiyet hakları Uluslararası Kariyer'e aittir.
                </p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Platformun kopyalanması yasaktır</li>
                  <li>• İçerik izinsiz kullanılamaz</li>
                  <li>• Marka hakları korunmaktadır</li>
                  <li>• Yazılım kodu tersine mühendislik yapılamaz</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-2">
                  Kullanıcı İçerikleri:
                </h3>
                <p className="text-gray-700 text-sm">
                  Platforma yüklediğiniz içeriklerin (özgeçmiş, profil
                  bilgileri, iş ilanları) sahipliği size aittir. Ancak, hizmet
                  sunabilmemiz için bu içerikleri kullanma hakkını bize vermiş
                  olursunuz.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy and Data */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Gizlilik ve Veri Korunması
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm mb-2">
                Kişisel verilerinizin işlenmesi, saklanması ve korunması ile
                ilgili detaylı bilgiler
                <a
                  href="/gizlilik-politikasi"
                  className="font-medium underline hover:text-[#0a66c2] transition-colors"
                >
                  {" "}
                  Gizlilik Politikamızda
                </a>{" "}
                yer almaktadır.
              </p>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• KVKK ve GDPR uyumlu işleme</li>
                <li>• Güvenli veri saklama</li>
                <li>• Kullanıcı haklarına saygı</li>
                <li>• Şeffaf bilgilendirme</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="text-[#0a66c2]" size={20} />
              <h2 className="text-xl font-semibold text-gray-900">
                Sorumluluk Sınırlaması
              </h2>
            </div>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-medium text-red-900 mb-2">
                  Platform Sorumlulukları:
                </h3>
                <ul className="text-red-800 text-sm space-y-1">
                  <li>• Hizmet kesintilerinden sorumluluk kabul etmeyiz</li>
                  <li>• Üçüncü taraf içeriklerini garanti etmeyiz</li>
                  <li>• İş bulma garantisi vermemekteyiz</li>
                  <li>• Kullanıcı arası anlaşmazlıklarda taraf değiliz</li>
                </ul>
              </div>

              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">
                  Kullanıcı Sorumluluğu:
                </h3>
                <p className="text-gray-700 text-sm">
                  Platform kullanımından doğan zarar ve kayıplardan kullanıcılar
                  sorumludur. Paylaştığınız bilgilerin doğruluğu ve
                  güncelliğinden siz sorumlusunuz.
                </p>
              </div>
            </div>
          </section>

          {/* Force Majeure */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Mücbir Sebepler
            </h2>
            <p className="text-gray-700 mb-4">
              Aşağıdaki durumlar mücbir sebep sayılır ve bu durumlardan
              kaynaklanan gecikme veya ifa etmemeden sorumlu tutulmayız:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Doğal afetler</li>
                <li>Savaş, terör, sivil karışıklık</li>
                <li>Devlet müdahaleleri</li>
                <li>İnternet altyapı sorunları</li>
              </ul>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Siber saldırılar</li>
                <li>Elektrik kesintileri</li>
                <li>Hükümet yasak ve kısıtlamaları</li>
                <li>Pandemiler</li>
              </ul>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Hesap Sonlandırma
            </h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Kullanıcı Tarafından:
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• İstediğiniz zaman hesabınızı kapatabilirsiniz</li>
                    <li>• 30 gün önceden bildirim gerekmez</li>
                    <li>• Ödenen ücretler iade edilmez</li>
                    <li>• Verileriniz silinir</li>
                  </ul>
                </div>
                <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                  <h3 className="font-medium text-red-900 mb-2">
                    Platform Tarafından:
                  </h3>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Şartları ihlal durumunda</li>
                    <li>• Dolandırıcılık tespitinde</li>
                    <li>• Yasalara aykırı davranışta</li>
                    <li>• 7 gün önceden bildirim ile</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Applicable Law */}
          {/* <section>
            <div className="flex items-center space-x-2 mb-4">
              <Gavel className="text-[#0a66c2]" size={20} />
              <h2 className="text-xl font-semibold text-gray-900">
                Uygulanacak Hukuk ve Yetkili Mahkeme
              </h2>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <ul className="text-gray-700 space-y-2">
                <li>
                  • <strong>Uygulanacak Hukuk:</strong> Türkiye Cumhuriyeti
                  hukuku
                </li>
                <li>
                  • <strong>Yetkili Mahkeme:</strong> İzmir Mahkemeleri ve İcra
                  Müdürlükleri
                </li>
                <li>
                  • <strong>Dil:</strong> Türkçe (resmi dil)
                </li>
                <li>
                  • <strong>Para Birimi:</strong> Türk Lirası (TL)
                </li>
                <li>
                  • <strong>Tebligat Adresi:</strong> Kayıt sırasında verilen
                  adres
                </li>
              </ul>
            </div>
          </section> */}

          {/* Changes to Terms */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Şartlarda Değişiklik
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Bu kullanım şartlarını gerektiğinde güncelleme hakkını saklı
                tutarız. Önemli değişiklikler aşağıdaki şekilde duyurulur:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="w-8 h-8 bg-[#0a66c2] rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <h3 className="font-medium text-gray-900 text-sm">
                    E-posta Bildirimi
                  </h3>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="w-8 h-8 bg-[#0a66c2] rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <h3 className="font-medium text-gray-900 text-sm">
                    Platform Duyurusu
                  </h3>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="w-8 h-8 bg-[#0a66c2] rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <h3 className="font-medium text-gray-900 text-sm">
                    30 Gün Önceden
                  </h3>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              İletişim Bilgileri
            </h2>
            <div className="bg-[#0a66c2] bg-opacity-5 border border-[#0a66c2] border-opacity-20 rounded-lg p-6">
              <p className="text-white mb-4">
                Bu kullanım şartları hakkında sorularınız için bizimle iletişime
                geçebilirsiniz:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-white mb-2">Genel Destek:</h3>
                  <p className="text-white text-sm mb-1">
                    📧 destek.uluslararasikariyer@gmail.com
                  </p>
                  <p className="text-white text-sm">
                    🕒 Pazartesi-Cuma 09:00-18:00
                  </p>
                </div>
                {/* <div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    Hukuki İşler:
                  </h3>
                  <p className="text-gray-700 text-sm mb-1">
                    📧 hukuki@eurojobs.com
                  </p>
                  <p className="text-gray-700 text-sm mb-1">
                    📞 +90 232 XXX XX XX
                  </p>
                  <p className="text-gray-700 text-sm">📍 [Şirket adresi]</p>
                </div> */}
              </div>
            </div>
          </section>

          {/* Effective Date */}
          <section>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-green-800 font-medium">
                Bu kullanım şartları 5 Eylül 2025 tarihinde yürürlüğe girmiştir.
              </p>
              <p className="text-green-700 text-sm mt-2">
                Platform kullanımınızla bu şartları kabul etmiş sayılırsınız.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
