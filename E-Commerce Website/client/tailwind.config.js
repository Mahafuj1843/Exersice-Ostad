/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif'],
      oswald: "Oswald, sans-serif",
      urbanist: "Urbanist, sans-serif",
    },
  },
  plugins: [],
}

