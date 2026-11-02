import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CACICAZGOS_DATA } from '../data/museumData';
import { Cacicazgo } from '../types/museum';
import { MapPin, Coins, Scroll, Users, Compass, Sparkles, ArrowRight } from 'lucide-react';

export const CacicazgosSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('nicaraos');

  // Safe data retrieval
  const currentCacicazgo: Cacicazgo = (() => {
    try {
      return CACICAZGOS_DATA.find((c) => c?.id === selectedId) || CACICAZGOS_DATA[0];
    } catch (err) {
      console.error('Error al obtener datos del Cacicazgo:', err);
      return CACICAZGOS_DATA[0];
    }
  })();

  return (
    <section id="cacicazgos" className="relative py-16 sm:py-24 bg-[#F4F1EA] dark:bg-[#181512] border-b border-stone-300/80 dark:border-stone-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#9C4125] dark:text-amber-500 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#9C4125] dark:bg-amber-500" />
            <span>Capítulo I · Geografía Política & Etnohistoria</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
            Los Tres Grandes{' '}
            <span className="italic font-normal font-serif text-[#9C4125] dark:text-amber-400">
              Cacicazgos
            </span>{' '}
            del Pacífico
          </h2>
          <p className="mt-4 text-base text-stone-600 dark:text-stone-300 leading-relaxed font-light">
            Sociedades complejas con lenguas propias, agricultura de regadío, mercados vibrantes y modelos asamblearios que asombraron a los primeros cronistas de Indias.
          </p>
        </motion.div>

        {/* Boutique Segmented Selector Tabs */}
        <div className="flex justify-start sm:justify-center mb-12 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 bg-stone-200/80 dark:bg-stone-900 border border-stone-300/80 dark:border-stone-800 rounded-full shadow-inner max-w-full">
            {CACICAZGOS_DATA.map((item, index) => {
              const isActive = item.id === (currentCacicazgo?.id || selectedId);
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`px-5 sm:px-7 py-2.5 text-xs uppercase tracking-[0.15em] font-semibold rounded-full transition-all duration-300 whitespace-nowrap shrink-0 flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#9C4125] text-white shadow-md'
                      : 'text-stone-700 dark:text-stone-300 hover:text-[#9C4125] dark:hover:text-amber-400'
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-75">0{index + 1}.</span>
                  <span>{item.nombre}</span>
                  <span className={`text-[10px] hidden sm:inline ${isActive ? 'text-amber-200' : 'text-stone-500'}`}>
                    ({item.etnia})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Cacicazgo Editorial Magazine Card with Collage Layout */}
        <AnimatePresence mode="wait">
          {currentCacicazgo && (
            <motion.article
              key={currentCacicazgo.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white/95 dark:bg-stone-900/95 border border-stone-300/80 dark:border-stone-800 rounded-[2.5rem] overflow-hidden shadow-xl"
            >
              {/* Card Masthead Banner */}
              <div className="p-6 sm:p-10 border-b border-stone-200 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-950/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#9C4125] dark:text-amber-500 font-bold mb-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#9C4125] dark:text-amber-400" />
                    <span>{currentCacicazgo.familiaLinguistica}</span>
                    <span className="text-stone-300 dark:text-stone-700">|</span>
                    <span>Símbolo: {currentCacicazgo.simbolo}</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100">
                    Confederación de los {currentCacicazgo.nombre}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-400 mt-2 font-light">
                    <MapPin className="w-3.5 h-3.5 text-[#9C4125] dark:text-amber-400 shrink-0" />
                    <span>{currentCacicazgo.regionHistorica}</span>
                  </div>
                </div>

                {/* Settlements Editorial Stamp */}
                <div className="bg-[#F4F1EA] dark:bg-stone-950 p-4 rounded-2xl border border-stone-300 dark:border-stone-800 max-w-sm shadow-xs">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#9C4125] dark:text-amber-400 font-bold mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#C28B38]" />
                    <span>Asentamientos Clave</span>
                  </div>
                  <div className="text-xs text-stone-700 dark:text-stone-300 flex flex-wrap gap-x-2 gap-y-1 font-mono">
                    {currentCacicazgo.ciudadesPrincipales?.map((ciudad, idx) => (
                      <span key={idx}>
                        {ciudad}
                        {idx < currentCacicazgo.ciudadesPrincipales.length - 1 && (
                          <span className="text-stone-400 dark:text-stone-600 ml-2">/</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Asymmetrical Intercalated Content Grid: Visual Collage + Narrative */}
              <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* Visual Collage Column (5 cols) */}
                <div className="lg:col-span-5 space-y-6 relative">
                  {/* ARTISTIC COLLAGE SHAPES behind the image */}
                  <div className="absolute -top-6 -left-6 w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-[#9C4125]/20 dark:bg-[#9C4125]/30 z-0 pointer-events-none blur-xs" />
                  <div className="absolute -bottom-6 -right-6 w-40 h-40 sm:w-48 sm:h-48 rounded-[2rem] bg-[#2F4538]/15 dark:bg-[#2F4538]/25 rotate-6 z-0 pointer-events-none" />

                  {/* Collage Badge */}
                  <div className="absolute -top-3 right-4 z-20 bg-[#F4F1EA] dark:bg-stone-900 border border-[#C28B38] text-[#9C4125] dark:text-amber-400 text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                    ★ Cartografía Histórica
                  </div>

                  {/* Image Container with Organic Rounded Border */}
                  <div className="relative z-10 bg-stone-100 dark:bg-stone-950 p-3 sm:p-4 rounded-[2rem] border border-stone-300 dark:border-stone-800 shadow-md">
                    <div className="relative overflow-hidden rounded-[1.5rem] aspect-4/3 bg-stone-200 dark:bg-stone-900 border border-stone-300/80 dark:border-stone-800">
                      <motion.img
                        src={currentCacicazgo.imagenUrl || "https://placehold.co/800x400/2E7D32/FFFFFF?text=Mapa+de+Cacicazgos"}
                        alt={`Mapa y territorio del Cacicazgo ${currentCacicazgo.nombre}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 text-center">
                      <span className="font-serif italic font-bold text-stone-900 dark:text-stone-100 text-sm block">
                        Límites & Territorio {currentCacicazgo.nombre}
                      </span>
                      <span className="text-[11px] text-stone-500 dark:text-stone-400 block mt-0.5 font-light">
                        Archivo de Indias & Toponimia Ancestral
                      </span>
                    </div>
                  </div>

                  {/* Economic Resources Box in Olive & Stone */}
                  <div className="relative z-10 bg-[#F4F1EA] dark:bg-stone-950 border border-stone-300 dark:border-stone-800 rounded-[1.75rem] p-6 shadow-xs">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#2F4538] dark:text-emerald-400 font-bold mb-3 flex items-center gap-2">
                      <Coins className="w-3.5 h-3.5 text-[#2F4538] dark:text-emerald-400" />
                      <span>Economía & Recursos Vivos</span>
                    </h4>

                    <ul className="space-y-2.5">
                      {currentCacicazgo.economiaYRecursos?.map((recurso, i) => (
                        <li key={i} className="text-xs text-stone-700 dark:text-stone-300 flex items-start gap-2.5 font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#9C4125] dark:bg-amber-500 mt-1.5 shrink-0" />
                          <span>{recurso}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Narrative Column (7 cols) with Editorial Typography */}
                <div className="lg:col-span-7 space-y-7">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#9C4125] dark:text-amber-500 font-bold mb-2 flex items-center gap-2">
                      <Scroll className="w-3.5 h-3.5 text-[#9C4125] dark:text-amber-400" />
                      <span>Reseña Histórica & Origen</span>
                    </h4>
                    <p className="text-base sm:text-lg text-stone-800 dark:text-stone-200 leading-relaxed font-light">
                      {currentCacicazgo.descripcionCompleta}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-stone-200 dark:border-stone-800">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#2F4538] dark:text-emerald-400 font-bold mb-2 flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#2F4538] dark:text-emerald-400" />
                      <span>Estructura Política & Gobernanza</span>
                    </h4>
                    <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed font-light">
                      {currentCacicazgo.organizacionPolitica}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-stone-200 dark:border-stone-800">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 font-bold mb-2">
                      Legado a la Identidad Nacional
                    </h4>
                    <div className="text-sm sm:text-base font-serif italic text-stone-900 dark:text-stone-100 leading-relaxed bg-[#F4F1EA] dark:bg-stone-950 p-6 rounded-[1.5rem] border border-stone-300 dark:border-stone-800 relative shadow-xs">
                      <span className="text-3xl text-[#9C4125] dark:text-amber-500 font-serif leading-none absolute top-3 left-3 select-none">“</span>
                      <p className="pl-6">{currentCacicazgo.legadoCultural}</p>
                    </div>
                  </div>

                  <div className="text-[11px] text-stone-500 dark:text-stone-500 pt-2 font-mono flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C28B38]" />
                    <span>Fuente: Dr. Jaime Incer Barquero · Nicaragua: Viajes, Rutas y Encuentros</span>
                  </div>
                </div>
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
