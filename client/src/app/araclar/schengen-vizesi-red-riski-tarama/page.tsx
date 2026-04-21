import type { Metadata } from "next";
import RiskScannerClient from "./RiskScannerClient";

export const metadata: Metadata = {
  title: "Schengen Vizesi Red Riski Tarama | Schengen Başvurunuz Reddedilir mi?",
  description:
    "Schengen vize başvurusundan önce reddedilme riskini öğrenin. Finansal durum, iş geçmişi, seyahat geçmişi ve belge hazırlığını analiz eden ücretsiz değerlendirme aracı.",
  keywords: [
    "schengen vize reddedilir mi",
    "vize red risk analizi",
    "schengen vize başvurusu güçlendirme",
    "vize red sebepleri",
    "schengen başvurusu nasıl yapılır",
    "vize başvurusu değerlendirme",
    "schengen vize onay oranı",
    "vize red scanner",
  ],
  openGraph: {
    title: "Vize Red Risk Tarama — Başvurunuz Reddedilir mi?",
    description:
      "4 kategoride sorulara cevap verin, Schengen vize başvurunuzun red riskini öğrenin. Ücretsiz.",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "/schengen-vizesi-red-riski-tarama",
  },
};

export default function VizeRiskTaramaPage() {
  return <RiskScannerClient />;
}
