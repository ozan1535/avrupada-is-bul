import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "İspanya Vize Başvurusu 2026 – Türkiye'den Eksiksiz Rehber",
  description:
    "2026'da İspanya vizesi nasıl alınır? Schengen vize türleri, gerekli belgeler, BLS başvuru merkezleri, güncel ücretler ve randevu süreci. Türk vatandaşları için eksiksiz rehber.",
  keywords: [
    "ispanya vize başvurusu 2026",
    "ispanya schengen vizesi",
    "ispanya vizesi nasıl alınır",
    "ispanya vize belgeler",
    "ispanya vize ücreti",
    "bls international ispanya",
    "ispanya vize randevu",
    "schengen vizesi türkiye 2026",
    "ispanya turistik vize",
  ],
  alternates: {
    canonical: "/vize-rehberi/ispanya-vize-basvurusu",
  },
  openGraph: {
    title: "İspanya Vize Başvurusu 2026 | Adım Adım Schengen Vize Rehberi",
    description:
      "Schengen vize türleri, gerekli belgeler, BLS başvuru merkezleri ve randevu süreci ile eksiksiz İspanya vize rehberi.",
    type: "article",
    locale: "tr_TR",
  },
};

// ─── Yardımcı bileşenler ──────────────────────────────────────────────────────

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium text-blue-500 tracking-widest uppercase mb-3">
      <span className="block w-4 h-px bg-blue-400 flex-shrink-0" />
      {children}
    </span>
  );
}

function InfoBox({
  type,
  children,
}: {
  type: "warning" | "info" | "tip";
  children: React.ReactNode;
}) {
  const map = {
    warning: {
      wrap: "bg-amber-50 border-amber-200 text-amber-900",
      icon: (
        <svg
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="flex-shrink-0 mt-0.5"
        >
          <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        </svg>
      ),
    },
    info: {
      wrap: "bg-blue-50 border-blue-200 text-blue-900",
      icon: (
        <svg
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="flex-shrink-0 mt-0.5"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4m0-4h.01" />
        </svg>
      ),
    },
    tip: {
      wrap: "bg-emerald-50 border-emerald-200 text-emerald-900",
      icon: (
        <svg
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="flex-shrink-0 mt-0.5"
        >
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  };
  const { wrap, icon } = map[type];
  return (
    <div
      className={`flex gap-3 border rounded-xl p-4 text-sm leading-relaxed font-light ${wrap}`}
    >
      {icon}
      <div>{children}</div>
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm font-light text-slate-600 leading-relaxed">
      <svg
        width="15"
        height="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
        className="flex-shrink-0 mt-0.5 text-blue-400"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
      {children}
    </li>
  );
}

function StepHeader({ no, title }: { no: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
        <span className="text-sm font-medium text-blue-500">{no}</span>
      </div>
      <h2 className="font-serif text-2xl lg:text-3xl text-slate-800 tracking-tight leading-snug">
        {title}
      </h2>
    </div>
  );
}

// ─── Sayfa ────────────────────────────────────────────────────────────────────

export default function IspanyaVizePage() {
  return (
    <article className="w-full bg-white font-sans">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <header className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-6 py-14 lg:py-20">
          <InfoBox type="warning">
            Bu rehber Ocak 2026 tarihinde T.C. uyruğuna sahip vatandaşlar için
            bilgi amaçlı hazırlanmıştır. Bilgilerin güncelliğini resmi
            kaynaklardan kontrol etmeyi unutmayınız. Başvuru aşamasında resmi
            kurumların belirlediği kurallar geçerlidir.
          </InfoBox>

          <div className="mt-8">
            <SectionTag>Vize Rehberi 2026</SectionTag>
            <h1 className="font-serif text-4xl lg:text-5xl leading-tight tracking-tight text-slate-800 mb-5">
              İspanya Vize Başvurusu Rehberi
            </h1>
            <p className="text-lg font-light text-slate-500 leading-relaxed max-w-xl">
              İspanya&apos;ya seyahat planlayan Türk vatandaşları için vize
              süreci, doğru adımları izlediğinizde oldukça yönetilebilir bir
              süreçtir. Başvuru öncesi hazırlıktan vize sonucuna kadar her adımı
              bu rehberde bulabilirsiniz.
            </p>
          </div>

          {/* İstatistik kartları */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
            {[
              { sayi: "90 €", etiket: "Schengen vize harcı" },
              { sayi: "7–15", etiket: "İş günü (ort.)" },
              { sayi: "6 ay", etiket: "Erken başvuru süresi" },
              { sayi: "5 şehir", etiket: "BLS başvuru merkezi" },
            ].map((s) => (
              <div
                key={s.etiket}
                className="bg-white border border-slate-200 rounded-xl p-4 text-center"
              >
                <p className="font-serif text-2xl leading-none text-slate-800 tracking-tight mb-1">
                  {s.sayi}
                </p>
                <p className="text-xs text-slate-400 font-light">{s.etiket}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Hero görseli ──────────────────────────────────────────────────── */}
      <div className="relative h-56 lg:h-80 w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1656597787628-62741d181641?w=1600&q=80&auto=format&fit=crop"
          alt="Barselona La Sagrada Familia ve şehir manzarası"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* ── Ana içerik ────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 py-14 lg:py-20 space-y-20">
        {/* ── Adım 1: Hazırlık ─────────────────────────────────────────── */}
        <section aria-labelledby="adim-1">
          <StepHeader no="01" title="Başvuru Öncesi Hazırlık" />

          <p className="text-base font-light text-slate-500 leading-relaxed mb-5">
            İspanya, Schengen Bölgesi üyesi olduğundan kısa süreli (90 günü
            aşmayan) seyahatler için Schengen C tipi vize gerekir. Uzun süreli
            veya ikamet amaçlı seyahatler için ise ulusal D tipi vize söz
            konusudur. Hangi vize türüne başvurmanız gerektiğini netleştirmek,
            sürecin en kritik ilk adımıdır.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                baslik: "Pasaport kontrolü",
                aciklama:
                  "Pasaportunuzun son 10 yıl içinde düzenlenmiş ve dönüş tarihinden sonra en az 6 ay daha geçerli olması gerekir. En az 2 boş vize sayfası zorunludur.",
              },
              {
                baslik: "Sigorta şartı",
                aciklama:
                  "Tüm Schengen ülkelerinde geçerli, asgari 30.000 € teminatlı ve tıbbi tahliyeyi kapsayan seyahat sağlık sigortası zorunludur.",
              },
              {
                baslik: "Erken randevu alın",
                aciklama:
                  "Yaz sezonu ve resmi tatil dönemlerinde randevu bulmak zorlaşır. Plan netleşir netleşmez randevu sürecine başlamak olası gecikmeleri önler.",
              },
              {
                baslik: "Belge tutarlılığı",
                aciklama:
                  "Form, pasaport, banka dökümü ve rezervasyon bilgilerinin birbiriyle tam uyumlu olması zorunludur. Tutarsızlıklar red riskini artırır.",
              },
            ].map((k) => (
              <div
                key={k.baslik}
                className="border border-slate-200 rounded-xl p-5 bg-white"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <p className="text-sm font-medium text-slate-800">
                    {k.baslik}
                  </p>
                </div>
                <p className="text-sm font-light text-slate-500 leading-relaxed pl-3.5">
                  {k.aciklama}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <InfoBox type="info">
              Schengen vizesi başvuruları, seyahat tarihinden en erken{" "}
              <strong className="font-medium">6 ay önce</strong>{" "}
              yapılabilmektedir. Resmi kaynaklar en az 1 ay önceden başvuru
              yapılmasını önermektedir; ancak yoğun dönemlerde bu süre
              yetmeyebilir.
            </InfoBox>
            <InfoBox type="tip">
              <strong className="font-medium">
                e-Devlet belgeler kabul ediliyor:
              </strong>{" "}
              Barkodlu ikametgah belgesi, vukuatlı nüfus kayıt örneği ve SGK
              hizmet dökümü, güncel olmaları şartıyla çoğu başvuruda tercüme
              olmaksızın kabul edilmektedir. Uzun süreli vize başvurularında
              yeminli tercüme istenebilir; BLS International&apos;ı önceden
              kontrol edin.
            </InfoBox>
          </div>
        </section>

        {/* ── Vize Türleri ─────────────────────────────────────────────── */}
        <section aria-labelledby="vize-turleri">
          <SectionTag>Vize Türleri</SectionTag>
          <h2
            id="vize-turleri"
            className="font-serif text-2xl lg:text-3xl text-slate-800 tracking-tight leading-snug mb-6"
          >
            İspanya vize türleri
          </h2>
          <div className="space-y-3">
            {[
              {
                etiket: "Kısa Süreli — Schengen C Tipi",
                renk: "bg-blue-50 border-blue-200",
                badge: "bg-blue-100 text-blue-800",
                aciklama:
                  "Turizm, aile ziyareti, iş seyahati ve benzeri 90 günü aşmayan ziyaretler için. En yaygın başvurulan vize türüdür.",
              },
              {
                etiket: "Uzun Süreli — D Tipi Ulusal Vize",
                renk: "bg-violet-50 border-violet-200",
                badge: "bg-violet-100 text-violet-800",
                aciklama:
                  "Öğrenim, çalışma veya aile birleşimi gibi 90 günden uzun süre İspanya&apos;da kalınması gereken durumlar için.",
              },
              {
                etiket: "Transit Vize",
                renk: "bg-slate-50 border-slate-200",
                badge: "bg-slate-100 text-slate-700",
                aciklama:
                  "İspanya üzerinden üçüncü bir ülkeye geçiş yapılacaksa bazı durumlarda gereklidir.",
              },
              {
                etiket: "Özel Statü Vizeleri",
                renk: "bg-amber-50 border-amber-200",
                badge: "bg-amber-100 text-amber-800",
                aciklama:
                  "Diplomatik, resmi görev veya denizcilik gibi özel durumlara ait vizeler.",
              },
            ].map((v) => (
              <div key={v.etiket} className={`border rounded-xl p-5 ${v.renk}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded ${v.badge}`}
                  >
                    {v.etiket}
                  </span>
                </div>
                <p className="text-sm font-light text-slate-600 leading-relaxed">
                  {v.aciklama}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Vize Ücretleri ───────────────────────────────────────────── */}
        <section aria-labelledby="vize-ucretleri">
          <SectionTag>Ücretler</SectionTag>
          <h2
            id="vize-ucretleri"
            className="font-serif text-2xl lg:text-3xl text-slate-800 tracking-tight leading-snug mb-4"
          >
            İspanya vize ücretleri 2026
          </h2>
          <p className="text-base font-light text-slate-500 leading-relaxed mb-6">
            Aşağıdaki ücretler 2026 itibarıyla geçerli olan resmi harçlardır.
            BLS International hizmet bedeline ek olarak kargo gibi ek hizmetler
            ayrıca ücretlendirilebilir. Ücretler nakit ödenir ve iade edilmez;
            başvuru öncesinde resmi BLS İspanya Türkiye sitesini kontrol edin.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 mb-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-5 py-3.5 text-xs font-medium text-slate-700 tracking-wide uppercase">
                    Vize Türü
                  </th>
                  <th className="text-right px-5 py-3.5 text-xs font-medium text-slate-700 tracking-wide uppercase">
                    Ücret
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { tur: "Kısa Süreli Schengen (C Tipi)", ucret: "90 €" },
                  { tur: "Uzun Süreli (D Tipi)", ucret: "99 €" },
                  { tur: "6–12 Yaş Arası Çocuklar (C Tipi)", ucret: "45 €" },
                  { tur: "0–6 Yaş Arası Çocuklar", ucret: "Ücretsiz" },
                  { tur: "BLS International Hizmet Bedeli", ucret: "~19 USD" },
                ].map((row, i) => (
                  <tr
                    key={row.tur}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}
                  >
                    <td className="px-5 py-3.5 font-light text-slate-700">
                      {row.tur}
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <span className="inline-block bg-blue-50 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap">
                        {row.ucret}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <InfoBox type="info">
            BLS International hizmet bedeli başvuru başına yaklaşık 19
            USD&apos;dir (güncel kura göre TL karşılığı uygulanır). Opsiyonel ek
            hizmetler (kargo, SMS bildirimi, dosya kontrolü) zorunlu değildir.
          </InfoBox>
        </section>

        {/* ── Adım 2: Başvuru Formu ────────────────────────────────────── */}
        <section aria-labelledby="adim-2">
          <StepHeader no="02" title="Başvuru Formunu Doldurma" />
          <p className="text-base font-light text-slate-500 leading-relaxed mb-5">
            İspanya Schengen vizesi başvuru formu, başvuru merkezinin sitesinden
            veya İspanya dış temsilciliğinin web sayfasından indirilebilir.
            Formdaki tüm bilgiler pasaport, banka dökümleri ve diğer belgelerle
            birebir uyumlu olmalıdır; tarihler, isimler ve ayrıntılardaki
            tutarsızlıklar ret riskini artırır.
          </p>
          <div className="space-y-3">
            {[
              "Formu tamamladıktan sonra çıktısını imzalayarak dosyaya ekleyin; imza ve tarih alanlarını eksiksiz doldurun.",
              "Belgelerinizin orijinallerini ve fotokopilerini ayrı ayrı düzenleyin; başvuru merkezleri genellikle her ikisini de ister.",
              "Fotoğraf şartlarına dikkat edin: 35x45 mm, beyaz arka fon, son 6 ay içinde çekilmiş biyometrik fotoğraf.",
              "Tarihleri gün/ay/yıl formatında girin ve her sayfayı imzalamayı ihmal etmeyin.",
              "Daha önce Schengen ya da İspanya vizesi aldıysanız eski vize ve pasaport kayıtlarınızı dosyaya ekleyin.",
              "İş veya eğitim gibi Türkiye&apos;ye bağlayıcı unsurlarınızı belgelemek geri dönüş niyetinizi kanıtlar.",
            ].map((m, i) => (
              <CheckItem key={i}>{m}</CheckItem>
            ))}
          </div>
        </section>

        {/* ── Görsel ara bant ──────────────────────────────────────────── */}
        <div className="relative aspect-[21/7] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1620677368158-32b1293fac36?w=1400&q=80&auto=format&fit=crop"
            alt="İspanya Granada Elhamra sarayı ve bahçeleri"
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        {/* ── Adım 3: Belgeler ─────────────────────────────────────────── */}
        <section aria-labelledby="adim-3">
          <StepHeader no="03" title="Gerekli Belgelerin Hazırlanması" />

          <h3 className="font-serif text-xl text-slate-800 mb-4 tracking-tight">
            Tüm başvuru sahipleri için zorunlu belgeler
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              "Geçerli pasaport — dönüş tarihinden sonra en az 6 ay geçerli, en fazla 10 yıllık, en az 2 boş sayfası olan",
              "İmzalı vize başvuru formu",
              "2 adet biyometrik fotoğraf (35x45 mm, beyaz arka fon)",
              "Seyahat sağlık sigortası — min. 30.000 € teminat, tüm Schengen ülkelerinde geçerli, tıbbi tahliye dahil",
              "e-Devlet ikametgah belgesi (barkodlu)",
              "e-Devlet vukuatlı nüfus kayıt örneği (barkodlu)",
              "18 yaş altı çocuklar için Formül A veya doğum belgesi",
              "Uçuş rezervasyonu (gidiş–dönüş)",
              "Konaklama kanıtı — otel rezervasyonu veya noter onaylı davetiye",
              "Son 3 aylık banka hesap dökümü",
              "Seyahat niyet mektubu (Türkçe, İngilizce veya İspanyolca)",
            ].map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3.5"
              >
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0 mt-0.5 text-blue-400"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs font-light text-slate-600 leading-relaxed">
                  {b}
                </span>
              </div>
            ))}
          </div>

          <h3 className="font-serif text-xl text-slate-800 mb-4 tracking-tight">
            Çalışma durumuna göre ek belgeler
          </h3>
          <div className="space-y-3 mb-6">
            {[
              {
                grup: "Çalışanlar",
                belgeler: [
                  "İşveren yazısı / görev belgesi",
                  "SGK işe giriş bildirgesi",
                  "Son 3 aylık maaş bordrosu",
                  "İzin belgesi",
                ],
              },
              {
                grup: "Serbest meslek sahipleri",
                belgeler: [
                  "Vergi levhası",
                  "Ticaret sicil kaydı",
                  "Faaliyet belgesi",
                ],
              },
              {
                grup: "Öğrenciler",
                belgeler: [
                  "Öğrenci belgesi",
                  "Aile geçim belgeleri",
                  "Sponsor mektubu",
                ],
              },
              {
                grup: "Emekliler",
                belgeler: ["Emeklilik belgesi", "Maaş dökümü"],
              },
              {
                grup: "Ev hanımları",
                belgeler: [
                  "Eş / aile sponsorluk dilekçesi",
                  "Sponsorun gelir belgeleri",
                ],
              },
            ].map((g) => (
              <div
                key={g.grup}
                className="border border-slate-200 rounded-xl overflow-hidden"
              >
                <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
                  <p className="text-sm font-medium text-slate-800">{g.grup}</p>
                </div>
                <ul className="px-5 py-4 space-y-2">
                  {g.belgeler.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm font-light text-slate-500 leading-relaxed"
                    >
                      <svg
                        width="13"
                        height="13"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        className="flex-shrink-0 mt-0.5 text-blue-400"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <InfoBox type="warning">
              <strong className="font-medium">
                Finansal belgeler hakkında:
              </strong>{" "}
              Banka hesabının aktif ve makul düzeyde hareketli olması, son anda
              hesaba yüklü para yatırılmasından çok daha inandırıcı görünür.
              Seyahate kısa süre kala yapılan büyük transferler konsoloslukça
              geçici bakiye olarak değerlendirilebilir.
            </InfoBox>
            <InfoBox type="tip">
              <strong className="font-medium">Rezervasyon önerisi:</strong>{" "}
              Ücretli ama ücretsiz iptal seçeneği sunan rezervasyonları tercih
              edin. Vize onaylanmazsa plan değişikliğine esnek biçimde adapte
              olabilirsiniz.
            </InfoBox>
          </div>
        </section>

        {/* ── Görsel ara bant ──────────────────────────────────────────── */}
        <div className="relative aspect-[21/7] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1400&q=80&auto=format&fit=crop"
            alt="Madrid şehir manzarası ve Plaza Mayor"
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        {/* ── Adım 4: BLS Merkezleri ───────────────────────────────────── */}
        <section aria-labelledby="adim-4">
          <StepHeader
            no="04"
            title="Başvuru Merkezi Randevusu ve Biyometrik İşlemler"
          />

          <p className="text-base font-light text-slate-500 leading-relaxed mb-6">
            Türkiye&apos;deki İspanya vize başvuruları yalnızca yetkili{" "}
            <strong className="font-medium text-slate-700">
              BLS International
            </strong>{" "}
            resmi sitesi üzerinden online randevu alınarak yapılır. Randevu günü
            belgelerinizle şahsen giderek parmak izi ve dijital fotoğraf kaydını
            tamamlamanız zorunludur. BLS dosyayı kontrol edip konsolosluğa
            iletir; nihai karar İspanya Konsolosluğu tarafından verilir.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {["İstanbul", "Ankara", "Antalya", "İzmir", "Gaziantep"].map(
              (sehir) => (
                <div
                  key={sehir}
                  className="border border-slate-200 rounded-xl p-4 bg-white flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="text-blue-400"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-slate-800">{sehir}</p>
                </div>
              )
            )}
          </div>

          <div className="space-y-3">
            <InfoBox type="info">
              12 yaş altındaki çocuklar parmak izi işleminden muaftır. Ek
              hizmetler (kargo, SMS bildirimi, dosya kontrolü) opsiyoneldir ve
              zorunlu değildir.
            </InfoBox>
            <InfoBox type="tip">
              Başvuru merkezinin hangi illere hizmet verdiğini ve randevu
              müsaitliğini BLS International&apos;ın resmi Türkiye sitesinden
              önceden kontrol edin.
            </InfoBox>
          </div>
        </section>

        {/* ── Adım 5: Takip ────────────────────────────────────────────── */}
        <section aria-labelledby="adim-5">
          <StepHeader no="05" title="Başvuru Sonrası Süreç ve Vize Takibi" />
          <p className="text-base font-light text-slate-500 leading-relaxed mb-5">
            Başvuru tesliminden sonra dosyanız konsolosluk tarafından incelenir.
            Kısa süreli vizeler için ortalama değerlendirme süresi{" "}
            <strong className="font-medium text-slate-700">7–15 iş günü</strong>{" "}
            arasındadır. Yoğun sezonda veya ek belge talebi olması halinde bu
            süre uzayabilir.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Başvurunuzu BLS başvuru merkezinin takip sistemi veya verilen takip numarası üzerinden sorgulayabilirsiniz.",
              "Konsolosluk ek belge talep ederse zamanında yanıt vermek sürecin hızlanmasını sağlar.",
              "Başvuru merkezinin takip kanallarını düzenli olarak kontrol edin.",
            ].map((m, i) => (
              <CheckItem key={i}>{m}</CheckItem>
            ))}
          </ul>
        </section>

        {/* ── Adım 6: Sonuç ────────────────────────────────────────────── */}
        <section aria-labelledby="adim-6">
          <StepHeader no="06" title="Vize İşleminin Sonuçlanması" />

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-5">
              <p className="text-sm font-medium text-emerald-800 mb-2">
                Vize onaylanırsa
              </p>
              <p className="text-sm font-light text-emerald-700 leading-relaxed">
                Pasaportunuza vize etiketi yapıştırılır ve iade edilir ya da
                kargo ile gönderilir. Geçerlilik tarihleri, giriş sayısı ve
                kalış süresi bilgilerini dikkatle kontrol edin; hata tespit
                ederseniz hemen konsoloslukla iletişime geçin.
              </p>
            </div>
            <div className="border border-red-200 bg-red-50 rounded-xl p-5">
              <p className="text-sm font-medium text-red-800 mb-2">
                Vize reddedilirse
              </p>
              <p className="text-sm font-light text-red-700 leading-relaxed">
                Ret nedeni yazılı olarak bildirilir. İtiraz veya yeniden başvuru
                seçenekleri mevcuttur; ancak eksiklikleri gidermeden tekrar
                başvurmak genellikle aynı sonucu doğurur. Ret gerekçelerini
                dikkatle inceleyip belge setinizi güçlendirin.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <InfoBox type="tip">
              <strong className="font-medium">Özel durum: Aile ziyareti</strong>{" "}
              — Davet mektubunun ziyaret amacını, davet eden kişinin iletişim
              bilgilerini ve konaklama taahhüdünü açıkça belirtmesi gerekir.
              Resmi onay gerektiren durumlarda evrak yerel makamlarca
              doğrulanmalıdır.
            </InfoBox>
            <InfoBox type="tip">
              <strong className="font-medium">
                Özel durum: Ticari ziyaret
              </strong>{" "}
              — Davet eden şirketten alınan orijinal davet mektubu, toplantı
              programı ve sponsorluk detayları dosyaya eklenmelidir.
            </InfoBox>
            <InfoBox type="tip">
              <strong className="font-medium">
                Özel durum: Öğrenci vizesi
              </strong>{" "}
              — Kabul mektubu, öğrenim masraflarına ilişkin belgeler ve
              konaklama düzenlemeleri dosyada açıkça yer almalıdır.
            </InfoBox>
          </div>
        </section>

        {/* ── SSS ───────────────────────────────────────────────────────── */}
        <section aria-labelledby="sss">
          <SectionTag>SSS</SectionTag>
          <h2
            id="sss"
            className="font-serif text-2xl lg:text-3xl text-slate-800 tracking-tight leading-snug mb-6"
          >
            Sıkça sorulan sorular
          </h2>
          <div className="border-t border-slate-200">
            {[
              {
                soru: "İspanya vizesi kaç günde çıkar?",
                cevap:
                  "Kısa süreli Schengen başvuruları için ortalama 7–15 iş günü içinde sonuç alınır. Yoğun sezonda veya ek belge talebi durumunda bu süre uzayabilir.",
              },
              {
                soru: "İspanya vize başvurusu nerede yapılır?",
                cevap:
                  "Türkiye'deki başvurular yalnızca yetkili BLS International merkezleri üzerinden yapılır. İstanbul, Ankara, Antalya, İzmir ve Gaziantep'te başvuru merkezi bulunmaktadır.",
              },
              {
                soru: "Başvuruyu ne kadar önceden yapabilirim?",
                cevap:
                  "Schengen vize başvuruları seyahat tarihinden en erken 6 ay önce yapılabilir. Resmi kaynaklar en az 1 ay önceden başvurulmasını önermektedir; ancak yoğun dönemlerde mümkün olan en erken tarihte başvurmanız önerilir.",
              },
              {
                soru: "e-Devlet'ten alınan belgeler geçerli mi?",
                cevap:
                  "Barkodlu ikametgah belgesi, vukuatlı nüfus kayıt örneği ve SGK hizmet dökümü çoğu başvuruda tercüme olmaksızın kabul edilmektedir. Uzun süreli vize başvurularında yeminli tercüme istenebilir; BLS International'ı önceden bilgilendirin.",
              },
              {
                soru: "İptal edilebilir uçak ve otel rezervasyonu yeterli mi?",
                cevap:
                  "Evet, çoğu konsolosluk iptal edilebilir rezervasyonları kabul etmektedir. Ancak rezervasyonların gerçekçi ve mantıklı görünmesi gerekir; ücretsiz iptal seçeneği sunan rezervasyonlar hem vize için hem de plan değişikliği için en esnek çözümdür.",
              },
              {
                soru: "Seyahat sağlık sigortasında hangi özellikler aranıyor?",
                cevap:
                  "Sigorta poliçesinin tüm Schengen ülke topraklarında geçerli, asgari 30.000 € teminatlı ve tıbbi tahliyeyi kapsıyor olması zorunludur.",
              },
            ].map((item) => (
              <details
                key={item.soru}
                className="group border-b border-slate-200"
              >
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none">
                  <span className="text-sm font-medium text-slate-800 group-hover:text-blue-500 transition-colors">
                    {item.soru}
                  </span>
                  <span className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center flex-shrink-0 text-slate-400 text-sm group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="text-sm font-light text-slate-500 leading-relaxed pb-5">
                  {item.cevap}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ── Önemli notlar özeti ───────────────────────────────────────── */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
          <SectionTag>Özet</SectionTag>
          <h2 className="font-serif text-2xl text-slate-800 tracking-tight leading-snug mb-5">
            Başvuru öncesi kontrol listesi
          </h2>
          <ul className="space-y-3">
            {[
              "Pasaportunuzun son 10 yıl içinde düzenlendiğini ve dönüş tarihinden sonra en az 6 ay geçerli olduğunu doğrulayın.",
              "Min. 30.000 € teminatlı, tüm Schengen ülkelerinde geçerli seyahat sağlık sigortası alın.",
              "Banka hesabınızın son 3 aydaki hareketlerini düzenli tutun; son anda yüklü para yatırmaktan kaçının.",
              "Uçuş ve otel rezervasyonlarınızı ücretsiz iptal seçeneğiyle yapın.",
              "Tüm belgeler birbiriyle tutarlı olsun: form, pasaport, banka dökümü ve rezervasyonlar.",
              "Randevuyu seyahat tarihinizden mümkün olan en erken zamanda alın.",
              "e-Devlet belgelerini barkodlu ve güncel olarak indirin.",
            ].map((m, i) => (
              <CheckItem key={i}>{m}</CheckItem>
            ))}
          </ul>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        {/*  <section className="border border-slate-200 rounded-2xl p-8 lg:p-12 text-center bg-slate-50">
          <h2 className="font-serif text-2xl lg:text-3xl text-slate-800 tracking-tight leading-snug mb-3">
            Avrupa&apos;da çalışmayı planlıyor musunuz?
          </h2>
          <p className="text-sm font-light text-slate-500 leading-relaxed mb-8 max-w-md mx-auto">
            Almanya ve Avusturya çalışma vizesi başvuru şansınızı puan hesaplama
            araçlarımızla dakikalar içinde öğrenin.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/araclar/almanya-chancen-karte-puan-hesaplama"
              className="inline-block bg-slate-800 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Almanya Chancen Karte
            </a>
            <a
              href="/araclar/avusturya-red-white-red-kart-puan-hesaplama"
              className="inline-block border border-slate-300 text-slate-700 text-sm font-medium px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Avusturya Red-White-Red Kart
            </a>
          </div>
        </section> */}
      </div>
    </article>
  );
}
