import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-secondary-600 to-secondary-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold mb-4"
          >
            Ready to Transform Your Tech Strategy?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl mb-8"
          >
            Let's discuss how Santek Micro Solutions can help you find the right talent and technology solutions for your business.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-secondary-600 hover:bg-gray-100 font-medium rounded-md transition-colors duration-300"
            >
              Contact Us Today
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 bg-transparent hover:bg-white/10 border border-white text-white font-medium rounded-md transition-colors duration-300"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;