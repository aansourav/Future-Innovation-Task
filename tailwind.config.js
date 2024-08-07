/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                playfair: ["Playfair Display", "serif"],
                urbanist: ["Urbanist", "sans-serif"],
            },
            colors: {
                goldish: "#CEAF83",
                offwhite: "#CACACA",
            },
        },
        container: {
            center: true,
            padding: "8rem",
        },
    },
    plugins: [],
};
