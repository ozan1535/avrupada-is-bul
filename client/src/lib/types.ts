import React from "react";

export interface IChildrenReactElement {
  children: React.ReactNode;
}

export interface IGeneralComboboxItems {
  id: number;
  name: string;
  filterName: string;
}

export type IComboboxFilterKey =
  | "countries"
  | "workSchedules"
  | "languages"
  | "jobSectors";
