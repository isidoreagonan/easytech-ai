
import React from 'react';
// Fix: Use namespace import for react-router-dom to solve module resolution issues.
import * as ReactRouterDOM from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GeneratorPage from './pages/GeneratorPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import useLocalStorage from './hooks/useLocalStorage';
import type { GeneratedImage } from './types';

const App: React.FC = () => {
  const [gallery, setGallery] = useLocalStorage<GeneratedImage[]>('easytech-gallery', []);

  const addToGallery = (image: GeneratedImage) => {
    setGallery(prevGallery => [image, ...prevGallery]);
  };

  return (
    <ReactRouterDOM.HashRouter>
      <div className="min-h-screen flex flex-col bg-black text-white font-sans">
        <Header />
        <main className="flex-grow pt-16">
          <ReactRouterDOM.Routes>
            <ReactRouterDOM.Route path="/" element={<HomePage />} />
            <ReactRouterDOM.Route path="/generator" element={<GeneratorPage addToGallery={addToGallery} />} />
            <ReactRouterDOM.Route path="/gallery" element={<GalleryPage images={gallery} />} />
            <ReactRouterDOM.Route path="/about" element={<AboutPage />} />
            <ReactRouterDOM.Route path="/contact" element={<ContactPage />} />
          </ReactRouterDOM.Routes>
        </main>
        <Footer />
      </div>
    </ReactRouterDOM.HashRouter>
  );
};

export default App;
