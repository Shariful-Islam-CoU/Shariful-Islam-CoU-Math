import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EDUCATION = [
  {
    degree: "Master of Science",
    department: "Department of Mathematics",
    institution: "Comilla University",
    period: "April 2023 – October 2024",
    location: "Cumilla, Bangladesh"
  },
  {
    degree: "Bachelor of Science (Honours)",
    department: "Department of Mathematics",
    institution: "Comilla University",
    period: "March 2018 – March 2023",
    location: "Cumilla, Bangladesh"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-surface/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-accent font-mono text-sm uppercase tracking-widest mb-4 font-bold">Academic Background</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Education</h2>
        </div>

        <div className="space-y-8">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl glass border-white/5 hover:border-accent/10 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <GraduationCap className="w-24 h-24" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-1">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{edu.degree}</h3>
                    <p className="text-white/80 font-medium">{edu.department}</p>
                    <p className="text-white/50 text-sm">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:items-end gap-2 text-sm">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white/60 font-mono">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-1 text-white/30">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
