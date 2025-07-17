import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      grey: {
        100: "var(--color-gray-100)",
        200: "var(--color-gray-200)",
        300: "var(--color-gray-300)",
        400: "var(--color-gray-400)",
        500: "var(--color-gray-500)",
        600: "var(--color-gray-600)",
        700: "var(--color-gray-700)",
        800: "var(--color-gray-800)",
        900: "var(--color-gray-900)",
      },
      purple: {
        100: "var(--color-purple-100)",
        200: "var(--color-purple-200)",
        300: "var(--color-purple-300)",
        400: "var(--color-purple-400)",
        500: "var(--color-purple-500)",
        600: "var(--color-purple-600)",
        700: "var(--color-purple-700)",
        800: "var(--color-purple-800)",
        900: "var(--color-purple-900)",
      },
      violet: {
        100: "var(--color-violet-100)",
        200: "var(--color-violet-200)",
        300: "var(--color-violet-300)",
        400: "var(--color-violet-400)",
        500: "var(--color-violet-500)",
        600: "var(--color-violet-600)",
        700: "var(--color-violet-700)",
        800: "var(--color-violet-800)",
        900: "var(--color-violet-900)",
      },
      green: {
        100: "var(--color-green-100)",
        200: "var(--color-green-200)",
        300: "var(--color-green-300)",
        400: "var(--color-green-400)",
        500: "var(--color-green-500)",
        600: "var(--color-green-600)",
        700: "var(--color-green-700)",
        800: "var(--color-green-800)",
        900: "var(--color-green-900)",
      },
    },
    extend: {},
  },
  plugins: [
    function ({ addVariant }: any) {
      addVariant("child", "& > *");
    },
  ],
} satisfies Config;
