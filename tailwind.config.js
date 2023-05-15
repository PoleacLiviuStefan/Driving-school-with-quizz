/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      
      fontFamily:{
      'oldStandard': 'Old Standard TT, serif',
      'roboto': 'Roboto, sans-serif',
      'robotoMono':"Roboto Mono, monospace",
      'montSerrat':"Montserrat, sans-serif",
      'libre':"Libre Baskerville, serif",
      'garamond': "EB Garamond, serif",
      'fastHand': "Fasthand, cursive",
      'cursive':"Cookie, cursive",
      'dafoe': "Mr Dafoe, cursive",
      'norican' : "Norican, cursive",
      'oswald' : "Oswald, sans-serif",
      "bebas" : "Bebas Neue, sans-serif"
    },
    backgroundImage:{
      'bgHero': "url('/public/Images/bgHero.jpg')",
      'bgRegister': "url('/public/Images/bmwInterior.jpg')",
    }
  },
  keyframes:{
    topLine:{
      '0%':{
        top:"0.3rem",
        rotate:"0deg"
      },
      '100%':{
        top:"0.6rem",
        rotate:"45deg"
      }
    },
    bottomLine:{
      '0%':{
        top:"0.9rem",
        rotate:"0deg"
      },
      '100%':{
        top:"0.35rem",
        rotate:"-45deg"
      }
    },
    topLineReverse:{
      '0%':{
    
        top:"0.6rem",
        rotate:"45deg"
      },
      '100%':{
        top:"0.3rem",
        rotate:"0deg"
      }
    },
    bottomLineReverse:{
      '0%':{
      
        top:"0.35rem",
        rotate:"-45deg"
      },
      '100%':{
        top:"0.9rem",
        rotate:"0deg"
      }
    },
    appear:{
      '0%':{
        opacity:"0"
      },
      '100%':{
        opacity:"100%"
      }
    },
    disappear:{
      '0%':{
        opacity:"100%"
      },
      '100%':{
        opacity:"0"
      }
    },
    rotateArrow:{
      '0%':{
        rotate:"0"
      },
      '100%':{
        rotate:"90deg"
      }
    },
    reverseRotateArrow:{
      '0%':{
        rotate:"90deg"
      },
      '100%':{
        rotate:"0"
      }
    },
  }
  },
  plugins: [],
}

