import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { audioEngine, SoundscapePreset } from '../utils/audioEngine';
import { 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Music, 
  ChevronDown, 
  ChevronUp, 
  Trees, 
  Sparkles,
  Flame
} from 'lucide-react';

export const AmbientAudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.4);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [previousVolume, setPreviousVolume] = useState<number>(0.4);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [preset, setPreset] = useState<SoundscapePreset>('selva');

  const togglePlay = () => {
    try {
      if (isPlaying) {
        audioEngine.pause();
        setIsPlaying(false);
      } else {
        audioEngine.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error('Error al alternar audio ambiental:', err);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const newVol = parseFloat(e.target.value);
      setVolume(newVol);
      if (newVol > 0) {
        setIsMuted(false);
      }
      audioEngine.setVolume(newVol);
    } catch (err) {
      console.error('Error en control de volumen:', err);
    }
  };

  const toggleMute = () => {
    try {
      if (isMuted) {
        setIsMuted(false);
        const restoredVol = previousVolume > 0 ? previousVolume : 0.4;
        setVolume(restoredVol);
        audioEngine.setVolume(restoredVol);
      } else {
        setPreviousVolume(volume);
        setIsMuted(true);
        setVolume(0);
        audioEngine.setVolume(0);
      }
    } catch (err) {
      console.error('Error al silenciar audio:', err);
    }
  };

  const handleSelectPreset = (newPreset: SoundscapePreset) => {
    try {
      setPreset(newPreset);
      audioEngine.setPreset(newPreset);
    } catch (err) {
      console.error('Error al seleccionar preset sonoro:', err);
    }
  };

  useEffect(() => {
    return () => {
      try {
        audioEngine.pause();
      } catch (e) {
        console.warn(e);
      }
    };
  }, []);

  const presetsConfig: { id: SoundscapePreset; label: string; icon: typeof Trees; desc: string }[] = [
    {
      id: 'selva',
      label: 'Selva de Ometepe',
      icon: Trees,
      desc: 'Brisa en las ceibas y aves tropicales'
    },
    {
      id: 'ocarina',
      label: 'Ocarina de Barro',
      icon: Sparkles,
      desc: 'Melodía mística pentatónica y viento'
    },
    {
      id: 'ritual',
      label: 'Ritual del Monexico',
      icon: Flame,
      desc: 'Tambor huehuetl ceremonial y brisa'
    }
  ];

  const currentPresetObj = presetsConfig.find((p) => p.id === preset) || presetsConfig[0];

  return (
    <aside
      aria-label="Reproductor de audio ambiental"
      className="fixed bottom-4 right-4 z-40 max-w-[calc(100vw-2rem)] select-none"
    >
      <motion.div
        layout
        className="bg-[#F4F1EA]/95 dark:bg-stone-900/95 backdrop-blur-md border border-stone-300 dark:border-stone-800 shadow-2xl rounded-[2rem] overflow-hidden text-stone-800 dark:text-stone-100 transition-colors duration-300"
      >
        {/* Minibar */}
        <div className="flex items-center gap-3 p-2.5 sm:px-4">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={togglePlay}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-sm shrink-0 ${
              isPlaying
                ? 'bg-[#9C4125] text-white font-bold'
                : 'bg-stone-200/80 dark:bg-stone-800 text-[#9C4125] dark:text-amber-400 hover:bg-stone-300'
            }`}
            title={isPlaying ? 'Pausar audio ambiental' : 'Reproducir sonidos de la naturaleza'}
            aria-label={isPlaying ? 'Pausar audio' : 'Reproducir audio'}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </motion.button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2.5 text-left focus:outline-none"
          >
            <div className="flex items-center gap-1 h-4 w-5">
              {isPlaying ? (
                <>
                  <motion.span
                    animate={{ height: ['4px', '14px', '6px', '16px', '4px'] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                    className="w-1 bg-[#9C4125] dark:bg-amber-500 rounded-full"
                  />
                  <motion.span
                    animate={{ height: ['12px', '6px', '16px', '4px', '12px'] }}
                    transition={{ repeat: Infinity, duration: 1.0, ease: 'easeInOut', delay: 0.2 }}
                    className="w-1 bg-[#2F4538] dark:bg-emerald-500 rounded-full"
                  />
                  <motion.span
                    animate={{ height: ['6px', '16px', '4px', '12px', '6px'] }}
                    transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut', delay: 0.4 }}
                    className="w-1 bg-[#C28B38] dark:bg-amber-400 rounded-full"
                  />
                </>
              ) : (
                <Music className="w-4 h-4 text-stone-400 dark:text-stone-500" />
              )}
            </div>

            <div className="hidden sm:block">
              <div className="text-xs font-serif font-bold text-stone-800 dark:text-stone-200 leading-tight">
                {isPlaying ? currentPresetObj.label : 'Audio Ancestral'}
              </div>
              <div className="text-[10px] text-stone-500 dark:text-stone-400 font-light">
                {isPlaying ? 'Sonido en vivo' : 'Presiona para escuchar'}
              </div>
            </div>
          </button>

          <button
            onClick={toggleMute}
            className="p-1.5 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white rounded-lg transition-colors ml-1"
            title={isMuted ? 'Activar sonido' : 'Silenciar'}
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4 text-stone-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-stone-700 dark:text-stone-300" />
            )}
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white rounded-lg transition-colors"
            title={isExpanded ? 'Ocultar ajustes' : 'Ajustar volumen y atmósfera'}
            aria-label="Alternar panel de sonido"
          >
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>

        {/* Expanded Drawer */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="border-t border-stone-200 dark:border-stone-800 p-4 space-y-4 w-72 sm:w-80"
            >
              {/* Volume Slider */}
              <div>
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-stone-600 dark:text-stone-400 font-bold mb-2">
                  <span>Volumen Ambiental</span>
                  <span className="font-mono tabular-nums text-[#9C4125] dark:text-amber-400">
                    {Math.round(volume * 100)}%
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={toggleMute} className="text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white">
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-3.5 h-3.5" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-full accent-[#9C4125] bg-stone-200 dark:bg-stone-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                    aria-label="Control deslizante de volumen"
                  />
                </div>
              </div>

              {/* Soundscape Presets */}
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[#9C4125] dark:text-amber-500 font-bold mb-2">
                  Atmósferas Precolombinas
                </div>
                <div className="space-y-1.5">
                  {presetsConfig.map((item) => {
                    const isSelected = preset === item.id;
                    const IconComp = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelectPreset(item.id)}
                        className={`w-full text-left p-2.5 rounded-xl border transition-all duration-200 flex items-center gap-2.5 ${
                          isSelected
                            ? 'bg-[#9C4125]/10 dark:bg-stone-800 border-[#9C4125] dark:border-amber-400 text-[#9C4125] dark:text-amber-200 font-semibold'
                            : 'bg-[#F4F1EA] dark:bg-stone-950 border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900 hover:bg-stone-200/50'
                        }`}
                      >
                        <div
                          className={`p-1.5 rounded-lg ${
                            isSelected ? 'bg-[#9C4125] text-white dark:bg-amber-600' : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                          }`}
                        >
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs truncate">
                            {item.label}
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate font-light">
                            {item.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="text-[10px] text-slate-500 dark:text-slate-400 text-center font-light pt-1 border-t border-slate-200 dark:border-slate-800">
                Sintetizador Web Audio sin interrupciones ni uso de datos móviles
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </aside>
  );
};
