/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import CPStats from "./components/CPStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <main className="min-h-screen bg-primary">
      <CustomCursor />
      <Navbar />
      
      <div className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <CPStats />
        <Contact />
        <Footer />
      </div>

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] opacity-20" />
      </div>
    </main>
  );
}

