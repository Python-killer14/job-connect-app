import FilterGroup from "./FilterGroup";

// Static filtering option datas
import {
  applicantsCount,
  jobLocationOptions,
  jobTypeOptions,
} from "@/app/staticDats/filterOptionsData";

const FilterSectionWrapper = () => {
  return (
    <section className=" flex items-center gap-4 max-w-4xl mx-auto">
      <FilterGroup
        options={jobTypeOptions}
        headerTxt={"Job Type"}
        queryKey={"jobType"}
      />
      <FilterGroup
        options={jobLocationOptions}
        headerTxt={"Job Location"}
        queryKey={"location"}
      />
      <FilterGroup
        options={applicantsCount}
        headerTxt={"Applicants"}
        queryKey={"applicantsCount"}
      />
    </section>
  );
};

export default FilterSectionWrapper;
