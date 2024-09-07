interface QueryParams {
  q?: string;
  description?: string;
  limit?: number;
  company?: string;
  location?: string;
  salary?: number | string,
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
  const formattedQuery: Query = {};

  // Separate conditions for search and filter
  const searchConditions = [];
  const filterConditions = [];

  // Handle search term (q)
  if (queryParams.q) {
    const words = queryParams.q.split(' ').map(word => word.trim()).filter(word => word.length > 0);
    const searchRegexes = words.map(word => ({ $regex: word, $options: 'i' }));

    const titleConditions = searchRegexes.map(regex => ({ title: regex })); 
    const tagsConditions = searchRegexes.map(regex => ({ tags: regex }));
    const companyConditions = searchRegexes.map(regex => ({ company: regex }));
    const requirementsConditions = searchRegexes.map(regex => ({ requirements: regex }));
    const skillsConditions = searchRegexes.map(regex => ({ skills: regex }));

    searchConditions.push(
      { $or: titleConditions },
      { $or: tagsConditions },
      { $or: companyConditions },
      { $or: requirementsConditions },
      { $or: skillsConditions }
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

  // Always fetch active jobs
  filterConditions.push({ status: 'active' });

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
    filterConditions.push({ applicantsCount: { $gte: minApplicants, $lte: maxApplicants || Infinity } });
  }

  if (queryParams.tags) {
    const tagsRegex = queryParams.tags.map(tag => ({ tags: { $regex: tag, $options: 'i' } }));
    filterConditions.push({ $or: tagsRegex });
  }

  if (queryParams.salary) {
    const minSalary = Number(queryParams.salary); // Convert salary to a number
  
    if (!isNaN(minSalary)) {
      filterConditions.push({ salary: { $gte: minSalary } });
    }
  }

  
  // Combine search and filter conditions
  if (searchConditions.length > 0 && filterConditions.length > 0) {
    formattedQuery.$and = [
      { $or: searchConditions },
      { $and: filterConditions },

    ];
    
  } else if (searchConditions.length > 0) {
    formattedQuery.$or = searchConditions;
  } else if (filterConditions.length > 0) {
    formattedQuery.$and = filterConditions;
  }

  const limit = queryParams.limit ? Number(queryParams.limit) : null


  return {formattedQuery, limit};

  
};

export default formatQueryParams;
