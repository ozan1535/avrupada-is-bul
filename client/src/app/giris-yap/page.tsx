import { Metadata } from "next";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Login from "@/components/Login/Login";

export const metadata: Metadata = {
  title: "Uluslararası Kariyer - Giriş Yapın",
};

async function page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (user) {
    redirect("/");
  }
  return (
    <Login
      text1="Hoş Geldiniz"
      text2="Hesabınıza giriş yapın"
      text3="Hesabınız yok mu?"
      text4="Kayıt Ol"
      link="/kayit-ol"
      kindeMode={"login"}
    />
  );
}

export default page;
