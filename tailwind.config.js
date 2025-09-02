/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#FACC15',
        background: '#0D1117',
        textSecondary: '#9CA3AF',
      },
      fontSize: {
        clock: '80px',      // 80px
        date: '24px',     // 24px
        weather: '32px',    // 32px
      },
    },
  },
  plugins: [],
}