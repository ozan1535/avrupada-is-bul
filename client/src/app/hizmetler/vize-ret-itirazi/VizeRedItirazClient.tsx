"use client";

import { useState, useRef } from "react";
import Image from "next/image";

// ─────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────
const PRICE = 499;
const DELIVERY_HOURS = "24–48";

// Unsplash free-to-use images (license: Unsplash License)
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?w=1200&q=80",
  // passport / documents on desk
  howItWorks:
    "https://images.unsplash.com/photo-1544654803-b69140b285a1?w=800&q=80",
  // person working at desk with documents
  trustSection:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80",
  // writing / signing document close-up
};

// ─────────────────────────────────────────
// DATA
// ─────────────────────────────────────────
const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Ödeme yapın",
    desc: "Güvenli ödeme adımını tamamlayın. Onay e-postası anında iletilir.",
  },
  {
    step: "02",
    title: "Bilgilerinizi paylaşın",
    desc: "Formu doldurun, red mektubunuzu yükleyin ya da metin olarak yapıştırın.",
  },
  {
    step: "03",
    title: "Dilekçeniz teslim edilir",
    desc: `${DELIVERY_HOURS} saat içinde kişiselleştirilmiş dilekçeniz PDF olarak e-postanıza gönderilir.`,
  },
];

const WHO_FOR = [
  {
    title: "Schengen Vizesi Reddi",
    desc: "Almanya, Fransa, İtalya, Hollanda ve tüm Schengen üye ülkeleri",
  },
  {
    title: "ABD Vizesi Reddi",
    desc: "B1/B2 turist ve iş amaçlı vize ret kararları",
  },
  {
    title: "Öğrenci Vizesi Reddi",
    desc: "Yurt dışı üniversite veya dil okulu başvuru redleri",
  },
  {
    title: "Çalışma Vizesi Reddi",
    desc: "İş ve çalışma izni amaçlı vize ret kararları",
  },
];

const TRUST_ITEMS = [
  { label: `${DELIVERY_HOURS} saatte teslimat` },
  { label: "1 ücretsiz revizyon hakkı" },
  { label: "Kişisel verileriniz güvende" },
  { label: "PDF olarak e-postanıza" },
  { label: "Tüm ülkeler için geçerli" },
];

const FAQS = [
  {
    q: "İtiraz dilekçesi gerçekten işe yarıyor mu?",
    a: "Konsolosluklar ret kararlarında çoğunlukla eksik veya yetersiz belge/gerekçe gösterir. Doğru argümanlarla hazırlanmış bir dilekçe, yeniden değerlendirme sürecinde ciddi fark yaratır. Garanti veremeyiz; ancak boş bir sayfa göndermekle profesyonel bir dilekçe göndermek arasında dağlar kadar fark var.",
  },
  {
    q: "Kaç gün içinde hazırlanır?",
    a: `Bilgilerinizi aldıktan itibaren ${DELIVERY_HOURS} iş saati içinde e-postanıza iletilir. Yoğun dönemlerde bu süre uzayabilir; önceden bilgilendirilirsiniz.`,
  },
  {
    q: "Hangi ülkelerin vizesi için geçerli?",
    a: "Schengen bölgesi (tüm üye ülkeler), ABD, İngiltere, Kanada, Avustralya ve diğer ülkeler için dilekçe hazırlayabiliyoruz. Formda ülkenizi belirtmeniz yeterli.",
  },
  {
    q: "Red mektubum Türkçe değil, sorun olur mu?",
    a: "Hayır. İngilizce, Almanca veya başka bir dildeki red mektuplarını da değerlendiriyoruz.",
  },
  {
    q: "Memnun kalmazsam ne olur?",
    a: "Dilekçenizi teslim aldıktan sonra 1 revizyon hakkınız bulunmaktadır. Değiştirmek istediğiniz kısımları bildirmeniz yeterli.",
  },
];

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────
type FormData = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  visaType: string;
  applicationDate: string;
  rejectionDate: string;
  rejectionReason: string;
  hasTraveledBefore: string;
  travelPurpose: string;
  extraNotes: string;
  file: File | null;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

// ─────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────
export default function VizeRedItirazClient() {
  const [formVisible, setFormVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [uploadMode, setUploadMode] = useState<"file" | "text">("file");
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    visaType: "",
    applicationDate: "",
    rejectionDate: "",
    rejectionReason: "",
    hasTraveledBefore: "",
    travelPurpose: "",
    extraNotes: "",
    file: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData])
      setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((p) => ({ ...p, file: e.target.files?.[0] ?? null }));
    if (errors.file) setErrors((p) => ({ ...p, file: "" }));
  };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.fullName.trim()) e.fullName = "Ad soyad gerekli";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Geçerli bir e-posta girin";
    if (!form.country.trim()) e.country = "Ülke gerekli";
    if (!form.visaType) e.visaType = "Vize türü seçin";
    if (!form.rejectionDate) e.rejectionDate = "Red tarihi gerekli";
    if (uploadMode === "text" && !form.rejectionReason.trim())
      e.rejectionReason = "Red gerekçesini yazın";
    if (uploadMode === "file" && !form.file) e.file = "Red mektubunu yükleyin";
    if (!form.travelPurpose.trim()) e.travelPurpose = "Seyahat amacı gerekli";
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return false;
    }
    return true;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Replace with your actual API call
    await new Promise((r) => setTimeout(r, 1800));
    setSubmitting(false);
    setSubmitted(true);
  };

  const openForm = () => {
    setFormVisible(true);
    setTimeout(
      () =>
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      80
    );
  };

  const inputBase =
    "w-full px-4 py-3 border border-slate-200 rounded-lg text-[15px] text-[#1B2B4A] bg-slate-50 focus:outline-none focus:border-[#4A7BC8] focus:ring-2 focus:ring-[#4A7BC8]/10 focus:bg-white transition-colors placeholder:text-slate-400";
  const inputError = "border-red-400 focus:border-red-400 focus:ring-red-100";

  return (
    <div className="bg-[#F8F9FC] text-[#1B2B4A] font-sans">
      {/* ── HERO ── */}
      <section className="relative bg-[#0F1D33] overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero}
            alt="Vize belgeleri"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1D33] via-[#1B2B4A]/50 to-[#0F1D33]/50" />
        </div>

        <div className="relative z-10 max-w-[900px] mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-red-500/15 border border-red-400/30 rounded-full text-red-300 text-xs font-semibold tracking-widest uppercase mb-6">
                Vize Reddedildi
              </span>
              <h1 className="font-['DM_Serif_Display',serif] text-4xl lg:text-5xl text-white leading-[1.12] mb-5">
                Vizeniz Reddedildi mi?
                <br />
                <span className="italic text-[#7eb8f7]">
                  İtiraz Dilekçenizi
                </span>{" "}
                Hazırlayalım.
              </h1>
              <p className="text-lg text-white/60 leading-relaxed max-w-lg mb-8">
                Red gerekçenizi analiz ediyor, konsolosluğun beklentilerine
                uygun kişiselleştirilmiş bir itiraz dilekçesi hazırlıyoruz.{" "}
                {DELIVERY_HOURS} saat içinde e-postanızda.
              </p>
              <button
                onClick={openForm}
                className="inline-flex items-center gap-3 bg-[#4A7BC8] hover:bg-[#3A6AB8] text-white font-semibold text-base px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#4A7BC8]/25"
              >
                Dilekçemi Hazırlat
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
              </button>
            </div>

            {/* Price card */}
            <div className="hidden lg:block bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-10 py-8 text-center">
              <p className="text-white/40 text-xs tracking-widest uppercase mb-3">
                Tek Seferlik
              </p>
              <p className="font-['DM_Serif_Display',serif] text-6xl text-[#7eb8f7] leading-none">
                <span className="text-3xl align-super">₺</span>
                {PRICE}
              </p>
              <p className="text-white/30 text-xs mt-3">
                + 1 ücretsiz revizyon
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[900px] mx-auto px-6">
        {/* ── PROBLEM ── */}
        <section className="py-16 border-b border-slate-200">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#4A7BC8] mb-3">
            Tanıdık Geliyor mu?
          </p>
          <h2 className="font-['DM_Serif_Display',serif] text-3xl lg:text-4xl text-[#1B2B4A] leading-tight mb-4">
            Vize Reddinde Herkesin
            <br />
            Hissettiği Çaresizlik
          </h2>
          <p className="text-[#4A5568] text-base leading-relaxed max-w-xl mb-10">
            Yurt dışı planlarınız bir kağıt parçasıyla alt üst oldu. Ama bu son
            söz değil. Doğru adımlarla itiraz etmek mümkün.
          </p>
          <div className="grid gap-3">
            {[
              "Red gerekçesi size anlamsız ya da haksız mı geldi?",
              "Tekrar başvurursanız yine reddedileceğinizden mi korkuyorsunuz?",
              "Ne yazacağınızı, nasıl itiraz edeceğinizi bilmiyor musunuz?",
              "Avukata para vermeden profesyonel bir dilekçe istiyorsunuz?",
            ].map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white border border-slate-200 border-l-4 border-l-red-500 rounded-r-xl px-5 py-4"
              >
                <svg
                  className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-[15px] text-[#2D3A50] leading-relaxed">
                  {p}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-16 border-b border-slate-200">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#4A7BC8] mb-3">
            Nasıl Çalışır?
          </p>
          <h2 className="font-['DM_Serif_Display',serif] text-3xl lg:text-4xl text-[#1B2B4A] leading-tight mb-4">
            3 Adımda Dilekçeniz Hazır
          </h2>
          <p className="text-[#4A5568] text-base leading-relaxed max-w-xl mb-12">
            Karmaşık bir süreç değil. Siz bilgilerinizi paylaşın, gerisini biz
            halledelim.
          </p>

          <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-center">
            <div className="grid gap-6">
              {HOW_IT_WORKS.map((s) => (
                <div
                  key={s.step}
                  className="flex gap-6 bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:shadow-slate-100 transition-shadow"
                >
                  <span className="font-['DM_Serif_Display',serif] text-4xl text-slate-100 leading-none select-none flex-shrink-0 w-10">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#1B2B4A] mb-1.5">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#5A6A82] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-full min-h-[280px] hidden lg:block">
              <Image
                src={IMAGES.howItWorks}
                alt="Dilekçe hazırlama süreci"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B4A]/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* ── WHO FOR ── */}
        <section className="py-16 border-b border-slate-200">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#4A7BC8] mb-3">
            Kime Göre?
          </p>
          <h2 className="font-['DM_Serif_Display',serif] text-3xl lg:text-4xl text-[#1B2B4A] leading-tight mb-4">
            Hangi Vize Reddi İçin
            <br />
            Yardımcı Oluyoruz?
          </h2>
          <p className="text-[#4A5568] text-base leading-relaxed max-w-xl mb-10">
            Schengen'den ABD'ye, öğrenciden iş insanına — hangi vize türü olursa
            olsun.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {WHO_FOR.map((w, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#4A7BC8]/40 hover:shadow-md hover:shadow-slate-100 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EBF2FF] group-hover:bg-[#4A7BC8] flex items-center justify-center mb-4 transition-colors">
                  <svg
                    className="w-5 h-5 text-[#4A7BC8] group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#1B2B4A] mb-1.5">
                  {w.title}
                </h4>
                <p className="text-sm text-[#6A7A90] leading-relaxed">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TRUST ── */}
        <section className="py-16 border-b border-slate-200">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#4A7BC8] mb-3">
                Neden Biz?
              </p>
              <h2 className="font-['DM_Serif_Display',serif] text-3xl lg:text-4xl text-[#1B2B4A] leading-tight mb-6">
                Güvenle Sipariş Verin
              </h2>
              <div className="grid gap-3">
                {TRUST_ITEMS.map((t, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-5 py-3.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-emerald-600"
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
                    <span className="text-sm font-medium text-[#2D3A50]">
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-80 hidden lg:block">
              <Image
                src={IMAGES.trustSection}
                alt="Profesyonel belge hazırlama"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B2B4A]/20 to-transparent" />
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 border-b border-slate-200">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#4A7BC8] mb-3">
            Sık Sorulan Sorular
          </p>
          <h2 className="font-['DM_Serif_Display',serif] text-3xl lg:text-4xl text-[#1B2B4A] leading-tight mb-10">
            Aklınızdaki Sorular
          </h2>
          <div className="flex flex-col gap-3">
            {FAQS.map((f, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left text-[15px] font-semibold text-[#1B2B4A] hover:bg-slate-50 transition-colors gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{f.q}</span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full bg-[#EBF2FF] flex items-center justify-center text-[#4A7BC8] transition-transform duration-200 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-[14.5px] text-[#5A6A82] leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── PAYMENT CTA ── */}
        <section className="py-16">
          <div className="bg-gradient-to-br from-[#1B2B4A] to-[#2E4A7A] rounded-3xl p-10 lg:p-14 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2 className="font-['DM_Serif_Display',serif] text-3xl lg:text-4xl text-white leading-tight mb-3">
                Hemen Başlayın — ₺{PRICE}
              </h2>
              <p className="text-white/55 text-[15px] leading-relaxed max-w-md">
                Ödemenizi tamamladıktan sonra bilgi formuna yönlendirilirsiniz.
                Dilekçeniz {DELIVERY_HOURS} saat içinde e-postanızda olur.
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-end gap-2">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-[#4A7BC8] hover:bg-[#3A6AB8] text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 whitespace-nowrap"
              >
                Güvenli Ödeme Yap
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
              <span className="text-white/25 text-xs">
                Kredi / banka kartı · Güvenli ödeme
              </span>
            </div>
          </div>
        </section>
      </div>
      {/* /max-w wrapper */}

      {/* ── FORM ── */}
      <div ref={formRef} className="bg-[#F8F9FC]">
        {formVisible && !submitted && (
          <div className="max-w-[900px] mx-auto px-6 pb-20">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm">
              <h2 className="font-['DM_Serif_Display',serif] text-3xl text-[#1B2B4A] mb-2">
                Bilgilerinizi Girin
              </h2>
              <p className="text-[#6A7A90] text-[15px] mb-10">
                Ödemeniz alındı. Aşağıdaki formu doldurarak dilekçe sürecinizi
                başlatın.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                {/* Section: Kişisel */}
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#4A7BC8] mb-5">
                  Kişisel Bilgiler
                </p>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#2D3A50] mb-2">
                      Ad Soyad <span className="text-red-500">*</span>
                    </label>
                    <input
                      className={`${inputBase} ${
                        errors.fullName ? inputError : ""
                      }`}
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Adınız Soyadınız"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1.5">
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#2D3A50] mb-2">
                      E-posta <span className="text-red-500">*</span>
                    </label>
                    <input
                      className={`${inputBase} ${
                        errors.email ? inputError : ""
                      }`}
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ornek@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1.5">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-8 max-w-xs">
                  <label className="block text-[13px] font-semibold text-[#2D3A50] mb-2">
                    Telefon{" "}
                    <span className="text-slate-400 font-normal">
                      (opsiyonel)
                    </span>
                  </label>
                  <input
                    className={inputBase}
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>

                <div className="h-px bg-slate-100 mb-8" />

                {/* Section: Başvuru */}
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#4A7BC8] mb-5">
                  Vize Başvuru Bilgileri
                </p>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#2D3A50] mb-2">
                      Reddedilen Vize Ülkesi{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      className={`${inputBase} ${
                        errors.country ? inputError : ""
                      }`}
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      placeholder="Örn: Almanya, ABD, Fransa..."
                    />
                    {errors.country && (
                      <p className="text-red-500 text-xs mt-1.5">
                        {errors.country}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#2D3A50] mb-2">
                      Vize Türü <span className="text-red-500">*</span>
                    </label>
                    <select
                      className={`${inputBase} ${
                        errors.visaType ? inputError : ""
                      }`}
                      name="visaType"
                      value={form.visaType}
                      onChange={handleChange}
                    >
                      <option value="">Seçin...</option>
                      <option value="tourist">Turistik Vize</option>
                      <option value="business">İş / Ticari Vize</option>
                      <option value="student">Öğrenci Vizesi</option>
                      <option value="work">Çalışma Vizesi</option>
                      <option value="family">Aile / Akraba Ziyareti</option>
                      <option value="other">Diğer</option>
                    </select>
                    {errors.visaType && (
                      <p className="text-red-500 text-xs mt-1.5">
                        {errors.visaType}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#2D3A50] mb-2">
                      Başvuru Tarihi
                    </label>
                    <input
                      className={inputBase}
                      name="applicationDate"
                      type="date"
                      value={form.applicationDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#2D3A50] mb-2">
                      Red Tarihi <span className="text-red-500">*</span>
                    </label>
                    <input
                      className={`${inputBase} ${
                        errors.rejectionDate ? inputError : ""
                      }`}
                      name="rejectionDate"
                      type="date"
                      value={form.rejectionDate}
                      onChange={handleChange}
                    />
                    {errors.rejectionDate && (
                      <p className="text-red-500 text-xs mt-1.5">
                        {errors.rejectionDate}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-8">
                  <label className="block text-[13px] font-semibold text-[#2D3A50] mb-3">
                    Daha önce bu ülkeye gittiniz mi?
                  </label>
                  <div className="flex gap-6">
                    {["Evet, gittim", "Hayır, ilk kez başvurdum"].map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2.5 cursor-pointer text-[14.5px] text-[#2D3A50]"
                      >
                        <input
                          type="radio"
                          name="hasTraveledBefore"
                          value={opt}
                          checked={form.hasTraveledBefore === opt}
                          onChange={handleChange}
                          className="accent-[#4A7BC8] w-4 h-4"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-slate-100 mb-8" />

                {/* Section: Red Mektubu */}
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#4A7BC8] mb-5">
                  Red Mektubu / Gerekçesi{" "}
                  <span className="text-red-500 normal-case font-normal tracking-normal">
                    *
                  </span>
                </p>

                {/* Toggle */}
                <div className="flex border border-slate-200 rounded-xl overflow-hidden mb-4 w-fit">
                  <button
                    type="button"
                    onClick={() => setUploadMode("file")}
                    className={`px-5 py-2.5 text-sm font-medium transition-colors ${
                      uploadMode === "file"
                        ? "bg-[#1B2B4A] text-white"
                        : "bg-slate-50 text-[#5A6A82] hover:bg-slate-100"
                    }`}
                  >
                    Dosya Yükle
                  </button>
                  <button
                    type="button"
                    onClick={() => setUploadMode("text")}
                    className={`px-5 py-2.5 text-sm font-medium transition-colors ${
                      uploadMode === "text"
                        ? "bg-[#1B2B4A] text-white"
                        : "bg-slate-50 text-[#5A6A82] hover:bg-slate-100"
                    }`}
                  >
                    Metin Yapıştır
                  </button>
                </div>

                {uploadMode === "file" ? (
                  <div className="mb-8">
                    <label
                      className={`relative flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-colors ${
                        errors.file
                          ? "border-red-400 bg-red-50"
                          : "border-slate-200 bg-slate-50 hover:border-[#4A7BC8] hover:bg-[#EBF2FF]/30"
                      }`}
                    >
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFile}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-sm">
                        <svg
                          className="w-6 h-6 text-[#4A7BC8]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                      <p className="text-[15px] text-[#2D3A50]">
                        <span className="font-semibold text-[#4A7BC8]">
                          Tıklayın
                        </span>{" "}
                        veya dosyayı sürükleyin
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        PDF, JPG, PNG — Maks. 10 MB
                      </p>
                      {form.file && (
                        <p className="mt-3 text-sm font-semibold text-emerald-600">
                          {form.file.name}
                        </p>
                      )}
                    </label>
                    {errors.file && (
                      <p className="text-red-500 text-xs mt-1.5">
                        {errors.file}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="mb-8">
                    <textarea
                      className={`${inputBase} min-h-[120px] ${
                        errors.rejectionReason ? inputError : ""
                      }`}
                      name="rejectionReason"
                      value={form.rejectionReason}
                      onChange={handleChange}
                      placeholder="Red mektubundaki gerekçeyi buraya yapıştırın veya yazın..."
                      rows={5}
                    />
                    {errors.rejectionReason && (
                      <p className="text-red-500 text-xs mt-1.5">
                        {errors.rejectionReason}
                      </p>
                    )}
                  </div>
                )}

                <div className="h-px bg-slate-100 mb-8" />

                {/* Section: Ek Bilgiler */}
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#4A7BC8] mb-5">
                  Ek Bilgiler
                </p>
                <div className="mb-5">
                  <label className="block text-[13px] font-semibold text-[#2D3A50] mb-2">
                    Seyahat amacınızı kısaca açıklayın{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className={`${inputBase} min-h-[90px] ${
                      errors.travelPurpose ? inputError : ""
                    }`}
                    name="travelPurpose"
                    value={form.travelPurpose}
                    onChange={handleChange}
                    placeholder="Neden gitmek istiyordunuz? Kısa bir açıklama yeterli."
                    rows={3}
                  />
                  {errors.travelPurpose && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.travelPurpose}
                    </p>
                  )}
                </div>
                <div className="mb-8">
                  <label className="block text-[13px] font-semibold text-[#2D3A50] mb-2">
                    Eklemek istediğiniz başka bir şey var mı?{" "}
                    <span className="text-slate-400 font-normal">
                      (opsiyonel)
                    </span>
                  </label>
                  <textarea
                    className={`${inputBase} min-h-[90px]`}
                    name="extraNotes"
                    value={form.extraNotes}
                    onChange={handleChange}
                    placeholder="Dilekçenize yansımasını istediğiniz ek bilgiler..."
                    rows={3}
                  />
                </div>

                {/* KVKK */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-xs text-slate-500 leading-relaxed mb-6">
                  Girdiğiniz bilgiler yalnızca itiraz dilekçenizin hazırlanması
                  amacıyla kullanılacak ve üçüncü taraflarla paylaşılmayacaktır.{" "}
                  <a
                    href="/kvkk"
                    className="text-[#4A7BC8] underline underline-offset-2"
                  >
                    Aydınlatma metnini okuyun
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-[#1B2B4A] hover:bg-[#2E4A7A] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-3"
                >
                  {submitting ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      Bilgilerimi Gönder
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
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Success */}
        {submitted && (
          <div className="max-w-[900px] mx-auto px-6 pb-20">
            <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center shadow-sm">
              <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-100 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-9 h-9 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="font-['DM_Serif_Display',serif] text-3xl text-[#1B2B4A] mb-3">
                Talebiniz Alındı
              </h2>
              <p className="text-[#5A6A82] text-base leading-relaxed max-w-md mx-auto">
                Bilgilerinizi aldık. {DELIVERY_HOURS} saat içinde
                kişiselleştirilmiş itiraz dilekçeniz{" "}
                <strong className="text-[#1B2B4A]">{form.email}</strong>{" "}
                adresine PDF olarak iletilecektir.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
