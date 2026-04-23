// import type { Metadata } from "next";
// import RiskScannerClient from "./RiskScannerClient";

// export const metadata: Metadata = {
//   title: "Schengen Vizesi Red Riski Tarama | Schengen Başvurunuz Reddedilir mi?",
//   description:
//     "Schengen vize başvurusundan önce reddedilme riskini öğrenin. Finansal durum, iş geçmişi, seyahat geçmişi ve belge hazırlığını analiz eden ücretsiz değerlendirme aracı.",
//   keywords: [
//     "schengen vize reddedilir mi",
//     "vize red risk analizi",
//     "schengen vize başvurusu güçlendirme",
//     "vize red sebepleri",
//     "schengen başvurusu nasıl yapılır",
//     "vize başvurusu değerlendirme",
//     "schengen vize onay oranı",
//     "vize red scanner",
//   ],
//   openGraph: {
//     title: "Vize Red Risk Tarama — Başvurunuz Reddedilir mi?",
//     description:
//       "4 kategoride sorulara cevap verin, Schengen vize başvurunuzun red riskini öğrenin. Ücretsiz.",
//     locale: "tr_TR",
//     type: "website",
//   },
//   alternates: {
//     canonical: "/schengen-vizesi-red-riski-tarama",
//   },
// };

// export default function VizeRiskTaramaPage() {
//   return <RiskScannerClient />;
// }

import type { Metadata } from "next";
import RiskScannerClient from "./RiskScannerClient";

export const metadata: Metadata = {
  title: "Schengen Vizesi Red Riski Tarama | Başvurunuz Reddedilir mi?",
  description:
    "Schengen vize başvurunuzun reddedilme riskini ücretsiz öğrenin. Finansal durum, iş geçmişi, seyahat geçmişi ve belge hazırlığını analiz edin. 3 dakikada sonuç alın.",
  keywords: [
    "schengen vize reddedilir mi",
    "schengen vize red riski",
    "vize red risk analizi",
    "schengen vize başvurusu",
    "vize red sebepleri",
    "schengen vize onay oranı",
    "schengen başvurusu nasıl güçlendirilir",
    "vize başvurusu değerlendirme",
    "schengen vize red scanner",
    "avrupa vizesi reddedilir mi",
  ],
  openGraph: {
    title: "Schengen Vizesi Red Riski Tarama — Başvurunuz Reddedilir mi?",
    description:
      "4 kategoride sorulara cevap verin, Schengen vize başvurunuzun red riskini öğrenin. Ücretsiz, 3 dakikada sonuç.",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "/schengen-vizesi-red-riski-tarama",
  },
};

const faqItems = [
  {
    question: "Schengen vizesi neden reddedilir?",
    answer:
      "Schengen vizesi en sık şu nedenlerle reddedilir: yetersiz banka bakiyesi veya gelir kanıtı, ülkeye geri dönüş bağının zayıf olması (iş, aile, mülk gibi), eksik veya tutarsız belgeler, önceki vize ihlalleri ve seyahat amacının yetersiz desteklenmesi. Konsolosluklar başvuruyu bütüncül değerlendirir; tek bir eksiklik bile redde yol açabilir.",
  },
  {
    question: "Banka hesabımda ne kadar para olmalı?",
    answer:
      "Kesin bir rakam olmamakla birlikte genel kabul gören standart, Schengen bölgesinde geçireceğiniz her gün için 50–100 Euro'dur. 10 günlük seyahat için hesabınızda en az 500–1.000 Euro bulunması beklenir. Ancak para miktarı kadar paranın kaynağının da belgelenmesi (maaş bordrosu, gelir beyanı vb.) önemlidir.",
  },
  {
    question:
      "Daha önce Schengen vizem reddedildiyse tekrar başvurabilir miyim?",
    answer:
      "Evet, red kararı başvurmanızı engellemez. Ancak yeni başvuruda önceki reddi kabul etmeniz ve ret gerekçelerini giderdiğinizi belgeleyen ek dokümanlar sunmanız gerekir. Aynı eksikliklerle yapılan tekrar başvurular genellikle yine reddedilir.",
  },
  {
    question:
      "Serbest çalışan veya esnaf olarak başvururken ne hazırlamalıyım?",
    answer:
      "Serbest çalışanlar için belgeler daha kapsamlı olmalıdır: vergi levhası, son 3–6 aylık banka ekstresi, serbest meslek makbuzları veya faturalar, varsa muhasebeci tarafından hazırlanmış gelir tablosu ve faaliyet belgesi. Maaşlı çalışanlara kıyasla gelir istikrarını kanıtlamak daha zor olduğundan belgeler eksiksiz sunulmalıdır.",
  },
  {
    question: "Seyahat sigortası zorunlu mu, hangi özelliklere sahip olmalı?",
    answer:
      "Evet, Schengen vizesi başvurusu için seyahat sağlık sigortası zorunludur. Poliçenin tüm Schengen ülkelerini kapsaması ve minimum 30.000 Euro tıbbi masraf güvencesi sunması gerekir. Seyahat tarihlerini tam olarak kapsamayan veya limit altı poliçeler redde neden olabilir.",
  },
  {
    question: "Vize başvurusunu ne zaman yapmalıyım?",
    answer:
      "Schengen vizesi başvurusunu seyahat tarihinden en erken 6 ay, en geç 15 iş günü öncesinde yapabilirsiniz. Yoğun sezonda (yaz, bayram dönemleri) randevu almak zorlaştığından 2–3 ay öncesinden başvurmak önerilir. Erken başvuru aynı zamanda eksik belgelerinizi tamamlamak için zaman tanır.",
  },
  {
    question: "Hangi ülkenin konsolosluğuna başvurmalıyım?",
    answer:
      "Birden fazla Schengen ülkesini ziyaret edecekseniz en uzun süre kalacağınız ülkenin konsolosluğuna başvurmanız gerekir. Kalış süreleri eşitse ana giriş noktası olan ülkeye başvurulur. Yanlış konsoloslukla yapılan başvurular işleme alınmayabilir veya reddedilebilir.",
  },
  {
    question: "Red kararına itiraz edebilir miyim?",
    answer:
      "Evet. Red bildirimi size yazılı olarak iletilmeli ve gerekçe belirtilmelidir. İtiraz için genellikle 10–15 iş günü süreniz vardır. İtiraz dilekçesinde ret gerekçelerini tek tek ele almalı ve yeni/destekleyici belgeler sunmalısınız. İtiraz süreçleri uzun sürebileceğinden planlı seyahatler için zaman riski oluşturur.",
  },
];

const rejectionReasons = [
  {
    icon: "💰",
    title: "Yetersiz Finansal Kanıt",
    description:
      "Başvuruların önemli bir kısmı banka ekstresi yetersizliği veya gelir istikrarsızlığı nedeniyle reddedilir. Son 3–6 aya ait ekstreler, hesap hareketleri incelenir.",
  },
  {
    icon: "🏠",
    title: "Zayıf Geri Dönüş Bağı",
    description:
      "Konsolosluklar başvuranın ülkesine döneceğinden emin olmak ister. Sabit iş, mülk, aile veya eğitim gibi bağların yokluğu önemli bir red gerekçesidir.",
  },
  {
    icon: "📄",
    title: "Eksik veya Tutarsız Belgeler",
    description:
      "Belgelerdeki çelişkiler (rezervasyon tarihleri ile vize süresi uyumsuzluğu, farklı adreslerin beyanı vb.) başvuruyu zayıflatır. Her belge birbiriyle örtüşmeli.",
  },
  {
    icon: "✈️",
    title: "Önceki Vize İhlalleri",
    description:
      "Geçmişte vize süresini aşmak, yetkisiz ülkede kalmak veya ret kararı almak yeni başvuruları olumsuz etkiler. Bu geçmiş sistematik olarak sorgulanır.",
  },
  {
    icon: "🎯",
    title: "Seyahat Amacının Belirsizliği",
    description:
      "Turizm, iş, aile ziyareti gibi seyahat amacının otel rezervasyonu, davetiye, toplantı belgesi gibi somut kanıtlarla desteklenmemesi redde yol açar.",
  },
  {
    icon: "🛡️",
    title: "Eksik Seyahat Sigortası",
    description:
      "Tüm Schengen ülkelerini kapsamayan veya 30.000 Euro altı teminatlı poliçeler geçersiz sayılır. Sigorta bitiş tarihinin seyahat bitiş tarihini kapsaması şarttır.",
  },
];

const tips = [
  {
    step: "01",
    title: "Banka Ekstrenizi Güçlendirin",
    body: "Son 3 ay boyunca hesabınızda düzenli ve istikrarlı hareketler olmasına özen gösterin. Seyahat öncesinde ani büyük para yatırımları şüphe yaratabilir. Maaş bordrosu ve vergi beyannamesi banka ekstresini destekleyici belgeler olarak sunun.",
  },
  {
    step: "02",
    title: "Geri Dönüş Bağlarınızı Belgeleyin",
    body: "İş sözleşmesi, çalışma izni, kira sözleşmesi, tapu, nüfus cüzdanı veya öğrenci belgesi gibi ülkenize bağlılığınızı gösteren tüm belgelerinizi ekleyin. Bu belgeler konsolosluk kararını doğrudan etkiler.",
  },
  {
    step: "03",
    title: "Belge Uyumunu Kontrol Edin",
    body: "Uçak bileti, otel rezervasyonu, sigorta poliçesi ve vize başvuru formu tarihlerinin birbiriyle tam örtüştüğünden emin olun. Adres, isim yazımı ve pasaport numarası gibi detayların her belgede aynı şekilde yer alması gerekir.",
  },
  {
    step: "04",
    title: "Önceki Redleri Açıklayın",
    body: "Daha önce vize reddedildiyse yeni başvuruda bunu beyan edin ve ret gerekçelerini giderdiğinizi belgelerle gösterin. Gizlemeye çalışmak sistematik sorgulama sırasında tespit edilir ve güvenilirliğinizi ciddi ölçüde zedeler.",
  },
];

export default function VizeRiskTaramaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Risk Scanner (mevcut bileşen) ── */}
      <RiskScannerClient />

      {/* ── Reddedilme Sebepleri ── */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              Schengen Vizesi Neden Reddedilir?
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">
              Konsolosluklar başvuruyu bütüncül değerlendirir. En sık
              karşılaşılan red gerekçelerini önceden bilmek başvurunuzu
              güçlendirmenizi sağlar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rejectionReasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
{/*                 <div className="text-3xl mb-3">{reason.icon}</div>
 */}                <h3 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">
                  {reason.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Başvuruyu Güçlendirme İpuçları ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              Başvurunuzu Nasıl Güçlendirebilirsiniz?
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">
              Vize onay oranını artıran pratik adımlar — başvurmadan önce
              kontrol edin.
            </p>
          </div>

          <div className="space-y-5">
            {tips.map((tip) => (
              <div
                key={tip.step}
                className="flex gap-5 items-start bg-slate-50 rounded-2xl p-5 border border-slate-100"
              >
                <span className="text-2xl font-black text-slate-200 leading-none shrink-0 select-none">
                  {tip.step}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">
                    {tip.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {tip.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SSS ── */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              Sık Sorulan Sorular
            </h2>
            <p className="mt-3 text-slate-500 text-sm sm:text-base">
              Schengen vize başvurusu hakkında en çok merak edilenler.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer px-5 py-4 text-sm sm:text-base font-medium text-slate-800 list-none select-none hover:bg-slate-50 transition-colors">
                  <span>{item.question}</span>
                  <span className="shrink-0 text-slate-400 text-lg leading-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Uyarı Notu ── */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-xs sm:text-sm text-amber-800 leading-relaxed">
            <strong className="font-semibold">Önemli Not:</strong> Bu araç,
            Schengen vize başvurunuzun reddedilme riskini genel kriterler
            çerçevesinde değerlendiren bilgilendirici bir rehberdir. Sonuçlar
            hiçbir şekilde hukuki veya konsolosluk kararı niteliği taşımaz.
            Başvurunuzun sonucu yalnızca ilgili ülkenin konsolosluğu tarafından
            belirlenir.
          </div>
        </div>
      </section>
    </>
  );
}
