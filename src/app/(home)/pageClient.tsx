"use client";
import { useEffect, useState } from "react";

// Comps
import FilterSectionWrapper from "@/components/home/FilterSectionWrapper";
import JobCard from "@/components/home/JobCard";
import JobDetailsPreview from "@/components/home/JobDetailsPreview";
import SearchBarWithFilter from "@/components/home/SearchBarWithFilter";
import JobLoadingSkeleton from "@/components/skeletons/JobLoadingSkeleton";

// Auth libs
import { useSearchParams } from "next/navigation";
import { JobTypes } from "@/types/jobTypes/jobTypes";
import { updateQuery } from "@/utils/client/utils";
import { useRouter } from "next/navigation";

const PageClient = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Convert the entries to object
  const params = Object.fromEntries(searchParams.entries());

  const [jobsLength, setJobsLength] = useState<number>(10);
  const [jobs, setJobs] = useState<JobTypes[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  // Filter out the 'view' parameter from the query
  // to prevent refetching the job list when a jobcard is clicked
  let query = Object.keys(params)
    .filter((key) => key !== "view")
    .map((key) => `${key}=${params[key]}`)
    .join("&");

  // Fetch jobs when the search parameters change (excluding the 'view' parameter)
  useEffect(() => {
    // Fetch the jobs
    const fetchJobs = async () => {
      setIsFetching(true);
      try {
        const response = await fetch(`/api/jobs?${query}&limit=${jobsLength}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });
        const jobs = await response.json();

        if (!response.ok) {
          throw new Error(jobs.message || "Something went wrong fetching jobs");
        }

        setJobs(jobs.data);
        //If no view query, add the the first jobs id as initial job deatil preview (set the view query value)
        if (!searchParams.get("view") && jobs.data.length > 0) {
          updateQuery({
            newParams: { view: jobs.data[0]?._id },
            router,
            searchParams,
          });
        }
      } catch (err) {
        console.log("Error fetching jobs:", err);
      } finally {
        setIsFetching(false);
      }
    };

    fetchJobs();
  }, [query, jobsLength]);

  // Ensure the 'view' query parameter is always present when navigating to the homepage
  useEffect(() => {
    if (!searchParams.get("view") && jobs.length > 0) {
      updateQuery({
        newParams: { view: jobs[0]?._id },
        router,
        searchParams,
      });
    }
  }, [searchParams, jobs]);

  return (
    <main className=" bg-white-gray pt-minus-nav-bar">
      <SearchBarWithFilter />
      <FilterSectionWrapper />
      <section className="flex gap-4 px-4 items-start md-plus:max-w-5xl mx-auto lg:px-4">
        {isFetching ? (
          <JobLoadingSkeleton />
        ) : (
          <aside className="flex-1 space-y-5 mt-4 pb-9">
            {jobs && jobs.length > 0 ? (
              jobs.map((job) => <JobCard key={job._id} job={job} />)
            ) : (
              <div className="pt-32 flex flex-col justify-center items-center text-center">
                <p>No matching found for your search</p>
                <p>Try minizing your filter limit</p>
              </div>
            )}
          </aside>
        )}

        {/* Job details side */}
        <div className="hidden sticky top-[64px] flex-1 md-plus:block">
          <JobDetailsPreview />
        </div>
      </section>
    </main>
  );
};

export default PageClient;
