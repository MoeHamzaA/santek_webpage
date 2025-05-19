import React, { useEffect } from 'react';
import HeroBanner from '../components/home/HeroBanner';
import ServiceSection from '../components/home/ServiceSection';
import ClientsSection from '../components/home/ClientsSection';
import IndustriesSection from '../components/home/IndustriesSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Santek Micro Solutions | Tech Consulting & Recruitment Experts';
  }, []);

  return (
    <div>
      <HeroBanner />
      <ServiceSection />
      <WhyChooseUsSection />
      <ClientsSection />
      <IndustriesSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;