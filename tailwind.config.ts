import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-noto-sans-tc)', 'sans-serif'],
      },
      colors: {
        'theme-light-bg': '#F4F7FA',
        'theme-light-main': '#409EFF',
        'theme-light-text': '#1F2D3D',
        'theme-dark-bg': '#1E1E2F',
        'theme-dark-card-bg': '#2C2C3E', // For glassmorphism
        'theme-dark-main': '#8AC6FF',
        'theme-dark-text': '#EDEDED',
      },
      backgroundImage: {},
      boxShadow: {
        'neumorphism-light': '5px 5px 10px #d1d9e6, -5px -5px 10px #ffffff',
        'neumorphism-light-inset':
          'inset 5px 5px 10px #d1d9e6, inset -5px -5px 10px #ffffff',
        'neumorphism-dark': '5px 5px 10px #161622, -5px -5px 10px #26263c',
        'neumorphism-dark-inset':
          'inset 5px 5px 10px #161622, inset -5px -5px 10px #26263c',
      },
    },
  },
  plugins: [],
};

export default config;
