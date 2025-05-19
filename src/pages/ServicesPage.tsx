import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import CtaSection from '../components/home/CtaSection';
import {
  Users,
  Briefcase,
  Brain,
  Rocket,
  UserCheck,
  Users2
} from 'lucide-react';

const services = [
  {
    id: 'employer-partnerships',
    title: 'Employer Partnerships',
    description: 'Our employer partnership services are designed to help you find the perfect candidates for your organization. We understand the importance of finding the right fit for your team.',
    icon: <Users className="w-12 h-12 text-primary-600" />,
    details: [
      'Comprehensive candidate screening',
      'Cultural fit assessment',
      'Skill matching and verification',
      'Ongoing partnership support',
      'Industry-specific expertise',
      'Flexible hiring solutions'
    ],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'talent-acquisition',
    title: 'Talent Acquisition',
    description: 'Finding the perfect job can be a daunting task. Our talent acquisition services are designed to simplify the process for you.',
    icon: <UserCheck className="w-12 h-12 text-primary-600" />,
    details: [
      'Personalized job matching',
      'Career guidance and support',
      'Resume optimization',
      'Interview preparation',
      'Skill assessment',
      'Market insights and salary guidance'
    ],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'ai-recruiting',
    title: 'AI Enhanced Recruiting & Pre-Screening',
    description: 'We leverage cutting-edge AI tools to ensure that no candidates skills go unnoticed, delivering a curated shortlist of high-potential candidates.',
    icon: <Brain className="w-12 h-12 text-primary-600" />,
    details: [
      'AI-powered resume scanning',
      'Intelligent skill matching',
      'Automated pre-screening',
      'Candidate scoring and ranking',
      'Predictive success metrics',
      'Bias reduction in recruitment'
    ],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'ai-consulting',
    title: 'AI Consulting Services',
    description: 'We provide consulting services to help businesses optimize their environments with unique AI solutions that streamline recruitment processes and other departments.',
    icon: <Briefcase className="w-12 h-12 text-primary-600" />,
    details: [
      'AI strategy development',
      'Process automation consulting',
      'AI implementation support',
      'Technology stack optimization',
      'Performance monitoring',
      'ROI analysis and reporting'
    ],
    image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'career-advancement',
    title: 'Career Advancement',
    description: 'For professionals looking to take the next step in their careers, we offer personalized career advancement services and guidance.',
    icon: <Rocket className="w-12 h-12 text-primary-600" />,
    details: [
      'Career path planning',
      'Professional development',
      'Skill gap analysis',
      'Networking opportunities',
      'Industry transition support',
      'Leadership development'
    ],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'diversity-inclusion',
    title: 'Diversity & Inclusion',
    description: 'We are committed to fostering diverse and inclusive workplaces by connecting employers with talented professionals from diverse backgrounds.',
    icon: <Users2 className="w-12 h-12 text-primary-600" />,
    details: [
      'Diverse talent sourcing',
      'Inclusive hiring practices',
      'D&I strategy consulting',
      'Cultural competency training',
      'Workplace inclusion programs',
      'Equal opportunity initiatives'
    ],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const ServicesPage: React.FC = () => {
  const location = useLocation();
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Our Services | Santek Micro Solutions';
    
    const hash = location.hash.replace('#', '');
    if (hash && services.some(service => service.id === hash)) {
      setActiveServiceId(hash);
      
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive recruitment and AI solutions to drive your business forward
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-lg shadow-md hover:shadow-lg p-6 transition-all duration-300 border-t-4 ${
                  activeServiceId === service.id ? 'border-primary-600' : 'border-transparent'
                }`}
                onClick={() => setActiveServiceId(service.id)}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                  onClick={() => {
                    setActiveServiceId(service.id);
                    document.getElementById(service.id + '-details')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start' 
                    });
                  }}
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={`${service.id}-details`}
          className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
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
                  <div className="mr-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>
                <p className="text-gray-700 text-lg mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail, i) => (
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
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <img 
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <CtaSection />
    </div>
  );
};

export default ServicesPage;