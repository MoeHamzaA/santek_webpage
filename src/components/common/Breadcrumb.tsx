import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const location = useLocation();
  
  // Generate breadcrumb items based on current path if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    let currentPath = '';
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Convert segment to readable label
      let label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      // Handle special cases
      if (segment === 'why-choose-us') {
        label = 'Why Choose Us';
      } else if (segment === 'clinicflow') {
        label = 'ClinicFlow™';
      } else if (segment === 'talentflow') {
        label = 'TalentFlow™';
      } else if (segment === 'finopsflow') {
        label = 'FinOpsFlow™';
      } else if (segment === 'secure-by-design') {
        label = 'Secure-by-Design';
      } else if (segment === 'ai-calling') {
        label = 'AI Automated Calling';
      } else if (segment === 'ai-consulting') {
        label = 'AI Consulting Services';
      }
      
      breadcrumbs.push({
        label,
        path: currentPath
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbItems = items || generateBreadcrumbs();
  
  if (breadcrumbItems.length === 0) {
    return null;
  }
  
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-3">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center space-x-2 text-sm">
          <Link
            to="/"
            className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
          >
            <Home size={16} className="mr-1" />
            Home
          </Link>
          
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={item.path}>
              <ChevronRight size={16} className="text-gray-400 dark:text-gray-500" />
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-gray-900 dark:text-white font-medium">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
