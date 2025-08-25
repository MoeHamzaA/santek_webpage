import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users2, ArrowLeft, CheckCircle, Heart, Target, Shield, Users, Award } from 'lucide-react';


const DiversityInclusionPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Diversity & Inclusion | Santek Micro Solutions';
  }, []);

  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Diverse Talent Sourcing',
      description: 'Access to a wide network of talented professionals from diverse backgrounds.'
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: 'Inclusive Hiring Practices',
      description: 'Implementing fair and inclusive recruitment processes and methodologies.'
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'D&I Strategy Consulting',
      description: 'Strategic guidance to develop and implement diversity initiatives.'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Cultural Competency Training',
      description: 'Training programs to enhance cultural awareness and sensitivity.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Workplace Inclusion Programs',
      description: 'Creating inclusive workplace environments that foster belonging.'
    },
    {
      icon: <Users2 className="h-8 w-8 text-blue-600" />,
      title: 'Equal Opportunity Initiatives',
      description: 'Ensuring fair access to opportunities for all candidates.'
    }
  ];

  const benefits = [
    'Enhanced team creativity and innovation',
    'Improved company reputation',
    'Better decision-making processes',
    'Increased employee retention',
    'Access to broader talent pools',
    'Stronger customer relationships'
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
                  <Users2 className="w-16 h-16 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Diversity & Inclusion</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We are committed to fostering diverse and inclusive workplaces by connecting employers 
                with talented professionals from diverse backgrounds.
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Building Inclusive Workplaces</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our diversity and inclusion services help organizations create workplaces that celebrate differences, 
                foster belonging, and drive innovation through diverse perspectives and experiences.
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Benefits of Diversity & Inclusion</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Creating inclusive workplaces delivers measurable business value
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our D&I Approach</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                A comprehensive methodology for building inclusive organizations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Assessment',
                  description: 'Evaluate current D&I practices and identify opportunities'
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description: 'Develop comprehensive D&I roadmap and initiatives'
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Execute D&I programs and inclusive hiring practices'
                },
                {
                  step: '04',
                  title: 'Sustainment',
                  description: 'Monitor progress and maintain inclusive culture'
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

export default DiversityInclusionPage;
