import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  // const data = await req.json();
  console.log("req data");
  return NextResponse.json({ message: "data" });
};
