import { ExperienceTypes } from "./jobTypes";


export interface EducationTypes {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  date: {
    start: string;
    end: string;
  };
}

export interface UserTypes {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  // password?: string;
  title?: string;
  googleAuth: boolean;
  profileImg?: string;
  role?: 'Employer' | 'Admin' | 'JobSeeker';
  resume: {
    current?: string;
    older?: string[];
  };
  profile: {
    bio?: string;
    experiences?: ExperienceTypes[];
    education?: EducationTypes[];
    website?: string;
  };
}