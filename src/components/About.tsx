import { motion } from "motion/react";
import { User, Code2, Rocket, Globe } from "lucide-react";
import sharifulImage from "../assets/shariful_islam.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 text-accent font-mono text-3xl mb-4">
              <User className="w-8 h-8" />
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Engineer by training, <br />
              <span className="text-white/40">Creator by passion.</span>
            </h2>

            <div className="space-y-6 text-lg text-white/60 leading-relaxed max-w-2xl">
              <p>
                Hello! I'm Shariful, a Full-Stack Software Engineer and Mobile App Developer.
                My journey in tech began with a deep curiosity for how digital products are built,
                which evolved into a professional career focused on building scalable systems and
                intuitive user interfaces.
              </p>
              <p>
                I thrive on solving complex problems. My background in
                <span className="text-white font-medium">Competitive Programming</span>
                has sharpened my analytical thinking, allowing me to approach challenges with efficiency
                and scale in mind.
              </p>
              <p>
                Currently, I specialize in the
                <span className="text-accent font-medium">MERN stack</span>
                (MongoDB, Express, React, Node) and
                <span className="text-accent font-medium">React Native</span>,
                bridging the gap between desktop and mobile environments.
                Whether it's building real-time multiplayer games or robust enterprise systems with
                PostgreSQL, I'm always eager to explore new technologies and push my limits.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-6">
              { [
                { title: "Clean Code", icon: <Code2 className="text-accent" /> },
                { title: "Fast Delivery", icon: <Rocket className="text-accent" /> },
                { title: "Scalability", icon: <Globe className="text-accent" /> }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-2xl glass border-white/5 flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-white/90">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 w-full aspect-square max-w-[500px] ml-auto group">
              <div className="absolute inset-0 border border-accent/20 rounded-[40px] -m-4 animate-pulse group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 border border-accent/10 rounded-[40px] -m-8 animate-pulse delay-75 group-hover:scale-110 transition-transform duration-700" />

              <div className="w-full h-full glass rounded-[40px] overflow-hidden p-3 relative">
                <div className="w-full h-full rounded-[32px] overflow-hidden bg-surface relative">
                  <img
                    src={sharifulImage}
                    alt="Shariful Islam"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).className = "w-full h-full object-cover opacity-50 ";
                    }}
                  />
                  <div className="absolute bottom-0 inset-0 flex items-end pl-4 pb-2">
                    <div>
                      <p className="text-accent font-mono text-xs uppercase tracking-widest font-bold mb-1">Developer</p>
                      <h3 className="text-2xl font-display font-bold">Shariful Islam</h3>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass p-4 rounded-2xl border-accent/30 z-20 shadow-xl"
              >
                <Code2 className="w-6 h-6 text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
