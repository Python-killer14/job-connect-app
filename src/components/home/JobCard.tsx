import React from "react";

// Icons
import { CircleDollarSign, UsersRound } from "lucide-react";

// Comps
import { Separator } from "@/components/ui/separator";
import NameLogoDisplay from "./NameLogoDisplay";

const JobCard: React.FC = () => {
  return (
    <article className=" border-md hover:shadow transition-shadow duration-75  border rounded-lg py-4  bg-white cursor-pointer">
      {/* Header section */}
      <NameLogoDisplay isJobCard={true} />

      {/* Job description section */}
      <section>
        <p className=" text-muted-foreground px-4 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo
          rerum ex soluta, maxime aut cum asperiores saepe? Mollitia praesentium
          dolorum quaerat amet accusantium veniam ipsam sapiente explicabo quasi
          aliquam.
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
      <section className=" flex items-center justify-center gap-5 mt-4 px-4">
        {/*  */}
        <div className=" flex flex-1 justify-center items-center gap-2 text-sm">
          <CircleDollarSign className=" text-ocean-blue w-5 h-5" />
          <p className=" font-medium text-base">
            $12k-14k{" "}
            <span className=" text-xs text-muted-foreground">/month</span>
          </p>
        </div>

        {/*  */}
        <div className="flex justify-center flex-1 items-center gap-2">
          <UsersRound className=" text-ocean-blue w-5 h-5" />
          <span className=" text-base font-medium flex items-center gap-1 text-nowrap">
            55{" "}
            <span className=" text-xs text-muted-foreground">
              people applied
            </span>
          </span>
        </div>
        {/* <Button className=" bg-rose-red hover:bg-darker-red-rose flex-1">
          Apply now
        </Button> */}
      </section>
    </article>
  );
};

export default JobCard;
