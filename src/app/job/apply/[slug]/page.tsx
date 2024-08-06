import React from "react";
import ApplyClientPage from "./pageClient";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Session } from "next-auth";

export type ParamsProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const ApplyJobPage: React.FC<ParamsProps> = async ({
  params,
  searchParams,
}) => {
  const session: Session | null = await auth();

  // if (!session) {
  //   redirect(`/signin/?from=apply&jobId=${params?.slug}`);
  // }

  const fetchUserData = async () => {
    try {
      const response = await fetch(`/api/users/${session?.user?.name}`);
    } catch (err) {
      console.log("Errro fetching user data:", err);
    }
  };

  return (
    <div className="h-full-h-minus-nav bg-white-gray">
      <ApplyClientPage jobId={params.slug} />
    </div>
  );
};

export default ApplyJobPage;
