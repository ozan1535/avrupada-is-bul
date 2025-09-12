import { IGeneralComboboxItems } from "@/lib/types";

export interface IComboboxMenuProps {
  data: IGeneralComboboxItems[];
  selectedData: IGeneralComboboxItems[];
  title: string;
  placeholder: string;
  onSelect: (item: IGeneralComboboxItems) => void;
  canSelectSingle?: boolean;
}
