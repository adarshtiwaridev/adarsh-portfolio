import React from "react";

export default function Footer() {
  return (
    <footer
      className="
        mt-24 border-t
        border-zinc-200 dark:border-white/10
        bg-gradient-to-b
        from-white via-zinc-50 to-white
        dark:from-black dark:via-zinc-950 dark:to-black
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Adarsh Tiwari
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Full Stack Developer specializing in modern web experiences using
              Next.js, React, and scalable backend systems. Focused on clean
              architecture, performance, and real-world impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["About", "#about"],
                ["Experience", "#experience"],
                ["Projects", "#projects"],
                ["Skills", "#skills"],
                ["Contact", "#contact"],
              ].map(([label, link]) => (
                <li key={label}>
                  <a
                    href={link}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-cyan-400 transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
              Connect
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Email: <span className="font-medium">adarshtiwaridev01@gmail.com</span></li>
              <li>Location: India · Remote</li>
            </ul>

            <div className="mt-4 flex gap-4 text-sm">
              <a
                href="https://github.com/adarsh2027dev"
                target="_blank"
                className="hover:text-blue-600 dark:hover:text-cyan-400 transition"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/adarsh2027dev"
                target="_blank"
                className="hover:text-blue-600 dark:hover:text-cyan-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="
            mt-12 pt-6 border-t
            border-zinc-200 dark:border-white/10
            flex flex-col md:flex-row
            items-center justify-between gap-4
          "
        >
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Adarsh Tiwari. All rights reserved.
          </p>

          <p className="text-xs tracking-wide text-zinc-500">
            Built with{" "}
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              Next.js • Tailwind • Modern Web
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
