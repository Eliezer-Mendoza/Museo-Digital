import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DEIDADES_PANTEON, CERAMICA_PIEZAS } from '../data/museumData';
import { Sun, CloudRain, Wind, Flame, Eye, Sparkles } from 'lucide-react';

export const CulturaReligionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ceramica' | 'religion' | 'cacao'>('ceramica');
  const [selectedPiezaIndex, setSelectedPiezaIndex] = useState<number>(0);

  const getDeidadIcon = (id: string) => {
    switch (id) {
      case 'tamagastad':
        return <Sun className="w-5 h-5 text-[#C28B38]" />;
      case 'quiateot':
        return <CloudRain className="w-5 h-5 text-[#2F4538] dark:text-emerald-400" />;
      case 'chiquinaut':
        return <Wind className="w-5 h-5 text-[#2F4538] dark:text-emerald-400" />;
      case 'mixcoatl':
        return <Flame className="w-5 h-5 text-[#9C4125] dark:text-amber-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C28B38]" />;
    }
  };

  const selectedPieza = CERAMICA_PIEZAS[selectedPiezaIndex] || CERAMICA_PIEZAS[0];

  return (
    <section id="cultura" className="relative py-16 sm:py-24 bg-[#F4F1EA] dark:bg-[#181512] border-b border-stone-300/80 dark:border-stone-800 transition-colors duration-300">
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
            <span>Capítulo IV · Arqueología, Cosmovisión & Cacao</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
            Cultura, Religión y{' '}
            <span className="italic font-normal font-serif text-[#9C4125] dark:text-amber-400">
              Arte Precolombino
            </span>
          </h2>
          <p className="mt-4 text-base text-stone-600 dark:text-stone-300 leading-relaxed font-light">
            La Gran Nicoya fue reverenciada en toda Mesoamérica por su maestría alfarera polícroma, la sacralidad de sus monedas de cacao y su profunda dialéctica con las fuerzas de la naturaleza.
          </p>
        </motion.div>

        {/* Tab Switcher in Boutique Capsule */}
        <div className="flex justify-start sm:justify-center mb-12 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 bg-stone-200/80 dark:bg-stone-900 border border-stone-300/80 dark:border-stone-800 rounded-full shadow-inner max-w-full">
            <button
              onClick={() => setActiveTab('ceramica')}
              className={`px-5 sm:px-7 py-2.5 text-xs uppercase tracking-[0.15em] font-semibold rounded-full transition-all duration-300 whitespace-nowrap shrink-0 ${
                activeTab === 'ceramica'
                  ? 'bg-[#9C4125] text-white shadow-md'
                  : 'text-stone-700 dark:text-stone-300 hover:text-[#9C4125] dark:hover:text-amber-400'
              }`}
            >
              Cerámica Gran Nicoya
            </button>
            <button
              onClick={() => setActiveTab('religion')}
              className={`px-5 sm:px-7 py-2.5 text-xs uppercase tracking-[0.15em] font-semibold rounded-full transition-all duration-300 whitespace-nowrap shrink-0 ${
                activeTab === 'religion'
                  ? 'bg-[#2F4538] text-white shadow-md'
                  : 'text-stone-700 dark:text-stone-300 hover:text-[#2F4538] dark:hover:text-emerald-400'
              }`}
            >
              Panteón de Dioses
            </button>
            <button
              onClick={() => setActiveTab('cacao')}
              className={`px-5 sm:px-7 py-2.5 text-xs uppercase tracking-[0.15em] font-semibold rounded-full transition-all duration-300 whitespace-nowrap shrink-0 ${
                activeTab === 'cacao'
                  ? 'bg-[#C28B38] text-white shadow-md'
                  : 'text-stone-700 dark:text-stone-300 hover:text-[#C28B38] dark:hover:text-amber-400'
              }`}
            >
              Cacao & Moneda
            </button>
          </div>
        </div>

        {/* Dynamic Tab Contents */}
        <AnimatePresence mode="wait">
          {/* TAB 1: CERAMICA */}
          {activeTab === 'ceramica' && (
            <motion.div
              key="ceramica"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Piece Selector */}
              <div className="lg:col-span-4 space-y-3">
                <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 font-bold mb-3">
                  Piezas Arqueológicas en Catálogo
                </div>
                {CERAMICA_PIEZAS.map((pieza, idx) => (
                  <button
                    key={pieza.id}
                    onClick={() => setSelectedPiezaIndex(idx)}
                    className={`w-full text-left p-5 rounded-[1.5rem] border transition-all duration-300 ${
                      selectedPiezaIndex === idx
                        ? 'bg-white dark:bg-stone-900 border-[#9C4125] dark:border-amber-500 shadow-md'
                        : 'bg-white/60 dark:bg-stone-900/40 border-stone-300/80 dark:border-stone-800 text-stone-700 dark:text-stone-400 hover:border-stone-400'
                    }`}
                  >
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#9C4125] dark:text-amber-500 mb-1 font-bold">
                      {pieza.estilo.split('(')[0]}
                    </div>
                    <div className="text-base font-serif font-bold text-stone-900 dark:text-stone-100">
                      {pieza.nombre}
                    </div>
                  </button>
                ))}
              </div>

              {/* Detailed Showcase Frame (Editorial Magazine Format) */}
              <div className="lg:col-span-8 bg-white/95 dark:bg-stone-900/95 border border-stone-300/80 dark:border-stone-800 rounded-[2.5rem] overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 flex items-center justify-center bg-[#F4F1EA] dark:bg-stone-950 border-b md:border-b-0 md:border-r border-stone-200 dark:border-stone-800 relative">
                    {/* Collage shape */}
                    <div className="absolute -top-3 -left-3 w-36 h-36 rounded-full bg-[#9C4125]/20 dark:bg-[#9C4125]/30 z-0 blur-xs" />

                    <div className="relative z-10 w-full aspect-square overflow-hidden rounded-[2rem] bg-stone-200 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 shadow-md">
                      <motion.img
                        src={selectedPieza.imagenUrl || "https://placehold.co/600x400/BF360C/FFFFFF?text=Ceramica+Precolombina"}
                        alt={selectedPieza.nombre}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#9C4125] dark:text-amber-500 font-bold mb-1">
                        Ficha Técnica Arqueológica
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-1">
                        {selectedPieza.nombre}
                      </h3>
                      <p className="text-xs text-stone-500 dark:text-stone-400 font-mono mb-3">
                        {selectedPieza.periodoAproximado}
                      </p>

                      <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-light mb-4">
                        {selectedPieza.descripcion}
                      </p>

                      <div className="border-t border-stone-200 dark:border-stone-800 pt-3 space-y-2 text-xs font-light">
                        <div>
                          <strong className="text-stone-900 dark:text-stone-100 block font-semibold">Materiales:</strong>
                          <span className="text-stone-600 dark:text-stone-400">{selectedPieza.material}</span>
                        </div>
                        <div>
                          <strong className="text-stone-900 dark:text-stone-100 block font-semibold">Uso Ceremonial:</strong>
                          <span className="text-stone-600 dark:text-stone-400">{selectedPieza.usoCeremonial}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-stone-200 dark:border-stone-800">
                      <span className="text-[11px] text-[#9C4125] dark:text-amber-400 font-mono">
                        Iconografía: {selectedPieza.motivosDecorativos.join(' · ')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: RELIGION & PANTEON */}
          {activeTab === 'religion' && (
            <motion.div
              key="religion"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {DEIDADES_PANTEON.map((deidad, idx) => (
                <div
                  key={deidad.id}
                  className="bg-white/95 dark:bg-stone-900/95 border border-stone-300/80 dark:border-stone-800 rounded-[2rem] overflow-hidden flex flex-col justify-between hover:border-[#9C4125] dark:hover:border-amber-400 shadow-sm transition-all duration-300"
                >
                  <div>
                    {/* Visual Card Image for Deity */}
                    <div className="relative bg-stone-200 dark:bg-stone-950 aspect-4/3 overflow-hidden m-3 rounded-[1.5rem] border border-stone-300/60 dark:border-stone-800">
                      <motion.img
                        src={deidad.imagenUrl || "https://placehold.co/600x400/BF360C/FFFFFF?text=Ceramica+Precolombina"}
                        alt={deidad.nombre}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-5 pt-2">
                      <div className="flex items-center gap-2 mb-2">
                        {getDeidadIcon(deidad.id)}
                        <span className="text-[10px] text-[#9C4125] dark:text-amber-500 font-bold uppercase tracking-[0.2em]">
                          {deidad.dominio.split(',')[0]}
                        </span>
                      </div>

                      <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
                        {deidad.nombre}
                      </h3>

                      <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                        {deidad.descripcion}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 mt-2">
                    <div className="pt-3 border-t border-stone-200 dark:border-stone-800 text-[11px] text-stone-500 dark:text-stone-400 font-light">
                      <span className="text-stone-700 dark:text-stone-300 font-semibold block mb-0.5">Simbología</span>
                      <span>{deidad.simbologia}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* TAB 3: EL CACAO */}
          {activeTab === 'cacao' && (
            <motion.div
              key="cacao"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="bg-white/95 dark:bg-stone-900/95 border border-stone-300/80 dark:border-stone-800 rounded-[2.5rem] p-6 sm:p-12 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Visual Image Card with Collage Shapes (5 cols) */}
                <div className="lg:col-span-5 relative">
                  <div className="absolute -top-4 -left-4 w-40 h-40 rounded-full bg-[#9C4125]/20 dark:bg-[#9C4125]/30 z-0 blur-xs" />
                  <div className="relative z-10 rounded-[2rem] overflow-hidden border border-stone-300 dark:border-stone-800 shadow-md aspect-4/3 bg-stone-200 dark:bg-stone-950">
                    <motion.img
                      src="https://placehold.co/600x400/BF360C/FFFFFF?text=Ceramica+Precolombina"
                      alt="Cacao Sagrado y Cerámica de Nicaragua Prehispánica"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content (7 cols) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#C28B38] font-bold">
                    Economía Sagrada Prehispánica
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100">
                    Moneda Oficial & Bebida Ritual del Pacífico
                  </h3>
                  <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed font-light">
                    En la Nicaragua prehispánica, el cacao no era un simple alimento: constituía la moneda patrón con la que se adquirían todos los bienes en el Tiangue. Quien poseía árboles de cacao tenía un banco vivo en sus tierras.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-5 rounded-[1.5rem] bg-[#F4F1EA] dark:bg-stone-950 border border-stone-300 dark:border-stone-800">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#9C4125] dark:text-amber-500 font-bold mb-1">
                        Como Moneda (Caxahual)
                      </h4>
                      <p className="text-xs text-stone-600 dark:text-stone-400 font-light">
                        Se contaban en unidades, manos (5 almendras), zontles (400) y xiquipiles (8,000). Había jueces que comprobaban que no estuviesen vaciadas con cera.
                      </p>
                    </div>

                    <div className="p-5 rounded-[1.5rem] bg-[#F4F1EA] dark:bg-stone-950 border border-stone-300 dark:border-stone-800">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#2F4538] dark:text-emerald-400 font-bold mb-1">
                        Como Bebida Sagrada
                      </h4>
                      <p className="text-xs text-stone-600 dark:text-stone-400 font-light">
                        Batida con agua, maíz tostado, vainilla silvestre y achiote rojo hasta formar densa espuma. Se servía en jícaras labradas para sellar tratados de paz.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#F4F1EA] dark:bg-stone-950 border border-stone-300 dark:border-stone-800 p-5 rounded-[1.5rem] flex items-start gap-3">
                    <Eye className="w-5 h-5 text-[#9C4125] dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-serif font-bold text-stone-900 dark:text-stone-100">
                        Cita del Cronista Gonzalo Fernández de Oviedo (1528)
                      </h4>
                      <p className="text-xs text-stone-600 dark:text-stone-400 italic mt-1 font-light">
                        "Ningún pobre ni vil persona puede beber este cacao, sino los caciques y grandes señores; porque si el pueblo común tuviese moneda en sus vientres, el comercio se perdería."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
