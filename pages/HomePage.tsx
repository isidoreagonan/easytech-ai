
import React from 'react';
// Fix: Use namespace import for react-router-dom to solve module resolution issues.
import * as ReactRouterDOM from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-8rem)] px-4">
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #facc15 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      ></div>
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
          EASY<span className="text-yellow-400">TECH</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
          Générateur d’images IA ultra puissant
        </p>
        <p className="mt-2 max-w-2xl mx-auto text-gray-400">
          Transformez vos idées en visuels époustouflants en quelques secondes.
        </p>
        <div className="mt-8">
          <ReactRouterDOM.Link
            to="/generator"
            className="inline-block bg-yellow-400 text-black font-bold text-lg px-8 py-3 rounded-full hover:bg-yellow-500 transition-transform transform hover:scale-105 shadow-lg"
          >
            Créer maintenant
          </ReactRouterDOM.Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
