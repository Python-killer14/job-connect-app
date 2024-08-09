import React, { useEffect } from "react";
import ApplyClientPage from "./pageClient";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Session } from "next-auth";
import getUserData from "@/lib/getUserData";

export type ParamsProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const ApplyJobPage: React.FC<ParamsProps> = async ({
  params,
  searchParams,
}) => {
  const session: Session | null = await auth();
  const userFound = await getUserData(session);

  console.log("session from apply:", userFound);

  if (!session || !session.user?.id) {
    redirect(`/signin/?from=apply&jobId=${params?.slug}`);
  }

  return (
    <div className="min-h-full-h-minus-nav bg-white-gray">
      <ApplyClientPage jobId={params.slug} userData={userFound} />
    </div>
  );
};

export default ApplyJobPage;
