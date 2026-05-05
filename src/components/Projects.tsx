import { motion } from "motion/react";
import { Github, ExternalLink, Code, Smartphone, Cloud, MessageCircle, Gamepad2, Car, PlayCircle, Image } from "lucide-react";

const PROJECTS = [
  {
    title: "Connect 4 Online",
    description: "A real-time multiplayer board game with matchmaking, score tracking, and automated win detection.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.IO", "Docker"],
    github: "https://github.com/Shariful-Islam-CoU/Connect-4-Online",
    demo: "https://connect4-1-dfxu.onrender.com/",
    icon: <Code className="w-6 h-6" />,
    color: "from-accent/80 to-blue-600"
  },
  {
    title: "Three Men Morris",
    description: "Online 3x3 board game for two players with real-time state synchronization and strategic gameplay.",
    tech: ["TypeScript", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    github: "https://github.com/Shariful-Islam-CoU/Three-Men-s-Morris",
    demo: "#",
    icon: <Gamepad2 className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Weatherly Flutter App",
    description: "Displays real-time weather data for current location or searched city using OpenWeatherMap API.",
    tech: ["Flutter", "Dart", "OpenWeatherMap API", "GPS"],
    github: "https://github.com/Shariful-Islam-CoU/Weatherly",
    demo: "#",
    icon: <Cloud className="w-6 h-6" />,
    color: "from-blue-400 to-indigo-600"
  },
  {
    title: "ShareChat App",
    description: "Real-time messaging platform supporting individual and group chats with instant synchronization.",
    tech: ["Node.js", "JavaScript", "Express.js", "Socket.IO"],
    github: "https://github.com/Shariful-Islam-CoU/ShareChat-App",
    demo: "#",
    icon: <MessageCircle className="w-6 h-6" />,
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "Driving Car (RN)",
    description: "A high-performance React Native racing game with 3-lane road logic and smooth obstacle avoidance.",
    tech: ["React Native", "Reanimated", "JavaScript"],
    github: "https://github.com/Shariful-Islam-CoU/Driving-Car",
    demo: "#",
    icon: <Car className="w-6 h-6" />,
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Photo Frame Android",
    description: "Photo editor offering stylish frames (Birthday, Flowers, Love, Nature) with high-res scale and export.",
    tech: ["Java", "Android Studio", "XML", "Android SDK"],
    github: "https://github.com/Shariful-Islam-CoU/Photo-Frame-App",
    demo: "#",
    icon: <Image className="w-6 h-6" />,
    color: "from-cyan-400 to-blue-500"
  },
  {
    title: "My Tasbih Android",
    description: "Digital tasbih counter with pronunciation guides, multiple target settings, and haptic feedback.",
    tech: ["Java", "Android Studio", "XML"],
    github: "https://github.com/Shariful-Islam-CoU/My-Tasbih-App",
    demo: "#",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Netflix Suggestion",
    description: "React Native application showcasing movie details and trending content with fluid UI transitions.",
    tech: ["React Native", "TMDB API", "JavaScript"],
    github: "https://github.com/Shariful-Islam-CoU/Netflix-Movie-App",
    demo: "#",
    icon: <PlayCircle className="w-6 h-6" />,
    color: "from-red-600 to-black"
  },
  {
    title: "Tic Tac Toe AI",
    description: "Android game featuring an unbeatable AI (Minimax) and localized multiplayer modes.",
    tech: ["Java", "Android Studio", "Minimax Algorithm"],
    github: "https://github.com/Shariful-Islam-CoU/Tic-Tac-Toe",
    demo: "#",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-end mb-20 gap-6">
          <div className="max-w-xl text-center">
            <div className="text-accent font-mono text-sm uppercase tracking-widest mb-4 font-bold">Featured Work</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold">Innovation through code.</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-[32px] overflow-hidden glass border-white/5 shadow-2xl flex flex-col h-full"
            >
              {/* Top Banner */}
              <div className={`h-40 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center p-8 transition-transform group-hover:scale-105 duration-500`}>
                 <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]" />
                 <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 z-10 shadow-lg group-hover:rotate-6 transition-transform">
                    {project.icon}
                 </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-white/50 text-sm mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-white/60 uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <a href={project.github} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-sm font-bold">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a href={project.demo} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-primary transition-all text-sm font-bold shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)]">
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
