"use client";

import { useState, useEffect, useRef } from "react";
import {
  Answers,
  calculateScore,
  CATEGORIES,
  CategoryScore,
  ScanResult,
} from "./risk-scanner";
// import {
//   CATEGORIES,
//   calculateScore,
//   type Answers,
//   type ScanResult,
//   type CategoryScore,
// } from "./risk-scanner";

// ─────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────
const RISK_CONFIG = {
  low: {
    label: "Düşük Risk",
    sublabel: "Başvurunuz güçlü görünüyor",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    barColor: "bg-emerald-500",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-700",
    ringColor: "ring-emerald-400",
  },
  medium: {
    label: "Orta Risk",
    sublabel: "Bazı noktalar güçlendirilebilir",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    barColor: "bg-amber-500",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-700",
    ringColor: "ring-amber-400",
  },
  high: {
    label: "Yüksek Risk",
    sublabel: "Başvuru öncesi ciddi adımlar atmanız gerekiyor",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    barColor: "bg-red-500",
    badgeBg: "bg-red-100",
    badgeText: "text-red-700",
    ringColor: "ring-red-400",
  },
};

const SEVERITY_CONFIG = {
  high: {
    label: "Kritik",
    bg: "bg-red-100",
    text: "text-red-700",
    dot: "bg-red-500",
  },
  medium: {
    label: "Önemli",
    bg: "bg-amber-100",
    text: "text-amber-700",
    dot: "bg-amber-500",
  },
  low: {
    label: "Dikkat",
    bg: "bg-blue-100",
    text: "text-blue-700",
    dot: "bg-blue-400",
  },
};

// ─────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────

// Circular score gauge
function ScoreGauge({
  score,
  riskLevel,
}: {
  score: number;
  riskLevel: "low" | "medium" | "high";
}) {
  const cfg = RISK_CONFIG[riskLevel];
  const radius = 54;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (score / 100) * circ;

  const strokeColor =
    riskLevel === "low"
      ? "#10b981"
      : riskLevel === "medium"
      ? "#f59e0b"
      : "#ef4444";

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-36 h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
          <circle
            cx="64"
            cy="64"
            r={radius}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="10"
          />
          <circle
            cx="64"
            cy="64"
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth="10"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 1s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className={`text-3xl font-bold ${cfg.color}`}
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            {score}
          </span>
          <span className="text-xs text-slate-400 font-medium">/ 100</span>
        </div>
      </div>
      <div className={`mt-3 px-4 py-1.5 rounded-full ${cfg.badgeBg}`}>
        <span className={`text-sm font-bold ${cfg.badgeText}`}>
          {cfg.label}
        </span>
      </div>
      <p className="text-xs text-slate-500 mt-1.5 text-center">
        {cfg.sublabel}
      </p>
    </div>
  );
}

// Category score bar
function CategoryBar({ cat }: { cat: CategoryScore }) {
  const color =
    cat.score >= 71
      ? "bg-emerald-500"
      : cat.score >= 41
      ? "bg-amber-500"
      : "bg-red-500";
  const textColor =
    cat.score >= 71
      ? "text-emerald-600"
      : cat.score >= 41
      ? "text-amber-600"
      : "text-red-600";

  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-[13px] font-semibold text-[#1B2B4A]">
          {cat.title}
        </span>
        <span className={`text-[13px] font-bold ${textColor}`}>
          {cat.score}/100
        </span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ${color}`}
          style={{ width: `${cat.score}%` }}
        />
      </div>
    </div>
  );
}

// Result Modal
function ResultModal({
  result,
  onClose,
  onRetry,
}: {
  result: ScanResult;
  onClose: () => void;
  onRetry: () => void;
}) {
  const cfg = RISK_CONFIG[result.riskLevel];
  const scrollRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const hasCta = result.riskLevel !== "low";

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{
        backgroundColor: "rgba(15,29,51,0.7)",
        backdropFilter: "blur(4px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={scrollRef}
        className="relative bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[92vh] overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-10"
        >
          <svg
            className="w-4 h-4 text-slate-500"
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
        </button>

        {/* Header */}
        <div
          className={`${cfg.bgColor} ${cfg.borderColor} border-b px-6 pt-8 pb-6 rounded-t-3xl sm:rounded-t-3xl`}
        >
          <p className="text-xs font-semibold tracking-[0.1em] uppercase text-slate-500 mb-4">
            Değerlendirme Sonucu
          </p>
          <ScoreGauge score={result.totalScore} riskLevel={result.riskLevel} />
        </div>

        <div className="px-6 py-5 flex flex-col gap-5">
          {/* Category breakdown */}
          <div>
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#4A7BC8] mb-3">
              Kategori Analizi
            </p>
            <div className="flex flex-col gap-3">
              {result.categoryScores.map((cat) => (
                <CategoryBar key={cat.id} cat={cat} />
              ))}
            </div>
          </div>

          {/* Recommendations */}
          {result.recommendations.length > 0 && (
            <div>
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#4A7BC8] mb-3">
                Dikkat Etmeniz Gerekenler
              </p>
              <div className="flex flex-col gap-3">
                {result.recommendations.map((rec) => {
                  const sev = SEVERITY_CONFIG[rec.severity];
                  return (
                    <div
                      key={rec.id}
                      className="bg-white border border-slate-200 rounded-2xl p-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${sev.dot}`}
                        />
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${sev.bg} ${sev.text}`}
                        >
                          {sev.label}
                        </span>
                      </div>
                      <p className="text-[13.5px] font-semibold text-[#1B2B4A] mb-1.5">
                        {rec.title}
                      </p>
                      <p className="text-[12.5px] text-[#5A6A82] leading-relaxed">
                        {rec.text}
                      </p>
                      {rec.cta && (
                        <a
                          href={rec.cta.href}
                          className="inline-flex items-center gap-1.5 mt-3 text-[12.5px] font-semibold text-[#4A7BC8] hover:text-[#3A6AB8] transition-colors"
                        >
                          {rec.cta.label}
                          <svg
                            className="w-3.5 h-3.5"
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
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Low risk positive message */}
          {result.riskLevel === "low" &&
            result.recommendations.length === 0 && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-sm text-emerald-700 leading-relaxed">
                Başvurunuz genel itibarıyla güçlü görünüyor. Belge
                eksiksizliğine dikkat ederek başvurunuzu tamamlayabilirsiniz.
              </div>
            )}

          {/* Retry */}
          <button
            onClick={onRetry}
            className="w-full py-3 border border-slate-200 rounded-xl text-sm font-semibold text-[#5A6A82] hover:bg-slate-50 transition-colors"
          >
            Testi Yeniden Başlat
          </button>

          {/* CTA */}
          {hasCta && (
            <div className="bg-gradient-to-br from-[#1B2B4A] to-[#2E4A7A] rounded-2xl p-5">
              <p
                className="text-white font-bold text-base mb-1"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Başvurunuzu Güçlendirelim
              </p>
              <p className="text-white/60 text-xs leading-relaxed mb-4">
                {result.riskLevel === "high"
                  ? "Yüksek risk tespiti yapıldı. Profesyonel destek başvuru şansınızı ciddi ölçüde artırır."
                  : "Bazı zayıf noktalar tespit edildi. Doğru adımlarla başvurunuzu güçlendirebilirsiniz."}
              </p>
              <div className="flex flex-col gap-2">
                <a
                  target="_blank"
                  href="https://www.shopier.com/uluslararasikariyer/46350895"
                  className="flex items-center justify-between bg-[#4A7BC8] hover:bg-[#3A6AB8] rounded-xl px-4 py-3 transition-colors group"
                >
                  <span className="text-white text-sm font-semibold">
                    Schengen Vizesi Başvuru Rehberi
                  </span>
                  <svg
                    className="w-4 h-4 text-white/80 group-hover:text-white transition-colors"
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
                <a
                  target="_blank"
                  href="https://www.shopier.com/uluslararasikariyer#Vize%20Dilek%C3%A7eleri"
                  className="flex items-center justify-between bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl px-4 py-3 transition-colors group"
                >
                  <span className="text-white text-sm font-semibold">
                    Vize Dilekçe Örnekleri
                  </span>
                  <svg
                    className="w-4 h-4 text-white/60 group-hover:text-white transition-colors"
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
          )}

          <p className="text-[11px] text-slate-400 text-center leading-relaxed pb-2">
            Bu değerlendirme bilgilendirme amaçlıdır ve hukuki tavsiye niteliği
            taşımaz. Nihai karar yetkisi konsolosluk makamlarına aittir.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────
export default function RiskScannerClient() {
  const [step, setStep] = useState<"intro" | "questions" | "done">("intro");
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState<ScanResult | null>(null);
  const [showModal, setShowModal] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const currentCategory = CATEGORIES[categoryIndex];
  const totalCategories = CATEGORIES.length;

  const answeredInCategory =
    currentCategory?.questions.filter((q) => answers[q.id]).length ?? 0;
  const totalInCategory = currentCategory?.questions.length ?? 0;
  const categoryComplete = answeredInCategory === totalInCategory;

  const handleAnswer = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleNext = () => {
    if (categoryIndex < totalCategories - 1) {
      setCategoryIndex((i) => i + 1);
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Son kategori — hesapla
      const res = calculateScore(answers);
      setResult(res);
      setStep("done");
      setShowModal(true);
    }
  };

  const handleBack = () => {
    if (categoryIndex > 0) {
      setCategoryIndex((i) => i - 1);
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setCategoryIndex(0);
    setResult(null);
    setShowModal(false);
    setStep("intro");
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const inp =
    "w-full px-4 py-3 border border-slate-200 rounded-lg text-[15px] text-[#1B2B4A] bg-slate-50 focus:outline-none focus:border-[#4A7BC8] focus:ring-2 focus:ring-[#4A7BC8]/10 focus:bg-white transition-colors";

  return (
    <div
      ref={topRef}
      className="bg-[#F8F9FC] min-h-screen text-[#1B2B4A]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&display=swap');`}</style>

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-[#0F1D33] via-[#1B2B4A] to-[#2A4070] py-16 lg:py-20 px-6">
        <div className="max-w-[900px] mx-auto">
          <span className="inline-block px-4 py-1.5 bg-[#4A7BC8]/20 border border-[#4A7BC8]/30 rounded-full text-[#7eb8f7] text-xs font-semibold tracking-widest uppercase mb-5">
            Ücretsiz Değerlendirme Aracı
          </span>
          <h1
            className="text-3xl lg:text-5xl text-white leading-[1.12] mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Schengen Vize Başvurunuz
            <br />
            <span className="italic text-[#7eb8f7]">Reddedilir mi?</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-lg mb-8">
            4 kategoride sorulara cevap verin. Finansal durum, iş geçmişi,
            seyahat geçmişi ve belge hazırlığınızı analiz edelim.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "4 kategori" },
              { label: "18 soru" },
              { label: "Yaklaşık 3 dakika" },
              { label: "Tamamen ücretsiz" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#7eb8f7]" />
                <span className="text-white/70 text-sm font-medium">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <div className="max-w-[900px] mx-auto px-6 py-10">
        {/* ── INTRO ── */}
        {step === "intro" && (
          <div className="max-w-2xl">
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {CATEGORIES.map((cat, i) => (
                <div
                  key={cat.id}
                  className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-[#4A7BC8]/40 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-[#EBF2FF] flex items-center justify-center flex-shrink-0">
                      <span
                        className="text-sm font-bold text-[#4A7BC8]"
                        style={{ fontFamily: "'DM Serif Display', serif" }}
                      >
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-semibold text-[#1B2B4A] text-sm">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#6A7A90] leading-relaxed pl-10">
                    {cat.subtitle}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-[#EBF2FF] border border-[#C8D8F0] rounded-2xl p-5 mb-8 text-sm text-[#1B2B4A] leading-relaxed">
              <strong>Nasıl çalışır?</strong> Her kategoride sorulara cevap
              verin. Test tamamlandığında sonuçlarınız risk skoru, kategori
              analizi ve kişiselleştirilmiş önerilerle birlikte karşınıza çıkar.
            </div>

            <button
              onClick={() => setStep("questions")}
              className="inline-flex items-center gap-3 bg-[#1B2B4A] hover:bg-[#2E4A7A] text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Değerlendirmeyi Başlat
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
        )}

        {/* ── QUESTIONS ── */}
        {step === "questions" && currentCategory && (
          <div className="max-w-2xl">
            {/* Category indicator */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1.5">
                {CATEGORIES.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i < categoryIndex
                        ? "w-6 bg-[#4A7BC8]"
                        : i === categoryIndex
                        ? "w-10 bg-[#1B2B4A]"
                        : "w-6 bg-slate-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-slate-400 font-medium">
                {categoryIndex + 1} / {totalCategories}
              </span>
            </div>

            {/* Category header */}
            <div className="mb-8">
              <p className="text-xs font-semibold tracking-[0.1em] uppercase text-[#4A7BC8] mb-2">
                {currentCategory.title}
              </p>
              <h2
                className="text-2xl lg:text-3xl text-[#1B2B4A] leading-tight"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {currentCategory.subtitle}
              </h2>
            </div>

            {/* Questions */}
            <div className="flex flex-col gap-6 mb-8">
              {currentCategory.questions.map((q, qi) => {
                const answered = answers[q.id];
                return (
                  <div
                    key={q.id}
                    className="bg-white border border-slate-200 rounded-2xl p-5"
                  >
                    <p className="text-[15px] font-semibold text-[#1B2B4A] mb-1.5">
                      <span className="text-[#4A7BC8] mr-2">{qi + 1}.</span>
                      {q.text}
                    </p>
                    {q.hint && (
                      <p className="text-[12.5px] text-slate-400 mb-4 leading-relaxed">
                        {q.hint}
                      </p>
                    )}
                    {!q.hint && <div className="mb-3" />}
                    <div className="flex flex-col gap-2">
                      {q.options.map((opt) => {
                        const isSelected = answered === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => handleAnswer(q.id, opt.id)}
                            className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                              isSelected
                                ? "border-[#4A7BC8] bg-[#EBF2FF] text-[#1B2B4A]"
                                : "border-slate-200 bg-slate-50 text-[#5A6A82] hover:border-slate-300 hover:bg-white"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                                  isSelected
                                    ? "border-[#4A7BC8] bg-[#4A7BC8]"
                                    : "border-slate-300"
                                }`}
                              >
                                {isSelected && (
                                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                )}
                              </div>
                              {opt.label}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress note */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4A7BC8] rounded-full transition-all duration-300"
                  style={{
                    width: `${(answeredInCategory / totalInCategory) * 100}%`,
                  }}
                />
              </div>
              <span className="text-xs text-slate-400 font-medium flex-shrink-0">
                {answeredInCategory}/{totalInCategory} cevaplandı
              </span>
            </div>

            {/* Nav buttons */}
            <div className="flex gap-3">
              {categoryIndex > 0 && (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 px-5 py-3 border border-slate-200 rounded-xl text-sm font-semibold text-[#5A6A82] hover:bg-slate-50 transition-colors"
                >
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
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                  Geri
                </button>
              )}
              <button
                onClick={handleNext}
                disabled={!categoryComplete}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${
                  categoryComplete
                    ? "bg-[#1B2B4A] hover:bg-[#2E4A7A] text-white hover:-translate-y-0.5 hover:shadow-lg"
                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
              >
                {categoryIndex === totalCategories - 1
                  ? "Sonucu Gör"
                  : "Sonraki Kategori"}
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

            {!categoryComplete && (
              <p className="text-xs text-slate-400 text-center mt-3">
                Devam etmek için tüm soruları cevaplayın
              </p>
            )}
          </div>
        )}

        {/* ── DONE (sonuç modal kapalıysa tekrar aç butonu) ── */}
        {step === "done" && result && !showModal && (
          <div className="max-w-2xl text-center py-10">
            <p className="text-[#4A5568] mb-6">Değerlendirme tamamlandı.</p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 bg-[#1B2B4A] hover:bg-[#2E4A7A] text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                Sonucu Görüntüle
              </button>
              <button
                onClick={handleRetry}
                className="inline-flex items-center gap-2 border border-slate-200 text-[#5A6A82] font-semibold px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Yeniden Başlat
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── RESULT MODAL ── */}
      {showModal && result && (
        <ResultModal
          result={result}
          onClose={() => setShowModal(false)}
          onRetry={handleRetry}
        />
      )}
    </div>
  );
}
