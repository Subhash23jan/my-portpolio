import React from 'react';
import { Calendar, GraduationCap, Award, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { layout, typography } from '../utils/theme';

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "BMS College Of Engineering",
    period: "Nov. 2021 - August 2025",
    location: "Bengaluru",
    description: "CGPA: 8.2",
    achievements: ["Computer Science", "Software Engineering", "Data Structures"]
  },
  {
    degree: "12th PUC",
    institution: "SBNS PU College",
    period: "2019 - 2021",
    description: "Percentage: 99.6%",
    achievements: ["Science Stream", "Mathematics", "Physics"]
  },
  {
    degree: "SSLC",
    institution: "Karnataka Public School",
    period: "2019",
    description: "Percentage: 98.03%",
    achievements: ["State Board", "Academic Excellence"]
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
    <section className={`${layout.section} bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800`} id="education">
      <div className={layout.container}>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          Education
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="relative pl-8 pb-12"
            >
              {index !== education.length - 1 && (
                <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-200" />
              )}
              <div className="absolute left-0 top-0 w-8 h-8 gradient-primary rounded-full flex items-center justify-center border-2 border-gray-300 dark:border-gray-600">
                <GraduationCap size={16} className="text-white" />
              </div>
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className={`${layout.card} ml-4 group card-hover-fire modern-hover`}
              >
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <Calendar size={16} className="text-blue-500" />
                  <span>{edu.period}</span>
                  {edu.location && (
                    <>
                      <span className="text-gray-400 dark:text-gray-500">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-red-500" />
                        {edu.location}
                      </span>
                    </>
                  )}
                </div>
                
                <h3 className={`${typography.h4} mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                  {edu.degree}
                </h3>
                
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 flex items-center gap-2">
                  <Award size={16} />
                  {edu.institution}
                </p>
                
                <p className={`${typography.body} text-gray-700 dark:text-gray-300 mb-4`}>
                  {edu.description}
                </p>
                
                {edu.achievements && (
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <motion.span
                        key={achievementIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {achievement}
                      </motion.span>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;