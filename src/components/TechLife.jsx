import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const techLifeImages = [
  {
    url: '/assets/github.png',
    title: 'Github',
    description: 'Explored the world of development by contributing to open-source projects on GitHub.'
  },
  {
    url: '/assets/leetcode.png',
    title: 'Leetcode',
    description: 'Embarking on my journey in Competitive Programming through Leetcode challenges.'
  },
  {
    url: '/assets/first_speech.jpg',
    title: 'First Speech In College',
    description: 'Delivered my first college speech on the trending topic: "The College Dropout Phenomenon."'
  },
  {
    url: '/assets/phaseshift _event.jpg',
    title: 'Phaseshift Event Participation',
    description: 'Competed in a tech competition and advanced to the second round, showcasing my skills.'
  },
  // {
  //   url: '/assets/hackathon.jpg',
  //   title: 'Hackathon Preparation',
  //   description: 'Collaborated with peers to brainstorm and build innovative solutions for a hackathon.'
  // },
  {
    url: '/assets/IISC.jpg',
    title: 'IISc Workshop and Technical Open Day',
    description: 'Attended technical workshops and gained valuable insights at the IISc Technical Open Day.'
  },
  {
    url: '/assets/anchoring.jpg',
    title: 'Anchoring for Kannada Club',
    description: 'Hosted various events and engaged with the audience as the anchor for the Kannada Club.'
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
    <section className="py-20 bg-gray-700 dark:bg-gray-900 bg" id="tech-life">
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
  className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 justify-center mx-auto w-4/5"
>
  {techLifeImages.map((image, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-xl transform transition-all duration-500 cursor-pointer group bg-gray-800 border-2 border-transparent hover:border-gray-700 "
      onClick={() => setCurrentImageIndex(index)}
    >
      {/* Image Section with larger padding */}
      <div className="relative h-96 overflow-hidden rounded-xl p-6 hover:scale-105">
        <img
          src={image.url}
          alt={image.title}
          className="p-4 w-full h-full object-cover"
        />
      </div>

      {/* Card Content with more padding */}
      <div className="p-6 bg-gray-800 text-white shadow-md rounded-b-xl relative z-10 text-center">
        <motion.p
          className="text-base text-gray-200 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          {image.description}
        </motion.p>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-700/50 to-transparent opacity-0" />
    </motion.div>
  ))}
</motion.div>












      </div>
    </section>
  );
};

export default TechLife;