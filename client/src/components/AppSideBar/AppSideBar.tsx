"use client";
import { sendGAEvent } from "@next/third-parties/google";
import { Fragment } from "react";
import { ListFilterPlus } from "lucide-react";
import { Button } from "../ui/button";
import { useFilter } from "@/context/FilterContext";
import { useJobsDataContext } from "@/context/JobsDataContext";
import { onSelect } from "./helpers";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import ComboboxMenu from "../ComboboxMenu/ComboboxMenu";
import { sidebarItems } from "@/lib/helpers";

export function AppSidebar() {
  const { filterItems, setFilterItems } = useFilter();
  const { refetch } = useJobsDataContext();

  const { countries, workSchedules, languages, jobSectors, keywords } =
    filterItems;

  return (
    /*  <Sidebar className="top-16"> */
    <Sidebar className="h-full border-r top-16">
      {/*   <SidebarContent> */}
      <SidebarContent className="p-4">
        <SidebarGroup>
          {sidebarItems(countries, workSchedules, languages, jobSectors).map(
            ({ label, data, selectedData, title, key }) => (
              <Fragment key={key}>
                <SidebarGroupLabel className={"font-bold"}>
                  {label}
                </SidebarGroupLabel>
                <SidebarGroupContent>
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
                </SidebarGroupContent>
              </Fragment>
            )
          )}
          <Button
            className="sm:w-auto w-full mt-2 bg-blue-500 hover:bg-blue-500 cursor-pointer font-bold flex items-center justify-center gap-2"
            onClick={() => {
              refetch(1);
              setFilterItems((prev) => ({ ...prev, page: 1 }));

              sendGAEvent("event", "Arama Yapildi", {
                screen: "yurtdisi-is-ilanlari",
                keywords,
                countries,
              });
            }}
          >
            <ListFilterPlus />
            Filtrele
          </Button>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
