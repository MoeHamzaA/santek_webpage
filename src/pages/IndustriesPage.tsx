import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
  Landmark,
  Briefcase,
  Rocket,
  Server,
  Building,
  Heart,
  Phone,
  Cpu,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Target,
  Zap
} from 'lucide-react';


const industries = [
  {
    id: 'technology',
    name: 'Technology',
    icon: <Cpu className="h-12 w-12 text-primary-600" />,
    description: 'From startups to enterprise tech companies, we help build world-class technology teams.',
    shortDesc: 'Building the future with cutting-edge tech talent',
    sectors: ['Software Development', 'AI/ML', 'Cloud Computing', 'Cybersecurity'],
    skills: ['Full-Stack Developers', 'Data Scientists', 'DevOps Engineers', 'Product Managers'],
    stats: {
      placements: '500+',
      retention: '95%',
      timeToHire: '15 days'
    },
    color: 'from-primary-600 to-primary-700'
  },
  {
    id: 'financial-services',
    name: 'Financial Services',
    icon: <Landmark className="h-12 w-12 text-primary-600" />,
    description: 'Supporting banks, fintech companies, and financial institutions with specialized talent and technology solutions.',
    shortDesc: 'Powering the future of finance with top talent',
    sectors: ['Banks & Financial Institutions', 'FinTech', 'Investment Firms', 'Insurance'],
    skills: ['Financial Systems Analysts', 'Risk Management', 'FinTech Developers', 'Compliance Experts'],
    stats: {
      placements: '300+',
      retention: '92%',
      timeToHire: '18 days'
    },
    color: 'from-primary-600 to-primary-700'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: <Heart className="h-12 w-12 text-primary-600" />,
    description: 'Providing specialized IT talent and solutions for healthcare organizations and medical technology companies.',
    shortDesc: 'Advancing healthcare through technology innovation',
    sectors: ['Hospitals & Clinics', 'Healthcare Technology', 'Medical Devices', 'Pharmaceuticals'],
    skills: ['Healthcare IT Specialists', 'Medical Technology Experts', 'Clinical Systems Analysts', 'Health Informatics'],
    stats: {
      placements: '200+',
      retention: '98%',
      timeToHire: '20 days'
    },
    color: 'from-primary-600 to-primary-700'
  },
  {
    id: 'consulting',
    name: 'Consulting',
    icon: <Briefcase className="h-12 w-12 text-primary-600" />,
    description: 'Partnering with consulting firms to provide specialized technical talent and strategic expertise.',
    shortDesc: 'Delivering strategic solutions with expert talent',
    sectors: ['Management Consulting', 'Technology Consulting', 'Strategy Consulting', 'Digital Transformation'],
    skills: ['Business Analysts', 'Project Managers', 'Technology Consultants', 'Digital Strategists'],
    stats: {
      placements: '250+',
      retention: '94%',
      timeToHire: '16 days'
    },
    color: 'from-primary-600 to-primary-700'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: <Building2 className="h-12 w-12 text-primary-600" />,
    description: 'Supporting manufacturing companies with digital transformation and Industry 4.0 technology solutions.',
    shortDesc: 'Transforming manufacturing through smart technology',
    sectors: ['Automotive Manufacturing', 'Industrial Manufacturing', 'Smart Factory Solutions', 'Supply Chain Technology'],
    skills: ['Industrial Engineers', 'Automation Specialists', 'IoT Engineers', 'Quality Assurance Engineers'],
    stats: {
      placements: '150+',
      retention: '96%',
      timeToHire: '22 days'
    },
    color: 'from-primary-600 to-primary-700'
  },
  {
    id: 'startups',
    name: 'Startups',
    icon: <Rocket className="h-12 w-12 text-primary-600" />,
    description: 'Helping startups scale their teams and build their technology infrastructure for rapid growth.',
    shortDesc: 'Accelerating startup success with top talent',
    sectors: ['Tech Startups', 'FinTech Startups', 'HealthTech Startups', 'SaaS Companies'],
    skills: ['Full-Stack Developers', 'Product Managers', 'UX/UI Designers', 'Growth Hackers'],
    stats: {
      placements: '400+',
      retention: '90%',
      timeToHire: '12 days'
    },
    color: 'from-primary-600 to-primary-700'
  }
];

const keyMetrics = [
  {
    icon: <Users className="h-8 w-8 text-primary-600" />,
    title: '2,000+',
    subtitle: 'Successful Placements',
    description: 'Across all industries'
  },
  {
    icon: <Target className="h-8 w-8 text-primary-600" />,
    title: '95%',
    subtitle: 'Retention Rate',
    description: 'Long-term success'
  },
  {
    icon: <Zap className="h-8 w-8 text-primary-600" />,
    title: '15 Days',
    subtitle: 'Average Time to Hire',
    description: 'Fast placement process'
  },
  {
    icon: <Shield className="h-8 w-8 text-primary-600" />,
    title: '98%',
    subtitle: 'Client Satisfaction',
    description: 'Proven track record'
  }
];

const IndustriesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Industries We Serve | Santek Micro Solutions';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-950 to-primary-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Connecting exceptional talent with innovative companies across diverse sectors
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We specialize in providing recruitment solutions that help businesses across various industries 
              find skilled professionals who drive growth and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors duration-300">
                    {metric.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">{metric.title}</h3>
                <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-1">{metric.subtitle}</p>
                <p className="text-gray-600 dark:text-gray-300">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Industry Expertise</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We understand the unique challenges and requirements of each industry, 
              enabling us to provide tailored recruitment solutions that drive success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group ${
                  selectedIndustry === industry.id ? 'ring-2 ring-primary-600' : ''
                }`}
                onClick={() => setSelectedIndustry(selectedIndustry === industry.id ? null : industry.id)}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="h-2 bg-gradient-to-r from-primary-600 to-primary-700"
                  whileHover={{ 
                    scaleX: 1.1,
                    transition: { duration: 0.3 }
                  }}
                ></motion.div>
                <div className="p-6">
                  <motion.div 
                    className="flex items-center mb-4"
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="mr-3 group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">{industry.name}</h3>
                  </motion.div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">{industry.shortDesc}</p>
                  
                  {selectedIndustry === industry.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                    >
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <motion.div 
                          className="text-center"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-lg font-bold text-primary-600">{industry.stats.placements}</div>
                          <div className="text-xs text-gray-500">Placements</div>
                        </motion.div>
                        <motion.div 
                          className="text-center"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-lg font-bold text-primary-600">{industry.stats.retention}</div>
                          <div className="text-xs text-gray-500">Retention</div>
                        </motion.div>
                        <motion.div 
                          className="text-center"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-lg font-bold text-primary-600">{industry.stats.timeToHire}</div>
                          <div className="text-xs text-gray-500">Time to Hire</div>
                        </motion.div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Sectors:</h4>
                        <div className="flex flex-wrap gap-1">
                          {industry.sectors.map((sector, i) => (
                            <motion.span 
                              key={i} 
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300 cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              {sector}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Skills:</h4>
                        <div className="flex flex-wrap gap-1">
                          {industry.skills.map((skill, i) => (
                            <motion.span 
                              key={i} 
                              className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-xs rounded-full text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors duration-300 cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-primary-950 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Santek for Your Industry?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our deep industry knowledge and proven track record make us the ideal partner for your recruitment needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8 text-primary-300" />,
                title: 'Industry Expertise',
                description: 'Deep understanding of industry-specific challenges and requirements'
              },
              {
                icon: <Users className="h-8 w-8 text-primary-300" />,
                title: 'Vetted Talent Pool',
                description: 'Access to pre-screened, qualified candidates across all industries'
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-primary-300" />,
                title: 'Proven Results',
                description: 'Consistent track record of successful placements and high retention rates'
              },
              {
                icon: <Zap className="h-8 w-8 text-primary-300" />,
                title: 'Fast Turnaround',
                description: 'Quick placement process to meet your urgent hiring needs'
              },
              {
                icon: <Shield className="h-8 w-8 text-primary-300" />,
                title: 'Quality Assurance',
                description: 'Rigorous screening process to ensure candidate quality and fit'
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-primary-300" />,
                title: 'Ongoing Support',
                description: 'Continuous support throughout the hiring process and beyond'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 group cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  transition: { duration: 0.3 }
                }}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-300 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default IndustriesPage;