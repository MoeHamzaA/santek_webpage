import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, ArrowLeft, CheckCircle, Target, Users, TrendingUp, Award, BookOpen } from 'lucide-react';


const CareerAdvancementPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Career Advancement | Santek Micro Solutions';
  }, []);

  const features = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Career Path Planning',
      description: 'Strategic roadmap to achieve your professional goals and aspirations.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: 'Professional Development',
      description: 'Comprehensive training and skill development programs.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: 'Skill Gap Analysis',
      description: 'Identify and bridge gaps in your professional skill set.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Networking Opportunities',
      description: 'Connect with industry leaders and expand your professional network.'
    },
    {
      icon: <Rocket className="h-8 w-8 text-blue-600" />,
      title: 'Industry Transition',
      description: 'Smooth transition support for career changes and industry shifts.'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Leadership Development',
      description: 'Develop essential leadership skills for career progression.'
    }
  ];

  const benefits = [
    'Accelerated career growth',
    'Higher earning potential',
    'Industry recognition',
    'Expanded professional network',
    'Enhanced leadership skills',
    'Better job satisfaction'
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
                  <Rocket className="w-16 h-16 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Career Advancement</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                For professionals looking to take the next step in their careers, we offer personalized 
                career advancement services and guidance to accelerate your professional growth.
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Accelerate Your Professional Growth</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our career advancement services provide comprehensive support to help you identify opportunities, 
                develop essential skills, and achieve your professional goals in the technology industry.
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Career Advancement Benefits</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Unlock your full potential with our career advancement services
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Your Advancement Journey</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                A structured approach to accelerating your career progression
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Assessment',
                  description: 'Evaluate current skills, experience, and career goals'
                },
                {
                  step: '02',
                  title: 'Planning',
                  description: 'Develop personalized career advancement strategy'
                },
                {
                  step: '03',
                  title: 'Development',
                  description: 'Enhance skills and build professional capabilities'
                },
                {
                  step: '04',
                  title: 'Advancement',
                  description: 'Achieve career milestones and professional growth'
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

export default CareerAdvancementPage;
