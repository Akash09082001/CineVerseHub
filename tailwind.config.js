/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "home-banner": "url(assets/movie-banner.webp)"
            },
        },
    },
    plugins: [],
}