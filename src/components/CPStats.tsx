import { motion } from "motion/react";
import { Trophy, Code2, CheckCircle2, TrendingUp } from "lucide-react";

export default function CPStats() {
  const stats = [
    { label: "Codeforces Rating", value: "1247", icon: <Trophy className="w-4 h-4" /> },
    { label: "Problems Solved", value: "1300+", icon: <Code2 className="w-4 h-4" /> },
    { label: "LeetCode Solved", value: "50+", icon: <CheckCircle2 className="w-4 h-4" /> },
    { label: "Max Rank", value: "Pupil", icon: <TrendingUp className="w-4 h-4" /> }
  ];

  return (
    <section id="stats" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="text-accent font-mono text-sm uppercase tracking-widest mb-4 font-bold">Algorithms & Math</div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tighter">
            Competitive <br />
            <span className="text-white/40">Programming</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed max-w-xl mb-10">
            Passionate about algorithmic problem solving. My journey on Codeforces has been instrumental 
            in developing a mindset for efficient computation and optimized system architecture.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl glass border-white/5 text-center flex flex-col items-center group hover:border-accent/20 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <p className="text-2xl font-display font-bold mb-1">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Onsite Contests */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 flex items-center gap-3">
               <span className="w-8 h-px bg-accent/50"></span>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">Onsite Contests</span>
            </h3>
            <div className="space-y-4">
              {[
                { title: "Inter Department Programming Contest 2023", rank: "7th", sub: "Comilla University" },
                { title: "ICT DAY Programming Contest 2023", rank: "13th", sub: "Comilla University" },
                { title: "Orbitax On Campus Recruitment Contest 2023", rank: "27th", sub: "Orbitax" }
              ].map((contest, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/10 transition-all group"
              >
                <div>
                   <p className="text-sm font-bold group-hover:text-accent transition-colors">{contest.title}</p>
                   <p className="text-[10px] text-white/30 uppercase tracking-tighter">{contest.sub}</p>
                </div>
                <div className="px-3 py-1 rounded-lg bg-accent/10 text-accent text-xs font-bold font-mono">
                  Rank: {contest.rank}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative"
        >
          <div className="p-8 rounded-[40px] glass border-white/10 bg-gradient-to-br from-surface to-primary shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-2">
                 <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center animate-spin-slow">
                    <Code2 className="w-5 h-5 text-accent" />
                 </div>
             </div>
             
             <div className="space-y-8 relative z-10">
                <div className="flex items-end gap-2 text-5xl font-display font-bold">
                    1247 <span className="text-sm text-accent pb-2 font-mono uppercase tracking-widest">Max Rating</span>
                </div>
                
                <div className="space-y-4">
                    <p className="text-white/40 font-mono text-sm uppercase tracking-widest font-bold">Skill Distribution</p>
                    {[
                        { label: "Algorithm", p: 50 },
                        { label: "Data Structures", p: 20 },
                        { label: "Math", p: 25 },
                    ].map((skill, i) => (
                        <div key={i} className="space-y-2">
                           <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-white/60">
                               <span>{skill.label}</span>
                               <span>{skill.p}%</span>
                           </div>
                           <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                               <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.p}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="h-full bg-accent"
                                />
                           </div>
                        </div>
                    ))}
                </div>
             </div>

             
             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
