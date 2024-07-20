
export interface JobOptionTypes {
  name: string,
  value: string,
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

export const applicantsCount: JobOptionTypes[] = [
  {
    name: "1-10",
    value: "1-10",
  },
  {
    name: "10-50",
    value: "10-50",
  },
  {
    name: "50-100",
    value: "50-100",
  },
  {
    name: "100+",
    value: "100+",
  },
]