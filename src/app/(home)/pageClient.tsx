"use client";
import { useEffect, useState } from "react";

// Comps
import FilterSectionWrapper from "@/components/home/FilterSectionWrapper";
import JobCard from "@/components/home/JobCard";
import JobDetailsPreview from "@/components/home/JobDetailsPreview";
import SearchBarWithFilter from "@/components/home/SearchBarWithFilter";
import JobLoadingSkeleton from "@/components/skeletons/JobLoadingSkeleton";

// Auth libs
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { JobTypes } from "@/types/jobTypes/jobTypes";
import { updateQuery } from "@/utils/client/utils";
import { useRouter } from "next/navigation";

const PageClient = () => {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Convert the entries to object
  const params = Object.fromEntries(searchParams.entries());

  const [jobsLength, setJobsLength] = useState<number>(10);
  const [jobs, setJobs] = useState<JobTypes[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  // Get the query params and join by '&' (use the object keys to map)
  let query = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");

  // Fetch the jobs here based on the filter
  useEffect(() => {
    // Add the the current jobs id as the view query value
    updateQuery({ newParams: { view: jobs[0]?._id }, router, searchParams });

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
      } catch (err) {
        console.log("Error fetching jobs:", err);
      } finally {
        setIsFetching(false);
      }
    };

    fetchJobs();
  }, [searchParams, query, jobsLength]); // Refetch everytime the state changes

  return (
    <main className=" bg-white-gray pt-minus-nav-bar">
      <SearchBarWithFilter />
      <FilterSectionWrapper />
      <section className=" flex gap-4 items-start max-w-5xl mx-auto">
        {isFetching ? (
          <JobLoadingSkeleton />
        ) : (
          <>
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

            {/* Job details side */}
            {jobs && jobs.length > 0 && (
              <JobDetailsPreview isFetching={isFetching} currentJob={jobs[0]} />
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default PageClient;
