import { Metadata } from "next";
import Login from "@/components/Login/Login";

export const metadata: Metadata = {
  title: "Uluslararası Kariyer - Kayıt Olun",
};

function page() {
  return (
    <Login
      text1="Hesap Oluştur"
      text2="Ücretsiz hesabınızı oluşturun"
      text3="Zaten bir hesabınız var mı?"
      text4="Giriş Yap"
      link="/giris-yap"
      kindeMode={"kayit-ol"}
    />
  );
}

export default page;
