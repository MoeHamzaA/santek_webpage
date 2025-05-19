import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  Code, 
  LineChart, 
  Server, 
  ShieldCheck 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'IT Staffing & Recruitment',
    description: 'We connect top tech talent with innovative companies through our specialized recruitment services.',
    icon: <Users className="w-12 h-12 text-primary-600" />,
    path: '/services#recruitment',
  },
  {
    id: 2,
    title: 'Technology Consulting',
    description: 'Strategic technology advisory services to optimize your business operations and drive growth.',
    icon: <Briefcase className="w-12 h-12 text-primary-600" />,
    path: '/services#consulting',
  },
  {
    id: 3,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your specific business needs and objectives.',
    icon: <Code className="w-12 h-12 text-primary-600" />,
    path: '/services#development',
  },
  {
    id: 4,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights that drive informed business decisions.',
    icon: <LineChart className="w-12 h-12 text-primary-600" />,
    path: '/services#analytics',
  },
  {
    id: 5,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure design, migration, and management services.',
    icon: <Server className="w-12 h-12 text-primary-600" />,
    path: '/services#cloud',
  },
  {
    id: 6,
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive security assessments and solutions.',
    icon: <ShieldCheck className="w-12 h-12 text-primary-600" />,
    path: '/services#security',
  },
];

const ServiceCard: React.FC<{
  service: typeof services[0];
  index: number;
}> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 transition-all duration-300"
    >
      <div className="mb-4">{service.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <Link
        to={service.path}
        className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
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
  );
};

const ServiceSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive solutions to meet your technology and staffing needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;