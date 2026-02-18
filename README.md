# Axis Grid

Axis Grid is a full-screen generative lattice animation built with `p5.js` inside a `Next.js` App Router shell.

## Features

- Full-viewport animated grid rendered at `/`
- Pointer/touch interaction that pulls nearby nodes
- Plastic deformation so folds persist during a session
- Constraint-based spring simulation to keep the mesh stable
- Responsive grid density and cell ratio based on viewport size
- Static export support for GitHub Pages

## Tech Stack

- `Next.js` 15
- `React` 19
- `TypeScript`
- `p5.js`
- `Vitest` + Testing Library

## Project Structure

```text
app/
  layout.tsx
  page.tsx
components/
  GridEngine.tsx
  GridEngine.test.tsx
next.config.mjs
vitest.config.ts
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` - start local development server
- `npm run build` - production build (with static export config)
- `npm run build:pages` - GitHub Pages build alias
- `npm run start` - start production server
- `npm run serve:pages` - serve exported `out/` directory
- `npm run typecheck` - generate Next types and run TypeScript checks
- `npm test` - run tests once with Vitest

## Static Export and GitHub Pages

Static export is enabled in `next.config.mjs` with `output: "export"`.

When `GITHUB_ACTIONS=true`, the config applies repo-prefixed `basePath` and `assetPrefix` so the exported site resolves correctly on GitHub Pages.

If the repository name changes, update the `repo` constant in `next.config.mjs`.

## Notes

- The `p5` sketch is dynamically imported client-side in `components/GridEngine.tsx`.
- The canvas is rebuilt on resize using container dimensions.
- Unit tests cover layout sizing and the grid host container behavior.
