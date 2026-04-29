import { useState, useRef } from 'react';
import { LETTERS } from './data/letters';
import LetterScreen from './components/LetterScreen';

type Screen = 'welcome' | 'learning';

function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0a0a1f 0%, #1a0510 60%, #0d0d2a 100%)' }}
    >
      {/* Animated track lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[10, 25, 40, 55, 70, 85].map((top) => (
          <div
            key={top}
            className="absolute h-px"
            style={{
              top: `${top}%`,
              left: '-200px',
              right: '-200px',
              background: 'rgba(255,255,255,0.06)',
              animation: `trackLine ${2 + top * 0.04}s linear infinite`,
            }}
          />
        ))}
        {/* Racing cars streaking across */}
        {['#E8002D', '#00C853', '#2196F3'].map((color, i) => (
          <div
            key={color}
            className="absolute"
            style={{
              top: `${30 + i * 20}%`,
              animation: `racingCar ${1.8 + i * 0.5}s ${i * 0.6}s linear infinite`,
              fontSize: '2rem',
            }}
          >
            🏎️
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-8 text-center">
        {/* Logo */}
        <div
          className="flex items-end gap-1 leading-none font-black"
          style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}
        >
          <span
            style={{
              fontSize: 'clamp(3rem, 12vw, 7rem)',
              color: '#E8002D',
              textShadow: '0 4px 0 #7a0010, 0 8px 20px rgba(232,0,45,0.5)',
              letterSpacing: '-0.02em',
            }}
          >
            F1
          </span>
          <span
            style={{
              fontSize: 'clamp(3rem, 12vw, 7rem)',
              color: '#FFD700',
              textShadow: '0 4px 0 #7a5c00, 0 8px 20px rgba(255,215,0,0.4)',
              letterSpacing: '-0.02em',
            }}
          >
            ABC
          </span>
        </div>

        <p
          className="font-bold"
          style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: 'clamp(1rem, 3.5vw, 1.5rem)',
            maxWidth: '380px',
          }}
        >
          Drive your F1 car around each letter to learn the alphabet!
        </p>

        {/* Instructions */}
        <div
          className="rounded-2xl p-4 flex flex-col gap-3 text-left"
          style={{ background: 'rgba(255,255,255,0.06)', maxWidth: '340px', width: '100%' }}
        >
          {[
            { icon: '👆', text: 'Drag the red car along the track' },
            { icon: '🏁', text: 'Reach the end to complete each stroke' },
            { icon: '🎉', text: 'Collect all strokes to finish the letter!' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-3">
              <span style={{ fontSize: '1.6rem' }}>{icon}</span>
              <span className="text-white/80 font-semibold" style={{ fontSize: '0.95rem' }}>
                {text}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={onStart}
          className="font-black rounded-full text-black"
          style={{
            background: 'linear-gradient(135deg, #FFD700 0%, #FF9800 100%)',
            fontSize: 'clamp(1.3rem, 4vw, 2rem)',
            padding: 'clamp(14px, 3vw, 20px) clamp(40px, 8vw, 72px)',
            boxShadow: '0 8px 32px rgba(255,215,0,0.45)',
            border: '3px solid rgba(255,255,255,0.3)',
            letterSpacing: '0.02em',
          }}
        >
          🏎️ LET'S RACE!
        </button>
      </div>
    </div>
  );
}

function LearningScreen() {
  const [letterIndex, setLetterIndex] = useState(0);
  // Key forces LetterScreen remount (resets all game state) when letter changes
  const [letterKey, setLetterKey] = useState(0);

  const navigateTo = (idx: number) => {
    setLetterIndex(idx);
    setLetterKey((k) => k + 1);
  };

  const handlePrev = () => {
    if (letterIndex > 0) navigateTo(letterIndex - 1);
  };

  const handleNext = () => {
    if (letterIndex < LETTERS.length - 1) navigateTo(letterIndex + 1);
  };

  const handleLetterComplete = () => {
    if (letterIndex < LETTERS.length - 1) {
      setTimeout(() => navigateTo(letterIndex + 1), 600);
    }
  };

  const letterData = LETTERS[letterIndex];

  // Swipe detection
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
    const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
    touchStartRef.current = null;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 2) {
      if (dx > 0) handlePrev();
      else handleNext();
    }
  };

  return (
    <div
      className="w-full h-full flex flex-col"
      style={{ background: 'linear-gradient(160deg, #0a0a1f 0%, #1a0510 60%, #0d0d2a 100%)' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-3 pt-3 pb-1 shrink-0">
        {/* Prev button */}
        <button
          onClick={handlePrev}
          disabled={letterIndex === 0}
          className="flex items-center justify-center rounded-full font-black text-black shrink-0"
          style={{
            width: 52,
            height: 52,
            fontSize: '1.4rem',
            background:
              letterIndex === 0
                ? 'rgba(255,255,255,0.08)'
                : 'linear-gradient(135deg, #FFD700, #FF9800)',
            color: letterIndex === 0 ? 'rgba(255,255,255,0.3)' : '#000',
            border: '2px solid rgba(255,255,255,0.1)',
          }}
          aria-label="Previous letter"
        >
          ‹
        </button>

        {/* Letter display */}
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-3">
            <span
              className="font-black leading-none"
              style={{
                fontSize: 'clamp(3rem, 10vw, 5rem)',
                color: '#FFD700',
                textShadow: '0 3px 0 #7a5c00, 0 6px 18px rgba(255,215,0,0.35)',
                fontFamily: 'Arial Black, Arial, sans-serif',
              }}
            >
              {letterData.letter}
            </span>
            <span
              className="font-semibold"
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
              }}
            >
              is for {letterData.wordHint}
            </span>
          </div>
          {/* Letter dots indicator */}
          <div className="flex justify-center gap-2 mt-1">
            {LETTERS.map((l, i) => (
              <button
                key={l.letter}
                onClick={() => navigateTo(i)}
                className="rounded-full font-bold text-xs transition-all"
                style={{
                  width: i === letterIndex ? 32 : 24,
                  height: 24,
                  background:
                    i === letterIndex
                      ? '#E8002D'
                      : i < letterIndex
                        ? 'rgba(255,215,0,0.4)'
                        : 'rgba(255,255,255,0.12)',
                  color: i === letterIndex ? 'white' : 'rgba(255,255,255,0.5)',
                  border: '1.5px solid rgba(255,255,255,0.15)',
                }}
              >
                {l.letter}
              </button>
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          disabled={letterIndex === LETTERS.length - 1}
          className="flex items-center justify-center rounded-full font-black shrink-0"
          style={{
            width: 52,
            height: 52,
            fontSize: '1.4rem',
            background:
              letterIndex === LETTERS.length - 1
                ? 'rgba(255,255,255,0.08)'
                : 'linear-gradient(135deg, #FFD700, #FF9800)',
            color:
              letterIndex === LETTERS.length - 1 ? 'rgba(255,255,255,0.3)' : '#000',
            border: '2px solid rgba(255,255,255,0.1)',
          }}
          aria-label="Next letter"
        >
          ›
        </button>
      </div>

      {/* Game area */}
      <div className="flex-1 px-2 pb-2" style={{ minHeight: 0 }}>
        <div
          className="w-full h-full rounded-2xl overflow-hidden"
          style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.6)' }}
        >
          <LetterScreen
            key={letterKey}
            letterData={letterData}
            isLast={letterIndex === LETTERS.length - 1}
            onLetterComplete={handleLetterComplete}
          />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome');

  return (
    <div
      style={{
        width: '100dvw',
        height: '100dvh',
        overflow: 'hidden',
        position: 'fixed',
        inset: 0,
      }}
    >
      {screen === 'welcome' ? (
        <WelcomeScreen onStart={() => setScreen('learning')} />
      ) : (
        <LearningScreen />
      )}
    </div>
  );
}
