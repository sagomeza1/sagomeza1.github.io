import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
            JD
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          John Doe
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
          Full Stack Developer & UI/UX Enthusiast
        </p>

        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting elegant solutions to complex problems. Passionate about building
          intuitive, scalable applications that make a difference.
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            className="px-8 py-3 bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View Work
          </a>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors duration-200"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors duration-200"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:john@example.com"
            className="text-slate-400 hover:text-white transition-colors duration-200"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
