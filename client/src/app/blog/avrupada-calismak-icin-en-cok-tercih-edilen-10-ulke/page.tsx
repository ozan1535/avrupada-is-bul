import Blog1 from "@/components/Blogs/Blog1/Blog1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uluslararası Kariyer - Avrupa'da Çalışmak için En İyi 10 Ülke",
  description:
    "Avrupa’da çalışmak isteyenler için en iyi 10 ülkeyi yaşam kalitesi, iş imkanları ve sosyal haklar açısından karşılaştırdık. Hangi ülke sizin için uygun?",
};

const page = () => {
  return <Blog1 />;
};

export default page;
