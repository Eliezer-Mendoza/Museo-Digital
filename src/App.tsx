/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CacicazgosSection } from './components/CacicazgosSection';
import { CaciquesGallery } from './components/CaciquesGallery';
import { MonexicoSection } from './components/MonexicoSection';
import { CulturaReligionSection } from './components/CulturaReligionSection';
import { MinijuegosSection } from './components/MinijuegosSection';
import { Footer } from './components/Footer';
import { GlosarioModal } from './components/GlosarioModal';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AmbientAudioPlayer } from './components/AmbientAudioPlayer';

export default function App() {
  const [isGlosarioOpen, setIsGlosarioOpen] = useState(false);

  return (
    <ThemeProvider>
      <ErrorBoundary fallbackTitle="Museo Digital de los Pueblos Originarios">
        <div className="min-h-screen bg-[#F4F1EA] text-stone-900 dark:bg-[#181512] dark:text-stone-100 flex flex-col font-sans selection:bg-[#9C4125] selection:text-white transition-colors duration-300">
          {/* Navigation Top Bar with Theme Switcher */}
          <Header onOpenGlosario={() => setIsGlosarioOpen(true)} />

          <main className="flex-1">
            {/* Hero Section */}
            <ErrorBoundary fallbackTitle="Portada y Crónica del Museo">
              <Hero />
            </ErrorBoundary>

            {/* Cacicazgos Principales: Nicaraos, Chorotegas y Sutiabas */}
            <ErrorBoundary fallbackTitle="Sección de Cacicazgos Principales">
              <CacicazgosSection />
            </ErrorBoundary>

            {/* Galería de Caciques Ilustres: Diriangén, Nicarao, Agateyte, Tenderí */}
            <ErrorBoundary fallbackTitle="Galería de Caciques">
              <CaciquesGallery />
            </ErrorBoundary>

            {/* El Monexico: Consejo Democrático de Ancianos */}
            <ErrorBoundary fallbackTitle="Sección El Monexico">
              <MonexicoSection />
            </ErrorBoundary>

            {/* Cultura, Religión, Panteón y Cerámica Gran Nicoya */}
            <ErrorBoundary fallbackTitle="Sección de Cultura y Cerámica">
              <CulturaReligionSection />
            </ErrorBoundary>

            {/* Minijuegos: Trivia del Monexico & Bolsa de Cacao */}
            <ErrorBoundary fallbackTitle="Apartado de Minijuegos y Curiosidades">
              <MinijuegosSection />
            </ErrorBoundary>
          </main>

          {/* Footer with Academic Citations and Navigation */}
          <Footer onOpenGlosario={() => setIsGlosarioOpen(true)} />

          {/* Modal Glosario Ancestral */}
          <AnimatePresence>
            {isGlosarioOpen && (
              <GlosarioModal
                isOpen={isGlosarioOpen}
                onClose={() => setIsGlosarioOpen(false)}
              />
            )}
          </AnimatePresence>

          {/* Ambient Precolumbian Audio Player */}
          <AmbientAudioPlayer />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
