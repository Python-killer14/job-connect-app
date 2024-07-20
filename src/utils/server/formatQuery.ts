interface QueryParams {
  title?: string;
  description?: string;
  company?: string;
  location?: string;
  status?: string;
  jobType?: string;
  skills?: string;
  experienceLevel?: string;
  education?: string;
  requirements?: string;
  tags?: string[];
}

interface Query {
  [key: string]: any;
}

const formatQueryParams = (queryParams: QueryParams): Query => {
  const query: Query = {};

  if (queryParams.title) {
    query.title = { $regex: queryParams.title, $options: 'i' }; // Case insensitive search
  }

  if (queryParams.description) {
    query.description = { $regex: queryParams.description, $options: 'i' };
  }

  if (queryParams.company) {
    query.company = { $regex: queryParams.company, $options: 'i' };
  }

  if (queryParams.location) {
    query.location = queryParams.location;
  }

  if (queryParams.status) {
    query.status = queryParams.status;
  }

  if (queryParams.jobType) {
    query.jobType = queryParams.jobType;
  }

  if (queryParams.skills) {
    query.skills = { $in: queryParams.skills.split(',') };
  }

  if (queryParams.experienceLevel) {
    query.experienceLevel = queryParams.experienceLevel;
  }

  if (queryParams.education) {
    query.education = queryParams.education;
  }

  if (queryParams.requirements) {
    query.requirements = { $in: queryParams.requirements.split(',') };
  }

  if (queryParams.tags) {
    query.tags = { $in: queryParams.tags };
  }

  return query;
};

export default formatQueryParams;
