import React from "react";

// Comps
import JobDetailsPreview from "@/components/home/JobDetailsPreview";

const JobViewClient = () => {
  return (
    <div className="pt-minus-nav-bar">
      <div className=" max-w-">
        <JobDetailsPreview />
      </div>
    </div>
  );
};

export default JobViewClient;
