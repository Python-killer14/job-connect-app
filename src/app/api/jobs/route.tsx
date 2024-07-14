import jobModel from "@/app/models/JobModel";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

// const newJob = new jobModel({
//   title: "Lead Solutions Specialist",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu mi auctor ultricies.",
//   company: "TechCorp",
//   location: "San Francisco",
//   salary: "$120000",
//   status: "active",
//   education: "bachelor",
//   requirements: [
//     "Experience with project management.",
//     "Strong communication skills.",
//     "Proficiency in JavaScript.",
//   ],
//   applicantsCount: 34,
// });

export const GET = async () => {
  try {
    // Connect to DB
    await connectDB();

    // Find all jobs
    let foundJobs = await jobModel.find({});
    return NextResponse.json({ data: foundJobs }, { status: 200 });
  } catch (err) {
    console.log("Error get:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
