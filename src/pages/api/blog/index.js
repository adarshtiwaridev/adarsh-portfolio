import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/Blog";

export default async function handler(req, res) {
  await dbConnect();

  // 👉 CREATE BLOG
  if (req.method === "POST") {
    try {
      const {
        authorName,
        role,
        tech,
        title,
        excerpt,
        content,
        coverImage,
      } = req.body;

      if (
        !authorName ||
        !role ||
        !tech ||
        !title ||
        !excerpt ||
        !content
      ) {
        return res.status(400).json({
          message: "All required fields must be filled",
        });
      }

      const blog = await Blog.create({
        authorName,
        role,
        tech,
        title,
        excerpt,
        content,
        coverImage,
      });

      return res.status(201).json({
        message: "Blog published successfully",
        blog,
      });
    } catch (error) {
      console.error("BLOG_CREATE_ERROR:", error);
      return res.status(500).json({
        message: "Failed to publish blog",
      });
    }
  }

  // 👉 GET BLOGS
  if (req.method === "GET") {
    try {
      const blogs = await Blog.find({ status: "Published" })
        .sort({ createdAt: -1 });

      return res.status(200).json(blogs);
    } catch (error) {
      return res.status(500).json({
        message: "Failed to fetch blogs",
      });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
