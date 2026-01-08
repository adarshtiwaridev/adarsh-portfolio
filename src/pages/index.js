// Sections
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Blog from "../components/sections/Blog";
import Contact from "../components/sections/Contact";
import Experiences from "../components/sections/Experience";
import Certifications from "../components/sections/Certifications";

// Layout
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// UI
import VantaNet from "../components/ui/VantaNet";



const Index = () => {
  return (

    
    <main>
      <Header />
      

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-white dark:bg-black">
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
