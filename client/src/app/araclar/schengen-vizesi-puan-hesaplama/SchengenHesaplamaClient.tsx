"use client";

import { useState, useRef, useId } from "react";

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────
type Trip = {
  id: string;
  entry: string; // YYYY-MM-DD
  exit: string; // YYYY-MM-DD  (empty = ongoing)
};

type CalcResult = {
  usedDaysToday: number;
  remainingDaysToday: number;
  status: "safe" | "warning" | "danger" | "exceeded";
  plannedEntry: string | null;
  plannedMaxDays: number | null;
  plannedLastDay: string | null;
  plannedRemainingOnEntry: number | null;
  earliestReEntry: string | null;
};

// ─────────────────────────────────────────
// UTILITY
// ─────────────────────────────────────────
const TODAY = new Date();
TODAY.setHours(0, 0, 0, 0);

function toDate(str: string): Date {
  const d = new Date(str + "T00:00:00");
  d.setHours(0, 0, 0, 0);
  return d;
}

function formatDateTR(date: Date): string {
  return date.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function formatISO(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, n: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

function diffDays(a: Date, b: Date): number {
  return Math.round((b.getTime() - a.getTime()) / 86400000);
}

/**
 * Count Schengen days within the 180-day window ending on checkDate (inclusive).
 * window = [checkDate - 179 days , checkDate]
 */
function countDaysInWindow(trips: Trip[], checkDate: Date): number {
  const windowStart = addDays(checkDate, -179);
  let total = 0;

  for (const trip of trips) {
    if (!trip.entry) continue;
    const entry = toDate(trip.entry);
    const exit = trip.exit ? toDate(trip.exit) : new Date(TODAY); // ongoing = today

    const overlapStart = entry > windowStart ? entry : new Date(windowStart);
    const overlapEnd = exit < checkDate ? exit : new Date(checkDate);

    if (overlapStart <= overlapEnd) {
      total += diffDays(overlapStart, overlapEnd) + 1;
    }
  }
  return total;
}

/**
 * Find last allowed day for a planned trip starting on entryDate.
 * Returns { lastDay, maxDays } where maxDays is how many days you can stay.
 */
function findLastAllowedDay(
  pastTrips: Trip[],
  entryDate: Date
): { lastDay: Date | null; maxDays: number } {
  let maxDays = 0;

  for (let i = 0; i < 90; i++) {
    const testDay = addDays(entryDate, i);
    // Build temporary trip from entryDate to testDay
    const tempTrip: Trip = {
      id: "__planned__",
      entry: formatISO(entryDate),
      exit: formatISO(testDay),
    };
    const allTrips = [...pastTrips.filter((t) => t.entry), tempTrip];
    const used = countDaysInWindow(allTrips, testDay);

    if (used <= 90) {
      maxDays = i + 1;
    } else {
      break;
    }
  }

  if (maxDays === 0) return { lastDay: null, maxDays: 0 };
  return { lastDay: addDays(entryDate, maxDays - 1), maxDays };
}

/**
 * Find earliest date from tomorrow when remaining days > 0
 */
function findEarliestReEntry(pastTrips: Trip[]): Date | null {
  for (let i = 1; i <= 180; i++) {
    const candidate = addDays(TODAY, i);
    const used = countDaysInWindow(pastTrips, candidate);
    if (used < 90) return candidate;
  }
  return null;
}

function tripDays(trip: Trip): number {
  if (!trip.entry || !trip.exit) return 0;
  return diffDays(toDate(trip.entry), toDate(trip.exit)) + 1;
}

// ─────────────────────────────────────────
// FAQ DATA
// ─────────────────────────────────────────
const FAQS = [
  {
    q: "90/180 günlük kural tam olarak nasıl işliyor?",
    a: "Kural, herhangi bir 180 günlük dönem içinde Schengen Bölgesi'nde en fazla 90 gün kalmanıza izin verir. Bu dönem sabit bir takvim aralığı değil, sürekli kayan (rolling) bir 180 günlük penceredir. Yani bugün için geriye doğru 180 gün sayarsınız ve bu pencerenin içine düşen tüm Schengen günlerinizi toplarsınız. Bu toplam 90'ı geçemez.",
  },
  {
    q: "Schengen'den çıkış yaptığımda sayım sıfırlanıyor mu?",
    a: "Hayır. Bu en yaygın yanılgıdır. Bölgeden çıkış yaptığınızda kural sıfırlanmaz. Geçmişteki seyahatleriniz 180 günlük pencerenin dışına çıkana kadar sayıma dahil olmaya devam eder.",
  },
  {
    q: "Hangi ülkeler Schengen Bölgesi'ne dahil?",
    a: "Avusturya, Belçika, Çek Cumhuriyeti, Danimarka, Estonya, Finlandiya, Fransa, Almanya, Yunanistan, Macaristan, İzlanda, İtalya, Letonya, Liechtenstein, Litvanya, Lüksemburg, Malta, Hollanda, Norveç, Polonya, Portekiz, Slovakya, Slovenya, İspanya, İsveç ve İsviçre. AB üyesi olmakla birlikte Schengen dışında kalan ülkeler ayrı kurallar gerektirebilir.",
  },
  {
    q: "Giriş günü ve çıkış günü sayıma dahil mi?",
    a: "Evet. AB mevzuatı uyarınca giriş günü ilk konaklama günü, çıkış günü ise son konaklama günü olarak sayılır. Dolayısıyla 1 Ocak'ta giriş yapıp 1 Ocak'ta çıkış yaparsanız 1 gün harcamış olursunuz.",
  },
  {
    q: "Fazla kalmanın sonuçları neler?",
    a: "İzin verilen 90 günü aşan fazla kalma; idari cezalar, zorunlu seyahat, Schengen ülkelerine giriş yasağı ve SIS gibi paylaşılan sistemlere kayıt gibi sonuçlar doğurabilir. EES (Giriş/Çıkış Sistemi) ile tüm girişler ve çıkışlar dijital olarak kaydedildiğinden ihlaller otomatik olarak tespit edilmektedir.",
  },
  {
    q: "EES (Giriş/Çıkış Sistemi) nedir?",
    a: "EES, geleneksel pasaport damgasının yerini alan ve Schengen sınır kapılarında uygulanan tam dijital bir sınır yönetim sistemidir. Her giriş ve çıkış biyometrik verilerle birlikte kaydedilir. Sistem, fazla kalmaları otomatik olarak tespit edebilmekte ve seyahat geçmişinizi anlık olarak değerlendirebilmektedir.",
  },
  {
    q: "ETIAS nedir ve kimler için geçerli?",
    a: "ETIAS (Avrupa Seyahat Bilgi ve Yetkilendirme Sistemi), Schengen Bölgesi'ne vizesiz giriş yapabilen yolcular için zorunlu bir ön seyahat yetkilendirmesidir. Vize değildir; ancak artık isteğe bağlı da değildir. Yolcuların uçağa binmeden önce dijital bir başvuru yapması ve onay alması gerekir. Çoğu başvuru dakikalar içinde sonuçlanır.",
  },
];

const INFO_SECTIONS = [
  {
    id: "kural",
    title: "90/180 Günlük Kural Nasıl Çalışır?",
    content: `Pek çok gezgin Schengen kuralını yanlış anlıyor ve çoğu zaman hatayı yaptıktan sonra fark ediyor.

Schengen 90/180 günlük kural sabit bir takvime göre işlemez. Kayan (rolling) 180 günlük bir periyot esas alınır; yani Schengen Bölgesi'nde geçirdiğiniz her gün sürekli olarak sayılır ve yeniden değerlendirilir. Aylarca önce yaptığınız bir seyahat, bugün bölgeye girip giremeyeceğinizi doğrudan etkileyebilir.

Çoğu gezgin burada hata yapıyor.

Birçok kişi, Schengen'den çıkış yapınca veya yeni bir takvim yılı başlayınca hakkın sıfırlandığını varsayıyor. Oysa her yeni giriş ayrı ayrı değerlendirilir. Küçük bir hesap hatası, farkında olmadan 90 günü aşmanıza yol açabilir.

Bugün hatalar artık görünmez değil.

EES (Giriş/Çıkış Sistemi) ile tüm girişler ve çıkışlar dijital ortamda kaydedilip otomatik olarak değerlendirilmektedir. Yetkililer ne kadar süre kaldığınızı ve kurala uyup uymadığınızı anında belirleyebilir.

Birden fazla seyahat planlıyorsanız hesaplama daha da karmaşık hale gelir. Her konaklama bir sonrakini etkiler, örtüşen seyahat planları mevcut günlerinizi azaltabilir ya da tamamen tüketebilir.

Manuel hesaplama mümkün olmakla birlikte nadiren güvenilirdir; bu nedenle tam uyum sağlamak isteyen gezginler gelişmiş araçlara başvurur.`,
  },
  {
    id: "ees",
    title: "EES (Giriş/Çıkış Sistemi): Bilinmesi Gerekenler",
    content: `Avrupa artık kalış sürenizi tahmin etmiyor; hassas bir şekilde hesaplıyor. Her giriş, her çıkış, her gün kayıt altına alınıyor, takip ediliyor ve sürekli değerlendiriliyor.

Avrupa Birliği, geleneksel pasaport damgasının yerini alan tam dijital sınır yönetim sistemi EES'i hayata geçirmiştir. Sistem, Schengen dış sınır kapılarında aşamalı olarak uygulamaya konulmuş ve artık sınır kontrol prosedürleriyle tam entegrasyon sağlanmıştır.

Bu yalnızca teknik bir güncelleme değildir; seyahat geçmişinizin nasıl kaydedildiğini, değerlendirildiğini ve hafızaya alındığını köklü biçimde değiştirmektedir.

Schengen Bölgesi'ne her girişinizde ve çıkışınızda verileriniz dijital olarak depolanır. Bu veriler; giriş ve çıkış tarihleri, seyahat geçmişi ve parmak izi ile yüz görüntüsü gibi biyometrik tanımlayıcıları kapsar.

En önemlisi: kalış süreniz 90/180 günlük kural kapsamında sürekli olarak değerlendirilir; yetkililer fazla kalmaları otomatik ve kesin biçimde tespit edebilir.

Bu durum gezginler için yeni bir gerçeklik yaratmaktadır: her gün takip edilir, her giriş kayıt altına alınır, her fazla kalma görünür hale gelir.`,
  },
  {
    id: "etias",
    title: "ETIAS: Seyahat Öncesi Bilmeniz Gerekenler",
    content: `Avrupa'ya seyahat artık sınırda başlamıyor; ülkenizden ayrılmadan önce başlıyor. Yolculuğunuz henüz hareket etmeden değerlendiriliyor, onayınız daha varışınızdan önce belirleniyor.

Avrupa Birliği, Schengen Bölgesi'ne vizesiz giriş yapan yolcular için zorunlu bir ön seyahat yetkilendirmesi olan ETIAS'ı (Avrupa Seyahat Bilgi ve Yetkilendirme Sistemi) hayata geçirmektedir.

Bu bir vize değildir. Ancak artık isteğe bağlı da değildir.

Uçağa binmeden önce dijital bir başvuru formunu doldurmanız gerekmektedir. Kişisel bilgileriniz, seyahat verileriniz ve güvenlikle ilgili bilgileriniz birden fazla Avrupa veri tabanında otomatik olarak sorgulanacaktır.

Çoğu durumda onay dakikalar içinde verilir. Ancak bazı başvurular işaretlenebilir, gecikebilir ya da reddedilebilir; üstelik siz henüz sınıra ulaşmadan.

İşte temel değişim burada: giriş kararları artık yalnızca sınırda alınmıyor; yolculuğunuz başlamadan önce başlıyor.

ETIAS onaylandığında, pasaportunuz geçerli olduğu sürece genellikle birkaç yıl boyunca birden fazla giriş için geçerlidir. Ancak onay, girişi garanti etmez; sınır kontrolü kararları her halükarda uygulanır.`,
  },
  {
    id: "overstay",
    title: "Fazla Kalmanın Sonuçları",
    content: `Schengen Bölgesi'nde fazla kalmak küçük bir hata değildir. Kayıt altına alınan bir ihlaldir ve sınırları aşarak sizi takip edebilir.

İzin verilen 90 günün üzerindeki tek bir ekstra gün bile sonuçlar doğurabilir. Bu sonuçlar; mali cezalar, zorla ülke dışına çıkarılma veya birden fazla Schengen ülkesini kapsayan giriş yasakları şeklinde ortaya çıkabilir.

Pek çok gezginin farkında olmadığı şey şudur: fazla kalmalar her yerde aynı şekilde değerlendirilmez; ancak her yerde ciddiye alınır.

Ve bugün sonuçlar artık belirsiz değildir.

EES sayesinde her giriş ve çıkış dijital olarak kaydedilmekte ve otomatik olarak değerlendirilmektedir. Yetkililer kalış sürenizi anında belirleyebilir, fazla kalmaları tespit edebilir ve 90/180 günlük kurala uyumu değerlendirebilir.

Pratikte fazla kalmalar şu sonuçlara yol açabilir:
- Mali cezalar veya idari para cezaları
- Aylarca ya da birkaç yıla kadar uzayan giriş yasakları
- SIS gibi paylaşılan sistemlere kayıt
- Gelecekteki vize başvurularında artan inceleme veya ret

Bu sonuçlar her zaman anında gerçekleşmeyebilir; ancak seyahat geçmişinizde kalır ve herhangi bir Schengen sınır kapısında gelecekteki kararları etkileyebilir.`,
  },
];

// ─────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────
export default function SchengenHesaplamaClient() {
  const uid = useId();
  const [trips, setTrips] = useState<Trip[]>([
    { id: uid + "0", entry: "", exit: "" },
  ]);
  const [plannedEntry, setPlannedEntry] = useState("");
  const [result, setResult] = useState<CalcResult | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openInfo, setOpenInfo] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  // ── Trip management ──
  const addTrip = () => {
    setTrips((p) => [...p, { id: uid + p.length, entry: "", exit: "" }]);
  };

  const removeTrip = (id: string) => {
    setTrips((p) => p.filter((t) => t.id !== id));
  };

  const updateTrip = (id: string, field: "entry" | "exit", value: string) => {
    setTrips((p) => p.map((t) => (t.id === id ? { ...t, [field]: value } : t)));
    setErrors([]);
  };

  // ── Validation ──
  const validate = (): string[] => {
    const errs: string[] = [];
    const validTrips = trips.filter((t) => t.entry);
    if (validTrips.length === 0) {
      errs.push("En az bir seyahat ekleyin.");
      return errs;
    }
    for (const t of validTrips) {
      if (t.exit && t.exit < t.entry) {
        errs.push(`Çıkış tarihi, giriş tarihinden önce olamaz (${t.entry}).`);
      }
      if (t.exit && diffDays(toDate(t.entry), toDate(t.exit)) > 180) {
        errs.push(`Tek bir seyahat 180 günü aşamaz (${t.entry}).`);
      }
    }
    if (plannedEntry) {
      const today = formatISO(TODAY);
      if (plannedEntry < today) {
        errs.push("Planlanan giriş tarihi bugünden önce olamaz.");
      }
    }
    return errs;
  };

  // ── Calculation ──
  const calculate = () => {
    const errs = validate();
    if (errs.length > 0) {
      setErrors(errs);
      setResult(null);
      return;
    }
    setErrors([]);

    const validTrips = trips.filter((t) => t.entry);

    // Days used today
    const usedToday = countDaysInWindow(validTrips, TODAY);
    const remaining = Math.max(0, 90 - usedToday);

    let status: CalcResult["status"] = "safe";
    if (usedToday > 90) status = "exceeded";
    else if (remaining <= 5) status = "danger";
    else if (remaining <= 15) status = "warning";

    // Earliest re-entry (only relevant if remaining === 0)
    let earliestReEntry: string | null = null;
    if (remaining === 0) {
      const reEntry = findEarliestReEntry(validTrips);
      earliestReEntry = reEntry ? formatISO(reEntry) : null;
    }

    // Planned future trip
    let plannedMaxDays: number | null = null;
    let plannedLastDay: string | null = null;
    let plannedRemainingOnEntry: number | null = null;

    if (plannedEntry) {
      const entryDate = toDate(plannedEntry);
      const remOnEntry = Math.max(
        0,
        90 - countDaysInWindow(validTrips, entryDate)
      );
      plannedRemainingOnEntry = remOnEntry;

      if (remOnEntry > 0) {
        const { lastDay, maxDays } = findLastAllowedDay(validTrips, entryDate);
        plannedMaxDays = maxDays;
        plannedLastDay = lastDay ? formatISO(lastDay) : null;
      } else {
        plannedMaxDays = 0;
        plannedLastDay = null;
      }
    }

    setResult({
      usedDaysToday: usedToday,
      remainingDaysToday: remaining,
      status,
      plannedEntry: plannedEntry || null,
      plannedMaxDays,
      plannedLastDay,
      plannedRemainingOnEntry,
      earliestReEntry,
    });

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  // ── Status helpers ──
  const statusConfig = {
    safe: {
      label: "Uyumlu",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      bar: "bg-emerald-500",
    },
    warning: {
      label: "Dikkat",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
      bar: "bg-amber-400",
    },
    danger: {
      label: "Kritik",
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-200",
      bar: "bg-red-500",
    },
    exceeded: {
      label: "Süre Aşıldı",
      color: "text-red-700",
      bg: "bg-red-50",
      border: "border-red-300",
      bar: "bg-red-600",
    },
  };

  const usagePercent = result
    ? Math.min(100, (result.usedDaysToday / 90) * 100)
    : 0;
  const sc = result ? statusConfig[result.status] : null;

  return (
    <div
      className="bg-[#F8F9FC] text-[#1B2B4A]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── HERO ── */}
      <section className="bg-[#0F1D33] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=1400&q=70')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1D33] via-[#1B2B4A]/90 to-[#1B2B4A]" />
        <div className="relative z-10 max-w-[900px] mx-auto px-6 py-20 lg:py-28">
          <span className="inline-block px-4 py-1.5 bg-[#4A7BC8]/20 border border-[#4A7BC8]/30 rounded-full text-[#7eb8f7] text-xs font-semibold tracking-widest uppercase mb-6">
            Ücretsiz Hesaplama Aracı
          </span>
          <h1
            style={{ fontFamily: "'DM Serif Display', serif" }}
            className="text-4xl lg:text-5xl text-white leading-[1.12] mb-5"
          >
            Schengen 90/180 Gün
            <br />
            <span className="italic text-[#7eb8f7]">Kural Hesaplayıcısı</span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl mb-4">
            Diğer hesaplayıcılar ne kadar kalabileceğinizi söyler. Bu araç,{" "}
            <strong className="text-white/80">
              ne zaman ve nasıl kalacağınızı
            </strong>{" "}
            planlamanıza yardımcı olur.
          </p>
          <p className="text-sm text-white/40 leading-relaxed max-w-xl">
            Geçmiş seyahatlerinizi girin, planlı girişinizi belirleyin — kalan
            günlerinizi, son konaklama tarihinizi ve yeniden giriş tarihlerinizi
            anında görün.
          </p>
        </div>
      </section>

      <div className="max-w-[900px] mx-auto px-6">
        {/* ── CALCULATOR ── */}
        <section className="py-12">
          {/* Trips table */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm mb-6">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-[#4A7BC8] mb-0.5">
                  1. Adım
                </p>
                <h2
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                  className="text-xl text-[#1B2B4A]"
                >
                  Geçmiş Schengen Seyahatlerinizi Girin
                </h2>
              </div>
              <button
                onClick={addTrip}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A7BC8] hover:text-[#1B2B4A] border border-[#4A7BC8]/30 hover:border-[#1B2B4A]/30 rounded-xl px-4 py-2 transition-colors"
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Seyahat Ekle
              </button>
            </div>

            {/* Table header */}
            <div className="hidden sm:grid grid-cols-[1fr_1fr_80px_40px] gap-4 px-6 py-3 bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <span>Giriş Tarihi</span>
              <span>Çıkış Tarihi</span>
              <span>Gün</span>
              <span />
            </div>

            <div className="divide-y divide-slate-100">
              {trips.map((trip, idx) => {
                const days = tripDays(trip);
                return (
                  <div
                    key={trip.id}
                    className="grid sm:grid-cols-[1fr_1fr_80px_40px] gap-3 sm:gap-4 px-6 py-4 items-center"
                  >
                    <div>
                      <label className="sm:hidden block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                        Giriş
                      </label>
                      <input
                        type="date"
                        value={trip.entry}
                        max={formatISO(TODAY)}
                        onChange={(e) =>
                          updateTrip(trip.id, "entry", e.target.value)
                        }
                        className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-[14px] text-[#1B2B4A] bg-slate-50 focus:outline-none focus:border-[#4A7BC8] focus:ring-2 focus:ring-[#4A7BC8]/10 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="sm:hidden block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                        Çıkış
                      </label>
                      <input
                        type="date"
                        value={trip.exit}
                        min={trip.entry || undefined}
                        max={formatISO(TODAY)}
                        onChange={(e) =>
                          updateTrip(trip.id, "exit", e.target.value)
                        }
                        placeholder="Devam ediyor"
                        className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-[14px] text-[#1B2B4A] bg-slate-50 focus:outline-none focus:border-[#4A7BC8] focus:ring-2 focus:ring-[#4A7BC8]/10 focus:bg-white transition-colors"
                      />
                    </div>
                    <div className="hidden sm:flex items-center justify-center">
                      {days > 0 ? (
                        <span className="inline-flex items-center justify-center w-12 h-8 bg-[#EBF2FF] text-[#1B2B4A] text-sm font-bold rounded-lg">
                          {days}
                        </span>
                      ) : (
                        <span className="text-slate-300 text-sm">—</span>
                      )}
                    </div>
                    <div className="flex justify-end sm:justify-center">
                      {trips.length > 1 && (
                        <button
                          onClick={() => removeTrip(trip.id)}
                          className="w-8 h-8 flex items-center justify-center text-slate-300 hover:text-red-400 hover:bg-red-50 rounded-lg transition-colors"
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
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="px-6 py-3 bg-slate-50 border-t border-slate-100">
              <p className="text-xs text-slate-400">
                Çıkış tarihi boş bırakılan seyahatler devam eden gezi olarak
                değerlendirilir.
              </p>
            </div>
          </div>

          {/* Planned entry */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-6">
            <p className="text-xs font-semibold tracking-[0.1em] uppercase text-[#4A7BC8] mb-1">
              2. Adım (İsteğe Bağlı)
            </p>
            <h2
              style={{ fontFamily: "'DM Serif Display', serif" }}
              className="text-xl text-[#1B2B4A] mb-4"
            >
              Planlanan Giriş Tarihi
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 items-start">
              <div>
                <label className="block text-[13px] font-semibold text-[#2D3A50] mb-2">
                  Bir sonraki Schengen girişinizi planladığınız tarihi girin
                </label>
                <input
                  type="date"
                  value={plannedEntry}
                  min={formatISO(TODAY)}
                  onChange={(e) => {
                    setPlannedEntry(e.target.value);
                    setErrors([]);
                  }}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[15px] text-[#1B2B4A] bg-slate-50 focus:outline-none focus:border-[#4A7BC8] focus:ring-2 focus:ring-[#4A7BC8]/10 focus:bg-white transition-colors"
                />
              </div>
              <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-500 leading-relaxed">
                Bu tarih girildiğinde hesaplayıcı; o gün için kaç gününüzün
                kaldığını, en fazla kaç gün kalabileceğinizi ve son izin verilen
                konaklama tarihini gösterir.
              </div>
            </div>
          </div>

          {/* Errors */}
          {errors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 mb-5">
              {errors.map((e, i) => (
                <p
                  key={i}
                  className="text-red-600 text-sm flex items-start gap-2"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
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
                  {e}
                </p>
              ))}
            </div>
          )}

          {/* Calculate button */}
          <button
            onClick={calculate}
            className="w-full py-4 bg-[#1B2B4A] hover:bg-[#2E4A7A] text-white font-bold text-base rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1B2B4A]/20 flex items-center justify-center gap-3"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            Hesapla
          </button>
        </section>

        {/* ── RESULTS ── */}
        {result && (
          <div ref={resultRef} className="pb-12">
            <div
              className={`rounded-2xl border ${sc!.border} ${
                sc!.bg
              } p-6 lg:p-8 mb-6`}
            >
              {/* Status header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs font-semibold tracking-[0.1em] uppercase text-slate-400 mb-1">
                    Hesaplama Sonucu
                  </p>
                  <h2
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                    className="text-2xl text-[#1B2B4A]"
                  >
                    Bugün İtibarıyla Durumunuz
                  </h2>
                </div>
                <span
                  className={`px-4 py-1.5 rounded-full text-sm font-bold ${
                    sc!.color
                  } bg-white border ${sc!.border}`}
                >
                  {sc!.label}
                </span>
              </div>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-semibold text-slate-500 mb-2">
                  <span>Kullanılan Gün</span>
                  <span>{result.usedDaysToday} / 90</span>
                </div>
                <div className="w-full h-3 bg-white rounded-full overflow-hidden border border-slate-200">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      sc!.bar
                    }`}
                    style={{ width: `${usagePercent}%` }}
                  />
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div className="bg-white rounded-xl border border-slate-200 p-5 text-center">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Son 180 Günde Kullanılan
                  </p>
                  <p
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                    className="text-4xl text-[#1B2B4A]"
                  >
                    {result.usedDaysToday}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">gün</p>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-5 text-center">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Bugün Kalan Hak
                  </p>
                  <p
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                    className={`text-4xl ${sc!.color}`}
                  >
                    {result.remainingDaysToday}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">gün</p>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-5 text-center">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Toplam Hak
                  </p>
                  <p
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                    className="text-4xl text-[#1B2B4A]"
                  >
                    90
                  </p>
                  <p className="text-xs text-slate-400 mt-1">gün (180 günde)</p>
                </div>
              </div>

              {/* Earliest re-entry */}
              {result.earliestReEntry && (
                <div className="bg-white rounded-xl border border-amber-200 p-4 flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"
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
                  <div>
                    <p className="text-sm font-semibold text-[#1B2B4A]">
                      En Erken Tekrar Giriş Tarihi
                    </p>
                    <p className="text-sm text-slate-600 mt-0.5">
                      Mevcut seyahat geçmişinize göre en erken{" "}
                      <strong className="text-[#1B2B4A]">
                        {formatDateTR(toDate(result.earliestReEntry))}
                      </strong>{" "}
                      tarihinde Schengen Bölgesi'ne giriş yapabilirsiniz.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Planned trip results */}
            {result.plannedEntry && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-[#4A7BC8] mb-1">
                  Planlanan Seyahat
                </p>
                <h3
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                  className="text-2xl text-[#1B2B4A] mb-6"
                >
                  {formatDateTR(toDate(result.plannedEntry))} Girişi İçin Analiz
                </h3>

                {result.plannedMaxDays === 0 ||
                result.plannedRemainingOnEntry === 0 ? (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-sm text-red-700 leading-relaxed">
                    Bu tarihte Schengen Bölgesi'ne girişiniz için kalan gününüz
                    bulunmamaktadır. Lütfen daha geç bir giriş tarihi seçin veya
                    seyahat geçmişinizi kontrol edin.
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-[#EBF2FF] rounded-xl p-5 text-center">
                      <p className="text-xs font-semibold text-[#4A7BC8] uppercase tracking-wider mb-2">
                        O Gün Kalan Hak
                      </p>
                      <p
                        style={{ fontFamily: "'DM Serif Display', serif" }}
                        className="text-4xl text-[#1B2B4A]"
                      >
                        {result.plannedRemainingOnEntry}
                      </p>
                      <p className="text-xs text-[#4A7BC8] mt-1">gün</p>
                    </div>
                    <div className="bg-[#EBF2FF] rounded-xl p-5 text-center">
                      <p className="text-xs font-semibold text-[#4A7BC8] uppercase tracking-wider mb-2">
                        Maksimum Kalış
                      </p>
                      <p
                        style={{ fontFamily: "'DM Serif Display', serif" }}
                        className="text-4xl text-[#1B2B4A]"
                      >
                        {result.plannedMaxDays}
                      </p>
                      <p className="text-xs text-[#4A7BC8] mt-1">gün</p>
                    </div>
                    <div className="bg-[#1B2B4A] rounded-xl p-5 text-center">
                      <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                        Son İzin Verilen Gün
                      </p>
                      <p
                        style={{ fontFamily: "'DM Serif Display', serif" }}
                        className="text-2xl text-[#7eb8f7] leading-tight"
                      >
                        {result.plannedLastDay
                          ? formatDateTR(toDate(result.plannedLastDay))
                          : "—"}
                      </p>
                    </div>
                  </div>
                )}

                <p className="text-xs text-slate-400 mt-5 leading-relaxed">
                  Bu hesaplama, 90/180 günlük kuralın kayan pencere
                  mekanizmasına göre yapılmıştır. Maksimum kalış süresi, giriş
                  tarihinden sonraki 180 günlük pencereyi de dikkate alarak her
                  gün için ayrı ayrı doğrulanmıştır. Kesin karar her zaman
                  ilgili sınır makamlarına aittir.
                </p>
              </div>
            )}
          </div>
        )}

        {/* ── DIVIDER ── */}
        <div className="h-px bg-slate-200 mb-16" />

        {/* ── INFO SECTIONS ── */}
        <section className="pb-16">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#4A7BC8] mb-3">
            Bilgi Rehberi
          </p>
          <h2
            style={{ fontFamily: "'DM Serif Display', serif" }}
            className="text-3xl lg:text-4xl text-[#1B2B4A] mb-4"
          >
            Schengen Kuralları Hakkında
            <br />
            Bilmeniz Gerekenler
          </h2>
          <p className="text-[#4A5568] text-base leading-relaxed max-w-xl mb-10">
            Kurallara uymak, onları anlamakla başlar. Aşağıdaki bölümler gerçek
            seyahat senaryolarına dayalı pratik bilgiler sunar.
          </p>

          <div className="flex flex-col gap-3">
            {INFO_SECTIONS.map((section) => (
              <div
                key={section.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left gap-4 hover:bg-slate-50 transition-colors"
                  onClick={() =>
                    setOpenInfo(openInfo === section.id ? null : section.id)
                  }
                >
                  <span className="font-semibold text-[15px] text-[#1B2B4A]">
                    {section.title}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full bg-[#EBF2FF] flex items-center justify-center text-[#4A7BC8] transition-transform duration-200 ${
                      openInfo === section.id ? "rotate-45" : ""
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
                {openInfo === section.id && (
                  <div className="px-6 pb-6 border-t border-slate-100 pt-5">
                    {section.content.split("\n\n").map((para, i) => (
                      <p
                        key={i}
                        className="text-[14.5px] text-[#5A6A82] leading-relaxed mb-4 last:mb-0"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── DIVIDER ── */}
        <div className="h-px bg-slate-200 mb-16" />

        {/* ── FAQ ── */}
        <section className="pb-16">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#4A7BC8] mb-3">
            Sık Sorulan Sorular
          </p>
          <h2
            style={{ fontFamily: "'DM Serif Display', serif" }}
            className="text-3xl lg:text-4xl text-[#1B2B4A] mb-10"
          >
            Aklınızdaki Sorular
          </h2>
          <div className="flex flex-col gap-3">
            {FAQS.map((f, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left gap-4 hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-[15px] text-[#1B2B4A]">
                    {f.q}
                  </span>
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
                  <div className="px-6 pb-5 border-t border-slate-100 pt-4 text-[14.5px] text-[#5A6A82] leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── LEGAL NOTE ── */}
        <section className="pb-20">
          <div className="bg-slate-100 border border-slate-200 rounded-2xl px-6 py-5 text-xs text-slate-500 leading-relaxed">
            <strong className="text-slate-600">Yasal Uyarı:</strong> Bu
            hesaplayıcı yalnızca bilgilendirme amaçlıdır ve yalnızca kamuya açık
            AB mevzuatı olan Avrupa Parlamentosu ve Konseyi Tüzüğü (AB)
            2016/399'a dayanmaktadır. Bu araç hukuki tavsiye niteliği taşımaz ve
            sınır makamlarının resmi kararlarının yerini tutmaz. Hesaplama
            sonucu belirli bir süre için kalış hakkı oluşturmaz; kesin karar her
            zaman ilgili üye devletlerin yetkili makamlarına (özellikle sınır
            görevlilerine) aittir.
          </div>
        </section>
      </div>
    </div>
  );
}
