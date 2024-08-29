"use client";
import { handleSubmitApplication } from "@/utils/client/submitApplication";
import { Button } from "@mui/joy";
import React from "react";

type SubmitApplicationBtnProps = {
  label: string;
  jobId: string;
  userId: string;
};

const SubmitApplicationBtn = ({
  label,
  jobId,
  userId,
}: SubmitApplicationBtnProps) => {
  return (
    <Button
      onClick={() => handleSubmitApplication(jobId, userId)}
      className=" bg-rose-red hover:bg-darker-red-rose"
    >
      {label}
    </Button>
  );
};

export default SubmitApplicationBtn;
