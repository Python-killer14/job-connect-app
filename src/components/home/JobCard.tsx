"use client";
import React, { FC } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Icons
import { CircleDollarSign, UsersRound } from "lucide-react";

// Comps
import { Separator } from "@/components/ui/separator";
import NameLogoDisplay from "./NameLogoDisplay";
import { JobTypes } from "@/types/jobTypes/jobTypes";
import { updateQuery } from "@/utils/client/utils";
import useScreenWidth from "@/hooks/useScreenWidth";

const JobCard = ({ job }: { job: JobTypes }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const screenWidth = useScreenWidth();
  let currentJobId = searchParams.get("view");

  const handleOnCLickJobCard = () => {
    screenWidth > 896
      ? updateQuery({ newParams: { view: job._id }, router, searchParams })
      : router.push(`/job/v/${job._id}/?view=${job._id}`);
  };

  return (
    <article
      onClick={handleOnCLickJobCard}
      className={cn(
        "border-md hover:shadow transition-shadow duration-75 border rounded-lg py-4 bg-white cursor-pointer max-w-2xl mx-auto",
        currentJobId === job._id && screenWidth > 896 ? "border-rose-red" : ""
      )}
    >
      {/* Header section */}
      <NameLogoDisplay isJobCard={true} job={job} />

      {/* Job description section */}
      <section>
        <p className=" text-muted-foreground px-4 text-sm">
          {job?.description}
        </p>
      </section>

      {/* Tags section */}
      <section className=" flex items-center gap-3 flex-wrap pt-4 px-4">
        {job &&
          job.tags &&
          job.tags?.length > 0 &&
          job.tags.slice(0, 5).map((tag, indx) => {
            return (
              <span
                key={indx}
                className=" text-xs font-medium bg-light-blue-2 rounded-md px-3 py-2  "
              >
                {tag}
              </span>
            );
          })}
      </section>

      <div className=" px-4">
        <Separator className="mt-4" />
      </div>

      {/* Applicants and salary section */}
      <section className="flex items-center justify-center gap-5 mt-4 px-4">
        {/*  */}
        <div className=" flex flex-1 justify-center items-center gap-2 text-sm">
          <CircleDollarSign className=" text-ocean-blue w-5 h-5" />
          <p className=" font-medium text-sm">
            {`$ ${job?.salary || ""}`}
            <span className=" text-xs text-muted-foreground">/month</span>
          </p>
        </div>

        {/*  */}
        <div className="flex justify-center flex-1 items-center gap-2">
          <UsersRound className=" text-ocean-blue w-5 h-5" />
          <span className=" text-base font-medium flex items-center gap-1 text-nowrap">
            {`${job?.applicantsCount}`}{" "}
            <span className=" text-xs text-muted-foreground">
              people applied
            </span>
          </span>
        </div>
      </section>
      {/* </Link> */}
    </article>
  );
};

export default JobCard;
