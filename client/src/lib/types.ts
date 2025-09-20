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

export interface IFavorite {
  id: string;
  job_id: string;
  job_title: string;
  job_description?: string;
  user_id: string;
  company_name?: string;
  company_country: string;
  position_schedule?: string;
  created_at: string;
  updated_at: string;
}

export interface ICreateFavoriteRequest {
  job_id: string;
  job_title: string;
  job_description?: string;
  company_name?: string;
  company_country: string;
  position_schedule?: string;
}
