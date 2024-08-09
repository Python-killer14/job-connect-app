import { formatDate, getYear } from "@/lib/date";
import { ExperienceTypes } from "@/types/jobTypes/jobTypes";
import { Building2 } from "lucide-react";
import React from "react";

type WorkExperienceItemProps = {
  experience: ExperienceTypes;
};

const WorkExperienceItem = ({ experience }: WorkExperienceItemProps) => {
  {
    /* Work component */
  }
  return (
    <div className="flex items-start gap-4 p-1 mb-6 ">
      {/* <img className="max-w-8" src="/images/google-logo.png" alt="" /> */}
      <Building2 size={45} strokeWidth={1.3} />
      <div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-medium text-lg">{experience.role}</h3>
            <p className=" text-sm -mt-1 mb-2 text-rose-red">
              {experience.company}
            </p>
          </div>
          <p className="text-xs font-medium text-ocean-blue">
            {getYear(experience.date?.start)} - {getYear(experience.date?.end)}
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          {experience?.description}
        </p>
      </div>
    </div>
  );
};

export default WorkExperienceItem;
