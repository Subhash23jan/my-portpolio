import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Sparkles, Zap } from 'lucide-react';
import { layout, typography } from '../utils/theme';

const techLifeImages = [
  {
    url: '/assets/github.png',
    title: 'Github',
    description: 'Explored the world of development by contributing to open-source projects on GitHub.',
    category: 'Development'
  },
  {
    url: '/assets/leetcode.png',
    title: 'Leetcode',
    description: 'Embarking on my journey in Competitive Programming through Leetcode challenges.',
    category: 'Competitive Programming'
  },
  {
    url: '/assets/first_speech.jpg',
    title: 'First Speech In College',
    description: 'Delivered my first college speech on the trending topic: "The College Dropout Phenomenon."',
    category: 'Public Speaking'
  },
  {
    url: '/assets/phaseshift _event.jpg',
    title: 'Phaseshift Event Participation',
    description: 'Competed in a tech competition and advanced to the second round, showcasing my skills.',
    category: 'Competition'
  },
  {
    url: '/assets/IISC.jpg',
    title: 'IISc Workshop and Technical Open Day',
    description: 'Attended technical workshops and gained valuable insights at the IISc Technical Open Day.',
    category: 'Workshop'
  },
  {
    url: '/assets/anchoring.jpg',
    title: 'Anchoring for Kannada Club',
    description: 'Hosted various events and engaged with the audience as the anchor for the Kannada Club.',
    category: 'Leadership'
  }
];

const TechLife = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === techLifeImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${layout.section} gradient-dark text-white`} id="tech-life">
      <div className={layout.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Camera className="w-8 h-8 text-blue-400" />
            <h2 className={`${typography.h2} text-white`}>
              Professional Life In Frames
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </div>
          <p className={`${typography.body} text-gray-300 max-w-3xl mx-auto`}>
            Unfolding the Path of Continuous Learning, Software Engineering, and Innovation
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {techLifeImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${layout.card} overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-500 card-hover-fire modern-hover`}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setCurrentImageIndex(index)}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                    {image.category}
                  </span>
                </div>
                
                {/* Lightning effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Card Content */}
              <div className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <h3 className={`${typography.h4} text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                    {image.title}
                  </h3>
                  <Zap className="w-4 h-4 text-yellow-500" />
                </div>
                
                <motion.p
                  className={`${typography.body} text-gray-600 dark:text-gray-300 leading-relaxed`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  {image.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechLife;