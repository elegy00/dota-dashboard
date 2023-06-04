import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      grey:{
        100: 'var(--color-grey-100)',
        200: 'var(--color-grey-200)',
        300: 'var(--color-grey-300)',
        400: 'var(--color-grey-400)',
        500: 'var(--color-grey-500)',
        600: 'var(--color-grey-600)',
        700: 'var(--color-grey-700)',
        800: 'var(--color-grey-800)',
        900: 'var(--color-grey-900)',
      }
    },
    extend: {},
  },
  plugins: [],
} satisfies Config

