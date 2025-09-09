import ChancenKarteComponent from "@/components/ChancenKarteComponent/ChancenKarteComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Uluslararası Kariyer - Almanya Chancen Karte (Fırsat Kartı)  Puan Hesaplama",
  description:
    "Almanya Chancen Karte (Fırsat Kartı) puan hesaplama aracımız ile Almanya'da çalışma izni başvurusu yapıp yapamayacağınızı hızlıca öğrenin. Puanınızı şimdi hesaplayın!",
};

const page = () => {
  return <ChancenKarteComponent />;
};

export default page;
