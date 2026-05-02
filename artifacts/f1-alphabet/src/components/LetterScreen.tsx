import { useRef, useState, useEffect, useCallback } from 'react';
import { LetterData } from '../data/letters';
import { screenToSVG, findClosestLength, getPathAngle } from '../utils/pathUtils';
import F1Car from './F1Car';
import Confetti from './Confetti';

interface CompletedCar {
  x: number;
  y: number;
  angle: number;
}

interface LetterScreenProps {
  letterData: LetterData;
  isLast: boolean;
  onLetterComplete: () => void;
}

const ROAD_W = 40;
const GRASS_W = 56;
const KERB_W = 52;
const SNAP_RADIUS = 60; // SVG units within which a touch "grabs" the car

export default function LetterScreen({ letterData, isLast, onLetterComplete }: LetterScreenProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);

  // Synchronous game refs (avoid stale closures in event handlers)
  const isDraggingRef = useRef(false);
  const isCompletingRef = useRef(false);
  const currentStrokeIdxRef = useRef(0);

  // Render state
  const [currentStrokeIdx, setCurrentStrokeIdx] = useState(0);
  const [completedCars, setCompletedCars] = useState<CompletedCar[]>([]);
  const [carPos, setCarPos] = useState<{ x: number; y: number }>({
    x: letterData.strokes[0].startX,
    y: letterData.strokes[0].startY,
  });
  const [carAngle, setCarAngle] = useState(0);
  const [carLength, setCarLength] = useState(0);
  const [carVisible, setCarVisible] = useState(true);
  const [showCelebration, setShowCelebration] = useState(false);
  const [isIdle, setIsIdle] = useState(true);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Init car position & angle from DOM path on stroke change
  useEffect(() => {
    const path = pathRefs.current[currentStrokeIdx];
    if (!path) return;
    const pt = path.getPointAtLength(0);
    const ang = getPathAngle(path, 0);
    setCarPos({ x: pt.x, y: pt.y });
    setCarAngle(ang);
    setCarLength(0);
    setCarVisible(true);
    setIsIdle(true);
    currentStrokeIdxRef.current = currentStrokeIdx;
  }, [currentStrokeIdx]);

  const resetIdleTimer = useCallback(() => {
    setIsIdle(false);
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => setIsIdle(true), 2000);
  }, []);

  const completeStroke = useCallback(() => {
    if (isCompletingRef.current) return;
    isCompletingRef.current = true;
    isDraggingRef.current = false;

    const idx = currentStrokeIdxRef.current;
    const path = pathRefs.current[idx];
    if (!path) return;

    const totalLen = path.getTotalLength();
    const endPt = path.getPointAtLength(totalLen);
    const endAng = getPathAngle(path, totalLen);

    setCarPos({ x: endPt.x, y: endPt.y });
    setCarAngle(endAng);
    setCarLength(totalLen);

    const isLastStroke = idx >= letterData.strokes.length - 1;

    if (isLastStroke) {
      // Save the final car then celebrate
      setTimeout(() => {
        setCompletedCars((prev) => [...prev, { x: endPt.x, y: endPt.y, angle: endAng }]);
        setTimeout(() => {
          setShowCelebration(true);
          isCompletingRef.current = false;
        }, 300);
      }, 400);
    } else {
      // Lock this car, pause, then animate new car into next stroke
      setTimeout(() => {
        setCompletedCars((prev) => [...prev, { x: endPt.x, y: endPt.y, angle: endAng }]);
        setCarVisible(false);

        setTimeout(() => {
          const nextIdx = idx + 1;
          currentStrokeIdxRef.current = nextIdx;
          setCurrentStrokeIdx(nextIdx);
          isCompletingRef.current = false;
        }, 450);
      }, 500);
    }
  }, [letterData.strokes.length]);

  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (isCompletingRef.current || showCelebration) return;
    e.preventDefault();

    const svg = svgRef.current;
    if (!svg) return;
    const svgPt = screenToSVG(svg, e.clientX, e.clientY);
    const dist = Math.hypot(svgPt.x - carPos.x, svgPt.y - carPos.y);

    if (dist <= SNAP_RADIUS) {
      isDraggingRef.current = true;
      svg.setPointerCapture(e.pointerId);
      resetIdleTimer();
    }
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isDraggingRef.current || isCompletingRef.current) return;
    e.preventDefault();

    const svg = svgRef.current;
    const path = pathRefs.current[currentStrokeIdxRef.current];
    if (!svg || !path) return;

    const svgPt = screenToSVG(svg, e.clientX, e.clientY);
    const totalLen = path.getTotalLength();
    const closestLen = Math.max(0, Math.min(totalLen, findClosestLength(path, svgPt.x, svgPt.y)));

    const pt = path.getPointAtLength(closestLen);
    const ang = getPathAngle(path, closestLen);

    setCarLength(closestLen);
    setCarPos({ x: pt.x, y: pt.y });
    setCarAngle(ang);
    resetIdleTimer();

    if (closestLen / totalLen > 0.90) {
      completeStroke();
    }
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  // End-point / angle for each stroke's finish line marker (computed after paths mount)
  const [strokeEnds, setStrokeEnds] = useState<Array<{ x: number; y: number; angle: number } | null>>([]);

  useEffect(() => {
    const ends = letterData.strokes.map((_, i) => {
      const path = pathRefs.current[i];
      if (!path) return null;
      const total = path.getTotalLength();
      const pt = path.getPointAtLength(total);
      const angle = getPathAngle(path, total);
      return { x: pt.x, y: pt.y, angle };
    });
    setStrokeEnds(ends);
  }, [letterData]);

  // Overall progress
  const totalStrokes = letterData.strokes.length;
  const activeTotalLen = pathRefs.current[currentStrokeIdx]?.getTotalLength() || 1;
  const strokeProgress = carLength / activeTotalLen;
  const overallProgress = (completedCars.length + strokeProgress) / totalStrokes;

  // Helper to check if a stroke index is completed
  const isStrokeCompleted = (i: number) => i < completedCars.length;

  // Split out viewBox numbers to set width/height attrs
  const [, , vbW, vbH] = letterData.viewBox.split(' ').map(Number);

  return (
    <div className="relative w-full h-full flex flex-col" style={{ minHeight: 0 }}>
      {/* Progress bar */}
      <div className="mx-4 mt-2 mb-1 flex items-center gap-2">
        <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest shrink-0">
          {completedCars.length}/{totalStrokes} strokes
        </span>
        <div className="flex-1 h-4 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.12)' }}>
          <div
            className="h-full rounded-full transition-all duration-200"
            style={{
              width: `${overallProgress * 100}%`,
              background: 'linear-gradient(90deg, #FFD700, #FF9800)',
            }}
          />
        </div>
      </div>

      {/* Stroke label */}
      <div className="text-center mb-1">
        <span className="text-white/60 text-sm font-semibold">
          {isStrokeCompleted(currentStrokeIdx) || showCelebration
            ? 'Done!'
            : `Stroke ${currentStrokeIdx + 1}: ${letterData.strokes[currentStrokeIdx]?.label ?? ''}`}
        </span>
      </div>

      {/* SVG game area */}
      <div className="flex-1 flex items-center justify-center" style={{ minHeight: 0 }}>
        <svg
          ref={svgRef}
          viewBox={letterData.viewBox}
          width={vbW}
          height={vbH}
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full"
          style={{
            touchAction: 'none',
            userSelect: 'none',
            display: 'block',
            maxHeight: '100%',
            maxWidth: '100%',
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <defs>
            {/* Chequered start pattern */}
            <pattern id="checker" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="5" height="5" fill="#000" />
              <rect x="5" y="5" width="5" height="5" fill="#000" />
              <rect x="5" y="0" width="5" height="5" fill="#fff" />
              <rect x="0" y="5" width="5" height="5" fill="#fff" />
            </pattern>

            {/* Drop shadow filter for cars */}
            <filter id="carShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="1" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Grass background */}
          <rect x="0" y="0" width={vbW} height={vbH} fill="#22c55e" />

          {/*
           * Track rendering — grouped BY LAYER, not by stroke.
           * This prevents opacity/colour bleed at junctions where strokes overlap.
           * Future strokes use muted colour values (not group opacity) so overlapping
           * future-on-future paths are always the same colour and produce no seam.
           */}

          {/* Layer 1 — Grass edge (all strokes) */}
          {letterData.strokes.map((stroke, i) => {
            const future = i > currentStrokeIdx && !showCelebration;
            return (
              <path
                key={`grass-${i}`}
                d={stroke.path}
                stroke={future ? '#1a7a38' : '#16a34a'}
                strokeWidth={GRASS_W}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            );
          })}

          {/* Layer 2 — White kerb stripe (all strokes) */}
          {letterData.strokes.map((stroke, i) => {
            const future = i > currentStrokeIdx && !showCelebration;
            return (
              <path
                key={`kerb-w-${i}`}
                d={stroke.path}
                stroke={future ? '#7a9e7a' : 'white'}
                strokeWidth={KERB_W}
                strokeLinecap="butt"
                strokeLinejoin="round"
                strokeDasharray="11 11"
                fill="none"
              />
            );
          })}

          {/* Layer 3 — Red kerb stripe (all strokes) */}
          {letterData.strokes.map((stroke, i) => {
            const future = i > currentStrokeIdx && !showCelebration;
            return (
              <path
                key={`kerb-r-${i}`}
                d={stroke.path}
                stroke={future ? '#5c3030' : '#dc2626'}
                strokeWidth={KERB_W}
                strokeLinecap="butt"
                strokeLinejoin="round"
                strokeDasharray="11 11"
                strokeDashoffset="11"
                fill="none"
              />
            );
          })}

          {/* Layer 4 — Road surface (all strokes) */}
          {letterData.strokes.map((stroke, i) => {
            const future = i > currentStrokeIdx && !showCelebration;
            return (
              <path
                key={`road-${i}`}
                d={stroke.path}
                stroke={future ? '#3d4f63' : '#2d3748'}
                strokeWidth={ROAD_W}
                strokeLinecap="butt"
                strokeLinejoin="round"
                fill="none"
              />
            );
          })}

          {/* Layer 5 — Road centre dashes (all strokes) */}
          {letterData.strokes.map((stroke, i) => {
            const future = i > currentStrokeIdx && !showCelebration;
            return (
              <path
                key={`centre-${i}`}
                d={stroke.path}
                stroke={future ? '#4e6070' : '#8fa3b3'}
                strokeWidth={2.5}
                strokeLinecap="butt"
                strokeLinejoin="round"
                strokeDasharray="9 7"
                fill="none"
              />
            );
          })}

          {/* Layer 6 — Golden completed overlay (completed strokes only) */}
          {letterData.strokes.map((stroke, i) =>
            isStrokeCompleted(i) ? (
              <path
                key={`gold-${i}`}
                d={stroke.path}
                stroke="#4d4f3d"
                strokeWidth={ROAD_W}
                strokeLinecap="butt"
                strokeLinejoin="round"
                fill="none"
              />
            ) : null
          )}

          {/* Layer 7 — Finish line at end of the active stroke only */}
          {letterData.strokes.map((_, i) => {
            if (i !== currentStrokeIdx || showCelebration) return null;
            const end = strokeEnds[i];
            if (!end) return null;
            const { x: ex, y: ey, angle: ea } = end;
            return (
              <g key={`finish-${i}`}>
                {/* Finish line bar — perpendicular to path direction */}
                <rect
                  x={ex - 5}
                  y={ey - 16}
                  width={10}
                  height={32}
                  fill="url(#checker)"
                  stroke="white"
                  strokeWidth={2}
                  transform={`rotate(${ea}, ${ex}, ${ey})`}
                />
              </g>
            );
          })}

          {/* Layer 8 — Hidden math paths for getPointAtLength (must stay per-stroke with refs) */}
          {letterData.strokes.map((stroke, i) => (
            <path
              key={`math-${i}`}
              d={stroke.path}
              stroke="transparent"
              strokeWidth={1}
              fill="none"
              ref={(el) => {
                pathRefs.current[i] = el;
              }}
            />
          ))}

          {/* Locked (completed) cars */}
          {completedCars.map((car, i) => (
            <g key={`locked-${i}`} filter="url(#carShadow)">
              <F1Car x={car.x} y={car.y} angle={car.angle} locked />
            </g>
          ))}

          {/* Active draggable car */}
          {carVisible && !showCelebration && (
            <g filter="url(#carShadow)">
              <F1Car
                x={carPos.x}
                y={carPos.y}
                angle={carAngle}
                isIdle={isIdle && carLength < 8}
              />
            </g>
          )}
        </svg>
      </div>

      {/* Celebration overlay */}
      {showCelebration && (
        <Confetti letterData={letterData} onNext={onLetterComplete} isLast={isLast} />
      )}
    </div>
  );
}
