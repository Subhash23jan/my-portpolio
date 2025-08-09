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
      title: 'Programming Languages',
      skills: ['C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'Python (basic)'],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Frameworks & Web',
      skills: ['Flutter', 'Node.js', 'React', 'Spring Boot', 'Armeria', 'Express.js', 'Tailwind CSS', 'HTML', 'CSS'],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Databases',
      skills: ['SQL (MySQL, PostgreSQL)', 'MongoDB', 'SQLite', 'Firebase', 'NoSQL concepts', 'DSL contexts'],
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Development Tools',
      skills: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'Maven', 'Gradle', 'VS Code', 'IntelliJ IDEA'],
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: 'Core Subjects',
      skills: ['Data Structures & Algorithms', 'Operating Systems', 'Networking', 'Databases', 'Low-Level Design', 'Object-Oriented Programming'],
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Testing & Quality',
      skills: ['JUnit (including parameterized tests)', 'Mocking', 'Spotless plugin', 'Clean Code practices'],
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Cloud & DevOps Basics',
      skills: ['CI/CD pipelines', 'Containerization with Docker'],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Miscellaneous',
      skills: ['Problem-Solving', 'REST APIs', 'Domain-Driven Design (DDD)', 'RLHF (Reinforcement Learning from Human Feedback)', 'Timezone-aware programming', 'Debugging & Refactoring techniques'],
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
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    src="/assets/my_images/batman.jpg"
                    alt="Subhash D"
                    className="rounded-xl shadow-xl w-full max-w-md border-2 border-gray-200 dark:border-gray-700"
                  />
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl -z-10 opacity-20"></div>
                </motion.div>
              </div>
              
              <motion.div 
                className={`${layout.card} text-center modern-hover card-hover-fire`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
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
              <h3 className={`${typography.h3} mb-6`}>Skills & Expertise</h3>
              <div className="grid gap-6">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`${layout.card} hover:shadow-xl transition-all duration-300 skills-hover group card-hover-fire`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 gradient-primary rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                      <h4 className={`${typography.h4} text-gray-900 dark:text-white`}>{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
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