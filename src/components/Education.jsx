import React from 'react';
import { Calendar, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "BMS College Of Engineering",
    period: "Nov. 2021 - August 2025",
    location: "Bengaluru",
    description: "CGPA: 8.2",
  },
  {
    degree: "12th PUC",
    institution: "SBNS PU College",
    period: "2019 - 2021",
    description: "Percentage: 99.6%",
  },
  {
    degree: "SSLC",
    institution: "Karnataka Public School",
    period: "2019",
    description: "Percentage: 98.03%",
  },
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

const Education = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="education">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Education
        </motion.h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto "
        >
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="relative pl-8 pb-12 "
            >
              {index !== education.length - 1 && (
                <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-200"></div>
              )}
              <div className="absolute left-0 top-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <GraduationCap size={16} className="text-white" />
              </div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-md p-6 ml-4 dark:bg-gray-800 dark:text-white"
              >
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2 dark:text-white">
                  <Calendar size={16} />
                  <span>{edu.period}</span>
                  {edu.location && (
                    <>
                      <span className="text-gray-400 ">•</span>
                      <span>{edu.location}</span>
                    </>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-1 dark:text-white">{edu.degree}</h3>
                <p className="text-blue-600 font-medium mb-2 dark:text-white">{edu.institution}</p>
                <p className="text-gray-700 dark:text-white">{edu.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;