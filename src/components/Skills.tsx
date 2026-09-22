import React from 'react';
import { Check } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'Python', level: 'Advanced' },
      { name: 'Java', level: 'Intermediate' },
      { name: 'Go', level: 'Intermediate' }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', level: 'Expert' },
      { name: 'Node.js', level: 'Expert' },
      { name: 'Vue.js', level: 'Advanced' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'Django', level: 'Intermediate' }
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 'Expert' },
      { name: 'Docker', level: 'Advanced' },
      { name: 'AWS', level: 'Advanced' },
      { name: 'GraphQL', level: 'Advanced' },
      { name: 'Kubernetes', level: 'Intermediate' }
    ]
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Team Leadership', level: 'Expert' },
      { name: 'Problem Solving', level: 'Expert' },
      { name: 'Communication', level: 'Advanced' },
      { name: 'Agile Methodology', level: 'Advanced' },
      { name: 'Mentoring', level: 'Advanced' }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#121212] px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#1E1E1E] rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#2196F3]" />
                      <span className="text-[#E0E0E0]">{skill.name}</span>
                    </div>
                    <span className={`text-sm px-2 py-1 rounded ${
                      skill.level === 'Expert'
                        ? 'bg-[#2196F3]/10 text-[#2196F3]'
                        : skill.level === 'Advanced'
                        ? 'bg-[#FF5722]/10 text-[#FF5722]'
                        : 'bg-white/10 text-white'
                    }`}>
                      {skill.level}
                    </span>
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