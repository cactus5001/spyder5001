import { motion, AnimatePresence } from 'framer-motion';
import { GlitchText } from './GlitchText';
import { NeonButton } from './NeonButton';
import { useState, useEffect, useRef } from 'react';

interface BioPanelProps {
  onComplete: () => void;
}

const bioLines = [
  '🕷️ DancingSpyder',
  'Hellow There..!',
  'This is DancingSpyder.',
  'A ghost in the machine.',
  'A private cyber investigator who walks the razor-thin line between truth and oblivion.',
  '',
  'I don\'t chase people — I chase their shadows.',
  'I don\'t follow trails — I weave through digital webs spun by unseen hands.',
  'I hunt the hunters. I watch the watchers.',
  'In the deepest corners of the dark, I am the flicker you didn\'t notice.',
  '',
  'You won\'t see me coming.',
  'You won\'t hear me leave.',
  'But I will know you before you even think to know me.',
  '',
  'Names, masks, aliases — they mean nothing here.',
  'Everything leaves a trace. Everything whispers.',
  'And I hear it all.',
  '',
  'If you\'ve found me, it\'s no accident.',
  'This is where your veil ends, and my work begins.',
  'Welcome to my world — where shadows are louder than screams.',
];

export const BioPanel = ({ onComplete }: BioPanelProps) => {
  const [lineIndex, setLineIndex] = useState(-1);
  const [showButton, setShowButton] = useState(false);
  const [currentLineComplete, setCurrentLineComplete] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start first line after panel settles
    const timer = setTimeout(() => {
      setLineIndex(0);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Only progress to next line when current line is complete
    if (currentLineComplete && lineIndex < bioLines.length - 1) {
      const timer = setTimeout(() => {
        setLineIndex(lineIndex + 1);
        setCurrentLineComplete(false);
      }, 1800); // Longer delay between lines
      return () => clearTimeout(timer);
    } else if (currentLineComplete && lineIndex === bioLines.length - 1) {
      // All lines complete, wait before showing button
      const timer = setTimeout(() => {
        setShowButton(true);
        onComplete();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentLineComplete, lineIndex, onComplete]);

  // Auto-scroll when new lines appear
  useEffect(() => {
    if (panelRef.current && lineIndex >= 0) {
      const scrollContainer = panelRef.current.querySelector('.bio-content');
      if (scrollContainer) {
        scrollContainer.scrollTo({
          top: scrollContainer.scrollHeight,
          behavior: 'smooth'
        });
      }
    }
  }, [lineIndex]);

  const handleLineComplete = () => {
    setCurrentLineComplete(true);
  };

  return (
    <motion.div
      className="relative z-10 w-full max-w-md mx-auto px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      ref={panelRef}
    >
      {/* Hacker terminal panel */}
      <motion.div
        className="relative backdrop-blur-md bg-black/90 rounded-none p-6 border border-cyan-500/70"
        style={{
          boxShadow: '0 0 2px rgba(34, 211, 238, 1), 0 0 15px rgba(34, 211, 238, 0.4), 0 0 30px rgba(34, 211, 238, 0.2), inset 0 0 80px rgba(0, 0, 0, 0.9)',
        }}
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Sharp corner accents - enhanced */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400 -translate-x-0.5 -translate-y-0.5" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400 translate-x-0.5 -translate-y-0.5" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400 -translate-x-0.5 translate-y-0.5" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400 translate-x-0.5 translate-y-0.5" />

        {/* Scan line effect - enhanced */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 211, 238, 0.15) 2px, rgba(34, 211, 238, 0.15) 4px)',
          }}
        />

        {/* Animated scan line */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(34, 211, 238, 0.3) 50%, transparent 100%)',
            height: '20px',
          }}
          animate={{
            y: ['0%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Terminal header */}
        <motion.div
          className="flex items-center gap-2 mb-4 pb-3 border-b border-cyan-500/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/90 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/90 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/90 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
          </div>
          <span className="font-mono text-xs text-cyan-400/70 tracking-widest">IDENTITY_PROTOCOL.exe</span>
        </motion.div>

        {/* Bio text lines with intelligent animation - scrollable */}
        <div className="bio-content space-y-3 font-roboto max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          <AnimatePresence mode="sync">
            {bioLines.map((line, index) => (
              <div key={index}>
                {index <= lineIndex && (
                  line === '' ? (
                    <div className="h-2" />
                  ) : (
                    <GlitchText
                      delay={0}
                      className={
                        index === 0
                          ? 'text-2xl font-piedra text-cyan-400 font-bold tracking-wider uppercase drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]'
                          : index === 1
                          ? 'text-base text-cyan-300 leading-relaxed font-mono'
                          : 'text-sm text-gray-300 leading-relaxed font-mono'
                      }
                      onComplete={index === lineIndex ? handleLineComplete : undefined}
                    >
                      {index === 0 ? line : `> ${line}`}
                    </GlitchText>
                  )
                )}
              </div>
            ))}
          </AnimatePresence>
        </div>

        {/* Contact button - appears after all lines */}
        <AnimatePresence>
          {showButton && (
            <motion.div
              className="mt-6 pt-5 border-t border-cyan-500/40"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <NeonButton
                href="https://t.me/dancingspyder_bot"
                delay={0}
                className="w-full"
              >
                <span className="text-sm font-mono tracking-wider">HAVE SOMETHING TO SAY?</span>
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

      {/* Data stream indicators - enhanced */}
      <motion.div
        className="absolute -top-1 right-4 font-mono text-[9px] text-cyan-400/50 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        [DECRYPTING...]
      </motion.div>

      <motion.div
        className="absolute -bottom-1 left-4 font-mono text-[9px] text-cyan-400/50 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
          delay: 2,
        }}
      >
        [IDENTITY_CONFIRMED]
      </motion.div>
    </motion.div>
  );
};