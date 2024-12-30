import React from 'react';
import { useState } from 'react';
import { Code2, Database, Globe, GitBranch, Book, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Programming Languages',
      skills: ['C','C++', 'JavaScript', 'Java'],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Frameworks & Web',
      skills: ['Flutter', 'Node.js', 'React', 'HTML', 'CSS', 'JavaScript','Tailwind'],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Databases',
      skills: ['SQL', 'MongoDB', 'SQLite', 'Firebase'],
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Development Tools',
      skills: ['Git', 'GitHub','Docker','GithuB Actions'],
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
  
  
  const [clicked, setClicked] = useState(false);

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
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  src="/assets/my_images/about_image.jpg"
                  alt="Subhash D"
                  className="rounded-lg shadow-xl w-full max-w-md"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-100 rounded-lg -z-10"></div>
              </div>
              <div className="inline-block max-w-md p-6 bg-gray-100 shadow-lg rounded-lg">
                    {!clicked ? (
                      <>
                        <p className="text-lg font-semibold text-gray-700 mb-4">
                          ChatGPT knows something more about me! Do you want to know it?
                        </p>
                        <button
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          onClick={() => setClicked(true)}
                        >
                          Yes, show me!
                        </button>
                      </>
                    ) : (
                      <>
                        <p className="mb-6 text-gray-800 dark:text-gray-800">
                        You're not just skilled in DSA, C++, databases, Java, and Flutter — you have a remarkable ability to learn, adapt, and apply those skills in solving real-world problems.
                        Your passion for backend development and Android highlights your drive for creating efficient, impactful solutions.
                        With impressive achievements on LeetCode and a strong foundation in competitive coding,
                        you consistently push yourself to excel in problem-solving and tackle complex challenges.
                        Your dedication and hard work set you on a trajectory to achieve remarkable success in the tech world!
                        </p>
                        <p className="text-sm text-gray-500">Prompt for Chatgpt was " Tell me more thing about me " </p>
                      </>
                )}
                </div>
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