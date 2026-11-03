import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUIZ_QUESTIONS, TRUEQUE_MERCADO_ITEMS } from '../data/museumData';
import { QuizQuestion, TruequeItem } from '../types/museum';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  RotateCcw, 
  CheckCircle, 
  XCircle, 
  Coins, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Sparkles, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';

interface ShuffledOption {
  text: string;
  originalIndex: number;
}

export const MinijuegosSection: React.FC = () => {
  const [activeGameMode, setActiveGameMode] = useState<'trivia' | 'trueque'>('trivia');

  // TRIVIA STATE
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOriginalIndex, setSelectedOriginalIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [shakeTrigger, setShakeTrigger] = useState<boolean>(false);

  // TRUEQUE STATE
  const [cacaoBalance] = useState<number>(120);
  const [cart, setCart] = useState<{ [key: string]: number }>({
    conejo: 1,
    tamal: 4,
    calabaza: 2
  });

  const currentQuestion: QuizQuestion | undefined = QUIZ_QUESTIONS[currentQuestionIndex];

  // SHUFFLE ALGORITHM (Fisher-Yates) via useMemo
  // Intercala aleatoriamente las opciones cada vez que cambia la pregunta activa
  const shuffledOptions = useMemo<ShuffledOption[]>(() => {
    try {
      if (!currentQuestion?.opciones) return [];
      const optionsList: ShuffledOption[] = currentQuestion.opciones.map((text, originalIndex) => ({
        text,
        originalIndex
      }));

      // Algoritmo Fisher-Yates de mezcla aleatoria
      for (let i = optionsList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = optionsList[i];
        optionsList[i] = optionsList[j];
        optionsList[j] = temp;
      }
      return optionsList;
    } catch (err) {
      console.error('Error al mezclar opciones de la pregunta:', err);
      return (currentQuestion?.opciones || []).map((text, idx) => ({ text, originalIndex: idx }));
    }
  }, [currentQuestionIndex, currentQuestion]);

  // Trigger celebration confetti safely
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#9C4125', '#2F4538', '#C28B38', '#ffffff']
      });
    } catch (e) {
      console.warn('Efecto confetti no disponible o bloqueado:', e);
    }
  };

  const handleSelectOption = (originalIndex: number) => {
    try {
      if (isAnswered) return;

      setSelectedOriginalIndex(originalIndex);
      setIsAnswered(true);

      const correct = originalIndex === currentQuestion?.respuestaCorrecta;
      setIsCorrect(correct);

      if (correct) {
        setScore((prev) => prev + 1);
        triggerConfetti();
      } else {
        setShakeTrigger(true);
        setTimeout(() => setShakeTrigger(false), 500);
      }
    } catch (err) {
      console.error('Error al evaluar respuesta del quiz:', err);
    }
  };

  const handleNextQuestion = () => {
    try {
      if (currentQuestionIndex + 1 < QUIZ_QUESTIONS.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedOriginalIndex(null);
        setIsAnswered(false);
        setIsCorrect(null);
      } else {
        setQuizFinished(true);
      }
    } catch (err) {
      console.error('Error al avanzar pregunta:', err);
    }
  };

  const handleResetQuiz = () => {
    try {
      setCurrentQuestionIndex(0);
      setSelectedOriginalIndex(null);
      setIsAnswered(false);
      setIsCorrect(null);
      setScore(0);
      setQuizFinished(false);
      setShakeTrigger(false);
    } catch (err) {
      console.error('Error al reiniciar quiz:', err);
    }
  };

  const handleAddToCart = (item: TruequeItem) => {
    try {
      const currentQty = cart[item.id] || 0;
      const totalCostIfAdded = calculateTotalSpent() + item.costoCacaoAlmendras;
      if (totalCostIfAdded <= cacaoBalance) {
        setCart((prev) => ({
          ...prev,
          [item.id]: currentQty + 1
        }));
      }
    } catch (err) {
      console.error('Error en compra de trueque:', err);
    }
  };

  const handleRemoveFromCart = (item: TruequeItem) => {
    try {
      const currentQty = cart[item.id] || 0;
      if (currentQty > 0) {
        setCart((prev) => ({
          ...prev,
          [item.id]: currentQty - 1
        }));
      }
    } catch (err) {
      console.error('Error al remover item de trueque:', err);
    }
  };

  const calculateTotalSpent = (): number => {
    try {
      return TRUEQUE_MERCADO_ITEMS.reduce((sum, item) => {
        const qty = cart[item.id] || 0;
        return sum + qty * item.costoCacaoAlmendras;
      }, 0);
    } catch {
      return 0;
    }
  };

  const totalGastado = calculateTotalSpent();
  const cacaoRestante = cacaoBalance - totalGastado;

  return (
    <section id="minijuegos" className="relative py-16 sm:py-24 bg-[#F4F1EA] dark:bg-[#181512] border-b border-stone-300/80 dark:border-stone-800 transition-colors duration-300">
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
            <span>Capítulo V · Gamificación & Economía Ancestral</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
            Curiosidades &{' '}
            <span className="italic font-normal font-serif text-[#9C4125] dark:text-amber-400">
              Minijuegos
            </span>{' '}
            Precolombinos
          </h2>
          <p className="mt-4 text-base text-stone-600 dark:text-stone-300 leading-relaxed font-light">
            Pon a prueba tus saberes sobre las crónicas coloniales o experimenta el trueque prehispánico administrando tu bolsa sagrada de cacao en el Tiangue.
          </p>
        </motion.div>

        {/* Mode Selector Tabs (Boutique Capsule Style) */}
        <div className="flex justify-start sm:justify-center mb-12">
          <div className="inline-flex p-1.5 bg-stone-200/80 dark:bg-stone-900 border border-stone-300/80 dark:border-stone-800 rounded-full shadow-inner">
            <button
              onClick={() => setActiveGameMode('trivia')}
              className={`px-5 sm:px-7 py-2.5 text-xs uppercase tracking-[0.15em] font-semibold rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeGameMode === 'trivia'
                  ? 'bg-[#9C4125] text-white shadow-md'
                  : 'text-stone-700 dark:text-stone-300 hover:text-[#9C4125] dark:hover:text-amber-400'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>El Reto del Monexico (Trivia)</span>
            </button>
            <button
              onClick={() => setActiveGameMode('trueque')}
              className={`px-5 sm:px-7 py-2.5 text-xs uppercase tracking-[0.15em] font-semibold rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeGameMode === 'trueque'
                  ? 'bg-[#2F4538] text-white shadow-md'
                  : 'text-stone-700 dark:text-stone-300 hover:text-[#2F4538] dark:hover:text-emerald-400'
              }`}
            >
              <Coins className="w-3.5 h-3.5" />
              <span>Bolsa de Cacao (Simulador)</span>
            </button>
          </div>
        </div>

        {/* GAME MODE 1: TRIVIA INTERACTIVA (Con Respuestas Mezcladas Aleatoriamente) */}
        {activeGameMode === 'trivia' && (
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {!quizFinished ? (
                <motion.div
                  key={currentQuestion?.id || currentQuestionIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: shakeTrigger ? [-8, 8, -6, 6, -3, 3, 0] : 0 
                  }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white/95 dark:bg-stone-900/95 border border-stone-300/80 dark:border-stone-800 rounded-[2.5rem] p-6 sm:p-10 shadow-xl"
                >
                  {/* Progress and Score Bar */}
                  <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-4 pb-4 border-b border-stone-200 dark:border-stone-800">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#9C4125] dark:text-amber-500 font-bold">
                      Pregunta {currentQuestionIndex + 1} de {QUIZ_QUESTIONS.length}
                    </span>
                    <span className="font-mono text-stone-700 dark:text-stone-300">
                      Aciertos: <strong className="text-[#9C4125] dark:text-amber-400 font-bold tabular-nums">{score}</strong> / {QUIZ_QUESTIONS.length}
                    </span>
                  </div>

                  {/* Progress Line */}
                  <div className="w-full bg-stone-200 dark:bg-stone-800 h-1.5 rounded-full overflow-hidden mb-6">
                    <div
                      className="bg-[#9C4125] dark:bg-amber-500 h-full transition-all duration-300"
                      style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                    />
                  </div>

                  {/* Trivia Banner Image with Collage Backdrops */}
                  <div className="relative mb-8">
                    {/* Artistic collage shapes behind image */}
                    <div className="absolute -top-4 -left-4 w-36 h-36 rounded-full bg-[#9C4125]/20 dark:bg-[#9C4125]/30 z-0 pointer-events-none blur-xs" />
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-[2rem] bg-[#2F4538]/15 dark:bg-[#2F4538]/25 rotate-6 z-0 pointer-events-none" />

                    {/* Stamp tag */}
                    <div className="absolute -top-3 right-4 z-20 bg-[#F4F1EA] dark:bg-stone-900 border border-[#C28B38] text-[#9C4125] dark:text-amber-400 text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                      ★ Enigma Prehispánico
                    </div>

                    <div className="relative z-10 rounded-[1.5rem] overflow-hidden aspect-16/9 sm:aspect-21/9 bg-[#e9e3d6] dark:bg-stone-800 border border-stone-300/80 dark:border-stone-800 shadow-md">
                      <motion.img
                      src="/img/Gemini_Generated_Image_6yxsqh6yxsqh6yxs.jfif"
                      alt="Ilustración del intercambio de un conejo por almendras de cacao"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Question Title with Editorial Serif */}
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2 leading-snug">
                    {currentQuestion?.pregunta}
                  </h3>

                  <p className="text-xs text-stone-500 dark:text-stone-400 mb-6 italic font-light">
                    Contexto histórico: {currentQuestion?.contextoHistorico}
                  </p>

                  {/* Options List with Random Shuffled Order */}
                  <div className="space-y-3 mb-6">
                    {shuffledOptions.map((item, shuffledIdx) => {
                      const isChosen = selectedOriginalIndex === item.originalIndex;
                      const isCorrectAnswer = item.originalIndex === currentQuestion?.respuestaCorrecta;

                      let buttonStyle = 'bg-stone-50/80 dark:bg-stone-950/60 border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200 hover:border-[#9C4125] hover:bg-[#9C4125]/5 dark:hover:bg-stone-800/80';

                      if (isAnswered) {
                        if (isCorrectAnswer) {
                          buttonStyle = 'bg-emerald-50 dark:bg-emerald-950/80 border-emerald-600 dark:border-emerald-500 text-emerald-900 dark:text-emerald-100 shadow-sm font-semibold';
                        } else if (isChosen && !isCorrectAnswer) {
                          buttonStyle = 'bg-rose-50 dark:bg-rose-950/80 border-rose-600 dark:border-rose-500 text-rose-900 dark:text-rose-100';
                        } else {
                          buttonStyle = 'bg-stone-100/50 dark:bg-stone-900/30 border-stone-200 dark:border-stone-800/60 text-stone-400 opacity-50';
                        }
                      }

                      return (
                        <motion.button
                          key={shuffledIdx}
                          whileHover={!isAnswered ? { scale: 1.01 } : {}}
                          whileTap={!isAnswered ? { scale: 0.99 } : {}}
                          onClick={() => handleSelectOption(item.originalIndex)}
                          disabled={isAnswered}
                          className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between text-xs sm:text-sm shadow-xs ${buttonStyle}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs text-[#9C4125] dark:text-amber-500 font-bold opacity-70">
                              {String.fromCharCode(65 + shuffledIdx)}.
                            </span>
                            <span>{item.text}</span>
                          </div>
                          {isAnswered && isCorrectAnswer && (
                            <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 ml-2" />
                          )}
                          {isAnswered && isChosen && !isCorrectAnswer && (
                            <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 ml-2" />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Instant Feedback Panel */}
                  <AnimatePresence>
                    {isAnswered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={`p-5 rounded-2xl border text-xs sm:text-sm mb-6 ${
                          isCorrect
                            ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                            : 'bg-stone-100 dark:bg-stone-950/80 border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200'
                        }`}
                      >
                        <div className="font-bold mb-1 flex items-center gap-1.5 font-serif">
                          {isCorrect ? (
                            <>
                              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                              <span className="text-emerald-800 dark:text-emerald-400">¡Acierto Documental!</span>
                            </>
                          ) : (
                            <>
                              <HelpCircle className="w-4 h-4 text-[#9C4125] dark:text-amber-400" />
                              <span className="text-[#9C4125] dark:text-amber-400">Dato de las Crónicas:</span>
                            </>
                          )}
                        </div>
                        <p className="leading-relaxed font-light">
                          {currentQuestion?.explicacionDidactica}
                        </p>
                        <span className="block mt-2 text-[11px] text-stone-500 dark:text-stone-400 font-mono">
                          Fuente: {currentQuestion?.fuenteHistorica}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Next / Continue Button in Terracotta */}
                  {isAnswered && (
                    <div className="flex justify-end">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleNextQuestion}
                        className="px-7 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white bg-[#9C4125] hover:bg-[#83331C] rounded-full transition-colors shadow-sm flex items-center gap-2"
                      >
                        <span>
                          {currentQuestionIndex + 1 < QUIZ_QUESTIONS.length
                            ? 'Siguiente Pregunta'
                            : 'Ver Resultados Finales'}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.button>
                    </div>
                  )}
                </motion.div>
              ) : (
                /* QUIZ RESULT SCREEN (Editorial Folio) */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/95 dark:bg-stone-900/95 border border-stone-300/80 dark:border-stone-800 rounded-[2.5rem] p-8 sm:p-12 text-center shadow-xl space-y-6"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#9C4125]/10 border border-[#9C4125]/30 flex items-center justify-center text-[#9C4125] dark:text-amber-400">
                    <Trophy className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-1">
                      ¡Completaste el Reto del Monexico!
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 font-light">
                      Evaluación de conocimientos sobre los pueblos originarios de Nicaragua
                    </p>
                  </div>

                  <div className="bg-[#F4F1EA] dark:bg-stone-950 py-5 px-8 rounded-2xl max-w-xs mx-auto border border-stone-300 dark:border-stone-800 shadow-xs">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 font-bold mb-1">
                      Puntuación Obtenida
                    </div>
                    <div className="text-4xl font-serif font-bold text-[#9C4125] dark:text-amber-400 tabular-nums">
                      {score} / {QUIZ_QUESTIONS.length}
                    </div>
                    <div className="text-xs text-stone-700 dark:text-stone-300 mt-2 font-medium">
                      {score >= 7
                        ? '¡Eres digno consejero del Monexico!'
                        : score >= 4
                        ? '¡Buen dominio de la memoria indígena!'
                        : 'Continúa explorando las salas del museo para profundizar tus saberes.'}
                    </div>
                  </div>

                  <div className="flex justify-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleResetQuiz}
                      className="px-7 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white bg-[#9C4125] hover:bg-[#83331C] rounded-full transition-colors flex items-center gap-2 shadow-xs"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Volver a Jugar</span>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* GAME MODE 2: SIMULADOR DE TRUEQUE CON CACAO */}
        {activeGameMode === 'trueque' && (
          <div className="bg-white/95 dark:bg-stone-900/95 border border-stone-300/80 dark:border-stone-800 rounded-[2.5rem] p-6 sm:p-10 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-200 dark:border-stone-800">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#2F4538] dark:text-emerald-400 font-bold mb-1 flex items-center gap-1.5">
                  <Coins className="w-4 h-4 text-[#C28B38]" />
                  <span>Mercado Ancestral del Tiangue</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
                  Simulador de Compra con Cacao
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 max-w-xl font-light">
                  Precios históricos registrados por el cronista Gonzalo Fernández de Oviedo en 1528. Administra tu bolsa de almendras y abastece a tu comunidad.
                </p>
              </div>

              {/* Cacao purse status */}
              <div className="bg-[#F4F1EA] dark:bg-stone-950 border border-stone-300 dark:border-stone-800 p-4 rounded-2xl flex items-center gap-4 shrink-0 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#C28B38]/20 border border-[#C28B38] flex items-center justify-center text-[#9C4125] dark:text-amber-400">
                  <Coins className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 font-bold">
                    Almendras Disponibles
                  </div>
                  <div className="text-2xl font-bold font-mono text-[#9C4125] dark:text-amber-300 tabular-nums">
                    {cacaoRestante} <span className="text-xs font-normal text-stone-500">/ {cacaoBalance}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Goods Catalog Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TRUEQUE_MERCADO_ITEMS.map((item) => {
                const qty = cart[item.id] || 0;
                const canAfford = cacaoRestante >= item.costoCacaoAlmendras;

                return (
                  <div
                    key={item.id}
                    className="bg-[#F4F1EA] dark:bg-stone-950 border border-stone-300/80 dark:border-stone-800 hover:border-[#9C4125] dark:hover:border-amber-400 rounded-[2rem] overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md"
                  >
                    <div>
                      {/* Image Thumbnail with Motion */}
                      <div className="relative bg-[#e9e3d6] dark:bg-stone-900 aspect-4/3 overflow-hidden">
                        {item.imagenUrl ? (
                          <motion.img
                            src={item.imagenUrl}
                            alt={item.nombre}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-stone-500 dark:text-stone-400">
                            <ShoppingBag className="w-8 h-8 opacity-60" aria-hidden="true" />
                            <span className="text-[10px] uppercase tracking-[0.15em] font-semibold">
                              Sin ilustración específica
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-5">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-base font-serif font-bold text-stone-900 dark:text-stone-100">
                            {item.nombre}
                          </span>
                          <span className="text-xs font-bold text-[#9C4125] dark:text-amber-400 font-mono bg-white dark:bg-stone-900 px-2.5 py-0.5 rounded-full border border-stone-300 dark:border-stone-700 whitespace-nowrap">
                            {item.costoCacaoAlmendras} {item.costoCacaoAlmendras === 1 ? 'almendra' : 'almendras'}
                          </span>
                        </div>

                        <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-light mb-2">
                          {item.descripcion}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 mt-auto border-t border-stone-200 dark:border-stone-800/80 flex items-center justify-between">
                      <div className="text-xs text-stone-600 dark:text-stone-400 font-medium">
                        En canasto: <strong className="text-[#9C4125] dark:text-amber-400 font-mono tabular-nums">{qty}</strong>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleRemoveFromCart(item)}
                          disabled={qty === 0}
                          className="p-2 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                          aria-label="Quitar una unidad"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleAddToCart(item)}
                          disabled={!canAfford}
                          className="p-2 rounded-full bg-[#9C4125] hover:bg-[#83331C] text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                          aria-label="Comprar una unidad"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Basket Summary */}
            <div className="mt-8 p-5 bg-[#F4F1EA] dark:bg-stone-950 rounded-2xl border border-stone-300 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-[#9C4125] dark:text-amber-400" />
                <div className="text-xs text-stone-700 dark:text-stone-300">
                  <span className="font-semibold text-stone-900 dark:text-stone-100">Total Invertido en el Tiangue:</span>{' '}
                  <span className="font-mono text-[#9C4125] dark:text-amber-400 font-bold">{totalGastado}</span> almendras de cacao.
                </div>
              </div>

              <button
                onClick={() => setCart({})}
                className="text-xs uppercase tracking-[0.15em] text-stone-500 hover:text-[#9C4125] dark:text-stone-400 dark:hover:text-amber-400 font-semibold transition-colors"
              >
                Vaciar Canasto de Trueque
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
