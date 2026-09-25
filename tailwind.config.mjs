/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta editorial cálida — 100% editable
        cream: '#F6F1E9',    // fondo principal
        sand: '#EDE4D6',     // fondo secundario
        clay: '#B08B6E',     // acento cálido (terracota suave)
        olive: '#6B6B53',    // acento natural
        ink: '#1F1B16',      // texto principal
        stone: '#8A8172',    // texto secundario
        line: '#DCD3C4',     // bordes finos
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        mega: '0.4em',
      },
      maxWidth: {
        container: '1360px',
      },
      transitionTimingFunction: {
        slow: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
