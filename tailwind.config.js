/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1F1E24",
        "background-light": "#322F43",
        "secondary-background": "#282730",
        "secondary-background-accent": "#363541",
        secondary: "#999999",
        "secondary-in-box": "#ADADAD",
        bright: "#1BF1E7",
        points: "#E7CF77",
        gems: "#94E777",
        danger: "#E77979",
        info: "#5865F2",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
