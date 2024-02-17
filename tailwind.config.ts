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
          primary: "#E4E4E7",
          secondary: "#09090B",
          accent: "#fafafa",
          'accent-content': '#09090B',
          neutral: "#09090B",
          "base-100": "#09090B",

          info: "#0284c7",
          'info-content': '#fafafa',
          success: "#34d399",
          'success-content': '#fafafa',
          warning: "#facc15",
          'warning-content': '#fafafa',
          error: "#e11d48",
          'error-content': '#fafafa',
          "--rounded-btn": "0.75rem",
          "--tab-border": "1px",
          "--tab-radius": "0.75rem",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
