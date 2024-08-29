import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  jobId: { type: String, required: true },
  userId: { type: String, required: true },
  status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" },
  resume: String,
  coverLetter: String,
}, {timestamps: true});


const applicationModel = mongoose.models.Application || mongoose.model("Application", applicationSchema);
export default applicationModel