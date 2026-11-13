import type { Config } from 'tailwindcss';

// Tokens espelham src/styles/tokens.css (fonte única de verdade = CSS vars)
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: 'var(--c-forest)',
        night: 'var(--c-night)',
        leaf: 'var(--c-leaf)',
        amber: 'var(--c-amber)',
        bone: 'var(--c-bone)',
        protect: 'var(--c-protect)',
        prevent: 'var(--c-prevent)',
        save: 'var(--c-save)',
      },
      fontFamily: { display: ['var(--font-display)'], sans: ['var(--font-body)'] },
    },
  },
  plugins: [],
};
export default config;
