"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilter } from "@/context/FilterContext";
import { useJobsDataContext } from "@/context/JobsDataContext";
import { sortJobItemsBy } from "@/lib/helpers";
import { sendGAEvent } from "@next/third-parties/google";
import { Search } from "lucide-react";
import React from "react";

function InputsSection() {
  const { filterItems, setFilterItems } = useFilter();
  const { orderBy } = filterItems;
  const { refetch } = useJobsDataContext();
  return (
    <div className="hidden sm:flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
      <Input
        type="text"
        placeholder="Pozisyon Ara"
        className="w-full sm:w-60 bg-white"
        onChange={(e) =>
          setFilterItems((prev) => ({ ...prev, keywords: e.target.value }))
        }
        value={filterItems.keywords}
        autoFocus
      />

      <Select>
        <SelectTrigger className="w-full sm:w-[180px] bg-white">
          <SelectValue
            placeholder={
              sortJobItemsBy?.find((item) => item.filterName === orderBy)?.name
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {sortJobItemsBy.map((item) => (
              <SelectItem
                key={item.id}
                value={item.filterName}
                onClick={() =>
                  setFilterItems((prev) => ({
                    ...prev,
                    orderBy: item.filterName,
                  }))
                }
              >
                {item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button
        className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold flex items-center justify-center gap-2"
        onClick={() => {
          refetch("1");
          setFilterItems((prev) => ({ ...prev, page: "1" }));
          sendGAEvent("event", "Arama Yapildi", {
            screen: "yurtdisi-is-ilanlari",
            keywords: filterItems.keywords,
            countries: filterItems.countries,
          });
        }}
      >
        <Search className="w-4 h-4" />
        Arama Yap
      </Button>
    </div>
  );
}

export default InputsSection;
