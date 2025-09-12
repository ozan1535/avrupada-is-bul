"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { euCountries } from "@/lib/helpers";
import ComboboxMenu from "@/components/ComboboxMenu/ComboboxMenu";
import { Search } from "lucide-react";
import Link from "next/link";
import { useFilter } from "@/context/FilterContext";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { sendGAEvent } from "@next/third-parties/google";
import { IGeneralComboboxItems } from "@/lib/types";

function HeroSectionInputs() {
  const { filterItems, setFilterItems } = useFilter();
  const { keywords, countries } = filterItems;
  const onSelect = (item: IGeneralComboboxItems) => {
    setFilterItems((prev) => ({
      ...prev,
      countries: [item],
    }));
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 p-3 bg-primary-color rounded-sm">
        <Tooltip>
          <TooltipTrigger asChild>
            <Input
              type="text"
              placeholder="Pozisyon Ara"
              className="flex-1 min-w-0 border-primary-color bg-white"
              onChange={(e) =>
                setFilterItems((prev) => ({
                  ...prev,
                  keywords: e.target.value,
                }))
              }
              value={keywords}
              autoFocus
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Daha iyi sonuçlar için lütfen İngilizce giriniz.</p>
          </TooltipContent>
        </Tooltip>
        <ComboboxMenu
          data={euCountries}
          selectedData={countries}
          title="Ülke Seç"
          placeholder="Ülke ara..."
          onSelect={onSelect}
        />
        <Link
          href={"/yurtdisi-is-ilanlari"}
          onClick={() => {
            sendGAEvent("event", "Arama Yapildi", {
              screen: "home",
              countries,
              keywords,
            });
          }}
        >
          <Button className="sm:w-auto w-full bg-blue-500 hover:bg-blue-500 cursor-pointer font-bold flex items-center justify-center gap-2">
            <Search />
            Arama Yap
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSectionInputs;
