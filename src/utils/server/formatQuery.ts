interface QueryParams {
  q?: string;
  description?: string;
  company?: string;
  location?: string;
  status?: string;
  jobType?: string;
  applicantsCount?: string;
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

  // Separate conditions for search and filter
  const searchConditions = [];
  const filterConditions = [];

  // Handle search term (q)
  if (queryParams.q) {
    const searchRegex = { $regex: queryParams.q, $options: 'i' };
    searchConditions.push(
      { title: searchRegex },
      { description: searchRegex },
      { tags: searchRegex },
      { company: searchRegex },
      { requirements: searchRegex },
      { skills: searchRegex }
    );
  }

  // Handle filters
  if (queryParams.description) {
    filterConditions.push({ description: { $regex: queryParams.description, $options: 'i' } });
  }

  if (queryParams.company) {
    filterConditions.push({ company: { $regex: queryParams.company, $options: 'i' } });
  }

  if (queryParams.location) {
    filterConditions.push({ location: { $regex: queryParams.location, $options: 'i' } });
  }

  if (queryParams.status) {
    filterConditions.push({ status: queryParams.status });
  }

  if (queryParams.jobType) {
    filterConditions.push({ jobType: { $regex: queryParams.jobType, $options: 'i' } });
  }

  if (queryParams.skills) {
    filterConditions.push({ skills: { $regex: queryParams.skills, $options: 'i' } });
  }

  if (queryParams.experienceLevel) {
    filterConditions.push({ experienceLevel: { $regex: queryParams.experienceLevel, $options: 'i' } });
  }

  if (queryParams.education) {
    filterConditions.push({ education: queryParams.education });
  }

  if (queryParams.requirements) {
    filterConditions.push({ requirements: { $regex: queryParams.requirements, $options: 'i' } });
  }

  if (queryParams.applicantsCount) {
    const [minApplicants, maxApplicants] = queryParams.applicantsCount.split("-").map(Number);
    filterConditions.push({ applicantsCount: { $gt: minApplicants - 1, $lt: maxApplicants + 1 || Infinity } });
  }

  if (queryParams.tags) {
    const tagsRegex = queryParams.tags.map(tag => ({ tags: { $regex: tag, $options: 'i' } }));
    filterConditions.push({ $or: tagsRegex });
  }

  // Combine search and filter conditions
  if (searchConditions.length > 0 && filterConditions.length > 0) {
    query.$and = [
      { $or: searchConditions },
      { $and: filterConditions }
    ];
  } else if (searchConditions.length > 0) {
    query.$or = searchConditions;
  } else if (filterConditions.length > 0) {
    query.$and = filterConditions;
  }


  return query;
};

export default formatQueryParams;
