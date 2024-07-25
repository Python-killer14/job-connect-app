"use client";
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import FilterGroup from "./FilterGroup";

// Static filtering option datas
import {
  applicantsCount,
  jobLocationOptions,
  jobTypeOptions,
} from "@/app/staticDats/filterOptionsData";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { updateQuery } from "@/utils/client/utils";

const FilterSectionWrapper = () => {
  const router: AppRouterInstance = useRouter();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  // const updatedQuery = updateQuery({newParams, });

  // const updateQuery = (newParams: { [key: string]: string | null }) => {
  //   // Create a new URLSearchParams object
  //   const params = new URLSearchParams(searchParams.toString());

  //   // Extract existing params
  //   Object.keys(newParams).forEach((key) => {
  //     if (
  //       newParams[key] === null ||
  //       newParams[key] === "" ||
  //       newParams[key] === "any"
  //     ) {
  //       params.delete(key); // Remove the parameter if its value is null, any or empty string
  //     } else {
  //       params.set(key, newParams[key] as string); // Update or add the parameter
  //     }
  //   });

  //   // Convert the URLSearchParams object back to a string
  //   const queryString = params.toString();
  //   router.push(`?${queryString}`);
  // };

  return (
    <section className=" flex items-center gap-4 max-w-4xl mx-auto">
      <FilterGroup
        options={jobTypeOptions}
        // updateQuery={updateQuery}
        headerTxt={"Job Type"}
        queryKey={"jobType"}
      />
      <FilterGroup
        options={jobLocationOptions}
        // updateQuery={updateQuery}
        headerTxt={"Job Location"}
        queryKey={"location"}
      />
      <FilterGroup
        options={applicantsCount}
        // updateQuery={updateQuery}
        headerTxt={"Applicants"}
        queryKey={"applicantsCount"}
      />
    </section>
  );
};

export default FilterSectionWrapper;
