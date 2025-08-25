import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import {
  Users,
  Briefcase,
  Brain,
  Rocket,
  UserCheck,
  Users2,
  Target,
  ArrowRight,
  Shield,
  Lock,
  Eye,
  Heart,
  FileText,
  Phone,
  Zap,
  Settings
} from 'lucide-react';

const coreServices = [
  {
    id: 'clinicflow',
    title: 'ClinicFlow™',
    subtitle: 'Healthcare Automation',
    description: 'Streamline healthcare operations with intelligent automation for patient management, scheduling, and administrative tasks.',
    icon: <Heart className="w-12 h-12 text-primary-600" />,
    path: '/services/clinicflow',
    features: [
      'Patient intake & digital forms',
      'Smart scheduling + no-show prevention',
      'Billing & insurance pre-checks',
      'Automated follow-up reminders'
    ],
    relatedServices: ['TalentFlow™', 'FinOpsFlow™']
  },
  {
    id: 'talentflow',
    title: 'TalentFlow™',
    subtitle: 'HR & Recruitment Automation',
    description: 'Revolutionize your hiring process with AI-powered recruitment automation that finds and engages top talent efficiently.',
    icon: <Users className="w-12 h-12 text-primary-600" />,
    path: '/services/talentflow',
    features: [
      'Automated job posting & resume parsing',
      'AI-powered candidate shortlisting',
      'Interview scheduling automation',
      'Digital onboarding workflows'
    ],
    relatedServices: ['ClinicFlow™', 'AI Consulting']
  },
  {
    id: 'finopsflow',
    title: 'FinOpsFlow™',
    subtitle: 'Back-Office Automation',
    description: 'Transform your financial operations with intelligent automation for accounts, expenses, and document management.',
    icon: <FileText className="w-12 h-12 text-primary-600" />,
    path: '/services/finopsflow',
    features: [
      'Accounts payable/receivable automation',
      'Expense approvals & reporting dashboards',
      'Document digitization & extraction',
      'Secure-by-Design compliance'
    ],
    relatedServices: ['ClinicFlow™', 'Secure-by-Design']
  }
];

const additionalServices = [
  {
    id: 'secure-by-design',
    title: 'Secure-by-Design',
    subtitle: 'Compliance & Security Add-On',
    description: 'Built-in security and compliance features to protect your data and meet regulatory requirements.',
    icon: <Shield className="w-8 h-8 text-primary-600" />,
    path: '/services/secure-by-design',
    features: [
      'PHIPA/PIPEDA compliance support',
      'Role-based access controls',
      'Logging & audit trails',
      'Incident response planning'
    ]
  },
  {
    id: 'ai-calling',
    title: 'AI Automated Calling',
    subtitle: 'Intelligent Communication',
    description: 'Enhance customer engagement with AI-powered automated calling for appointments, reminders, and follow-ups.',
    icon: <Phone className="w-8 h-8 text-primary-600" />,
    path: '/services/ai-calling',
    features: [
      'Appointment confirmations & booking',
      'Reminders & rescheduling',
      'Call follow-ups (feedback, invoices)',
      'Natural language processing'
    ]
  },
  {
    id: 'ai-consulting',
    title: 'AI Consulting Services',
    subtitle: 'Strategic Implementation',
    description: 'Expert guidance to optimize your business processes and implement cutting-edge AI solutions.',
    icon: <Brain className="w-8 h-8 text-primary-600" />,
    path: '/services/ai-consulting',
    features: [
      'AI strategy development',
      'Process optimization',
      'Technology implementation',
      'Ongoing support & training'
    ]
  }
];

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services | Santek Micro Solutions';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Main Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-6 rounded-full border-2 border-primary-200 dark:border-primary-700">
                <Target className="w-16 h-16 text-primary-600" />
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Intelligent Automation Solutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transform your business operations with our comprehensive suite of AI-powered automation solutions designed for healthcare, HR, and financial services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our primary automation platforms designed to streamline your most critical business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700"
              >
                {/* Service Icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                    {service.icon}
                  </div>
                </div>

                {/* Service Title & Subtitle */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {service.subtitle}
                  </p>
                </div>

                {/* Service Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="text-primary-600 mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Related Services */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm">Related Services:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.relatedServices.map((relatedService, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-700 dark:text-gray-300"
                      >
                        {relatedService}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Link */}
                <div className="mb-4">
                  <Link
                    to={service.path}
                    className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center transition-colors duration-300 text-sm"
                  >
                    Learn More
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 text-sm">
                    Get Quote
                  </button>
                  <button className="flex-1 px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-300 text-sm">
                    Schedule Demo
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Specialized solutions and add-ons to enhance your automation capabilities and meet specific business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="mb-4">
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="text-primary-600 mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.path}
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center text-sm"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;