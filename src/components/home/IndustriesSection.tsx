import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building2,
  Stethoscope,
  DollarSign,
  ShoppingBag,
  Briefcase,
  Cpu
} from 'lucide-react';

const industries = [
  {
    id: 1,
    name: 'Technology',
    icon: <Cpu className="h-12 w-12 text-secondary-500" />,
    description: 'From startups to enterprise tech companies',
    path: '/industries#technology',
  },
  {
    id: 2,
    name: 'Healthcare',
    icon: <Stethoscope className="h-12 w-12 text-secondary-500" />,
    description: 'Transforming patient care through technology',
    path: '/industries#healthcare',
  },
  {
    id: 3,
    name: 'Finance',
    icon: <DollarSign className="h-12 w-12 text-secondary-500" />,
    description: 'Fintech solutions and banking technology',
    path: '/industries#finance',
  },
  {
    id: 4,
    name: 'Retail',
    icon: <ShoppingBag className="h-12 w-12 text-secondary-500" />,
    description: 'Enhancing customer experiences through tech',
    path: '/industries#retail',
  },
  {
    id: 5,
    name: 'Manufacturing',
    icon: <Building2 className="h-12 w-12 text-secondary-500" />,
    description: 'Optimizing operations with smart technology',
    path: '/industries#manufacturing',
  },
  {
    id: 6,
    name: 'Professional Services',
    icon: <Briefcase className="h-12 w-12 text-secondary-500" />,
    description: 'Supporting consulting and service firms',
    path: '/industries#services',
  },
];

const IndustriesSection: React.FC = () => {
  return (
    <section className="py-16 bg-primary-950 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Specialized expertise across diverse industry verticals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-900/50 rounded-lg p-6 border border-primary-800 hover:border-secondary-500 transition-colors duration-300"
            >
              <div className="mb-4">
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
              <p className="text-gray-300 mb-4">{industry.description}</p>
              <Link
                to={industry.path}
                className="text-secondary-400 hover:text-secondary-300 inline-flex items-center font-medium"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;