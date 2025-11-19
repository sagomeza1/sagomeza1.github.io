import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <User className="text-blue-600" size={32} />
          <h2 className="text-4xl font-bold text-slate-900">About Me</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-slate-200">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I'm a passionate full-stack developer with over 5 years of experience building
            web applications that prioritize user experience and performance. My journey in
            tech started with a curiosity for how things work, and has evolved into a career
            dedicated to creating meaningful digital experiences.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I specialize in modern JavaScript frameworks, particularly React and Node.js,
            and have a keen eye for design. I believe that great software is not just about
            functionality, but also about creating delightful experiences that users love.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to
            open-source projects, or sharing knowledge through technical writing and mentoring.
          </p>
        </div>
      </div>
    </section>
  );
}
