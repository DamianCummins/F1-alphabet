interface F1CarProps {
  x: number;
  y: number;
  angle: number;
  locked?: boolean;
  isIdle?: boolean;
}

export default function F1Car({ x, y, angle, locked = false, isIdle = false }: F1CarProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`} style={{ willChange: 'transform' }}>
      {/* Pulsing ring for idle hint */}
      {isIdle && (
        <circle cx={0} cy={0} r={22} fill="rgba(255,215,0,0.35)" className="car-idle-ring" />
      )}

      {/* Rear wing */}
      <rect x="-22" y="-14" width="7" height="28" rx="3" fill={locked ? '#555' : '#111'} />

      {/* Rear tyres */}
      <ellipse cx="-12" cy="-12" rx="6" ry="4" fill={locked ? '#666' : '#1a1a1a'} />
      <ellipse cx="-12" cy="12" rx="6" ry="4" fill={locked ? '#666' : '#1a1a1a'} />

      {/* Body shadow */}
      <rect x="-16" y="-7" width="34" height="14" rx="6" fill="rgba(0,0,0,0.25)" transform="translate(1.5 1.5)" />

      {/* Main body */}
      <rect
        x="-16"
        y="-7"
        width="34"
        height="14"
        rx="6"
        fill={locked ? '#888' : '#E8002D'}
      />

      {/* Body accent stripe */}
      <rect x="-14" y="-2" width="30" height="4" rx="2" fill={locked ? '#aaa' : '#cc0022'} opacity={0.5} />

      {/* Front tyres */}
      <ellipse cx="12" cy="-12" rx="6" ry="4" fill={locked ? '#666' : '#1a1a1a'} />
      <ellipse cx="12" cy="12" rx="6" ry="4" fill={locked ? '#666' : '#1a1a1a'} />

      {/* Front wing */}
      <rect x="15" y="-14" width="7" height="28" rx="3" fill={locked ? '#555' : '#111'} />

      {/* Nose cone */}
      <polygon points="18,-3 24,0 18,3" fill={locked ? '#777' : '#cc001f'} />

      {/* Cockpit surround */}
      <ellipse cx="-1" cy="0" rx="8" ry="5.5" fill={locked ? '#333' : '#0f0f1f'} />

      {/* Visor / windscreen */}
      <ellipse cx="-1" cy="0" rx="5.5" ry="4" fill={locked ? '#555' : '#64b5f6'} opacity={0.85} />

      {/* Number on cockpit */}
      <text
        x="-1"
        y="3.5"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        fill="white"
        style={{ pointerEvents: 'none' }}
      >
        {locked ? '✓' : '1'}
      </text>

      {/* Locked overlay glow */}
      {locked && (
        <ellipse cx="0" cy="0" rx="22" ry="16" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.6" />
      )}
    </g>
  );
}
