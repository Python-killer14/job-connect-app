import { NextRequest, NextResponse } from "next/server";

// DB and models
import jobModel from "@/app/models/JobModel";
import connectDB from "@/utils/connectDB";
import extractQueryParams from "../../../utils/server/extractQueryParams";
import formatQueryParams from "@/utils/server/formatQuery";
import userModel from "@/app/models/userModel";
import bcrypt from "bcryptjs"

let randomU = {
  "firstName": "Alice",
  "lastName": "Smith",
  "email": "alice.smith@example.com",
  "title": "Software Engineer",
  "googleAuth": true,
  "profileImg": "https://example.com/images/alice_smith.png",
  "role": "JobSeeker",
  "resume": {
    "current": "https://example.com/resume/alice_smith.pdf",
    "older": [
      "https://example.com/resume/alice_smith_2021.pdf",
      "https://example.com/resume/alice_smith_2020.pdf"
    ]
  },
  "profile": {
    "bio": "Passionate software engineer with 5 years of experience in full-stack development.",
    "experiences": [
      {
        "company": "Tech Innovations Inc.",
        "role": "Frontend Developer",
        "description": "Developed user interfaces with React and integrated with backend services.",
        "date": {
          "start": "2019-03-01T00:00:00.000Z",
          "end": "2021-08-31T00:00:00.000Z"
        }
      },
      {
        "company": "Creative Solutions Ltd.",
        "role": "Software Engineer",
        "description": "Led a team of developers to build scalable web applications.",
        "date": {
          "start": "2021-09-01T00:00:00.000Z",
          "end": null
        }
      }
    ],
    "education": [
      {
        "institution": "University of Technology",
        "degree": "Bachelor of Science",
        "fieldOfStudy": "Computer Science",
        "date": {
          "start": "2015-09-01T00:00:00.000Z",
          "end": "2019-06-30T00:00:00.000Z"
        }
      }
    ],
    "website": "https://alicesmith.dev"
  }
}

export const GET = async (req: NextRequest) => {
  // Acces all available query params
  const searchParams = req.nextUrl.searchParams
  
  try {
    const queryParams = extractQueryParams(searchParams);
    const {formattedQuery, limit} = formatQueryParams(queryParams);
    // Connect to DB
    await connectDB();   

    // let newUserr = new userModel({
    //   ...randomU,
    //   password: await bcrypt.hash("Alice123", 10)
    // })

    // let ne = await newUserr.save()
    // console.log("Saved:",  ne);

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
