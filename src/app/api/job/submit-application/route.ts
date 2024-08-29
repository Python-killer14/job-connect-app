import applicationModel from "@/app/models/applicationsModel";
import { auth } from "@/lib/auth";
import connectDB from "@/utils/connectDB";
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: any) => {
    const data = await req.json();
    console.log("req data>>>", data);
    const { userId, jobId } = data
    
    if (!jobId) return NextResponse.json({error: "job id not found."})
    if (!userId) return NextResponse.json({error: "user id not found."})
      
      try { 
        connectDB();

        const newApp = new applicationModel({
          jobId,
          userId
        })

        let savedApp = await newApp.save()

        // Update the job's application count
        let incremented = await applicationModel.updateOne(
          { _id: jobId },
          { $inc: { applicantsCount: 1 } }
        );
        let foundJob = await applicationModel.findById(jobId)
        console.log("found job✅✅", foundJob)
      

      return NextResponse.json({msg: "success"})
    } catch (err) {
      console.log("Error occured while submit application:", err);
      return NextResponse.json({error: err})

    }




}