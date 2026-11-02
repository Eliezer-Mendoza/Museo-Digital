import React, { useState } from 'react';
import { Menu, X, Compass, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenGlosario?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenGlosario }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'Cacicazgos', href: '#cacicazgos' },
    { label: 'Caciques', href: '#caciques' },
    { label: 'El Monexico', href: '#monexico' },
    { label: 'Cultura & Cerámica', href: '#cultura' },
    { label: 'Minijuegos', href: '#minijuegos' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F4F1EA]/95 dark:bg-[#181512]/95 backdrop-blur-md border-b border-stone-300/80 dark:border-stone-800 transition-colors duration-300">
      {/* Editorial Top Info Bar */}
      <div className="border-b border-stone-300/50 dark:border-stone-800/80 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-500 dark:text-stone-400">
          <div className="flex items-center gap-3">
            <span className="text-[#9C4125] dark:text-amber-500 font-bold">Vol. I</span>
            <span className="text-stone-300 dark:text-stone-700">|</span>
            <span>Archivo Etnohistórico & Arqueológico</span>
          </div>
          <div>
            <span>Mesoamérica Pacífica · 800 d.C. — 1524 d.C.</span>
          </div>
        </div>
      </div>

      {/* Main Masthead Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6 sm:gap-8">
        {/* Zone 1: Brand Wordmark (Editorial Serif) */}
        <a
          href="#"
          className="group text-lg sm:text-xl font-serif tracking-tight text-stone-900 dark:text-stone-100 transition-colors duration-300 whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#9C4125] dark:bg-amber-500 inline-block"></span>
          <span>
            <span className="italic font-normal text-[#9C4125] dark:text-amber-400 mr-1.5 font-serif">Museo</span>
            <span className="font-serif font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 text-sm sm:text-base">Pueblos Originarios</span>
          </span>
        </a>

        {/* Zone 2: Nav Links with wireframe hover underlines */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] uppercase tracking-[0.15em] font-semibold text-stone-700 dark:text-stone-300">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#9C4125] dark:hover:text-amber-400 transition-colors duration-200 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#9C4125] dark:hover:border-amber-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions + Theme Switcher */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* THEME TOGGLE BUTTON (Modo Oscuro vs Tema Claro Crema) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-stone-300 dark:border-stone-800 bg-stone-100/70 dark:bg-stone-900 text-stone-700 dark:text-amber-400 hover:text-[#9C4125] dark:hover:text-amber-300 transition-colors duration-300 flex items-center gap-1.5 text-xs font-medium"
            title={isDarkMode ? 'Cambiar a Tema Claro (Crema Boutique)' : 'Cambiar a Modo Oscuro (Museo Nocturno)'}
            aria-label={isDarkMode ? 'Cambiar a Tema Claro' : 'Cambiar a Modo Oscuro'}
          >
            {isDarkMode ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="hidden xl:inline text-[10px] uppercase tracking-wider font-semibold text-stone-200">Crema</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-[#9C4125]" />
                <span className="hidden xl:inline text-[10px] uppercase tracking-wider font-semibold text-stone-700">Carbón</span>
              </>
            )}
          </motion.button>

          {onOpenGlosario && (
            <button
              onClick={onOpenGlosario}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-[11px] uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 hover:text-[#9C4125] dark:hover:text-amber-400 bg-transparent hover:bg-stone-200/50 dark:hover:bg-stone-800/60 border border-stone-300 dark:border-stone-800 rounded-xl transition-all active:scale-95 whitespace-nowrap shrink-0"
              title="Abrir Glosario Náhuatl y Mangue"
            >
              <Compass className="w-3.5 h-3.5 text-[#9C4125] dark:text-amber-400" />
              <span>Glosario</span>
            </button>
          )}

          <a
            href="#minijuegos"
            className="px-4 py-2 text-[11px] uppercase tracking-wider font-semibold text-white bg-[#9C4125] hover:bg-[#83331C] dark:bg-amber-600 dark:hover:bg-amber-500 rounded-xl transition-all active:scale-95 shadow-sm whitespace-nowrap shrink-0"
          >
            Trivia
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-700 dark:text-stone-300 hover:text-[#9C4125] dark:hover:text-white rounded-lg focus:outline-none"
            aria-label="Alternar menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F4F1EA] dark:bg-[#181512] border-b border-stone-300 dark:border-stone-800 px-4 pt-3 pb-5 space-y-2 transition-colors duration-300">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="block px-3 py-2 text-sm font-serif font-semibold text-stone-800 dark:text-stone-200 hover:text-[#9C4125] dark:hover:text-amber-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/60 rounded-lg"
            >
              {item.label}
            </a>
          ))}
          {onOpenGlosario && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGlosario();
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-[#9C4125] dark:text-amber-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/60 rounded-lg flex items-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Ver Glosario de Vocablos Ancestrales</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};
