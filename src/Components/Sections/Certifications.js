"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
const certifications = [
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    period: "Sep 2025",
    credentialUrl: "https://badgr.com/public/assertions/XXXX",
    points: [
      "Hands-on experience with REST APIs and API testing",
      "Worked with collections, environments, and automation",
    ],
    tech: ["Postman", "REST API", "API Testing"],
    logo: "/images/certifications/postman.png",
  },
  {
    title: "Deloitte Australia – Technology Job Simulation",
    issuer: "Forage",
    period: "Jun 2025",
    credentialUrl: "https://www.theforage.com/credentials/S8oHsHZRjniPa8hQy",
    points: [
      "Solved real-world technology and business problems",
      "Practiced requirement analysis and solution design",
    ],
    tech: ["Software Development", "Problem Solving"],
    logo: "/images/certifications/forage.png",
  },
  {
    title: "Electronic Arts – Software Engineering Simulation",
    issuer: "Forage",
    period: "Jun 2025",
    credentialUrl: "https://www.theforage.com/credentials/4TkLyouN66AYybxfb",
    points: [
      "Simulated real software engineering workflows",
      "Focused on teamwork and engineering best practices",
    ],
    tech: ["Software Engineering", "Team Leadership"],
    logo: "/images/certifications/ea.png",
  },
  {
    title: "Data Analytics with Python",
    issuer: "NPTEL",
    period: "May 2025",
    credentialUrl:
      "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS17S1253704421",
    points: [
      "Worked with real datasets using Python",
      "Applied data cleaning and statistical analysis",
    ],
    tech: ["Python", "Data Analysis", "Statistics"],
    logo: "/images/certifications/nptel.png",
  },
];


export default function Certifications() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 0.25], [0, 80]);
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
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-36 text-slate-800 dark:text-zinc-100">
        Certifications
      </h2>

      <div className="relative max-w-[1200px] mx-auto">

        {/* TIMELINE */}
        <svg
          className="hidden lg:block absolute left-1/2 top-10 -translate-x-1/2 h-[1600px]"
          width="180"
          viewBox="0 0 180 1600"
        >
          <motion.path
            d="M90 0 
               C 30 300, 150 550, 90 800 
               C 30 1100, 150 1350, 90 1600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            style={{ pathLength }}
            className="text-indigo-300 dark:text-indigo-600"
          />
        </svg>

        {/* CENTER ICON */}
        <motion.div
          style={{ y: imageY }}
          className="hidden lg:flex absolute left-1/2 -translate-x-1/2 -top-20 z-20"
        >
          <div className="w-20 h-20 rounded-full bg-white dark:bg-zinc-900 ring-4 ring-indigo-500/60 flex items-center justify-center shadow-[0_0_80px_rgba(99,102,241,0.55)]">
            🎓
          </div>
        </motion.div>

        {/* CERTIFICATION CARDS */}
        <div className="space-y-32 mt-40">
          {certifications.map((cert, i) => {
            const isLeft = i % 2 === 0;

            return (
         <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className={`
    relative max-w-xl
    ${isLeft ? "lg:mr-auto lg:pr-24" : "lg:ml-auto lg:pl-24"}
  `}
>
  <motion.div
    whileHover={{
      y: -10,
      boxShadow: "0 30px 120px rgba(99,102,241,0.35)",
    }}
    transition={{ type: "spring", stiffness: 150 }}
    className="
      relative p-9 rounded-3xl
      bg-white/90 dark:bg-zinc-900/90
      backdrop-blur
      border border-zinc-200/40 dark:border-zinc-700/40
    "
  >
    {/* Glow Layer */}
    <div
      className="
        pointer-events-none absolute inset-0 rounded-3xl
        opacity-0 hover:opacity-100
        transition-opacity duration-500
        bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_65%)]
      "
    />

    {/* Header */}
    <div className="flex items-center gap-4 mb-4">
      <Image
        src={cert.logo}
        alt={cert.issuer}
        width={42}
        height={42}
        className="object-contain"
      />

      <p className="text-xs uppercase tracking-widest text-zinc-400">
        {cert.period}
      </p>
    </div>

    {/* Title */}
    <h3 className="text-2xl font-semibold tracking-tight text-slate-800 dark:text-white">
      {cert.title}
    </h3>

    {/* Issuer */}
    <p
      className="
        mt-1 font-medium
        bg-gradient-to-r from-indigo-600 to-violet-600
        bg-clip-text text-transparent
      "
    >
      {cert.issuer}
    </p>

    {/* Points */}
    <ul className="mt-6 space-y-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
      {cert.points.map((point, idx) => (
        <li key={idx}>• {point}</li>
      ))}
    </ul>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mt-7">
      {cert.tech.map((tech, idx) => (
        <span
          key={idx}
          className="
            px-3 py-1 text-xs rounded-full
            bg-indigo-50 text-indigo-700
            dark:bg-zinc-800 dark:text-zinc-300
          "
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Credential Link */}
    <a
      href={cert.credentialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-2 mt-6
        text-sm font-medium
        text-indigo-600 dark:text-indigo-400
        hover:underline
      "
    >
      Check Credential
      <span aria-hidden>↗</span>
    </a>
  </motion.div>
</motion.div>

            );
          })}
        </div>
      </div>
    </section>
  );
}
