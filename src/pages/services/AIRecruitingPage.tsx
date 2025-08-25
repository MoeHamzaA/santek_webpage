import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, ArrowLeft, CheckCircle, Cpu, Target, Zap, Shield, TrendingUp } from 'lucide-react';


const AIRecruitingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'AI Enhanced Recruiting & Pre-Screening | Santek Micro Solutions';
  }, []);

  const features = [
    {
      icon: <Cpu className="h-8 w-8 text-blue-600" />,
      title: 'AI-Powered Resume Scanning',
      description: 'Advanced algorithms to analyze and extract key information from resumes.'
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Intelligent Skill Matching',
      description: 'Precise matching of candidate skills with job requirements.'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'Automated Pre-Screening',
      description: 'Efficient initial screening to identify top candidates quickly.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: 'Candidate Scoring & Ranking',
      description: 'Data-driven scoring system to rank candidates by suitability.'
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: 'Predictive Success Metrics',
      description: 'AI models to predict candidate success and retention.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Bias Reduction',
      description: 'Fair and objective evaluation processes to reduce unconscious bias.'
    }
  ];

  const benefits = [
    '90% faster candidate screening',
    'Improved candidate quality',
    'Reduced hiring bias',
    'Enhanced efficiency',
    'Better candidate experience',
    'Data-driven decisions'
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
                  <Brain className="w-16 h-16 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">AI Enhanced Recruiting & Pre-Screening</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We leverage cutting-edge AI tools to ensure that no candidate's skills go unnoticed, 
                delivering a curated shortlist of high-potential candidates.
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Revolutionary AI-Powered Recruitment</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our AI-enhanced recruiting platform combines machine learning algorithms with human expertise 
                to deliver unprecedented accuracy and efficiency in talent acquisition.
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">AI-Powered Advantages</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Experience the future of recruitment with our AI-enhanced solutions
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">AI-Enhanced Process</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                How our AI technology revolutionizes the recruitment process
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Data Collection',
                  description: 'AI gathers and analyzes candidate data from multiple sources'
                },
                {
                  step: '02',
                  title: 'AI Analysis',
                  description: 'Machine learning algorithms evaluate skills and experience'
                },
                {
                  step: '03',
                  title: 'Smart Filtering',
                  description: 'Automated screening identifies top candidates'
                },
                {
                  step: '04',
                  title: 'Human Review',
                  description: 'Expert recruiters validate AI recommendations'
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

export default AIRecruitingPage;
