import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Technology',
    period: '2015 - 2019',
    description: 'Graduated with honors. Focus on software engineering, algorithms, and web development.',
    highlights: [
      'GPA: 3.8/4.0',
      'Dean\'s List for 6 semesters',
      'President of Computer Science Club'
    ]
  },
  {
    degree: 'Professional Certifications',
    school: 'Various Institutions',
    period: '2019 - Present',
    description: 'Continuous learning through professional development and certifications.',
    highlights: [
      'AWS Certified Developer - Associate',
      'Google Cloud Professional Developer',
      'Advanced React Patterns - Frontend Masters'
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="text-blue-600" size={32} />
          <h2 className="text-4xl font-bold text-slate-900">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 hover:border-blue-300 transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-blue-600 font-medium">
                    {edu.school}
                  </p>
                </div>
                <span className="text-slate-600 font-medium mt-2 md:mt-0">
                  {edu.period}
                </span>
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">
                {edu.description}
              </p>

              <ul className="space-y-2">
                {edu.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{highlight}</span>
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
