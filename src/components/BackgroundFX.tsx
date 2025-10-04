import { motion } from 'framer-motion';

interface DataStream {
  id: number;
  x: number;
  delay: number;
  duration: number;
}

const generateStreams = (count: number): DataStream[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: (i / count) * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 4,
  }));
};

export const BackgroundFX = () => {
  const streams = generateStreams(15);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Minimal dark gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(6, 182, 212, 0.08) 0%, rgba(0, 0, 0, 1) 60%)',
        }}
      />

      {/* Matrix-style data streams */}
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute top-0 w-px opacity-20"
          style={{
            left: `${stream.x}%`,
            height: '100vh',
            background: 'linear-gradient(180deg, transparent 0%, rgba(34, 211, 238, 0.4) 50%, transparent 100%)',
          }}
          animate={{
            y: ['-100%', '100%'],
          }}
          transition={{
            duration: stream.duration,
            repeat: Infinity,
            delay: stream.delay,
            ease: 'linear',
          }}
        />
      ))}

      {/* Scan lines overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 211, 238, 0.3) 2px, rgba(34, 211, 238, 0.3) 3px)',
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Slow moving glow orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          top: '20%',
          left: '10%',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          bottom: '20%',
          right: '10%',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </div>
  );
};
