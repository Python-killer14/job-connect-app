import { GraduationCap } from "lucide-react";
import React from "react";

interface JobDetailSnippetProps {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  tagItems: string[];
}

const JobDetailSnippet = ({ Icon, title, tagItems }: JobDetailSnippetProps) => {
  return (
    <section className="pb-4 px-4 mt-3">
      <div className="flex items-center gap-4 mb-2">
        <Icon className="w-5 h-5" />
        <p>{title}</p>
      </div>
      <div className="flex items-center flex-wrap gap-3">
        {tagItems &&
          tagItems.length > 0 &&
          tagItems.map((tag, indx) => {
            return (
              <span
                key={indx}
                className="bg-light-blue-2 rounded px-2 py-1 capitalize text-sm"
              >
                {tag}
              </span>
            );
          })}
      </div>
    </section>
  );
};

export default JobDetailSnippet;
