import userModel from "@/app/models/userModel";
import connectDB from "@/utils/connectDB";
import { Session } from "next-auth";

async function getUserData(session: Session | null) {
  try {
    if (!session || !session.user?.id) {
      throw new Error("Unauthorized");
    }
  
    await connectDB()
    const user = await userModel.findById(session.user.id);
  
    if (!user) {
      throw new Error("User not found");
    }
  
    return user;
  } catch (error) {
    return error
  }
}

export default getUserData