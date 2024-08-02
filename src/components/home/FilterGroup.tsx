"use client";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { JobOptionTypes } from "@/app/staticDats/filterOptionsData";
import { updateQuery } from "@/utils/client/utils";
import { useRouter, useSearchParams } from "next/navigation";

// Type def
export interface FilterGroupProps {
  options: JobOptionTypes[];
  headerTxt: string;
  queryKey: string;
  // updateQuery: (newParams: { [key: string]: string }) => void;
}

const FilterGroup = ({ options, headerTxt, queryKey }: FilterGroupProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState<string>("");

  const onValueChange = (newValue: string) => {
    setValue(newValue);
    updateQuery({ newParams: { [queryKey]: newValue }, router, searchParams });
  };

  // Clear the filter value
  useEffect(() => {
    if (!searchParams.get(queryKey)) {
      setValue("");
    }
  }, [searchParams]);

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="max-w-[160px]">
        <SelectValue placeholder={headerTxt} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="any">Any</SelectItem>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterGroup;
