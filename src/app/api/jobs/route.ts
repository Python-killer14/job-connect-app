import { NextRequest, NextResponse } from "next/server";

// DB and models
import jobModel from "@/app/models/JobModel";
import connectDB from "@/utils/connectDB";
import extractQueryParams from "../../../utils/server/extractQueryParams";
import formatQueryParams from "@/utils/server/formatQuery";
import userModel from "@/app/models/userModel";



const testData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  password: "securepassword123",
  profileImg: "https://example.com/profile-img.jpg",
  role: "JobSeeker",
  resume: {
    current: "https://example.com/current-resume.pdf",
    older: ["https://example.com/older-resume-1.pdf", "https://example.com/older-resume-2.pdf"],
  },
  profile: {
    bio: "A highly motivated individual with a passion for technology and software development.",
    experiences: [
      {
        company: "Tech Solutions Inc.",
        role: "Software Developer",
        date: {
          start: new Date("2019-06-01"),
          end: new Date("2021-08-15"),
        },
      },
      {
        company: "Innovative Apps LLC",
        role: "Frontend Developer",
        date: {
          start: new Date("2017-03-01"),
          end: new Date("2019-05-30"),
        },
      },
    ],
    website: "https://johndoe.dev",
  },
};

export const GET = async (req: NextRequest) => {
  // Acces all available query params
  const searchParams = req.nextUrl.searchParams
  
  try {
    const queryParams = extractQueryParams(searchParams);
    const {formattedQuery, limit} = formatQueryParams(queryParams);

    // console.log("formatted Q:", formattedQuery);
    // console.log("formatted Q:", formattedQuery);
    
    // Connect to DB
    await connectDB();   

    // Find all jobs
    let foundJobs = await jobModel.find(formattedQuery).limit(limit);
    return NextResponse.json({ data: foundJobs }, { status: 200 });
  } catch (err) {
    console.log("Error get:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
