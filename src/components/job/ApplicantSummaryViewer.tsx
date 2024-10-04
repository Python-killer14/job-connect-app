"use client";
const fetchUser = async () => {
  try {
    const response = await fetch("/api/users/user-data");
    const data = await response.json();
    console.log("User >>", data);
  } catch (err) {
    console.log("Error fetching:", err);
  }
};

fetchUser();

const ApplicantSummaryViewer = () => {
  return (
    <section>
      <div className="py-6 px-14 shadow border">
        {/* 1 Basic info section */}
        <section className="border-b-2 border-dashed pb-2">
          <h3 className="font-medium">Your information</h3>
        </section>

        {/* Profile */}
        {/* Resume */}
      </div>
    </section>
  );
};

export default ApplicantSummaryViewer;
