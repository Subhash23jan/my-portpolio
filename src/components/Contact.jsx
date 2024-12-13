import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactCard = ({ icon: Icon, title, value, href, onClick }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-gray-800 dark:bg-gray-700 rounded-lg"
  >
    <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="font-semibold mb-2 text-white">{title}</h3>
    <motion.a
      href={href}
      onClick={onClick}
      className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
    >
      {value}
    </motion.a>
  </motion.div>
);

const Contact = () => {
  const handlePhoneClick = (e) => {
    e.preventDefault();
    window.location.href = 'tel:+919019865449';
  };

  return (
    <section className="py-20 bg-gray-900 dark:bg-gray-800 text-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <ContactCard 
              icon={Mail}
              title="Email"
              value="subhash613d@gmail.com"
              href="mailto:subhash613d@gmail.com"
            />
            <ContactCard 
              icon={Phone}
              title="Phone"
              value="+91 9019865449"
              href="tel:+919019865449"
              onClick={handlePhoneClick}
            />
            <ContactCard 
              icon={MapPin}
              title="Location"
              value="Bengaluru, Karnataka"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;