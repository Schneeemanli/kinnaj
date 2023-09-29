import type {Config} from 'tailwindcss'

const {nextui} = require("@nextui-org/react");

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: "class",
    plugins: [nextui(
        {
            themes: {
                "custom-dark": {
                    extend: "dark",
                    colors: {
                        background: "#000000",
                        foreground: "#ffffff",
                        primary: {
                            50: "#181818",
                            100: "#bdbdbd",
                            200: "#7318A2",
                            300: "#9823C2",
                            400: "#131313",
                            500: "#727272",
                            600: "#F182F6",
                            700: "#FCADF9",
                            800: "#FDD5F9",
                            900: "#FEECFE",
                            DEFAULT: "#DD62ED",
                            foreground: "#ffffff",
                        },
                        focus: "#F182F6",
                    },
                },
                "custom-white": {
                    extend: "light",
                    colors: {
                        background: "#ffffff",
                        foreground: "#0a0909",
                        primary: {
                            50: "#1f1f1f",
                            100: "#1f1f1f",
                            200: "#8f549f",
                            300: "#9823C2",
                            400: "#eeeeee",
                            500: "#d2d2d2",
                            600: "#F182F6",
                            700: "#FCADF9",
                            800: "#FDD5F9",
                            900: "#FEECFE",
                            DEFAULT: "#DD62ED",
                            foreground: "#ffffff",
                        },
                        focus: "#F182F6",
                    },
                },
            },
        }
    )],
}

export default config
