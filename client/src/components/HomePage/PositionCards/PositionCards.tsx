"use client";
import { useFilter } from "@/context/FilterContext";
import {
  BookA,
  BrickWall,
  Briefcase,
  Building2,
  Code,
  Component,
  Globe2,
  Languages,
  ListChecks,
  Megaphone,
  ReceiptTurkishLira,
  TrendingUp,
  Users,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { positionCards1, positionCards2 } from "./helpers";

function PositionCard({ text, icon: Icon, link, searchBy }) {
  const { setFilterItems } = useFilter();
  return (
    <Link
      href={"/yurtdisi-is-ilanlari"}
      onClick={() =>
        setFilterItems((prev) => ({ ...prev, keywords: searchBy }))
      }
      className="w-full cursor-pointer md:w-52 bg-slate-100 rounded-full flex justify-between items-center p-3 transition-all duration-300 transform hover:bg-slate-200 hover:scale-105 hover:shadow-lg"
    >
      <div className="flex justify-center items-center space-x-2">
        <Icon
          size={30}
          style={{
            backgroundColor: "white",
            padding: "6px",
            borderRadius: "50%",
            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
            color: "var(--primary-color)",
          }}
        />
        <p className="text-gray-800 font-medium">{text}</p>
      </div>
      <ChevronRight className="text-gray-600" />
    </Link>
  );
}

function PositionCards() {
  return (
    <div className="max-w-[900px] mx-auto mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[
        ...positionCards1(Megaphone, Code, Component, Users),
        ...positionCards2(ReceiptTurkishLira, BrickWall, Building2, BookA),
      ].map((item) => (
        <PositionCard
          key={item.name}
          text={item.name}
          icon={item.icon}
          link={item.link}
          searchBy={item.searchBy}
        />
      ))}
    </div>
  );
}

export default PositionCards;
