import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users,
  Search,
  Calendar,
  FileText,
  Brain,
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
  TrendingUp,
  Target,
  Shield
} from 'lucide-react';
import CtaSection from '../../components/home/CtaSection';

const TalentFlowPage: React.FC = () => {
  useEffect(() => {
    document.title = 'TalentFlow™ - HR & Recruitment Automation | Santek Micro Solutions';
  }, []);

  const features = [
    {
      icon: <Search className="h-8 w-8 text-primary-600" />,
      title: 'Automated Job Posting & Resume Parsing',
      description: 'Intelligent job posting across multiple platforms with AI-powered resume parsing that extracts key information automatically.',
      benefits: ['Faster candidate sourcing', 'Improved data accuracy', 'Reduced manual work']
    },
    {
      icon: <Brain className="h-8 w-8 text-primary-600" />,
      title: 'AI-Powered Candidate Shortlisting',
      description: 'Advanced AI algorithms that analyze candidate profiles and match them to job requirements with high precision.',
      benefits: ['Better candidate matches', 'Reduced time to hire', 'Improved quality of hires']
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary-600" />,
      title: 'Interview Scheduling Automation',
      description: 'Seamless interview coordination with automated scheduling, reminders, and calendar integration for all stakeholders.',
      benefits: ['Eliminated scheduling conflicts', 'Faster interview process', 'Better candidate experience']
    },
    {
      icon: <FileText className="h-8 w-8 text-primary-600" />,
      title: 'Digital Onboarding Workflows',
      description: 'Streamlined onboarding process with digital document management, task automation, and progress tracking.',
      benefits: ['Faster time to productivity', 'Reduced paperwork', 'Consistent onboarding experience']
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-primary-600" />,
      title: 'Faster Hiring',
      description: 'Reduce time-to-hire by up to 60% with automated workflows'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary-600" />,
      title: 'Better Quality Hires',
      description: 'AI-powered matching improves candidate quality by 40%'
    },
    {
      icon: <Target className="h-6 w-6 text-primary-600" />,
      title: 'Cost Reduction',
      description: 'Lower recruitment costs by automating manual processes'
    },
    {
      icon: <Shield className="h-6 w-6 text-primary-600" />,
      title: 'Compliance Ready',
      description: 'Built-in compliance features for hiring regulations'
    }
  ];

  const useCases = [
    {
      title: 'Enterprise Companies',
      description: 'Scale recruitment efforts across multiple departments and locations.',
      icon: <Users className="h-5 w-5" />
    },
    {
      title: 'Startups & Scale-ups',
      description: 'Build teams quickly while maintaining quality and culture fit.',
      icon: <Zap className="h-5 w-5" />
    },
    {
      title: 'Recruitment Agencies',
      description: 'Manage multiple client requirements with automated workflows.',
      icon: <Search className="h-5 w-5" />
    },
    {
      title: 'HR Departments',
      description: 'Streamline internal hiring processes and improve efficiency.',
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
                <Users className="h-12 w-12 text-primary-300" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">TalentFlow™</h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              HR & Recruitment Automation Platform
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Revolutionize your hiring process with AI-powered recruitment automation that finds, 
              engages, and onboards top talent efficiently while reducing time-to-hire and costs.
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
                Transform Your Recruitment Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                TalentFlow™ is a comprehensive recruitment automation platform that leverages AI to streamline 
                every step of the hiring process, from job posting to candidate onboarding.
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
                  Modern recruitment faces significant challenges:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Manual resume screening consuming hours of HR time
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Long time-to-hire affecting business growth
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Poor candidate experience leading to drop-offs
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Inconsistent hiring processes across teams
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
                  TalentFlow™ provides intelligent automation that:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Automates resume parsing and candidate screening
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Reduces time-to-hire by up to 60%
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Enhances candidate experience with seamless processes
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Standardizes hiring workflows across the organization
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
              Comprehensive recruitment automation tools designed to streamline your hiring process
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
              Why Choose TalentFlow™?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transform your recruitment process with measurable improvements in efficiency, quality, and cost
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
              Organizations of all sizes looking to optimize their recruitment process
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
                Ready to Transform Your Hiring Process?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Join companies that have already revolutionized their recruitment with TalentFlow™
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

export default TalentFlowPage;
