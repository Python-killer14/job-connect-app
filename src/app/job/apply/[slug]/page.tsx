import React, { useEffect } from "react";
import ApplyClientPage from "./pageClient";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Session } from "next-auth";
import getUserData from "@/lib/getUserData";
import { Metadata } from "next";

export type ParamsProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = async () => {
  const session = await auth();

  if (!session) return;
  return {
    title: `${session.user?.firstName} | job application`,
    description: `${session.user?.firstName} applying for a job`,
  };
};

const ApplyJobPage: React.FC<ParamsProps> = async ({
  params,
  searchParams,
}) => {
  const session: Session | null = await auth();
  const userFound = await getUserData(session);

  if (!session || !session.user?.id) {
    redirect(`/signin/?from=apply&jobId=${params?.slug}`);
  }

  return (
    <div className="min-h-full-minus-nav ">
      <ApplyClientPage userData={userFound} />
    </div>
  );
};

export default ApplyJobPage;
