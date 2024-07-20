"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import FilterGroup from "./FilterGroup";

// Static datas
import {
  applicantsCount,
  jobLocationOptions,
  jobTypeOptions,
} from "@/app/staticDats/filterOptionsData";

const FilterSectionWrapper = ({ title }: { title: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Handle updating query params
  const updateQuery = (newParams: { [key: string]: string }) => {
    // Create a new URLSearchParams object
    const params = new URLSearchParams(searchParams.toString());

    // Extract existing params
    Object.keys(newParams).forEach((key) => {
      params.set(key, newParams[key]);
    });

    console.log("To string", params.toString());

    // Convert the URLSearchParams object back to a string
    const queryString = params.toString();
    router.push(`?${queryString}`);
  };

  return (
    <section className=" flex items-center gap-4 max-w-4xl mx-auto">
      <FilterGroup
        options={jobTypeOptions}
        updateQuery={updateQuery}
        headerTxt={"Job Type"}
        queryKey={"jobType"}
      />
      <FilterGroup
        options={jobLocationOptions}
        updateQuery={updateQuery}
        headerTxt={"Job Location"}
        queryKey={"location"}
      />
      <FilterGroup
        options={applicantsCount}
        updateQuery={updateQuery}
        headerTxt={"Applicants"}
        queryKey={"applicantsCount"}
      />
    </section>
  );
};

export default FilterSectionWrapper;
