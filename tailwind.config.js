/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020617', // Main Background (Deepest Navy)
          900: '#0f172a', // Card Background
          800: '#1e293b', // Borders
          700: '#334155', // Hover States
        },
        brand: {
          blue: '#2563eb', // Royal Blue (Primary Action)
          light: '#60a5fa', // Lighter Blue (Accents)
        },
        text: {
          main: '#f8fafc', // White/Off-White
          muted: '#94a3b8', // Gray Text
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      }
    },
  },
  plugins: [],
}