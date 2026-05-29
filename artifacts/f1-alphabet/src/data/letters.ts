export interface Stroke {
  path: string;
  startX: number;
  startY: number;
  label: string;
  type?: "tap";
}

export interface LetterData {
  letter: string;
  viewBox: string;
  wordHint: string;
  strokes: Stroke[];
}

export const LETTERS: LetterData[] = [
  {
    letter: "A",
    viewBox: "0 0 200 250",
    wordHint: "Apple",
    strokes: [
      {
        path: "M 100 22 L 25 228",
        startX: 100,
        startY: 22,
        label: "Left leg",
      },
      {
        path: "M 100 22 L 175 228",
        startX: 100,
        startY: 22,
        label: "Right leg",
      },
      {
        path: "M 52 155 L 148 155",
        startX: 52,
        startY: 155,
        label: "Crossbar",
      },
    ],
  },
  {
    letter: "B",
    viewBox: "0 0 200 250",
    wordHint: "Ball",
    strokes: [
      {
        path: "M 45 22 L 45 228",
        startX: 45,
        startY: 22,
        label: "Vertical",
      },
      {
        path: "M 45 22 C 155 22 155 125 45 125 C 165 125 165 228 45 228",
        startX: 45,
        startY: 22,
        label: "Bumps",
      },
    ],
  },
  {
    letter: "C",
    viewBox: "0 0 200 250",
    wordHint: "Car",
    strokes: [
      {
        path: "M 162 72 A 82 80 0 1 0 162 178",
        startX: 162,
        startY: 72,
        label: "Arc",
      },
    ],
  },
  {
    letter: "D",
    viewBox: "0 0 200 250",
    wordHint: "Driver",
    strokes: [
      {
        path: "M 45 22 L 45 228",
        startX: 45,
        startY: 22,
        label: "Vertical",
      },
      {
        path: "M 45 22 C 170 22 170 228 45 228",
        startX: 45,
        startY: 22,
        label: "Bump",
      },
    ],
  },
  {
    letter: "E",
    viewBox: "0 0 200 250",
    wordHint: "Engine",
    strokes: [
      {
        path: "M 45 22 L 45 228",
        startX: 45,
        startY: 22,
        label: "Vertical",
      },
      {
        path: "M 45 22 L 155 22",
        startX: 45,
        startY: 22,
        label: "Top bar",
      },
      {
        path: "M 45 125 L 130 125",
        startX: 45,
        startY: 125,
        label: "Middle bar",
      },
      {
        path: "M 45 228 L 155 228",
        startX: 45,
        startY: 228,
        label: "Bottom bar",
      },
    ],
  },
  {
    letter: "F",
    viewBox: "0 0 200 250",
    wordHint: "Flag",
    strokes: [
      {
        path: "M 45 22 L 45 228",
        startX: 45,
        startY: 22,
        label: "Vertical",
      },
      {
        path: "M 45 22 L 155 22",
        startX: 45,
        startY: 22,
        label: "Top bar",
      },
      {
        path: "M 45 125 L 130 125",
        startX: 45,
        startY: 125,
        label: "Middle bar",
      },
    ],
  },
  {
    letter: "G",
    viewBox: "0 0 200 250",
    wordHint: "Gear",
    strokes: [
      {
        path: "M 155 65 C 155 22 45 22 45 125 C 45 228 155 228 155 175",
        startX: 155,
        startY: 65,
        label: "Arc",
      },
      {
        path: "M 155 175 L 105 175",
        startX: 155,
        startY: 175,
        label: "Shelf",
      },
    ],
  },
  {
    letter: "H",
    viewBox: "0 0 200 250",
    wordHint: "Helmet",
    strokes: [
      {
        path: "M 45 22 L 45 228",
        startX: 45,
        startY: 22,
        label: "Left leg",
      },
      {
        path: "M 155 22 L 155 228",
        startX: 155,
        startY: 22,
        label: "Right leg",
      },
      {
        path: "M 45 125 L 155 125",
        startX: 45,
        startY: 125,
        label: "Crossbar",
      },
    ],
  },
  {
    letter: "I",
    viewBox: "0 0 200 250",
    wordHint: "Italian",
    strokes: [
      {
        path: "M 70 22 L 130 22",
        startX: 70,
        startY: 22,
        label: "Top bar",
      },
      {
        path: "M 100 22 L 100 228",
        startX: 100,
        startY: 22,
        label: "Vertical",
      },
      {
        path: "M 70 228 L 130 228",
        startX: 70,
        startY: 228,
        label: "Bottom bar",
      },
    ],
  },
  {
    letter: "J",
    viewBox: "0 0 200 250",
    wordHint: "Jump",
    strokes: [
      {
        path: "M 65 22 L 115 22",
        startX: 65,
        startY: 22,
        label: "Top bar",
      },
      {
        path: "M 92 22 L 92 185 Q 92 228 55 228 Q 30 228 30 200",
        startX: 92,
        startY: 22,
        label: "Hook",
      },
    ],
  },
  {
    letter: "K",
    viewBox: "0 0 200 250",
    wordHint: "Kart",
    strokes: [
      {
        path: "M 45 22 L 45 228",
        startX: 45,
        startY: 22,
        label: "Vertical",
      },
      {
        path: "M 45 125 L 155 22",
        startX: 45,
        startY: 125,
        label: "Upper arm",
      },
      {
        path: "M 45 125 L 155 228",
        startX: 45,
        startY: 125,
        label: "Lower arm",
      },
    ],
  },
  {
    letter: "L",
    viewBox: "0 0 200 250",
    wordHint: "Lap",
    strokes: [
      {
        path: "M 45 22 L 45 228",
        startX: 45,
        startY: 22,
        label: "Vertical",
      },
      {
        path: "M 45 228 L 155 228",
        startX: 45,
        startY: 228,
        label: "Base",
      },
    ],
  },
  {
    letter: "M",
    viewBox: "0 0 200 250",
    wordHint: "Monaco",
    strokes: [
      {
        path: "M 30 228 L 30 22",
        startX: 30,
        startY: 228,
        label: "Left leg",
      },
      {
        path: "M 30 22 L 100 130",
        startX: 30,
        startY: 22,
        label: "Left peak",
      },
      {
        path: "M 100 130 L 170 22",
        startX: 100,
        startY: 130,
        label: "Right peak",
      },
      {
        path: "M 170 22 L 170 228",
        startX: 170,
        startY: 22,
        label: "Right leg",
      },
    ],
  },
  {
    letter: "N",
    viewBox: "0 0 200 250",
    wordHint: "Nitro",
    strokes: [
      {
        path: "M 45 228 L 45 22",
        startX: 45,
        startY: 228,
        label: "Left leg",
      },
      {
        path: "M 45 22 L 155 228",
        startX: 45,
        startY: 22,
        label: "Diagonal",
      },
      {
        path: "M 155 228 L 155 22",
        startX: 155,
        startY: 228,
        label: "Right leg",
      },
    ],
  },
  {
    letter: "O",
    viewBox: "0 0 200 250",
    wordHint: "Oval",
    strokes: [
      {
        path: "M 100 22 C 178 22 178 228 100 228 C 22 228 22 22 100 22",
        startX: 100,
        startY: 22,
        label: "Oval",
      },
    ],
  },
  {
    letter: "P",
    viewBox: "0 0 200 250",
    wordHint: "Podium",
    strokes: [
      {
        path: "M 45 22 L 45 228",
        startX: 45,
        startY: 22,
        label: "Vertical",
      },
      {
        path: "M 45 22 C 155 22 155 125 45 125",
        startX: 45,
        startY: 22,
        label: "Bump",
      },
    ],
  },
  {
    letter: "Q",
    viewBox: "0 0 200 250",
    wordHint: "Qualify",
    strokes: [
      {
        path: "M 100 22 C 178 22 178 228 100 228 C 22 228 22 22 100 22",
        startX: 100,
        startY: 22,
        label: "Oval",
      },
      {
        path: "M 125 175 L 168 220",
        startX: 125,
        startY: 175,
        label: "Tail",
      },
    ],
  },
  {
    letter: "R",
    viewBox: "0 0 200 250",
    wordHint: "Race",
    strokes: [
      {
        path: "M 45 22 L 45 228",
        startX: 45,
        startY: 22,
        label: "Vertical",
      },
      {
        path: "M 45 22 C 155 22 155 125 45 125",
        startX: 45,
        startY: 22,
        label: "Bump",
      },
      {
        path: "M 90 125 L 158 228",
        startX: 90,
        startY: 125,
        label: "Leg",
      },
    ],
  },
  {
    letter: "S",
    viewBox: "0 0 200 250",
    wordHint: "Speed",
    strokes: [
      {
        path: "M 155 55 C 155 22 45 22 45 108 C 45 125 155 125 155 142 C 155 228 45 228 45 195",
        startX: 155,
        startY: 55,
        label: "S-curve",
      },
    ],
  },
  {
    letter: "T",
    viewBox: "0 0 200 250",
    wordHint: "Track",
    strokes: [
      {
        path: "M 30 22 L 170 22",
        startX: 30,
        startY: 22,
        label: "Top bar",
      },
      {
        path: "M 100 22 L 100 228",
        startX: 100,
        startY: 22,
        label: "Vertical",
      },
    ],
  },
  {
    letter: "U",
    viewBox: "0 0 200 250",
    wordHint: "Undercut",
    strokes: [
      {
        path: "M 45 22 L 45 185 Q 45 228 100 228",
        startX: 45,
        startY: 22,
        label: "Left side",
      },
      {
        path: "M 100 228 Q 155 228 155 185 L 155 22",
        startX: 100,
        startY: 228,
        label: "Right side",
      },
    ],
  },
  {
    letter: "V",
    viewBox: "0 0 200 250",
    wordHint: "Victory",
    strokes: [
      {
        path: "M 30 22 L 100 228",
        startX: 30,
        startY: 22,
        label: "Left leg",
      },
      {
        path: "M 100 228 L 170 22",
        startX: 100,
        startY: 228,
        label: "Right leg",
      },
    ],
  },
  {
    letter: "W",
    viewBox: "0 0 200 250",
    wordHint: "Wheel",
    strokes: [
      {
        path: "M 18 22 L 55 228",
        startX: 18,
        startY: 22,
        label: "Far left",
      },
      {
        path: "M 55 228 L 100 118",
        startX: 55,
        startY: 228,
        label: "Left inner",
      },
      {
        path: "M 100 118 L 145 228",
        startX: 100,
        startY: 118,
        label: "Right inner",
      },
      {
        path: "M 145 228 L 182 22",
        startX: 145,
        startY: 228,
        label: "Far right",
      },
    ],
  },
  {
    letter: "X",
    viewBox: "0 0 200 250",
    wordHint: "eXtra",
    strokes: [
      {
        path: "M 30 22 L 170 228",
        startX: 30,
        startY: 22,
        label: "Left diagonal",
      },
      {
        path: "M 170 22 L 30 228",
        startX: 170,
        startY: 22,
        label: "Right diagonal",
      },
    ],
  },
  {
    letter: "Y",
    viewBox: "0 0 200 250",
    wordHint: "Yellow flag",
    strokes: [
      {
        path: "M 30 22 L 100 125",
        startX: 30,
        startY: 22,
        label: "Left arm",
      },
      {
        path: "M 170 22 L 100 125",
        startX: 170,
        startY: 22,
        label: "Right arm",
      },
      {
        path: "M 100 125 L 100 228",
        startX: 100,
        startY: 125,
        label: "Stem",
      },
    ],
  },
  {
    letter: "Z",
    viewBox: "0 0 200 250",
    wordHint: "Zoom",
    strokes: [
      {
        path: "M 30 22 L 170 22",
        startX: 30,
        startY: 22,
        label: "Top bar",
      },
      {
        path: "M 170 22 L 30 228",
        startX: 170,
        startY: 22,
        label: "Diagonal",
      },
      {
        path: "M 30 228 L 170 228",
        startX: 30,
        startY: 228,
        label: "Bottom bar",
      },
    ],
  },
];

/*
 * Lowercase letter tracks
 *
 * Shared coordinate space (all letters use these absolute positions):
 *   Ascender top  : y = 20
 *   x-height top  : y = 110
 *   Baseline      : y = 210
 *   Descender btm : y = 278
 *   x-center: 100, left stem: 55, right stem: 145
 *
 * Each letter uses a tight viewBox cropped to its content so that
 * the letter always appears centred in the game area regardless of
 * whether it has ascenders or descenders.
 *
 *   x-height only  → viewBox '0 90 200 140'   (y 90–230)
 *   ascender       → viewBox '0 0 200 230'    (y 0–230)
 *   short ascender → viewBox '0 25 200 205'   (y 25–230)
 *   descender      → viewBox '0 90 200 205'   (y 90–295)
 *   i (dot+body)   → viewBox '0 40 200 185'   (y 40–225)
 *   j (dot+hook)   → viewBox '0 40 200 255'   (y 40–295)
 *
 * Stroke order follows standard print-handwriting formation.
 * Entry/exit flicks (↩ tails) are encoded as short Q/C curves on
 * the relevant strokes: a, b, d, l, t, u.
 */
export const LOWERCASE_LETTERS: LetterData[] = [
  // ── a ── x-height; circle first (counterclockwise from ~1 o'clock), then down stroke with exit flick
  {
    letter: "a",
    viewBox: "0 90 200 140",
    wordHint: "Apple",
    strokes: [
      {
        // Closed oval: start at top-right (~2 o'clock), counterclockwise all the way around, return to start
        path: "M 145 128 C 145 110 55 110 55 160 C 55 232 145 232 145 178 L 145 128",
        startX: 145,
        startY: 128,
        label: "Round",
      },
      {
        // Down stroke from top-right junction to baseline with exit flick right
        path: "M 145 128 L 145 207 Q 148 218 157 214",
        startX: 145,
        startY: 128,
        label: "Down stroke",
      },
    ],
  },

  // ── b ── ascender; tall stroke with entry flick, then bump (mirror of d's circle)
  {
    letter: "b",
    viewBox: "0 0 200 230",
    wordHint: "Ball",
    strokes: [
      {
        path: "M 55 20 L 55 192 Q 55 205 35 200 ",
        startX: 55,
        startY: 20,
        label: "Tall stroke",
      },
      {
        // Right-side oval: mirrors d's circle, uses x=155 control points like o
        path: "M 55 192 L 55 152 C 55 110 145 110 145 160 C 145 210 55 220 55 172",
        startX: 55,
        startY: 192,
        label: "Bump",
      },
    ],
  },

  // ── c ── x-height; open arc from ~2 o'clock counterclockwise to ~4 o'clock
  {
    letter: "c",
    viewBox: "0 90 200 140",
    wordHint: "Car",
    strokes: [
      {
        path: "M 145 128 C 145 110 55 110 55 160 C 55 210 145 210 145 192",
        startX: 145,
        startY: 128,
        label: "Arc",
      },
    ],
  },

  // ── d ── ascender; circle first (same geometry as c/o), then tall stroke with exit flick
  {
    letter: "d",
    viewBox: "0 0 200 230",
    wordHint: "Driver",
    strokes: [
      {
        // Closed oval then continue straight up to ascender top — one continuous stroke
        path: "M 145 128 C 145 110 55 110 55 160 C 55 232 145 232 145 128 L 145 20",
        startX: 145,
        startY: 128,
        label: "Circle & up",
      },
      {
        // Down stroke from ascender top to baseline with exit flick
        path: "M 145 20 L 145 207 Q 148 218 157 214",
        startX: 145,
        startY: 20,
        label: "Down stroke",
      },
    ],
  },

  // ── e ── x-height; start at left-of-centre midline, drive RIGHT along crossbar,
  //         then arc UP counterclockwise over the top, down the left, under the bottom,
  //         ending lower-right — mouth of the e faces RIGHT
  {
    letter: "e",
    viewBox: "0 90 200 140",
    wordHint: "Engine",
    strokes: [
      {
        path: "M 60 160 L 147 160 C 147 105 57 105 57 160 C 57 215 147 215 147 187",
        startX: 60,
        startY: 160,
        label: "Loop",
      },
    ],
  },

  // ── f ── ascender; hook curves left at top then long stem down, then crossbar
  {
    letter: "f",
    viewBox: "0 0 200 230",
    wordHint: "Flag",
    strokes: [
      {
        path: "M 148 52 C 148 20 70 20 70 52 L 70 210",
        startX: 148,
        startY: 52,
        label: "Hook and stem",
      },
      {
        path: "M 42 138 L 122 138",
        startX: 42,
        startY: 138,
        label: "Crossbar",
      },
    ],
  },

  // ── g ── descender; circle first, then down stroke curling left at bottom
  {
    letter: "g",
    viewBox: "0 90 200 205",
    wordHint: "Gear",
    strokes: [
      {
        path: "M 145 128 C 145 110 55 110 55 160 C 55 210 145 210 145 192 L 145 128",
        startX: 145,
        startY: 128,
        label: "Circle",
      },
      {
        path: "M 145 128 L 145 260 C 145 278 55 278 55 260",
        startX: 145,
        startY: 128,
        label: "Descender",
      },
    ],
  },

  // ── h ── ascender; tall down stroke, then arch right and down
  {
    letter: "h",
    viewBox: "0 0 200 230",
    wordHint: "Helmet",
    strokes: [
      {
        path: "M 55 20 L 55 210",
        startX: 55,
        startY: 20,
        label: "Tall stroke",
      },
      {
        path: "M 55 210 L 55 140 C 55 110 145 110 145 140 L 145 210",
        startX: 55,
        startY: 210,
        label: "Arch and down",
      },
    ],
  },

  // ── i ── body stroke first, dot last; tight viewBox includes dot zone
  {
    letter: "i",
    viewBox: "0 40 200 185",
    wordHint: "Italian",
    strokes: [
      {
        path: "M 100 110 L 100 210",
        startX: 100,
        startY: 110,
        label: "Down stroke",
      },
      {
        type: "tap" as const,
        path: "",
        startX: 100,
        startY: 65,
        label: "Dot",
      },
    ],
  },

  // ── j ── hook stroke first, dot last
  {
    letter: "j",
    viewBox: "0 40 200 255",
    wordHint: "Jump",
    strokes: [
      {
        path: "M 100 110 L 100 260 C 100 278 60 278 55 260",
        startX: 100,
        startY: 110,
        label: "Hook",
      },
      {
        type: "tap" as const,
        path: "",
        startX: 100,
        startY: 65,
        label: "Dot",
      },
    ],
  },

  // ── k ── ascender; tall stroke, kick in toward stem, kick out away from stem
  {
    letter: "k",
    viewBox: "0 0 200 230",
    wordHint: "Kart",
    strokes: [
      {
        path: "M 55 20 L 55 210",
        startX: 55,
        startY: 20,
        label: "Tall stroke",
      },
      {
        path: "M 145 110 L 55 162",
        startX: 145,
        startY: 110,
        label: "Kick in",
      },
      {
        path: "M 55 162 L 145 210",
        startX: 55,
        startY: 162,
        label: "Kick out",
      },
    ],
  },

  // ── l ── ascender; single tall stroke with exit flick at baseline
  {
    letter: "l",
    viewBox: "0 0 200 230",
    wordHint: "Lap",
    strokes: [
      {
        path: "M 100 20 L 100 210 C 100 228 140 228 145 210",
        startX: 100,
        startY: 20,
        label: "Tall stroke",
      },
    ],
  },

  // ── m ── x-height; down, first arch-and-down, second arch-and-down
  {
    letter: "m",
    viewBox: "0 90 200 140",
    wordHint: "Monaco",
    strokes: [
      {
        path: "M 40 110 L 40 210",
        startX: 40,
        startY: 110,
        label: "Down stroke",
      },
      {
        path: "M 40 210 L 40 132 C 40 110 100 110 100 135 L 100 210",
        startX: 40,
        startY: 210,
        label: "First arch",
      },
      {
        path: "M 100 210 L 100 132 C 100 110 160 110 160 135 L 160 210",
        startX: 100,
        startY: 210,
        label: "Second arch",
      },
    ],
  },

  // ── n ── x-height; down stroke, then arch-and-down
  {
    letter: "n",
    viewBox: "0 90 200 140",
    wordHint: "Nitro",
    strokes: [
      {
        path: "M 55 110 L 55 210",
        startX: 55,
        startY: 110,
        label: "Down stroke",
      },
      {
        path: "M 55 210 L 55 135 C 55 110 145 110 145 140 L 145 210",
        startX: 55,
        startY: 210,
        label: "Arch and down",
      },
    ],
  },

  // ── o ── x-height; single counterclockwise circle
  {
    letter: "o",
    viewBox: "0 90 200 140",
    wordHint: "Oval",
    strokes: [
      {
        path: "M 100 110 C 155 110 155 210 100 210 C 45 210 45 110 100 110",
        startX: 100,
        startY: 110,
        label: "Circle",
      },
    ],
  },

  // ── p ── descender; long down stroke first (below baseline), then bump right
  {
    letter: "p",
    viewBox: "0 90 200 205",
    wordHint: "Podium",
    strokes: [
      {
        path: "M 55 110 L 55 278",
        startX: 55,
        startY: 110,
        label: "Down stroke",
      },
      {
        // Right-side oval: same geometry as b's bump (x=155 control points)
        path: "M 55 128 C 55 110 145 110 145 160 C 145 210 55 210 55 192",
        startX: 55,
        startY: 128,
        label: "Bump",
      },
    ],
  },

  // ── q ── descender; circle first (same as c), then long down stroke
  {
    letter: "q",
    viewBox: "0 90 200 205",
    wordHint: "Qualify",
    strokes: [
      {
        // Left-side oval: same geometry as d's circle
        path: "M 145 128 C 145 110 55 110 55 160 C 55 210 145 210 145 192 L 145 128",
        startX: 145,
        startY: 128,
        label: "Circle",
      },
      {
        // Descender with exit flick at the bottom
        path: "M 145 128 L 145 270 Q 152 282 172 248",
        startX: 145,
        startY: 128,
        label: "Down stroke",
      },
    ],
  },

  // ── r ── x-height; down stroke, then short shoulder curving right
  {
    letter: "r",
    viewBox: "0 90 200 140",
    wordHint: "Race",
    strokes: [
      {
        path: "M 55 110 L 55 210",
        startX: 55,
        startY: 110,
        label: "Down stroke",
      },
      {
        path: "M 55 210 L 55 135 C 55 110 145 110 145 150",
        startX: 55,
        startY: 210,
        label: "Shoulder",
      },
    ],
  },

  // ── s ── x-height; three-segment bezier creating a true S crossover
  //         start upper-right → upper arc CCW to left → crossover CW to right → lower arc CCW to lower-left
  {
    letter: "s",
    viewBox: "0 90 200 140",
    wordHint: "Speed",
    strokes: [
      {
        path: "M 140 130 C 140 110 60 110 60 150 C 60 168 140 152 140 172 C 140 210 60 210 60 192",
        startX: 140,
        startY: 130,
        label: "S curve",
      },
    ],
  },

  // ── t ── short ascender; stem (short top, long down with exit flick), then crossbar
  {
    letter: "t",
    viewBox: "0 25 200 205",
    wordHint: "Track",
    strokes: [
      {
        // Stem starts well above x-height (short ascender) with exit flick at base
        path: "M 100 20 L 100 210 C 100 228 140 228 145 210",
        startX: 100,
        startY: 45,
        label: "Down stroke",
      },
      {
        path: "M 62 118 L 138 118",
        startX: 62,
        startY: 118,
        label: "Crossbar",
      },
    ],
  },

  // ── u ── x-height; curve down-across-up, then up stroke with exit flick at top
  {
    letter: "u",
    viewBox: "0 90 200 140",
    wordHint: "Undercut",
    strokes: [
      {
        // Down, curve under, back up to top-right
        path: "M 55 110 L 55 182 Q 55 210 100 210 Q 145 210 145 182 L 145 110",
        startX: 55,
        startY: 110,
        label: "Curve",
      },
      {
        // Descend from top-right with exit flick
        path: "M 145 110 L 145 207 Q 150 217 158 213",
        startX: 145,
        startY: 110,
        label: "Down stroke",
      },
    ],
  },

  // ── v ── x-height; left diagonal down, right diagonal up
  {
    letter: "v",
    viewBox: "0 90 200 140",
    wordHint: "Victory",
    strokes: [
      {
        path: "M 55 110 L 100 210",
        startX: 55,
        startY: 110,
        label: "Left leg",
      },
      {
        path: "M 100 210 L 145 110",
        startX: 100,
        startY: 210,
        label: "Right leg",
      },
    ],
  },

  // ── w ── x-height; four diagonals forming two v-shapes
  {
    letter: "w",
    viewBox: "0 90 200 140",
    wordHint: "Wheel",
    strokes: [
      {
        path: "M 35 110 L 67 210",
        startX: 35,
        startY: 110,
        label: "Far left",
      },
      {
        path: "M 67 210 L 100 155",
        startX: 67,
        startY: 210,
        label: "Left inner",
      },
      {
        path: "M 100 155 L 133 210",
        startX: 100,
        startY: 155,
        label: "Right inner",
      },
      {
        path: "M 133 210 L 165 110",
        startX: 133,
        startY: 210,
        label: "Far right",
      },
    ],
  },

  // ── x ── x-height; two crossing diagonals
  {
    letter: "x",
    viewBox: "0 90 200 140",
    wordHint: "eXtra",
    strokes: [
      {
        path: "M 55 110 L 145 210",
        startX: 55,
        startY: 110,
        label: "Left diagonal",
      },
      {
        path: "M 145 110 L 55 210",
        startX: 145,
        startY: 110,
        label: "Right diagonal",
      },
    ],
  },

  // ── y ── descender; left arm to V-point, then right arm continuing into descender
  {
    letter: "y",
    viewBox: "0 90 200 205",
    wordHint: "Yellow flag",
    strokes: [
      {
        path: "M 55 110 L 100 178",
        startX: 55,
        startY: 110,
        label: "Left arm",
      },
      {
        path: "M 145 110 L 100 178 L 65 278",
        startX: 145,
        startY: 110,
        label: "Right arm and tail",
      },
    ],
  },

  // ── z ── x-height; top bar, diagonal, bottom bar
  {
    letter: "z",
    viewBox: "0 90 200 140",
    wordHint: "Zoom",
    strokes: [
      {
        path: "M 55 110 L 145 110",
        startX: 55,
        startY: 110,
        label: "Top bar",
      },
      {
        path: "M 145 110 L 55 210",
        startX: 145,
        startY: 110,
        label: "Diagonal",
      },
      {
        path: "M 55 210 L 145 210",
        startX: 55,
        startY: 210,
        label: "Bottom bar",
      },
    ],
  },
];
