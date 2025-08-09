import React, { useState } from 'react';
import { Calendar, Briefcase, Zap, Building, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { layout, animations, typography } from '../utils/theme';

const professionalExperiences = [
  {
    "title": "Software Engineer",
    "company": "Xflow Payments",
    "period": "January 2024 - Present",
    "description": "Developed new APIs and refactored legacy endpoints to support updated business logic. Implemented domain-driven logic for cross-border payouts, including time zone–sensitive scheduling and status updates. Refactored hardcoded validation logic into YAML-driven repositories for better maintainability. Worked extensively with SQL databases and Protocol Buffers (Protobuf) for reliable data exchange and persistence.",
    "location": "Bengaluru, India",
    "type": "professional",
    "tools": ["Spring Boot", "Armeria", "Java", "SQL", "Protobuf"]
  },
  {
    title: 'Software Engineer',
    company: 'Instawork',
    period: 'June 2024 - July 2024',
    description: 'Developed scalable backend APIs using Django and fixed bugs in the repository. Integrated custom bots with APIs to streamline operations and enhance efficiency. Built and deployed AI agents using Langchain to automate workflows and implement AI agent routing, reducing manual tickets by 15%.',
    location: 'Bengaluru, India',
    type: 'professional',
    tools: ["Django", "REST APIs", "Python", "Langchain", "Automation Bots"]
  },
  {
    title: 'Open Source Contributor',
    company: 'Girl-Script Summer of Code',
    period: 'May 2024 - July 2024',
    description: 'Implemented routing with Express.js, enhancing server-side navigation and API flow. Identified and fixed 25+ bugs, significantly improving stability and usability. Enhanced UI/UX of Flutter application for a seamless user experience. Worked with MongoDB and SQLite for effective backend data management. Contributed to React.js frontend by improving responsiveness and state handling.',
    location: 'Remote',
    type: 'professional',
    tools: ["Express.js", "MongoDB", "SQLite", "React.js", "Flutter"]
  },
  {
    title: 'Flutter UI Developer Intern',
    company: 'BrightInfonet',
    period: 'June 2024 - July 2024',
    description: 'Collaborated with a team of 5 to manage application development, resulting in a responsive and visually appealing mobile application. Designed and implemented responsive UI elements, improving compatibility across devices by 30%.',
    location: 'Remote',
    type: 'professional',
    tools: ["Flutter", "UI/UX Design", "Mobile Development"]
  },
  {
    title: 'Flutter Developer Intern',
    company: 'Rablo',
    period: 'April 2024 - June 2024',
    description: 'Developed scalable apps with faster performance with improvements over 12%. Integrated backend (Node.js, MongoDB), reducing loading time. Streamlined data handling for efficient database operations.',
    location: 'Noida, India',
    type: 'professional',
    tools: ["Flutter", "Node.js", "MongoDB", "REST APIs"]
  }
];

const freelanceExperiences = [
  {
    title: 'AI Evaluator & Code Reviewer',
    company: 'Freelance (Remote)',
    period: 'March 2024 - Present',
    description: 'Evaluated and optimized 150+ code-based LLM responses across multiple tech stacks including C++, Python, Java, JavaScript, HTML, and CSS. Provided in-depth code reviews and human-aligned feedback to enhance LLM accuracy and relevance. Applied Reinforcement Learning from Human Feedback (RLHF) techniques to fine-tune model behavior. Maintained a consistent quality rating of 4.6/5 for task performance and review depth.',
    location: 'Remote',
    type: 'freelance',
    tools: ["Prompt Engineering", "LLM Evaluation", "RLHF", "Python"]
  },
  {
    title: 'Frontend Developer',
    company: 'Confidential',
    period: 'March 2024 - May 2024',
    description: 'Developed responsive applications using flutter and dart. Implemented modern UI/UX designs and optimized performance. Collaborated with design team to create seamless user experiences.',
    location: 'Remote',
    type: 'freelance',
    tools: ["Flutter", "Dart", "UI/UX Design"]
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

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState('professional');

  const experiences = activeTab === 'professional' ? professionalExperiences : freelanceExperiences;

  return (
    <section className={`${layout.section} bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800`} id="experience">
      <div className={layout.container}>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          Experience
        </motion.h2>

        {/* Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-gray-100 dark:bg-gray-700 rounded-xl p-1 shadow-lg">
            <motion.button
              onClick={() => setActiveTab('professional')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'professional' 
                  ? 'tab-active' 
                  : 'tab-inactive hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Building size={18} />
              Professional
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('freelance')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'freelance' 
                  ? 'tab-active' 
                  : 'tab-inactive hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users size={18} />
              Freelance
            </motion.button>
          </div>
        </motion.div>

        {/* Experience Cards */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-4xl mx-auto"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={`${activeTab}-${index}`} 
                variants={item}
                className="relative pl-8 pb-12"
              >
                {index !== experiences.length - 1 && (
                  <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-200" />
                )}
                <div className="absolute left-0 top-0 w-8 h-8 gradient-primary rounded-full flex items-center justify-center border-2 border-gray-300 dark:border-gray-600">
                  {activeTab === 'professional' ? (
                    <Building size={16} className="text-white" />
                  ) : (
                    <Users size={16} className="text-white" />
                  )}
                </div>
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`${layout.card} ml-4 relative overflow-hidden group card-hover-fire modern-hover`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <Calendar size={16} className="text-blue-500" />
                      <span>{exp.period}</span>
                      <span className="text-gray-400 dark:text-gray-500">•</span>
                      <span className="flex items-center gap-1">
                        <Zap size={14} className="text-yellow-500" />
                        {exp.location}
                      </span>
                    </div>
                    <h3 className={`${typography.h4} mb-2 text-gray-900 dark:text-white`}>
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 flex items-center gap-2">
                      <Briefcase size={16} />
                      {exp.company}
                    </p>
                    <p className={`${typography.body} text-gray-700 dark:text-gray-300 leading-relaxed mb-4`}>
                      {exp.description}
                    </p>
                    
                    {/* Tools */}
                    {exp.tools && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.tools.map((tool, toolIndex) => (
                          <motion.span
                            key={toolIndex}
                            className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tool}
                          </motion.span>
                        ))}
                      </div>
                    )}
                    
                    {/* Type badge */}
                    <div className="mt-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'professional' 
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                          : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                      }`}>
                        {exp.type === 'professional' ? (
                          <>
                            <Building size={12} />
                            Professional
                          </>
                        ) : (
                          <>
                            <Users size={12} />
                            Freelance
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {experiences.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-500 dark:text-gray-400">
              <Briefcase size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-lg">No {activeTab} experience to show yet.</p>
              <p className="text-sm mt-2">Check back soon for updates!</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Experience;