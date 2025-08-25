import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { UserCheck, ArrowLeft, CheckCircle, Search, FileText, Users, TrendingUp, Target } from 'lucide-react';


const TalentAcquisitionPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Talent Acquisition | Santek Micro Solutions';
  }, []);

  const features = [
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: 'Personalized Job Matching',
      description: 'AI-powered matching to connect you with the perfect opportunities.'
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: 'Resume Optimization',
      description: 'Professional resume enhancement to maximize your chances of success.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Career Guidance & Support',
      description: 'Expert advice to help you navigate your career path effectively.'
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Interview Preparation',
      description: 'Comprehensive preparation to ace your technical and behavioral interviews.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: 'Skill Assessment',
      description: 'Evaluation of your technical skills and professional competencies.'
    },
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: 'Market Insights',
      description: 'Access to industry trends, salary data, and market intelligence.'
    }
  ];

  const benefits = [
    'Faster job placement process',
    'Higher salary negotiations',
    'Access to exclusive opportunities',
    'Professional career development',
    'Industry networking connections',
    'Ongoing career support'
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
                  <UserCheck className="w-16 h-16 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Talent Acquisition</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Finding the perfect job can be a daunting task. Our talent acquisition services are designed 
                to simplify the process and accelerate your career growth.
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Accelerate Your Career Growth</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our talent acquisition services provide comprehensive support to help you find the right opportunity, 
                prepare for success, and advance your career in the technology industry.
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose Our Talent Acquisition?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Experience the advantages of working with a dedicated talent acquisition partner
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Your Career Journey</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                A structured approach to finding your next career opportunity
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Career Assessment',
                  description: 'Understanding your skills, goals, and career aspirations'
                },
                {
                  step: '02',
                  title: 'Opportunity Matching',
                  description: 'Identifying and presenting relevant job opportunities'
                },
                {
                  step: '03',
                  title: 'Preparation & Coaching',
                  description: 'Resume optimization and interview preparation'
                },
                {
                  step: '04',
                  title: 'Placement & Follow-up',
                  description: 'Successful placement with ongoing career support'
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

export default TalentAcquisitionPage;
