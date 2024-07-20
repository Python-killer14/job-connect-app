"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import FilterGroup from "./FilterGroup";

// Static datas
import { jobTypeOptions } from "@/app/staticDats/filterOptionsData";

const FilterSectionWrapper = ({ title }: { title: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Handle updating query params
  const updateQuery = (newParams: { [key: string]: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.keys(newParams).forEach((key) => {
      params.set(key, newParams[key]);
    });

    const queryString = params.toString();
    router.push(`?${queryString}`);
  };

  return (
    <section className="max-w-4xl mx-auto">
      <FilterGroup
        options={jobTypeOptions}
        updateQuery={updateQuery}
        headerTxt={"Job-Type"}
      />
      {/* <FilterGroup options={jobLocationOptions} updateQuery={updateQuery} /> */}
    </section>
  );
};

export default FilterSectionWrapper;
