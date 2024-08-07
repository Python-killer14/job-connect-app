import jobModel from "@/app/models/JobModel";
import connectDB from "@/utils/connectDB";
import { NextRequest, NextResponse } from "next/server";


// Types
interface Params {
  jobId: string  
}

interface ApiProps {
  params: Params
}

export const GET = async (req: NextRequest, {params}: ApiProps) => {
  if (!params.jobId) return NextResponse.json({error: "job id not found."})
  try {
    await connectDB();
    const foundJob = await jobModel.findById(params.jobId)

    return NextResponse.json({ foundJob}, {status: 200})
  } catch (err) {
    console.log("Error fetching job view", err);
    return NextResponse.json({error: err},{status: 500})
  }
}