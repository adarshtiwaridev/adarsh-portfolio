import React from "react"
import { Github, Linkedin, Twitter } from "lucide-react"
import crousal from "../Ui/carousel"
import { ProfileCarousel } from "../../componentsUI/ProfileCarousel"

export default function About() {
  return (
    <section
      id="about"
      className="
        relative py-20
        bg-gradient
        dark:from-black dark:via-zinc-900 dark:to-black
      "
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h3 className="text-sm uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
            About Me
          </h3>

          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            Adarsh Tiwari
          </h2>

          <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
            Full Stack Developer specializing in{" "}
            <span className="font-semibold text-black dark:text-white">
              MERN & Next.js
            </span>
            . I build fast, scalable, SEO-optimized web applications with
            clean architecture and real-world focus.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Experienced in REST APIs, JWT authentication, cloud deployment,
            CI/CD pipelines, and modern UI systems. I mix traditional
            engineering discipline with modern tooling to ship quality work.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="#projects"
              className="
                inline-flex items-center gap-2 px-6 py-3 rounded-full
                bg-black text-white
                dark:bg-white dark:text-black
                hover:opacity-90 transition
                font-medium
              "
            >
              View Projects →
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 pt-6">
            {[
              { icon: <Github />, link: "https://github.com/adarshtiwaridev" },
              { icon: <Linkedin />, link: "https://linkedin.com/in/adarshtiwaridev" },
              { icon: <Twitter />, link: "https://twitter.com/adarshtiwaridev" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="
                  w-12 h-12 rounded-full
                  border border-zinc-300 dark:border-zinc-700
                  flex items-center justify-center
                  text-zinc-700 dark:text-zinc-300
                  hover:border-black dark:hover:border-white
                  hover:text-black dark:hover:text-white
                  hover:scale-110 transition
                "
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

      {/* RIGHT SIDE – IMAGE CAROUSEL */}
<div
  className="
    relative flex items-center justify-center
    h-[520px] w-full min-w-[420px]
    overflow-visible
  "
>
  {/* subtle background glow so cards are visible */}
  <div
    className="
      absolute inset-0 -z-10
      bg-gradient-to-br
      from-cyan-500/15 via-blue-500/10 to-transparent
      blur-3xl
    "
  />

  <ProfileCarousel />

  {/* decorative wireframe */}
  <div className="absolute top-10 right-16 w-20 h-20 border border-cyan-400/40 rounded-2xl rotate-6" />
  <div className="absolute bottom-16 left-10 w-14 h-14 border border-blue-400/40 rounded-xl -rotate-6" />
</div>


      </div>
    </section>
  )
}
