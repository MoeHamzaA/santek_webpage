import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Heart,
  Calendar,
  FileText,
  DollarSign,
  Bell,
  Users,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
  TrendingUp
} from 'lucide-react';
import CtaSection from '../../components/home/CtaSection';

const ClinicFlowPage: React.FC = () => {
  useEffect(() => {
    document.title = 'ClinicFlow™ - Healthcare Automation | Santek Micro Solutions';
  }, []);

  const features = [
    {
      icon: <FileText className="h-8 w-8 text-primary-600" />,
      title: 'Patient Intake & Digital Forms',
      description: 'Streamline patient registration with intelligent digital forms that auto-populate and validate information in real-time.',
      benefits: ['Reduced wait times', 'Improved data accuracy', 'Enhanced patient experience']
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary-600" />,
      title: 'Smart Scheduling + No-Show Prevention',
      description: 'AI-powered scheduling system that optimizes appointment slots and reduces no-shows through intelligent reminders.',
      benefits: ['Increased appointment efficiency', 'Reduced no-show rates', 'Better resource utilization']
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary-600" />,
      title: 'Billing & Insurance Pre-Checks',
      description: 'Automated insurance verification and billing processes to ensure accurate claims and faster payments.',
      benefits: ['Faster claim processing', 'Reduced billing errors', 'Improved cash flow']
    },
    {
      icon: <Bell className="h-8 w-8 text-primary-600" />,
      title: 'Automated Follow-Up Reminders',
      description: 'Intelligent reminder system for appointments, medications, and follow-up care to improve patient outcomes.',
      benefits: ['Better patient compliance', 'Improved health outcomes', 'Reduced missed appointments']
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-primary-600" />,
      title: 'Time Savings',
      description: 'Reduce administrative tasks by up to 70% with automated workflows'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary-600" />,
      title: 'Increased Revenue',
      description: 'Improve billing accuracy and reduce claim denials by 40%'
    },
    {
      icon: <Users className="h-6 w-6 text-primary-600" />,
      title: 'Better Patient Experience',
      description: 'Streamlined processes lead to happier patients and better reviews'
    },
    {
      icon: <Shield className="h-6 w-6 text-primary-600" />,
      title: 'Compliance Ready',
      description: 'Built-in HIPAA compliance and security features'
    }
  ];

  const useCases = [
    {
      title: 'Medical Clinics',
      description: 'Streamline patient flow from check-in to check-out with integrated automation.',
      icon: <Heart className="h-5 w-5" />
    },
    {
      title: 'Dental Practices',
      description: 'Automate appointment scheduling, reminders, and billing processes.',
      icon: <Calendar className="h-5 w-5" />
    },
    {
      title: 'Specialty Practices',
      description: 'Custom workflows for dermatology, cardiology, and other specialties.',
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: 'Multi-Location Networks',
      description: 'Centralized management with location-specific customization.',
      icon: <Users className="h-5 w-5" />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-950 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-white/5"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-primary-600/20 p-4 rounded-full">
                <Heart className="h-12 w-12 text-primary-300" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">ClinicFlow™</h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Healthcare Automation Platform
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Transform your healthcare practice with intelligent automation that streamlines patient management, 
              scheduling, and administrative tasks while improving patient outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Revolutionize Your Healthcare Practice
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                ClinicFlow™ is a comprehensive healthcare automation platform designed to streamline every aspect 
                of your practice operations, from patient intake to billing and follow-up care.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">The Challenge</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Healthcare practices face numerous operational challenges:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Manual patient registration processes causing long wait times
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    High no-show rates affecting practice efficiency
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Billing errors and delayed insurance claims
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Inconsistent follow-up care and patient communication
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">The Solution</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  ClinicFlow™ provides intelligent automation that:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Automates patient intake and form processing
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Optimizes scheduling and reduces no-shows
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Streamlines billing and insurance verification
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Ensures consistent patient follow-up care
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Key Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive automation tools designed specifically for healthcare practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose ClinicFlow™?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transform your practice with measurable improvements in efficiency, revenue, and patient satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Perfect For
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Healthcare practices of all sizes and specialties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg mr-3">
                    {useCase.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Practice?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of healthcare practices that have already revolutionized their operations with ClinicFlow™
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-primary-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300">
                  Schedule Demo
                </button>
                <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold rounded-lg transition-colors duration-300">
                  Get Quote
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClinicFlowPage;
