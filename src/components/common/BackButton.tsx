import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show back button on home page
  if (location.pathname === '/') {
    return null;
  }

  const handleGoBack = () => {
    // If we're on a service detail page, go back to services page
    if (location.pathname.includes('/services/')) {
      navigate('/services');
    } else {
      // Otherwise go back to previous page in history
      navigate(-1);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-3">
      <div className="container mx-auto px-4 lg:px-8">
        <button
          onClick={handleGoBack}
          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </button>
      </div>
    </div>
  );
};

export default BackButton;
