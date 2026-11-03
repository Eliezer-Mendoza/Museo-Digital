import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cacique } from '../types/museum';
import { X, Shield, Award, MapPin, Quote } from 'lucide-react';

interface CaciqueModalProps {
  cacique: Cacique | null;
  onClose: () => void;
}

export const CaciqueModal: React.FC<CaciqueModalProps> = ({ cacique, onClose }) => {
  // Safe escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      try {
        if (e.key === 'Escape') onClose();
      } catch (err) {
        console.error('Error en escape listener:', err);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!cacique) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop with exit animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/80 backdrop-blur-xs"
        aria-hidden="true"
      />

      {/* Editorial Folio Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full max-w-3xl bg-[#F4F1EA] dark:bg-stone-900 border border-stone-300 dark:border-stone-800 rounded-[2.5rem] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto transition-colors duration-300"
      >
        {/* Header with Close Button */}
        <div className="p-6 sm:p-8 border-b border-stone-300/80 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-950/50 flex items-center justify-between shrink-0">
          <div>
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#9C4125] dark:text-amber-500 font-bold mb-1">
              Folio Histórico · {cacique.pueblo}
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
              {cacique.nombreNativo || cacique.nombre}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white bg-stone-200/60 dark:bg-stone-800 rounded-full transition-colors focus:outline-none"
            aria-label="Cerrar ventana del cacique"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-stone-700 dark:text-stone-300">
          {/* Top visual & fast summary with collage shapes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            <div className="sm:col-span-1 relative">
              {/* Collage shape */}
              <div className="absolute -top-3 -left-3 w-28 h-28 rounded-full bg-[#9C4125]/25 dark:bg-[#9C4125]/35 z-0 blur-xs" />
              
              <div className="relative z-10 rounded-[1.5rem] overflow-hidden border border-stone-300 dark:border-stone-800 shadow-md aspect-4/5 bg-[#e9e3d6] dark:bg-stone-950">
                <motion.img
                  src={cacique.imagenUrl || "https://placehold.co/400x500/3E2723/E6C280?text=Retrato+Cacique"}
                  alt={cacique.nombre}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="sm:col-span-2 space-y-3">
              <div className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#9C4125] dark:text-amber-400" />
                <span>{cacique.region}</span>
                <span className="text-stone-300 dark:text-stone-700">·</span>
                <span className="tabular-nums font-mono">{cacique.periodo}</span>
              </div>

              <div className="text-sm font-serif italic font-bold text-stone-900 dark:text-stone-100">
                {cacique.titulo}
              </div>

              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-light">
                {cacique.resumen}
              </p>
            </div>
          </div>

          {/* Historical Quote */}
          {cacique.fraseCelebre && (
            <div className="bg-white/80 dark:bg-stone-950/50 border border-stone-300 dark:border-stone-800 p-5 rounded-2xl flex items-start gap-4 shadow-xs">
              <Quote className="w-5 h-5 text-[#9C4125] dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm sm:text-base italic text-stone-900 dark:text-stone-100 font-serif leading-relaxed">
                  "{cacique.fraseCelebre}"
                </p>
                <span className="block text-[10px] text-[#9C4125] dark:text-amber-500 mt-2 uppercase tracking-[0.2em] font-bold">
                  Memoria Oral & Crónicas de Indias
                </span>
              </div>
            </div>
          )}

          {/* Full Biography Narrative */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#9C4125] dark:text-amber-500 font-bold mb-3 flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#9C4125] dark:text-amber-400" />
              <span>Biografía & Crónica Documental</span>
            </h4>
            <div className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed space-y-3 font-light">
              {cacique.historiaCompleta.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Key Historic Feat */}
          <div className="bg-white/80 dark:bg-stone-950/60 p-5 rounded-2xl border border-stone-300 dark:border-stone-800">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#2F4538] dark:text-emerald-400 font-bold mb-1.5 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#C28B38]" />
              <span>Hito Histórico Sobresaliente</span>
            </h4>
            <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-light">
              {cacique.hazañaHistorica}
            </p>
          </div>

          {/* Leadership traits */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 font-bold mb-2">
              Rasgos de Liderazgo & Virtudes de Mando
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {cacique.rasgosLiderazgo.map((rasgo, index) => (
                <div key={index} className="text-xs text-stone-700 dark:text-stone-300 flex items-start gap-2 bg-white/80 dark:bg-stone-950 p-3 rounded-xl border border-stone-300/80 dark:border-stone-800 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9C4125] dark:bg-amber-500 mt-1.5 shrink-0" />
                  <span>{rasgo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-stone-100/60 dark:bg-stone-950/50 border-t border-stone-300/80 dark:border-stone-800 flex justify-end shrink-0">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-white bg-[#9C4125] hover:bg-[#83331C] rounded-full transition-colors shadow-xs"
          >
            Cerrar Folio
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
