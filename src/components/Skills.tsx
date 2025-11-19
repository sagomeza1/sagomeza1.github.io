import { Award } from 'lucide-react';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Vue.js', level: 75 }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'REST APIs', level: 95 }
    ]
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'CI/CD', level: 85 },
      { name: 'Agile/Scrum', level: 90 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Award className="text-blue-600" size={32} />
          <h2 className="text-4xl font-bold text-slate-900">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-slate-600 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
