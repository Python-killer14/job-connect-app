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
import { Button } from "../ui/button";
import { X } from "lucide-react";

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
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
      <Button className=" -translate-x-2 px-2" onClick={handleClearFilterValue}>
        <X size={18} />
      </Button>
    </Select>
  );
};

export default FilterGroup;
