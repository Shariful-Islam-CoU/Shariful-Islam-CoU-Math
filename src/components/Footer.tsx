export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a href="#" className="text-2xl font-display font-bold tracking-tighter">
            S<span className="text-accent underline decoration-accent/30 underline-offset-4">I.</span>
          </a>
          
        </div>

        <div className="flex gap-8 text-sm font-medium text-white/40">
           <a href="#about" className="hover:text-accent transition-colors">About</a>
           <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
           <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
            <p className="text-white/40 text-sm mt-2">© {new Date().getFullYear()} Shariful Islam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
