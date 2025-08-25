import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import Logo from '../common/Logo';
import DarkModeToggle from '../common/DarkModeToggle';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isScrolled: boolean;
}

type DropdownItem = {
  label: string;
  path: string;
};

type NavItem = {
  label: string;
  path: string;
  dropdown?: DropdownItem[];
};

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { 
    label: 'About', 
    path: '/about',
    dropdown: [
      { label: 'About Us', path: '/about' },
      { label: 'Why Choose Us', path: '/why-choose-us' },
      { label: 'Industries', path: '/industries' }
    ]
  },
  { 
    label: 'Services', 
    path: '/services',
  },
  { label: 'Clients', path: '/clients' },
  { label: 'Referrals', path: '/referrals' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav 
      className={"fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md py-2 transition-all duration-300"}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center relative">
          {/* Logo on the left */}
          <Link to="/" className="flex items-center z-10" onClick={closeMenu}>
            <Logo />
          </Link>

          {/* Centered Navigation - Absolutely positioned */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button 
                      className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium rounded-md flex items-center space-x-1"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <span>{item.label}</span>
                      {activeDropdown === item.label ? 
                        <ChevronUp size={16} /> : 
                        <ChevronDown size={16} />
                      }
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-10"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <NavLink
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              className={({ isActive }) => 
                                `block px-4 py-2 text-sm ${
                                  isActive ? 'text-primary-600 dark:text-primary-400 bg-gray-50 dark:bg-gray-700' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400'
                                }`
                              }
                              onClick={() => {
                                setActiveDropdown(null);
                                closeMenu();
                              }}
                            >
                              {dropdownItem.label}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `px-3 py-2 rounded-md ${
                        isActive 
                          ? 'text-primary-600 dark:text-primary-400 font-medium' 
                          : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium'
                      }`
                    }
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Right side - Dark mode toggle and Get Started button */}
          <div className="hidden lg:flex items-center space-x-4 z-10">
            <DarkModeToggle />
            <Link 
              to="/contact" 
              className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors duration-300 font-medium"
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700"
          >
            <div className="container mx-auto px-4 py-3">
              {navItems.map((item) => (
                <div key={item.label} className="py-1">
                  {item.dropdown ? (
                    <div>
                      <button 
                        className="w-full flex justify-between items-center py-2 px-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                        onClick={() => toggleDropdown(item.label)}
                      >
                        <span>{item.label}</span>
                        {activeDropdown === item.label ? 
                          <ChevronUp size={16} /> : 
                          <ChevronDown size={16} />
                        }
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 py-1 border-l-2 border-gray-100 dark:border-gray-600 ml-3"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <NavLink
                                key={dropdownItem.path}
                                to={dropdownItem.path}
                                className={({ isActive }) => 
                                  `block py-2 px-3 text-sm ${
                                    isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'
                                  }`
                                }
                                onClick={closeMenu}
                              >
                                {dropdownItem.label}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => 
                        `block py-2 px-3 ${
                          isActive 
                            ? 'text-primary-600 dark:text-primary-400 font-medium' 
                            : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                        }`
                      }
                      onClick={closeMenu}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}
              <div className="mt-4 mb-2">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors duration-300"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;