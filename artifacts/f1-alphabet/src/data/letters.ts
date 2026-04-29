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
        // Apex at (100, 22), bottom-left at (25, 228)
        path: 'M 100 22 L 25 228',
        startX: 100,
        startY: 22,
        label: 'Left leg',
      },
      {
        // Apex at (100, 22), bottom-right at (175, 228)
        path: 'M 100 22 L 175 228',
        startX: 100,
        startY: 22,
        label: 'Right leg',
      },
      {
        // Crossbar at y=155 (interpolated along the legs)
        // Left x at y=155: 25 + (100-25)*(228-155)/(228-22) = 25 + 75*73/206 ≈ 51.6 → 52
        // Right x at y=155: 175 - 75*73/206 ≈ 148.4 → 148
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
        // Two cubic bumps sharing the vertical at x=45
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
        // Large arc: centre ≈ (100, 125), start at upper-right opening,
        // sweep counter-clockwise (sweep-flag 0) via the left, end at lower-right opening
        path: 'M 162 72 A 82 80 0 1 0 162 178',
        startX: 162,
        startY: 72,
        label: 'Arc',
      },
    ],
  },
];
