import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "About", href: "about", label: "About" },
  { name: "Skills", href: "skills", label: "Skills" },
  { name: "Experience", href: "experience", label: "Experience" },
  { name: "Education", href: "education", label: "Education" },
  { name: "Projects", href: "projects", label: "Projects" },
  { name: "Stats", href: "stats", label: "Stats" },
  { name: "Contact", href: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Active section detection using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Trigger when section is in the upper part of the screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.href);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[50] transition-all duration-300 ${
        scrolled ? "py-4 bg-primary/80 backdrop-blur-md  " : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter"
        >
          S<span className="text-accent underline decoration-accent/30 underline-offset-4">I.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.name}
              href={`#${link.href}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`text-sm font-medium transition-colors relative group ${
                activeSection === link.href ? "text-accent" : "text-white/70 hover:text-white"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                activeSection === link.href ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </motion.a>
          ))}
          <motion.a
            href="/src/assets/Shariful_Islam_Resume.pdf"
            download="Shariful_Islam_Resume.pdf"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-semibold hover:bg-accent hover:text-primary transition-all"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-2xl border-b border-white/5 p-8 md:hidden flex flex-col gap-6 items-center shadow-2xl"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              className={`text-lg font-medium transition-colors ${
                activeSection === link.href ? "text-accent" : "hover:text-accent"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="w-full text-center py-3 rounded-xl bg-accent text-primary font-bold"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </motion.div>
      )}
    </nav>
  );
}
