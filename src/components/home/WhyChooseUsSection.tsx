import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Clock, 
  Compass, 
  Shield, 
  BadgeCheck 
} from 'lucide-react';

const reasons = [
  {
    id: 1,
    title: 'Industry Expertise',
    description: 'Specialized knowledge across key technology sectors and domains.',
    icon: <Compass className="h-10 w-10 text-primary-600" />,
  },
  {
    id: 2,
    title: 'Vetted Talent',
    description: 'Rigorous screening process to ensure only top candidates are presented.',
    icon: <BadgeCheck className="h-10 w-10 text-primary-600" />,
  },
  {
    id: 3,
    title: 'Client-Focused Approach',
    description: 'Customized solutions tailored to your unique business needs.',
    icon: <Users className="h-10 w-10 text-primary-600" />,
  },
  {
    id: 4,
    title: 'Fast Turnaround',
    description: 'Efficient processes to help you meet critical deadlines.',
    icon: <Clock className="h-10 w-10 text-primary-600" />,
  },
  {
    id: 5,
    title: 'Quality Assurance',
    description: 'Commitment to excellence and continuous improvement.',
    icon: <Award className="h-10 w-10 text-primary-600" />,
  },
  {
    id: 6,
    title: 'Data Security',
    description: 'Robust protocols to protect your sensitive information.',
    icon: <Shield className="h-10 w-10 text-primary-600" />,
  },
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What sets Santek Micro Solutions apart from the competition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;