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
      },
      keyframes:{
        spinner:{
          '0%':{
            top:'8px',
            height:'64px'          
          },
          '50% ,100%':{
            top:'24px',
            height:'32px'
          }
        }
      },
      animation:{
        spinner:'spinner 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite'
      }    
      
    },
  },
  plugins: [],
}
