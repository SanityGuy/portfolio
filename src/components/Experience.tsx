import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Tech Innovation Labs',
    position: 'Senior Software Engineer',
    duration: '2022 - Present',
    location: 'San Francisco, CA',
    achievements: [
      'Led development of cloud-native microservices architecture serving 1M+ users',
      'Reduced system latency by 40% through optimization and caching strategies',
      'Mentored team of 5 junior developers and implemented agile best practices',
      'Implemented CI/CD pipeline reducing deployment time by 60%'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes']
  },
  {
    company: 'Digital Solutions Inc',
    position: 'Full Stack Developer',
    duration: '2020 - 2022',
    location: 'New York, NY',
    achievements: [
      'Developed and maintained 3 enterprise-level React applications',
      'Implemented real-time data synchronization reducing data conflicts by 90%',
      'Optimized database queries improving application performance by 35%',
      'Created automated testing suite with 85% code coverage'
    ],
    technologies: ['React', 'TypeScript', 'PostgreSQL', 'Redis', 'Jest']
  },
  {
    company: 'StartUp Ventures',
    position: 'Software Developer',
    duration: '2018 - 2020',
    location: 'Austin, TX',
    achievements: [
      'Built MVP for successful startup product from ground up',
      'Integrated payment processing system handling $500K+ monthly transactions',
      'Reduced page load time by 60% through code splitting and lazy loading',
      'Implemented responsive design supporting all major devices and browsers'
    ],
    technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'AWS']
  },
  {
    company: 'Tech Solutions Corp',
    position: 'Junior Developer',
    duration: '2017 - 2018',
    location: 'Seattle, WA',
    achievements: [
      'Developed and maintained client-facing web applications',
      'Collaborated with UX team to implement responsive designs',
      'Participated in code reviews and documentation improvements',
      'Assisted in migration from legacy systems to modern stack'
    ],
    technologies: ['JavaScript', 'PHP', 'MySQL', 'jQuery', 'Bootstrap']
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#1E1E1E] px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Professional Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-0 border-l-2 md:border-l-0 border-[#2196F3]/30"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                  <p className="text-[#2196F3] mb-2">{exp.company}</p>
                  <div className="flex items-center gap-2 text-[#E0E0E0] mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#E0E0E0]">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="md:col-span-3 mt-4 md:mt-0">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-[#E0E0E0] flex items-start"
                      >
                        <span className="inline-block w-2 h-2 bg-[#FF5722] rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#2196F3]/10 text-[#2196F3] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}