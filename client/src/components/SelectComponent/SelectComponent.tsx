"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function SelectComponent({
  data,
  onValueChange,
}: {
  data: { id: number; text: string }[];
  onValueChange: (item: string) => void;
}) {
  return (
    <div>
      <label className="font-medium">Vize Türü Seçin:</label>
      <Select onValueChange={onValueChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Seçim Yap" />
        </SelectTrigger>
        <SelectContent className="max-w-screen">
          <SelectGroup>
            {data.map((item) => (
              <SelectItem value={`${item.id}`} key={item.id}>
                {item.text}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectComponent;
