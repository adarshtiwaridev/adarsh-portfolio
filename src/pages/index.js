
import React from "react";

// Sections
import Hero from "../components/Sections/Hero";
import About from "../components/Sections/About";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Contact from "../components/Sections/Contact";
// Layout
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Experiences from "../components/Sections/Experiance";

import Certifications from "../components/Sections/Certifications";
// Vanta
import VantaNet from "../components/ui/VantaNet";


const Index = () => {
  return (
    <main className=" text-white">
      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center">
        <VantaNet className="absolute inset-0" />
        <div className="relative z-10 w-full">
          <Hero />
        </div>
      </section>

  

      <section id="about">
          <About />
      </section>

<section id="experiences">
        {/* EXPERIENCES SECTION */}
        <Experiences />
      </section>
  
  <section id="certifications">
        {/* CERTIFICATIONS SECTION */}  
        <Certifications />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="blog">
        <Blog />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
};

export default Index;
