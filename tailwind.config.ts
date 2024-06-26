import type { Config } from "tailwindcss";

const config: Config = {
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
    },
    colors: {
      "dark-cyan": "hsl(158, 36%, 37%)",
      "dark-cyan-hover": "#1A4031",
      cream: "hsl(30, 38%, 92%)",
      "very-dark-blue": "hsl(212, 21%, 14%)",
      "dark-grayish-blue": "hsl(228, 12%, 48%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Fraunces : ["Fraunces", "serif"],
    },
  },
  plugins: [],
};
export default config;
