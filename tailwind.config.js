/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        piedra: ['Piedra', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'neon-cyan': '#22d3ee',
        'neon-purple': '#a855f7',
        'neon-green': '#34d399',
        'neon-teal': '#06b6d4',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(34, 211, 238, 0.5)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.5)',
        'neon-strong': '0 0 30px rgba(34, 211, 238, 0.8), 0 0 60px rgba(168, 85, 247, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
