import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { GLOSARIO_TERMINOS } from '../data/museumData';
import { X, BookMarked } from 'lucide-react';

interface GlosarioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlosarioModal: React.FC<GlosarioModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      try {
        if (e.key === 'Escape') onClose();
      } catch (err) {
        console.error('Error en escape listener:', err);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/80 backdrop-blur-xs"
        aria-hidden="true"
      />

      {/* Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-2xl bg-[#F4F1EA] dark:bg-stone-900 border border-stone-300 dark:border-stone-800 rounded-[2.5rem] shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col my-auto transition-colors duration-300"
      >
        <div className="p-6 border-b border-stone-300/80 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-950/50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-[#9C4125] dark:text-amber-400" />
            <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
              Glosario de Vocablos Mesoamericanos
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white bg-stone-200/60 dark:bg-stone-800 rounded-full transition-colors"
            aria-label="Cerrar glosario"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-light">
            Términos en náhuatl-pipil y mangue recopilados por cronistas de Indias e historiadores que definen las instituciones cívicas, objetos sagrados y la vida comunal prehispánica en Nicaragua.
          </p>

          <div className="divide-y divide-stone-200 dark:divide-stone-800">
            {GLOSARIO_TERMINOS.map((item, index) => (
              <div key={index} className="py-3.5">
                <span className="text-base font-serif font-bold text-[#9C4125] dark:text-amber-400 block mb-0.5">
                  {item.termino}
                </span>
                <span className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-light">
                  {item.significado}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-stone-100/60 dark:bg-stone-950/50 border-t border-stone-300/80 dark:border-stone-800 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white bg-[#9C4125] hover:bg-[#83331C] rounded-full transition-colors"
          >
            Entendido
          </button>
        </div>
      </motion.div>
    </div>
  );
};
