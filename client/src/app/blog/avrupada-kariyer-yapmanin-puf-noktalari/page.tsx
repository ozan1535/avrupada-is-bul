import Blog3 from "@/components/Blogs/Blog3/Blog3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uluslararası Kariyer - Avrupa’da Kariyer Yapmanın Püf Noktaları",
  description:
    "Avrupa’da güçlü bir kariyer inşa etmek için gereken zihniyet, beceriler ve networking stratejileri. Başarıya giden yolun detaylı rehberi burada.",
};

export default function page() {
  return <Blog3 />;
}
