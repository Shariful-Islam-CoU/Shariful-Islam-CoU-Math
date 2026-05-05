import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const EXPERIENCES = [
  {
    role: "App Developer (React Native)",
    company: "Offshore Staffing Solutions LTD",
    period: "Dec 2025 – Present",
    location: "Savar, Dhaka, Bangladesh",
    highlights: [
      "Developed high-performance mobile UI/UX with smooth animations and responsive design.",
      "Integrated complex REST APIs and managed application state using Redux/Context API.",
      "Collaborated closely with the backend team for system optimization.",
      "Currently architecting a full-stack system using authentication and PostgreSQL."
    ]
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Dynamite Games Studio",
    period: "Internship",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Built real-time collaborative applications using Socket.IO.",
      "Developed and successfully deployed 3 full-stack applications using Docker.",
      "Engineered reusable React components and robust backend APIs.",
      "Optimized database queries for improved performance."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-accent font-mono text-sm uppercase tracking-widest mb-4 font-bold">My Journey</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Professional Experience</h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:before:absolute md:before:left-1/2 md:before:h-full md:before:w-px md:before:bg-white/10 md:border-none">
          {EXPERIENCES.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`relative mb-16 md:w-1/2 ${i % 2 === 0 ? "md:mr-auto md:pr-12 text-left" : "md:ml-auto md:pl-12 md:text-left"}`}
            >
              {/* Timeline dot */}
              <div className="absolute top-0 -left-6 md:left-auto md:right-0 w-4 h-4 rounded-full bg-accent border-4 border-primary z-10 md:translate-x-1/2" />
              
              <div className="p-8 rounded-3xl glass border-white/5 hover:border-accent/20 transition-all shadow-2xl group">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase mb-4">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </div>
                
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{exp.role}</h3>
                <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-semibold text-white/80">{exp.company}</span>
                  <span className="opacity-30">|</span>
                  <MapPin className="w-3 h-3" />
                  <span>{exp.location}</span>
                </div>

                <ul className="space-y-4">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex gap-3 text-white/50 text-sm leading-relaxed">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
