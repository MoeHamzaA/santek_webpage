import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary-950 to-primary-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-white/5"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-40 flex flex-col items-center">
        <motion.h1 
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Expert Tech Consulting & <br className="hidden md:block" />
          <span className="text-secondary-400">Recruitment Solutions</span>
        </motion.h1>
        
        <motion.p 
          className="mt-6 max-w-2xl text-center text-lg text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Connecting innovative businesses with exceptional tech talent and providing strategic technology solutions to drive growth.
        </motion.p>
        
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link 
            to="/services" 
            className="px-8 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center"
          >
            Our Services
            <ChevronRight size={16} className="ml-1" />
          </Link>
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-transparent hover:bg-white/10 border border-white text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center"
          >
            Get in Touch
          </Link>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
            <div className="mt-2 text-sm text-gray-300">Clients Served</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
            <div className="mt-2 text-sm text-gray-300">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">2,000+</div>
            <div className="mt-2 text-sm text-gray-300">Successful Placements</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">98%</div>
            <div className="mt-2 text-sm text-gray-300">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;