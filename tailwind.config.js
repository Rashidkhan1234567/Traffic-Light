/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'brick-pattern': "url('/download.jpg')",
      },
      background : {
        'gradient-background': "linear-gradient(to right, gray , black ))",
      },
      shadows: {
        'custom-shadow': '0 0 10px ',
      },
    },
  },
  plugins: [],
};
