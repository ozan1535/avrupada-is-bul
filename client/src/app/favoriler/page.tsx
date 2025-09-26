import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";
import { redirect, RedirectType } from "next/navigation";
import ListFavoriteJobs from "@/components/ListFavoriteJobs/ListFavoriteJobs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favoriler - İş İlanı",
  description: `Uluslararası Kariyer ile kaydettiğiniz iş fırsatlarını kaçırmayın.`,
};

async function page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/api/auth/login", RedirectType.replace);
  }
  return (
    <div className="w-full bg-white">
      <section aria-labelledby="hero-title" className="w-full bg-slate-100">
        <div className="max-w-[1400px] mx-auto p-4 sm:px-6 flex justify-center items-start lg:pt-20 gap-10 min-h-[40vh] lg:min-h-[100vh]">
          <div className="w-full">
            <ListFavoriteJobs />
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
