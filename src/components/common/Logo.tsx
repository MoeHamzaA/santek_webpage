import React from 'react';
import { CircuitBoard } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <CircuitBoard className="h-8 w-8 text-primary-600" />
      <div className="ml-2 font-bold text-lg">
        <span className="text-secondary-500">Santek Micro Solutions</span>
      </div>
    </div>
  );
};

export default Logo;