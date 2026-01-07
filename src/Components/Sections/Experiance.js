"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "Corptube",
    period: "Dec 2025 – Present",
    points: [
      "Engineered production-ready features using Next.js & Node.js",
      "Optimized backend logic reducing latency by 40%",
      "Collaborated in Agile sprints & code reviews",
    ],
    tech: ["Next.js", "Node.js", "MERN"],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "GridaNeo Bharat",
    period: "Aug 2025 – Nov 2025",
    points: [
      "Launched a full-stack product leading to internship offer",
      "Built secure auth & reusable UI systems",
    ],
    tech: ["React", "REST APIs", "Git"],
  },
  {
    role: "Frontend Developer Intern",
    company: "IBM",
    period: "Jun 2024 – Aug 2024",
    points: [
      "Developed responsive React components",
      "Worked in agile product teams",
    ],
    tech: ["React", "Tailwind"],
  },
];

export default function Experiences() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={ref}
      className="
        py-40 px-6
        bg-gradient-to-b from-white via-zinc-50 to-white
        dark:from-black dark:via-zinc-900 dark:to-black
      "
    >
      <h2 className="
        text-4xl md:text-5xl font-bold text-center mb-32
        text-slate-800 dark:text-zinc-100
      ">
        Experience Journey
      </h2>

      <div className="relative max-w-[1100px] mx-auto">

        {/* CURVED TIMELINE (DESKTOP ONLY) */}
        <svg
          className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full"
          width="160"
          height="100%"
          viewBox="0 0 160 1200"
        >
          <motion.path
            d="M80 0 C 20 200, 140 400, 80 600 C 20 800, 140 1000, 80 1200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            style={{ pathLength }}
            className="text-indigo-300 dark:text-indigo-600"
          />
        </svg>

  <motion.div
  style={{ y: imageY }}
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  className="
    hidden lg:flex
    absolute left-1/2 -translate-x-1/2 top-16 z-20
  "
>
  <div className="
    w-16 h-16 rounded-full overflow-hidden
    ring-4 ring-indigo-500/60
    shadow-[0_0_60px_rgba(99,102,241,0.45)]
    bg-white/80 backdrop-blur
  ">
    <Image
      src="/image/logo/profile.jpg"
      alt="Adarsh Tiwari"
      width={124}
      height={124}
      className="object-cover"
    />
  </div>
</motion.div>


        {/* CARDS */}
        <div className="space-y-20 mt-20">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`
                  relative max-w-xl
                  ${isLeft ? "lg:mr-auto" : "lg:ml-auto"}
                `}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="
                    p-8 rounded-3xl
                    bg-white dark:bg-zinc-900
                    shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  "
                >
                  <p className="text-sm text-zinc-400 mb-1">
                    {exp.period}
                  </p>

                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
                    {exp.role}
                  </h3>

                  <p className="
                    mt-1 font-medium
                    bg-gradient-to-r from-indigo-600 to-violet-600
                    bg-clip-text text-transparent
                  ">
                    {exp.company}
                  </p>

                  <ul className="mt-5 space-y-3 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                    {exp.points.map((p, idx) => (
                      <li key={idx}>• {p}</li>
                    ))}
                  </ul>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mt-6">
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
