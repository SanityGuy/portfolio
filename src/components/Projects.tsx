import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Virtual Grass',
    description: 'The most recommended and most fastest way to touch grass digitally and securely',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgacKJzk6486ZmRw9Z1GlFGCk-T2UF-l7jiQ&s',
    tech: ['React', 'Node.js', 'MongoDB'],
    demo: 'https://example.com',
    github: 'https://github.com',
    progress: 95
  },
  {
    title: 'Aziz AntiMalware',
    description: 'The most secure and lightweight solution to dangerous malware on devices',
    image: 'https://d1vfmqj1s5shnz.cloudfront.net/blog/ZUB9NlpX3d3nJInGHjZPWBQKHU6LFB7ddR7Aukn8.jpg',
    tech: ['Vue.js', 'Firebase', 'Tailwind'],
    demo: 'https://example.com',
    github: 'https://github.com',
    progress: 80
  },
  {
    title: 'GTA 6 Remastered',
    description: 'The most popular and remastered version of Grand Theft Auto VI',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5pZVwFSUhmNE73Xp59S9Sv-wXh96NrJLeA&s',
    tech: ['Python', 'TensorFlow', 'FastAPI'],
    demo: 'https://example.com',
    github: 'https://github.com',
    progress: 100
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#121212] px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#1E1E1E] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-[#E0E0E0] mb-4">{project.description}</p>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-[#E0E0E0] mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#1E1E1E] rounded-full overflow-hidden border border-[#2196F3]/20">
                    <div
                      className="h-full bg-[#2196F3] transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#FF5722]/10 text-[#FF5722] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#2196F3] hover:text-[#1976D2]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#2196F3] hover:text-[#1976D2]"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}