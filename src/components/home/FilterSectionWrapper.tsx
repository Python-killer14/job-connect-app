import FilterGroup from "./FilterGroup";

// Static filtering option datas
import {
  applicantsCount,
  experienceLevelOptions,
  jobLocationOptions,
  jobTypeOptions,
  payRangeOptions,
} from "@/app/staticDats/filterOptionsData";

const filterOptionsArray = [
  { options: jobTypeOptions, headerTxt: "Job Type", queryKey: "jobType" },
  {
    options: jobLocationOptions,
    headerTxt: "Job Location",
    queryKey: "location",
  },
  {
    options: applicantsCount,
    headerTxt: "Applicants",
    queryKey: "applicantsCount",
  },
  { options: payRangeOptions, headerTxt: "Pay", queryKey: "salary" },
  {
    options: experienceLevelOptions,
    headerTxt: "Experience Level",
    queryKey: "experienceLevel",
  },
];

const FilterSectionWrapper = () => {
  return (
    <section className="flex flex-wrap items-center gap-4 max-w-4xl mx-auto">
      {filterOptionsArray.map((filt, indx) => {
        return (
          <FilterGroup
            key={indx}
            options={filt.options || ""}
            headerTxt={filt.headerTxt || ""}
            queryKey={filt.queryKey || ""}
          />
        );
      })}
      {/* <FilterGroup
        options={jobLocationOptions}
        headerTxt={"Job Location"}
        queryKey={"location"}
      />
      <FilterGroup
        options={applicantsCount}
        headerTxt={"Applicants"}
        queryKey={"applicantsCount"}
      /> */}
    </section>
  );
};

export default FilterSectionWrapper;
