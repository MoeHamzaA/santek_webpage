import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Target,
  Settings,
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  TrendingUp,
  Zap,
  Shield,
  FileText,
  Rocket
} from 'lucide-react';
import CtaSection from '../../components/home/CtaSection';

const AIConsultingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'AI Consulting Services - Strategic Implementation | Santek Micro Solutions';
  }, []);

  const features = [
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: 'AI Strategy Development',
      description: 'Comprehensive AI strategy planning to identify opportunities, assess readiness, and create roadmaps for implementation.',
      benefits: ['Strategic planning', 'ROI analysis', 'Technology assessment']
    },
    {
      icon: <Settings className="h-8 w-8 text-primary-600" />,
      title: 'Process Optimization',
      description: 'Analyze and optimize existing business processes to identify automation opportunities and efficiency improvements.',
      benefits: ['Process analysis', 'Automation opportunities', 'Efficiency gains']
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary-600" />,
      title: 'Technology Implementation',
      description: 'End-to-end implementation support for AI solutions, from initial setup to full deployment and integration.',
      benefits: ['Seamless integration', 'Technical expertise', 'Project management']
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Ongoing Support & Training',
      description: 'Continuous support, maintenance, and training to ensure successful adoption and maximize AI solution benefits.',
      benefits: ['24/7 support', 'User training', 'Performance optimization']
    }
  ];

  const benefits = [
    {
      icon: <Brain className="h-6 w-6 text-primary-600" />,
      title: 'Expert Guidance',
      description: 'Access to AI specialists with deep industry knowledge and technical expertise'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary-600" />,
      title: 'Measurable Results',
      description: 'Clear metrics and KPIs to track AI implementation success and ROI'
    },
    {
      icon: <Zap className="h-6 w-6 text-primary-600" />,
      title: 'Faster Implementation',
      description: 'Accelerated AI adoption with proven methodologies and best practices'
    },
    {
      icon: <Shield className="h-6 w-6 text-primary-600" />,
      title: 'Risk Mitigation',
      description: 'Minimize implementation risks with expert planning and execution'
    }
  ];

  const useCases = [
    {
      title: 'Enterprise Companies',
      description: 'Strategic AI transformation and large-scale automation initiatives.',
      icon: <Target className="h-5 w-5" />
    },
    {
      title: 'Startups & Scale-ups',
      description: 'AI strategy development and rapid implementation for growth.',
      icon: <Rocket className="h-5 w-5" />
    },
    {
      title: 'Manufacturing',
      description: 'Process automation and predictive maintenance solutions.',
      icon: <Settings className="h-5 w-5" />
    },
    {
      title: 'Healthcare',
      description: 'AI-powered diagnostics and patient care optimization.',
      icon: <Brain className="h-5 w-5" />
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
                <Brain className="h-12 w-12 text-primary-300" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">AI Consulting Services</h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Strategic Implementation
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Expert guidance to optimize your business processes and implement cutting-edge AI solutions 
              that drive innovation, efficiency, and competitive advantage.
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
                Transform Your Business with AI
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Our AI consulting services provide comprehensive guidance to help organizations identify, 
                implement, and optimize AI solutions that deliver measurable business value.
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
                  Organizations struggle with AI implementation:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Lack of AI strategy and clear implementation roadmap
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Limited technical expertise and resources
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Difficulty identifying high-impact AI opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Risk of failed implementations and wasted investments
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
                  Our AI consulting services provide:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Strategic AI planning and roadmap development
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Expert technical guidance and implementation support
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Proven methodologies for successful AI adoption
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Ongoing support and optimization services
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
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI consulting services designed to accelerate your digital transformation
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
              Why Choose Our AI Consulting?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Partner with experts who understand your business and can deliver measurable AI results
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
              Organizations looking to leverage AI for competitive advantage and operational excellence
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
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Partner with AI experts who can guide your digital transformation journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-primary-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300">
                  Schedule Consultation
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

export default AIConsultingPage;
