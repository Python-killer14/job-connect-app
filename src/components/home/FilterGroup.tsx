import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { JobOptionTypes } from "@/app/staticDats/filterOptionsData";

// Type def
export interface FilterGroupProps {
  options: JobOptionTypes[];
  headerTxt: string;
  queryKey: string;
  updateQuery: (newParams: { [key: string]: string }) => void;
}

const FilterGroup = ({
  options,
  updateQuery,
  headerTxt,
  queryKey,
}: FilterGroupProps) => {
  const [value, setValue] = useState<string>("");

  const onValueChange = (newValue: string) => {
    setValue(newValue);
    updateQuery({ [queryKey]: newValue });
  };

  const handleClearFilterValue = () => {
    // Clear value
    setValue("");
    // Remove query param
    updateQuery({ [queryKey]: "" });
  };

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
