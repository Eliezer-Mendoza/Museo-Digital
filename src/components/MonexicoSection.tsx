import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PILARES_MONEXICO } from '../data/museumData';
import { PilarMonexico } from '../types/museum';
import { Users, ShieldCheck, Scale, Sprout, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

export const MonexicoSection: React.FC = () => {
  const [activePilarId, setActivePilarId] = useState<string>('asamblea_guegues');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<number>(0);

  const getPilarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5 text-[#9C4125] dark:text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#2F4538] dark:text-emerald-400" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-[#C28B38] dark:text-amber-400" />;
      case 'Sprout':
        return <Sprout className="w-5 h-5 text-[#2F4538] dark:text-emerald-400" />;
      default:
        return <Users className="w-5 h-5 text-[#9C4125] dark:text-amber-400" />;
    }
  };

  const activePilar: PilarMonexico = (() => {
    try {
      return PILARES_MONEXICO.find((p) => p?.id === activePilarId) || PILARES_MONEXICO[0];
    } catch (e) {
      console.error('Error al resolver pilar del Monexico:', e);
      return PILARES_MONEXICO[0];
    }
  })();

  const caseStudies = [
    {
      titulo: 'Caso A: Declaración de Guerra o Tratado de Paz',
      contexto: 'Un señorío vecino amenaza las cosechas de cacao en los linderos fluviales.',
      proceso: 'El Teythe militar propone lanzar una ofensiva inmediata. Sin embargo, el Monexico convoca a los Guegues. Antes de derramar sangre de los jóvenes, envían una embajada con ramas de palma y mantas de algodón para negociar límites y comercio compartido.',
      leccion: 'La fuerza armada siempre subordinada al juicio sosegado de los ancianos.'
    },
    {
      titulo: 'Caso B: Juicio Oral por Hurto en el Tiangue',
      contexto: 'Un comerciante foráneo es sorprendido con almendras de cacao adulteradas y rellenas de cera.',
      proceso: 'En asamblea abierta, los jueces del mercado presentan las almendras falsas. El Monexico no condena a muerte ni a prisión física: impone la restitución del triple del valor en algodón hilado a la víctima y jornadas de limpieza comunal en la plaza sagrada.',
      leccion: 'Justicia reparadora que restaura la armonía social y no el castigo cruel.'
    },
    {
      titulo: 'Caso C: Reparto de Granos ante Prolongada Sequía',
      contexto: 'El dios Quiateot no envía lluvias durante el mes de siembra del maíz y los campesinos temen hambruna.',
      proceso: 'El Monexico abre de inmediato las "trojes" o graneros comunitarios de reserva que se habían alimentado con excedentes de años anteriores. Se distribuye ración equitativa a cada familia según el número de hijos y ancianos.',
      leccion: 'Solidaridad y economía comunal preventiva ante calamidades climáticas.'
    }
  ];

  return (
    <section id="monexico" className="relative py-16 sm:py-24 bg-[#F4F1EA] dark:bg-[#181512] border-b border-stone-300/80 dark:border-stone-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#2F4538] dark:text-emerald-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#2F4538] dark:bg-emerald-400" />
            <span>Capítulo III · Democracia Asamblearia</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
            El Monexico:{' '}
            <span className="italic font-normal font-serif text-[#9C4125] dark:text-amber-400">
              El Gran Consejo
            </span>{' '}
            de Ancianos
          </h2>
          <p className="mt-4 text-base text-stone-600 dark:text-stone-300 leading-relaxed font-light">
            Siglos antes de las constituciones modernas, los pueblos originarios de Nicaragua practicaban una democracia deliberativa donde ningún líder gobernaba por derecho divino ni herencia arbitraria.
          </p>
        </motion.div>

        {/* 4 Pillars Interactive Layout with Magazine Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Pillar Selector List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 font-bold mb-3">
              Fundamentos del Sistema Político
            </h3>

            {PILARES_MONEXICO.map((pilar, index) => {
              const isActive = pilar.id === activePilar?.id;
              return (
                <motion.button
                  key={pilar.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setActivePilarId(pilar.id)}
                  className={`w-full text-left p-5 rounded-[1.5rem] border transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? 'bg-white dark:bg-stone-900 border-[#9C4125] dark:border-amber-500 shadow-lg'
                      : 'bg-white/60 dark:bg-stone-900/40 border-stone-300/80 dark:border-stone-800 hover:border-stone-400'
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 ${isActive ? 'bg-[#9C4125]/10 dark:bg-amber-500/10' : 'bg-stone-200/60 dark:bg-stone-800'}`}>
                    {getPilarIcon(pilar.icono)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-serif font-bold truncate ${isActive ? 'text-[#9C4125] dark:text-amber-400' : 'text-stone-800 dark:text-stone-200'}`}>
                        {pilar.titulo}
                      </span>
                      {isActive && <ChevronRight className="w-4 h-4 text-[#9C4125] dark:text-amber-400 shrink-0" />}
                    </div>
                    <span className="text-xs text-stone-500 dark:text-stone-400 block mt-0.5 line-clamp-1 font-light">
                      {pilar.subtitulo}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Active Pillar Panel (7 cols) - Collage Intercalated */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {activePilar && (
                <motion.div
                  key={activePilar.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="relative bg-white/95 dark:bg-stone-900/95 border border-stone-300/80 dark:border-stone-800 rounded-[2.5rem] p-6 sm:p-10 shadow-xl"
                >
                  {/* Top Image + Headline Split with Collage Shapes */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 mb-6 items-center">
                    <div className="sm:col-span-5 relative">
                      {/* Collage Background Element */}
                      <div className="absolute -top-3 -left-3 w-32 h-32 rounded-full bg-[#2F4538]/20 dark:bg-[#2F4538]/30 z-0 blur-xs" />

                      <div className="relative z-10 rounded-[1.5rem] overflow-hidden border border-stone-300 dark:border-stone-800 shadow-md aspect-4/3 bg-stone-200 dark:bg-stone-950">
                        <motion.img
                          src={activePilar.imagenUrl || "https://placehold.co/800x400/0277BD/FFFFFF?text=Consejo+Monexico"}
                          alt={activePilar.titulo}
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

                    <div className="sm:col-span-7">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#9C4125] dark:text-amber-500 font-bold mb-1">
                        {getPilarIcon(activePilar.icono)}
                        <span>Pilar de Soberanía</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-1">
                        {activePilar.titulo}
                      </h3>
                      <p className="text-xs text-stone-500 dark:text-stone-400 font-light">
                        {activePilar.subtitulo}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5 text-stone-700 dark:text-stone-300 text-sm leading-relaxed font-light">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 font-bold mb-1">
                        Cómo Funcionaba en la Práctica
                      </h4>
                      <p className="text-stone-800 dark:text-stone-200">{activePilar.descripcion}</p>
                    </div>

                    <div className="p-5 rounded-[1.5rem] bg-[#F4F1EA] dark:bg-stone-950 border border-stone-300 dark:border-stone-800 shadow-xs">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#9C4125] dark:text-amber-500 font-bold mb-1.5 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#9C4125] dark:text-amber-400" />
                        <span>Trascendencia Democrática Prehispánica</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200">
                        {activePilar.significadoDemocrático}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 font-bold mb-1">
                        Protocolo de la Asamblea
                      </h4>
                      <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm">
                        {activePilar.detallePractico}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Interactive Deliberation Case Studies in Boutique Wireframe Box */}
        <div className="bg-white/95 dark:bg-stone-900/95 border border-stone-300/80 dark:border-stone-800 rounded-[2.5rem] p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-200 dark:border-stone-800">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#9C4125] dark:text-amber-500 font-bold mb-1 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-[#C28B38]" />
                <span>Simulación Histórica Interactiva</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">
                ¿Cómo Resolvía el Monexico los Grandes Dilemas?
              </h3>
            </div>

            <div className="flex gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCaseStudy(index)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-200 ${
                    selectedCaseStudy === index
                      ? 'bg-[#9C4125] text-white shadow-xs'
                      : 'bg-[#F4F1EA] dark:bg-stone-950 text-stone-700 dark:text-stone-400 hover:text-[#9C4125] border border-stone-300 dark:border-stone-800'
                  }`}
                >
                  Dilema 0{index + 1}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCaseStudy}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-serif font-bold text-[#9C4125] dark:text-amber-400">
                {caseStudies[selectedCaseStudy].titulo}
              </h4>

              <div className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-light">
                <span className="font-semibold text-stone-900 dark:text-stone-100">El Conflicto: </span>
                {caseStudies[selectedCaseStudy].contexto}
              </div>

              <div className="p-5 rounded-2xl bg-[#F4F1EA] dark:bg-stone-950 border border-stone-300 dark:border-stone-800 text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed shadow-xs">
                <span className="font-serif font-bold text-[#2F4538] dark:text-emerald-400 block mb-1">
                  Resolución del Consejo de los Guegues:
                </span>
                {caseStudies[selectedCaseStudy].proceso}
              </div>

              <div className="text-xs text-stone-700 dark:text-stone-300 italic font-serif">
                ⚖️ <strong className="font-sans font-semibold">Principio Comunitario:</strong> {caseStudies[selectedCaseStudy].leccion}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
