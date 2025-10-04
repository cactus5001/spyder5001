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
        'relative px-6 py-3 rounded-none font-roboto font-medium text-sm',
        'bg-black/80 backdrop-blur-sm',
        'border border-cyan-500',
        'text-cyan-400 hover:text-cyan-300',
        'transition-all duration-500',
        'shadow-[0_0_1px_rgba(34,211,238,1),0_0_10px_rgba(34,211,238,0.3)]',
        'hover:shadow-[0_0_1px_rgba(34,211,238,1),0_0_20px_rgba(34,211,238,0.6)]',
        'active:scale-98',
        'touch-manipulation',
        'select-none',
        'uppercase tracking-wider',
        className
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        backgroundColor: 'rgba(34, 211, 238, 0.05)',
      }}
      whileTap={{
        scale: 0.98,
      }}
      {...extraProps}
    >
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400" />
      <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400" />
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400" />

      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-3">
        {children}
      </span>

      {/* Subtle pulse */}
      <motion.div
        className="absolute inset-0 border border-cyan-500 opacity-0"
        animate={{
          opacity: [0, 0.3, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </ButtonComponent>
  );
};
