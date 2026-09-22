import React from 'react';
import { SkillBadge } from './SkillBadge';
import { Circle, DollarSign, Clock, Calendar } from 'lucide-react';

const technicalSkills = [
  { name: 'JavaScript', level: 'Expert' },
  { name: 'TypeScript', level: 'Expert' },
  { name: 'React', level: 'Expert' },
  { name: 'Node.js', level: 'Advanced' },
  { name: 'Python', level: 'Advanced' },
  { name: 'AWS', level: 'Advanced' },
  { name: 'Docker', level: 'Advanced' },
  { name: 'GraphQL', level: 'Intermediate' },
  { name: 'PostgreSQL', level: 'Advanced' },
  { name: 'MongoDB', level: 'Advanced' }
] as const;

const profileStats = [
  {
    icon: <Circle className="w-4 h-4 text-green-500" />,
    label: 'Status',
    value: 'Online',
    color: 'text-green-500'
  },
  {
    icon: <DollarSign className="w-4 h-4 text-[#2196F3]" />,
    label: 'Earnings',
    value: '$150K+',
    color: 'text-[#2196F3]'
  },
  {
    icon: <Clock className="w-4 h-4 text-[#FF5722]" />,
    label: 'Experience',
    value: '5+ Years',
    color: 'text-[#FF5722]'
  },
  {
    icon: <Calendar className="w-4 h-4 text-yellow-500" />,
    label: 'Age',
    value: '16 Years',
    color: 'text-yellow-500'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-[#1E1E1E] transition-colors duration-300 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="prose dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                With over 5 years of experience in software development, I specialize in
                building scalable web applications using modern technologies. My journey
                in tech started with a deep curiosity about how things work, which evolved
                into a passion for creating elegant solutions to complex problems.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm currently focused on full-stack development, with expertise in React,
                Node.js, and cloud technologies. I believe in writing clean, maintainable
                code and staying up-to-date with industry best practices.
              </p>
            </div>

            {/* Profile Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {profileStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white dark:bg-[#252525] p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {stat.icon}
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </span>
                  </div>
                  <span className={`text-lg font-semibold ${stat.color}`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-[#252525] rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Technical Expertise
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                  Core Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}