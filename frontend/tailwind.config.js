/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#c7a96b',
          navy: '#0f172a'
        }
      }
    }
  },
  plugins: []
}
