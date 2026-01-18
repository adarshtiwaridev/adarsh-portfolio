"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ImageOff } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "Corptube",
    location: "Delhi, India · Remote",
    period: "Dec 2025 – Present",
    points: [
      "Engineered production-grade features for a social media platform using Next.js and Node.js with clean, scalable architecture",
     ,
      "Collaborated in Agile sprints, participating in feature planning, code reviews, and production deployments",
    ],
    tech: ["Next.js", "Node.js", "MERN", "REST APIs", "Agile"],
  },

  {
    role: "Full-Stack Developer Intern (Next.js / React)",
    company: "GridaNeo Bharat Pvt. Ltd.",
    location: "India · Remote",
    period: "Aug 2025 – Nov 2025",
    points: [
      "Conceptualized and launched a full-stack web application, directly leading to an internship offer",
     
      "Improved code quality and performance through debugging, refactoring, and clean coding practices",
    ],
    tech: ["Next.js", "React", "JavaScript", "REST APIs", "Git"],
  },

  {
    role: "Freelance Frontend Developer",
    company: "Emproto",
    location: "Remote",
    period: "Apr 2025 – Present",
    points: [
      "Delivered high-performance, SEO-optimized frontend solutions for client-facing web applications",
     
      "Handled deployments, performance optimization, and post-launch maintenance independently",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "SEO", "API Integration"],
  },

  {
    role: "Frontend Developer Intern",
    company: "IBM",
    location: "India · Remote",
    period: "Jun 2024 – Aug 2024",
    points: [
      "Developed responsive, reusable React components for real-world production projects",
      
      "Strengthened fundamentals of modern frontend development and industry-standard workflows",
    ],
    tech: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
  },
];

export default function Experiences() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* IMAGE moves ONLY at the start */
  const imageY = useTransform(scrollYProgress, [0, 0.25], [0, 80]);

  /* Timeline draw */
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={ref}
      className="
        py-44 px-6
        bg-gradient-to-b from-white via-zinc-50 to-white
        dark:from-black dark:via-zinc-900 dark:to-black
      "
    >
      <h2
        className="
          text-4xl md:text-5xl font-bold text-center mb-36
          tracking-tight
          text-slate-800 dark:text-zinc-100
        "
      >
        Experience Journey
      </h2>

      <div className="relative max-w-[1200px] mx-auto">

   {/* TIMELINE */}
<svg
  className="hidden lg:block absolute left-1/2 top-10 -translate-x-1/2 h-[1800px]"
  width="180"
  viewBox="0 0 180 1800"
>
  <motion.path
    d="M90 0 
       C 30 300, 150 550, 90 900 
       C 30 1200, 150 1500, 90 1800"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    style={{ pathLength }}
    className="text-indigo-300 dark:text-indigo-600"
  />
</svg>

        {/* PROFILE IMAGE – ONLY START MOVE */}
        <motion.div
          style={{ y: imageY }}
          className="
            hidden lg:flex
            absolute left-1/2 -translate-x-1/2 -top-20 z-20
          "
        >
          <div
            className="
              w-20 h-20 rounded-full overflow-hidden
              ring-4 ring-indigo-500/60
              shadow-[0_0_80px_rgba(99,102,241,0.55)]
              bg-white/80 backdrop-blur
            "
          >
            <Image
              src="/image/logo/profile.jpg"
              alt="Adarsh Tiwari"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* EXPERIENCE CARDS */}
        <div className="space-y-32 mt-40">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`
                  relative max-w-xl
                  ${isLeft ? "lg:mr-auto lg:pr-24" : "lg:ml-auto lg:pl-24"}
                `}
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow:
                      "0 30px 120px rgba(99,102,241,0.35)",
                  }}
                  transition={{ type: "spring", stiffness: 150 }}
                  className="
                    relative p-9 rounded-3xl
                    bg-white/90 dark:bg-zinc-900/90
                    backdrop-blur
                    border border-zinc-200/40 dark:border-zinc-700/40
                  "
                >
                  {/* Blue glow layer */}
                  <div
                    className="
                      pointer-events-none absolute inset-0 rounded-3xl
                      opacity-0 hover:opacity-100
                      transition-opacity duration-500
                      bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_65%)]
                    "
                  />

                  <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
                    {exp.period}
                  </p>

                  <h3 className="text-2xl font-semibold tracking-tight text-slate-800 dark:text-white">
                    {exp.role}
                  </h3>

                  <p
                    className="
                      mt-1 font-medium
                      bg-gradient-to-r from-indigo-600 to-violet-600
                      bg-clip-text text-transparent
                    "
                  >
                    {exp.company}
                  </p>

                  <ul className="mt-6 space-y-3 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                    {exp.points.map((p, idx) => (
                      <li key={idx}>• {p}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-7">
                    {exp.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="
                          px-3 py-1 text-xs rounded-full
                          bg-indigo-50 text-indigo-700
                          dark:bg-zinc-800 dark:text-zinc-300
                        "
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
