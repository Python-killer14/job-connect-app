import { NextRequest, NextResponse } from "next/server";

// DB and models
import jobModel from "@/app/models/JobModel";
import connectDB from "@/utils/connectDB";
import extractQueryParams from "../../../utils/server/extractQueryParams";
import formatQueryParams from "@/utils/server/formatQuery";


export const GET = async (req: NextRequest) => {
  // Acces all available query params
  const searchParams = req.nextUrl.searchParams
  
  try {
    const queryParams = extractQueryParams(searchParams);
    const {formattedQuery, limit, page } = formatQueryParams(queryParams);    

     // Convert limit and page to numbers (they come as strings from query params)
     const limitNumber = parseInt(limit);
     const pageNumber = parseInt(page);

    // Connect to DB
    await connectDB();    

    // Get the jobs from db
    let foundJobs = await jobModel.find(formattedQuery)
      .skip(((pageNumber - 1) * limitNumber))
      .limit(limitNumber)
      .sort({ createdAt: -1 }) // Sort by createdAt in descending order
      .exec();


    return NextResponse.json({ data: foundJobs, page: pageNumber, limit: limitNumber, length: foundJobs.length }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
