/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      container: {
        screens: {
          xl: "580px",
        },
        padding: "20px",
        center: true,
      },
      fontFamily: {
        sans: "Manrope",
      },
      fontSize: {
        xl: "clamp(36px,4cqw,40px)",
        lg: "clamp(24px,5cqw,28px)",
        base: "14px",
        sm: "12px",
        xs: "13px",
        "2xs": "10px",
      },
      colors: {
        "strong-cyan": "#10d5c2",
        body: "#fafbff",
        gray: "#858fad",
        black: "#293356",
        orange: "#ff8c66",
        "pale-orange": "#feece7",
        "pale-gray": "#f0f0f0",
      },
      boxShadow: {
        "card-shadow": "15px 10px 20px  #0000001a",
      },
      backgroundImage: {
        "bg-body": "url(./images/bg-pattern.svg)",
      },
      backgroundPosition: {
        custom: "left bottom -200%",
      },
      listStyleImage: {
        checklist: "url(./images/icon-check.svg)",
      },
      gridTemplateColumns: {
        header: "1fr minmax(100px,204px)",
      },
      screens: {
        mobile: { max: "540px" },
      },
    },
  },
  plugins: [],
};
