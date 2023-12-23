/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryLight: "#845EC2",
        primary: "#623CA0",
        secondary: "#009EFA",
        secondaryLight: "#1DACFF",
        buttonColorLight: "#4FFBDF",
        buttonColor: "#70FCE5",
      },
    },
  },
  plugins: [],
};
