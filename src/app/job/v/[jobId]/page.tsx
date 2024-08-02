import React from "react";
import JobViewClient from "./pageClient";

interface Props {
  params: { jobId: string };
}

const JobView = ({ params }: Props) => {
  return (
    <div className="">
      <JobViewClient />
    </div>
  );
};

export default JobView;
