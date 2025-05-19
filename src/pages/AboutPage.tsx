import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import CtaSection from '../components/home/CtaSection';

interface AboutPageProps {
  whyChooseUs?: boolean;
}

const AboutPage: React.FC<AboutPageProps> = ({ whyChooseUs = false }) => {
  useEffect(() => {
    document.title = whyChooseUs 
      ? 'Why Choose Us | Santek Micro Solutions' 
      : 'About Us | Santek Micro Solutions';
    
    if (whyChooseUs) {
      const element = document.getElementById('why-choose-us');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [whyChooseUs]);

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
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {whyChooseUs ? 'Why Choose Santek Micro Solutions' : 'About Santek Micro Solutions'}
            </h1>
            <p className="text-xl text-gray-300">
              {whyChooseUs 
                ? 'What makes us the preferred partner for businesses seeking tech talent and solutions'
                : 'Building Lasting Partnerships with Santek Micro Solutions'}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <Link
              to="/about"
              className={`py-4 px-6 font-medium ${
                !whyChooseUs
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-500 hover:text-primary-600'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/why-choose-us"
              className={`py-4 px-6 font-medium ${
                whyChooseUs
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-500 hover:text-primary-600'
              }`}
            >
              Why Choose Us
            </Link>
          </div>
        </div>
      </section>

      {!whyChooseUs ? (
        <>
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <p className="text-gray-700 mb-4">
                    We believe in creating meaningful connections that go beyond business. Every interaction we have is an opportunity to inspire trust and provide unwavering support. We take pride in understanding the unique needs of the industries we serve, ensuring that each partnership feels valued, encouraged, and fully supported.
                  </p>
                  <p className="text-gray-700 mb-4">
                    At Santek Micro Solutions, we are dedicated to connecting top talent with organizations seeking technical expertise. With over 16 years of hands-on experience as IT specialists within domains such as middleware analysis, security, cloud, and much more, our team brings deep industry knowledge to every recruitment process.
                  </p>
                  <p className="text-gray-700">
                    Our focus is on understanding the unique needs of both candidates and clients, ensuring that we match the right people with the right opportunities. We specialize in sourcing professionals who excel in technology fields including cloud technologies, system integration, IT infrastructure, healthcare, and the public sector.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="rounded-lg overflow-hidden shadow-xl"
                >
                  <img
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Santek Micro team collaboration"
                    className="w-full h-auto"
                  />
                </motion.div>
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
                <h2 className="text-3xl font-bold mb-4">Meet Our Leader</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Expertise and vision driving our success
                </p>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-lg shadow-md"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="Tauqeer Khan"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Tauqeer Khan</h3>
                      <p className="text-gray-600 mb-4">Founder & CEO</p>
                      <p className="text-gray-700">
                        With over 16 years of hands-on experience as an IT specialist, Tauqeer brings extensive expertise in middleware analysis, security, cloud technologies, and more. His vision drives our commitment to excellence in connecting top talent with leading organizations.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
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
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Get in touch with us
                </p>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-lg shadow-md"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Location</h3>
                      <p className="text-gray-700">
                        Toronto, Ontario, Canada
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
                      <p className="text-gray-700">
                        Tel: <a href="tel:1-416-951-8616" className="text-primary-600 hover:text-primary-700">1-416-951-8616</a><br />
                        Email: <a href="mailto:info@santekmicrosolutions.com" className="text-primary-600 hover:text-primary-700">info@santekmicrosolutions.com</a>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div id="why-choose-us">
          <WhyChooseUsSection />
        </div>
      )}

      <CtaSection />
    </div>
  );
};

export default AboutPage;