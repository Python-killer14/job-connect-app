import PageClient from "./pageClient";

interface applyProps {
  params: { jobId: string };
}

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
