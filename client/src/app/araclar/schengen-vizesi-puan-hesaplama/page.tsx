import type { Metadata } from "next";
import SchengenHesaplamaClient from "./SchengenHesaplamaClient";

export const metadata: Metadata = {
  title: "Schengen 90/180 Gün Hesaplayıcısı | Vize Kalış Süresi Hesaplama",
  description:
    "Ücretsiz Schengen vize kalış süresi hesaplayıcısı. Geçmiş seyahatlerinizi girin, kalan günlerinizi, son konaklama tarihinizi ve planlı seyahatleriniz için maksimum kalış süresini anında öğrenin.",
  keywords: [
    "schengen kalış süresi hesaplama",
    "90 180 gün kuralı hesaplayıcı",
    "schengen vizesi gün hesaplama",
    "schengen 90 gün hesaplama",
    "vize kalış süresi hesaplama",
    "schengen kural hesaplayıcı türkiye",
    "schengen bölgesi kaç gün kalınır",
    "schengen günlerimi hesapla",
    "schengen fazla kalma hesaplama",
    "schengen seyahat planlama aracı",
  ],
  openGraph: {
    title: "Schengen 90/180 Gün Hesaplayıcısı | Ücretsiz Kalış Süresi Planlama",
    description:
      "Geçmiş seyahatlerinizi girerek Schengen'de kalan günlerinizi, son konaklama tarihinizi ve planlı seyahatiniz için maksimum kalış süresini hesaplayın.",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "/araclar/schengen-hesaplayici",
  },
};

export default function SchengenHesaplamaPage() {
  return <SchengenHesaplamaClient />;
}
