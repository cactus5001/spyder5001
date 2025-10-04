import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface GlitchTextProps {
  children: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export const GlitchText = ({ children, delay = 0, className = '', onComplete }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 40;

    const startTimer = setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (currentIndex <= children.length) {
          setDisplayText(children.slice(0, currentIndex));

          if (Math.random() > 0.85) {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 80);
          }

          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsComplete(true);
          if (onComplete) {
            setTimeout(onComplete, 100);
          }
        }
      }, typingSpeed);

      return () => clearInterval(typeInterval);
    }, delay * 1000);

    return () => clearTimeout(startTimer);
  }, [children, delay, onComplete]);

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
        delay,
      }}
    >
      <motion.span
        className="relative z-10 inline-block"
        animate={
          glitchActive
            ? {
                x: [0, -1, 1, -1, 0],
              }
            : {}
        }
        transition={{
          duration: 0.08,
        }}
      >
        {displayText}
        {!isComplete && (
          <motion.span
            className="inline-block w-2 h-full bg-cyan-400 ml-0.5"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        )}
      </motion.span>

      {glitchActive && displayText && (
        <>
          <motion.span
            className="absolute inset-0 text-cyan-400 opacity-50"
            style={{
              textShadow: '1px 0 rgba(34, 211, 238, 0.9)',
              clipPath: 'inset(0 0 0 0)',
            }}
            animate={{
              x: [-1.5, 1.5],
              clipPath: [
                'inset(30% 0 50% 0)',
                'inset(10% 0 70% 0)',
              ],
            }}
            transition={{
              duration: 0.08,
            }}
          >
            {displayText}
          </motion.span>

          <motion.span
            className="absolute inset-0 text-red-400 opacity-50"
            style={{
              textShadow: '-1px 0 rgba(239, 68, 68, 0.9)',
              clipPath: 'inset(0 0 0 0)',
            }}
            animate={{
              x: [1.5, -1.5],
              clipPath: [
                'inset(60% 0 20% 0)',
                'inset(40% 0 40% 0)',
              ],
            }}
            transition={{
              duration: 0.08,
            }}
          >
            {displayText}
          </motion.span>
        </>
      )}
    </motion.div>
  );
};
