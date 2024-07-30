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
import { JobTypes } from "@/types/jobTypes/jobTypes";
import BulletPointLooper from "./BulletPointLooper";
import SanitizedJobDescription from "./SanitizedJobDescription";
import { useSearchParams } from "next/navigation";
import { GET } from "@/app/api/jobs/route";

interface JobDetailsProps {
  currentJob: JobTypes;
  isFetching: boolean;
}

const JobDetailsPreview = ({ currentJob, isFetching }: JobDetailsProps) => {
  const searchParams = useSearchParams();
  const viewingJobId = searchParams.get("view");
  // console.log(viewingJob.get("view"));

  // alert(viewingJob.get("view"));

  const fetchCurrentJobDetail = async () => {
    if (viewingJobId) {
      try {
        console.log("i am running");

        const response = await fetch(`/api/job/${viewingJobId}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });

        // if (!response.ok) {
        //   throw new Error("response");
        // }
        const data = await response.json();
        console.log("view", data);
      } catch (err) {
        console.log("Error fetching viewing job:", err);
      }
    }
  };

  fetchCurrentJobDetail();

  return (
    <aside className="flex-1 sticky rounded-lg top-[64px] py-4">
      {!isFetching ? (
        <div className="relative border rounded-lg py-4 ">
          <div className="absolute rounded-t-lg shadow  top-0 w-full pt-2">
            <NameLogoDisplay job={currentJob} />
          </div>

          {/* All description scrollable area */}
          <div className="mt-[62px] max-h-[370px] overflow-y-scroll mb-12 pt-4 pb-6">
            <div className="px-4">
              <h3 className="text-xl mb-6 font-medium">Job details</h3>
              {/* <p className=" text-xs text-muted-foreground">
                
              </p> */}
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
          <section className=" absolute bottom-0 rounded-b-lg shadow-top-shadow w-full pt-4 pb-2 px-4">
            <Button className=" w-full max-w-44">Apply</Button>
          </section>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </aside>
  );
};

export default JobDetailsPreview;
