import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
   subject: {
  type: String,
  required: true,
  enum: [
    "Job Opportunity",
    "Internship / Freelance", // Ensure the space around the '/' is exactly like the frontend
    "Project Collaboration",
    "Technical Query",
    "General Inquiry",
  ]
},
message: {
  type: String,
  required: true,
  minlength: 10, // Your previous error happened because the message was too short
},
    company: {
      type: String,
      trim: true,
      default: "",
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },
  
    status: {
      type: String,
      enum: ["new", "replied", "archived"],
      default: "new",
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);