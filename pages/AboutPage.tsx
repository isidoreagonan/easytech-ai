
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
        À Propos d'EASY<span className="text-yellow-400">TECH</span>
      </h1>
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 space-y-6 text-gray-300">
        <p className="text-lg">
          EASYTECH est une plateforme de pointe conçue pour libérer votre créativité. Notre mission est de rendre la puissance de l'intelligence artificielle accessible à tous, en permettant de transformer de simples descriptions textuelles en œuvres d'art visuelles uniques.
        </p>
        <p>
          Que vous soyez un artiste cherchant l'inspiration, un designer en quête de concepts visuels, ou simplement curieux d'explorer les frontières de la technologie, EASYTECH est votre allié. Notre générateur d'images IA vous aide à créer des visuels saisissants, qu'ils soient réalistes, artistiques, ou totalement futuristes.
        </p>
        <p>
          Nous croyons en l'avenir de la création assistée par l'IA et nous nous engageons à fournir un outil simple, rapide et puissant pour donner vie à vos visions les plus audacieuses.
        </p>
        <div className="border-t border-yellow-400/30 pt-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Notre Vision</h2>
          <p>
            Démocratiser l'accès aux technologies créatives de l'IA, en offrant une expérience utilisateur fluide et intuitive pour que chacun puisse devenir un créateur visuel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
