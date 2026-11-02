import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CACIQUES_DATA } from '../data/museumData';
import { Cacique } from '../types/museum';
import { CaciqueModal } from './CaciqueModal';
import { ArrowRight, MapPin, Shield } from 'lucide-react';

export const CaciquesGallery: React.FC = () => {
  const [selectedCacique, setSelectedCacique] = useState<Cacique | null>(null);

  const handleOpenCacique = (cacique: Cacique) => {
    try {
      setSelectedCacique(cacique);
    } catch (err) {
      console.error('Error al abrir biografía de cacique:', err);
    }
  };

  const handleCloseModal = () => {
    setSelectedCacique(null);
  };

  return (
    <section id="caciques" className="relative py-16 sm:py-24 bg-[#F4F1EA] dark:bg-[#181512] border-b border-stone-300/80 dark:border-stone-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#9C4125] dark:text-amber-500 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#9C4125] dark:bg-amber-500" />
            <span>Capítulo II · Semblanzas & Caudillos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
            Galería de{' '}
            <span className="italic font-normal font-serif text-[#9C4125] dark:text-amber-400">
              Caciques
            </span>{' '}
            Ilustres
          </h2>
          <p className="mt-4 text-base text-stone-600 dark:text-stone-300 leading-relaxed font-light">
            Estrategas militares inquebrantables, oradores de paz comunitaria y filósofos que cuestionaron la razón del viejo continente frente al conquistador.
          </p>
        </motion.div>

        {/* Caciques Grid with Collage Accents & Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CACIQUES_DATA.map((cacique, idx) => {
            // Alternate collage backdrop accents per card
            const isTerracotta = idx % 2 === 0;
            const accentColor = isTerracotta ? 'bg-[#9C4125]/20 dark:bg-[#9C4125]/30' : 'bg-[#2F4538]/20 dark:bg-[#2F4538]/30';

            return (
              <motion.div
                key={cacique.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-white/95 dark:bg-stone-900/95 border border-stone-300/80 dark:border-stone-800 hover:border-[#9C4125] dark:hover:border-amber-400 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between transition-all duration-300"
              >
                {/* Image Section with Collage Shape Behind */}
                <div className="relative">
                  {/* Collage Shape Behind */}
                  <div className={`absolute -top-4 -right-4 w-32 h-32 rounded-full ${accentColor} z-0 pointer-events-none blur-xs`} />
                  
                  {/* Portrait Container */}
                  <div className="relative z-10 overflow-hidden bg-stone-950 aspect-4/5 m-3 rounded-[1.5rem] border border-stone-300/60 dark:border-stone-800">
                    <motion.img
                      src={cacique.imagenUrl || "https://placehold.co/400x500/3E2723/E6C280?text=Retrato+Cacique"}
                      alt={`Retrato histórico de ${cacique.nombre}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Editorial vignette gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 pointer-events-none" />
                    
                    {/* Badge */}
                    <div className="absolute bottom-3 left-3 bg-[#F4F1EA]/90 dark:bg-stone-900/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-stone-800 dark:text-stone-200 border border-stone-300/60 dark:border-stone-700">
                      {cacique.periodo.split('(')[0].trim()}
                    </div>
                  </div>

                  {/* Card Editorial Info */}
                  <div className="p-5 pt-2">
                    <div className="flex items-center gap-1.5 text-[10px] text-[#9C4125] dark:text-amber-500 font-bold uppercase tracking-[0.2em] mb-1">
                      <Shield className="w-3.5 h-3.5" />
                      <span>{cacique.pueblo.split('(')[0]}</span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#9C4125] dark:group-hover:text-amber-400 transition-colors">
                      {cacique.nombre}
                    </h3>

                    <div className="flex items-center gap-1 text-[11px] text-stone-500 dark:text-stone-400 mt-1 mb-3 font-light">
                      <MapPin className="w-3 h-3 text-[#9C4125] dark:text-amber-400 shrink-0" />
                      <span className="truncate">{cacique.region}</span>
                    </div>

                    <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed font-light">
                      {cacique.resumen}
                    </p>
                  </div>
                </div>

                {/* Boutique Button */}
                <div className="p-5 pt-0 mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleOpenCacique(cacique)}
                    className="w-full py-2.5 px-4 text-xs uppercase tracking-[0.15em] font-semibold text-[#9C4125] dark:text-amber-400 group-hover:text-white bg-[#F4F1EA] dark:bg-stone-950 group-hover:bg-[#9C4125] dark:group-hover:bg-amber-600 border border-stone-300 dark:border-stone-800 group-hover:border-[#9C4125] rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>Biografía Completa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedCacique && (
          <CaciqueModal
            cacique={selectedCacique}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
