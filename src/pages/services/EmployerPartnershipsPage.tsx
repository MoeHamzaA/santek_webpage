import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, ArrowLeft, CheckCircle, Shield, Clock, Users2, Target, Handshake } from 'lucide-react';


const EmployerPartnershipsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Employer Partnerships | Santek Micro Solutions';
  }, []);

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Comprehensive Candidate Screening',
      description: 'Rigorous vetting process to ensure only qualified candidates are presented.'
    },
    {
      icon: <Users2 className="h-8 w-8 text-blue-600" />,
      title: 'Cultural Fit Assessment',
      description: 'Deep understanding of your company culture to find the perfect match.'
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Skill Matching & Verification',
      description: 'Thorough verification of technical skills and professional experience.'
    },
    {
      icon: <Handshake className="h-8 w-8 text-blue-600" />,
      title: 'Ongoing Partnership Support',
      description: 'Continuous support throughout the hiring process and beyond.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Industry-Specific Expertise',
      description: 'Specialized knowledge across various technology sectors.'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: 'Flexible Hiring Solutions',
      description: 'Adaptable solutions to meet your unique hiring needs and timelines.'
    }
  ];

  const benefits = [
    'Reduced time-to-hire by 60%',
    '95% candidate retention rate',
    'Access to pre-vetted talent pool',
    'Customized recruitment strategies',
    'Ongoing relationship management',
    'Scalable hiring solutions'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-indigo-900/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/services" 
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors duration-300"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Services
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                  <Users className="w-16 h-16 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Employer Partnerships</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Strategic partnerships to help you find the perfect candidates for your organization. 
                We understand the importance of finding the right fit for your team.
              </p>
            </motion.div>
          </div>
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Comprehensive Partnership Solutions</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our employer partnership services go beyond traditional recruitment. We become an extension of your HR team, 
                providing strategic insights, market intelligence, and access to top-tier talent that aligns with your 
                company's vision and culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose Our Partnership?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Experience the benefits of a strategic partnership that delivers measurable results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Partnership Process</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                A streamlined approach to building successful employer partnerships
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Strategy',
                  description: 'Understanding your needs, culture, and hiring objectives'
                },
                {
                  step: '02',
                  title: 'Talent Sourcing',
                  description: 'Leveraging our network to find qualified candidates'
                },
                {
                  step: '03',
                  title: 'Screening & Assessment',
                  description: 'Comprehensive evaluation of skills and cultural fit'
                },
                {
                  step: '04',
                  title: 'Placement & Support',
                  description: 'Successful placement with ongoing partnership support'
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{process.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EmployerPartnershipsPage;
