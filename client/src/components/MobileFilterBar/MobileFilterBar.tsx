"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useFilter } from "@/context/FilterContext";
import { useJobsDataContext } from "@/context/JobsDataContext";
import { sidebarItems, sortJobItemsBy } from "@/lib/helpers";
import ComboboxMenu from "../ComboboxMenu/ComboboxMenu";
import { onSelect } from "../AppSideBar/helpers";

export default function MobileFilterBar({}) {
  const { filterItems, setFilterItems } = useFilter();
  const { refetch } = useJobsDataContext();

  const { countries, workSchedules, languages, jobSectors } = filterItems;

  return (
    <div className="block sm:hidden w-full p-4 bg-gray-50 space-y-4">
      <Input
        type="text"
        placeholder="Pozisyon Ara"
        className="w-full bg-white"
        onChange={(e) =>
          setFilterItems((prev: any) => ({ ...prev, keywords: e.target.value }))
        }
        value={filterItems.keywords}
        autoFocus
      />

      {/* Select + Arama Yap Button */}
      <div className="flex gap-3">
        <Select>
          <SelectTrigger className="w-full bg-white">
            <SelectValue
              placeholder={
                sortJobItemsBy?.find(
                  (item) => item.filterName === filterItems.orderBy
                )?.name
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
                    setFilterItems((prev: any) => ({
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
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold flex items-center justify-center gap-2"
          onClick={() => {
            refetch("1");
            setFilterItems((prev: any) => ({ ...prev, page: 1 }));
          }}
        >
          <Search className="w-4 h-4" />
          Arama Yap
        </Button>
      </div>

      {/* Horizontally Scrollable Filter Items */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide py-2">
        {sidebarItems(countries, workSchedules, languages, jobSectors).map(
          ({ label, data, selectedData, title, key }) => (
            <div key={key} className="min-w-[200px]">
              <ComboboxMenu
                data={data}
                selectedData={selectedData}
                title={title}
                placeholder="Ara..."
                onSelect={(item) =>
                  onSelect(item, selectedData, key, setFilterItems)
                }
                canSelectSingle={false}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
