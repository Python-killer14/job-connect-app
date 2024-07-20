export interface JobTypes {
  _id: string,
  title: string,
  location: 'Remote' | 'Onsite' | 'Hybrid',
  jobType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship',
  experienceLevel: 'Entry' | 'Mid' | 'Senior',
  education: 'none' | 'highschool' | 'associate' | 'bachelor' | 'master' | 'phd',
  status: 'active' | 'inactive',
  skills?: string[],
  description: string,
  company: string,
  salary?: string,
  tags?: string[],
  requirements?: string[],
  applicantsCount?: number,
  createdAt: Date,
  updatedAt: Date,

}