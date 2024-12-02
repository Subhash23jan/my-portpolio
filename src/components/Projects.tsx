import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Users, Star } from 'lucide-react';

const projects = [
  {
    title: 'Android Offline Music Player',
    description: 'Implemented search functionality by artist, movie, song, and album name. Utilized SQLite for suggesting songs and tracking history seamlessly. Managed tracking of liked songs, most played songs, and fetched songs from local memory.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&h=500',
    technologies: ['Flutter', 'SQLite', 'Git'],
    githubUrl: 'https://github.com/subhash23jan',
    period: 'Dec 2023 - Feb 2024'
  },
  {
    title: 'E-Commerce Application',
    description: 'Incorporated search and suggestion functionality using project-specific tags. Established a local server using Express, seamlessly integrated with a Flutter app. Developed Orders history feature, utilising MongoDB storage with Mongoose.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&h=500',
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'Git'],
    githubUrl: 'https://github.com/subhash23jan',
    period: 'Aug 2023 - Nov 2023'
  },
  {
    title: 'GetHirrd Job Portal',
    description: 'A comprehensive job portal built with React.js and Node.js backend, featuring job listings, applications tracking, and user profiles.',
    image: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?auto=format&fit=crop&w=800&h=500',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/subhash23jan',
    period: '2023'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.period}</span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <motion.a 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.githubUrl}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;