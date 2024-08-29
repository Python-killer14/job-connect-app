let baseUrl = "http://localhost:3000"

export const handleSubmitApplication = async (jobId: string, userId: string) => {
  if (!jobId) return "Job id not provided";

  try {
    const response = await fetch(baseUrl+"/api/job/submit-application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jobId, userId }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error("Application not submitted, try again later");
    }

    return "success"
  } catch (err) {
    console.log("Error occured while submit application:", err);
    return err
  }
};

