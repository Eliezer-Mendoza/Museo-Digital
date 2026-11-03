import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Sparkles, BookOpen, ArrowDownRight, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-stone-300/80 dark:border-stone-800 bg-[#F4F1EA] dark:bg-[#181512] transition-colors duration-300">
      {/* Editorial wireframe grid background */}
      <div className="absolute inset-0 bg-grid-editorial pointer-events-none opacity-60" />

      {/* Decorative organic color washes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9C4125]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2F4538]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        {/* Editorial Masthead / Header tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-stone-300 dark:border-stone-800/80 text-xs">
          <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#9C4125] dark:text-amber-500">
            <span className="w-2 h-2 rounded-full bg-[#9C4125] dark:bg-amber-500" />
            <span>Monografía Especial</span>
            <span className="text-stone-400 dark:text-stone-600">/</span>
            <span>Edición Patrimonial</span>
          </div>
          <div className="font-mono text-[11px] text-stone-500 dark:text-stone-400 flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-[#9C4125] dark:text-amber-400" />
            <span>NICARAGUA PREHISPÁNICA · GRAN NICOYA</span>
          </div>
        </div>

        {/* Asymmetrical Editorial Magazine Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Column 1: Editorial Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/70 dark:bg-stone-800/80 border border-stone-300/80 dark:border-stone-700 text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-700 dark:text-stone-300"
            >
              <Landmark className="w-3 h-3 text-[#9C4125] dark:text-amber-500" />
              <span>Archivo Histórico & Cosmovisión</span>
            </motion.div>

            {/* Hero Main Headline with Expressive Editorial Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-[4.25rem] font-serif font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-[1.08]"
              style={{ textWrap: 'balance' }}
            >
              Museo Digital de los{' '}
              <span className="italic font-normal font-serif text-[#9C4125] dark:text-amber-400">
                Pueblos Originarios
              </span>{' '}
              de Nicaragua
            </motion.h1>

            {/* Editorial Deck / Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed font-light max-w-2xl"
            >
              Un espacio interactivo dedicado a la memoria prehispánica:
              la filosofía dialéctica de los <strong className="font-semibold text-stone-900 dark:text-stone-100 underline decoration-[#9C4125] decoration-2 underline-offset-4">Nicaraos</strong>,
              el coraje y la alfarería polícroma de los <strong className="font-semibold text-stone-900 dark:text-stone-100 underline decoration-[#2F4538] decoration-2 underline-offset-4">Chorotegas</strong>,
              la resistencia de los <strong className="font-semibold text-stone-900 dark:text-stone-100 underline decoration-[#C28B38] decoration-2 underline-offset-4">Sutiabas</strong>,
              y el consejo asambleario del <strong className="font-semibold text-[#9C4125] dark:text-amber-400">Monexico</strong>.
            </motion.p>

            {/* Action Buttons in Boutique Styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <motion.a
                href="#cacicazgos"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 text-xs uppercase tracking-[0.15em] font-semibold text-white bg-[#9C4125] hover:bg-[#83331C] rounded-full transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explorar Cacicazgos</span>
              </motion.a>

              <motion.a
                href="#monexico"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 text-xs uppercase tracking-[0.15em] font-semibold text-white bg-[#2F4538] hover:bg-[#23352b] rounded-full transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <span>El Monexico</span>
              </motion.a>

              <motion.a
                href="#minijuegos"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 text-xs uppercase tracking-[0.15em] font-semibold text-stone-800 dark:text-stone-200 hover:text-[#9C4125] dark:hover:text-amber-400 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 rounded-full transition-colors inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#C28B38]" />
                <span>Trivia & Trueque</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Column 2: Collage Visual Composition (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* COLLAGE SHAPES (Under the image) */}
            {/* 1. Large Terracotta Circle desfasado */}
            <div className="absolute -top-6 -right-6 w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-[#9C4125]/20 dark:bg-[#9C4125]/30 z-0 pointer-events-none blur-xs" />
            
            {/* 2. Olive Green Pill Shape desfasado */}
            <div className="absolute -bottom-8 -left-8 w-44 h-44 sm:w-56 sm:h-56 rounded-[2.5rem] bg-[#2F4538]/15 dark:bg-[#2F4538]/25 -rotate-12 z-0 pointer-events-none" />

            {/* 3. Archival Stamp badge (Mostaza / Dorado) */}
            <div className="absolute -top-4 left-6 z-20 bg-[#F4F1EA] dark:bg-[#181512] border-2 border-dashed border-[#C28B38] px-3 py-1.5 rounded-full shadow-md rotate-[-6deg] text-[10px] font-mono uppercase tracking-widest text-[#9C4125] dark:text-amber-400 font-bold flex items-center gap-1.5">
              <span>★ Colección Arqueológica</span>
            </div>

            {/* Main Visual Image Card with Organic Rounded Border */}
            <div className="relative z-10 bg-white/90 dark:bg-stone-900/90 p-4 sm:p-5 rounded-[2rem] border border-stone-300/90 dark:border-stone-800 shadow-xl backdrop-blur-xs">
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-16/9 bg-[#e9e3d6] dark:bg-stone-800 border border-stone-300/60 dark:border-stone-700">
                <motion.img
                  src="/img/mapacacicazgo.jfif"
                  alt="Mapa y Territorios de los Pueblos Originarios de Nicaragua"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Caption and Wireframe metadata */}
              <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs text-stone-600 dark:text-stone-400">
                <div>
                  <span className="font-serif italic font-bold text-stone-900 dark:text-stone-100 block">
                    Fig. 01 — Cartografía Sagrada
                  </span>
                  <span className="text-[11px] text-stone-500 font-light">
                    Istmo de Rivas, Maribios & Managua
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center text-[#9C4125] dark:text-amber-400">
                  <ArrowDownRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Editorial Architecture Wireframe Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-stone-300 dark:border-stone-800 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          <div className="border-l-2 border-[#9C4125] pl-4">
            <span className="block text-stone-400 dark:text-stone-500 uppercase tracking-[0.2em] text-[10px] mb-1 font-bold">
              § 01 · Territorio
            </span>
            <span className="text-stone-900 dark:text-stone-100 font-serif font-bold text-base sm:text-lg">
              Gran Nicoya & Pacífico
            </span>
            <span className="block text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
              Corredor biológico lacustre
            </span>
          </div>

          <div className="border-l-2 border-[#2F4538] pl-4">
            <span className="block text-stone-400 dark:text-stone-500 uppercase tracking-[0.2em] text-[10px] mb-1 font-bold">
              § 02 · Cronología
            </span>
            <span className="text-stone-900 dark:text-stone-100 font-serif font-bold text-base sm:text-lg tabular-nums">
              800 d.C. — 1524 d.C.
            </span>
            <span className="block text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
              Periodos Policromo Medio y Tardío
            </span>
          </div>

          <div className="border-l-2 border-[#C28B38] pl-4">
            <span className="block text-stone-400 dark:text-stone-500 uppercase tracking-[0.2em] text-[10px] mb-1 font-bold">
              § 03 · Economía Viva
            </span>
            <span className="text-stone-900 dark:text-stone-100 font-serif font-bold text-base sm:text-lg">
              Almendras de Cacao
            </span>
            <span className="block text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
              Moneda estandarizada y bebida ritual
            </span>
          </div>

          <div className="border-l-2 border-[#9C4125] pl-4">
            <span className="block text-stone-400 dark:text-stone-500 uppercase tracking-[0.2em] text-[10px] mb-1 font-bold">
              § 04 · Democracia
            </span>
            <span className="text-stone-900 dark:text-stone-100 font-serif font-bold text-base sm:text-lg">
              Monexico Asambleario
            </span>
            <span className="block text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
              Poder militar subordinado al civil
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
