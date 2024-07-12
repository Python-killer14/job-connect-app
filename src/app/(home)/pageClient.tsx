"use client";
import FilterSectionWrapper from "@/components/home/FilterSectionWrapper";
import JobCard from "@/components/home/JobCard";
import NameLogoDisplay from "@/components/home/NameLogoDisplay";
import SearchBarWithFilter from "@/components/home/SearchBarWithFilter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

const PageClient = () => {
  const { data } = useSession();
  const [jobLength, setJobLength] = useState<number>(10);

  // Fetch the jobs here based on the filter
  // Refetch everytime the state changes

  return (
    <main className="content-full-height bg-white-gray pt-minus-nav-bar">
      <SearchBarWithFilter />
      <FilterSectionWrapper />
      <section className=" content-full-height flex gap-4 items-start max-w-5xl mx-auto">
        <aside className="flex-1 space-y-5 mt-4">
          {
            // Create a list of 10 job cards (simulation)
            Array.from({ length: jobLength }).map((_, index) => {
              return <JobCard key={index} />;
            })
          }
        </aside>

        {/*  */}
        <aside className="content-full-height flex-1 sticky rounded-lg top-[64px] py-4">
          <div className=" relative border rounded-lg py-4 ">
            <div className=" absolute shadow  top-0 w-full pt-2">
              <NameLogoDisplay />
            </div>

            {/* All description scrollable area */}
            <div className="mt-20 max-h-[380px] overflow-y-scroll mb-12 pb-6">
              <section className=" px-4">
                <h4 className=" font-semibold">Minimum qualifications</h4>
                <ul className="list-disc list-inside text-sm space-y-1 mt-2 text-muted-foreground pl-5">
                  <li>
                    Bachelor’s degree in a related field or equivalent
                    experience.
                  </li>
                  <li>2+ years of experience in a similar role.</li>
                  <li>
                    Proficiency in Microsoft Office Suite (Word, Excel,
                    PowerPoint).
                  </li>
                  <li>
                    Strong communication and interpersonal skills. Ability to
                    work
                  </li>
                  <li>
                    independently and as part of a team. Excellent
                    problem-solving
                  </li>
                  <li>and analytical skills.</li>
                </ul>
              </section>
              {/* Job description */}
              <Separator className="my-4 px-4" />
              <section className=" px-4 mt-4">
                <h4 className=" font-semibold">About the Job:</h4>
                <ul className="list-disc list-inside text-sm space-y-1 mt-2 text-muted-foreground pl-5">
                  <li>
                    Bachelor’s degree in a related field or equivalent
                    experience.
                  </li>
                  <li>2+ years of experience in a similar role.</li>
                  <li>
                    Proficiency in Microsoft Office Suite (Word, Excel,
                    PowerPoint).
                  </li>
                  <li>
                    Strong communication and interpersonal skills. Ability to
                    work
                  </li>
                  <li>
                    independently and as part of a team. Excellent
                    problem-solving
                  </li>
                  <li>and analytical skills.</li>
                  <li>
                    Strong communication and interpersonal skills. Ability to
                    work
                  </li>
                  <li>
                    independently and as part of a team. Excellent
                    problem-solving
                  </li>
                  <li>and analytical skills.</li>
                  <li>
                    independently and as part of a team. Excellent
                    problem-solving
                  </li>
                  <li>and analytical skills.</li>
                  <li>
                    Strong communication and interpersonal skills. Ability to
                    work
                  </li>
                  <li>
                    independently and as part of a team. Excellent
                    problem-solving
                  </li>
                  <li>and analytical skills.</li>
                </ul>
              </section>
            </div>

            {/* Call to  action Apply button */}
            <section className=" absolute bottom-0 rounded-b-lg shadow-top-shadow w-full pt-4 pb-2 px-4">
              <Button className=" w-full max-w-44">Apply</Button>
            </section>
          </div>
        </aside>
      </section>

      {/* ------------------------ */}
    </main>
  );
};

export default PageClient;
