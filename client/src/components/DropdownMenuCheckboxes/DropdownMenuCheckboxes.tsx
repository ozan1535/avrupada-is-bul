"use client";
import { useState } from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function DropdownMenuCheckboxes({
  data,
  title,
  selectedData,
  setSelectedData,
}) {
  const handleCheckedChange = (itemId) => {
    setSelectedData((prevSelectedData) => {
      const isSelected = prevSelectedData.some((item) => item.id === itemId);

      if (isSelected) {
        // Remove item from selectedData if already selected
        return prevSelectedData.filter((item) => item.id !== itemId);
      } else {
        // Add item to selectedData if not selected
        const selectedItem = data.find((item) => item.id === itemId);
        return [...prevSelectedData, selectedItem];
      }
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer w-40">
        <Button variant="secondary">
          {selectedData.length > 0 ? (
            selectedData.length === 1 ? (
              selectedData[0].name
            ) : (
              <>
                <span className="bg-blue-500 text-white rounded-full px-3">
                  {selectedData.length}
                </span>
                {selectedData[0].name}
                {"..."}
              </>
            )
          ) : (
            title
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {data.map((item) => (
          <DropdownMenuCheckboxItem
            className="cursor-pointer"
            key={item.id}
            checked={selectedData?.some((a) => a.id === item.id)}
            onCheckedChange={() => handleCheckedChange(item.id)}
            onSelect={(e) => e.preventDefault()}
          >
            {item.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
