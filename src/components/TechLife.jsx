import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const techLifeImages = [
  {
    url: '/assets/github.png',
    title: 'Github',
    description: 'Diving into the developement ".'
  },
  {
    url: '/assets/leetcode.png',
    title: 'Leetcode',
    description: 'Newbie in CP'
  },
  {
    url: '/assets/first_speech.jpg',
    title: 'First Speech In College',
    description: 'Spoke on the trending topic: "College Dropout".'
  },
  {
    url: '/assets/phaseshift _event.jpg',
    title: 'Phaseshift Event Participation',
    description: 'Reached the second round in a tech competition.'
  },
  {
    url: '/assets/hackathon.jpg',
    title: 'Hackathon Preparation',
    description: 'Worked with peers to build innovative ideas.'
  },
  {
    url: '/assets/IISC.jpg',
    title: 'IISc Workshop and Technical Open Day',
    description: 'Attended workshops and shared technical insights.'
  },
  {
    url: '/assets/anchoring.jpg',
    title: 'Anchoring for Kannada Club',
    description: 'Hosted events and engaged with the audience.'
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
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800" id="tech-life">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4 sm:text-xl hover:scale-110">Professional Life In Frames</h2>
          <p className="text-gray-300 max-w-2xl mx-auto sm:text-xl hover:scale-95">
            Unfolding the Path of Continuous Learning, Software Engineering, and Innovation
          </p>
        </motion.div>

        {/* <div className="relative h-[500px] mb-12 overflow-hidden rounded-xl">
          <motion.div
            animate={{ x: `-${currentImageIndex * 100}%` }}
            transition={{ duration: 0.5 }}
            className="flex h-full"
          >
            {techLifeImages.map((image, index) => (
              <motion.div
                key={index}
                className="w-full h-full flex-shrink-0 object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                    <p className="text-gray-200">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div> */}
        
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {techLifeImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl"
              onClick={() => setCurrentImageIndex(index)}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100"
                >
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechLife;