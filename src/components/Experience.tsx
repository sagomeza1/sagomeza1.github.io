import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovation Inc.',
    period: '2022 - Present',
    description: 'Led development of a cloud-based SaaS platform serving 50,000+ users. Architected microservices infrastructure and mentored junior developers.',
    achievements: [
      'Reduced API response time by 60% through optimization',
      'Implemented CI/CD pipeline reducing deployment time by 80%',
      'Led team of 5 developers on critical projects'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Co.',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client-facing web applications using React, Node.js, and PostgreSQL.',
    achievements: [
      'Built e-commerce platform handling $2M+ in annual transactions',
      'Improved application performance by 45%',
      'Collaborated with design team on UI/UX improvements'
    ]
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Ventures',
    period: '2019 - 2020',
    description: 'Contributed to front-end development of mobile-first web applications and learned best practices in agile development.',
    achievements: [
      'Developed responsive components used across 10+ projects',
      'Participated in code reviews and pair programming sessions',
      'Implemented automated testing increasing code coverage to 85%'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="text-blue-600" size={32} />
          <h2 className="text-4xl font-bold text-slate-900">Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-blue-600 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-slate-600 font-medium mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
