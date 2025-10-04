import { motion, AnimatePresence } from 'framer-motion';
import { GlitchText } from './GlitchText';
import { NeonButton } from './NeonButton';
import { useState, useEffect } from 'react';

interface BioPanelProps {
  onComplete: () => void;
}

const bioLines = [
  '🕷️ DancingSpyder',
  'Chasing shadows through neon lights.',
  'Anime-noir soul. Signal chaser.',
  'Always one step ahead.',
];

export const BioPanel = ({ onComplete }: BioPanelProps) => {
  const [lineIndex, setLineIndex] = useState(-1);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Intelligent delay sequence - start first line after panel settles
    const timer = setTimeout(() => {
      setLineIndex(0);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Progressive line reveal with longer delays
    if (lineIndex >= 0 && lineIndex < bioLines.length - 1) {
      const delay = lineIndex === 0 ? 1200 : 1000; // Longer delay for readability
      const timer = setTimeout(() => {
        setLineIndex(lineIndex + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else if (lineIndex === bioLines.length - 1) {
      // All lines visible, wait 1200ms before showing button
      const timer = setTimeout(() => {
        setShowButton(true);
        onComplete();
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [lineIndex, onComplete]);

  return (
    <motion.div
      className="relative z-10 w-full max-w-md mx-auto px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Hacker terminal panel */}
      <motion.div
        className="relative backdrop-blur-sm bg-black/80 rounded-none p-8 border border-cyan-500/60"
        style={{
          boxShadow: '0 0 1px rgba(34, 211, 238, 1), 0 0 10px rgba(34, 211, 238, 0.3), inset 0 0 60px rgba(0, 0, 0, 0.8)',
        }}
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Sharp corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

        {/* Scan line effect */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 211, 238, 0.1) 2px, rgba(34, 211, 238, 0.1) 4px)',
          }}
        />

        {/* Terminal header */}
        <motion.div
          className="flex items-center gap-2 mb-6 pb-3 border-b border-cyan-500/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/80" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <div className="w-2 h-2 rounded-full bg-green-500/80" />
          </div>
          <span className="font-mono text-xs text-cyan-400/60 tracking-wider">IDENTITY.exe</span>
        </motion.div>

        {/* Bio text lines with intelligent animation */}
        <div className="space-y-5 font-roboto">
          <AnimatePresence mode="sync">
            {bioLines.map((line, index) => (
              <div key={index}>
                {index <= lineIndex && (
                  <GlitchText
                    delay={0}
                    className={
                      index === 0
                        ? 'text-2xl font-piedra text-cyan-400 font-bold tracking-wider uppercase'
                        : 'text-sm text-gray-300 leading-relaxed font-mono'
                    }
                  >
                    {index === 0 ? line : `> ${line}`}
                  </GlitchText>
                )}
              </div>
            ))}
          </AnimatePresence>
        </div>

        {/* Contact button - appears after all lines */}
        <AnimatePresence>
          {showButton && (
            <motion.div
              className="mt-8 pt-6 border-t border-cyan-500/30"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <NeonButton
                href="https://t.me/AnonSpyder"
                delay={0}
                className="w-full"
              >
                <span className="text-sm font-mono tracking-wider">ESTABLISH_CONTACT</span>
                <motion.span
                  className="text-xs"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  _
                </motion.span>
              </NeonButton>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Data stream indicators */}
      <motion.div
        className="absolute -top-1 right-4 font-mono text-[8px] text-cyan-400/40 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        [LOADING...]
      </motion.div>

      <motion.div
        className="absolute -bottom-1 left-4 font-mono text-[8px] text-cyan-400/40 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
          delay: 1.5,
        }}
      >
        [DECRYPT_OK]
      </motion.div>
    </motion.div>
  );
};
