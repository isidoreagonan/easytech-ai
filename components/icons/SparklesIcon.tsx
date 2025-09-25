
import React from 'react';

const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    {...props}
    xmlns="http://www.w3.org/2000/svg" 
    className="h-6 w-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L11 15l-4 6 6-4 3.707-3.707a1 1 0 011.414 0L21 19m-5-4l2.293 2.293a1 1 0 010 1.414L15 21l-4 6 6-4 3.707-3.707a1 1 0 011.414 0L23 19" />
  </svg>
);

export default SparklesIcon;
