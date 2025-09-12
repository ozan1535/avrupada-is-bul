"use client";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "../ui/checkbox";
import { IComboboxMenuProps } from "./ComboboxMenu.types";

function ComboboxMenu({
  data,
  selectedData,
  title,
  placeholder,
  onSelect,
  canSelectSingle = true,
}: IComboboxMenuProps) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`${
            canSelectSingle ? "sm:w-[175px]" : "w-full"
          } justify-between`}
        >
          {selectedData.length
            ? selectedData.length > 1
              ? `${selectedData[selectedData.length - 1].name} + ${
                  selectedData.length - 1
                }`
              : selectedData[0].name
            : title}

          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={`${canSelectSingle ? "w-[200px]" : "w-[240px]"} p-0`}
      >
        <Command>
          <CommandInput placeholder={placeholder} className="h-9" />
          <CommandList>
            <CommandEmpty>Hiçbir sey bulunamadı.</CommandEmpty>
            <CommandGroup>
              {data.map((item) => (
                <CommandItem
                  key={item.id}
                  value={item.name}
                  onSelect={(currentValue) => {
                    onSelect(item);
                    if (canSelectSingle) {
                      setOpen(false);
                    }
                  }}
                >
                  {!canSelectSingle && (
                    <Checkbox
                      id={String(item.id)}
                      className="data-[state=checked]:bg-primary-color data-[state=checked]:border data-[state=unchecked]:border"
                      checked={selectedData.some(
                        (selectedItem) => selectedItem.id === item.id
                      )}
                    />
                  )}
                  {item.name}
                  {canSelectSingle && (
                    <Check
                      className={cn(
                        "ml-auto",
                        selectedData[0]?.name === item.name
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default ComboboxMenu;
