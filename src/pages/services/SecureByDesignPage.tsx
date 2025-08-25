import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  Lock,
  Eye,
  FileText,
  CheckCircle,
  ArrowRight,
  Clock,
  TrendingUp,
  Target,
  Users,
  AlertTriangle,
  Zap
} from 'lucide-react';
import CtaSection from '../../components/home/CtaSection';

const SecureByDesignPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Secure-by-Design - Compliance & Security | Santek Micro Solutions';
  }, []);

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: 'PHIPA/PIPEDA Compliance Support',
      description: 'Built-in compliance features to meet Canadian privacy regulations and protect sensitive data.',
      benefits: ['Automatic compliance checks', 'Regulatory reporting', 'Privacy impact assessments']
    },
    {
      icon: <Lock className="h-8 w-8 text-primary-600" />,
      title: 'Role-Based Access Controls',
      description: 'Granular access management with role-based permissions to ensure data security and privacy.',
      benefits: ['Fine-grained permissions', 'User activity monitoring', 'Secure authentication']
    },
    {
      icon: <Eye className="h-8 w-8 text-primary-600" />,
      title: 'Logging & Audit Trails',
      description: 'Comprehensive logging and audit capabilities to track all system activities and maintain compliance.',
      benefits: ['Complete activity logs', 'Audit trail generation', 'Compliance reporting']
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-primary-600" />,
      title: 'Incident Response Planning',
      description: 'Proactive incident response planning and automated alerting for security and compliance incidents.',
      benefits: ['Automated incident detection', 'Response workflows', 'Recovery procedures']
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-primary-600" />,
      title: 'Enhanced Security',
      description: 'Protect sensitive data with enterprise-grade security features'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary-600" />,
      title: 'Regulatory Compliance',
      description: 'Meet PHIPA, PIPEDA, and other regulatory requirements automatically'
    },
    {
      icon: <Eye className="h-6 w-6 text-primary-600" />,
      title: 'Audit Readiness',
      description: 'Maintain complete audit trails and compliance documentation'
    },
    {
      icon: <Zap className="h-6 w-6 text-primary-600" />,
      title: 'Risk Mitigation',
      description: 'Reduce security and compliance risks with proactive monitoring'
    }
  ];

  const useCases = [
    {
      title: 'Healthcare Organizations',
      description: 'Meet PHIPA requirements and protect patient data with secure-by-design features.',
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: 'Financial Services',
      description: 'Ensure regulatory compliance and protect financial data with advanced security.',
      icon: <Lock className="h-5 w-5" />
    },
    {
      title: 'Government Agencies',
      description: 'Maintain security clearances and compliance with government regulations.',
      icon: <Eye className="h-5 w-5" />
    },
    {
      title: 'Enterprise Companies',
      description: 'Protect corporate data and meet industry-specific compliance requirements.',
      icon: <FileText className="h-5 w-5" />
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
                <Shield className="h-12 w-12 text-primary-300" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Secure-by-Design</h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Compliance & Security Add-On
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Built-in security and compliance features to protect your data and meet regulatory requirements 
              with enterprise-grade security controls and automated compliance monitoring.
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
                Security & Compliance Built-In
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Secure-by-Design is an add-on security and compliance package that provides enterprise-grade 
                protection for your data and automated compliance monitoring for regulatory requirements.
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
                  Organizations face increasing security and compliance challenges:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Complex regulatory requirements (PHIPA, PIPEDA, etc.)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Data breaches and security vulnerabilities
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Manual compliance monitoring and reporting
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Lack of audit trails and incident response
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
                  Secure-by-Design provides comprehensive protection:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Automated compliance monitoring and reporting
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Enterprise-grade security controls and encryption
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Complete audit trails and activity logging
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Proactive incident detection and response
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
              Comprehensive security and compliance features designed to protect your data and meet regulatory requirements
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
              Why Choose Secure-by-Design?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Protect your organization with enterprise-grade security and automated compliance features
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
              Organizations that need enhanced security and compliance features
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
                Ready to Enhance Your Security?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Protect your organization with enterprise-grade security and compliance features
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

export default SecureByDesignPage;
