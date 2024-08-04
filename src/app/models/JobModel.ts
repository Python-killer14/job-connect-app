import mongoose from "mongoose";
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  company: {
    name: String,
    image: String,
  },
  location: {type: String, enum: ['Remote', 'Onsite', 'Hybrid'], default: 'Remote', required: true},
  salary: String,
  status: { 
    type: String, 
    required: true,
    default: "active", 
    enum: ["active", "inactive"] 
  },
  jobType: {type: String, enum: ['Full-time', 'Part-time', 'Contract', 'Internship', "Temporary"], default: 'Full-time', required: true},
  skills: [String],
  experienceLevel:{type: String, enum:['Entry', 'Mid', 'Senior']},
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
jobSchema.index({ title: "text", description: "text" });

const jobModel = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default jobModel