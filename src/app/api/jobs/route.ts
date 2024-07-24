import { NextRequest, NextResponse } from "next/server";
import { URLSearchParams } from "url";

// DB and models
import jobModel from "@/app/models/JobModel";
import connectDB from "@/utils/connectDB";
import extractQueryParams from "../../../utils/server/extractQueryParams";
import formatQueryParams from "@/utils/server/formatQuery";

const newJob = new jobModel({
  title: "Software Engineer",
  description:
    "Develop and maintain web applications using modern frameworks and tools.",
  company: "Tech Innovators Inc.",
  location: "Remote",
  salary: "80,000 - 100,000 USD",
  status: "active",
  jobType: "Full-time",
  skills: ["JavaScript", "React", "Node.js", "MongoDB"],
  experienceLevel: "Mid",
  education: "bachelor",
  requirements: [
    "3+ years of experience in software development",
    "Proficiency in JavaScript",
    "Experience with RESTful APIs",
  ],
  tags: ["Web Development", "Full Stack", "Remote"],
  applicantsCount: 25,
});

export const GET = async (req: NextRequest) => {
  try {
    // Acces query params if available
    const searchParams: URLSearchParams = new URLSearchParams(
      req.url.split("?")[1]
    );
    const queryParams = extractQueryParams(searchParams);

    const formattedQueryParams = formatQueryParams(queryParams);
    //
    console.log("q extr>>:", formattedQueryParams);
    console.log("q params>>:", queryParams);

    // Connect to DB
    await connectDB();
    // await newJob.save();

    // Find all jobs
    let foundJobs = await jobModel.find(formattedQueryParams);
    return NextResponse.json({ data: foundJobs }, { status: 200 });
  } catch (err) {
    console.log("Error get:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
