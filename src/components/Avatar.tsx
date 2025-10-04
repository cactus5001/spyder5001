import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface AvatarProps {
  shifted: boolean;
  onInitialAnimationComplete: () => void;
}

export const Avatar = ({ shifted, onInitialAnimationComplete }: AvatarProps) => {
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGlowIntensity(1);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="relative z-10"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: shifted ? '-12vh' : 0,
      }}
      transition={{
        opacity: { duration: 1.2, ease: 'easeOut' },
        y: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
      }}
      onAnimationComplete={(definition) => {
        if (definition.opacity === 1 && !shifted) {
          onInitialAnimationComplete();
        }
      }}
    >
      <motion.div
        className="relative w-40 h-40 mx-auto"
        animate={
          shifted
            ? {
                y: [0, -4, 0],
              }
            : {}
        }
        transition={
          shifted
            ? {
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : {}
        }
      >
        {/* Sharp hex frame overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 160 160">
            <motion.circle
              cx="80"
              cy="80"
              r="78"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1"
              strokeDasharray="4 4"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                transformOrigin: '80px 80px',
              }}
            />
          </svg>
        </div>

        {/* Minimal glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 60%)',
            filter: 'blur(15px)',
          }}
          animate={{
            opacity: glowIntensity === 1 ? [0.3, 0.5, 0.3] : 0,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Avatar image container with sharp styling */}
        <motion.div
          className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-cyan-500"
          style={{
            boxShadow: '0 0 1px rgba(34, 211, 238, 1), 0 0 10px rgba(34, 211, 238, 0.4)',
          }}
        >
          <img
            src="https://i.ibb.co.com/WNr2Y0MN/6271691458611973591-1.jpg"
            alt="DancingSpyder"
            className="w-full h-full object-cover"
            loading="eager"
          />

          {/* Slow scan line */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 to-transparent"
            animate={{
              y: ['-100%', '100%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
              repeatDelay: 3,
            }}
          />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(34, 211, 238, 0.5) 4px, rgba(34, 211, 238, 0.5) 5px)',
            }}
          />
        </motion.div>

        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 -translate-x-1 -translate-y-1" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400 translate-x-1 -translate-y-1" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400 -translate-x-1 translate-y-1" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 translate-x-1 translate-y-1" />
      </motion.div>
    </motion.div>
  );
};
