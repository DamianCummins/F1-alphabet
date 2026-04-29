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
    viewBox: '0 0 200 240',
    wordHint: 'Apple',
    strokes: [
      {
        path: 'M 100 22 L 25 218',
        startX: 100,
        startY: 22,
        label: 'Left leg',
      },
      {
        path: 'M 100 22 L 175 218',
        startX: 100,
        startY: 22,
        label: 'Right leg',
      },
      {
        path: 'M 51 150 L 149 150',
        startX: 51,
        startY: 150,
        label: 'Crossbar',
      },
    ],
  },
  {
    letter: 'B',
    viewBox: '0 0 200 240',
    wordHint: 'Ball',
    strokes: [
      {
        path: 'M 45 22 L 45 218',
        startX: 45,
        startY: 22,
        label: 'Vertical',
      },
      {
        path: 'M 45 22 C 152 22 152 120 45 120 C 164 120 164 218 45 218',
        startX: 45,
        startY: 22,
        label: 'Bumps',
      },
    ],
  },
  {
    letter: 'C',
    viewBox: '0 0 200 240',
    wordHint: 'Car',
    strokes: [
      {
        path: 'M 162 68 A 82 80 0 1 0 162 172',
        startX: 162,
        startY: 68,
        label: 'Arc',
      },
    ],
  },
];
