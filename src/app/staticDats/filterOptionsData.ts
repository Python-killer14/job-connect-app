
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

export const payRangeOptions: JobOptionTypes[] = [
  {
    name: "$40,000+",
    value: "40000"
  },
  {
    name: "$70,000+",
    value: "70000"
  },
  {
    name: "$100,000+",
    value: "100000",
  },
 
]

export const experienceLevelOptions: JobOptionTypes[] = [
  {name: "Entry Level", value: "Entry"},
  {name: "Mid Level", value: "Mid"},
  {name: "Senior Level", value: "Senior"},
]