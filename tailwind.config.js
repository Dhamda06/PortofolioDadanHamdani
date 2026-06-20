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

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist,
  theme: {
    extend: {
      colors: {
        navy: '#08112A',
        navydeep: '#0D1B38',
        navydeeper: '#112040',
        teal: '#00E5B0',
        tealdark: '#00B389',
        ink: '#F0F6FF',
        muted: '#7A96BE',
        muted2: '#3D5478',
        card: '#0E1A30',
        cardlight: '#112138',
        cardlighter: '#152540',
        coral: '#FF5C6A',
        amber: '#FFD166',
        violet: '#A78BFA',
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
