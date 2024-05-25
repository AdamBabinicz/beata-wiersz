/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        DarkPrimary: "#0A090A",
        DarkSecondary: "#000000",
        LightPrimary: "#FFFFFF",
        LightSecondary: "#F6F6F6",
        HeroImage:
          "linear-gradient(180deg, #000000 100%, #2D3436 34%,#2D3436 82%)",
        ButtonColor: "#219FFF",
        TextPrimaryColor: "#FFFFFF",
        TextSecondaryColor: "#9A9A9A",
        TextTertiaryColor: "#ffffff50",
        Banner1Bg:
          "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)",
        Banner2Bg:
          "linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)",
        Banner3Bg:
          "linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%)",
        HeroLightBg: "black",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        cabin: ["Cabin"],
      },
    },

    screens: {
      "480px": "480px",
      sm: "640px",
      md: "768px",
      "980px": "980px",
      lg: "1024px",
      1025: "1025px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
