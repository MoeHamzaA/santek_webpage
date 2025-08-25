import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ClientsSection from '../components/home/ClientsSection';


const clients = [
  {
    id: 1,
    name: 'TechForward',
    industry: 'Software Development',
    logo: 'https://images.pexels.com/photos/9822907/pexels-photo-9822907.png?auto=compress&cs=tinysrgb&dpr=1&w=200',
    description: 'A leading enterprise software company specializing in business intelligence solutions.',
    testimonial: {
      quote: "Santek Micro Solutions has been an invaluable partner in building our engineering team. Their deep understanding of our technical requirements and company culture has resulted in outstanding hires who have made significant contributions to our product development.",
      author: "Sarah Johnson",
      title: "CTO"
    }
  },
  {
    id: 2,
    name: 'MediTech Innovations',
    industry: 'Healthcare Technology',
    logo: 'https://images.pexels.com/photos/12939807/pexels-photo-12939807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200',
    description: 'Provider of innovative healthcare technology solutions for hospitals and clinics.',
    testimonial: {
      quote: "Working with Santek has transformed our approach to healthcare IT. Their consultants helped us navigate complex regulatory requirements while implementing cutting-edge solutions that improved patient care and operational efficiency.",
      author: "Dr. James Peterson",
      title: "Chief Digital Officer"
    }
  },
  {
    id: 3,
    name: 'FinCore Systems',
    industry: 'Financial Services',
    logo: 'https://images.pexels.com/photos/9822732/pexels-photo-9822732.png?auto=compress&cs=tinysrgb&dpr=1&w=200',
    description: 'Fintech company providing secure payment processing and banking infrastructure.',
    testimonial: {
      quote: "The cybersecurity consulting team at Santek helped us address critical vulnerabilities and establish robust security protocols. Their expertise in financial compliance was particularly valuable as we expanded into new markets.",
      author: "Michael Rodriguez",
      title: "Head of Security"
    }
  },
  {
    id: 4,
    name: 'RetailNow',
    industry: 'Retail Technology',
    logo: 'https://images.pexels.com/photos/9822689/pexels-photo-9822689.png?auto=compress&cs=tinysrgb&dpr=1&w=200',
    description: 'E-commerce and retail technology provider enhancing shopping experiences.',
    testimonial: {
      quote: "When we needed to scale our development team quickly for a major platform update, Santek delivered exceptional candidates with the specialized skills we required. Their efficient recruitment process saved us valuable time and resources.",
      author: "Jennifer Lee",
      title: "VP of Engineering"
    }
  },
  {
    id: 5,
    name: 'ManufacturePro',
    industry: 'Manufacturing',
    logo: 'https://images.pexels.com/photos/9822668/pexels-photo-9822668.png?auto=compress&cs=tinysrgb&dpr=1&w=200',
    description: 'Smart manufacturing solutions provider implementing IoT and automation.',
    testimonial: {
      quote: "Santek's expertise in IoT and data analytics helped us transform our manufacturing processes. Their consultants worked closely with our team to implement solutions that reduced downtime and increased production efficiency by 35%.",
      author: "Robert Chen",
      title: "Director of Operations"
    }
  },
  {
    id: 6,
    name: 'CloudDynamics',
    industry: 'Cloud Services',
    logo: 'https://images.pexels.com/photos/9822656/pexels-photo-9822656.png?auto=compress&cs=tinysrgb&dpr=1&w=200',
    description: 'Cloud infrastructure and services provider for enterprise clients.',
    testimonial: {
      quote: "The cloud migration strategy developed by Santek's consulting team was comprehensive and tailored to our specific needs. Their guidance through the implementation phase ensured a smooth transition with minimal disruption to our operations.",
      author: "Amanda Taylor",
      title: "Cloud Infrastructure Manager"
    }
  }
];

const ClientsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Clients | Santek Micro Solutions';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Clients</h1>
            <p className="text-xl text-gray-300">
              Partnerships built on trust, results, and shared success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Logos Section */}
      <ClientsSection />

      {/* Case Studies/Client Spotlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from our partnerships
            </p>
          </motion.div>

          <div className="space-y-12">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-5 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:col-span-1 flex justify-center">
                  <div className="bg-gray-50 p-6 rounded-lg w-40 h-40 flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`} 
                      className="max-w-full max-h-full"
                    />
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="flex flex-col md:flex-row md:items-center mb-4">
                    <h3 className="text-2xl font-bold">{client.name}</h3>
                    <span className="md:ml-4 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {client.industry}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{client.description}</p>
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-600">
                    <p className="text-gray-700 italic mb-4">"{client.testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div>
                        <p className="font-semibold">{client.testimonial.author}</p>
                        <p className="text-gray-600 text-sm">{client.testimonial.title}, {client.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ClientsPage;