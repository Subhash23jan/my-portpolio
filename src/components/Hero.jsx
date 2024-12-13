import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, ArrowRight } from 'lucide-react';

const AnimatedText = ({ text }) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.6 }
    }
  };
  
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className="inline-block"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const SocialIcon = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    className="p-3 bg-white/10 dark:bg-gray-800/30 rounded-lg hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all group relative"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="text-white dark:text-gray-200" size={24} />
    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs whitespace-nowrap bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-2 py-1 rounded transition-opacity">
      {label}
    </span>
  </motion.a>
);

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-black/10 dark:bg-black/40"
      />
      
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-pink-300/70 dark:bg-pink-500/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300/70 dark:bg-yellow-500/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-blue-300/70 dark:bg-blue-500/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-white dark:text-gray-100"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block px-4 py-2 bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-full text-sm font-medium mb-6"
            >
              <Code2 className="inline-block w-4 h-4 mr-2" />
              Full Stack Developer
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <AnimatedText text="Subhash D" />
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl text-gray-100 dark:text-gray-200 mb-8 leading-relaxed max-w-2xl"
            >
              A dedicated student proficient in DSA, C++, databases, Java, and Flutter, with a strong interest in algorithms, data structures, and Android development.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-lg font-medium hover:bg-opacity-90 transition-all group"
              >
                Get in touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-700/30 dark:bg-indigo-600/30 text-white rounded-lg font-medium hover:bg-opacity-40 transition-all border border-white/20"
              >
                View Projects
              </motion.a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex gap-6"
            >
              <SocialIcon 
                href="https://github.com/subhash23jan"
                icon={Github}
                label="GitHub"
              />
              <SocialIcon 
                href="https://www.linkedin.com/in/subhash-d"
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialIcon 
                href="mailto:subhash613d@gmail.com"
                icon={Mail}
                label="Email"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 relative max-w-md"
          >
            <motion.div 
              animate={{ rotate: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 dark:from-pink-600 dark:to-purple-800 rounded-2xl transform rotate-6"
            />
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/my_image.jpg"
              alt="Subhash D"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;