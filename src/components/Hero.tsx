import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="py-4 relative min-h-screen flex items-center overflow-hidden ">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600"
      />
      
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-white"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block px-4 py-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-full text-sm font-medium mb-6"
            >
              <Code2 className="inline-block w-4 h-4 mr-2" />
              Full Stack Developer
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">Subhash D</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl"
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
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-opacity-90 transition-all group"
              >
                Get in touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-700 bg-opacity-30 text-white rounded-lg font-medium hover:bg-opacity-40 transition-all border border-white border-opacity-20"
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
              {[
                { icon: <Github size={24} />, href: 'https://github.com/subhash23jan' },
                { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/subhash-d' },
                { icon: <Mail size={24} />, href: 'mailto:subhash613d@gmail.com' }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={item.href}
                  className="p-3 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </motion.a>
              ))}
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
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl transform rotate-6"
            />
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/public/subhash.jpg"
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