import React from "react";
import { Skeleton } from "../ui/skeleton";

const JobCardSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="space-y-2 border-md hover:shadow transition-shadow duration-75  border rounded-lg py-4  bg-white cursor-pointer">
        {/*  */}
        <section className=" flex px-4 gap-4">
          <Skeleton className="h-12 w-12" />
          <div className=" flex-1 max-w-64 space-y-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
          <Skeleton className="h-8 w-20 ml-auto" />
        </section>

        {/*  */}
        <section className=" space-y-1 pt-4 px-4">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-56" />
        </section>
        <section className=" flex items-center gap-3 flex-wrap pt-3 px-4">
          <Skeleton className="w-24 h-8 rounded-md " />
          <Skeleton className="w-24 h-8 rounded-md " />
          <Skeleton className="w-24 h-8 rounded-md " />
        </section>

        {/*  */}
        <section className=" flex items-center justify-center gap-5 pt-3 px-4">
          <Skeleton className="flex-1 h-8 rounded-md " />
          <Skeleton className=" flex-1 h-8 rounded-md " />
        </section>
      </div>
    </div>
  );
};

export default JobCardSkeleton;
