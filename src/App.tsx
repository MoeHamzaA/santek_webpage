import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ClientsPage from './pages/ClientsPage';
import IndustriesPage from './pages/IndustriesPage';
import ReferralsPage from './pages/ReferralsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="why-choose-us" element={<AboutPage whyChooseUs />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="clients" element={<ClientsPage />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="referrals" element={<ReferralsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;