"use client";
import { useSession } from "next-auth/react";
import React from "react";

const PageClient = () => {
  const { data } = useSession();
  console.log("ses", data);

  return (
    <main>
      <div>
        <aside>Joblist side</aside>
        <aside>Job detail side</aside>
      </div>
    </main>
  );
};

export default PageClient;
