import React from 'react';
import { Code2, Database, Globe, GitBranch, Book, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Programming Languages',
      skills: ['C/C++', 'JavaScript', 'Java'],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Frameworks & Web',
      skills: ['Flutter', 'Node.js', 'React', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Databases',
      skills: ['SQL', 'MongoDB', 'SQLite', 'Firebase'],
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Version Control',
      skills: ['Git', 'GitHub'],
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: 'Core Subjects',
      skills: ['Data Structures and Algorithms', 'Operating Systems', 'Networking', 'Databases'],
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Miscellaneous',
      skills: ['Problem-Solving', 'Low-Level Design', 'REST APIs'],
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="relative mb-8">
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 0.1, scale: 1 }}
                  viewport={{ once: true }}
                  src="/assets/my_image_pic.jpg"
                  alt="Subhash D"
                  className="rounded-lg shadow-xl w-full max-w-md"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-100 rounded-lg -z-10"></div>
              </div>
              <p className=" mb-6 text-gray-600 dark:text-gray-400">
                A dedicated student proficient in DSA, C++, databases, Java, and Flutter, with a strong interest in algorithms,
                data structures, and Android development. Skilled in creating user-friendly apps and optimising efficiency through DSA.
                Passionate about backend development, continuously expanding skills to tackle coding challenges effectively.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid gap-6"
            >
              <h3 className="text-2xl font-bold mb-4">Skills & Expertise</h3>
              <div className="grid gap-6 dark:bg-gray-900  text-gray-700 dark:text-gray-300 ">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow dark:bg-gray-800 dark:text-gray-200"
                  >
                    <div className="flex items-center gap-4 mb-4  ">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        {category.icon}
                      </div>
                      <h4 className="font-semibold text-lg">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 ">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm dark:bg-gray-900 dark:text-gray-200"
                        >
                          {skill}
                        </span>
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