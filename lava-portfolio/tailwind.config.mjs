/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', "ui-sans-serif", "system-ui"],
        serif: ['"Fraunces"', "ui-serif", "Georgia"],
      },
      colors: {
        accent: {
          500: "#ec4899", // tasteful pink
        },
      },
    },
  },
  plugins: [],
};
