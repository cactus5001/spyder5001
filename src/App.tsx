import { useState } from 'react';
import { BackgroundFX } from './components/BackgroundFX';
import { Avatar } from './components/Avatar';
import { NeonButton } from './components/NeonButton';
import { BioPanel } from './components/BioPanel';

function App() {
  const [stage, setStage] = useState<'initial' | 'pause' | 'button' | 'revealed'>('initial');

  const handleAvatarAnimationComplete = () => {
    setStage('pause');

    // Longer pause for dramatic effect
    setTimeout(() => {
      setStage('button');
    }, 1500);
  };

  const handleRevealClick = () => {
    setStage('revealed');
  };

  const handleBioComplete = () => {
    // Bio animation complete - all interactions now available
  };

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background effects */}
      <BackgroundFX />

      {/* Mobile-first container with desktop centering */}
      <div className="relative min-h-screen w-full max-w-[390px] mx-auto bg-black/80 backdrop-blur-sm">
        {/* Main content container */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
          {/* Avatar */}
          <div className={`transition-all duration-700 ${stage === 'revealed' ? 'mb-8' : 'mb-0'}`}>
            <Avatar
              shifted={stage === 'revealed'}
              onInitialAnimationComplete={handleAvatarAnimationComplete}
            />
          </div>

          {/* Initial reveal button */}
          {stage === 'button' && (
            <div className="mt-12">
              <NeonButton onClick={handleRevealClick} delay={0}>
                <span className="font-mono tracking-widest">INITIALIZE</span>
              </NeonButton>
            </div>
          )}

          {/* Bio panel */}
          {stage === 'revealed' && (
            <BioPanel onComplete={handleBioComplete} />
          )}
        </div>

        {/* Enhanced scan line effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 211, 238, 0.04) 2px, rgba(34, 211, 238, 0.04) 4px)',
          }}
        />

        {/* Enhanced vignette effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.9) 100%)',
          }}
        />
      </div>

      {/* Desktop margins indicator with enhanced gradient */}
      <div className="hidden md:block fixed inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-[calc((100vw-390px)/2)] bg-gradient-to-r from-black via-black/95 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[calc((100vw-390px)/2)] bg-gradient-to-l from-black via-black/95 to-transparent" />
      </div>
    </div>
  );
}

export default App;
