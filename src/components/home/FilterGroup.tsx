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
interface FilterGroupProps {
  options: JobOptionTypes[];
  headerTxt: string;
  updateQuery: (newParams: { [key: string]: string }) => void;
}

const FilterGroup = ({ options, updateQuery, headerTxt }: FilterGroupProps) => {
  const [value, setValue] = useState<string>("");

  const onValueChange = (newValue: string) => {
    setValue(newValue);
    updateQuery({ [headerTxt]: newValue });
  };

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="max-w-[110px]">
        <SelectValue placeholder={headerTxt} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
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
