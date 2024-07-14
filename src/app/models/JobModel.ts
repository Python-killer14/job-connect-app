import mongoose from "mongoose";

const Schema = mongoose.Schema;


const jobSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  company: {type: String},
  location: String,
  salary: String,
  status: { 
    type: String, 
    required: true,
    default: "active", 
    enum: ["active", "inactive"] 
  },
  education: {
    type: String,
    required: true,
    enum: [ 'none',"highschool", "associate", "bachelor", "master", "phd"],
    default: "none",
  },
  requirements: [String],
  tags: [String],
  applicantsCount: Number,

  
  
}, {timestamps: true});

// Index for searching performance
jobSchema.index({ title: "text", description: "text", });

const jobModel = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default jobModel