/** @type {import('tailwindcss').Config} */
const customColors = [
  'navy', 'navydeep', 'navydeeper',
  'teal', 'tealdark',
  'ink', 'muted', 'muted2',
  'card', 'cardlight', 'cardlighter',
  'coral', 'amber', 'violet',
];

const properties = ['bg', 'text', 'border', 'ring', 'from', 'via', 'to', 'decoration', 'divide', 'outline', 'fill', 'stroke'];
const variants = ['', 'hover:', 'focus:', 'active:', 'group-hover:', 'lg:', 'md:', 'sm:', 'lg:hover:'];

const safelist = [];
for (const color of customColors) {
  for (const prop of properties) {
    for (const variant of variants) {
      safelist.push(`${variant}${prop}-${color}`);
    }
  }
}

/** Helper: membuat fungsi warna Tailwind yang membaca CSS variable RGB, mendukung opacity modifier (bg-teal/20 dst). */
function withOpacity(varName) {
  return ({ opacityValue }) =>
    opacityValue === undefined ? `rgb(var(${varName}))` : `rgb(var(${varName}) / ${opacityValue})`;
}

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist,
  theme: {
    extend: {
      colors: {
        white: withOpacity('--c-overlay'),
        navy: withOpacity('--c-navy'),
        navydeep: withOpacity('--c-navydeep'),
        navydeeper: withOpacity('--c-navydeeper'),
        teal: withOpacity('--c-teal'),
        tealdark: withOpacity('--c-tealdark'),
        ink: withOpacity('--c-ink'),
        muted: withOpacity('--c-muted'),
        muted2: withOpacity('--c-muted2'),
        card: withOpacity('--c-card'),
        cardlight: withOpacity('--c-cardlight'),
        cardlighter: withOpacity('--c-cardlighter'),
        coral: withOpacity('--c-coral'),
        amber: withOpacity('--c-amber'),
        violet: withOpacity('--c-violet'),
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}