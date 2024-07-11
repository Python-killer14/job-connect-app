"use client";
import FilterSectionWrapper from "@/components/home/FilterSectionWrapper";
import SearchBarWithFilter from "@/components/home/SearchBarWithFilter";
import { useSession } from "next-auth/react";
import React from "react";

const PageClient = () => {
  const { data } = useSession();
  console.log("ses", data);

  return (
    <main className="content-full-height bg-white-gray pt-minus-nav-bar">
      <SearchBarWithFilter />
      {/* Filter section */}
      <FilterSectionWrapper />
      <section className="content-full-height flex max-w-5xl mx-auto">
        <aside className="border flex-1">Joblist side</aside>
        <aside className="border flex-1">Job detail side</aside>
      </section>
    </main>
  );
};

export default PageClient;
