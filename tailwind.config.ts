import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        customTitle: ["Play", "sans"],
        customSubtitle: ["Changa", "sans"],
        customText: ["Pridi", "sans"],
      },
      colors: {
        customColor: "#40B5AD",
        customDarkBg: "#1f2227",
        light: {
          primary: "#f8f8f8",
          secondary: "rgb(51 65 85)",
        },
        dark: {
          primary: "rgb(51 65 85)",
          secondary: "#f8f8f8",
        },
      },
      backgroundColor: {
        customBg: "rgba(0, 0, 0, 0.5)",
        customPr: "rgba(0, 0, 0, 0.8)",
        customDarkBg: "#1f2227",
        customColor: "#40B5AD",
      },
      height: {
        custom: "650px",
        contact: "500px",
        exp: "248px"
      },
      width: {
        custom: "700px",
      },
    },
    screens: {
      phone: { max: "1024px" }, // Appliquer seulement aux écrans dont la largeur est inférieure à 640px
    },
  },
  plugins: [],
};
export default config;
