import { useEffect, useState, useRef } from 'react';
import { LetterData } from '../data/letters';

interface Particle {
  id: number;
  x: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
  shape: 'rect' | 'circle';
}

const COLORS = ['#E8002D', '#FFD700', '#00C853', '#2196F3', '#FF9800', '#E040FB', '#00BCD4'];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

interface ConfettiProps {
  letterData: LetterData;
  onNext: () => void;
  isLast: boolean;
}

export default function Confetti({ letterData, onNext, isLast }: ConfettiProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showButton, setShowButton] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const ps: Particle[] = Array.from({ length: 70 }, (_, i) => ({
      id: i,
      x: randomBetween(2, 98),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: randomBetween(6, 16),
      delay: randomBetween(0, 0.8),
      duration: randomBetween(2.2, 3.8),
      shape: Math.random() > 0.4 ? 'rect' : 'circle',
    }));
    setParticles(ps);

    timerRef.current = setTimeout(() => setShowButton(true), 2200);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center z-50"
      style={{ background: 'rgba(10,10,30,0.88)' }}
    >
      {/* Confetti particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute top-0"
            style={{
              left: `${p.x}%`,
              width: p.shape === 'rect' ? p.size : p.size * 0.9,
              height: p.shape === 'rect' ? p.size * 0.5 : p.size * 0.9,
              borderRadius: p.shape === 'circle' ? '50%' : '2px',
              background: p.color,
              animation: `confettiFall ${p.duration}s ${p.delay}s ease-in forwards`,
            }}
          />
        ))}
      </div>

      {/* Central message */}
      <div className="relative z-10 flex flex-col items-center gap-4 px-8 text-center">
        <div className="text-7xl" style={{ animation: 'bounceIn 0.5s ease-out' }}>
          🏁
        </div>
        <h2
          className="text-white font-black tracking-tight"
          style={{
            fontSize: 'clamp(2rem, 8vw, 4rem)',
            textShadow: '0 0 20px #FFD700, 0 4px 0 #cc0000',
            animation: 'bounceIn 0.6s 0.1s ease-out both',
          }}
        >
          GREAT DRIVE!
        </h2>
        <p
          className="text-yellow-300 font-bold"
          style={{
            fontSize: 'clamp(1.1rem, 4vw, 1.8rem)',
            animation: 'bounceIn 0.6s 0.25s ease-out both',
          }}
        >
          You traced the letter{' '}
          <span className="text-white text-4xl">{letterData.letter}</span>!
        </p>

        {showButton && (
          <button
            onClick={onNext}
            className="mt-4 font-black text-black rounded-full px-10 py-4 text-2xl"
            style={{
              background: 'linear-gradient(135deg, #FFD700, #FFA000)',
              boxShadow: '0 6px 24px rgba(255,215,0,0.5)',
              animation: 'bounceIn 0.5s ease-out',
              border: '3px solid #fff',
            }}
          >
            {isLast ? '🏆 The End!' : `Next: ${String.fromCharCode(letterData.letter.charCodeAt(0) + 1)} →`}
          </button>
        )}
      </div>
    </div>
  );
}
