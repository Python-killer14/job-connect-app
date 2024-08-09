import { NextResponse } from "next/server"
import userModel from "@/app/models/userModel"
import connectDB from "@/utils/connectDB"
import { auth } from "@/lib/auth"

// export const GET = async auth(async (req) => {
//   // if (!req.auth) {
//   //   return NextResponse.json({error: "Unauthorized"}, {status: 401})
//   // }

//   const session = req.auth
//   console.log("session hit:", session)

//   try {
//     await connectDB()
//     // const foundUser = await userModel.findById(session.user?.id)

//     // if (!foundUser) {
//     //   return NextResponse.json({error: "User not found"}, {status: 404})
//     // }

//     // console.log("foundUser:", foundUser)

//     return NextResponse.json({"foundUser": ""}, {status: 200})
//   } catch (err) {
//     console.log("Error fetching user:", err)
//     return NextResponse.json({error: "Something went wrong"}, {status: 500})
//   }
// })

 
export const GET = auth( async(req) => {
  console.log("auth:", req.auth);
  if (req.auth) {
    return Response.json({ data: "Protected data" })
  }
  

  return Response.json({ message: "Not authenticated" }, { status: 401 })
}) 