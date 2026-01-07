import { useState } from "react";

export default function BlogUpload() {
  const initialState = {
    authorName: "",
    role: "",
    tech: "",
    title: "",
    excerpt: "",
    content: "",
    coverImage: "",
  };

  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 🔥 Cloudinary Upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const data = new FormData();
      data.append("file", file);
      data.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      );

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const uploaded = await res.json();

      setForm((prev) => ({
        ...prev,
        coverImage: uploaded.secure_url,
      }));
    } catch (err) {
      console.error("Image upload failed", err);
      setStatus("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setForm(initialState);
      setStatus("Blog published successfully 🚀");
      setTimeout(() => setStatus(""), 3000);
    } catch (err) {
      setStatus(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-black via-zinc-900 to-black min-h-screen">
      {/* Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative max-w-2xl mx-auto">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-white text-center">
            Publish a Blog
          </h2>
          <p className="text-gray-400 text-center mt-2 text-sm">
            Admin & Developers can share knowledge
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <input
              type="text"
              name="authorName"
              value={form.authorName}
              onChange={handleChange}
              placeholder="Author Name"
              required
              className="custom-input"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                required
                className="custom-input"
              >
                <option value="" disabled>Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Developer">Developer</option>
              </select>

              <select
                name="tech"
                value={form.tech}
                onChange={handleChange}
                required
                className="custom-input"
              >
                <option value="" disabled>Select Tech</option>
                <option value="React">React</option>
                <option value="Next.js">Next.js</option>
                <option value="DSA">DSA</option>
                <option value="JavaScript">JavaScript</option>
                <option value="AI / ML">AI / ML</option>
                <option value="Backend">Backend</option>
              </select>
            </div>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Blog Title"
              required
              className="custom-input"
            />

            <textarea
              name="excerpt"
              rows="2"
              value={form.excerpt}
              onChange={handleChange}
              placeholder="Short Excerpt"
              required
              minLength={20}
              className="custom-input resize-none"
            />

            <textarea
              name="content"
              rows="6"
              value={form.content}
              onChange={handleChange}
              placeholder="Write full blog content..."
              required
              minLength={100}
              className="custom-input resize-none"
            />

            {/* 📸 Image Upload */}
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="custom-input"
              />
              {uploading && (
                <p className="text-xs text-cyan-400 mt-1">Uploading image...</p>
              )}
              {form.coverImage && (
                <img
                  src={form.coverImage}
                  alt="Preview"
                  className="mt-3 rounded-lg max-h-40 object-cover"
                />
              )}
            </div>

            {status && (
              <p
                className={`text-sm text-center ${
                  status.includes("successfully")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || uploading}
              className="w-full py-2.5 rounded-md font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Publishing..." : "Publish Blog ✍️"}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-500 text-xs mt-5">
          © {new Date().getFullYear()} Adarsh Tiwari
        </p>
      </div>

      <style jsx>{`
        .custom-input {
          width: 100%;
          padding: 0.65rem 0.9rem;
          background: rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 0.45rem;
          color: white;
          font-size: 0.9rem;
          outline: none;
          transition: all 0.25s;
        }
        .custom-input:focus {
          border-color: #22d3ee;
          box-shadow: 0 0 0 2px rgba(34, 211, 238, 0.35);
        }
        select option {
          background: #18181b;
          color: white;
        }
      `}</style>
    </section>
  );
