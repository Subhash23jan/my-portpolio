import React from 'react';
import { useState } from 'react';
import { Code2, Database, Globe, GitBranch, Book, Wrench, Zap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { layout, typography } from '../utils/theme';

const About = () => {
  const [clicked, setClicked] = useState(false);
  
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Programming & Development',
      skills: ['Java', 'C++', 'JavaScript', 'Python', 'Flutter', 'React', 'Spring Boot', 'Node.js'],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Databases & Tools',
      skills: ['SQL', 'MongoDB', 'Git', 'Docker', 'JUnit', 'DDD', 'REST APIs'],
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Core Skills',
      skills: ['Data Structures & Algorithms', 'Problem Solving', 'System Design', 'Clean Code', 'Testing'],
    },
    ];

  return (
    <section className={`${layout.section} bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800`} id="about">
      <div className={layout.container}>
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header mb-16"
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative mb-8">
                <motion.div
                  className="relative perspective-1000"
                  whileHover={{ 
                    rotateY: 5,
                    rotateX: 5,
                    scale: 1.02,
                    transition: { duration: 0.4 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.img
                    initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    src="/assets/my_images/batman.jpg"
                    alt="Subhash D"
                    className="rounded-xl shadow-2xl w-full max-w-md border-2 border-gray-200 dark:border-gray-700"
                    style={{ transformStyle: 'preserve-3d' }}
                  />
                  <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl -z-10 opacity-30 blur-sm"></div>
                  <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl -z-20 opacity-20 blur-md"></div>
                </motion.div>
              </div>
              
              <motion.div 
                className={`${layout.card} text-center modern-hover card-hover-fire relative overflow-hidden`}
                whileHover={{ 
                  y: -8,
                  rotateY: 2,
                  rotateX: 1,
                  transition: { duration: 0.4 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {!clicked ? (
                  <>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-yellow-500" />
                      <p className={`${typography.h4} text-gray-700 dark:text-gray-300`}>
                        ChatGPT knows something more about me!
                      </p>
                      <Sparkles className="w-5 h-5 text-yellow-500" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Do you want to know it?
                    </p>

                    <motion.button
                      className="px-6 py-3 gradient-primary text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gray-300"
                      onClick={() => setClicked(true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.span
                        initial={{ y: "-100%", opacity: 0 }} 
                        animate={{ duration: 0.4, ease: "easeOut", opacity: 1, y: "0%" }}
                        className="flex items-center gap-2"
                      >
                        <Zap className="w-4 h-4 animate-pulse" />
                        Yes, show me!
                      </motion.span>
                    </motion.button>
                  </>
                ) : (
                  <>
                    <div className="space-y-4">
                      <p className={`${typography.body} text-gray-800 dark:text-gray-200 leading-relaxed`}>
                        Subhash is an accomplished software engineer with a solid command of <strong className="text-gray-900 dark:text-white">Java, Spring Boot, Armeria, C++, backend APIs, SQL, NoSQL, and Flutter</strong>, enabling him to handle a wide range of backend and cross-platform development needs.
                      </p>
                      
                      <p className={`${typography.body} text-gray-800 dark:text-gray-200 leading-relaxed`}>
                        He designs systems using <strong className="text-gray-900 dark:text-white">Domain-Driven Design (DDD) principles with layered flows (app → domain → repo) and repository patterns</strong>, ensuring both scalability and maintainability in complex applications.
                      </p>
                      
                      <p className={`${typography.body} text-gray-800 dark:text-gray-200 leading-relaxed`}>
                        His testing expertise spans <strong className="text-gray-900 dark:text-white">JUnit (including parameterized tests), consistent shared test data management, effective mocking, and dummy object creation</strong>—combined with the Spotless plugin and clean code practices to maintain exceptional code quality.
                      </p>
                      
                      <p className={`${typography.body} text-gray-800 dark:text-gray-200 leading-relaxed`}>
                        Subhash is proficient in modern development workflows, switching seamlessly between <strong className="text-gray-900 dark:text-white">Maven and Gradle, managing Git branching, stashing, and resetting</strong>, as well as working with YAML-driven configurations, DSL contexts, and timezone-aware date logic.
                      </p>
                      
                      <p className={`${typography.body} text-gray-800 dark:text-gray-200 leading-relaxed`}>
                        His debugging and refactoring approach is structured and effective—<strong className="text-gray-900 dark:text-white">starting with pinpointing failure points, reproducing the issue, applying targeted fixes, and concluding with full-flow retests</strong> for stability.
                      </p>
                      
                      <p className={`${typography.body} text-gray-800 dark:text-gray-200 leading-relaxed`}>
                        Beyond his technical abilities, Subhash is a <strong className="text-gray-900 dark:text-white">Knight on LeetCode with a 1950+ rating, has solved over 800 problems (top 3% globally)</strong>, contributed to GSSOC, implemented custom data structures, and refined LLM outputs at Outlier AI through RLHF techniques.
                      </p>
                      
                      <p className={`${typography.body} text-gray-800 dark:text-gray-200 leading-relaxed`}>
                        Known for his <strong className="text-gray-900 dark:text-white">persistence, adaptability, and quick learning</strong>, Subhash thrives in fast-paced, technically demanding environments and is ready to take on challenging roles where depth of knowledge and rapid problem-solving are essential.
                      </p>
                      
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mt-6">
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          Prompt for ChatGPT: "Tell me more things about me"
                        </p>
                      </div>
                    </div>

                    <motion.button
                      className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => setClicked(false)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Close
                    </motion.button>
                  </>
                )}
              </motion.div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <motion.h3 
                className={`${typography.h3} mb-8 text-center bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent font-['Inter']`}
                whileHover={{ scale: 1.05 }}
              >
                Skills & Expertise
              </motion.h3>
              <div className="grid gap-8">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, rotateX: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.2,
                      duration: 0.6,
                      type: "spring"
                    }}
                    className={`${layout.card} hover:shadow-2xl transition-all duration-500 skills-hover group card-hover-fire relative overflow-hidden`}
                    whileHover={{ 
                      y: -10,
                      rotateY: 3,
                      rotateX: 2,
                      scale: 1.02,
                      transition: { duration: 0.4 }
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        className="p-4 gradient-primary rounded-xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg"
                        whileHover={{ rotateY: 15, rotateX: 5 }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        {category.icon}
                      </motion.div>
                      <h4 className={`${typography.h4} text-gray-900 dark:text-white font-['Inter'] font-bold`}>{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-bold font-['Inter'] tracking-wide shadow-lg"
                          whileHover={{ 
                            scale: 1.1, 
                            y: -3,
                            rotateY: 10,
                            transition: { duration: 0.3 }
                          }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: skillIndex * 0.1 + index * 0.2 }}
                          style={{ transformStyle: 'preserve-3d' }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;