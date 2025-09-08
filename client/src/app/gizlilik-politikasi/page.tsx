import React from "react";
import { Shield, Eye, Database, Users, Mail, Phone } from "lucide-react";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 sm:mt-16">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-3">
            <Shield className="text-[#0a66c2]" size={32} />
            <h1 className="text-3xl font-bold text-gray-900">
              Gizlilik Politikası
            </h1>
          </div>
          <p className="mt-4 text-gray-600">Son güncellenme: 5 Eylül 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Introduction */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <Eye className="text-[#0a66c2]" size={20} />
              <h2 className="text-xl font-semibold text-gray-900">Giriş</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Bu gizlilik politikası, Uluslararası Kariyer platformunu kullandığınızda
              kişisel verilerinizin nasıl toplandığı, kullanıldığı, saklandığı
              ve korunduğu hakkında bilgi vermektedir. Kişisel verilerinizin
              korunması bizim için son derece önemlidir ve 6698 sayılı Kişisel
              Verilerin Korunması Kanunu (KVKK) ile Avrupa Birliği Genel Veri
              Koruma Tüzüğü (GDPR) hükümlerine uygun olarak işlenmektedir.
            </p>
          </section>

          {/* Data Controller */}
          {/* <section>
            <div className="flex items-center space-x-2 mb-4">
              <Users className="text-[#0a66c2]" size={20} />
              <h2 className="text-xl font-semibold text-gray-900">
                Veri Sorumlusu
              </h2>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Şirket:</strong> EuroJobs Teknoloji A.Ş.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Adres:</strong> [Şirket adresi buraya eklenecek]
              </p>
              <p className="text-gray-700 mb-2">
                <strong>E-posta:</strong> kvkk@eurojobs.com
              </p>
              <p className="text-gray-700">
                <strong>Telefon:</strong> +90 232 XXX XX XX
              </p>
            </div>
          </section> */}

          {/* Data Collection */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <Database className="text-[#0a66c2]" size={20} />
              <h2 className="text-xl font-semibold text-gray-900">
                Toplanan Kişisel Veriler
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  İş Arayan Kullanıcılar İçin:
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Ad, soyad ve iletişim bilgileri (e-posta, telefon)</li>
                  <li>Özgeçmiş bilgileri (eğitim, deneyim, beceriler)</li>
                  <li>Konum bilgileri</li>
                  <li>Hesap tercih ve ayarları</li>
                  <li>Platform kullanım verileri</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  İşveren Kullanıcılar İçin:
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Şirket bilgileri ve yetkili kişi bilgileri</li>
                  <li>İş ilanı detayları</li>
                  <li>Faturalandırma bilgileri</li>
                  <li>İletişim tercihleri</li>
                  <li>Platform kullanım istatistikleri</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Processing Purposes */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Kişisel Verilerin İşlenme Amaçları
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">
                  Temel Hizmetler
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• İş ilanları ile iş arayan eşleştirme</li>
                  <li>• Kullanıcı hesap yönetimi</li>
                  <li>• Müşteri destek hizmetleri</li>
                  <li>• Güvenlik ve dolandırıcılık önleme</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">
                  İletişim ve Pazarlama
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• E-posta bildirimleri gönderme</li>
                  <li>• Kişiselleştirilmiş iş önerileri</li>
                  <li>• Platform güncellemeleri</li>
                  <li>• Pazarlama iletişimi (onay ile)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Legal Basis */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              İşlemenin Hukuki Dayanağı
            </h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0a66c2] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Sözleşmenin İfası:</strong> Platform hizmetlerinin
                  sunulması
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0a66c2] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Meşru Menfaat:</strong> Güvenlik, dolandırıcılık
                  önleme ve hizmet iyileştirme
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0a66c2] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Açık Rıza:</strong> Pazarlama iletişimi ve isteğe
                  bağlı özellikler
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0a66c2] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Hukuki Yükümlülük:</strong> Yasal gerekliliklerin
                  yerine getirilmesi
                </p>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Veri Paylaşımı
            </h2>
            <p className="text-gray-700 mb-4">
              Kişisel verileriniz aşağıdaki durumlarda ve kişilerle
              paylaşılabilir:
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <ul className="text-gray-700 space-y-2">
                <li>
                  • <strong>İşverenler:</strong> İş başvurunuz için gerekli
                  bilgiler
                </li>
                <li>
                  • <strong>Hizmet Sağlayıcılar:</strong> Teknik altyapı ve
                  destek hizmetleri
                </li>
                <li>
                  • <strong>Yasal Yükümlülükler:</strong> Mahkeme kararları,
                  kamu otoriteleri
                </li>
                <li>
                  • <strong>İş Ortakları:</strong> Entegre hizmetler (açık rıza
                  ile)
                </li>
              </ul>
            </div>
          </section>

          {/* International Transfer */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Yurtdışına Veri Aktarımı
            </h2>
            <p className="text-gray-700 mb-4">
              Verileriniz, hizmet kalitesini artırmak amacıyla AB/EEA dışındaki
              ülkelere aktarılabilir. Bu durumda, KVKK ve GDPR'nin öngördüğü
              uygun güvenlik önlemleri alınmaktadır.
            </p>
            <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>Güvenlik Önlemleri:</strong> Standart sözleşme
                hükümleri, yeterlilik kararları ve diğer uygun güvenceler
                kullanılmaktadır.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Veri Saklama Süreleri
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Veri Türü
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Saklama Süresi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Özgeçmiş ve profil bilgileri
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Hesap aktif olduğu sürece + 2 yıl
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      İş başvuru kayıtları
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      İş süreci tamamlandıktan sonra 1 yıl
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      İletişim kayıtları
                    </td>
                    <td className="border border-gray-300 px-4 py-2">3 yıl</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      Finansal kayıtlar
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      10 yıl (yasal yükümlülük)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Veri Sahibi Hakları
            </h2>
            <p className="text-gray-700 mb-4">
              KVKK ve GDPR kapsamında sahip olduğunuz haklar:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#0a66c2] rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>Bilgi alma hakkı</strong>
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#0a66c2] rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>Erişim hakkı</strong>
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#0a66c2] rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>Düzeltme hakkı</strong>
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#0a66c2] rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>Silme hakkı</strong>
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#0a66c2] rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>İşlemeye itiraz hakkı</strong>
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#0a66c2] rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>Veri taşınabilirliği hakkı</strong>
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#0a66c2] rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>Rıza geri çekme hakkı</strong>
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#0a66c2] rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>Şikayet hakkı</strong>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Güvenlik Önlemleri
            </h2>
            <p className="text-gray-700 mb-4">
              Kişisel verilerinizin güvenliğini sağlamak için aşağıdaki teknik
              ve idari önlemleri almaktayız:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <Shield className="mx-auto text-[#0a66c2] mb-2" size={32} />
                <h3 className="font-medium text-gray-900 mb-1">
                  Teknik Güvenlik
                </h3>
                <p className="text-sm text-gray-600">
                  SSL şifreleme, güvenli sunucular
                </p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <Users className="mx-auto text-[#0a66c2] mb-2" size={32} />
                <h3 className="font-medium text-gray-900 mb-1">
                  Erişim Kontrolü
                </h3>
                <p className="text-sm text-gray-600">
                  Yetkilendirme ve kimlik doğrulama
                </p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <Database className="mx-auto text-[#0a66c2] mb-2" size={32} />
                <h3 className="font-medium text-gray-900 mb-1">
                  Veri Yedekleme
                </h3>
                <p className="text-sm text-gray-600">
                  Düzenli yedekler ve kurtarma planları
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              İletişim
            </h2>
            <p className="text-gray-700 mb-4">
              Gizlilik politikamız ile ilgili sorularınız veya veri sahibi
              haklarınızı kullanmak için:
            </p>
            <div className="bg-[#0a66c2] bg-opacity-5 border border-[#0a66c2] border-opacity-20 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-[#0a66c2]" size={20} />
                  <div>
                    <p className="font-medium text-white">E-posta</p>
                    <p className="text-white">destek.uluslararasikariyer@gmail.com</p>
                  </div>
                </div>
                {/* <div className="flex items-center space-x-3">
                  <Phone className="text-[#0a66c2]" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Telefon</p>
                    <p className="text-gray-700">+90 232 XXX XX XX</p>
                  </div>
                </div> */}
              </div>
              <div className="mt-4 pt-4 border-t border-[#0a66c2] border-opacity-20">
                <p className="text-sm text-white">
                  Talebiniz en geç 30 gün içinde değerlendirilecek ve size geri
                  dönüş yapılacaktır.
                </p>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Politika Güncellemeleri
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-gray-700">
                Bu gizlilik politikası gerektiğinde güncellenebilir. Önemli
                değişiklikler durumunda e-posta veya platform üzerinden
                bilgilendirme yapılacaktır. Politikayı düzenli olarak gözden
                geçirmenizi öneriyoruz.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
