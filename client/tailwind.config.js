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
      colors:{
        "dark-blue": "#4534AC",
        "bordeer-color":"#CECECE",
        "inp-gray":"#EBEBEB",
        "gra-purple": "#4B36CC",
        "gra-purple-2":"#9C93D4",
        "sec-text": "#797979"
      }
    },
  },
  plugins: [],
}

