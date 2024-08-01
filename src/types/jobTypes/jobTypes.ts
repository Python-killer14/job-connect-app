
export interface JobTypes {
  _id: string;
  title: string;
  location: 'Remote' | 'Onsite' | 'Hybrid';
  jobType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  experienceLevel: 'Entry' | 'Mid' | 'Senior';
  education: 'none' | 'highschool' | 'associate' | 'bachelor' | 'master' | 'phd';
  status: 'active' | 'inactive';
  skills?: string[];
  description: string;
  company: {
    name: string,
    image: string,
  };
  salary?: string;
  tags?: string[];
  requirements?: string[];
  applicantsCount?: number;
  createdAt: Date;
  updatedAt: Date;
}

// Default job object
export const defaultJob: JobTypes = {
  _id: '',
  title: '',
  location: 'Remote',
  jobType: 'Full-time',
  experienceLevel: 'Entry',
  education: 'none',
  status: 'active',
  description: '',
  company: {
    name: "",
    image: ""
  },
  createdAt: new Date(),
  updatedAt: new Date(),
  // Optionally, initialize other properties with empty arrays or null values
  skills: [],
  salary: '',
  tags: [],
  requirements: [],
  applicantsCount: 0,
};
