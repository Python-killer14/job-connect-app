import { NextResponse } from "next/server"
import userModel from "@/app/models/userModel"
import connectDB from "@/utils/connectDB"
import { auth } from "@/lib/auth"


const randomUser = {
  firstName: "Emma",
  lastName: "Johnson",
  email: "emma.johnson@example.com",
  password: "$2b$12$K9d/YfbXtXbQ59zN/w9mjuLZ.sOicnGvv0C6W7k1YvFhbni5HJTOe", // Example hashed password
  title: "Software Engineer",
  googleAuth: false,
  profileImg: "https://example.com/images/emma-profile.jpg",
  role: "JobSeeker",
  resume: {
    current: "https://example.com/resume/emma-current.pdf",
    older: [
      "https://example.com/resume/emma-2023.pdf",
      "https://example.com/resume/emma-2022.pdf",
    ],
  },
  profile: {
    bio: "Passionate software engineer with 5 years of experience in full-stack development, focusing on building scalable web applications.",
    experiences: [
      {
        company: "Tech Innovations Inc.",
        role: "Full Stack Developer",
        description: "Developed and maintained web applications using React, Node.js, and MongoDB. Led a team of 4 developers.",
        date: {
          start: new Date("2021-04-01"),
          end: new Date("2023-06-30"),
        },
      },
      {
        company: "Creative Solutions LLC",
        role: "Frontend Developer",
        description: "Designed and implemented UI components using React and Redux. Collaborated closely with backend developers to integrate APIs.",
        date: {
          start: new Date("2018-07-01"),
          end: new Date("2021-03-31"),
        },
      },
    ],
    education: [
      {
        institution: "University of Technology",
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Science",
        date: {
          start: new Date("2014-09-01"),
          end: new Date("2018-06-15"),
        },
      },
    ],
    website: "https://emma-johnson.dev",
  },
};

export default randomUser;

 
export async function GET() {
  let session = await auth()
  console.log("SESSIOn api:", session);

  
  try {
    // const newUser = new userModel(randomUser)
    // let savedUser = await newUser.save()
    return NextResponse.json({status: "Hello"})
  } catch (err) {
    return NextResponse.json({status: err})
  }
}