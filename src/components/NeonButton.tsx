import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface NeonButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  delay?: number;
  className?: string;
}

export const NeonButton = ({ children, onClick, href, delay = 0, className }: NeonButtonProps) => {
  const ButtonComponent = href ? motion.a : motion.button;
  const extraProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : { onClick };

  return (
    <ButtonComponent
      className={clsx(
        'relative px-8 py-4 rounded-none font-roboto font-medium text-sm',
        'bg-black/90 backdrop-blur-md',
        'border-2 border-cyan-500',
        'text-cyan-400 hover:text-cyan-300',
        'transition-all duration-500',
        'shadow-[0_0_2px_rgba(34,211,238,1),0_0_15px_rgba(34,211,238,0.4),0_0_30px_rgba(34,211,238,0.2)]',
        'hover:shadow-[0_0_2px_rgba(34,211,238,1),0_0_25px_rgba(34,211,238,0.6),0_0_50px_rgba(34,211,238,0.3)]',
        'active:scale-98',
        'touch-manipulation',
        'select-none',
        'uppercase tracking-widest',
        className
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        backgroundColor: 'rgba(34, 211, 238, 0.08)',
      }}
      whileTap={{
        scale: 0.97,
      }}
      {...extraProps}
    >
      {/* Enhanced corner accents */}
      <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
      <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-3">
        {children}
      </span>

      {/* Enhanced pulse effect */}
      <motion.div
        className="absolute inset-0 border-2 border-cyan-500 opacity-0"
        animate={{
          opacity: [0, 0.4, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Glitch effect overlay */}
      <motion.div
        className="absolute inset-0 opacity-0"
        animate={{
          opacity: [0, 0.3, 0],
          x: [0, -2, 2, -2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        style={{
          background: 'linear-gradient(45deg, rgba(34, 211, 238, 0.2), rgba(168, 85, 247, 0.2))',
          filter: 'blur(1px)',
        }}
      />
    </ButtonComponent>
  );
};