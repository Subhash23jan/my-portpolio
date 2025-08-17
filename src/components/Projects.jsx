import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Image, Zap, ExternalLink } from 'lucide-react';
import { GrGallery } from "react-icons/gr";
import ProjectModal from './ProjectModal';
import { layout, typography } from '../utils/theme';

const projects = [
  {
    title: 'PrivacyLens - AI-Powered Privacy Protection',
    shortDescription: 'A sophisticated Chrome extension that leverages Google\'s Gemini AI to automatically analyze terms and conditions and privacy policies for potential data theft risks and privacy concerns.',
    fullDescription: 'PrivacyLens is a sophisticated Chrome extension that leverages Google\'s Gemini AI to automatically analyze terms and conditions and privacy policies for potential data theft risks and privacy concerns. Built with modern JavaScript and Chrome Extension Manifest V3, the application features a secure environment variable management system using Chrome\'s sync storage, real-time content analysis with intelligent keyword filtering, and a user-friendly interface with risk scoring and categorized red flag detection. The extension employs advanced content extraction algorithms to identify problematic clauses related to data collection, sharing, surveillance, and user rights limitations, providing users with instant privacy risk assessments through an intuitive popup interface.',
    image: '/assets/my_images/Privacy_Lens/1.png',
    technologies: ['JavaScript', 'Chrome Extension', 'Manifest V3', 'Google Gemini AI', 'Chrome Storage API', 'Content Analysis'],
    githubUrl: 'https://github.com/Subhash23jan/PrivacyLens',
    snapshots: [
      '/assets/my_images/Privacy_Lens/1.png',
      '/assets/my_images/Privacy_Lens/2.png',
      '/assets/my_images/Privacy_Lens/3.png',
      '/assets/my_images/Privacy_Lens/4.png',
      '/assets/my_images/Privacy_Lens/5.png'
    ]
  },
  {
    title: 'Android Offline Music Player',
    shortDescription: 'Implemented search functionality by artist, movie, song, and album name with SQLite database integration.',
    fullDescription: 'Implemented search functionality by artist, movie, song, and album name. Utilized SQLite for suggesting songs and tracking history seamlessly. Managed tracking of liked songs, most played songs, and fetched songs from local memory.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&h=500',
    technologies: ['Flutter', 'SQLite', 'Git'],
    githubUrl: 'https://github.com/subhash23jan',
    snapshots: [
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&h=500',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&h=500',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=800&h=500'
    ]
  },
  {
    title: 'E-Commerce Application',
    shortDescription: 'Full-stack e-commerce app with search functionality, Express.js backend, and MongoDB integration.',
    fullDescription: 'Incorporated search and suggestion functionality using project-specific tags. Established a local server using Express, seamlessly integrated with a Flutter app. Developed Orders history feature, utilising MongoDB storage with Mongoose.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&h=500',
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'Git'],
    githubUrl: 'https://github.com/subhash23jan',
    snapshots: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&h=500',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500',
      'https://images.unsplash.com/photo-1524678714210-9917a6c619c2?auto=format&fit=crop&w=800&h=500'
    ]
  },
  {
    title: 'GetHirrd Job Portal',
    shortDescription: 'A comprehensive job portal built with React.js and Node.js backend, featuring job listings and applications tracking.',
    fullDescription: 'A comprehensive job portal built with React.js and Node.js backend, featuring job listings, applications tracking, and user profiles.',
    image: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?auto=format&fit=crop&w=800&h=500',
    technologies: ['React', 'Node.js',"TailwindCSS", 'ShadCn',"Docker","Github Actions"],
    githubUrl: 'https://github.com/Subhash23jan/Get-Hired',
    snapshots: [
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&h=500',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&h=500',
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500'
    ]
  },
  {
    title: 'Custom Hash Map Implementation',
    shortDescription: 'A custom hash map built in C++ with separate chaining for collision handling and dynamic resizing.',
    fullDescription: 'A custom hash map built in C++ with separate chaining for collision handling. Includes both sorted and unsorted maps, with dynamic resizing and efficient data operations.',
    image: 'https://plus.unsplash.com/premium_photo-1676150789916-2c7d1fdda6b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['C++', 'Data Structures', 'Hashing', 'Algorithms'],
    githubUrl: 'https://github.com/Subhash23jan/Custom-Hash-Function',
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
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent font-['Inter'] tracking-tight mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>
        
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.15,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group relative border border-gray-200 dark:border-gray-700"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="relative overflow-hidden lg:w-1/3">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 font-medium"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Image size={18} />
                      View Snapshots
                    </motion.button>
                  </div>
                </div>
                
                <div className="flex-1 p-8">
                  <div className="mb-4">
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300 font-['Inter'] tracking-tight"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                  </div>
                  
                  <div className="mb-6">
                    <motion.p 
                      className="text-gray-600 dark:text-gray-300 leading-relaxed font-['Inter'] text-base"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.shortDescription}
                    </motion.p>
                    
                    {/* Simple expandable description */}
                    <motion.div 
                      className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600"
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-['Inter'] text-sm">
                        {project.fullDescription}
                      </p>
                    </motion.div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-bold font-['Inter'] tracking-wide shadow-lg"
                        whileHover={{ 
                          scale: 1.1, 
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: techIndex * 0.1 + 0.3 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <motion.a 
                      whileHover={{ scale: 1.3, rotate: 8, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-500 shadow-lg font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                      View Code
                    </motion.a>
                    
                    <motion.button
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 px-6 py-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20 font-medium font-['Inter'] shadow-lg"
                    >
                      <GrGallery size={18} />
                      View Snapshots
                    </motion.button>
                  </div>
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