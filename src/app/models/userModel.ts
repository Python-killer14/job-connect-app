import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  title: { type: String, required: true },
  googleAuth: { type: Boolean, default: false },
  profileImg: String,
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
    website: String,
  },
});

// Index for searching performance
userSchema.index({ firstName: 'text', lastName: 'text', email: 'text' });

// Check if model already exists, if not, create it
const userModel = mongoose.models.User || mongoose.model('User', userSchema);

export default userModel;
