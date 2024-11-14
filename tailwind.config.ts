import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green:"#05a688",
        lime:"#31af36",
        grey:"#333333",
        greyWhite:"#f4f6f8"
      },
    },
  },
  plugins: [],
};
export default config;
