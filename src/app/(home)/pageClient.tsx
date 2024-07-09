"use client";
import { useSession } from "next-auth/react";
import React from "react";

const PageClient = () => {
  const { data } = useSession();
  console.log("ses", data);

  return <div>PageClient</div>;
};

export default PageClient;
