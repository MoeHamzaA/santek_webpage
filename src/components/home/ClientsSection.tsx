import React from 'react';
import { motion } from 'framer-motion';

// We'll use company logos from a placeholder service
const clients = [
  { id: 1, name: 'Innovashift', logo: '/innovashift.png' },
  { id: 2, name: 'Desjardins', logo: '/Desjardins_Group_logo.svg.png' },
  { id: 3, name: 'AK', logo: '/AK-Website-Logo3.png' },
  { id: 4, name: 'Sun Life', logo: '/Sun-Life-Financial-Logo.png' },
];

const testimonials = [
  {
    id: 1,
    quote: "Santek Micro Solutions transformed our hiring process and helped us build a world-class engineering team in record time.",
    author: "Sarah Johnson",
    title: "CTO, TechForward",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: 2,
    quote: "Their technology consulting services gave us the strategic insight we needed to modernize our infrastructure and stay competitive.",
    author: "Michael Chen",
    title: "CEO, Innovate Systems",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: 3,
    quote: "We've worked with many IT staffing firms, but Santek Micro consistently delivers candidates who exceed our expectations and fit our culture.",
    author: "Jennifer Lopez",
    title: "HR Director, Global Tech",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
  }
];

const ClientsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold mb-4"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Partnering with companies from startups to Fortune 500
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="bg-primary-50 border border-primary-100 rounded-xl shadow-md p-6 flex items-center justify-center w-full h-28">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-16 max-w-[120px] object-contain"
                  style={{ filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.10))' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              What Our Clients Say
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">
                  <svg
                    className="h-8 w-8 text-secondary-500 opacity-30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-4 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-10 w-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;