import jobModel from "@/app/models/JobModel";

type JobTitleProps = {
  _id: string,
  title: string,
}

const fetchJobTitle = async (jobId: string): Promise<string | undefined> => {
  try {
    const response = await jobModel.findById(jobId).select('title') as JobTitleProps
    return response.title
  } catch (err) {
    console.log(err);
  }
};

export default fetchJobTitle;