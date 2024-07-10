import { cn } from "@/lib/utils";
import React from "react";

export type SeparatorLineProps = {
  note: string;
  classNames?: string;
};

const SeparatorLine = ({ note, classNames }: SeparatorLineProps) => {
  return (
    <div className={cn("flex gap-2 items-center", classNames)}>
      <span className="flex-1 h-[1px] bg-hover-gray"></span>
      <span className=" text-xs text-nowrap ">{note}</span>
      <span className="flex-1 h-[1px] bg-hover-gray"></span>
    </div>
  );
};

export default SeparatorLine;
