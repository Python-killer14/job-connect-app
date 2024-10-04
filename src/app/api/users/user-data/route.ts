import userModel from "@/app/models/userModel";
import { auth } from "@/lib/auth";
import connectDB from "@/utils/connectDB";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const  session = await auth();

  try {
    await connectDB()
    const userData = await userModel.findOne({_id: session?.user?.id})
    return NextResponse.json({ data: userData }, {status: 200});
  } catch (err: any) {
    console.log("Error fetching user:", err);
    return NextResponse.json({error: err.message || "Error fetching user data"}, {status: 401})
  }

}