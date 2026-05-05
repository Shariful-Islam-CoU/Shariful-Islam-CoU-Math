import { motion } from "motion/react";
import { Cpu, Layout, Server, Database, Smartphone, Layers, Code2 } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: "C/C++", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "SQL", level: 85 },
      { name: "Python", level: 75 },
    ]
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Next.js", level: 80 },
      { name: "Flutter", level: 70 },
    ]
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "Socket.IO", level: 85 },
      { name: "SQL & PostgreSQL", level: 82 },
    ]
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-5 h-5" />,
    skills: [
      { name: "React Native", level: 85 },
      { name: "Java (Android)", level: 75 },
      { name: "UI/UX Animations", level: 80 },
    ]
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "Firebase", level: 70 },
    ]
  },
  {
    title: "Tools & DevOps",
    icon: <Cpu className="w-5 h-5" />,
    skills: [
      { name: "Docker", level: 80 },
      { name: "Git", level: 90 },
      { name: "Linux", level: 65 },
    ]
  },
  {
    title: "Core Concepts",
    icon: <Layers className="w-5 h-5" />,
    skills: [
      { name: "DSA", level: 92 },
      { name: "OOP", level: 88 },
      { name: "MVC / MVVM", level: 80 },
      { name: "JWT Auth", level: 85 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-accent font-mono text-sm uppercase tracking-widest mb-4 font-bold"
          >
            Technical Arsenal
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Skills & Proficiencies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl glass border-white/5 hover:border-accent/20 transition-all group ${
                i === SKILL_CATEGORIES.length - 1 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2 md:max-w-md md:mx-auto lg:max-w-none w-full' : ''
              }`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold">{cat.title}</h3>
              </div>

              <div className="space-y-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2 uppercase tracking-wide font-medium">
                      <span className="text-white/80">{skill.name}</span>
                      <span className="text-white/40">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-accent to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
