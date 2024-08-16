import { models, model, Schema } from "mongoose";


const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  title: { type: String },
  googleAuth: { type: Boolean, default: false },
  profileImg: {type: String, default: "https://via.placeholder.com/150" },
  role: {
    type: String,
    enum: ['Employer', 'Admin', 'JobSeeker'],
    required: true,
    default: 'JobSeeker',
  },
  resume: {
    current: String,
    older: [String],
  },
  profile: {
    bio: String,
    experiences: [
      {
        company: String,
        role: String,
        description: String,
        date: {
          start: Date,
          end: Date,
        },
      },
    ],
    education: [
      {
        institution: String,
        degree: String,
        fieldOfStudy: String,
        date: {
          start: Date,
          end: Date,
        },
      },
    ],
    website: String,
  },
});

// Index for searching performance
userSchema.index({ firstName: 'text', lastName: 'text', email: 'text' });

// Check if model already exists, if not, create it
const userModel = models.User || model('User', userSchema);

export default userModel;
