"use client";
// Comps
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import NameLogoDisplay from "./NameLogoDisplay";
import JobDetailSnippet from "./JobDetailSnippet";

// Icons
import {
  Briefcase,
  DollarSign,
  GraduationCap,
  Layers,
  MapPinned,
} from "lucide-react";

// Types
import { defaultJob, JobTypes } from "@/types/jobTypes/jobTypes";
import BulletPointLooper from "./BulletPointLooper";
import SanitizedJobDescription from "./SanitizedJobDescription";
import { notFound, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import JobDetailsSkeleton from "../skeletons/JobDetailsSkeleton";
import Link from "next/link";

interface JobDetailsProps {
  currentJob: JobTypes;
  isFetching: boolean;
}

const JobDetailsPreview = () => {
  const searchParams = useSearchParams();
  const viewingJobId = searchParams.get("view");

  // States
  const [currentJob, setCurrentJob] = useState<JobTypes>(defaultJob);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  // Fetch the current job
  useEffect(() => {
    const fetchCurrentJobDetail = async () => {
      if (viewingJobId) {
        setIsFetching(true);
        try {
          const response = await fetch(`/api/job/${viewingJobId}`, {
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
          });

          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.error);
          }

          setCurrentJob(data.foundJob);
        } catch (err: any) {
          console.log("Error fetching viewing job:", err.message);
        } finally {
          setTimeout(() => {
            setIsFetching(false);
          }, 130);
        }
      }
    };

    fetchCurrentJobDetail();
  }, [viewingJobId]);

  return (
    <aside className="flex-1 rounded-lg  py-4 md-plus:sticky top-[64px] max-w-3xl mx-auto px-4 md-plus:px-0 ">
      {!isFetching ? (
        <div className="relative border rounded-lg py-4 bg-white">
          <div className="absolute rounded-t-lg shadow top-0 w-full pt-2">
            <NameLogoDisplay job={currentJob} />
          </div>

          {/* All description scrollable area max-w-[370px] */}
          <div className="mt-[62px] max-h-detail-height overflow-y-scroll mb-12 pt-4 pb-6">
            <div className="px-4">
              <h3 className="text-xl mb-6 font-medium">Job details</h3>
            </div>

            {/* Skills section */}
            {currentJob.skills && (
              <JobDetailSnippet
                title={"Skills"}
                tagItems={currentJob.skills}
                Icon={Layers}
              />
            )}

            {/* Education section*/}
            {currentJob.education && (
              <JobDetailSnippet
                title={"Education"}
                tagItems={[currentJob.education]}
                Icon={GraduationCap}
              />
            )}

            {currentJob.salary && (
              <JobDetailSnippet
                title="Salary"
                tagItems={[`$ ${currentJob.salary.split("-").join("- $")} `]}
                Icon={DollarSign}
              />
            )}

            {currentJob.jobType && (
              <JobDetailSnippet
                title="Job type"
                tagItems={[currentJob.jobType]}
                Icon={Briefcase}
              />
            )}

            {currentJob.location && (
              <JobDetailSnippet
                title="Job setting"
                tagItems={[currentJob.location]}
                Icon={MapPinned}
              />
            )}

            <Separator className="my-4 px-4" />

            {/* Requirements bullet lists */}
            {currentJob && currentJob.requirements && (
              <section className="px-4">
                <h4 className=" font-semibold">Minimum qualifications</h4>
                <BulletPointLooper points={currentJob.requirements} />
              </section>
            )}

            {/* Job description */}
            <Separator className="my-4 px-4" />
            {currentJob && currentJob.description && (
              <SanitizedJobDescription description={currentJob.description} />
            )}
          </div>

          {/* Call to  action Apply button */}
          <section className="absolute bottom-0 rounded-b-lg shadow-top-shadow w-full pt-4 pb-2 px-4">
            <Link href={`/apply/${currentJob._id}`}>
              <Button className="w-full max-w-44">Apply</Button>
            </Link>
          </section>
        </div>
      ) : (
        <JobDetailsSkeleton />
      )}
    </aside>
  );
};

export default JobDetailsPreview;
