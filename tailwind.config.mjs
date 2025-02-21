/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
  './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    { pattern: /(bg|text|border|from|to|w|h|min-h|opacity|font|top|p|m):?\[.*\]/ },
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;