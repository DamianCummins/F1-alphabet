# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### F1 Alphabet (`artifacts/f1-alphabet`)
- **Kind**: Static React + Vite SPA (no backend)
- **Preview path**: `/`
- **Port**: 23112
- **Purpose**: Toddler-friendly (age 3+) F1-themed alphabet tracing app
- **Letters**: A, B, C — each rendered as SVG race tracks
- **Mechanic**: Drag an F1 car along each stroke; completes at >90% progress
- **Multi-stroke**: Letters with multiple strokes (A=3, B=2, C=1) show a fresh car per stroke
- **Celebration**: CSS confetti animation + "GREAT DRIVE!" overlay on letter completion
- **Key files**:
  - `src/data/letters.ts` — SVG path data, stroke definitions, word hints
  - `src/utils/pathUtils.ts` — `screenToSVG`, `findClosestLength` (ternary search), `getPathAngle`
  - `src/components/LetterScreen.tsx` — game logic, pointer events, SVG rendering
  - `src/components/F1Car.tsx` — top-down SVG F1 car (red for active, grey when locked)
  - `src/components/Confetti.tsx` — CSS-only confetti celebration overlay
  - `src/App.tsx` — welcome screen + learning screen (no router, pure state)
  - `src/index.css` — dark navy theme vars + game animations (confettiFall, bounceIn, carIdlePulse)
- **Build**: `vite build` → `dist/public/` (GitHub Pages compatible, `base: "./"`)

### API Server (`artifacts/api-server`)
- **Kind**: Express API server
- **Port**: 8080
