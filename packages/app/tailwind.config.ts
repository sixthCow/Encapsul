import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand': '#0756f8',
                'back': '#202020',
                'gray': {
                    '50': '#f1f1f1',
                    '100': '#e9e9e9',
                    '200': '#dddddd',
                    '300': '#0756f8',
                    '400': '#b0b0b0',
                    '500': '#696969',
                    '600': '#575757',
                    '700': '#4a4a4a',
                    '800': '#363636',
                    '900': '#242424',
                    '950': '#050505',
                },
                'primary': {
                    '50': '#e7f0fe',   // Lightest
                    '100': '#c2d8fd',  // Very light
                    '200': '#97bafc',  // Light
                    '300': '#6b99fa',  // Lighter
                    '400': '#4c7ef9',  // Slightly light
                    '500': '#0756f8',  // Primary
                    '600': '#064cdc',  // Slightly dark
                    '700': '#0540b8',  // Dark
                    '800': '#043495',  // Darker
                    '900': '#032b78',  // Very dark
                    '950': '#021645',  // Darkest
                },

            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
