"use client";
import React, { FC } from "react";

// Icons
import { CircleDollarSign, UsersRound } from "lucide-react";

// Comps
import { Separator } from "@/components/ui/separator";
import NameLogoDisplay from "./NameLogoDisplay";
import { JobTypes } from "@/types/jobTypes/jobTypes";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const JobCard = ({ job }: { job: JobTypes }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  return (
    <article className="border-md hover:shadow transition-shadow duration-75 border rounded-lg py-4 bg-white cursor-pointer">
      <Link scroll={false} href={`?view=${job._id}`}>
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
          {/* <Button className=" bg-rose-red hover:bg-darker-red-rose flex-1">
          Apply now
        </Button> */}
        </section>
      </Link>
    </article>
  );
};

export default JobCard;
