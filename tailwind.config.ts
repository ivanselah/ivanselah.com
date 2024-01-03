import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-brand': '#363636',
      },
      keyframes: {
        themeLightIconRotate: {
          '0%': { transform: 'rotate(-45deg)' },
          '25%': { transform: 'rotate(-35deg)' },
          '50%': { transform: 'rotate(-25deg)' },
          '75%': { transform: 'rotate(-15deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        themeDarkIconRotate: {
          '0%': { transform: 'rotate(-45deg)' },
          '25%': { transform: 'rotate(-35deg)' },
          '50%': { transform: 'rotate(-25deg)' },
          '75%': { transform: 'rotate(-15deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
