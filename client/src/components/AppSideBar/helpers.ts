import { IFilterType } from "@/context/FilterContext";
import { IComboboxFilterKey, IGeneralComboboxItems } from "@/lib/types";
import { Dispatch } from "react";

export const onSelect = (
  item: IGeneralComboboxItems,
  filterData: IGeneralComboboxItems[],
  filterName: IComboboxFilterKey,
  setFilterItems: Dispatch<React.SetStateAction<IFilterType>>
) => {
  const isItemIncluded = filterData.some(
    (filterItem) => filterItem.id === item.id
  );

  if (isItemIncluded) {
    setFilterItems((prev) => ({
      ...prev,
      [filterName]: prev[filterName].filter(
        (filterItem) => filterItem.id !== item.id
      ),
    }));
  } else {
    setFilterItems((prev) => ({
      ...prev,
      [filterName]: [...prev[filterName], item],
    }));
  }
};
