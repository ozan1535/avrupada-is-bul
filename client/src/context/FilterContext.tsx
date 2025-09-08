"use client";

import React, { createContext, useContext, useState } from "react";

const defaultFilter = {
  countries: [],
  workSchedules: [],
  languages: [],
  jobSectors: [],
  orderBy: "BEST_MATCH",
  keywords: "",
  page: 1,
};

type FilterType = typeof defaultFilter;

interface FilterContextType {
  filterItems: FilterType;
  setFilterItems: React.Dispatch<React.SetStateAction<FilterType>>;
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
