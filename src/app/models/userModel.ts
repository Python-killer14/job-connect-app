import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: {type:String, require: true},
  lastName: {type:String, require: true},
  email: {type:String, require: true},
  password: {type:String, require: true},
  title: {type:String, require: true},
  profileImg: String,
  role: {
    type: String,
    enum:['Employer', 'Admin', "JobSeeker"],
    required: true,
    default: "JobSeeker",
  },
  resume: {
    current: String,
    older: [String]
  },
  profile: {
    bio: String,
    experiences: [{
      company: String,
      role: String,
      description: String,
      date: {
        start: Date,
        end: Date,
      },
    }],
    website: String,
  },
})

// Index for searching performance
userSchema.index({ firstName: "text", lastName: "text", email: "text" });


const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;