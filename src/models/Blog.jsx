import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    authorName: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      enum: ["Admin", "Developer"],
      required: true,
    },

    tech: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      minlength: 5,
      trim: true,
    },

    excerpt: {
      type: String,
      required: true,
      minlength: 20,
    },

    content: {
      type: String,
      required: true,
      minlength: 100,
    },

    coverImage: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Draft", "Published"],
      default: "Published",
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

// Prevent model overwrite error in Next.js
export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
