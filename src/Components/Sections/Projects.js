"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= PROJECT DATA ================= */

const projects = [
  {
    id: 1,
    name: "GNB EV Service Platform",
    tech: "Next.js • Tailwind • Razorpay • MongoDB • REST API",
    description:
      "A multi-role EV service platform with secure dashboards and payments.",
    points: [
      "Admin, Partner & User dashboards with secure CRUD",
      "Razorpay payment gateway with backend validation",
      "SSR + SEO optimized architecture",
    ],
    media: [
      { type: "image", src: "/projects/gnb-1.png" },
      { type: "image", src: "/projects/gnb-2.png" },
            { type: "image", src: "/projects/gnb-3.png" },
      { type: "video", src: "/projects/gnb-demo.mp4" },
    ],
    live: "https://www.gridaneobharat.com/",
    github: "https://github.com/adarshtiwaridev",
  },
    {
    id: 2,
    name: "Corptube – Social Media Platform",
    tech: "Next.js • Node.js • MERN • REST APIs",
    description:
      "Worked on production-grade features for a scalable social media platform.",
    points: [
      "Built responsive frontend components",
      "Improved backend API performance",
      "Collaborated in Agile sprints & reviews",
    ],
    media: [
      { type: "image", src: "/projects/corptube-1.png" },
      { type: "image", src: "/projects/corptube-2.png" },
        { type: "image", src: "/projects/corptube-3.png" },
      { type: "video", src: "/projects/corptube-demo.mp4" },
    ],
    live: "https://www.corptube.in/",
    github: "https://github.com/adarshtiwaridev",
  },

  {
    id: 3,
    name: "Full-Stack EdTech Platform",
    tech: "MERN • JWT Auth • Razorpay • Cloudinary",
    description:
      "A complete learning management platform with authentication & payments.",
    points: [
      "Course creation, progress tracking & dashboards",
      "JWT authentication with role-based access",
      "Optimized MongoDB schema for scalability",
    ],
    media: [
      { type: "image", src: "/projects/edtech-1.png" },
      { type: "image", src: "/projects/edtech-2.png" },
       { type: "image", src: "/projects/edtech-3.png" },
        { type: "image", src: "/projects/edtech-4.png" },
      { type: "video", src: "/projects/edtech-demo.mp4" },
    ],
    live: "#",
    github: "#",
  },


];

/* ================= MEDIA SLIDER ================= */

function MediaSlider({ media }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % media.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [media.length]);

  const active = media[index];

  return (
    <div className="relative">
      {/* Label */}
      <span className="absolute top-3 left-3 z-10 text-xs px-3 py-1 rounded-full bg-black/60 text-white">
        Media Preview
      </span>

      {/* Media */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.4 }}
          className="
            rounded-2xl overflow-hidden
            border border-zinc-200 dark:border-white/10
            bg-black shadow-xl
          "
        >
          {active.type === "image" ? (
            <img
              src={active.src}
              alt=""
              className="w-full h-72 object-cover"
            />
          ) : (
            <video
              src={active.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-72 object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Progress bar */}
      <div className="mt-3 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full overflow-hidden">
        <motion.div
          key={index}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4.5, ease: "linear" }}
          className="h-full bg-blue-600 dark:bg-cyan-400"
        />
      </div>
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="projects"
      className="
        py-24 px-6
        bg-white/80 dark:bg-black/80
        min-h-screen
        transition-colors duration-500
      "
    >
      <div className="max-w-6xl mx-auto">
       <div className="text-center mb-14">
  <h2
    className="
      text-5xl md:text-6xl font-black
      text-zinc-900 dark:text-white
    "
  >
    Things I’ve Built Or Part
  </h2>

  <p
    className="
      mt-4 text-lg
      text-zinc-600 dark:text-zinc-400
    "
  >
    Shipped. Scaled. Maintained.  
    <span className="text-blue-600 dark:text-cyan-400 font-medium">
      {" "}Not just side projects.
    </span>
  </p>
</div>

        {/* Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT: Media */}
          <div className="sticky top-24">
            <MediaSlider media={projects[active].media} />
          </div>

          {/* RIGHT: Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[active].id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-semibold text-zinc-900 dark:text-white">
                {projects[active].name}
              </h3>

              <p className="text-sm font-medium text-blue-600 dark:text-cyan-400">
                {projects[active].tech}
              </p>

              <p className="text-zinc-700 dark:text-zinc-300">
                {projects[active].description}
              </p>

              <ul className="space-y-2">
                {projects[active].points.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    • {point}
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="pt-4 flex gap-4">
                <a
                  href={projects[active].live}
                  target="_blank"
                  className="
                    px-5 py-2 rounded-lg text-sm font-medium
                    bg-blue-600 text-white
                    hover:bg-blue-700 transition
                  "
                >
                  Live Demo
                </a>
                <a
                  href={projects[active].github}
                  target="_blank"
                  className="
                    px-5 py-2 rounded-lg text-sm font-medium
                    border border-zinc-300 dark:border-white/20
                    text-zinc-800 dark:text-white
                    hover:bg-zinc-100 dark:hover:bg-white/10 transition
                  "
                >
                  GitHub
                </a>
              </div>

              {/* Project switch */}
              <div className="pt-6 flex gap-3">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`
                      h-2 w-10 rounded-full transition
                      ${
                        active === i
                          ? "bg-blue-600 dark:bg-cyan-400"
                          : "bg-zinc-300 dark:bg-zinc-700"
                      }
                    `}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
