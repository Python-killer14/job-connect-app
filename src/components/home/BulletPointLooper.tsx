import React from "react";

interface BulletPointLooperProps {
  points: string[];
}

const BulletPointLooper = ({ points }: BulletPointLooperProps) => {
  return (
    <ul className="list-disc list-inside text-sm space-y-1 mt-2 text-muted-foreground pl-5">
      {points.map((point, indx) => {
        return <li key={indx}>{point}</li>;
      })}
    </ul>
  );
};

export default BulletPointLooper;
