/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
export const content = [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
    extend: {
        colors: {
            background: 'var(--background)',
            foreground: 'var(--foreground)',
        },
    },
};
export const plugins = [];
=======
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      }
    },
  },
  plugins: [],
};
>>>>>>> 69ef98ff56294747b6f9f1158131c2d9def4b24d
