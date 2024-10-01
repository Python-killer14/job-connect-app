import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const session = await auth();

  console.log("Session:", session);
  

  return NextResponse.json({ message: "data" });
}