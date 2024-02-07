export default {
  content: ["./**/*.vue"],
  safelist: ["font-primary", "font-secondary"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Raleway", "sans-serif"],
        secondary: ["Open Sans", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        nirvana: {
          primary: "#f4f4f5",
          secondary: "#27272A",
          accent: "#ffffff",
          neutral: "#71717a",
          "base-100": "#09090B",
          info: "#58A5DD",
          success: "#58DD8D",
          warning: "#DDC858",
          error: "#DD5878",
          "--rounded-btn": "1.9rem",
          "--tab-border": "2px",
          "--tab-radius": "0.7rem",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
