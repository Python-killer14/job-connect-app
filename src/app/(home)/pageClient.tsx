"use client";
import { useEffect, useRef, useState } from "react";

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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setJobCounter } from "@/redux/slices/jobCounterSlice";
import { JOBS_PER_PAGES, PAGINATION_PAGE } from "@/utils/constants";

const PageClient = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  // Convert the entries to object
  const params = Object.fromEntries(searchParams.entries());

  const [jobs, setJobs] = useState<JobTypes[]>([]);
  const [limit, setLimit] = useState<number>(JOBS_PER_PAGES);
  const [page, setPage] = useState<number>(PAGINATION_PAGE);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const scrollTrigger = useRef(null);

  // Track job ids using hash map to avoid duplicate job post
  // this is possible because, the setJobs state updates by spreading exisiting jobs
  let jobsIdMap = new Map<string, boolean>();

  // Filter out the 'view' parameter from the query
  // to prevent refetching the job list when a jobcard is clicked
  let query = Object.keys(params)
    .filter((key) => key !== "view")
    .map((key) => `${key}=${params[key]}`)
    .join("&");

  // Fetch jobs function
  const fetchJobs = async () => {
    setIsFetching(true);
    try {
      const response = await fetch(
        `/api/jobs?${query}&limit=${limit}&page=${page}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const jobsFound = await response.json();
      console.log("Jobs fetched:", jobsFound.data);

      if (!response.ok) {
        throw new Error(
          jobsFound.message || "Something went wrong fetching jobs"
        );
      }

      // Set the jobs
      if (page === 1) {
        // If it's the first page, replace the jobs (new search)
        setJobs(jobsFound.data);
        // Update job counter in the global state
        dispatch(setJobCounter(jobsFound.data.length));
      } else {
        // If it's not the first page, append the new jobs (pagination)
        setJobs((prevJobs) => {
          const updatedJobs = [...prevJobs, ...jobsFound.data];
          // Update job counter in the global state
          dispatch(setJobCounter(updatedJobs.length));
          return updatedJobs;
        });
      }

      if (jobsFound.data.length < limit) {
        // Set hasMore to false when no more jobs to load
        setHasMore(false);
      }

      // Automatically set the view parameter to the first job ID if no "view" query exists
      if (!searchParams.get("view") && jobsFound.data.length > 0) {
        updateQuery({
          newParams: { view: jobsFound.data[0]?._id },
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

  // Fetch jobs when the search parameters change (excluding the 'view' parameter)
  useEffect(() => {
    // Fetch the jobs
    fetchJobs();
  }, [query, page]);

  // Handle scroll events and paginate the jobs
  useEffect(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        console.log("Page incremented");
        if (entries[0].isIntersecting && hasMore && !isFetching) {
          setTimeout(() => {
            setPage((prevPage) => prevPage + 1);
          }, 1500);
        }
      },
      { threshold: 1 }
    );

    if (scrollTrigger.current) {
      observer.observe(scrollTrigger.current);
    }

    // Cleanup
    return () => {
      if (scrollTrigger.current) {
        observer.unobserve(scrollTrigger.current);
      }
    };
  }, [hasMore, isFetching]);

  // Ensure the 'view' query parameter is automatically gets added when navigating to the homepage
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
    <main className=" bg-white-gray">
      <SearchBarWithFilter />
      <FilterSectionWrapper />
      <section className="flex gap-4 px-4 items-start md-plus:max-w-5xl mx-auto lg:px-4 pb-10">
        {isFetching ? (
          <JobLoadingSkeleton />
        ) : (
          <aside className="flex-1 space-y-5 mt-4 pb-9">
            {jobs && jobs.length > 0 ? (
              <div className="space-y-5">
                {jobs.map((job) => {
                  // Check if the job is already in the jobsIdMap
                  if (!jobsIdMap.has(job._id)) {
                    // Add the job to the map
                    jobsIdMap.set(job._id, true);
                    // Render the job card
                    return <JobCard key={job._id} job={job} />;
                  }

                  return null;
                })}

                <div className="...">
                  {hasMore ? (
                    // <div ref={scrollTrigger}>Loading...</div>
                    <span ref={scrollTrigger} className="loader-spin"></span>
                  ) : (
                    <p className="...">No more posts to load</p>
                  )}
                </div>
              </div>
            ) : (
              <div className=" pt-10 md-plus:pt-18 flex flex-col justify-center items-center text-center">
                <img
                  className="w-60"
                  src="/images/search-result-not-found.png"
                  alt=""
                />
                <p className=" font-medium text-lg text-gray-400">
                  No matching found for your search
                </p>
                <p className="  text-gray-400">Try different filter criteria</p>
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
