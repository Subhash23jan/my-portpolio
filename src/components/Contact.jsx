import React from 'react';
import { Mail, MapPin, Phone, Zap, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { layout, typography } from '../utils/theme';

const ContactCard = ({ icon: Icon, title, value, href, onClick }) => (
  <motion.div 
    whileHover={{ scale: 1.05, y: -5 }}
    className={`${layout.card} group hover:shadow-xl transition-all duration-500 card-hover-fire modern-hover`}
  >
    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className={`${typography.h4} mb-2 text-gray-900 dark:text-white text-center`}>{title}</h3>
    <motion.a
      href={href}
      onClick={onClick}
      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-center block group-hover:scale-105"
      whileHover={{ scale: 1.05 }}
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
    <section className={`${layout.section} gradient-dark text-white`} id="contact">
      <div className={layout.container}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header text-white"
          >
            Get In Touch
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${typography.body} text-gray-300 mb-12 max-w-2xl mx-auto`}
          >
            Ready to collaborate on exciting projects? Let's connect and bring your ideas to life!
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-8 mb-12"
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={`${layout.card} max-w-2xl mx-auto card-hover-fire modern-hover`}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-blue-400" />
              <h3 className={`${typography.h3} text-gray-900 dark:text-white`}>
                Let's Start a Conversation
              </h3>
            </div>
            
            <p className={`${typography.body} text-gray-600 dark:text-gray-300 mb-6`}>
              Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
              I'd love to hear from you. Let's create something amazing together!
            </p>
            
            <motion.a
              href="mailto:subhash613d@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-white rounded-xl font-medium hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gray-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-4 h-4" />
              Send Message
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;