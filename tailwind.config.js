/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#050510',
        neonCyan: '#00FFFF',
        cyberPurple: '#9D00FF',
        hotPink: '#FF0080',
        retroOrange: '#FF8C00',
        neonGreen: '#39FF14',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        chakra: ['Chakra Petch', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s infinite linear alternate-reverse',
        'scanline': 'scanline 8s linear infinite',
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
        'float': 'float 4s infinite ease-in-out',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        pulseGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 15px rgba(0, 255, 255, 0.8))' },
          '50%': { filter: 'drop-shadow(0 0 30px rgba(255, 0, 128, 0.9))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
