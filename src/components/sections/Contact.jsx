"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    company: "",
    phone: "",
    message: "",
  };

  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setForm(initialState);
      setStatus({ type: "success", message: "Message sent successfully 🚀" });
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    } catch (err) {
      setStatus({ type: "error", message: err.message || "Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 transition-colors duration-500 bg-white/80 dark:bg-black/80 min-h-screen overflow-hidden">
      
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-2xl mx-auto"
      >
        <div className="backdrop-blur-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-500/5">
          
          <header className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Let’s Build <span className="text-blue-500">Something</span>
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 mt-4 text-lg">
              Job opportunity, collaboration, or a quick question — all welcome.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required className="custom-input" />
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" required className="custom-input" />
            </div>

            <select name="subject" value={form.subject} onChange={handleChange} required className="custom-input appearance-none">
              <option value="" disabled>Select Subject</option>
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="Internship / Freelance">Internship / Freelance</option>
              <option value="Project Collaboration">Project Collaboration</option>
              <option value="Technical Query">Technical Query</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company (Optional)" className="custom-input" />
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (Optional)" className="custom-input" />
            </div>

            <textarea name="message" rows="4" value={form.message} onChange={handleChange} placeholder="How can I help you?" required minLength={10} className="custom-input resize-none" />

            {/* Status Messages */}
            <AnimatePresence>
              {status.message && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`text-sm font-medium text-center ${status.type === 'success' ? 'text-emerald-500' : 'text-rose-500'}`}
                >
                  {status.message}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Animated Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full group overflow-hidden py-4 rounded-xl font-bold text-white transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_100%] animate-shimmer group-hover:bg-[pos:100%_0] transition-all duration-500"></div>
              
              <span className="relative flex items-center justify-center gap-2">
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : (
                  <>Send Message <span className="group-hover:translate-x-1 transition-transform">✨</span></>
                )}
              </span>
            </motion.button>
          </form>
        </div>

      </motion.div>

      <style jsx>{`
        .custom-input {
          width: 100%;
          padding: 0.875rem 1.25rem;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 0.75rem;
          color: #1e293b;
          outline: none;
          transition: all 0.2s;
        }

        :global(.dark) .custom-input {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: white;
        }

        .custom-input:focus {
          border-color: #3b82f6;
          background: white;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
        }

        :global(.dark) .custom-input:focus {
          background: rgba(0, 0, 0, 0.5);
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
        }

        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }

        select option {
          background: white;
          color: black;
        }

        :global(.dark) select option {
          background: #18181b;
          color: white;
        }
      `}</style>
    </section>
  );
}