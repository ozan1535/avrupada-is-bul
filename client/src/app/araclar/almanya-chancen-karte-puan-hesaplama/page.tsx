// import ChancenKarteComponent from "@/components/ChancenKarteComponent/ChancenKarteComponent";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Almanya Chancen Karte (Fırsat Kartı) Puan Hesaplama",
//   description:
//     "Almanya Chancen Karte (Fırsat Kartı) puan hesaplama aracımız ile Almanya'da çalışma izni başvurusu yapıp yapamayacağınızı hızlıca öğrenin. Puanınızı şimdi hesaplayın!",
// };

// const page = () => {
//   return <ChancenKarteComponent />;
// };

// export default page;

import ChancenKarteComponent from "@/components/ChancenKarteComponent/ChancenKarteComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Uluslararası Kariyer - Almanya Chancen Karte (Fırsat Kartı) Puan Hesaplama",
  description:
    "Almanya Chancen Karte (Fırsat Kartı) puan hesaplama aracımız ile Almanya'da çalışma izni başvurusu yapıp yapamayacağınızı hızlıca öğrenin. Puanınızı şimdi hesaplayın!",
};

// ── SSS verisi ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Chancen Karte nedir?",
    a: "Chancen Karte (Fırsat Kartı), Almanya'nın 2024 yılında yürürlüğe giren yeni göç yasası kapsamında tanıttığı bir çalışma vizesi türüdür. Belirli bir iş teklifi olmaksızın, puan sistemi aracılığıyla nitelikli yabancı uyruklu kişilerin Almanya'da iş arama amacıyla 1 yıl süreyle bulunmasına olanak tanır.",
  },
  {
    q: "Chancen Karte için kaç puan gerekiyor?",
    a: "Başvuru yapabilmek için en az 6 puan toplamanız gerekmektedir. Almanya dışı tanınan bir niteliğiniz varsa bu şart 6 puan olarak sabitken, niteliğiniz Almanya'da tanınmış ise doğrudan başvurabilirsiniz.",
  },
  {
    q: "Hangi alanlarda puan kazanabilirim?",
    a: "Puanlar; mesleki nitelik ve tanınırlık, Almanca veya İngilizce dil seviyesi, yaş (35 yaş altı avantajlı), Almanya'da deneyim veya eğitim geçmişi ve eş/partnerin çalışabilir durumda olması gibi kriterlere göre hesaplanır.",
  },
  {
    q: "Chancen Karte ile Almanya'da çalışabilir miyim?",
    a: "Chancen Karte yalnızca iş arama vizesidir; tam zamanlı çalışmanıza izin vermez. Ancak haftada 20 saate kadar part-time çalışma ve 2 haftaya kadar deneme amaçlı (trial) çalışma hakkı tanır. İş bulduğunuzda vizanız çalışma iznine dönüştürülebilir.",
  },
  {
    q: "Almanca bilmek zorunda mıyım?",
    a: "Almanca zorunlu değildir; ancak puan hesaplamasında önemli bir avantaj sağlar. B2 seviyesinde Almanca, yüksek puan getirir. Almanca bilmiyorsanız İngilizce (B2+) ile de puan kazanabilirsiniz.",
  },
  {
    q: "Başvuru için hangi belgeler gereklidir?",
    a: "Genel olarak geçerli pasaport, diploma ve transkriptler, dil sertifikası, özgeçmiş, yeterli finansal kanıt (yaklaşık 1.027 € aylık) ve sağlık sigortası belgesi gerekmektedir. Belge listesi bireysel durumunuza göre değişebilir.",
  },
  {
    q: "Chancen Karte ne kadar sürede sonuçlanır?",
    a: "Başvuru süresi büyükelçilik ve ülkeye göre farklılık gösterir; genellikle 4–12 hafta arasında sonuçlanmaktadır. Randevu almak için önceden planlama yapmanız önerilir.",
  },
  {
    q: "Aile üyelerimi yanıma alabilir miyim?",
    a: "Chancen Karte tek başına aile birleşimi hakkı vermez. Ancak eşinizin çalışabilir olması puan hesaplamasında ek puan kazandırır. İş bulup çalışma iznine geçtiğinizde aile birleşimi başvurusu yapılabilir.",
  },
];

// ── Puan kriterleri özet tablosu ─────────────────────────────────────────────
const criteria = [
  { label: "Nitelik Almanya'da tanınmış", points: "Doğrudan başvuru" },
  { label: "Nitelik Almanya dışında tanınmış", points: "0 puan (temel şart)" },
  { label: "Almanca B2 veya üzeri", points: "+3 puan" },
  { label: "Almanca A1–B1", points: "+1 puan" },
  { label: "İngilizce B2 veya üzeri", points: "+2 puan" },
  { label: "35 yaş altı", points: "+2 puan" },
  { label: "36–40 yaş arası", points: "+1 puan" },
  { label: "Almanya'da eğitim/çalışma geçmişi", points: "+1 puan" },
  { label: "Eş/partner çalışabilir durumda", points: "+1 puan" },
];

// ── Adımlar ───────────────────────────────────────────────────────────────────
const steps = [
  {
    no: "01",
    title: "Puanınızı Hesaplayın",
    desc: "Yukarıdaki aracı kullanarak toplam puanınızı öğrenin. 6 puan ve üzeri başvuru için yeterlidir.",
  },
  {
    no: "02",
    title: "Belgeleri Hazırlayın",
    desc: "Diploma denklik belgesi, dil sertifikası, özgeçmiş ve finansal kanıt gibi evrakları eksiksiz toplayın.",
  },
  {
    no: "03",
    title: "Büyükelçilik Randevusu Alın",
    desc: "Bulunduğunuz ülkedeki Alman büyükelçiliğinden Chancen Karte vizesi için randevu talep edin.",
  },
  {
    no: "04",
    title: "Almanya'da İş Arayın",
    desc: "Vize onayından sonra 1 yıl boyunca iş görüşmeleri yapabilir, deneme çalışması gerçekleştirebilirsiniz.",
  },
  {
    no: "05",
    title: "Çalışma İznine Geçiş",
    desc: "İş bulduğunuzda Chancen Karte'nizi Almanca çalışma iznine (Aufenthaltserlaubnis) dönüştürün.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────
const Page = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* ── 1. HESAPLAMA ARACI ─────────────────────────────────────────── */}
      <section aria-label="Chancen Karte Puan Hesaplama Aracı">
        <ChancenKarteComponent />
      </section>

      {/* ── 2. CHANCEN KARTE NEDİR ────────────────────────────────────── */}
      <section
        aria-labelledby="nedir-baslik"
        className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20"
      >
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">
          Genel Bilgi
        </span>
        <h2
          id="nedir-baslik"
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Chancen Karte (Fırsat Kartı) Nedir?
        </h2>
        <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
          <p>
            <strong className="text-gray-800">Chancen Karte</strong>,
            Almanya'nın Kasım 2023'te yürürlüğe giren{" "}
            <em>Fachkräfteeinwanderungsgesetz</em> (Nitelikli İşgücü Göç Yasası)
            reformuyla hayata geçirilen yeni nesil bir çalışma vizesidir.
            "Fırsat Kartı" olarak da bilinen bu vize, nitelikli yabancı uyruklu
            bireylerin elinde kesin bir iş teklifi olmaksızın Almanya'ya gelerek
            iş aramalarına imkân tanır.
          </p>
          <p>
            Geleneksel çalışma vizelerinden temel farkı şudur: Almanya'ya
            gitmeden önce iş bulmanız gerekmez. Vize süresince haftada 20 saate
            kadar part-time çalışabilir, iş görüşmeleri yapabilir ve potansiyel
            işverenlerle en fazla 2 haftalık deneme çalışması
            gerçekleştirebilirsiniz. Bunların yanı sıra vize, 1 yıl geçerliliğe
            sahiptir ve bu süreyi Almanya'da geçirebilirsiniz.
          </p>
          <p>
            Almanya'nın artan işgücü açığını kapatmak amacıyla tasarlanan
            Chancen Karte, AB dışından gelen ve mesleki niteliğe sahip tüm
            yetişkinlere açıktır. Başvuru şartlarını karşılayan herkes, ülke
            veya sektör fark etmeksizin başvurabilir.
          </p>
        </div>

        {/* Öne çıkan bilgi kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          {[
            { icon: "📅", label: "Vize Süresi", value: "1 Yıl" },
            {
              icon: "💼",
              label: "Part-time Çalışma",
              value: "Haftada 20 saat",
            },
            { icon: "🎯", label: "Minimum Puan", value: "6 Puan" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center bg-blue-50 rounded-2xl p-6 border border-blue-100"
            >
             {/*  <span className="text-3xl mb-2">{item.icon}</span> */}
              <span className="text-sm text-gray-500 mb-1">{item.label}</span>
              <span className="text-xl font-bold text-blue-700">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. KİMLER BAŞVURABİLİR ───────────────────────────────────── */}
      <section
        aria-labelledby="sartlar-baslik"
        className="bg-gray-50 py-16 sm:py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">
            Başvuru Şartları
          </span>
          <h2
            id="sartlar-baslik"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Kimler Başvurabilir?
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Chancen Karte'ye başvurabilmek için aşağıdaki temel şartların
            tamamını karşılamanız gerekmektedir.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Tanınan Mesleki Nitelik",
                desc: "En az 2 yıllık mesleki eğitim veya üniversite diploması; Almanya'da ya da uluslararası alanda tanınmış olmalıdır.",
              },
              {
                title: "Geçerli Pasaport",
                desc: "AB üyesi olmayan bir ülkenin vatandaşı olmanız ve geçerli pasaportunuzun bulunması gerekmektedir.",
              },
              {
                title: "Yeterli Mali Kaynak",
                desc: "Almanya'da bulunduğunuz süre boyunca geçiminizi sağlayabilecek maddi güce (aylık yaklaşık 1.027 €) sahip olmalısınız.",
              },
              {
                title: "Sağlık Sigortası",
                desc: "Almanya'daki ikamet sürenizi kapsayan geçerli bir sağlık sigortanız olmalıdır.",
              },
              {
                title: "6 Puan veya Üzeri",
                desc: "Niteliğiniz Almanya'da tanınmamışsa puan sistemiyle en az 6 puan toplamanız gerekmektedir.",
              },
              {
                title: "Almanya'da İkametiniz Olmamalı",
                desc: "Başvuru anında Almanya'da ikamet etmiyor olmanız gerekir (yurt dışından başvurulur).",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 bg-white rounded-2xl p-5 border border-gray-200 shadow-sm"
              >
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PUAN SİSTEMİ TABLOSU ──────────────────────────────────── */}
      {/* <section
        aria-labelledby="puan-baslik"
        className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20"
      >
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">
          Puan Rehberi
        </span>
        <h2
          id="puan-baslik"
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight"
        >
          Puan Sistemi Nasıl Çalışır?
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Niteliğiniz Almanya'da tanınmamışsa aşağıdaki kriterlere göre puan
          kazanırsınız. <strong>Toplamda 6 puan</strong> başvuru için
          yeterlidir.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="text-left px-5 py-4 font-semibold">Kriter</th>
                <th className="text-right px-5 py-4 font-semibold whitespace-nowrap">
                  Puan
                </th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-5 py-3.5 text-gray-700">{row.label}</td>
                  <td className="px-5 py-3.5 text-right font-semibold text-blue-700 whitespace-nowrap">
                    {row.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section> */}

      {/* ── 5. BAŞVURU ADIMLARI ───────────────────────────────────────── */}
      <section
        aria-labelledby="adimlar-baslik"
        className="bg-gray-50 py-16 sm:py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">
            Süreç
          </span>
          <h2
            id="adimlar-baslik"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 leading-tight"
          >
            Başvuru Süreci Adım Adım
          </h2>

          <ol className="relative border-l-2 border-blue-200 space-y-10 pl-8">
            {steps.map((step) => (
              <li key={step.no} className="relative">
                {/* Nokta */}
                <span className="absolute -left-[2.85rem] top-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xs font-bold shadow">
                  {step.no}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 6. SSS ────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="sss-baslik"
        className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24"
      >
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">
          SSS
        </span>
        <h2
          id="sss-baslik"
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 leading-tight"
        >
          Sık Sorulan Sorular
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                <span className="font-semibold text-gray-900 text-base leading-snug">
                  {faq.q}
                </span>
                {/* Chevron */}
                <span className="flex-shrink-0 text-blue-500 transition-transform duration-300 group-open:rotate-180">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── 7. SCHEMA MARKUP (FAQPage + Article) ─────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.a,
                  },
                })),
              },
              {
                "@type": "Article",
                headline:
                  "Almanya Chancen Karte (Fırsat Kartı) Nedir? Puan Sistemi ve Başvuru Rehberi",
                description:
                  "Almanya Chancen Karte vizesi hakkında kapsamlı bilgi: ne olduğu, kimler başvurabilir, puan sistemi nasıl çalışır ve başvuru süreci adım adım.",
                inLanguage: "tr",
                about: {
                  "@type": "Thing",
                  name: "Chancen Karte",
                  sameAs:
                    "https://www.make-it-in-germany.com/en/visa-residence/types/opportunity-card",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
};

export default Page;
