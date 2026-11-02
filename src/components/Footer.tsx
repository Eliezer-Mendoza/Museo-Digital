import React from 'react';
import { ArrowUp, BookOpen, Compass } from 'lucide-react';

interface FooterProps {
  onOpenGlosario?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGlosario }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F4F1EA] dark:bg-[#181512] border-t border-stone-300/80 dark:border-stone-800 text-stone-600 dark:text-stone-400 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-stone-300/80 dark:border-stone-800">
          {/* Brand and Mission */}
          <div className="space-y-3">
            <div className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9C4125] dark:bg-amber-500"></span>
              <span>
                <span className="italic font-normal font-serif text-[#9C4125] dark:text-amber-400 mr-1.5">Museo</span>
                <span>Pueblos Originarios</span>
              </span>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-light">
              Publicación interactiva y archivo patrimonial digital para honrar, divulgar y preservar la memoria de los pueblos Nicarao, Chorotega y Sutiaba, sus caciques y sus instituciones democráticas ancestrales.
            </p>
          </div>

          {/* Historical Sources */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#9C4125] dark:text-amber-500 font-bold mb-3 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Fuentes Históricas & Bibliografía</span>
            </h4>
            <ul className="text-xs text-stone-600 dark:text-stone-400 space-y-2 font-light">
              <li>· Gonzalo Fernández de Oviedo (Historia General y Natural de las Indias, 1528)</li>
              <li>· Fray Francisco de Bobadilla (Cuestionario a los sabios indígenas, 1528)</li>
              <li>· Dr. Jaime Incer Barquero (Nicaragua: Viajes, Rutas y Encuentros)</li>
              <li>· Julian N. Guerrero (Monografías Departamentales)</li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col justify-between items-start md:items-end">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#2F4538] dark:text-emerald-400 font-bold mb-3">
                Herramientas del Museo
              </h4>
              <div className="flex flex-col gap-2 text-xs">
                {onOpenGlosario && (
                  <button
                    onClick={onOpenGlosario}
                    className="text-stone-700 dark:text-stone-300 hover:text-[#9C4125] dark:hover:text-amber-400 text-left transition-colors flex items-center gap-1.5 font-medium"
                  >
                    <Compass className="w-3.5 h-3.5 text-[#9C4125] dark:text-amber-400" />
                    <span>Consultar Glosario Náhuatl y Mangue</span>
                  </button>
                )}
                <a href="#minijuegos" className="text-stone-700 dark:text-stone-300 hover:text-[#9C4125] dark:hover:text-amber-400 transition-colors">
                  · Practicar en la Trivia del Monexico
                </a>
                <a href="#cultura" className="text-stone-700 dark:text-stone-300 hover:text-[#9C4125] dark:hover:text-amber-400 transition-colors">
                  · Catálogo de Cerámica Gran Nicoya
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 px-4 py-2 rounded-full bg-white dark:bg-stone-900 hover:bg-stone-200/60 dark:hover:bg-stone-800 border border-stone-300 dark:border-stone-800 text-xs font-mono text-stone-700 dark:text-stone-300 hover:text-[#9C4125] dark:hover:text-white flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 dark:text-stone-500 gap-4 font-mono">
          <div>
            Patrimonio Cultural & Memoria Viva de Nicaragua · 2026
          </div>
          <div>
            Diseño Editorial Boutique · Rescate de la identidad mesoamericana
          </div>
        </div>
      </div>
    </footer>
  );
};
