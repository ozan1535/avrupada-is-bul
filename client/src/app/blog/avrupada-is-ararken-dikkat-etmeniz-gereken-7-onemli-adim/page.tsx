import Blog2 from "@/components/Blogs/Blog2/Blog2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Uluslararası Kariyer - Avrupa’da İş Ararken Dikkat Edilmesi Gereken 7 Adım",
  description:
    "Avrupa’da iş arama sürecinde başarıya ulaşmak için uygulamanız gereken 7 adımı keşfedin. CV hazırlığından mülakata kadar kapsamlı rehber.",
};

export default function page() {
  return <Blog2 />;
}
