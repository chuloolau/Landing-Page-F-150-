/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          'Inter',
          '"Segoe UI"',
          'sans-serif',
        ],
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Display"',
          'Inter',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          '"SF Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      colors: {
        bg: {
          DEFAULT: '#0A0A0A',
          soft: '#161616',
          card: '#1C1C1C',
        },
        ink: {
          DEFAULT: '#FFFFFF',
          dim: '#C4C4C1',
          mute: '#8F8F8C',
        },
        accent: {
          DEFAULT: '#DDE227',
          hover: '#FFFF33',
          deep: '#2E2F0A',
        },
      },
    },
  },
  plugins: [],
};
