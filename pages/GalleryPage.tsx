
import React from 'react';
import type { GeneratedImage } from '../types';
import GeneratedImageCard from '../components/GeneratedImageCard';
// Fix: Use namespace import for react-router-dom to solve module resolution issues.
import * as ReactRouterDOM from 'react-router-dom';

interface GalleryPageProps {
  images: GeneratedImage[];
}

const GalleryPage: React.FC<GalleryPageProps> = ({ images }) => {
  const sortedImages = [...images].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
        Galerie des créations
      </h1>

      {sortedImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sortedImages.map((image) => (
            <GeneratedImageCard key={image.id} image={image} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">Votre galerie est vide.</p>
          <p className="text-gray-500 mt-2">Commencez à créer pour voir vos images apparaître ici.</p>
          <ReactRouterDOM.Link
            to="/generator"
            className="mt-6 inline-block bg-yellow-400 text-black font-bold px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors"
          >
            Créer une image
          </ReactRouterDOM.Link>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
