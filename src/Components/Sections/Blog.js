"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ALLOWED_TAGS = [
  "react",
  "nextjs",
  "javascript",
  "typescript",
  "webdev",
  "backend",
  "node",
  "ai",
  "programming",
];

export default function TechBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://dev.to/api/articles?per_page=20&top=7"
        );

        const data = await res.json();

        if (!Array.isArray(data)) {
          setBlogs([]);
          return;
        }

        // ✅ Filter by your tech stack
        const filtered = data.filter((blog) =>
          blog.tag_list?.some((tag) =>
            ALLOWED_TAGS.includes(tag.toLowerCase())
          )
        );

        // ✅ Sort by latest
        const sorted = filtered.sort(
          (a, b) => new Date(b.published_at) - new Date(a.published_at)
        );

        // ✅ Show only top 6 latest
        setBlogs(sorted.slice(0, 6));
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section
      className="
        min-h-screen py-24 px-6
        bg-white/80 dark:bg-black/80
      "
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
          Latest Tech Blogs
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Recently published articles related to modern web & software development
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Loading */}
        {loading &&
          Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-64 rounded-xl animate-pulse bg-zinc-200 dark:bg-zinc-800"
            />
          ))}

        {/* Cards */}
        {!loading &&
          blogs.map((blog, i) => (
            <motion.a
              key={blog.id}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="
                group rounded-2xl overflow-hidden
                bg-white/80 dark:bg-white/5
                border border-zinc-200 dark:border-white/10
                backdrop-blur-xl
                shadow-md hover:shadow-2xl
                transition-all
              "
            >
              {/* Image */}
              <div className="h-44 overflow-hidden">
                <img
                  src={blog.cover_image || blog.social_image}
                  alt={blog.title}
                  className="
                    h-full w-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs font-medium text-blue-600 dark:text-cyan-400">
                  #{blog.tag_list?.[0]}
                </span>

                <h3 className="mt-2 font-semibold text-zinc-900 dark:text-white line-clamp-2">
                  {blog.title}
                </h3>

                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                  {blog.description}
                </p>

                <div className="mt-4 text-xs text-zinc-500 flex justify-between">
                  <span>{blog.user?.name}</span>
                  <span>
                    {new Date(blog.published_at).toDateString()}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
      </div>

      {/* Footer */}
      <p className="mt-20 text-center text-xs text-zinc-500">
        Curated latest tech blogs • Built by Adarsh Tiwari
      </p>
    </section>
  );
}
