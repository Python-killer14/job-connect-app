"use client";
import { useEffect, useState } from "react";

// Comps
import FilterSectionWrapper from "@/components/home/FilterSectionWrapper";
import JobCard from "@/components/home/JobCard";
import JobDetailsPreview from "@/components/home/JobDetailsPreview";
import SearchBarWithFilter from "@/components/home/SearchBarWithFilter";

// Auth libs
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { JobTypes } from "@/types/jobTypes/jobTypes";
import JobCardSkeleton from "@/components/skeletons/JobCardSkeleton";

const PageClient = () => {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  const [jobLength, setJobLength] = useState<number>(10);
  const [jobs, setJobs] = useState<JobTypes[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  // Get the query params and join by '&'
  let query = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");

  // Fetch the jobs here based on the filter
  useEffect(() => {
    const fetchJobs = async () => {
      setIsFetching(true);
      try {
        const response = await fetch(`/api/jobs?${query}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });
        const jobs = await response.json();
        setJobs(jobs.data);
      } catch (err) {
        console.log("Error fetching jobs:", err);
      } finally {
        setTimeout(() => {
          setIsFetching(false);
        }, 1000);
      }
    };

    fetchJobs();
  }, [searchParams, query]); // Refetch everytime the state changes

  return (
    <main className="content-full-height bg-white-gray pt-minus-nav-bar">
      <SearchBarWithFilter />
      <FilterSectionWrapper />
      <section className="content-full-height flex gap-4 items-start max-w-5xl mx-auto">
        <aside className="flex-1 space-y-5 mt-4">
          {!isFetching ? (
            jobs && jobs?.length > 0 ? (
              jobs.map((job, index) => {
                return <JobCard key={job._id} job={job} />;
              })
            ) : (
              <div className="bg-red50 pt-32 h-full flex flex-col justify-center items-center text-center">
                <p>No matching found for your search</p>
                <p>Try minizing your filter limit</p>
              </div>
            )
          ) : (
            <div className="space-y-5">
              {Array.from({ length: 4 }).map((_, indx) => {
                return <JobCardSkeleton key={indx} />;
              })}
            </div>
          )}
        </aside>

        <JobDetailsPreview />
      </section>
    </main>
  );
};

export default PageClient;
