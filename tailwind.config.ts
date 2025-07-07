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
        customColor: "#415A77",
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
        customColor: "#415A77",
      },
      height: {
        custom: "650px",
        contact: "500px",
        modal: "710px",
        exp: "248px",
      },
      width: {
        custom: "700px",
      },
      borderRadius: {
        custom: "200px 200px 200px 200px / 25px 25px 25px 25px",
      },
    },
    screens: {
      phone: { max: "1024px" },
    },
  },
  plugins: [],
};
export default config;
