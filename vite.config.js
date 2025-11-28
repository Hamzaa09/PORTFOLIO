import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      colors: {
        yellow1: "#E0F11F",
        black1: "#121212",
        white1: "rgba(18,18,18,.5)",
        white2: "rgba(18,18,18,.3)",
        white3: "rgba(18,18,18,.2)",
        white4: "rgba(18,18,18,.1)",
        white5: "rgb(240,240,240)",
        white6: "rgba(240,240,240,.5)",
        white7: "rgba(240,240,240,.3)",
        white8: "rgba(240,240,240,.2)",
        white9: "rgba(240,240,240,.1)",
      },
    },
  },
});
