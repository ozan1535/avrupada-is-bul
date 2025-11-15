import GermanVisaGuide from "@/components/GermanVisaGuide/GermanVisaGuide";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uluslararası Kariyer - Almanya Vize Rehberi",
  description:
    "Almanya, Avrupa'nın en güçlü ekonomilerinden biri olarak Türk vatandaşları için cazip fırsatlar sunuyor. İster turistik bir gezi, ister kariyer hedefleri, ister eğitim fırsatları - doğru vize türünü seçmek başarının anahtarı!",
};

const page = async () => {
  // const { getUser } = getKindeServerSession();
  // const user = await getUser();
  return <GermanVisaGuide /* user={user} */ />;
};

export default page;
