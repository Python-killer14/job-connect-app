import userModel from "@/app/models/userModel";
import { auth } from "@/lib/auth"
import connectDB from "@/utils/connectDB";
import { NextRequest, NextResponse } from "next/server"

import bcrypt from "bcryptjs"

// Register new user route handler
export const POST = async(req: NextRequest) => {
  const data = await req.json()
  let {email, firstName, lastName, password} = data

  if (!email || !firstName || !lastName || !password) {
    return NextResponse.json({error: "Please fill in all the fields", name: "email"}, {status: 400})
  }
  
  try {
    const session = await auth()

    // If session is not null, then user is already logged in
    if (session) {
      return NextResponse.json({error: "You are already logged in.", name: "email" }, {status: 401})
    }
    
    // Check if user already exists with this email
    await connectDB();
    const existingUser = await userModel.findOne({email: data.email})

    if (existingUser) {
      return NextResponse.json({error: "This email is already registered.", name: "email"}, {status: 400})
    }

    // If not, hash password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user
    const newUser = new userModel({
      ...data, 
      password:  hashedPassword,
    })

    // Save user
    let savedUser = await newUser.save()

    return NextResponse.json({savedUser}, {status: 200})
    
  } catch (err) {    
    return NextResponse.json({error: "An error occured, please try again.", name: "email"}, {status: 500})
  }

}