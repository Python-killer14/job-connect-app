import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { JobTypes } from "@/types/jobTypes/jobTypes";

interface NameLogoDisplayProps {
  isJobCard?: boolean;
  job: JobTypes;
}

const NameLogoDisplay = ({ job, isJobCard = false }: NameLogoDisplayProps) => {
  return (
    <section className="flex gap-4 items-center mb-4 px-4">
      <div className="">
        <Image
          src="/images/google-logo.png"
          height={50}
          width={50}
          alt="company-logo"
          className={cn(
            " bg-hover-gray p-1 shadow-sm rounded-md ",
            !isJobCard ? "w-13 h-12" : "w-10 h-10"
          )}
        />
      </div>
      <div>
        <h2 className={cn(" font-medium", !isJobCard && "text-xl")}>
          {job && job?.title}
        </h2>
        {isJobCard ? (
          <p className="text-xs text-muted-foreground ">{job.company}</p>
        ) : (
          <Link
            href={`/company`}
            className="underline text-sm text-muted-foreground "
          >
            {job ? job.company : "Company placeholder"}
          </Link>
        )}
      </div>
      {isJobCard && (
        <div className="ml-auto">
          <Button className=" text-ocean-blue bg-light-blue-2 hover:bg-[#c7e5ef] ">
            Save job
          </Button>
        </div>
      )}
    </section>
  );
};

export default NameLogoDisplay;
