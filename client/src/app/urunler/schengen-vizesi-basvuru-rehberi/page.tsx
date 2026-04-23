import SchengenVisaLanding from "@/components/Urunler/SchengenVisaLanding/SchengenVisaLanding";
import { redirect } from "next/navigation";
import React from "react";

function page() {
  redirect("/");

  return <SchengenVisaLanding />;
}

export default page;
