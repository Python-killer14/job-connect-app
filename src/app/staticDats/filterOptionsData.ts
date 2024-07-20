
export interface JobOptionTypes {
  name: string,
  value: string
}

export const jobTypeOptions:JobOptionTypes[] = [
  {
    name: "Full-time",
    value: "Full-time",
  },
  {
    name: "Part-time",
    value: "Part-time",
  },
  {
    name: "Contract",
    value: "Contract",
  },
  {
    name: "Internship",
    value: "Internship",
  },
  {
    name: "Temporary",
    value: "Temporary",
  },
];

export const jobLocationOptions: JobOptionTypes[] = [
  {
    name: "Remote",
    value: "Remote",
  },
  {
    name: "Onsite",
    value: "Onsite",
  },
  {
    name: "Hybrid",
    value: "Hybrid",
  },
];