type ApplyClientPageProps = {
  jobId: string;
};

const ApplyClientPage: React.FC<ApplyClientPageProps> = ({ jobId }) => {
  return (
    <main className="py-4">
      <div>
        <section className="px-4">
          <div>
            <h2 className="text-xl font-bold">Review your info</h2>
            <p>yusuf.khan@gmail.com</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ApplyClientPage;
