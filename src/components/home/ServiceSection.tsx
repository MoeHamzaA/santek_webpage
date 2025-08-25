import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  FileText, 
  Shield, 
  Phone, 
  Brain 
} from 'lucide-react';

const coreServices = [
  {
    id: 1,
    title: 'ClinicFlow™',
    subtitle: 'Healthcare Automation',
    description: 'Transform your healthcare practice with intelligent automation that streamlines patient management, scheduling, and administrative tasks.',
    icon: <Heart className="w-12 h-12 text-primary-600" />,
    path: '/services/clinicflow',
    features: ['Patient intake & digital forms', 'Smart scheduling + no-show prevention', 'Billing & insurance pre-checks', 'Automated follow-up reminders']
  },
  {
    id: 2,
    title: 'TalentFlow™',
    subtitle: 'HR & Recruitment Automation',
    description: 'Revolutionize your hiring process with AI-powered automation that finds, screens, and connects you with top talent.',
    icon: <Users className="w-12 h-12 text-primary-600" />,
    path: '/services/talentflow',
    features: ['Automated job posting & resume parsing', 'AI-powered candidate shortlisting', 'Interview scheduling automation', 'Digital onboarding workflows']
  },
  {
    id: 3,
    title: 'FinOpsFlow™',
    subtitle: 'Back-Office Automation',
    description: 'Streamline your financial operations with intelligent automation that handles accounts, expenses, and document processing.',
    icon: <FileText className="w-12 h-12 text-primary-600" />,
    path: '/services/finopsflow',
    features: ['Accounts payable/receivable automation', 'Expense approvals & reporting dashboards', 'Document digitization & extraction', 'Secure financial workflows']
  },
];

const additionalServices = [
  {
    id: 4,
    title: 'Secure-by-Design',
    subtitle: 'Compliance & Security',
    description: 'Built-in security and compliance features to protect your data and meet regulatory requirements.',
    icon: <Shield className="w-10 h-10 text-primary-600" />,
    path: '/services/secure-by-design',
  },
  {
    id: 5,
    title: 'AI Automated Calling',
    subtitle: 'Intelligent Communication',
    description: 'Automate appointment confirmations, reminders, and follow-ups with intelligent voice systems.',
    icon: <Phone className="w-10 h-10 text-primary-600" />,
    path: '/services/ai-calling',
  },
  {
    id: 6,
    title: 'AI Consulting Services',
    subtitle: 'Strategic Implementation',
    description: 'Expert guidance to implement AI solutions that transform your business operations.',
    icon: <Brain className="w-10 h-10 text-primary-600" />,
    path: '/services/ai-consulting',
  },
];

const CoreServiceCard: React.FC<{
  service: typeof coreServices[0];
  index: number;
}> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl p-8 transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <div className="mb-6">{service.icon}</div>
      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
      <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">{service.subtitle}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
      
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">Key Features:</h4>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
              <span className="text-primary-600 mr-2 mt-1">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <Link
        to={service.path}
        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium inline-flex items-center"
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

const AdditionalServiceCard: React.FC<{
  service: typeof additionalServices[0];
  index: number;
}> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg p-6 transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <div className="mb-4">{service.icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
      <p className="text-primary-600 dark:text-primary-400 font-medium mb-3 text-sm">{service.subtitle}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
      <Link
        to={service.path}
        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium inline-flex items-center"
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
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Comprehensive solutions to meet your technology and staffing needs
          </motion.p>
        </div>

        {/* Core Services */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-2 text-gray-900 dark:text-white"
            >
              Core Services
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              Our primary automation platforms designed to streamline your most critical business operations
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <CoreServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-2 text-gray-900 dark:text-white"
            >
              Additional Services
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              Specialized solutions to enhance your automation capabilities
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <AdditionalServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
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