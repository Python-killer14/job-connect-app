"use client";
import FilterSectionWrapper from "@/components/home/FilterSectionWrapper";
import SearchBarWithFilter from "@/components/home/SearchBarWithFilter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CircleDollarSign, UsersRound } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
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
        <aside className="border flex-1">
          <article className=" border-md rounded-lg py-4 shadow bg-white">
            {/* Header section */}
            <section className=" flex gap-4 items-center mb-4 px-4">
              <div className="">
                <Image
                  src="/images/google-logo.png"
                  height={50}
                  width={50}
                  alt="company-logo"
                  className="w-10 h-10 bg-hover-gray p-1 shadow-sm rounded-md "
                />
              </div>
              <div>
                <h2>Junior UI/UX designer</h2>
                <p className="text-xs text-muted-foreground ">
                  Slack Technologies, LLC
                </p>
              </div>
              <div className=" ml-auto">
                <Button className=" text-ocean-blue bg-light-blue-2 hover:bg-[#c7e5ef] ">
                  Save job
                </Button>
              </div>
            </section>

            {/* Job description section */}
            <section>
              <p className=" text-muted-foreground px-4 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nemo rerum ex soluta, maxime aut cum asperiores saepe? Mollitia
                praesentium dolorum quaerat amet accusantium veniam ipsam
                sapiente explicabo quasi aliquam.
              </p>
            </section>

            {/* Tags section */}
            <section className=" flex items-center gap-3 flex-wrap pt-4 px-4">
              <span className=" text-xs font-medium bg-light-blue-2 rounded-md px-3 py-2  ">
                Fulltime
              </span>
              <span className=" text-xs font-medium bg-light-blue-2  rounded-md px-3 py-2  ">
                Design
              </span>
              <span className=" text-xs font-medium bg-light-blue-2  rounded-md px-3 py-2  ">
                Entry level
              </span>
              <span className=" text-xs font-medium bg-light-blue-2  rounded-md px-3 py-2  ">
                Remote
              </span>
            </section>

            <div className=" px-4">
              <Separator className="mt-4" />
            </div>

            {/* Applicants and salary section */}
            <section className=" flex items-center gap-5 mt-4 px-4">
              <div className=" flex flex-1 items-center gap-2 text-sm">
                <CircleDollarSign className=" text-ocean-blue w-5 h-5" />
                <p className=" font-medium text-base">
                  $12k-14k{" "}
                  <span className=" text-xs text-muted-foreground">/month</span>
                </p>
              </div>
              <div className="flex flex-1 items-center gap-2">
                <UsersRound className=" text-ocean-blue w-5 h-5" />
                <span className=" text-base font-medium flex items-center gap-1 text-nowrap">
                  55{" "}
                  <span className=" text-xs text-muted-foreground">
                    people applied
                  </span>
                </span>
              </div>
              <Button className=" flex-1">Apply now</Button>
            </section>
          </article>
        </aside>
        <aside className="border flex-1">Job detail side</aside>
      </section>
    </main>
  );
};

export default PageClient;
