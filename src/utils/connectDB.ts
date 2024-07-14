import mongoose from "mongoose"

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION as string);
    console.log("Connected to DB successfully.");
    
  } catch (err) {
    console.log("Error connecting to DB:", err);
    throw new Error(`Error connecting to DB: ${err}`)
  }
}

export default connectDB;