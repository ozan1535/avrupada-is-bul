import RedWhiteRedCalculator from "@/components/RedWhiteRedCalculator/RedWhiteRedCalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Uluslararası Kariyer - Avusturya Red-White-Red (Rot-Weiß-Rot ) Kart Puan Hesaplama",
  description:
    "Avusturya Red-White-Red Kart puan hesaplama aracımız ile Avusturya'da çalışma izni başvurusu yapıp yapamayacağınızı hızlıca öğrenin. Avrupa'da kariyerinize yön verin!",
};

function page() {
  return <RedWhiteRedCalculator />;
}

export default page;
