import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fransa Vize Rehberi 2026 | Başvuru Adımları, Belgeler ve VFS Global",
  description:
    "Türk vatandaşları için Fransa Schengen vizesi rehberi. VFS Global başvurusu, gerekli belgeler, vize türleri, ücretler ve başvuru adımları. Ocak 2026 güncel bilgileri.",
  keywords: [
    "fransa vizesi",
    "fransa vize başvurusu 2026",
    "fransa schengen vizesi",
    "vfs global fransa",
    "fransa vize belgeleri",
    "fransa vize şartları",
    "fransa vize ücreti",
    "france-visas başvuru",
    "fransa vize rehberi",
    "türkiye fransa vize",
  ],
  openGraph: {
    title: "Fransa Vize Rehberi 2026 | Adım Adım Başvuru Kılavuzu",
    description:
      "VFS Global üzerinden Fransa vizesi başvurusu: belgeler, adımlar, ücretler ve sık yapılan hatalar hakkında güncel rehber.",
    locale: "tr_TR",
    type: "article",
  },
  alternates: {
    canonical: "/vize-rehberi/fransa",
  },
};

// ─── DATA ───────────────────────────────────────────────────────────────────

const STEPS = [
  {
    num: "01",
    title: "Başvuru Öncesi Hazırlık",
    anchor: "hazirlik",
  },
  {
    num: "02",
    title: "Başvuru Formunu Doldurma",
    anchor: "form",
  },
  {
    num: "03",
    title: "Belgeleri Hazırlama",
    anchor: "belgeler",
  },
  {
    num: "04",
    title: "Randevu ve Biyometrik",
    anchor: "randevu",
  },
  {
    num: "05",
    title: "Başvuru Sonrası Takip",
    anchor: "takip",
  },
  {
    num: "06",
    title: "Vize Sonuçlanması",
    anchor: "sonuc",
  },
];

const VISA_FEES = [
  { type: "Kısa Süreli Schengen (C Tipi)", fee: "90 Euro" },
  { type: "Uzun Süreli (D Tipi) Vize", fee: "99 Euro" },
  { type: "6–12 Yaş Arası Çocuklar (C Tipi)", fee: "45 Euro" },
  { type: "0–6 Yaş Arası Çocuklar", fee: "Ücretsiz" },
  { type: "VFS Global Hizmet Bedeli", fee: "~30 Euro (TL karşılığı)" },
];

const VISA_TYPES = [
  {
    title: "Kısa Süreli Schengen (C Tipi) Vize",
    desc: "90 günü aşmayan turistik, ticari veya aile ziyareti amaçlı seyahatler için verilir. 27 Schengen ülkesine giriş hakkı tanır.",
    duration: "90 güne kadar",
    highlight: true,
  },
  {
    title: "Uzun Süreli (D Tipi) Vize",
    desc: "90 günden fazla kalmayı planlayanlar için geçerlidir. Öğrenci, çalışma izni veya aile birleşimi başvurularını kapsar. Yalnızca Fransa'da geçerlidir.",
    duration: "90 günden fazla",
    highlight: false,
  },
  {
    title: "Transit Vize",
    desc: "Fransa üzerinden başka bir ülkeye geçiş yapacak yolcular için zorunludur.",
    duration: "Geçiş süresi",
    highlight: false,
  },
  {
    title: "Denizci ve Resmi Görev Vizesi",
    desc: "Özel statüde çalışan veya diplomatik görevle seyahat eden kişiler için düzenlenir.",
    duration: "Göreve göre",
    highlight: false,
  },
];

const REQUIRED_DOCS_ALL = [
  "Pasaport (son 10 yıl içinde düzenlenmiş, dönüş tarihinden itibaren en az 3 ay geçerli)",
  "Çevrimiçi doldurulmuş ve imzalanmış vize başvuru formu (france-visas.gouv.fr)",
  "2 adet biyometrik fotoğraf (35×45 mm, beyaz fon)",
  "Seyahat sağlık sigortası (en az 30.000 Euro teminatlı, tüm Schengen bölgesinde geçerli)",
  "Gidiş-dönüş uçak rezervasyonu",
  "Otel rezervasyonu veya Fransa'daki ev sahibi davetiyesi",
  "Kimlik fotokopisi ve tam vukuatlı nüfus kayıt örneği",
  "Son 3 aya ait banka hesap dökümü ve varsa maaş bordroları",
];

const EXTRA_DOCS = [
  {
    group: "Çalışanlar",
    items: [
      "İşveren yazısı ve izin belgesi",
      "SGK işe giriş bildirgesi",
      "Son 3 aylık maaş bordrosu",
    ],
  },
  {
    group: "Serbest Meslek Sahipleri",
    items: ["Vergi levhası", "Ticaret sicil kaydı", "Faaliyet belgesi"],
  },
  {
    group: "Öğrenciler",
    items: ["Öğrenci belgesi", "Aile geçim belgeleri", "Sponsor mektubu"],
  },
  {
    group: "Emekliler",
    items: ["Emeklilik belgesi", "Maaş dökümü"],
  },
  {
    group: "Ev Hanımları",
    items: [
      "Sponsor dilekçesi (eş ya da aile bireyi)",
      "Sponsorun gelir ve kimlik evrakları",
    ],
  },
];

const CENTERS = [
  { city: "Ankara", note: "İtalya Büyükelçiliği bölgesine dahil" },
  { city: "İstanbul", note: "" },
  { city: "İzmir", note: "" },
  { city: "Gaziantep", note: "" },
];

// ─── IMAGES ─────────────────────────────────────────────────────────────────
const HERO_IMG =
  "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=1400&q=80";
const PARIS_IMG =
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900&q=80";
const DOCS_IMG =
"https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=1400&q=80";

// ─── COMPONENT ──────────────────────────────────────────────────────────────
export default function FransaVizeRehberi() {
  return (
    <div
      className="bg-[#F8F9FC] text-[#1B2B4A]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&display=swap');`}</style>

      {/* ── HERO ── */}
      <section className="relative bg-[#0F1D33] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMG}
            alt="Paris Eyfel Kulesi"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1D33]/70 via-[#1B2B4A]/35 to-[#0F1D33]/70" />
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#4A7BC8]/20 border border-[#4A7BC8]/30 rounded-full text-[#7eb8f7] text-xs font-semibold tracking-widest uppercase mb-6">
                Vize Rehberi · 2026
              </span>
              <h1
                className="text-4xl lg:text-5xl text-white leading-[1.12] mb-5"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Fransa Vizesi:
                <br />
                <span className="italic text-[#7eb8f7]">
                  Adım Adım Başvuru Rehberi
                </span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed max-w-lg mb-8">
                VFS Global üzerinden Fransa Schengen vizesi başvurusu; gerekli
                belgeler, vize türleri, ücretler ve sık yapılan hatalar hakkında
                güncel bilgiler.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Güncelleme: Ocak 2026" },
                  { label: "T.C. vatandaşları için" },
                  { label: "VFS Global başvurusu" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7eb8f7]" />
                    <span className="text-white/60 text-sm">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step count pill */}
            <div className="hidden lg:flex flex-col gap-3">
              {[
                { num: "6", label: "başvuru adımı" },
                { num: "90€", label: "kısa süreli vize harcı" },
                { num: "15", label: "iş günü ortalama süre" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-center min-w-[160px]"
                >
                  <p
                    className="text-3xl text-[#7eb8f7] leading-none mb-1"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {s.num}
                  </p>
                  <p className="text-white/40 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[900px] mx-auto px-6">
        {/* Notice */}
        <div className="flex items-start gap-3 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl px-5 py-4 my-10 text-sm text-amber-800 leading-relaxed">
          <svg
            className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
            />
          </svg>
          <span>
            <strong>Önemli Not:</strong> Bu içerik Ocak 2026 tarihi itibarıyla
            T.C. uyruğuna sahip vatandaşlar için bilgi amaçlı hazırlanmıştır.
            Güncel bilgileri{" "}
            <a
              href="https://france-visas.gouv.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium"
            >
              france-visas.gouv.fr
            </a>{" "}
            ve{" "}
            <a
              href="https://visa.vfsglobal.com/tur/tr/fra"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium"
            >
              VFS Global
            </a>{" "}
            resmi sitelerinden teyit etmeniz önerilir.
          </span>
        </div>

        {/* Step overview */}
        <section className="pb-10 border-b border-slate-200">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#4A7BC8] mb-3">
            Başvuru Adımları
          </p>
          <h2
            className="text-3xl lg:text-4xl text-[#1B2B4A] leading-tight mb-8"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            6 Adımda Fransa Vizesi
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {STEPS.map((s) => (
              <a
                key={s.anchor}
                href={`#${s.anchor}`}
                className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl px-5 py-4 hover:border-[#4A7BC8]/50 hover:shadow-md hover:shadow-slate-100 transition-all group"
              >
                <span
                  className="text-2xl text-slate-200 group-hover:text-[#4A7BC8] transition-colors flex-shrink-0 leading-none"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {s.num}
                </span>
                <span className="text-sm font-semibold text-[#1B2B4A] leading-tight">
                  {s.title}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ── ADIM 1: HAZIRLIK ── */}
        <section id="hazirlik" className="py-16 border-b border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-[#1B2B4A] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">01</span>
            </div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#4A7BC8]">
              Başvuru Öncesi Hazırlık
            </p>
          </div>
          <h2
            className="text-3xl lg:text-4xl text-[#1B2B4A] leading-tight mb-6"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Başvuru Öncesi Bilinmesi Gerekenler
          </h2>

          <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start mb-8">
            <div className="flex flex-col gap-5 text-[15px] text-[#4A5568] leading-relaxed">
              <p>
                Fransa, Schengen Bölgesi üyesidir. Bordo (umuma mahsus) pasaport
                sahibi Türk vatandaşlarının Fransa'ya giriş için Schengen vizesi
                alması zorunludur. Yeşil (hususi) ve gri (hizmet) pasaport
                sahipleri 180 gün içinde 90 günü aşmamak kaydıyla vizesiz
                seyahat edebilir. Siyah (diplomatik) pasaport sahipleri de
                benzer muafiyetten yararlanır.
              </p>
              <p>
                Başvuru yapmadan önce seyahat amacınıza uygun vize türünü
                belirlemeniz gerekir. Bunun için{" "}
                <a
                  href="https://france-visas.gouv.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4A7BC8] underline underline-offset-2 font-medium"
                >
                  france-visas.gouv.fr
                </a>{" "}
                adresindeki "Visa Wizard" aracı kullanılarak hangi vize türüne
                başvurulması gerektiği öğrenilebilir.
              </p>
              <p>
                Fransa vizesi başvuruları yalnızca yetkili aracı kurum olan{" "}
                <strong className="text-[#1B2B4A]">VFS Global</strong> üzerinden
                kabul edilir; konsolosluk doğrudan başvuru almaz. Başvuruların
                seyahat tarihinden en az 1 ay önce başlatılması önerilir. Ancak
                seyahat tarihinden 6 ay öncesine kadar da başvuru yapılabilir.
              </p>
              <p>
                Fransa, Schengen kuralları gereği günlük en az{" "}
                <strong className="text-[#1B2B4A]">65 Euro</strong> tutarında
                harcama kapasitesi göstermenizi bekler. Seyahate çok kısa süre
                kala hesaba yüklü para yatırmak, konsolosluklar tarafından
                geçici bakiye olarak değerlendirilebilir.
              </p>
              <div className="bg-[#EBF2FF] border border-[#C8D8F0] rounded-xl p-4 text-sm text-[#1B2B4A]">
                <strong>e-Devlet belgeleri:</strong> QR kodlu e-Devlet belgeleri
                (ikametgâh, nüfus kayıt örneği, SGK hizmet dökümü) çoğu başvuru
                merkezinde kabul edilir. Ancak bazı durumlarda Fransızca veya
                İngilizce yeminli tercüme talep edilebilir.
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-72 hidden lg:block">
              <Image
                src={PARIS_IMG}
                alt="Paris seyahat planlaması"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B4A]/30 to-transparent" />
            </div>
          </div>

          {/* VFS merkezleri */}
          <div>
            <p className="text-sm font-semibold text-[#1B2B4A] mb-3">
              VFS Global Başvuru Merkezleri
            </p>
            <div className="flex flex-wrap gap-3">
              {CENTERS.map((c) => (
                <div
                  key={c.city}
                  className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-[#2D3A50]"
                >
                  <div className="w-2 h-2 rounded-full bg-[#4A7BC8] flex-shrink-0" />
                  {c.city}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VİZE TÜRLERİ + ÜCRETLERİ ── */}
        <section className="py-16 border-b border-slate-200">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#4A7BC8] mb-3">
            Vize Türleri ve Ücretler
          </p>
          <h2
            className="text-3xl lg:text-4xl text-[#1B2B4A] leading-tight mb-10"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Hangi Vize, Ne Kadara?
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {VISA_TYPES.map((v) => (
              <div
                key={v.title}
                className={`bg-white rounded-2xl border-2 p-5 hover:shadow-md hover:shadow-slate-100 transition-all ${
                  v.highlight ? "border-[#4A7BC8]" : "border-slate-200"
                }`}
              >
                {v.highlight && (
                  <span className="inline-block bg-[#4A7BC8] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                    En Yaygın
                  </span>
                )}
                <h3
                  className="text-[15px] font-semibold text-[#1B2B4A] mb-2 leading-snug"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-[13px] text-[#5A6A82] leading-relaxed mb-3">
                  {v.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B2B4A] bg-slate-100 px-3 py-1.5 rounded-full">
                  <svg
                    className="w-3.5 h-3.5 text-[#4A7BC8]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {v.duration}
                </span>
              </div>
            ))}
          </div>

          {/* Fee table */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <div className="px-5 py-4 bg-[#1B2B4A]">
              <p
                className="text-white font-semibold text-sm"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                2026 Güncel Vize Ücretleri
              </p>
            </div>
            <div className="divide-y divide-slate-100">
              {VISA_FEES.map((f, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center px-5 py-3.5"
                >
                  <span className="text-[14px] text-[#3A4A60]">{f.type}</span>
                  <span className="text-[14px] font-semibold text-[#1B2B4A] ml-4 flex-shrink-0">
                    {f.fee}
                  </span>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 bg-slate-50 border-t border-slate-200">
              <p className="text-xs text-slate-500 leading-relaxed">
                Ücretler başvuru sırasında ödenir ve vize reddedilse bile iade
                edilmez. Dönemsel güncellemeler için VFS Global ve Fransa
                Konsolosluğu resmi sayfalarını kontrol edin.
              </p>
            </div>
          </div>
        </section>

        {/* ── ADIM 2: FORM ── */}
        <section id="form" className="py-16 border-b border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-[#1B2B4A] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">02</span>
            </div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#4A7BC8]">
              Başvuru Formu
            </p>
          </div>
          <h2
            className="text-3xl lg:text-4xl text-[#1B2B4A] leading-tight mb-6"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Başvuru Formunu Doldurma
          </h2>
          <div className="flex flex-col gap-5 text-[15px] text-[#4A5568] leading-relaxed max-w-2xl">
            <p>
              Fransa vize başvuru formu yalnızca{" "}
              <a
                href="https://france-visas.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A7BC8] underline underline-offset-2 font-medium"
              >
                france-visas.gouv.fr
              </a>{" "}
              adresinden çevrimiçi olarak doldurulur. Form İngilizce veya
              Fransızca olarak hazırlanabilir. Kişisel bilgiler, seyahat amacı,
              planlanan kalış süresi ve konaklama detaylarının doğru ve eksiksiz
              girilmesi gerekir.
            </p>
            <p>
              Form tamamlandıktan sonra sistem otomatik bir PDF oluşturur. Bu
              çıktı imzalanmalı ve başvuru sırasında sunulmalıdır. Sistem ayrıca
              VFS Global sayfasına yönlendirerek randevu alınmasını sağlar.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 leading-relaxed">
              <strong>Dikkat:</strong> Seyahat tarihleri ile otel
              rezervasyonundaki tarihler uyuşmazsa konsolosluk bu durumu şüpheli
              bulabilir. Başvuruda yanlış beyan tespit edilirse sonraki
              başvurularda otomatik ret alınabilir. Form bir kez gönderildikten
              sonra değişiklik yapılamaz.
            </div>
          </div>
        </section>

        {/* ── ADIM 3: BELGELER ── */}
        <section id="belgeler" className="py-16 border-b border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-[#1B2B4A] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">03</span>
            </div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#4A7BC8]">
              Gerekli Belgeler
            </p>
          </div>
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">
            <div>
              <h2
                className="text-3xl lg:text-4xl text-[#1B2B4A] leading-tight mb-6"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Belgelerin Hazırlanması
              </h2>
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-8">
                Belgelerin orijinal ve güncel olması gerekir. e-Devlet üzerinden
                alınan QR kodlu belgeler ile bankalar tarafından düzenlenen
                e-imzalı belgeler kabul edilir.
              </p>

              {/* All applicants */}
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-5">
                <div className="px-5 py-4 bg-[#1B2B4A]">
                  <p className="text-white font-semibold text-sm">
                    Tüm Başvuru Sahipleri İçin Zorunlu Belgeler
                  </p>
                </div>
                <div className="px-5 py-4">
                  <ul className="flex flex-col gap-3">
                    {REQUIRED_DOCS_ALL.map((doc, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-[14px] text-[#3A4A60] leading-relaxed"
                      >
                        <svg
                          className="w-4 h-4 text-[#4A7BC8] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Financial note */}
              <div className="bg-[#EBF2FF] border border-[#C8D8F0] rounded-2xl p-5 mb-5 text-sm text-[#1B2B4A] leading-relaxed">
                <p className="font-semibold mb-2">
                  Finansal Durum Belgelerine Dikkat
                </p>
                <p className="text-[#4A5568]">
                  Günlük 65 Euro harcama kapasitesini göstermeniz beklenir.
                  Banka hesap dökümleri ve maaş bordroları başvuru tarihine
                  yakın alınmış olmalıdır. Seyahate çok kısa süre kala hesaba
                  yüklü para yatırmak olumsuz etki yaratabilir. Sponsor desteği
                  varsa ıslak imzalı sponsorluk mektubu ve sponsorun gelir
                  belgeleri dosyaya eklenmelidir.
                </p>
              </div>

              {/* Per-group docs */}
              <div className="grid sm:grid-cols-2 gap-4">
                {EXTRA_DOCS.map((group) => (
                  <div
                    key={group.group}
                    className="bg-white border border-slate-200 rounded-2xl p-4"
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-[#4A7BC8] mb-3">
                      {group.group}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {group.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex gap-2.5 text-[13px] text-[#5A6A82] leading-relaxed"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#4A7BC8] flex-shrink-0 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-80 hidden lg:block">
              <Image
                src={DOCS_IMG}
                alt="Belge hazırlama"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B4A]/30 to-transparent" />
            </div>
          </div>
        </section>

        {/* ── ADIM 4: RANDEVU ── */}
        <section id="randevu" className="py-16 border-b border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-[#1B2B4A] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">04</span>
            </div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#4A7BC8]">
              Randevu ve Biyometrik
            </p>
          </div>
          <h2
            className="text-3xl lg:text-4xl text-[#1B2B4A] leading-tight mb-6"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            VFS Global Randevusu ve Biyometrik İşlemler
          </h2>
          <div className="flex flex-col gap-4 max-w-2xl">
            {[
              {
                title: "Randevu alın",
                desc: "Belgelerinizi hazırladıktan sonra VFS Global üzerinden randevu alınmalıdır. Randevu günü tüm belgeler ve çıktılar eksiksiz yanınızda olmalıdır.",
              },
              {
                title: "Pasaport teslim ve biyometrik veri",
                desc: "Başvuru sırasında pasaportunuz teslim edilir, parmak izi ve dijital fotoğraf alınır. 12 yaş altı çocuklar için parmak izi zorunlu değildir.",
              },
              {
                title: "Karar konsolosluğa ait",
                desc: "Randevu sırasında yetkililer yalnızca belgelerinizi teslim alır. Vize kararını Fransız Konsolosluğu verir. Bu nedenle belgelerin eksiksiz olması kritiktir.",
              },
              {
                title: "Sahte danışmanlık sitelerine dikkat",
                desc: "Tüm süreç boyunca yetkili kurum dışında kimseye evrak teslim edilmemelidir. Sahte siteler üzerinden randevu alınması ciddi sorunlara yol açabilir.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white border border-slate-200 rounded-xl px-5 py-4"
              >
                <div className="w-7 h-7 rounded-full bg-[#EBF2FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-[#4A7BC8]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#1B2B4A] text-[15px] mb-1">
                    {item.title}
                  </p>
                  <p className="text-[14px] text-[#5A6A82] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ADIM 5: TAKİP ── */}
        <section id="takip" className="py-16 border-b border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-[#1B2B4A] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">05</span>
            </div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#4A7BC8]">
              Başvuru Sonrası
            </p>
          </div>
          <h2
            className="text-3xl lg:text-4xl text-[#1B2B4A] leading-tight mb-6"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Başvuru Sonrası Süreç ve Takip
          </h2>
          <div className="flex flex-col gap-5 text-[15px] text-[#4A5568] leading-relaxed max-w-2xl mb-8">
            <p>
              Başvurunuzu teslim ettikten sonra dosyanız VFS Global tarafından
              Fransa Konsolosluğu'na iletilir. Ortalama değerlendirme süresi{" "}
              <strong className="text-[#1B2B4A]">10–15 iş günüdür.</strong>{" "}
              Yoğun dönemlerde bu süre 30 güne kadar uzayabilir. Uzun süreli
              vizeler için süreç genellikle 4–6 haftadır.
            </p>
            <p>
              Başvurunuzun durumunu VFS Global'in "Track Your Application"
              bölümünden veya France-Visas hesabınız üzerinden takip
              edebilirsiniz. Konsolosluk gerek gördüğünde ek belge veya mülakat
              talep edebilir; belirtilen süre içinde yanıt vermek önemlidir.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
              <p className="font-semibold text-emerald-700 mb-2 text-sm">
                Onay Halinde
              </p>
              <p className="text-[13.5px] text-emerald-600 leading-relaxed">
                Pasaportunuz kargo yoluyla adresinize gönderilir ya da VFS
                ofisinden şahsen teslim alınır.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
              <p className="font-semibold text-red-700 mb-2 text-sm">
                Red Halinde
              </p>
              <p className="text-[13.5px] text-red-600 leading-relaxed">
                Konsolosluk gerekçeli açıklama yapar. Bu belgeyle yeniden
                başvuru yapabilir veya karara 30 gün içinde itirazda
                bulunabilirsiniz.
              </p>
            </div>
          </div>
        </section>

        {/* ── ADIM 6: SONUÇLANMA ── */}
        <section id="sonuc" className="py-16 border-b border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-[#1B2B4A] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">06</span>
            </div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#4A7BC8]">
              Sonuçlanma
            </p>
          </div>
          <h2
            className="text-3xl lg:text-4xl text-[#1B2B4A] leading-tight mb-6"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Vize İşlemlerinin Sonuçlanması
          </h2>
          <div className="flex flex-col gap-5 text-[15px] text-[#4A5568] leading-relaxed max-w-2xl mb-8">
            <p>
              Vizeniz onaylandığında pasaportunuzdaki etiketi dikkatle
              inceleyin. Etiket üzerinde giriş-çıkış tarihleri, vize türü (tek
              veya çoklu giriş) ve geçerlilik süresi yazar. Çok girişli vize
              aldıysanız 180 gün içinde toplam 90 günü aşmamanız gerekir.
            </p>
            <p>
              Uzun süreli (D tipi) vize sahipleri Fransa'ya giriş yaptıktan
              sonra ilk 3 ay içinde vize onayı (validation) işlemini OFII veya
              online sistem üzerinden yapmak zorundadır. Bu işlem yapılmazsa
              oturum geçersiz sayılır.
            </p>
            <p>
              Vizeniz reddedildiyse en sık görülen gerekçeler şunlardır: seyahat
              amacının inandırıcı bulunmaması, finansal yetersizlik ve önceki
              vize ihlalleri. Aynı belgelerle kısa sürede tekrar başvurmak
              çoğunlukla aynı sonucu doğurur; hataların önce düzeltilmesi
              gerekir.
            </p>
          </div>

          <div className="bg-[#EBF2FF] border border-[#C8D8F0] rounded-2xl p-5 text-sm text-[#1B2B4A] leading-relaxed">
            <strong>Seyahat öncesi hatırlatmalar:</strong> Sigortanızın
            geçerliliğini kontrol edin, tüm belgelerin birer kopyasını yanınıza
            alın. Fransa sınırında konaklama ve dönüş bileti sorulabilir. Vize
            süresine uymak gelecekteki Schengen başvurularınızda olumlu etki
            yaratır.
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16">
          <div className="bg-gradient-to-br from-[#1B2B4A] to-[#2E4A7A] rounded-3xl p-10 lg:p-14 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2
                className="text-3xl lg:text-4xl text-white leading-tight mb-3"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Başvurunuz Reddedilir mi?
              </h2>
              <p className="text-white/55 text-[15px] leading-relaxed max-w-md">
                Başvurmadan önce red riskinizi ücretsiz değerlendirin. Finansal
                durum, seyahat geçmişi ve belge hazırlığınızı analiz edelim.
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-end gap-3">
              <a
                href="/araclar/schengen-vizesi-red-riski-tarama"
                className="inline-flex items-center gap-3 bg-[#4A7BC8] hover:bg-[#3A6AB8] text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 whitespace-nowrap"
              >
                Ücretsiz Risk Taraması
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
             
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
