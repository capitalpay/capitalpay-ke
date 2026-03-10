/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './packages/shared-ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('./packages/shared-ui/tailwind.config.js')],
  theme: {
    extend: {
      colors: {
        capitalpay: {
          navy: "#002C62",
          orange: "#EF5E41",
          teal: "#10B798",
          blue: "#006E92",
          gold: "#FAA74A",
          purple: "#A7589C",
          gradientStart: "#892B87",
          gradientMid: "#E94258",
          gradientEnd: "#F27224",
        },
        brand: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
      },
    },
  },
}
