"use client";

import { IGeneralComboboxItems } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

const defaultFilter: {
  countries: IGeneralComboboxItems[];
  workSchedules: IGeneralComboboxItems[];
  languages: IGeneralComboboxItems[];
  jobSectors: IGeneralComboboxItems[];
  orderBy: string;
  keywords: string;
  page: string;
} = {
  countries: [],
  workSchedules: [],
  languages: [],
  jobSectors: [],
  orderBy: "BEST_MATCH",
  keywords: "",
  page: "1",
};

export type IFilterType = typeof defaultFilter;

interface FilterContextType {
  filterItems: IFilterType;
  setFilterItems: React.Dispatch<React.SetStateAction<IFilterType>>;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filterItems, setFilterItems] = useState(defaultFilter);

  return (
    <FilterContext.Provider value={{ filterItems, setFilterItems }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
