export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--bg-secondary)",
        text: "var(--text)",
        muted: "var(--text-muted)",
        border: "var(--border)",
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
};
