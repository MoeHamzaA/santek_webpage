import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// We'll use company logos from a placeholder service
const clients = [
  { id: 1, name: 'Innovashift', logo: '/innovashift.png' },
  { id: 2, name: 'Desjardins', logo: '/Desjardins_Group_logo.svg.png' },
  { id: 3, name: 'AK', logo: '/AK-Website-Logo3.png' },
  { id: 4, name: 'Sun Life', logo: '/Sun-Life-Financial-Logo.png' },
];

const clientStories = [
  {
    id: 1,
    company: 'Global Financial Corp',
    industry: 'Financial Services',
    challenge: 'Multiple security breaches exposing customer financial data',
    solution: 'Comprehensive penetration testing and security infrastructure redesign',
    outcome: 'Reduced security vulnerabilities by 78% and achieved full compliance with financial regulations',
    contact: {
      name: 'Sarah Johnson',
      title: 'CTO',
      avatar: 'SJ'
    }
  },
  {
    id: 2,
    company: 'TechForward Solutions',
    industry: 'Technology',
    challenge: 'Difficulty scaling engineering team while maintaining quality standards',
    solution: 'Strategic talent acquisition and team building services',
    outcome: 'Built a world-class engineering team of 50+ developers in 6 months with 95% retention rate',
    contact: {
      name: 'Michael Chen',
      title: 'VP of Engineering',
      avatar: 'MC'
    }
  },
  {
    id: 3,
    company: 'Healthcare Innovations',
    industry: 'Healthcare',
    challenge: 'Legacy systems causing operational inefficiencies and compliance risks',
    solution: 'Digital transformation and modern technology implementation',
    outcome: 'Improved operational efficiency by 60% and achieved 100% regulatory compliance',
    contact: {
      name: 'Emily Rodriguez',
      title: 'CIO',
      avatar: 'ER'
    }
  }
];

const ClientsSection: React.FC = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % clientStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + clientStories.length) % clientStories.length);
  };

  const goToStory = (index: number) => {
    setCurrentStory(index);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Partnering with companies from startups to Fortune 500
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="bg-blue-50 dark:bg-gray-800 border border-blue-100 dark:border-gray-700 rounded-xl shadow-md p-6 flex items-center justify-center w-full h-28">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-16 max-w-[120px] object-contain"
                  style={{ filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.10))' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Success Stories Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Client Success Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Discover how Santek Micro Solutions has helped companies across industries strengthen their technology and talent strategies.
            </motion.p>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevStory}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </button>
            
            <button
              onClick={nextStory}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </button>

            {/* Main Story Content */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 md:p-12 mx-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Company and Industry Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {clientStories[currentStory].company}
                      </h3>
                      <p className="text-lg text-primary-600 dark:text-primary-400">
                        {clientStories[currentStory].industry}
                      </p>
                    </div>
                    <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium">
                      Case Study
                    </div>
                  </div>

                  {/* Three Column Structure */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3">Challenge</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {clientStories[currentStory].challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3">Solution</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {clientStories[currentStory].solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3">Outcome</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {clientStories[currentStory].outcome}
                      </p>
                    </div>
                  </div>

                  {/* Client Contact */}
                  <div className="flex items-center">
                    <div className="bg-primary-100 dark:bg-primary-900/30 w-12 h-12 rounded-full flex items-center justify-center font-bold text-primary-600 dark:text-primary-400 mr-4">
                      {clientStories[currentStory].contact.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {clientStories[currentStory].contact.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {clientStories[currentStory].contact.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {clientStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStory(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStory
                      ? 'bg-primary-600 dark:bg-primary-400'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;