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

  const nextLetter = isLast ? null : String.fromCharCode(letterData.letter.charCodeAt(0) + 1);

  return (
    <div className="absolute inset-0 z-50 pointer-events-none">
      {/* Confetti particles — no background, letter stays visible */}
      <div className="absolute inset-0 overflow-hidden">
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

      {/* Next button — bottom-centre, large touch target */}
      {showButton && (
        <div className="absolute inset-0 flex items-end justify-center pb-8 pointer-events-none">
          <button
            onClick={onNext}
            className="pointer-events-auto flex items-center justify-center rounded-full font-black text-black"
            style={{
              width: 96,
              height: 96,
              fontSize: isLast ? '2.8rem' : '2rem',
              background: 'linear-gradient(135deg, #FFD700, #FFA000)',
              boxShadow: '0 6px 28px rgba(255,215,0,0.6), 0 2px 8px rgba(0,0,0,0.4)',
              border: '4px solid #fff',
              animation: 'bounceIn 0.5s ease-out',
            }}
          >
            {isLast ? '🏆' : nextLetter}
          </button>
        </div>
      )}
    </div>
  );
}
