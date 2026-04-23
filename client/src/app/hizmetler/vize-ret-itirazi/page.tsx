import type { Metadata } from "next";
import VizeRedItirazClient from "./VizeRedItirazClient";

export const metadata: Metadata = {
  title: "Vize Red İtiraz Dilekçesi | 24-48 Saatte Profesyonel Dilekçe",
  description:
    "Schengen, ABD, İngiltere ve diğer ülke vize reddine karşı kişiselleştirilmiş itiraz dilekçesi hazırlama hizmeti. Red gerekçenize özel, 24-48 saat içinde e-postanızda.",
  keywords: [
    "vize red itiraz dilekçesi",
    "schengen vizesi reddedildi itiraz",
    "vize reddi nasıl itiraz edilir",
    "vize itiraz dilekçesi örneği",
    "vize red gerekçesi itiraz",
    "schengen reddi itiraz",
    "vize reddi itiraz türkiye",
  ],
  openGraph: {
    title: "Vize Red İtiraz Dilekçesi | 24-48 Saatte Profesyonel Dilekçe",
    description:
      "Vizeniz reddedildi mi? Red gerekçenize özel itiraz dilekçesi hazırlıyoruz. 24-48 saat içinde e-postanızda.",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "/hizmetler/vize-red-itiraz",
  },
};

// ─── This is a server component wrapper for metadata.
// The interactive client component is imported below.

export default function VizeRedItirazPage() {
  return <VizeRedItirazClient />;
}
