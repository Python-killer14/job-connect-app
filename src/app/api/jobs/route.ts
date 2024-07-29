import { NextRequest, NextResponse } from "next/server";

// DB and models
import jobModel from "@/app/models/JobModel";
import connectDB from "@/utils/connectDB";
import extractQueryParams from "../../../utils/server/extractQueryParams";
import formatQueryParams from "@/utils/server/formatQuery";


export const GET = async (req: NextRequest) => {
  // Acces query all available query params if available
  const searchParams = req.nextUrl.searchParams
  
  try {
    const queryParams = extractQueryParams(searchParams);
    const {formattedQuery, limit} = formatQueryParams(queryParams);

    // Connect to DB
    await connectDB();
    // await newJob.save();

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
