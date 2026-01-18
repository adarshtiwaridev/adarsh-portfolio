"use client";

import React, { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import Chatbot from "../sections/Chatbot";
const roles = [
   "Full-Stack Developer (MERN & Next.js)",
  "AI Agents Developer | LLM & Automation Engineer",
  "Open Source Contributor & Tech Enthusiast",
  " Designer of Intuitive Interfaces",
  "Performance-First Web Architect",
  "Cloud & DevOps Practitioner",
  "Tech Blogger & Community Mentor",
 
];


export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = roles[index];
    const speed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      setText(current.slice(0, charIndex));

      if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center  pt-10 pb-10   overflow-hidden">
    <div className="max-w-9xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

  {/* LEFT CONTENT */}
  <div className="order-2 md:order-1 space-y-7 animate-fade-in-up">
    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
      Hi, I’m <br />
      <span className="bg-linear-to-r from-indigo-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        Adarsh Tiwari
      </span>
    </h1>

    <p className="text-xl md:text-2xl font-semibold text-zinc-700 dark:text-zinc-300 h-9">
      {text}
      <span className="border-r-2 border-indigo-500 ml-1 animate-pulse" />
    </p>

    <p className="text-zinc-600 dark:text-zinc-400 max-w-lg text-[15.5px] leading-relaxed">
      I craft fast, scalable, and visually clean web experiences — grounded in
      strong fundamentals and enhanced with modern frameworks, animations,
      and performance-first thinking.
    </p>

    <div className="flex flex-wrap gap-4 pt-5">
      {/* Primary Button */}
      <a
        href="/Adarsh_Nextjs.pdf"
        download
        className="
          px-7 py-3.5 rounded-xl
          bg-indigo-600 text-white font-semibold
          shadow-lg shadow-indigo-600/30
          hover:bg-indigo-500 hover:shadow-indigo-500/40
          active:scale-95
          transition-all duration-300
        "
      >
        Download CV
      </a>

      {/* Secondary Button */}
      <a
        href="#contact"
        className="
          px-7 py-3.5 rounded-xl
          border border-zinc-300 dark:border-zinc-600
          text-zinc-800 dark:text-zinc-200 font-medium
          hover:bg-zinc-100 dark:hover:bg-zinc-800
          active:scale-95
          transition-all duration-300
        "
      >
        Contact Me →
      </a>
    </div>
  </div>

  {/* RIGHT IMAGE */}
  <div className="order-1 md:order-2 flex justify-center md:justify-end">
    <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center group">

      {/* Rotating Gradient Border */}
      <div className="absolute inset-0 rounded-full bg-linear-to-r from-indigo-500 via-cyan-400 to-purple-600 animate-spin-slow opacity-75 group-hover:opacity-100 blur-sm"></div>

      {/* Inner Scanner Ring */}
      <div className="absolute inset-1 rounded-full border-2 border-dashed border-indigo-300/50 animate-reverse-spin"></div>

      {/* Image */}
      <div className="relative w-[95%] h-[95%] rounded-full overflow-hidden  z-10">
        <img
          src="/image/logo/profile.jpg"
          alt="profile"
          className="w-full h-full object-cover  transition-all duration-500"
        />

        {/* Pulse Overlay */}
        <div className="absolute inset-0 rounded-full ring-inset ring-4 ring-indigo-500/20 animate-pulse" />
      </div>
    </div>
  </div>

</div>


      {/* SCROLL TO TOP */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-28 right-6 w-12 z-99 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
      >
        <ArrowUp />
      </button>

    
    </section>
  );
}
