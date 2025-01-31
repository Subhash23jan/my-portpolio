import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    "title": "Software Engineering Intern",
    "company": "Instawork",
    "period": "January 2024 - Present",
    "description": "Building scalable web applications using Django and ReactJS. Collaborating on React Native integration for cross-platform compatibility. Utilizing Docker for containerization and streamlined deployment.",
    "location": "Bengaluru, India"
  },
  {
    title: 'Flutter UI Developer Intern',
    company: 'BrightInfonet',
    period: 'June 2024 - July 2024',
    description: 'Collaborated with a team of 5 to manage application development, resulting in a responsive and visually appealing mobile application. Designed and implemented responsive UI elements, improving compatibility across devices by 30%.',
    location: 'Remote'
  },
  {
    title: 'Flutter Developer Intern',
    company: 'Rablo',
    period: 'April 2024 - June 2024',
    description: 'Developed a scalable app for a startup, leading to increased user engagement and 20% faster performance. Integrated backend (Node.js, MongoDB) with the frontend, enabling seamless user interactions and reducing API response time by 25%. Streamlined data management using MongoDB, ensuring efficient handling of data.',
    location: 'Remote'
  },
  {
    title: 'Open Source Contributor',
    company: 'Girl-Script Summer of Code',
    period: 'May 2024 - July 2024',
    description: 'Implemented routing with Express.js, enhancing server-side navigation and reducing response time by 15%. Identified and fixed 25+ bugs, boosting code stability and user satisfaction by 40%. Enhanced Flutter app UI, achieving a 20% improvement in user retention rates through a better user experience.',
    location: 'Bangalore, Karnataka'
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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

const Experience = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="experience">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Experience
        </motion.h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="relative pl-8 pb-12"
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-100 dark:bg-blue-800" />
              )}
              <div className="absolute left-0 top-0 w-8 h-8 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center">
                <Briefcase size={16} className="text-white" />
              </div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ml-4"
              >
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                  <span className="text-gray-400 dark:text-gray-500">•</span>
                  <span>{exp.location}</span>
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{exp.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;