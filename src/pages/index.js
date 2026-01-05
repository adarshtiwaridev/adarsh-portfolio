import React from "react";

// Sections
import Hero from "../Components/Sections/Hero";
import About from "../Components/Sections/About";
// import Skills from "../Components/Sections/Skills";
import Projects from "../Components/Sections/Projects";
import Blog from "../Components/Sections/Blog";
import Contact from "../Components/Sections/Contact";
import Footer from "../Components/Layout/Footer";
const Index = () => {
  return (
    <main className="bg-black text-white overflow-hidden">
      
      {/* HERO – First Impression */}
      <Hero />

      {/* ABOUT – Who You Are */}
      <section id="about">
        <About />
      </section>

      {/* SKILLS – Tech Stack */}
      {/* <section id="skills">
        <Skills />
      </section> */}

      {/* PROJECTS – Proof of Work */}
      <section id="projects">
        <Projects />
      </section>

      {/* BLOG – Knowledge Sharing */}
      <section id="blog">
        <Blog />
      </section>

      {/* CONTACT – Call to Action */}
      <section id="contact">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  );
};

export default Index;
