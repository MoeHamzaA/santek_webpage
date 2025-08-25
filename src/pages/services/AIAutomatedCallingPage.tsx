import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Phone,
  Calendar,
  Bell,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Clock,
  TrendingUp,
  Target,
  Users,
  Zap,
  Brain
} from 'lucide-react';
import CtaSection from '../../components/home/CtaSection';

const AIAutomatedCallingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'AI Automated Calling - Intelligent Communication | Santek Micro Solutions';
  }, []);

  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-primary-600" />,
      title: 'Appointment Confirmations & Booking',
      description: 'Intelligent appointment scheduling with natural language processing for seamless booking and confirmation calls.',
      benefits: ['Automated scheduling', 'Natural conversations', 'Calendar integration']
    },
    {
      icon: <Bell className="h-8 w-8 text-primary-600" />,
      title: 'Reminders & Rescheduling',
      description: 'Smart reminder system that handles appointment confirmations, rescheduling requests, and follow-up communications.',
      benefits: ['Reduced no-shows', 'Flexible rescheduling', 'Personalized reminders']
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary-600" />,
      title: 'Call Follow-ups (Feedback, Invoices)',
      description: 'Automated follow-up calls for feedback collection, invoice reminders, and customer satisfaction surveys.',
      benefits: ['Improved customer engagement', 'Faster feedback collection', 'Increased satisfaction']
    },
    {
      icon: <Brain className="h-8 w-8 text-primary-600" />,
      title: 'Natural Language Processing',
      description: 'Advanced AI that understands context, handles complex conversations, and provides human-like interactions.',
      benefits: ['Natural conversations', 'Context awareness', 'Multi-language support']
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-primary-600" />,
      title: '24/7 Availability',
      description: 'Provide round-the-clock customer service without human limitations'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary-600" />,
      title: 'Increased Efficiency',
      description: 'Handle multiple calls simultaneously and reduce response times'
    },
    {
      icon: <Target className="h-6 w-6 text-primary-600" />,
      title: 'Improved Engagement',
      description: 'Personalized interactions that enhance customer experience'
    },
    {
      icon: <Zap className="h-6 w-6 text-primary-600" />,
      title: 'Cost Reduction',
      description: 'Lower operational costs while maintaining high service quality'
    }
  ];

  const useCases = [
    {
      title: 'Healthcare Practices',
      description: 'Automate appointment confirmations, reminders, and follow-up calls for patients.',
      icon: <Phone className="h-5 w-5" />
    },
    {
      title: 'Service Businesses',
      description: 'Handle booking confirmations, rescheduling, and customer feedback calls.',
      icon: <Calendar className="h-5 w-5" />
    },
    {
      title: 'E-commerce Companies',
      description: 'Manage order confirmations, delivery updates, and customer support calls.',
      icon: <MessageSquare className="h-5 w-5" />
    },
    {
      title: 'Financial Services',
      description: 'Automate payment reminders, account updates, and customer service calls.',
      icon: <Bell className="h-5 w-5" />
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
                <Phone className="h-12 w-12 text-primary-300" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">AI Automated Calling</h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Intelligent Communication Platform
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Transform your customer communication with AI-powered automated calling that provides 
              natural, intelligent conversations for appointments, reminders, and follow-ups.
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
                Revolutionize Customer Communication
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                AI Automated Calling combines advanced natural language processing with intelligent 
                automation to provide human-like conversations that enhance customer engagement and streamline operations.
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
                  Customer communication faces significant challenges:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    High costs of manual customer service calls
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Limited availability and response times
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Inconsistent communication quality
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Difficulty scaling customer support operations
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
                  AI Automated Calling provides intelligent communication that:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Handles natural conversations with context awareness
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Provides 24/7 availability for customer support
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Scales operations without additional human resources
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Maintains consistent, high-quality interactions
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
              Advanced AI-powered calling capabilities designed to enhance customer communication
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
              Why Choose AI Automated Calling?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transform your customer communication with intelligent automation and enhanced engagement
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
              Organizations looking to enhance customer communication and engagement
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
                Ready to Transform Your Customer Communication?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Join organizations that have already revolutionized their customer engagement with AI Automated Calling
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

export default AIAutomatedCallingPage;
