import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Image, Zap, ExternalLink } from 'lucide-react';
import { GrGallery } from "react-icons/gr";
import ProjectModal from './ProjectModal';
import { layout, typography } from '../utils/theme';

const projects = [
  {
    title: 'Android Offline Music Player',
    description: 'Implemented search functionality by artist, movie, song, and album name. Utilized SQLite for suggesting songs and tracking history seamlessly. Managed tracking of liked songs, most played songs, and fetched songs from local memory.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&h=500',
    technologies: ['Flutter', 'SQLite', 'Git'],
    githubUrl: 'https://github.com/subhash23jan',
    period: 'Dec 2023 - Feb 2024',
    snapshots: [
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&h=500',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&h=500',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=800&h=500'
    ]
  },
  {
    title: 'E-Commerce Application',
    description: 'Incorporated search and suggestion functionality using project-specific tags. Established a local server using Express, seamlessly integrated with a Flutter app. Developed Orders history feature, utilising MongoDB storage with Mongoose.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&h=500',
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'Git'],
    githubUrl: 'https://github.com/subhash23jan',
    period: 'Aug 2023 - Nov 2023',
    snapshots: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&h=500',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500',
      'https://images.unsplash.com/photo-1524678714210-9917a6c619c2?auto=format&fit=crop&w=800&h=500'
    ]
  },
  {
    title: 'GetHirrd Job Portal',
    description: 'A comprehensive job portal built with React.js and Node.js backend, featuring job listings, applications tracking, and user profiles.',
    image: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?auto=format&fit=crop&w=800&h=500',
    technologies: ['React', 'Node.js',"TailwindCSS", 'ShadCn',"Docker","Github Actions"],
    githubUrl: 'https://github.com/Subhash23jan/Get-Hired',
    period: '2023',
    snapshots: [
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&h=500',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&h=500',
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500'
    ]
  },
  {
    title: 'Custom Hash Map Implementation',
    description: 'A custom hash map built in C++ with separate chaining for collision handling. Includes both sorted and unsorted maps, with dynamic resizing and efficient data operations.',
    image: 'https://plus.unsplash.com/premium_photo-1676150789916-2c7d1fdda6b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['C++', 'Data Structures', 'Hashing', 'Algorithms'],
    githubUrl: 'https://github.com/Subhash23jan/Custom-Hash-Function',
    period: '2024',
    snapshots: [
      'https://images.unsplash.com/photo-1593746360-033a41796d98?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2OHwwfDF8c2VhcmNofDJ8fGJpbmFyeSUyMHNlYXJjaGluZ3xlbnwwfHx8fDE2ODc2MzgxMTM&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1567436912-66bfe3920d5c?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2OHwwfDF8c2VhcmNofDJ8fGJpbmFyeSUyMG1hcHBpbmd8ZW58MHx8fHwxNjg3NTYyMzI0&ixlib=rb-1.2.1&q=80&w=1080',
      'https://images.unsplash.com/photo-1578926125982-58f370c97c0b?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2OHwwfDF8c2VhcmNofDcwfHxkYXRhJTIwc3RydWN0dXJlcyUyQ2NoYWluJTIwdG9vbHxlbnxlbnwwfHx8fHwxNjg3NTYyMzI0&ixlib=rb-1.2.1&q=80&w=1080'
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className={`${layout.section} bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800`} id="projects">
      <div className={layout.container}>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${layout.card} overflow-hidden group hover:shadow-xl transition-all duration-500 card-hover-fire modern-hover`}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 glass text-white px-4 py-2 rounded-xl border border-white/20"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Image size={20} />
                    View Snapshots
                  </motion.button>
                </div>
                
                {/* Lightning effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`${typography.h4} text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                    {project.period}
                  </span>
                </div>
                
                <p className={`${typography.body} text-gray-600 dark:text-gray-300 mb-4 leading-relaxed`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      className="px-3 py-1 gradient-primary text-white rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
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
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </motion.a>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  >
                    <GrGallery size={14} />
                    Snapshots
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;