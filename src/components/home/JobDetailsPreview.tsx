// Comps
import { JobTypes } from "@/types/jobTypes/jobTypes";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import NameLogoDisplay from "./NameLogoDisplay";

interface JobDetailsProps {
  currentJob: JobTypes;
  isFetching: boolean;
}

const JobDetailsPreview = ({ currentJob, isFetching }: JobDetailsProps) => {
  return (
    <aside className="content-full-height flex-1 sticky rounded-lg top-[64px] py-4">
      {!isFetching ? (
        <div className=" relative border rounded-lg py-4 ">
          <div className=" absolute rounded-t-lg shadow  top-0 w-full pt-2">
            <NameLogoDisplay job={currentJob} />
          </div>

          {/* All description scrollable area */}
          <div className="mt-[62px] max-h-[370px] overflow-y-scroll mb-12 pt-4 pb-6">
            <section className=" px-4">
              <h4 className=" font-semibold">Minimum qualifications</h4>
              <ul className="list-disc list-inside text-sm space-y-1 mt-2 text-muted-foreground pl-5">
                <li>
                  Bachelor’s degree in a related field or equivalent experience.
                </li>
                <li>2+ years of experience in a similar role.</li>
                <li>
                  Proficiency in Microsoft Office Suite (Word, Excel,
                  PowerPoint).
                </li>
                <li>
                  Strong communication and interpersonal skills. Ability to work
                </li>
                <li>
                  independently and as part of a team. Excellent problem-solving
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
                  Bachelor’s degree in a related field or equivalent experience.
                </li>
                <li>2+ years of experience in a similar role.</li>
                <li>
                  Proficiency in Microsoft Office Suite (Word, Excel,
                  PowerPoint).
                </li>
                <li>
                  Strong communication and interpersonal skills. Ability to work
                </li>
                <li>
                  independently and as part of a team. Excellent problem-solving
                </li>
                <li>and analytical skills.</li>
                <li>
                  Strong communication and interpersonal skills. Ability to work
                </li>
                <li>
                  independently and as part of a team. Excellent problem-solving
                </li>
                <li>and analytical skills.</li>
                <li>
                  independently and as part of a team. Excellent problem-solving
                </li>
                <li>and analytical skills.</li>
                <li>
                  Strong communication and interpersonal skills. Ability to work
                </li>
                <li>
                  independently and as part of a team. Excellent problem-solving
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
      ) : (
        <p>Loading...</p>
      )}
    </aside>
  );
};

export default JobDetailsPreview;
