// import RedWhiteRedCalculator from "@/components/RedWhiteRedCalculator/RedWhiteRedCalculator";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title:
//     "Uluslararası Kariyer - Avusturya Red-White-Red (Rot-Weiß-Rot ) Kart Puan Hesaplama",
//   description:
//     "Avusturya Red-White-Red Kart puan hesaplama aracımız ile Avusturya'da çalışma izni başvurusu yapıp yapamayacağınızı hızlıca öğrenin. Avrupa'da kariyerinize yön verin!",
// };

// function page() {
//   return <RedWhiteRedCalculator />;
// }

// export default page;

import RedWhiteRedCalculator from "@/components/RedWhiteRedCalculator/RedWhiteRedCalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avusturya Red-White-Red (Rot-Weiß-Rot) Kart Puan Hesaplama",
  description:
    "Avusturya Red-White-Red Kart puan hesaplama aracımız ile Avusturya'da çalışma izni başvurusu yapıp yapamayacağınızı hızlıca öğrenin. Avrupa'da kariyerinize yön verin!",
};

// ── SSS verisi ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Red-White-Red Kart nedir?",
    a: "Red-White-Red Kart (Rot-Weiß-Rot Karte), Avusturya'nın nitelikli yabancı uyruklu bireylere yönelik puan bazlı çalışma ve oturma izni sistemidir. Avusturya'nın işgücü ihtiyacını karşılamak amacıyla tasarlanan bu kart, başarılı başvurucuya ilk iki yıl belirli bir işverenle çalışma, ardından Red-White-Red Kart Plus ile tüm işverenlerle çalışabilme hakkı tanır.",
  },
  {
    q: "Red-White-Red Kart için kaç puan gerekiyor?",
    a: "Başvuru kategorisine göre gerekli minimum puan değişmektedir. 'Çok Aranan Nitelikli İşgücü' kategorisinde en az 70 puan, 'Diğer Anahtar İşgücü' kategorisinde ise en az 55 puan gerekmektedir. Puan hesaplamasında eğitim, dil becerisi, yaş ve iş deneyimi değerlendirilir.",
  },
  {
    q: "Hangi kategorilerde başvurabilir miyim?",
    a: "Başlıca kategoriler şunlardır: Çok Aranan Nitelikli İşgücü (Very Highly Qualified Workers), Diğer Anahtar İşgücü (Skilled Workers in Shortage Occupations), Mezun Olan Yabancı Öğrenciler (Graduates of Austrian Universities) ve Girişimciler (Self-Employed Key Workers). Her kategorinin kendine özgü puan eşiği ve şartları bulunmaktadır.",
  },
  {
    q: "Red-White-Red Kart Plus nedir?",
    a: "Red-White-Red Kart Plus, ilk kartın devamı niteliğinde olup işveren bağımsız çalışma hakkı tanır. Red-White-Red Kart sahibi olarak en az 21 ay çalışırsanız ya da belirli diğer koşulları karşılarsanız bu karta geçiş yapabilirsiniz. Eş ve çocuklarınız da aynı karta başvurma hakkı kazanır.",
  },
  {
    q: "Almanca bilmem gerekiyor mu?",
    a: "Almanca zorunlu değildir; ancak puan hesaplamasında ciddi bir avantaj sağlar. A1 düzeyinde Almanca 5 puan, A2 düzeyinde 10 puan, B1 düzeyinde 15 puan getirirken İngilizce dil becerisi de belirli kategorilerde puan kazandırabilir.",
  },
  {
    q: "Başvuru için hangi belgeler gereklidir?",
    a: "Genel olarak geçerli pasaport, diploma ve transkriptler, Almanca veya İngilizce dil sertifikası, güncel özgeçmiş, iş sözleşmesi veya iş teklif mektubu (varsa) ve Avusturyalı işverenin iş bildirim belgesi (Stellenangebot) gereklidir. Belgeler noter onaylı ve varsa Almanca'ya tercüme edilmiş olmalıdır.",
  },
  {
    q: "Başvuru ne kadar sürer?",
    a: "Başvuru, genellikle Avusturya büyükelçilikleri veya konsoloslukları aracılığıyla yapılır. Değerlendirme süreci ortalama 8–12 hafta sürmektedir. Avusturyalı işverenin ön onayı (AMS onayı) alındıktan sonra bireysel başvuruya geçilmektedir.",
  },
  {
    q: "Aile üyelerimi Avusturya'ya getirebilir miyim?",
    a: "Evet. Red-White-Red Kart sahibi olarak eşiniz ve 18 yaşından küçük çocuklarınız için aile birleşimi kapsamında oturma izni başvurusunda bulunabilirsiniz. Eşiniz Red-White-Red Kart Plus alarak Avusturya'da bağımsız olarak çalışma hakkı kazanabilir.",
  },
];

// ── Puan kriterleri özet tablosu ─────────────────────────────────────────────
const criteria = [
  { label: "Doktora (PhD) derecesi", points: "+20 puan" },
  { label: "Üniversite / yüksekokul mezuniyeti", points: "+15 puan" },
  { label: "Mesleki eğitim sertifikası", points: "+10 puan" },
  { label: "Almanca B1 veya üzeri", points: "+15 puan" },
  { label: "Almanca A2", points: "+10 puan" },
  { label: "Almanca A1", points: "+5 puan" },
  { label: "İngilizce B2 veya üzeri (bazı kategorilerde)", points: "+5 puan" },
  { label: "30 yaş altı", points: "+15 puan" },
  { label: "30–35 yaş arası", points: "+10 puan" },
  { label: "36–40 yaş arası", points: "+5 puan" },
  { label: "Avusturya'da eğitim / lisans tamamlama", points: "+10 puan" },
  { label: "Mevcut iş teklifi (talep edilen brüt maaş)", points: "+10 puan" },
];

// ── Kategoriler ───────────────────────────────────────────────────────────────
const categories = [
  {
    title: "Çok Aranan Nitelikli İşgücü",
    subtitle: "Very Highly Qualified Workers",
    threshold: "70 puan",
    desc: "Yüksek nitelikli, araştırmacı veya yönetici pozisyonlara yönelik en kapsamlı kategoridir. Belirli bir iş teklifine ihtiyaç duymadan başvurulabilir.",
  },
  {
    title: "Diğer Anahtar İşgücü",
    subtitle: "Skilled Workers in Shortage Occupations",
    threshold: "55 puan",
    desc: "Avusturya'nın eksiklik listesindeki (Mangelberufsliste) mesleklerde deneyimli olanlar için tasarlanmıştır. Geçerli bir iş teklifi ve AMS onayı zorunludur.",
  },
  {
    title: "Avusturya Mezunları",
    subtitle: "Graduates of Austrian Universities",
    threshold: "Diploma yeterli",
    desc: "Avusturya'da eğitimini tamamlayan yabancı öğrencilere yönelik özel kategori. Mezuniyet sonrası 12 ay iş arama hakkı tanır.",
  },
  {
    title: "Girişimciler",
    subtitle: "Self-Employed Key Workers",
    threshold: "Bireysel değerlendirme",
    desc: "Avusturya ekonomisine katkı sağlayacak iş planı sunan girişimciler için ayrı bir değerlendirme süreci uygulanır.",
  },
];

// ── Adımlar ───────────────────────────────────────────────────────────────────
const steps = [
  {
    no: "01",
    title: "Puanınızı Hesaplayın",
    desc: "Yukarıdaki aracı kullanarak hangi kategoride kaç puan topladığınızı öğrenin. Minimum eşiği aşıp aşmadığınızı kontrol edin.",
  },
  {
    no: "02",
    title: "İşveren Bulun & AMS Onayı Alın",
    desc: "Avusturyalı işvereniniz, sizin adınıza AMS (İşgücü Servisi) onayı başlatmalıdır. Eksiklik listesindeki mesleklerde bu adım zorunludur.",
  },
  {
    no: "03",
    title: "Belgelerinizi Hazırlayın",
    desc: "Diploma, transkript, dil sertifikası, özgeçmiş ve iş sözleşmenizi noter onaylı ve Almanca tercümesiyle hazırlayın.",
  },
  {
    no: "04",
    title: "Büyükelçilik Başvurusu Yapın",
    desc: "Bulunduğunuz ülkedeki Avusturya büyükelçiliğine Red-White-Red Kart başvurusu için randevu alın ve evrakları teslim edin.",
  },
  {
    no: "05",
    title: "Avusturya'ya Gelin & Çalışmaya Başlayın",
    desc: "Onay sonrası Avusturya'ya giriş yapın. İlk iki yıl belirlenen işverenle çalışın; süre sonunda Red-White-Red Kart Plus'a geçiş hakkı kazanırsınız.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────
const Page = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* ── 1. HESAPLAMA ARACI ─────────────────────────────────────────── */}
      <section aria-label="Red-White-Red Kart Puan Hesaplama Aracı">
        <RedWhiteRedCalculator />
      </section>

      {/* ── 2. RED-WHITE-RED KART NEDİR ───────────────────────────────── */}
      <section
        aria-labelledby="nedir-baslik"
        className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20"
      >
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-red-600 mb-3">
          Genel Bilgi
        </span>
        <h2
          id="nedir-baslik"
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Red-White-Red Kart (Rot-Weiß-Rot Karte) Nedir?
        </h2>
        <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
          <p>
            <strong className="text-gray-800">Red-White-Red Kart</strong>,
            Avusturya'nın AB dışından gelen nitelikli bireylere yönelik
            geliştirdiği puan bazlı çalışma ve oturma izni sistemidir. Avusturya
            bayrağının renklerinden adını alan bu kart, ülkenin artan işgücü
            ihtiyacını karşılamak amacıyla 2011 yılında hayata geçirilmiş ve
            düzenli güncellemelerle genişletilmiştir.
          </p>
          <p>
            Sistemi diğer vize türlerinden ayıran en önemli özellik, adayların
            eğitim, dil becerisi, yaş ve iş deneyimi gibi kriterlere göre
            puanlanmasıdır. Yeterli puanı toplayan bireyler, belirli bir iş
            teklifine sahip olmadan da başvuru yapabildiği kategoriler
            aracılığıyla Avusturya'da yasal olarak çalışabilir.
          </p>
          <p>
            Kart ilk iki yıl için belirli bir işverenle bağlı olarak verilir. Bu
            sürenin ardından başvurulabilen{" "}
            <strong className="text-gray-800">Red-White-Red Kart Plus</strong>,
            işveren kısıtlamasını kaldırır ve Avusturya genelinde herhangi bir
            işverenle çalışma özgürlüğü tanır.
          </p>
        </div>

        {/* Öne çıkan bilgi kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          {[
            { icon: "📅", label: "İlk Kart Süresi", value: "2 Yıl" },
            { icon: "🏆", label: "Çok Aranan Kategori", value: "70 Puan" },
            { icon: "🔑", label: "Anahtar İşgücü", value: "55 Puan" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center bg-red-50 rounded-2xl p-6 border border-red-100"
            >
              {/*               <span className="text-3xl mb-2">{item.icon}</span>
               */}
              <span className="text-sm text-gray-500 mb-1">{item.label}</span>
              <span className="text-xl font-bold text-red-700">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. KATEGORİLER ────────────────────────────────────────────── */}
      <section
        aria-labelledby="kategoriler-baslik"
        className="bg-gray-50 py-16 sm:py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-red-600 mb-3">
            Başvuru Kategorileri
          </span>
          <h2
            id="kategoriler-baslik"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Hangi Kategoride Başvurabilirsiniz?
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Red-White-Red Kart sistemi dört ana kategoriden oluşur. Profilinize
            en uygun kategoriyi seçerek başvuru sürecinizi planlayın.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {cat.subtitle}
                    </p>
                  </div>
                  <span className="flex-shrink-0 text-xs font-bold bg-red-100 text-red-700 rounded-full px-3 py-1 whitespace-nowrap">
                    {cat.threshold}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {cat.desc}
                </p>
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
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-red-600 mb-3">
          Puan Rehberi
        </span>
        <h2
          id="puan-baslik"
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight"
        >
          Puan Sistemi Nasıl Çalışır?
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Başvuru kategorinize göre farklı puan eşikleri geçerlidir. Aşağıdaki
          kriterler üzerinden toplam puanınızı oluşturursunuz.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-red-600 text-white">
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
                  <td className="px-5 py-3.5 text-right font-semibold text-red-700 whitespace-nowrap">
                    {row.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          * Puan kriterleri resmi Avusturya mevzuatına dayanmaktadır; güncel
          bilgi için{" "}
          <a
            href="https://www.migration.gv.at"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 underline"
          >
            migration.gv.at
          </a>{" "}
          adresini ziyaret edin.
        </p>
      </section> */}

      {/* ── 5. BAŞVURU ADIMLARI ───────────────────────────────────────── */}
      <section
        aria-labelledby="adimlar-baslik"
        className="bg-gray-50 py-16 sm:py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-red-600 mb-3">
            Süreç
          </span>
          <h2
            id="adimlar-baslik"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 leading-tight"
          >
            Başvuru Süreci Adım Adım
          </h2>

          <ol className="relative border-l-2 border-red-200 space-y-10 pl-8">
            {steps.map((step) => (
              <li key={step.no} className="relative">
                <span className="absolute -left-[2.85rem] top-0 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white text-xs font-bold shadow">
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
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-red-600 mb-3">
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
                <span className="flex-shrink-0 text-red-500 transition-transform duration-300 group-open:rotate-180">
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
                  "Avusturya Red-White-Red Kart (Rot-Weiß-Rot Karte) Nedir? Puan Sistemi ve Başvuru Rehberi",
                description:
                  "Avusturya Red-White-Red Kart vizesi hakkında kapsamlı bilgi: ne olduğu, başvuru kategorileri, puan sistemi nasıl çalışır ve başvuru süreci adım adım.",
                inLanguage: "tr",
                about: {
                  "@type": "Thing",
                  name: "Red-White-Red Karte",
                  sameAs:
                    "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/red-white-red-card/",
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
