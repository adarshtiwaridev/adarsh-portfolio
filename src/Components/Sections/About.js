"use client"

import React, { useState } from "react"
import { Github, Linkedin, Twitter, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ProfileCarousel } from "../../componentsUI/ProfileCarousel"

const skills = [
  "React", "Next.js", "Node.js", "Express",
  "MongoDB", "PostgreSQL", "Tailwind CSS",
  "Redux", "JWT Auth", "REST APIs",
  "SEO Optimization", "Git & GitHub",
  "CI/CD", "Cloud Deployment", "AI Automation"
]

export default function About() {
  const [open, setOpen] = useState(false)

  return (
    <section
      id="about"
      className="relative py-24 bg-linear-to-b from-white via-zinc-100 to-white dark:from-black dark:via-zinc-900 dark:to-black"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="space-y-6">
          <h3 className="text-sm uppercase tracking-widest text-zinc-500">
            About Me
          </h3>

          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            Adarsh Tiwari
          </h2>

          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Full Stack Developer & AI Automation Engineer specializing in{" "}
            <span className="font-semibold text-black dark:text-white">
              MERN Stack & Next.js
            </span>.
            I build scalable, SEO-optimized web products with real-world impact.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Strong foundation in computer science, clean architecture,
            authentication systems, cloud deployment, and modern UI engineering.
            Traditional discipline. Modern execution.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:scale-105 transition"
            >
              View Projects →
            </a>

            <button
              onClick={() => setOpen(true)}
              className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:scale-105 transition"
            >
            
              View Skills ⚡
            </button>
          </div>
{/* SOCIAL */}
<div className="flex gap-4 pt-6">
  {[
    { icon: <Github size={20} />, link: "https://github.com/adarshtiwaridev" },
    { icon: <Linkedin size={20} />, link: "https://linkedin.com/in/adarshtiwaridev" },
    { icon: <Twitter size={20} />, link: "https://twitter.com/adarshtiwaridev" },
    
  ].map((item, i) => (
    <a
      key={i}
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="
        w-12 h-12 rounded-full
        flex items-center justify-center

        bg-zinc-100 text-zinc-800
        border border-zinc-200

        dark:bg-zinc-900 dark:text-zinc-100
        dark:border-zinc-700

        hover:bg-black hover:text-white
        dark:hover:bg-white dark:hover:text-black

        hover:scale-110 transition-all duration-300
        shadow-sm hover:shadow-md
      "
    >
      {item.icon}
    </a>
  ))}
</div>

        </div>

        {/* RIGHT – FIXED CAROUSEL */}
        <div className="relative flex items-center justify-center w-full">
          <div className="absolute inset-0 -z-10 bg-linear-to-br from-cyan-500/20 via-blue-500/10 to-transparent blur-3xl" />
          <div className="w-full max-w-md">
            <ProfileCarousel />
          </div>
        </div>
      </div>

      {/* SKILLS MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white dark:bg-zinc-900 rounded-2xl p-8 max-w-lg w-full shadow-2xl"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-black dark:hover:text-white"
              >
                <X />
              </button>

              <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">
                Skills & Tech Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:scale-105 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
