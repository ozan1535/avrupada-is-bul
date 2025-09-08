"use client";
import React from "react";
import StatBox from "./StatBox";
import {
  BriefcaseBusiness,
  Building2,
  ClipboardList,
  Earth,
} from "lucide-react";

function AllStatBoxes() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-16">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <StatBox Icon={Earth} number="30+" label="Ülke" />
        <StatBox Icon={Building2} number="2000+" label="Şirket" />
        <StatBox Icon={ClipboardList} number="50000+" label="İş İlanı" />
        <StatBox Icon={BriefcaseBusiness} number="500+" label="Pozisyon" />
      </div>
    </div>
  );
}

export default AllStatBoxes;
