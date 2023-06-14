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
      "bebas" : "Bebas Neue, sans-serif",
      'lexend': "Lexend, sans-serif; sans-serif"
    },
    backgroundImage:{
      'bgHero': "url('/public/Images/bgHero.jpg')",
      'bgRegister': "url('/public/Images/bmwInterior.jpg')",
      'roadBg': "url('/public/Images/roadTexture.jpg')",
      'chestionareBg': "url('/public/Images/chestionareBg.jpg')",
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
    showMobileBlackMenu:{
      '0%':{
        width: "0"
      },
      '100%':{
        width: "100%"
      }
    },
    showMobileBlackMenuReverse:{
      '0%':{
        width: "100%"
      },
      '100%':{
        width: "0"
      }
    },
    showMobileMenu:{
      '0%':{
        width: "0"
      },
      '100%':{
        width: "18rem"
      }
    },
    showMobileMenuReverse:{
      '0%':{
        width: "18rem"
      },
      '100%':{
        width: "0"
      }
    },    
    textSlide:{
      '0%':{
        left:'-100%'
      },
      '99.9%':{
        left:'100%'
      },
      '100%':{
        left:'-100%'
      }
    },
    textSlideMobile:{
      '0%':{
        left:'-200%'
      },
      '99.9%':{
        left:'100%'
      },
      '100%':{
        left:'-200%'
      }
    },
    slideLeft:{
      '7.5%':{
        left:"0"
      },
      '15%':{
        left:"0"
      },
      '22.5%':{
        left: "-25%"
      },
      '30%':{
        left: "-25%"
      },
      '37.5%':{
        left: "-50%"
      },
      '45%':{
        left: "-50%"
      },
      '52.5%':{
        left: "-75%"
      },
      '60%':{
        left: "-75%"
      },
      '67.5%':{
        left: "-50%"
      },
      '75%':{
        left: "-50%"
      },
      '82.5%':{
        left: "-25%"
      },
      '90%':{
        left: "-25%"
      },
      '97.5%':{
        left:"0"
      },
    },
    slideLeftMobile:{
      '7.5%':{
        left:"0"
      },
      '15%':{
        left:"0"
      },
      '22.5%':{
        left: "-50%"
      },
      '30%':{
        left: "-50%"
      },
      '37.5%':{
        left: "-105%"
      },
      '45%':{
        left: "-105%"
      },
      '52.5%':{
        left: "-180%"
      },
      '60%':{
        left: "-180%"
      },
      '67.5%':{
        left: "-105%"
      },
      '75%':{
        left: "-105%"
      },
      '82.5%':{
        left: "-50%"
      },
      '90%':{
        left: "-50%"
      },
      '97.5%':{
        left:"0"
      },
    },
  }
  },
  plugins: [],
}

