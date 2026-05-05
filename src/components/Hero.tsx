import { motion } from "motion/react";
import { MousePointer2, Github, Linkedin, Mail, ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const ROLES = [
  "Full-Stack Software Engineer",
  "Mobile App Developer",
  "Problem Solver",
  "Competitive Programmer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = isDeleting ? 50 : 100;

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = ROLES[roleIndex];
      const shouldDelete = isDeleting;

      if (!shouldDelete) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid Pattern mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-none mb-6">
            I'm <br /><span className="text-accent">Shariful Islam</span> 
            
          </h1>

          <div className="h-12 md:h-16 flex items-center mb-8">
            <p className="text-xl md:text-2xl text-white/80 font-mono">
              {text}
              <span className="animate-pulse inline-block w-1.5 h-6 md:h-8 bg-accent ml-1 border-r border-accent" />
            </p>
          </div>

          <p className="text-lg text-white/60 max-w-lg mb-10 leading-relaxed font-light">
            Specializing in the <span className="text-white hover:text-accent transition-colors font-medium">MERN Stack</span> and 
            <span className="text-white hover:text-accent transition-colors font-medium"> React Native</span>. 
            Passionate about crafting seamless user experiences and solving complex algorithmic challenges.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-primary font-bold rounded-xl flex items-center gap-2 group transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]"
            >
              View Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <div className="flex gap-3">
              {[
                { icon: <Github className="w-5 h-5" />, href: "https://github.com/Shariful-Islam-CoU", label: "GitHub" },
                { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/shariful-islam-cou", label: "LinkedIn" },
                { icon: <MessageCircle className="w-5 h-5" />, href: "https://wa.me/8801739666778", label: "WhatsApp" },
                { icon: <Mail className="w-5 h-5" />, href: "mailto:shariful.islam666778@gmail.com", label: "Email" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 glass transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto rounded-3xl overflow-hidden glass p-2 group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="w-full h-full bg-surface rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Visual Placeholder for a profile image / graphic */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <pre className="text-[10px] leading-[8px] font-mono whitespace-pre opacity-30 select-none">
                        {`
                          while (status === "alive") {
                            eat();
                            sleep();
                            code();
                            repeat();
                          }
                        `.repeat(20)}
                    </pre>
                </div>
                <div className="z-10 text-center">
                    <div className="w-32 h-32 bg-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto relative">
                         <MousePointer2 className="w-12 h-12 text-accent" />
                         <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-2 border-dashed border-accent/40 rounded-full"
                         />
                    </div>
                    <span className="text-4xl font-display font-bold text-white/50">Code is Art</span>
                </div>
            </div>
          </div>
          
          {/* Floating cards for emphasis */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -right-8 glass p-4 rounded-2xl border-accent/20 z-20 shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center text-green-500 font-bold">1.3k</div>
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Problems Solved</p>
                <p className="text-sm font-bold">Codeforces</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="invisible md:visible absolute bottom-50 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll Down</p>
        <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className=" w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1"
        >
            <div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
