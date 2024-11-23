import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI Classification Website',
    description: 'A binary/multi-class classification tool covering perceptron and neural network concepts.',
    tech: ['AI', 'Neural Networks', 'Web Development'],
    github: 'https://github.com/Hadi87s/Binary-Multi-Class-Classification',
    website: 'https://hadi87s.github.io/Binary-Multi-Class-Classification/PartOne/'
  },
  {
    title: 'Kohonen-Map Website',
    description: 'Demonstrates self-organizing maps, built with Bolt.new AI using prompt engineering and bug fixing.',
    tech: ['AI', 'SOM', 'Web Development'],
    github: 'https://github.com/Hadi87s/Kohonen-Map',
    website: 'https://kohonen-map.netlify.app/'
  },
  {
    title: 'Fuzzy Tip System',
    description: 'Calculates tip amount based on food and service rating using fuzzy logic.',
    tech: ['Python', 'Fuzzy Logic', 'AI'],
    github: 'https://github.com/Hadi87s/Fuzzy-Tip-System'
  },
  {
    title: 'Chatting System',
    description: 'A networking project demonstrating TCP and UDP protocols.',
    tech: ['Java', 'Networking', 'TCP/UDP'],
    github: 'https://github.com/Hadi87s/Chatting-System'
  },
  {
    title: 'Sweet Management System',
    description: 'Created with Java and Cucumber framework, following Agile and TDD practices.',
    tech: ['Java', 'Cucumber', 'TDD'],
    github: 'https://github.com/Hadi87s/Sweet-Management-System'
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/50 to-blue-600/50 rounded-lg blur-[2px] group-hover:opacity-75 transition duration-500 opacity-50" />
                
                <div className="relative bg-gray-900 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-purple-900/50 backdrop-blur-sm text-purple-200 rounded-full text-sm border border-purple-700/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Github className="mr-2" size={20} />
                      View on GitHub
                    </a>
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <ExternalLink className="mr-2" size={20} />
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}