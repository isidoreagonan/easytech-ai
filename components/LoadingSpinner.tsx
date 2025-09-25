
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-400"></div>
      <p className="text-yellow-400 font-semibold">Génération en cours...</p>
    </div>
  );
};

export default LoadingSpinner;
