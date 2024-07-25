interface QueryParams {
  q?: string;
  description?: string;
  company?: string;
  location?: string;
  status?: string;
  jobType?: string;
  applicantsCount?: string,
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

  if (queryParams?.q) {
    const searchRegex = { $regex: queryParams.q, $options: 'i'}
    query.$or = [
      {title: searchRegex},
      {description: searchRegex},
      {tags: searchRegex},
      {company: searchRegex},
      {requirements: searchRegex},
      {skills: searchRegex}
    ]
  }

  if (queryParams?.company) {
    const searchRegex = {$regex: queryParams.company, $options: 'i'}
    query.$or = [
      {company: searchRegex},
      {description: searchRegex},
      {requirements: searchRegex}
    ]
  }

  if (queryParams?.location) {
    const searchRegex = {$regex: queryParams.location, $options: 'i'}
    query.$or = [
      {location: searchRegex},
      {title: searchRegex},
      {description: searchRegex},
      {tags: searchRegex},
    ]
  }

  if (queryParams?.status) {
    query.status = queryParams.status;
  }

  if (queryParams?.jobType) {
    const searchRegex = {$regex: queryParams.jobType, $options: 'i'}
    query.$or = [
      {jobType: searchRegex },
      {tags: searchRegex},
      {description: searchRegex}
    ]
  }

  if (queryParams?.skills) {
    const searchRegex = {$regex: queryParams.skills, options: 'i'}
    query.$or = [
      {skills: searchRegex},
      {title: searchRegex},
    ]
  }

  if (queryParams?.experienceLevel) {
    const searchRegex = {$regex: queryParams.experienceLevel, options: 'i'}
    query.$or = [
      {skills: searchRegex},
      {title: searchRegex},
      {tags: searchRegex},

    ]
  }

  if (queryParams?.education) {
    query.education = queryParams.education;
  }

  if (queryParams?.requirements) {
    const searchRegex = {$regex: queryParams.experienceLevel, options: 'i'}
    query.$or = [
      {requirements: searchRegex},
      {skills: searchRegex},
      {title: searchRegex},
      {tags: searchRegex},

    ]
  }

  if (queryParams?.applicantsCount) {
    let [minApplicants, maxApplicants] = queryParams.applicantsCount.split("-").map(Number)
    query.applicantsCount = { $gt: minApplicants - 1, $lt: maxApplicants + 1}
  }

  if (queryParams?.tags) {
    const searchRegex = { $regex: queryParams.q, $options: 'i'}
    query.$or = [
      {tags: searchRegex},
      {title: searchRegex},
      {description: searchRegex},
      {company: searchRegex},
      {requirements: searchRegex},
      {skills: searchRegex}
    ]
  }

  return query;
};

export default formatQueryParams;
