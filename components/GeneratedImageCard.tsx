
import React from 'react';
import type { GeneratedImage } from '../types';
import DownloadIcon from './icons/DownloadIcon';

interface GeneratedImageCardProps {
  image: GeneratedImage;
}

const GeneratedImageCard: React.FC<GeneratedImageCardProps> = ({ image }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-900 border border-gray-700 transition-all duration-300 hover:border-yellow-400 hover:shadow-yellow-400/20">
      <img
        src={image.imageUrl}
        alt={image.prompt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-16 overflow-y-auto">{image.prompt}</p>
        <a
          href={image.imageUrl}
          download={`easytech-${image.id}.jpg`}
          className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 scale-0 group-hover:scale-100"
          aria-label="Télécharger l'image"
        >
          <DownloadIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default GeneratedImageCard;
