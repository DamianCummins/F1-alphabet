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
        path: 'M 155 65 C 155 22 45 22 45 125 C 45 228 155 228 155 175',
        startX: 155,
        startY: 65,
        label: 'Arc',
      },
      {
        path: 'M 155 175 L 105 175',
        startX: 155,
        startY: 175,
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
        path: 'M 155 55 C 155 22 45 22 45 108 C 45 125 155 125 155 142 C 155 228 45 228 45 195',
        startX: 155,
        startY: 55,
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

/*
 * Lowercase letter tracks — viewBox 0 0 200 300
 * Coordinate zones:
 *   Ascender top  : y = 20
 *   x-height top  : y = 110
 *   Baseline      : y = 210
 *   Descender btm : y = 275
 * Stroke order follows standard print handwriting formation.
 */
export const LOWERCASE_LETTERS: LetterData[] = [
  {
    letter: 'a',
    viewBox: '0 0 200 300',
    wordHint: 'Apple',
    strokes: [
      {
        path: 'M 145 135 C 145 110 55 110 55 160 C 55 210 145 210 145 185',
        startX: 145,
        startY: 135,
        label: 'Round',
      },
      {
        path: 'M 145 135 L 145 210',
        startX: 145,
        startY: 135,
        label: 'Down stroke',
      },
    ],
  },
  {
    letter: 'b',
    viewBox: '0 0 200 300',
    wordHint: 'Ball',
    strokes: [
      {
        path: 'M 55 20 L 55 210',
        startX: 55,
        startY: 20,
        label: 'Tall stroke',
      },
      {
        path: 'M 55 110 C 145 110 145 210 55 210',
        startX: 55,
        startY: 110,
        label: 'Bump',
      },
    ],
  },
  {
    letter: 'c',
    viewBox: '0 0 200 300',
    wordHint: 'Car',
    strokes: [
      {
        path: 'M 140 130 C 140 110 60 110 60 160 C 60 210 140 210 140 190',
        startX: 140,
        startY: 130,
        label: 'Arc',
      },
    ],
  },
  {
    letter: 'd',
    viewBox: '0 0 200 300',
    wordHint: 'Driver',
    strokes: [
      {
        path: 'M 140 135 C 140 110 60 110 60 160 C 60 210 140 210 140 185',
        startX: 140,
        startY: 135,
        label: 'Circle',
      },
      {
        path: 'M 145 20 L 145 210',
        startX: 145,
        startY: 20,
        label: 'Tall stroke',
      },
    ],
  },
  {
    letter: 'e',
    viewBox: '0 0 200 300',
    wordHint: 'Engine',
    strokes: [
      {
        path: 'M 140 160 L 60 160 C 58 110 145 110 145 165 C 145 210 60 210 63 190',
        startX: 140,
        startY: 160,
        label: 'Loop',
      },
    ],
  },
  {
    letter: 'f',
    viewBox: '0 0 200 300',
    wordHint: 'Flag',
    strokes: [
      {
        path: 'M 148 52 C 148 20 70 20 70 52 L 70 210',
        startX: 148,
        startY: 52,
        label: 'Hook and stem',
      },
      {
        path: 'M 42 138 L 122 138',
        startX: 42,
        startY: 138,
        label: 'Crossbar',
      },
    ],
  },
  {
    letter: 'g',
    viewBox: '0 0 200 300',
    wordHint: 'Gear',
    strokes: [
      {
        path: 'M 145 135 C 145 110 55 110 55 160 C 55 210 145 210 145 185',
        startX: 145,
        startY: 135,
        label: 'Circle',
      },
      {
        path: 'M 145 135 L 145 258 C 145 275 55 275 55 258',
        startX: 145,
        startY: 135,
        label: 'Descender',
      },
    ],
  },
  {
    letter: 'h',
    viewBox: '0 0 200 300',
    wordHint: 'Helmet',
    strokes: [
      {
        path: 'M 55 20 L 55 210',
        startX: 55,
        startY: 20,
        label: 'Tall stroke',
      },
      {
        path: 'M 55 140 C 55 110 145 110 145 140 L 145 210',
        startX: 55,
        startY: 140,
        label: 'Arch and down',
      },
    ],
  },
  {
    letter: 'i',
    viewBox: '0 0 200 300',
    wordHint: 'Italian',
    strokes: [
      {
        path: 'M 100 110 L 100 210',
        startX: 100,
        startY: 110,
        label: 'Down stroke',
      },
      {
        path: 'M 100 57 C 110 57 110 73 100 73 C 90 73 90 57 100 57',
        startX: 100,
        startY: 57,
        label: 'Dot',
      },
    ],
  },
  {
    letter: 'j',
    viewBox: '0 0 200 300',
    wordHint: 'Jump',
    strokes: [
      {
        path: 'M 100 110 L 100 258 C 100 275 60 275 55 258',
        startX: 100,
        startY: 110,
        label: 'Hook',
      },
      {
        path: 'M 100 57 C 110 57 110 73 100 73 C 90 73 90 57 100 57',
        startX: 100,
        startY: 57,
        label: 'Dot',
      },
    ],
  },
  {
    letter: 'k',
    viewBox: '0 0 200 300',
    wordHint: 'Kart',
    strokes: [
      {
        path: 'M 55 20 L 55 210',
        startX: 55,
        startY: 20,
        label: 'Tall stroke',
      },
      {
        path: 'M 145 110 L 55 162',
        startX: 145,
        startY: 110,
        label: 'Kick in',
      },
      {
        path: 'M 55 162 L 145 210',
        startX: 55,
        startY: 162,
        label: 'Kick out',
      },
    ],
  },
  {
    letter: 'l',
    viewBox: '0 0 200 300',
    wordHint: 'Lap',
    strokes: [
      {
        path: 'M 100 20 L 100 210',
        startX: 100,
        startY: 20,
        label: 'Tall stroke',
      },
    ],
  },
  {
    letter: 'm',
    viewBox: '0 0 200 300',
    wordHint: 'Monaco',
    strokes: [
      {
        path: 'M 40 110 L 40 210',
        startX: 40,
        startY: 110,
        label: 'Down stroke',
      },
      {
        path: 'M 40 132 C 40 110 100 110 100 135 L 100 210',
        startX: 40,
        startY: 132,
        label: 'First arch',
      },
      {
        path: 'M 100 132 C 100 110 160 110 160 135 L 160 210',
        startX: 100,
        startY: 132,
        label: 'Second arch',
      },
    ],
  },
  {
    letter: 'n',
    viewBox: '0 0 200 300',
    wordHint: 'Nitro',
    strokes: [
      {
        path: 'M 55 110 L 55 210',
        startX: 55,
        startY: 110,
        label: 'Down stroke',
      },
      {
        path: 'M 55 135 C 55 110 145 110 145 140 L 145 210',
        startX: 55,
        startY: 135,
        label: 'Arch and down',
      },
    ],
  },
  {
    letter: 'o',
    viewBox: '0 0 200 300',
    wordHint: 'Oval',
    strokes: [
      {
        path: 'M 100 110 C 155 110 155 210 100 210 C 45 210 45 110 100 110',
        startX: 100,
        startY: 110,
        label: 'Circle',
      },
    ],
  },
  {
    letter: 'p',
    viewBox: '0 0 200 300',
    wordHint: 'Podium',
    strokes: [
      {
        path: 'M 55 110 L 55 275',
        startX: 55,
        startY: 110,
        label: 'Down stroke',
      },
      {
        path: 'M 55 110 C 145 110 145 210 55 210',
        startX: 55,
        startY: 110,
        label: 'Bump',
      },
    ],
  },
  {
    letter: 'q',
    viewBox: '0 0 200 300',
    wordHint: 'Qualify',
    strokes: [
      {
        path: 'M 145 135 C 145 110 55 110 55 160 C 55 210 145 210 145 185',
        startX: 145,
        startY: 135,
        label: 'Circle',
      },
      {
        path: 'M 145 135 L 145 275',
        startX: 145,
        startY: 135,
        label: 'Down stroke',
      },
    ],
  },
  {
    letter: 'r',
    viewBox: '0 0 200 300',
    wordHint: 'Race',
    strokes: [
      {
        path: 'M 55 110 L 55 210',
        startX: 55,
        startY: 110,
        label: 'Down stroke',
      },
      {
        path: 'M 55 135 C 55 110 145 110 145 150',
        startX: 55,
        startY: 135,
        label: 'Shoulder',
      },
    ],
  },
  {
    letter: 's',
    viewBox: '0 0 200 300',
    wordHint: 'Speed',
    strokes: [
      {
        path: 'M 140 130 C 140 110 60 110 60 155 C 60 210 140 210 140 190',
        startX: 140,
        startY: 130,
        label: 'S curve',
      },
    ],
  },
  {
    letter: 't',
    viewBox: '0 0 200 300',
    wordHint: 'Track',
    strokes: [
      {
        path: 'M 100 45 L 100 210',
        startX: 100,
        startY: 45,
        label: 'Down stroke',
      },
      {
        path: 'M 62 138 L 138 138',
        startX: 62,
        startY: 138,
        label: 'Crossbar',
      },
    ],
  },
  {
    letter: 'u',
    viewBox: '0 0 200 300',
    wordHint: 'Undercut',
    strokes: [
      {
        path: 'M 55 110 L 55 182 Q 55 210 100 210 Q 145 210 145 182',
        startX: 55,
        startY: 110,
        label: 'Curve',
      },
      {
        path: 'M 145 182 L 145 110',
        startX: 145,
        startY: 182,
        label: 'Up stroke',
      },
    ],
  },
  {
    letter: 'v',
    viewBox: '0 0 200 300',
    wordHint: 'Victory',
    strokes: [
      {
        path: 'M 55 110 L 100 210',
        startX: 55,
        startY: 110,
        label: 'Left leg',
      },
      {
        path: 'M 100 210 L 145 110',
        startX: 100,
        startY: 210,
        label: 'Right leg',
      },
    ],
  },
  {
    letter: 'w',
    viewBox: '0 0 200 300',
    wordHint: 'Wheel',
    strokes: [
      {
        path: 'M 35 110 L 67 210',
        startX: 35,
        startY: 110,
        label: 'Far left',
      },
      {
        path: 'M 67 210 L 100 155',
        startX: 67,
        startY: 210,
        label: 'Left inner',
      },
      {
        path: 'M 100 155 L 133 210',
        startX: 100,
        startY: 155,
        label: 'Right inner',
      },
      {
        path: 'M 133 210 L 165 110',
        startX: 133,
        startY: 210,
        label: 'Far right',
      },
    ],
  },
  {
    letter: 'x',
    viewBox: '0 0 200 300',
    wordHint: 'eXtra',
    strokes: [
      {
        path: 'M 55 110 L 145 210',
        startX: 55,
        startY: 110,
        label: 'Left diagonal',
      },
      {
        path: 'M 145 110 L 55 210',
        startX: 145,
        startY: 110,
        label: 'Right diagonal',
      },
    ],
  },
  {
    letter: 'y',
    viewBox: '0 0 200 300',
    wordHint: 'Yellow flag',
    strokes: [
      {
        path: 'M 55 110 L 100 178',
        startX: 55,
        startY: 110,
        label: 'Left arm',
      },
      {
        path: 'M 145 110 L 100 178 L 65 275',
        startX: 145,
        startY: 110,
        label: 'Right arm and tail',
      },
    ],
  },
  {
    letter: 'z',
    viewBox: '0 0 200 300',
    wordHint: 'Zoom',
    strokes: [
      {
        path: 'M 55 110 L 145 110',
        startX: 55,
        startY: 110,
        label: 'Top bar',
      },
      {
        path: 'M 145 110 L 55 210',
        startX: 145,
        startY: 110,
        label: 'Diagonal',
      },
      {
        path: 'M 55 210 L 145 210',
        startX: 55,
        startY: 210,
        label: 'Bottom bar',
      },
    ],
  },
];
