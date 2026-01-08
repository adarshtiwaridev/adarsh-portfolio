"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
  import { motion, AnimatePresence } from "framer-motion";
const navItems = ["Home", "Blog", "About", "Projects", "Contact"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage or default to dark
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // Default to dark mode if no preference or explicitly set to dark
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setMounted(true);
  }, []);

  // Apply theme
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode, mounted]);

  if (!mounted) return null;

  return (
    <header className=" relative top-0 z-50 bg-gradient-to- from-white via-zinc-100 to-white dark:from-black dark:via-zinc-900 dark:to-black ">
      <div className="max-w-7xl sticky mx-auto px-4 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3" >
          <img
            src="/image/logo/profile.jpg"
            className="w-12 h-12 rounded-full border-2 border-zinc-300 dark:border-zinc-700"
            alt="logo"
          />
          <span className="hidden sm:block text-xl font-bold text-zinc-900 dark:text-white">
            Adarsh Tiwari
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 px-6 py-2 rounded-full border-2 border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-500 hover:border-indigo-500 transition-colors shadow-md bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-zinc-800 dark:text-zinc-200 hover:text-indigo-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-12 h-7 rounded-full border-2 border-white bg-zinc-300 dark:bg-zinc-700 flex items-center transition-colors duration-300"
          >
            <span
              className={`w-5 h-5 bg-white border-2 border-white  dark:bg-zinc-800 rounded-full flex items-center justify-center transition-transform duration-300 shadow-sm ${
                darkMode ? "translate-x-6" : "translate-x-0.5"
              }`}
            >
              {darkMode ? (
                <Moon size={12} className="text-zinc-400" />
              ) : (
                <Sun size={12} className="text-yellow-500" />
              )}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-zinc-900 dark:text-white"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
    



<AnimatePresence>
  {menuOpen && (
    <motion.div 
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="mx-4 mb-4 overflow-hidden rounded-3xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl"
    >
      <nav className="p-2 flex flex-col gap-1">
        {navItems.map((item, index) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group relative flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-50/50 dark:hover:bg-zinc-800/50 transition-all duration-200"
          >
            <span>{item}</span>
            
            {/* Minimalist Arrow Icon that appears on hover */}
            <svg 
              className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        ))}
      </nav>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    </header>
  );
}
