import { useState } from "react";

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
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setForm(initialState); // Reset form
      setStatus("Message sent successfully 🚀 I’ll get back to you soon.");
      setTimeout(() => {
             setStatus("");
      }, 3000);
 
    } catch (err) {
      console.error("Form Submission Error:", err);
      setStatus(err.message || "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-gradient-to-br from-black via-zinc-900 to-black min-h-screen">
      {/* Glow Effect */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-2xl mx-auto">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-2 md:p-10 shadow-2xl">
          <h2 className="text-4xl font-bold text-white text-center">Let’s Build Something</h2>
          <p className="text-gray-400 text-center mt-3">Job opportunity, collaboration, or a quick question — all welcome.</p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required className="custom-input" />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" required className="custom-input" />

 <select 
  name="subject" 
  value={form.subject} 
  onChange={handleChange} 
  required 
  className="custom-input"
>
  <option value="" disabled>Select Subject</option>
  <option value="Job Opportunity">Job Opportunity</option>
  <option value="Internship / Freelance">Internship / Freelance</option>
  <option value="Project Collaboration">Project Collaboration</option>
  <option value="Technical Query">Technical Query</option>
  <option value="General Inquiry">General Inquiry</option>
</select>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company (Optional)" className="custom-input" />
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (Optional)" className="custom-input" />
            </div>

<textarea 
  name="message" 
  rows="5" 
  value={form.message} 
  onChange={handleChange} 
  placeholder="Write your message here..." 
  required 
  minLength={10} // Added this to match Mongoose validation
  className="custom-input resize-none" 
/>

            {status && <p className={`text-sm text-center ${status.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>{status}</p>}

            <button type="submit" disabled={loading} className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 transition-all duration-300 disabled:opacity-50">
              {loading ? "Sending..." : "Send Message ✨"}
            </button>
          </form>
        </div>
        <p className="text-center text-gray-500 text-sm mt-6">© {new Date().getFullYear()} Adarsh Tiwari — Built with Next.js</p>
      </div>

      <style jsx>{`
        .custom-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          color: white;
          outline: none;
          transition: all 0.3s;
        }
        .custom-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.4);
        }
        select option {
          background: #18181b;
          color: white;
        }
      `}</style>
    </section>
  );
}