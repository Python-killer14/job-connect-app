"use client";
import FilterSectionWrapper from "@/components/home/FilterSectionWrapper";
import JobCard from "@/components/home/JobCard";
import SearchBarWithFilter from "@/components/home/SearchBarWithFilter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CircleDollarSign, UsersRound } from "lucide-react";
import { useSession } from "next-auth/react";
import React from "react";

const PageClient = () => {
  const { data } = useSession();

  // Fetch the jobs here based on the filter
  // Refetch everytime the state changes

  return (
    <main className="content-full-height bg-white-gray pt-minus-nav-bar">
      <SearchBarWithFilter />
      {/* Filter section */}
      <FilterSectionWrapper />
      <section className="content-full-height flex max-w-5xl mx-auto">
        <aside className="flex-1 space-y-5">
          {
            // Create a list of 10 job cards (simulation)
            Array.from({ length: 10 }).map((_, index) => {
              return <JobCard key={index} />;
            })
          }
        </aside>
        <aside className="border flex-1">Job detail side</aside>
      </section>
    </main>
  );
};

export default PageClient;
