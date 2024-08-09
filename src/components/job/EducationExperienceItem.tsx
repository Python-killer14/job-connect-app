import { getYear } from "@/lib/date";
import { EducationTypes } from "@/types/jobTypes/userTypes";
import { School } from "lucide-react";
import React from "react";

const EducationExperienceItem = ({
  education,
}: {
  education: EducationTypes;
}) => {
  return (
    <div className="flex items-start gap-4 p-1 mb-6 w-full ">
      <School size={24} strokeWidth={1.3} />
      <div>
        <div className="flex items-start justify-between gap-3 w-full">
          <div>
            <h3 className="font-medium text-lg">{education.degree}</h3>
            <p className="text-sm text-rose-red -mt-1 mb-2">
              {education.institution}
            </p>
          </div>
          <p className="text-xs font-medium mr-auto text-ocean-blue">
            {getYear(education.date?.start)} - {getYear(education.date?.end)}
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          {education?.fieldOfStudy}
        </p>
      </div>
    </div>
  );
};

export default EducationExperienceItem;
