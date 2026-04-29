/** Convert screen/client coordinates to SVG viewport coordinates */
export function screenToSVG(
  svg: SVGSVGElement,
  clientX: number,
  clientY: number,
): { x: number; y: number } {
  const pt = svg.createSVGPoint();
  pt.x = clientX;
  pt.y = clientY;
  const ctm = svg.getScreenCTM();
  if (!ctm) return { x: 0, y: 0 };
  const svgPt = pt.matrixTransform(ctm.inverse());
  return { x: svgPt.x, y: svgPt.y };
}

/** Find the path length (0..totalLength) whose point is closest to (x, y) in SVG coords */
export function findClosestLength(
  path: SVGPathElement,
  x: number,
  y: number,
): number {
  const total = path.getTotalLength();
  const SAMPLES = 120;

  let bestLen = 0;
  let bestDist = Infinity;

  for (let i = 0; i <= SAMPLES; i++) {
    const len = (i / SAMPLES) * total;
    const pt = path.getPointAtLength(len);
    const dist = (pt.x - x) ** 2 + (pt.y - y) ** 2;
    if (dist < bestDist) {
      bestDist = dist;
      bestLen = len;
    }
  }

  // Ternary-search refinement around the best sample
  let lo = Math.max(0, bestLen - total / SAMPLES);
  let hi = Math.min(total, bestLen + total / SAMPLES);

  for (let iter = 0; iter < 20; iter++) {
    const m1 = lo + (hi - lo) / 3;
    const m2 = hi - (hi - lo) / 3;
    const p1 = path.getPointAtLength(m1);
    const p2 = path.getPointAtLength(m2);
    const d1 = (p1.x - x) ** 2 + (p1.y - y) ** 2;
    const d2 = (p2.x - x) ** 2 + (p2.y - y) ** 2;
    if (d1 < d2) hi = m2;
    else lo = m1;
  }

  return (lo + hi) / 2;
}

/** Get the tangent angle in degrees at a given path length (0° = pointing right) */
export function getPathAngle(path: SVGPathElement, len: number): number {
  const total = path.getTotalLength();
  const epsilon = Math.min(3, total * 0.02);
  const p1 = path.getPointAtLength(Math.max(0, len - epsilon));
  const p2 = path.getPointAtLength(Math.min(total, len + epsilon));
  return Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI);
}
