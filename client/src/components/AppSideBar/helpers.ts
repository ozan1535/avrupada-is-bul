export const onSelect = (item, filterData, filterName, setFilterItems) => {
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
