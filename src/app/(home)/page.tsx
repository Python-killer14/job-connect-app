"use client"
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <main className="dark dark:bg-gun-metal">
      <MaxWidthWrapper>
      <h1 className="text-muted-foreground bg-light-blue">EthioJobsConnect</h1>
      <h1 className=" dark:text-white dark:bg-gun-metal">EthioJobsConnect</h1>
      <input type="text" placeholder="Search anything" className=" outline-none border-none px-2 py-4 w-96" />
      </MaxWidthWrapper>
    </main>
  );
}
