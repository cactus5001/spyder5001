import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface AvatarProps {
  shifted: boolean;
  onInitialAnimationComplete: () => void;
}

export const Avatar = ({ shifted, onInitialAnimationComplete }: AvatarProps) => {
  const [glowIntensity, setGlowIntensity] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGlowIntensity(1);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!animationComplete && glowIntensity === 1) {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
        onInitialAnimationComplete();
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [glowIntensity, animationComplete, onInitialAnimationComplete]);

  return (
    <motion.div
      className="relative z-10"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: shifted ? '-12vh' : 0,
      }}
      transition={{
        opacity: { duration: 1.5, ease: 'easeOut' },
        y: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      <motion.div
        className="relative w-44 h-44 mx-auto"
        animate={
          shifted
            ? {
                y: [0, -6, 0],
              }
            : {}
        }
        transition={
          shifted
            ? {
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : {}
        }
      >
        {/* Enhanced rotating hex frame overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 176 176">
            <motion.circle
              cx="88"
              cy="88"
              r="86"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                transformOrigin: '88px 88px',
              }}
            />
            <motion.circle
              cx="88"
              cy="88"
              r="82"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="0.5"
              strokeDasharray="3 9"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                transformOrigin: '88px 88px',
              }}
            />
          </svg>
        </div>

        {/* Enhanced glow with multiple layers */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 60%)',
            filter: 'blur(20px)',
          }}
          animate={{
            opacity: glowIntensity === 1 ? [0.4, 0.6, 0.4] : 0,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
          animate={{
            opacity: glowIntensity === 1 ? [0.2, 0.4, 0.2] : 0,
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />

        {/* Avatar image container with enhanced styling */}
        <motion.div
          className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-cyan-500"
          style={{
            boxShadow: '0 0 2px rgba(34, 211, 238, 1), 0 0 15px rgba(34, 211, 238, 0.5), 0 0 30px rgba(34, 211, 238, 0.3)',
          }}
        >
          <img
            src="https://i.ibb.co.com/WNr2Y0MN/6271691458611973591-1.jpg"
            alt="DancingSpyder"
            className="w-full h-full object-cover"
            loading="eager"
          />

          {/* Slower scan line */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-cyan-400/15 to-transparent"
            animate={{
              y: ['-100%', '100%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
              repeatDelay: 4,
            }}
          />

          {/* Grid overlay - enhanced */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(34, 211, 238, 0.5) 4px, rgba(34, 211, 238, 0.5) 5px)',
            }}
          />
        </motion.div>

        {/* Enhanced corner brackets */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-cyan-400 -translate-x-1.5 -translate-y-1.5 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-cyan-400 translate-x-1.5 -translate-y-1.5 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-cyan-400 -translate-x-1.5 translate-y-1.5 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-cyan-400 translate-x-1.5 translate-y-1.5 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
      </motion.div>
    </motion.div>
  );
};
