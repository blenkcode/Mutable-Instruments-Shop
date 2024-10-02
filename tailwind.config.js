/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "rgb(19,129,136)", // Example RGB color
        customRed: "rgb(220, 38, 38)", // Example RGB color
        customGreen: "rgb(34, 197, 94)", // Example RGB color
      },
      fontFamily: {
        Noehmi: ["Nohemi"],
        Geist: ["Geist"],
      },
    },
  },
  plugins: [],
};
