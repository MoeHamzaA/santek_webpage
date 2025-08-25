import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ClientsPage from './pages/ClientsPage';
import IndustriesPage from './pages/IndustriesPage';
import ReferralsPage from './pages/ReferralsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Service Pages
import ClinicFlowPage from './pages/services/ClinicFlowPage';
import TalentFlowPage from './pages/services/TalentFlowPage';
import FinOpsFlowPage from './pages/services/FinOpsFlowPage';
import SecureByDesignPage from './pages/services/SecureByDesignPage';
import AIAutomatedCallingPage from './pages/services/AIAutomatedCallingPage';
import AIConsultingPage from './pages/services/AIConsultingPage';

function App() {
  return (
    <DarkModeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="why-choose-us" element={<AboutPage whyChooseUs />} />
          <Route path="services" element={<ServicesPage />} />
          
          {/* Service Detail Pages */}
          <Route path="services/clinicflow" element={<ClinicFlowPage />} />
          <Route path="services/talentflow" element={<TalentFlowPage />} />
          <Route path="services/finopsflow" element={<FinOpsFlowPage />} />
          <Route path="services/secure-by-design" element={<SecureByDesignPage />} />
          <Route path="services/ai-calling" element={<AIAutomatedCallingPage />} />
          <Route path="services/ai-consulting" element={<AIConsultingPage />} />
          
          <Route path="clients" element={<ClientsPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="referrals" element={<ReferralsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </DarkModeProvider>
  );
}

export default App;