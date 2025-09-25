import React, { useState } from 'react';
import type { GeneratedImage } from '../types';
import { generateImage } from '../services/geminiService';
import LoadingSpinner from '../components/LoadingSpinner';
import GeneratedImageCard from '../components/GeneratedImageCard';
import SparklesIcon from '../components/icons/SparklesIcon';

interface GeneratorPageProps {
  addToGallery: (image: GeneratedImage) => void;
}

const aspectRatios = [
  { name: 'Carré', value: '1:1' },
  { name: 'Paysage', value: '16:9' },
  { name: 'Portrait', value: '9:16' },
  { name: 'Large', value: '4:3' },
  { name: 'Haut', value: '3:4' },
];

const examplePrompts = [
  "Un renard cybernétique dans une forêt néon, style art digital",
  "Un château flottant dans les nuages au coucher du soleil, peinture à l'huile",
  "Une ville sous-marine bioluminescente, concept art détaillé",
  "Portrait d'un robot jardinier avec un chapeau de paille, style rétro futuriste",
];

const GeneratorPage: React.FC<GeneratorPageProps> = ({ addToGallery }) => {
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastGeneratedImage, setLastGeneratedImage] = useState<GeneratedImage | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Veuillez entrer un prompt pour générer une image.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setLastGeneratedImage(null);

    try {
      const imageUrl = await generateImage(prompt, aspectRatio);
      const newImage: GeneratedImage = {
        id: new Date().toISOString(),
        prompt: prompt,
        imageUrl: imageUrl,
        createdAt: new Date().toISOString(),
      };
      setLastGeneratedImage(newImage);
      addToGallery(newImage);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">
        Générateur d'Images IA
      </h1>
      <p className="text-center text-gray-400 mb-8">
        Décrivez l'image que vous souhaitez créer. Soyez aussi précis que possible !
      </p>

      <div className="space-y-6">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ex: Un astronaute surfant sur une vague cosmique, style synthwave..."
          className="w-full h-28 p-4 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors resize-none"
          disabled={isLoading}
        />
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Format de l'image</label>
          <div className="flex flex-wrap gap-2">
            {aspectRatios.map((ratio) => (
              <button
                key={ratio.value}
                onClick={() => setAspectRatio(ratio.value)}
                disabled={isLoading}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                  aspectRatio === ratio.value
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {ratio.name} <span className="text-xs opacity-70">{ratio.value}</span>
              </button>
            ))}
          </div>
        </div>
        
        <button
          onClick={handleGenerate}
          disabled={isLoading || !prompt.trim()}
          className="w-full flex items-center justify-center bg-yellow-400 text-black font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition-all transform hover:scale-105 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed disabled:scale-100"
        >
          {isLoading ? (
            'Génération...'
          ) : (
            <>
              <SparklesIcon className="h-5 w-5 mr-2"/>
              Générer
            </>
          )}
        </button>

        <div>
           <p className="text-sm text-gray-400 mb-2">Pas d'inspiration ? Essayez ceci :</p>
           <div className="flex flex-wrap gap-2">
              {examplePrompts.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setPrompt(p)}
                  disabled={isLoading}
                  className="px-3 py-1 text-xs bg-transparent border border-gray-600 text-gray-400 rounded-full hover:bg-gray-800 hover:border-gray-500 transition-colors"
                >
                  {p}
                </button>
              ))}
           </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center items-center min-h-[300px]">
        {isLoading && <LoadingSpinner />}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {lastGeneratedImage && (
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-center text-white mb-4">Votre création :</h2>
            <GeneratedImageCard image={lastGeneratedImage} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneratorPage;