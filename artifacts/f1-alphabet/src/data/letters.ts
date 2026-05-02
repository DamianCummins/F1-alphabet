export interface Stroke {
  path: string;
  startX: number;
  startY: number;
  label: string;
}

export interface LetterData {
  letter: string;
  viewBox: string;
  wordHint: string;
  strokes: Stroke[];
}

export const LETTERS: LetterData[] = [
  {
    letter: 'A',
    viewBox: '0 0 200 250',
    wordHint: 'Apple',
    strokes: [
      {
        path: 'M 100 22 L 25 228',
        startX: 100,
        startY: 22,
        label: 'Left leg',
      },
      {
        path: 'M 100 22 L 175 228',
        startX: 100,
        startY: 22,
        label: 'Right leg',
      },
      {
        path: 'M 52 155 L 148 155',
        startX: 52,
        startY: 155,
        label: 'Crossbar',
      },
    ],
  },
  {
    letter: 'B',
    viewBox: '0 0 200 250',
    wordHint: 'Ball',
    strokes: [
      {
        path: 'M 45 22 L 45 228',
        startX: 45,
        startY: 22,
        label: 'Vertical',
      },
      {
        path: 'M 45 22 C 155 22 155 125 45 125 C 165 125 165 228 45 228',
        startX: 45,
        startY: 22,
        label: 'Bumps',
      },
    ],
  },
  {
    letter: 'C',
    viewBox: '0 0 200 250',
    wordHint: 'Car',
    strokes: [
      {
        path: 'M 162 72 A 82 80 0 1 0 162 178',
        startX: 162,
        startY: 72,
        label: 'Arc',
      },
    ],
  },
  {
    letter: 'D',
    viewBox: '0 0 200 250',
    wordHint: 'Driver',
    strokes: [
      {
        path: 'M 45 22 L 45 228',
        startX: 45,
        startY: 22,
        label: 'Vertical',
      },
      {
        path: 'M 45 22 C 170 22 170 228 45 228',
        startX: 45,
        startY: 22,
        label: 'Bump',
      },
    ],
  },
  {
    letter: 'E',
    viewBox: '0 0 200 250',
    wordHint: 'Engine',
    strokes: [
      {
        path: 'M 45 22 L 45 228',
        startX: 45,
        startY: 22,
        label: 'Vertical',
      },
      {
        path: 'M 45 22 L 155 22',
        startX: 45,
        startY: 22,
        label: 'Top bar',
      },
      {
        path: 'M 45 125 L 130 125',
        startX: 45,
        startY: 125,
        label: 'Middle bar',
      },
      {
        path: 'M 45 228 L 155 228',
        startX: 45,
        startY: 228,
        label: 'Bottom bar',
      },
    ],
  },
  {
    letter: 'F',
    viewBox: '0 0 200 250',
    wordHint: 'Flag',
    strokes: [
      {
        path: 'M 45 22 L 45 228',
        startX: 45,
        startY: 22,
        label: 'Vertical',
      },
      {
        path: 'M 45 22 L 155 22',
        startX: 45,
        startY: 22,
        label: 'Top bar',
      },
      {
        path: 'M 45 125 L 130 125',
        startX: 45,
        startY: 125,
        label: 'Middle bar',
      },
    ],
  },
  {
    letter: 'G',
    viewBox: '0 0 200 250',
    wordHint: 'Gear',
    strokes: [
      {
        path: 'M 162 72 A 82 80 0 1 0 162 125',
        startX: 162,
        startY: 72,
        label: 'Arc',
      },
      {
        path: 'M 162 125 L 112 125',
        startX: 162,
        startY: 125,
        label: 'Shelf',
      },
    ],
  },
  {
    letter: 'H',
    viewBox: '0 0 200 250',
    wordHint: 'Helmet',
    strokes: [
      {
        path: 'M 45 22 L 45 228',
        startX: 45,
        startY: 22,
        label: 'Left leg',
      },
      {
        path: 'M 155 22 L 155 228',
        startX: 155,
        startY: 22,
        label: 'Right leg',
      },
      {
        path: 'M 45 125 L 155 125',
        startX: 45,
        startY: 125,
        label: 'Crossbar',
      },
    ],
  },
  {
    letter: 'I',
    viewBox: '0 0 200 250',
    wordHint: 'Italian',
    strokes: [
      {
        path: 'M 70 22 L 130 22',
        startX: 70,
        startY: 22,
        label: 'Top bar',
      },
      {
        path: 'M 100 22 L 100 228',
        startX: 100,
        startY: 22,
        label: 'Vertical',
      },
      {
        path: 'M 70 228 L 130 228',
        startX: 70,
        startY: 228,
        label: 'Bottom bar',
      },
    ],
  },
  {
    letter: 'J',
    viewBox: '0 0 200 250',
    wordHint: 'Jump',
    strokes: [
      {
        path: 'M 65 22 L 115 22',
        startX: 65,
        startY: 22,
        label: 'Top bar',
      },
      {
        path: 'M 92 22 L 92 185 Q 92 228 55 228 Q 30 228 30 200',
        startX: 92,
        startY: 22,
        label: 'Hook',
      },
    ],
  },
  {
    letter: 'K',
    viewBox: '0 0 200 250',
    wordHint: 'Kart',
    strokes: [
      {
        path: 'M 45 22 L 45 228',
        startX: 45,
        startY: 22,
        label: 'Vertical',
      },
      {
        path: 'M 45 125 L 155 22',
        startX: 45,
        startY: 125,
        label: 'Upper arm',
      },
      {
        path: 'M 45 125 L 155 228',
        startX: 45,
        startY: 125,
        label: 'Lower arm',
      },
    ],
  },
  {
    letter: 'L',
    viewBox: '0 0 200 250',
    wordHint: 'Lap',
    strokes: [
      {
        path: 'M 45 22 L 45 228',
        startX: 45,
        startY: 22,
        label: 'Vertical',
      },
      {
        path: 'M 45 228 L 155 228',
        startX: 45,
        startY: 228,
        label: 'Base',
      },
    ],
  },
  {
    letter: 'M',
    viewBox: '0 0 200 250',
    wordHint: 'Monaco',
    strokes: [
      {
        path: 'M 30 228 L 30 22',
        startX: 30,
        startY: 228,
        label: 'Left leg',
      },
      {
        path: 'M 30 22 L 100 130',
        startX: 30,
        startY: 22,
        label: 'Left peak',
      },
      {
        path: 'M 100 130 L 170 22',
        startX: 100,
        startY: 130,
        label: 'Right peak',
      },
      {
        path: 'M 170 22 L 170 228',
        startX: 170,
        startY: 22,
        label: 'Right leg',
      },
    ],
  },
  {
    letter: 'N',
    viewBox: '0 0 200 250',
    wordHint: 'Nitro',
    strokes: [
      {
        path: 'M 45 228 L 45 22',
        startX: 45,
        startY: 228,
        label: 'Left leg',
      },
      {
        path: 'M 45 22 L 155 228',
        startX: 45,
        startY: 22,
        label: 'Diagonal',
      },
      {
        path: 'M 155 228 L 155 22',
        startX: 155,
        startY: 228,
        label: 'Right leg',
      },
    ],
  },
  {
    letter: 'O',
    viewBox: '0 0 200 250',
    wordHint: 'Oval',
    strokes: [
      {
        path: 'M 100 22 C 178 22 178 228 100 228 C 22 228 22 22 100 22',
        startX: 100,
        startY: 22,
        label: 'Oval',
      },
    ],
  },
  {
    letter: 'P',
    viewBox: '0 0 200 250',
    wordHint: 'Podium',
    strokes: [
      {
        path: 'M 45 22 L 45 228',
        startX: 45,
        startY: 22,
        label: 'Vertical',
      },
      {
        path: 'M 45 22 C 155 22 155 125 45 125',
        startX: 45,
        startY: 22,
        label: 'Bump',
      },
    ],
  },
  {
    letter: 'Q',
    viewBox: '0 0 200 250',
    wordHint: 'Qualify',
    strokes: [
      {
        path: 'M 100 22 C 178 22 178 228 100 228 C 22 228 22 22 100 22',
        startX: 100,
        startY: 22,
        label: 'Oval',
      },
      {
        path: 'M 125 175 L 168 220',
        startX: 125,
        startY: 175,
        label: 'Tail',
      },
    ],
  },
  {
    letter: 'R',
    viewBox: '0 0 200 250',
    wordHint: 'Race',
    strokes: [
      {
        path: 'M 45 22 L 45 228',
        startX: 45,
        startY: 22,
        label: 'Vertical',
      },
      {
        path: 'M 45 22 C 155 22 155 125 45 125',
        startX: 45,
        startY: 22,
        label: 'Bump',
      },
      {
        path: 'M 90 125 L 158 228',
        startX: 90,
        startY: 125,
        label: 'Leg',
      },
    ],
  },
  {
    letter: 'S',
    viewBox: '0 0 200 250',
    wordHint: 'Speed',
    strokes: [
      {
        path: 'M 155 65 C 155 22 45 22 45 103 C 45 160 155 162 155 203 C 155 228 45 228 45 195',
        startX: 155,
        startY: 65,
        label: 'S-curve',
      },
    ],
  },
  {
    letter: 'T',
    viewBox: '0 0 200 250',
    wordHint: 'Track',
    strokes: [
      {
        path: 'M 30 22 L 170 22',
        startX: 30,
        startY: 22,
        label: 'Top bar',
      },
      {
        path: 'M 100 22 L 100 228',
        startX: 100,
        startY: 22,
        label: 'Vertical',
      },
    ],
  },
  {
    letter: 'U',
    viewBox: '0 0 200 250',
    wordHint: 'Undercut',
    strokes: [
      {
        path: 'M 45 22 L 45 185 Q 45 228 100 228',
        startX: 45,
        startY: 22,
        label: 'Left side',
      },
      {
        path: 'M 100 228 Q 155 228 155 185 L 155 22',
        startX: 100,
        startY: 228,
        label: 'Right side',
      },
    ],
  },
  {
    letter: 'V',
    viewBox: '0 0 200 250',
    wordHint: 'Victory',
    strokes: [
      {
        path: 'M 30 22 L 100 228',
        startX: 30,
        startY: 22,
        label: 'Left leg',
      },
      {
        path: 'M 100 228 L 170 22',
        startX: 100,
        startY: 228,
        label: 'Right leg',
      },
    ],
  },
  {
    letter: 'W',
    viewBox: '0 0 200 250',
    wordHint: 'Wheel',
    strokes: [
      {
        path: 'M 18 22 L 55 228',
        startX: 18,
        startY: 22,
        label: 'Far left',
      },
      {
        path: 'M 55 228 L 100 118',
        startX: 55,
        startY: 228,
        label: 'Left inner',
      },
      {
        path: 'M 100 118 L 145 228',
        startX: 100,
        startY: 118,
        label: 'Right inner',
      },
      {
        path: 'M 145 228 L 182 22',
        startX: 145,
        startY: 228,
        label: 'Far right',
      },
    ],
  },
  {
    letter: 'X',
    viewBox: '0 0 200 250',
    wordHint: 'eXtra',
    strokes: [
      {
        path: 'M 30 22 L 170 228',
        startX: 30,
        startY: 22,
        label: 'Left diagonal',
      },
      {
        path: 'M 170 22 L 30 228',
        startX: 170,
        startY: 22,
        label: 'Right diagonal',
      },
    ],
  },
  {
    letter: 'Y',
    viewBox: '0 0 200 250',
    wordHint: 'Yellow flag',
    strokes: [
      {
        path: 'M 30 22 L 100 125',
        startX: 30,
        startY: 22,
        label: 'Left arm',
      },
      {
        path: 'M 170 22 L 100 125',
        startX: 170,
        startY: 22,
        label: 'Right arm',
      },
      {
        path: 'M 100 125 L 100 228',
        startX: 100,
        startY: 125,
        label: 'Stem',
      },
    ],
  },
  {
    letter: 'Z',
    viewBox: '0 0 200 250',
    wordHint: 'Zoom',
    strokes: [
      {
        path: 'M 30 22 L 170 22',
        startX: 30,
        startY: 22,
        label: 'Top bar',
      },
      {
        path: 'M 170 22 L 30 228',
        startX: 170,
        startY: 22,
        label: 'Diagonal',
      },
      {
        path: 'M 30 228 L 170 228',
        startX: 30,
        startY: 228,
        label: 'Bottom bar',
      },
    ],
  },
];
