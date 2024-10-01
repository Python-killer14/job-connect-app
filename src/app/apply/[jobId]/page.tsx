import fetchJobTitle from "@/action/fecthJobTitle";
import PageClient from "./pageClient";

interface applyProps {
  params: { jobId: string };
}

export const generateMetadata = async ({ params }: applyProps) => {
  const jobTitle = await fetchJobTitle(params.jobId);
  return {
    title: `${jobTitle} | Apply `,
  };
};

const ApplyJob = ({ params }: applyProps) => {
  return (
    <main>
      <div>
        <PageClient />
      </div>
    </main>
  );
};

export default ApplyJob;
