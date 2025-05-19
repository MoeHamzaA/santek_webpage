import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {
  Building2,
  Landmark,
  Briefcase,
  Rocket,
  Server,
  Building,
  Heart,
  Phone
} from 'lucide-react';

const industries = [
  {
    id: 'financial-services',
    name: 'Financial Services',
    icon: <Landmark className="h-12 w-12 text-primary-600" />,
    description: 'We serve banks, financial institutions, and fintech companies with specialized talent and technology solutions.',
    sectors: [
      'Banks and Financial Institutions',
      'Financial Services Companies',
      'Investment Firms',
      'Insurance Companies'
    ],
    skills: [
      'Financial Systems Analysts',
      'Risk Management Specialists',
      'FinTech Developers',
      'Compliance Experts'
    ],
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'it-infrastructure',
    name: 'IT Infrastructure',
    icon: <Server className="h-12 w-12 text-primary-600" />,
    description: 'Supporting organizations with their critical IT infrastructure needs and digital transformation initiatives.',
    sectors: [
      'Data Centers',
      'Cloud Services',
      'Network Operations',
      'System Integration'
    ],
    skills: [
      'Cloud Professionals',
      'Network Engineers',
      'System Administrators',
      'DevOps Engineers'
    ],
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'consulting',
    name: 'Consulting Firms',
    icon: <Briefcase className="h-12 w-12 text-primary-600" />,
    description: 'Partnering with consulting firms to provide specialized technical talent and expertise.',
    sectors: [
      'Management Consulting',
      'Technology Consulting',
      'Strategy Consulting',
      'Digital Transformation'
    ],
    skills: [
      'Business Analysts',
      'Project Managers',
      'Technology Consultants',
      'Digital Strategists'
    ],
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'public-sector',
    name: 'Public Sector',
    icon: <Building className="h-12 w-12 text-primary-600" />,
    description: 'Supporting government agencies and public institutions with specialized IT talent and solutions.',
    sectors: [
      'Government Agencies',
      'Public Institutions',
      'Educational Institutions',
      'Regulatory Bodies'
    ],
    skills: [
      'Government IT Specialists',
      'Policy Analysts',
      'Security Cleared Professionals',
      'Public Sector Consultants'
    ],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: <Heart className="h-12 w-12 text-primary-600" />,
    description: 'Providing specialized IT talent and solutions for healthcare organizations and medical technology companies.',
    sectors: [
      'Hospitals and Clinics',
      'Healthcare Technology',
      'Medical Devices',
      'Pharmaceutical Companies'
    ],
    skills: [
      'Healthcare IT Specialists',
      'Medical Technology Experts',
      'Clinical Systems Analysts',
      'Health Informatics Professionals'
    ],
    image: 'https://images.pexels.com/photos/3846035/pexels-photo-3846035.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'telecommunications',
    name: 'Telecommunications',
    icon: <Phone className="h-12 w-12 text-primary-600" />,
    description: 'Supporting telecommunications companies with specialized technical talent and infrastructure expertise.',
    sectors: [
      'Telecom Providers',
      'Network Operators',
      'Communications Technology',
      'Infrastructure Services'
    ],
    skills: [
      'Telecom Engineers',
      'Network Architects',
      'RF Engineers',
      'Communications Specialists'
    ],
    image: 'https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'startups',
    name: 'Start-up Companies',
    icon: <Rocket className="h-12 w-12 text-primary-600" />,
    description: 'Helping startups scale their teams and build their technology infrastructure.',
    sectors: [
      'Tech Startups',
      'FinTech',
      'HealthTech',
      'E-commerce'
    ],
    skills: [
      'Full-stack Developers',
      'Product Managers',
      'UX/UI Designers',
      'Growth Hackers'
    ],
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const skillsWePlaceList = [
  'Cloud Professionals',
  'Business Analysts',
  'DBA',
  'QA & Testing',
  'Developers',
  'IT Managers',
  'DevOps Engineers',
  'Network Engineers',
  'Electrical Engineers',
  'Project Managers'
];

const IndustriesPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Industries We Serve | Santek Micro Solutions';
    
    const hash = location.hash.replace('#', '');
    if (hash && industries.some(industry => industry.id === hash)) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div>
      <section className="pt-32 pb-16 bg-primary-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Industries We Serve</h1>
            <p className="text-xl text-gray-300">
              Your Success is Our Connection
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in providing recruitment solutions that help businesses across various industries find skilled professionals who drive growth and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Skills We Place</h2>
            <p className="text-xl text-gray-600">
              
              Connecting you with top talent across various technical domains
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skillsWePlaceList.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-4 text-center shadow-md"
              >
                <p className="font-medium text-gray-800">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {industries.map((industry, index) => (
        <section 
          key={industry.id}
          id={industry.id}
          className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">{industry.icon}</div>
                  <h2 className="text-3xl font-bold">{industry.name}</h2>
                </div>
                <p className="text-gray-700 text-lg mb-6">
                  {industry.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary-600">Key Sectors</h3>
                  <ul className="space-y-2">
                    {industry.sectors.map((sector, i) => (
                      <li key={i} className="flex items-start">
                        <svg 
                          className="h-6 w-6 text-secondary-500 mr-2 flex-shrink-0" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span className="text-gray-700">{sector}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-600">Key Skills</h3>
                  <ul className="space-y-2">
                    {industry.skills.map((skill, i) => (
                      <li key={i} className="flex items-start">
                        <svg 
                          className="h-6 w-6 text-secondary-500 mr-2 flex-shrink-0" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <img 
                  src={industry.image}
                  alt={`${industry.name} industry`}
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default IndustriesPage;