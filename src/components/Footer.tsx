import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './common/Logo';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ChevronRight 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Why Choose Us', path: '/why-choose-us' },
        { name: 'Careers', path: '/careers' },
        { name: 'News', path: '/news' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Tech Consulting', path: '/services#consulting' },
        { name: 'IT Recruitment', path: '/services#recruitment' },
        { name: 'Staffing Solutions', path: '/services#staffing' },
        { name: 'Project Management', path: '/services#project-management' },
        { name: 'Software Development', path: '/services#software-development' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block">
              <Logo />
            </Link>
            <p className="mt-6 text-gray-400 text-sm leading-relaxed">
              Providing innovative tech consulting and recruitment solutions to help businesses find the best talent and technology solutions.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <ChevronRight size={16} className="mr-1" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Toronto, ON, Canada
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-secondary-500 mr-2 flex-shrink-0" />
                <a href="tel:+14155551234" className="text-gray-400 hover:text-white transition-colors duration-300">
                  (416) 951-8616
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-secondary-500 mr-2 flex-shrink-0" />
                <a href="mailto:info@santekmicro.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  info@santekmicro.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Santek Micro Solutions. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link to="/terms" className="text-gray-500 hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-500 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;