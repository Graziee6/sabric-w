/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      medium: "1.15rem",
      lg: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2rem",
      "5xl": "3.052rem",
    },
  },
  screens: {
    tablet: "640px",
    // => @media (min-width: 640px) { ... }

    laptop: "992px",
    // => @media (min-width: 1024px) { ... }

    desktop: "1280px",
    // => @media (min-width: 1280px) { ... }
  },
  plugins: [],
};
