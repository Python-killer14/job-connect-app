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

const PageClient = () => {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  const [jobLength, setJobLength] = useState<number>(10);
  const [jobs, setJobs] = useState<JobTypes[]>([]);

  // Get the query params and join by '&'
  let query = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");

  // Fetch the jobs here based on the filter
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`/api/jobs?${query}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });
        const jobs = await response.json();
        setJobs(jobs.data);
        console.log("Jobs fetched:", jobs.data);
      } catch (err) {
        console.log("Error fetching jobs:", err);
      }
    };

    fetchJobs();
  }, [searchParams]); // Refetch everytime the state changes

  return (
    <main className="content-full-height bg-white-gray pt-minus-nav-bar">
      <SearchBarWithFilter />
      <FilterSectionWrapper title={"Graphic Designer"} />
      <section className="content-full-height flex gap-4 items-start max-w-5xl mx-auto">
        <aside className="flex-1 space-y-5 mt-4">
          {jobs.map((job, index) => {
            return <JobCard key={index} />;
          })}
        </aside>

        <JobDetailsPreview />
      </section>

      {/* ------------------------ */}
    </main>
  );
};

export default PageClient;
