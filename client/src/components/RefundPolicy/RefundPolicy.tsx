import React from "react";

const RefundPolicy = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        İade ve İptal Politikası
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Dijital ürünlerimizi satın aldığınız için teşekkür ederiz. Lütfen
          satın alma işlemini tamamlamadan önce bu politikayı dikkatlice okuyun.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Dijital Ürün İadeleri
          </h2>
          <p>
            E-kitaplar ve diğer dijital ürünler, ödeme başarıyla tamamlandıktan
            sonra anında teslim edilir. Dijital ürünlerin doğası gereği,
            ürün indirildikten veya erişim sağlandıktan sonra{" "}
            <span className="font-medium">genellikle iade edilemez</span>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            İstisnai Durumlar
          </h2>
          <p>
            Aşağıdaki durumlarda iade talepleri duruma göre
            değerlendirilebilir:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>E-kitabın indirilememesi veya erişim sorunları</li>
            <li>Çift ödeme yapılması</li>
            <li>Yanlışlıkla yapılan satın alımlar</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            İade Talebi Nasıl Yapılır?
          </h2>
          <p>
            İade talebinde bulunmak için lütfen sipariş numaranız ile birlikte
            kısa bir açıklamayı{" "}
            <a
              href="mailto:destek.uluslararasikariyer@gmail.com"
              className="text-blue-600 underline"
            >
              destek.uluslararasikariyer@gmail.com
            </a>{" "}
            adresine e-posta olarak gönderin. Talebiniz onaylanırsa, iade işlemi
            Lemon Squeezy tarafından, ödemenin yapıldığı yöntemle
            gerçekleştirilecektir.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            İptaller
          </h2>
          <p>
            Dijital ürünler satın alındıktan hemen sonra teslim edildiği için,
            satın alma işlemi tamamlandıktan sonra iptal mümkün değildir.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Ödeme ve İade İşlemleri
          </h2>
          <p>
            Tüm ödeme ve iade işlemleri, Merchant of Record olarak Lemon Squeezy
            tarafından yürütülmektedir. Lemon Squeezy, kendi alıcı şartlarına
            uygun olarak gerekli gördüğü durumlarda iade yapma hakkını saklı
            tutar.
          </p>
          <p className="mt-2">
            Lemon Squeezy Alıcı Şartları’nı buradan inceleyebilirsiniz:{" "}
            <a
              href="https://www.lemonsqueezy.com/buyer-terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://www.lemonsqueezy.com/buyer-terms
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
