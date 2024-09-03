/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'merienda': ['Merienda', 'cursive'],
        'josefin': ['Josefin Sans', 'sans-serif'],
      },
      animation: {
        spinSlow: 'spin 7s linear infinite',
        up: 'up 1.5s linear infinite',
      },
      keyframes: {
      up: {
        '0%, 100%': {},
        '50%': { transform: 'translateY(-20%)' },
      },
    },
    },
  },
  plugins: [],
};
