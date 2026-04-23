import React from "react";
import InputsSection from "@/components/JobsPageComponents/InputsSection/InputsSection";
import JobListingWithPagination from "@/components/JobListingWithPagination/JobListingWithPagination";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Yurtdışı İş İlanları - Avrupa’da Kariyer Fırsatları",
  description:
    "Yurtdışında çalışmak isteyenler için en güncel iş ilanları! Avrupa başta olmak üzere uluslararası kariyer fırsatlarını keşfedin, başvurun ve kariyerinize global bir yön verin.",
  keywords: [
    "yurtdışı iş ilanları",
    "avrupa iş fırsatları",
    "yurtdışında çalışma",
    "uluslararası kariyer",
    "yabancı iş ilanları",
    "global iş fırsatları",
  ],
  openGraph: {
    title: "Yurtdışı İş İlanları | Avrupa’da Kariyer Fırsatları",
    description:
      "Avrupa ve dünyadaki güncel iş ilanlarını keşfedin. Yurtdışında çalışmak için fırsatları kaçırmayın!",
    type: "website",
  },
};

async function page() {
  /* redirect("/"); */

  return (
    <div className="w-full">
      <div className="flex justify-between gap-2">
        <div className="w-full">
          <InputsSection />
          <div className="">
            <JobListingWithPagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
