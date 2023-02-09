/** @type {import('tailwindcss').Config} */



module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  
      boxShadow:{
        'xsInset':"inset 0px 0px 200px 40px black",
        'lgInset':"inset 0px 0px 400px 140px black"
      }    
    },
  },
  plugins: [],
}
