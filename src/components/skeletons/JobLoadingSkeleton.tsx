import React from "react";
import JobCardSkeleton from "./JobCardSkeleton";
import JobDetailsSkeleton from "./JobDetailsSkeleton";

const JobLoadingSkeleton = () => {
  return (
    <>
      <div className="flex-1 space-y-5 mt-4">
        {Array.from({ length: 4 }).map((_, indx) => (
          <JobCardSkeleton key={indx} />
        ))}
      </div>
      {/* <aside className="content-full-height flex-1 sticky rounded-lg top-[64px] py-4">
        <JobDetailsSkeleton />
      </aside> */}
    </>
  );
};

export default JobLoadingSkeleton;
