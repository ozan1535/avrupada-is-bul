// config/risk-scanner.ts
// Tüm sorular, ağırlıklar, skorlama ve öneri havuzu

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────

export type OptionId = string;

export interface Option {
  id: OptionId;
  label: string;
  score: number; // 0–10
  flags?: string[]; // özel durumlar için etiket
}

export interface Question {
  id: string;
  text: string;
  hint?: string;
  options: Option[];
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  weight: number; // 0–1, toplamı 1 olmalı
  questions: Question[];
}

export interface Recommendation {
  id: string;
  category: string;
  triggerFlags: string[]; // bu flag'lerden biri varsa göster
  severity: "high" | "medium" | "low";
  title: string;
  text: string;
  cta?: { label: string; href: string };
}

export type Answers = Record<string, OptionId>;

// ─────────────────────────────────────────
// CATEGORIES & QUESTIONS
// ─────────────────────────────────────────

export const CATEGORIES: Category[] = [
  // ── 1. FİNANSAL DURUM ──
  {
    id: "financial",
    title: "Finansal Durum",
    subtitle: "Konsoloslukların en çok incelediği kriter",
    weight: 0.3,
    questions: [
      {
        id: "monthly_income",
        text: "Aylık net geliriniz ne kadardır?",
        hint: "Maaş, kira geliri, serbest meslek geliri dahil tüm düzenli geliriniz",
        options: [
          { id: "none", label: "Gelir yok", score: 0, flags: ["no_income"] },
          {
            id: "low",
            label: "10.000 ₺ altı",
            score: 2,
            flags: ["low_income"],
          },
          { id: "mid", label: "10.000 – 20.000 ₺", score: 5 },
          { id: "good", label: "20.000 – 40.000 ₺", score: 8 },
          { id: "high", label: "40.000 ₺ üzeri", score: 10 },
        ],
      },
      {
        id: "savings",
        text: "Banka hesabınızda kaç aylık geliriniz kadar birikim bulunuyor?",
        hint: "Son 3 aya ait ekstreyle gösterebileceğiniz birikim",
        options: [
          { id: "none", label: "Birikim yok", score: 0, flags: ["no_savings"] },
          { id: "one", label: "1–2 aylık", score: 3, flags: ["low_savings"] },
          { id: "three", label: "3–5 aylık", score: 7 },
          { id: "six", label: "6 ay ve üzeri", score: 10 },
        ],
      },
      {
        id: "income_source",
        text: "Gelir kaynağınız nedir?",
        options: [
          { id: "employed", label: "Kadrolu / maaşlı çalışan", score: 10 },
          { id: "contract", label: "Sözleşmeli çalışan", score: 8 },
          { id: "self", label: "Serbest meslek", score: 7 },
          { id: "owner", label: "Şirket sahibi", score: 8 },
          { id: "retired", label: "Emekli", score: 9 },
          { id: "student", label: "Öğrenci", score: 4, flags: ["student"] },
          { id: "unemployed", label: "İşsiz", score: 0, flags: ["unemployed"] },
        ],
      },
      {
        id: "assets",
        text: "Türkiye'de mülk veya taşıt gibi kayıtlı varlığınız var mı?",
        options: [
          { id: "yes_both", label: "Hem mülk hem taşıt", score: 10 },
          { id: "yes_property", label: "Sadece mülk var", score: 9 },
          { id: "yes_vehicle", label: "Sadece taşıt var", score: 6 },
          {
            id: "no",
            label: "Kayıtlı varlık yok",
            score: 2,
            flags: ["no_assets"],
          },
        ],
      },
    ],
  },

  // ── 2. İŞ VE SOSYAL BAĞLAR ──
  {
    id: "social",
    title: "İş ve Sosyal Bağlar",
    subtitle: "Geri döneceğinize dair güvence kriterleri",
    weight: 0.25,
    questions: [
      {
        id: "employment_years",
        text: "Mevcut işyerinde ya da işkolunda kaç yıldır çalışıyorsunuz?",
        hint: "İşsiz veya öğrenciyseniz 'Geçerli değil' seçeneğini seçin",
        options: [
          { id: "na", label: "Geçerli değil", score: 5 },
          { id: "new", label: "1 yıldan az", score: 3, flags: ["new_job"] },
          { id: "one", label: "1–3 yıl", score: 6 },
          { id: "three", label: "3–7 yıl", score: 9 },
          { id: "seven", label: "7 yıl ve üzeri", score: 10 },
        ],
      },
      {
        id: "dependents",
        text: "Türkiye'de bakmakla yükümlü olduğunuz kişi var mı?",
        hint: "Eş, çocuk, anne-baba gibi bakımınıza muhtaç kişiler",
        options: [
          { id: "spouse_kids", label: "Eş ve çocuk", score: 10 },
          { id: "kids", label: "Sadece çocuk", score: 10 },
          { id: "spouse", label: "Sadece eş", score: 9 },
          { id: "parents", label: "Anne / baba", score: 7 },
          { id: "none", label: "Yok", score: 3, flags: ["no_dependents"] },
        ],
      },
      {
        id: "property_turkey",
        text: "Türkiye'de adınıza kayıtlı taşınmaz mülk var mı?",
        options: [
          { id: "yes_multiple", label: "Birden fazla", score: 10 },
          { id: "yes_one", label: "Evet, bir tane", score: 9 },
          { id: "no", label: "Hayır", score: 2, flags: ["no_property_turkey"] },
        ],
      },
      {
        id: "employer_letter",
        text: "İşvereninizden izin ve çalışma belgesi alabilir misiniz?",
        hint: "Konsolosluk bu belgeyi sıklıkla talep eder",
        options: [
          { id: "yes_ready", label: "Evet, hazır", score: 10 },
          { id: "yes_can", label: "Evet, alabilirim", score: 8 },
          { id: "na", label: "Serbest / emekli / öğrenci", score: 6 },
          {
            id: "no",
            label: "Hayır / işsizim",
            score: 0,
            flags: ["no_employer_letter"],
          },
        ],
      },
    ],
  },

  // ── 3. SEYAHAT GEÇMİŞİ ──
  {
    id: "travel",
    title: "Seyahat Geçmişi",
    subtitle: "Önceki vize ve seyahat deneyimleriniz",
    weight: 0.25,
    questions: [
      {
        id: "prev_schengen",
        text: "Daha önce Schengen vizesi aldınız mı?",
        options: [
          { id: "multiple", label: "Evet, birden fazla kez", score: 10 },
          { id: "once", label: "Evet, bir kez", score: 8 },
          {
            id: "never",
            label: "Hayır, ilk başvurum",
            score: 3,
            flags: ["first_schengen"],
          },
        ],
      },
      {
        id: "prev_rejection",
        text: "Daha önce herhangi bir ülkeden vize reddi aldınız mı?",
        options: [
          { id: "never", label: "Hayır, hiç red almadım", score: 10 },
          {
            id: "once_old",
            label: "Evet, 3+ yıl önce bir kez",
            score: 6,
            flags: ["old_rejection"],
          },
          {
            id: "once_recent",
            label: "Evet, son 3 yılda bir kez",
            score: 2,
            flags: ["recent_rejection"],
          },
          {
            id: "multiple",
            label: "Evet, birden fazla kez",
            score: 0,
            flags: ["multiple_rejection"],
          },
        ],
      },
      {
        id: "overstay",
        text: "Schengen'de veya başka bir ülkede izin verilen süreden fazla kaldınız mı?",
        options: [
          { id: "never", label: "Hayır, hiç yaşamadım", score: 10 },
          { id: "yes", label: "Evet, yaşadım", score: 0, flags: ["overstay"] },
        ],
      },
      {
        id: "other_strong_visa",
        text: "ABD, İngiltere, Kanada veya Avustralya vizesi var mı?",
        hint: "Bu ülkelerin vizesine sahip olmak güçlü bir referans sayılır",
        options: [
          { id: "multiple", label: "Birden fazlası var", score: 10 },
          { id: "one", label: "Biri var", score: 8 },
          { id: "expired", label: "Vardı, süresi doldu", score: 5 },
          { id: "none", label: "Hiç yok", score: 2, flags: ["no_strong_visa"] },
        ],
      },
    ],
  },

  // ── 4. BELGE HAZIRLIĞI ──
  {
    id: "documents",
    title: "Belge Hazırlığı",
    subtitle: "Eksik belge en yaygın red sebebidir",
    weight: 0.2,
    questions: [
      {
        id: "passport_validity",
        text: "Pasaportunuzun geçerlilik süresi ne kadar kaldı?",
        hint: "Dönüş tarihinden itibaren en az 3 ay geçerli olmalı",
        options: [
          {
            id: "expired",
            label: "Süresi dolmuş / dolmak üzere",
            score: 0,
            flags: ["passport_expired"],
          },
          { id: "three", label: "3–6 ay", score: 4, flags: ["passport_short"] },
          { id: "one_year", label: "6 ay – 1 yıl", score: 7 },
          { id: "two_plus", label: "1 yıldan fazla", score: 10 },
        ],
      },
      {
        id: "hotel_booking",
        text: "Konaklama rezervasyonunuz (otel veya davet mektubu) hazır mı?",
        options: [
          { id: "yes", label: "Evet, hazır", score: 10 },
          {
            id: "partial",
            label: "Kısmen hazır",
            score: 5,
            flags: ["partial_hotel"],
          },
          { id: "no", label: "Henüz yok", score: 0, flags: ["no_hotel"] },
        ],
      },
      {
        id: "flight_ticket",
        text: "Gidiş-dönüş uçak biletiniz var mı?",
        options: [
          { id: "yes", label: "Evet, her ikisi de hazır", score: 10 },
          {
            id: "one_way",
            label: "Sadece gidiş bileti var",
            score: 3,
            flags: ["one_way_ticket"],
          },
          { id: "no", label: "Henüz almadım", score: 0, flags: ["no_ticket"] },
        ],
      },
      {
        id: "travel_insurance",
        text: "Seyahat sağlık sigortanız var mı?",
        hint: "En az 30.000 Euro teminat, tüm Schengen ülkelerini kapsamalı",
        options: [
          { id: "yes", label: "Evet, hazır", score: 10 },
          { id: "no", label: "Henüz yok", score: 0, flags: ["no_insurance"] },
        ],
      },
      {
        id: "bank_statement",
        text: "Son 3 aya ait banka ekstreniz hazır mı?",
        hint: "Islak imzalı ve banka kaşeli olmalı",
        options: [
          {
            id: "yes_strong",
            label: "Evet, yeterli bakiyeyle hazır",
            score: 10,
          },
          {
            id: "yes_weak",
            label: "Var ama bakiye yetersiz",
            score: 3,
            flags: ["weak_bank"],
          },
          {
            id: "no",
            label: "Henüz hazırlamadım",
            score: 0,
            flags: ["no_bank_statement"],
          },
        ],
      },
    ],
  },
];

// ─────────────────────────────────────────
// SCORING ENGINE
// ─────────────────────────────────────────

export interface CategoryScore {
  id: string;
  title: string;
  score: number; // 0–100
  weight: number;
  weightedScore: number;
}

export interface ScanResult {
  totalScore: number; // 0–100
  riskLevel: "low" | "medium" | "high";
  categoryScores: CategoryScore[];
  flags: string[];
  recommendations: Recommendation[];
}

export function calculateScore(answers: Answers): ScanResult {
  const allFlags: string[] = [];
  const categoryScores: CategoryScore[] = [];

  for (const cat of CATEGORIES) {
    let catTotal = 0;
    let catCount = 0;

    for (const q of cat.questions) {
      const answerId = answers[q.id];
      if (!answerId) continue;
      const opt = q.options.find((o) => o.id === answerId);
      if (!opt) continue;
      catTotal += opt.score;
      catCount++;
      if (opt.flags) allFlags.push(...opt.flags);
    }

    const rawScore = catCount > 0 ? (catTotal / (catCount * 10)) * 100 : 0;
    categoryScores.push({
      id: cat.id,
      title: cat.title,
      score: Math.round(rawScore),
      weight: cat.weight,
      weightedScore: rawScore * cat.weight,
    });
  }

  const totalScore = Math.round(
    categoryScores.reduce((sum, c) => sum + c.weightedScore, 0)
  );

  const riskLevel: "low" | "medium" | "high" =
    totalScore >= 71 ? "low" : totalScore >= 41 ? "medium" : "high";

  const recommendations = RECOMMENDATIONS.filter((r) =>
    r.triggerFlags.some((f) => allFlags.includes(f))
  ).sort((a, b) => {
    const order = { high: 0, medium: 1, low: 2 };
    return order[a.severity] - order[b.severity];
  });

  return {
    totalScore,
    riskLevel,
    categoryScores,
    flags: allFlags,
    recommendations,
  };
}

// ─────────────────────────────────────────
// RECOMMENDATIONS POOL
// ─────────────────────────────────────────

export const RECOMMENDATIONS: Recommendation[] = [
  // ── YÜKSEK ÖNCELİK ──
  {
    id: "overstay",
    category: "travel",
    triggerFlags: ["overstay"],
    severity: "high",
    title: "Fazla Kalış Geçmişi Kritik Risk Oluşturuyor",
    text: "Önceki bir fazla kalış (overstay) kaydı, yeni başvurularda ciddi red gerekçesi sayılır. Başvurunuza bu durumu açıklayan ve güvenilirliğinizi kanıtlayan bir dilekçe eklemeniz zorunludur.",
    cta: { label: "Dilekçe Hazırlat", href: "/hizmetler/vize-red-itiraz" },
  },
  {
    id: "multiple_rejection",
    category: "travel",
    triggerFlags: ["multiple_rejection"],
    severity: "high",
    title: "Birden Fazla Red Geçmişi Var",
    text: "Birden fazla red kararı, konsoloslukların başvurunuzu çok daha dikkatli inceleyeceği anlamına gelir. Her red gerekçesini ayrı ayrı ele alan, güçlü bir başvuru dosyası hazırlamanız gerekiyor.",
    cta: { label: "Başvuruyu Güçlendir", href: "/hizmetler/vize-red-itiraz" },
  },
  {
    id: "passport_expired",
    category: "documents",
    triggerFlags: ["passport_expired"],
    severity: "high",
    title: "Pasaport Geçerliliği Yetersiz",
    text: "Pasaportunuzun dönüş tarihinden itibaren en az 3 ay geçerli olması zorunludur. Başvuru yapmadan önce pasaportunuzu yenilemeniz gerekiyor; bu olmadan başvurunuz kabul edilmez.",
  },
  {
    id: "no_income",
    category: "financial",
    triggerFlags: ["no_income", "unemployed"],
    severity: "high",
    title: "Gelir Belgesi Bulunmuyor",
    text: "Gelir kaynağı gösterilemeyen başvurularda red oranı çok yüksektir. Bir sponsor (davet eden kişi) aracılığıyla başvuru yapmanız ve sponsor dilekçesiyle birlikte güçlü bir banka ekstresi sunmanız önerilir.",
  },
  {
    id: "recent_rejection",
    category: "travel",
    triggerFlags: ["recent_rejection"],
    severity: "high",
    title: "Son 3 Yılda Red Kararı Var",
    text: "Yakın tarihli bir red, yeni başvurularda doğrudan olumsuz etki yaratır. Red gerekçesini açıklayan ve koşullarınızın değiştiğini gösteren bir itiraz dilekçesi hazırlamanız başvuruyu güçlendirecektir.",
    cta: {
      label: "İtiraz Dilekçesi Hazırlat",
      href: "/hizmetler/vize-red-itiraz",
    },
  },

  // ── ORTA ÖNCELİK ──
  {
    id: "no_savings",
    category: "financial",
    triggerFlags: ["no_savings", "low_savings"],
    severity: "medium",
    title: "Banka Ekstresi Yetersiz Görünüyor",
    text: "Konsolosluklar günlük en az 50-100 Euro karşılığı bakiye görmek ister. Seyahatten 3 ay önce hesabınızdaki bakiyeyi artırın ve bu süreyi kapsayan ekstreyi sunun. Ani para girişleri yerine istikrarlı bakiye daha inandırıcıdır.",
  },
  {
    id: "first_schengen",
    category: "travel",
    triggerFlags: ["first_schengen"],
    severity: "medium",
    title: "İlk Schengen Başvurusu",
    text: "İlk kez başvuruyorsanız dosyanızın eksiksiz olması daha kritiktir. Kısa süreli (3-5 günlük) bir başvuruyla başlamak, uzun süreli başvurulara kıyasla onay oranını artırır. Belge eksikliğine yer bırakmayın.",
  },
  {
    id: "no_strong_visa",
    category: "travel",
    triggerFlags: ["no_strong_visa"],
    severity: "medium",
    title: "Güçlü Referans Vize Yok",
    text: "ABD, İngiltere, Kanada veya Avustralya vizesi olmaması dezavantaj yaratabilir. Bu eksikliği finansal belgeler, iş bağları ve konaklama detaylarını daha güçlü sunarak telafi edebilirsiniz.",
  },
  {
    id: "no_dependents",
    category: "social",
    triggerFlags: ["no_dependents"],
    severity: "medium",
    title: "Türkiye'ye Bağlılık Zayıf Görünüyor",
    text: "Bakmakla yükümlü olduğunuz kişi olmaması, konsolosluklar için 'geri dönmeme riski' sinyali verebilir. Bu durumu telafi etmek için iş sözleşmenizi, taşınmaz varlıklarınızı ve uzun vadeli planlarınızı öne çıkarın.",
  },
  {
    id: "weak_bank",
    category: "documents",
    triggerFlags: ["weak_bank"],
    severity: "medium",
    title: "Banka Ekstresi Yetersiz Bakiye Gösteriyor",
    text: "Ekstreniz var ama bakiye yetersiz. Konsolosluklar seyahat süresine orantılı bakiye arar. Sponsorluk desteği alabilir veya ek gelir belgesi (kira geliri, emekli maaşı vs.) sunabilirsiniz.",
  },
  {
    id: "new_job",
    category: "social",
    triggerFlags: ["new_job"],
    severity: "medium",
    title: "Yeni İş Geçmişi Risk Oluşturabilir",
    text: "1 yıldan az süredir çalışıyorsanız iş sürekliliğinizi ispatlayacak ek belgeler ekleyin: önceki işyerinden referans mektubu, toplam iş geçmişinizi gösteren SGK dökümü.",
  },
  {
    id: "old_rejection",
    category: "travel",
    triggerFlags: ["old_rejection"],
    severity: "medium",
    title: "Eski Bir Red Kararı Var",
    text: "3 yıldan eski bir red kararı hâlâ kayıtlarda görünebilir. Koşullarınızın o tarihten bu yana nasıl değiştiğini (yeni iş, birikim, seyahat geçmişi) belgelerle desteklemeniz önerilir.",
  },

  // ── DÜŞÜK ÖNCELİK ──
  {
    id: "no_hotel",
    category: "documents",
    triggerFlags: ["no_hotel"],
    severity: "low",
    title: "Konaklama Rezervasyonu Eksik",
    text: "Başvuruya konaklama belgesi eklemek zorunludur. İptal edilebilir otel rezervasyonu yaptırabilirsiniz — ödeme yapmadan rezervasyon onayı almanız mümkündür.",
  },
  {
    id: "no_ticket",
    category: "documents",
    triggerFlags: ["no_ticket", "one_way_ticket"],
    severity: "low",
    title: "Dönüş Bileti Eksik veya Yetersiz",
    text: "Gidiş-dönüş biletin bulunmaması seyahatin geçici niteliğini kanıtlamayı zorlaştırır. Rezervasyon onayı yeterlidir, bilet satın almak zorunda değilsiniz.",
  },
  {
    id: "no_insurance",
    category: "documents",
    triggerFlags: ["no_insurance"],
    severity: "low",
    title: "Seyahat Sigortası Eksik",
    text: "Schengen başvurularında en az 30.000 Euro teminatlı, tüm Schengen ülkelerini kapsayan seyahat sigortası zorunludur. Başvurudan önce edinilmesi gerekir.",
  },
  {
    id: "passport_short",
    category: "documents",
    triggerFlags: ["passport_short"],
    severity: "low",
    title: "Pasaport Geçerliliği Kısa",
    text: "Pasaportunuzun seyahat dönüşünden sonra en az 3 ay geçerli olması gerekir. Süreniz sınırda kalıyorsa pasaportunuzu yenilemeyi değerlendirin.",
  },
  {
    id: "no_assets",
    category: "financial",
    triggerFlags: ["no_assets"],
    severity: "low",
    title: "Kayıtlı Varlık Yok",
    text: "Mülk veya araç gibi varlıklar ülkeye bağlılığı kanıtlar. Varlık yoksa diğer güçlü belgelerinizi (iş sözleşmesi, uzun süreli kira sözleşmesi) öne çıkarın.",
  },
  {
    id: "student",
    category: "financial",
    triggerFlags: ["student"],
    severity: "low",
    title: "Öğrenci Başvurusu: Ek Belgeler Gerekli",
    text: "Öğrenciler için öğrenci belgesi, sponsorun mali belgeleri ve aile bağlarını gösteren belgeler kritik önem taşır. Sponsor (ebeveyn veya yakın akraba) finansal desteğini noter onaylı beyanla desteklemelidir.",
  },
  {
    id: "partial_hotel",
    category: "documents",
    triggerFlags: ["partial_hotel"],
    severity: "low",
    title: "Konaklama Belgesi Eksik Günler İçeriyor",
    text: "Tüm seyahat günlerini kapsayan konaklama belgesi sunulmalıdır. Eksik günler için ek rezervasyon veya davetiye ekleyin.",
  },
  {
    id: "no_bank_statement",
    category: "documents",
    triggerFlags: ["no_bank_statement"],
    severity: "low",
    title: "Banka Ekstresi Hazırlanmamış",
    text: "Son 3 aya ait, ıslak imzalı ve banka kaşeli ekstre zorunludur. Bankanızdan onaylı çıktı almanız yeterlidir; internet bankacılığı çıktısı genellikle kabul edilmez.",
  },
];
