"use client";
import { useEffect, useState } from "react";

// Comps
import FilterSectionWrapper from "@/components/home/FilterSectionWrapper";
import JobCard from "@/components/home/JobCard";
import JobDetailsPreview from "@/components/home/JobDetailsPreview";
import SearchBarWithFilter from "@/components/home/SearchBarWithFilter";

// Auth libs
import { useSession } from "next-auth/react";

const PageClient = () => {
  const { data } = useSession();
  console.log("data:", data);

  const [jobLength, setJobLength] = useState<number>(10);

  // Fetch the jobs here based on the filter
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`/api/jobs/`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });

        const data = await response.json();

        console.log("Jobs fetched:", data);
      } catch (err) {
        console.log("Error fetching jobs:", err);
      }
    };

    fetchJobs();
  }, []);
  // Refetch everytime the state changes

  return (
    <main className="content-full-height bg-white-gray pt-minus-nav-bar">
      <SearchBarWithFilter />
      <FilterSectionWrapper />
      <section className="content-full-height flex gap-4 items-start max-w-5xl mx-auto">
        <aside className="flex-1 space-y-5 mt-4">
          {
            // Create a list of 10 job cards (simulation)
            Array.from({ length: jobLength }).map((_, index) => {
              return <JobCard key={index} />;
            })
          }
        </aside>

        {/*  */}
        <JobDetailsPreview />
      </section>

      {/* ------------------------ */}
    </main>
  );
};

export default PageClient;
