import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SafeImageProps {
  src: string;
  alt: string;
  fallbackType?: 'warrior' | 'sage' | 'council' | 'pottery' | 'default';
  className?: string;
  aspectRatioClass?: string;
  enableMotion?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackType = 'default',
  className = '',
  aspectRatioClass = 'aspect-4/3',
  enableMotion = true
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    try {
      setHasError(true);
      setIsLoading(false);
    } catch {
      setHasError(true);
    }
  };

  const handleLoad = () => {
    try {
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };

  // Precolumbian stylized SVG artistic fallback illustrations
  const renderFallbackSvg = () => {
    switch (fallbackType) {
      case 'warrior':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-900/10 via-amber-900/10 to-slate-900/20 dark:from-slate-900 dark:to-slate-950 text-center select-none">
            <svg
              viewBox="0 0 100 100"
              className="w-20 h-20 mb-3 text-blue-700 dark:text-amber-500 drop-shadow-md"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M50 15 C45 25, 30 20, 20 12 C35 28, 42 32, 45 38" stroke="#004B87" strokeWidth="2.5" fill="none" />
              <path d="M50 15 C55 25, 70 20, 80 12 C65 28, 58 32, 55 38" stroke="#004B87" strokeWidth="2.5" fill="none" />
              <path d="M50 10 L50 35" stroke="#ca8a04" strokeWidth="3" />
              <circle cx="50" cy="46" r="16" fill="#004B87" fillOpacity="0.1" stroke="#004B87" />
              <circle cx="43" cy="50" r="3.5" fill="#15803d" stroke="#ca8a04" />
              <path d="M53 43 Q58 46 54 49" stroke="#004B87" strokeWidth="2" />
              <path d="M36 62 L64 62 L50 82 Z" fill="#9a3412" fillOpacity="0.4" stroke="#004B87" strokeWidth="2" />
              <circle cx="50" cy="70" r="4" fill="#ca8a04" />
              <line x1="20" y1="88" x2="80" y2="28" stroke="#004B87" strokeWidth="2" />
            </svg>
            <span className="text-xs uppercase tracking-widest font-semibold text-blue-800 dark:text-amber-400">
              Retrato Precolombino · Cacique Guerrero
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 max-w-[200px] truncate">
              {alt}
            </span>
          </div>
        );

      case 'sage':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-900/10 via-amber-900/10 to-slate-900/20 dark:from-slate-900 dark:to-slate-950 text-center select-none">
            <svg
              viewBox="0 0 100 100"
              className="w-20 h-20 mb-3 text-blue-700 dark:text-emerald-500 drop-shadow-md"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="50" cy="48" r="28" stroke="#004B87" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="50" cy="48" r="20" fill="#166534" fillOpacity="0.15" stroke="#15803d" />
              <path d="M50 34 C44 40, 44 48, 50 56 C56 48, 56 40, 50 34 Z" fill="#b45309" stroke="#ca8a04" />
              <rect x="30" y="74" width="40" height="8" rx="2" fill="#004B87" stroke="#ca8a04" />
            </svg>
            <span className="text-xs uppercase tracking-widest font-semibold text-blue-800 dark:text-amber-400">
              Sabiduría & Diálogo · Consejo Ancestral
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 max-w-[200px] truncate">
              {alt}
            </span>
          </div>
        );

      case 'council':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-900/10 via-amber-900/10 to-slate-900/20 dark:from-slate-900 dark:to-slate-950 text-center select-none">
            <svg
              viewBox="0 0 100 100"
              className="w-20 h-20 mb-3 text-blue-700 dark:text-orange-500 drop-shadow-md"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="50" cy="50" r="34" stroke="#004B87" strokeWidth="1.5" />
              <circle cx="50" cy="22" r="5" fill="#004B87" stroke="#ca8a04" />
              <circle cx="78" cy="50" r="5" fill="#004B87" stroke="#ca8a04" />
              <circle cx="50" cy="78" r="5" fill="#004B87" stroke="#ca8a04" />
              <circle cx="22" cy="50" r="5" fill="#004B87" stroke="#ca8a04" />
              <path d="M50 40 Q46 48 50 54 Q54 48 50 40 Z" fill="#dc2626" stroke="#f59e0b" />
            </svg>
            <span className="text-xs uppercase tracking-widest font-semibold text-blue-800 dark:text-amber-400">
              El Monexico · Asamblea de Ancianos
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 max-w-[200px] truncate">
              {alt}
            </span>
          </div>
        );

      case 'pottery':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-900/10 via-amber-900/10 to-slate-900/20 dark:from-slate-900 dark:to-slate-950 text-center select-none">
            <svg
              viewBox="0 0 100 100"
              className="w-20 h-20 mb-3 text-orange-600 dark:text-amber-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <ellipse cx="50" cy="30" rx="22" ry="6" fill="#9a3412" stroke="#004B87" />
              <path d="M28 30 Q24 55 50 60 Q76 55 72 30" fill="#004B87" fillOpacity="0.1" stroke="#9a3412" strokeWidth="2.5" />
              <path d="M34 58 L28 80 L36 78 Z" fill="#9a3412" stroke="#004B87" />
              <path d="M66 58 L72 80 L64 78 Z" fill="#9a3412" stroke="#004B87" />
              <path d="M50 60 L50 82" stroke="#004B87" strokeWidth="2.5" />
            </svg>
            <span className="text-xs uppercase tracking-widest font-semibold text-blue-800 dark:text-amber-400">
              Alfarería Gran Nicoya · Cerámica Polícroma
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 max-w-[200px] truncate">
              {alt}
            </span>
          </div>
        );

      default:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-900/10 via-amber-900/10 to-slate-900/20 dark:from-slate-900 dark:to-slate-950 text-center select-none">
            <svg
              viewBox="0 0 100 100"
              className="w-20 h-20 mb-3 text-blue-700 dark:text-amber-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="50" cy="32" r="14" fill="#eab308" fillOpacity="0.25" stroke="#ca8a04" strokeWidth="2" />
              <path d="M12 76 L36 44 L60 76 Z" fill="#004B87" fillOpacity="0.3" stroke="#004B87" strokeWidth="2" />
              <path d="M44 76 L66 48 L88 76 Z" fill="#9a3412" fillOpacity="0.3" stroke="#9a3412" strokeWidth="2" />
              <path d="M10 82 Q30 80 50 82 Q70 84 90 82" stroke="#004B87" strokeWidth="2" />
            </svg>
            <span className="text-xs uppercase tracking-widest font-semibold text-blue-800 dark:text-amber-400">
              Patrimonio Precolombino de Nicaragua
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 max-w-[200px] truncate">
              {alt}
            </span>
          </div>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-xl shadow-xs ${aspectRatioClass} ${className}`}>
      {/* Animated Skeleton Loader (Tailwind animate-pulse) */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-200 dark:bg-slate-800 animate-pulse">
          <div className="w-12 h-12 rounded-full bg-slate-300 dark:bg-slate-700 mb-3" />
          <div className="w-28 h-3 rounded bg-slate-300 dark:bg-slate-700 mb-2" />
          <div className="w-20 h-2 rounded bg-slate-300/60 dark:bg-slate-700/60" />
          <span className="sr-only">Cargando recurso visual precolombino...</span>
        </div>
      )}

      {/* Actual motion.img or SVG fallback */}
      {!hasError ? (
        enableMotion ? (
          <motion.img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
          />
        ) : (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
          />
        )
      ) : (
        renderFallbackSvg()
      )}
    </div>
  );
};
