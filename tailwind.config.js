const { colors } = require('./node_modules/@avo/monorepo/doku_libs/configs/tailwind.colors');


module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./blog/**/*.{md,mdx}",
        "./docs/**/*.{md,mdx}"
    ],
    theme: {
        extend: {
            colors,
        },
    },
    plugins: [],
};
