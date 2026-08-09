/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#09090b',       // Sleek near-black
        secondary: '#a1a1aa',     // Zinc secondary
        tertiary: '#18181b',      // Zinc-900 tertiary card bg
        'black-100': '#121214',
        'black-200': '#0f0f11',
        'white-100': '#f4f4f5',
        flashWhite: '#f4f4f6',
        platinum: '#e4e4e7',
        platinumLight: '#fafafa',
        timberWolf: '#d4d4d8',
        taupe: '#71717a',
        silver: '#d4d4d8',
        dim: '#3f3f46',
        battleGray: '#52525b',
        french: '#a1a1aa',
        night: '#09090b',
        jet: '#18181b',
        jetLight: '#27272a',
        jetGray: '#52525b',
        richBlack: '#09090b',
        eerieBlack: '#121214',
        onyx: '#27272a',
        accentCyan: '#06b6d4',    // Electric cyan for AI links/highlights
        accentIndigo: '#6366f1',  // Tech purple-blue
      },
      boxShadow: {
        card: '0px 10px 40px -10px rgba(0, 0, 0, 0.7)',
        cardLight: '0px 4px 20px 0px rgba(6, 182, 212, 0.15)', // Neon accent glow
        glow: '0px 0px 15px 2px rgba(99, 102, 241, 0.3)',
      },
      screens: {
        xs: '450px',
        sm: '640px',
        md: '768px',
        xmd: '900px',
        lg: '1025px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },
      backgroundImage: {
        about: 'linear-gradient(180deg, #09090b 0%, #121214 100%)',
        experience: 'linear-gradient(180deg, #121214 0%, #09090b 100%)',
        experienceLight: 'linear-gradient(180deg, #18181b 0%, #09090b 100%)',
        hero: 'linear-gradient(180deg, #09090b 0%, #121214 100%)',
        'hero-mobile': 'linear-gradient(180deg, #09090b 0%, #121214 100%)',
        tech: 'linear-gradient(180deg, #121214 0%, #18181b 100%)',
      },
      fontFamily: {
        arenq: ['Arenq'],
        beckman: ['Beckman'],
        mova: ['Mova'],
        overcameBold: ['Overcame Bold'],
        overcameOutline: ['Overcame Outline'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
