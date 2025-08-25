import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Clock, 
  Compass, 
  Shield, 
  BadgeCheck,
  Zap,
  Brain,
  Target,
  TrendingUp,
  CheckCircle,
  Star
} from 'lucide-react';

const reasons = [
  {
    id: 1,
    title: 'AI-First Approach',
    description: 'Cutting-edge AI solutions designed to transform your business operations and drive innovation.',
    icon: <Brain className="h-10 w-10 text-primary-600" />,
    features: ['Advanced AI algorithms', 'Machine learning expertise', 'Predictive analytics']
  },
  {
    id: 2,
    title: 'Proven Track Record',
    description: 'Successfully delivered automation solutions to hundreds of organizations across industries.',
    icon: <Award className="h-10 w-10 text-primary-600" />,
    features: ['500+ successful projects', '95% client satisfaction', 'Industry recognition']
  },
  {
    id: 3,
    title: 'End-to-End Solutions',
    description: 'Complete automation platforms from strategy to implementation and ongoing support.',
    icon: <Target className="h-10 w-10 text-primary-600" />,
    features: ['Strategy development', 'Custom implementation', '24/7 support']
  },
  {
    id: 4,
    title: 'Rapid Implementation',
    description: 'Quick deployment with minimal disruption to your existing operations.',
    icon: <Zap className="h-10 w-10 text-primary-600" />,
    features: ['Fast setup', 'Seamless integration', 'Minimal downtime']
  },
  {
    id: 5,
    title: 'Measurable Results',
    description: 'Clear ROI with quantifiable improvements in efficiency, cost savings, and productivity.',
    icon: <TrendingUp className="h-10 w-10 text-primary-600" />,
    features: ['Performance metrics', 'ROI tracking', 'Analytics dashboard']
  },
  {
    id: 6,
    title: 'Enterprise Security',
    description: 'Bank-level security with compliance features built into every solution.',
    icon: <Shield className="h-10 w-10 text-primary-600" />,
    features: ['SOC 2 compliance', 'Data encryption', 'Audit trails']
  },
];

const stats = [
  { number: '500+', label: 'Projects Delivered' },
  { number: '95%', label: 'Client Satisfaction' },
  { number: '60%', label: 'Average Cost Reduction' },
  { number: '24/7', label: 'Support Available' },
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4 mr-2" />
            Trusted by 500+ Organizations
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Why Choose Santek Micro Solutions?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge AI technology with deep industry expertise to deliver 
            automation solutions that transform your business operations and drive measurable results.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600"
            >
              <div className="mb-6">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {reason.description}
              </p>
              <ul className="space-y-2">
                {reason.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of organizations that have already revolutionized their operations 
              with our AI-powered automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-primary-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300">
                Schedule Demo
              </button>
              <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold rounded-lg transition-colors duration-300">
                Get Started Today
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;