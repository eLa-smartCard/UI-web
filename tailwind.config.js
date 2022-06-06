module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    variants: {
        extend: {
            display: ["group-hover"],

        },
    },
    theme: {
        extend: {
            colors: {
                'ela': '#f3648c',
                'elaBg':'rgba(254, 244, 244, 1)',
                'google':'#ff5756',
                'facebook':'#4067a3'
            },
        },
    },
    plugins: [],
}