/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    screens: {
      'sm': '640px',   // => @media (min-width: 640px) { ... }
      
      'md': '768px',   // => @media (min-width: 768px) { ... }

      'lg': '1024px',  // => @media (min-width: 1024px) { ... }

      'xl': '1280px',  // => @media (min-width: 1280px) { ... }

      '2xl': '1536px', // => @media (min-width: 1536px) { ... }
    },
    extend: {
      
      boxShadow: {
        'top-bottom': '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'custom-shape': '79% 21% 30% 70% / 59% 31% 69% 41%',
      },
      animation: {
        'slow-bounce': 'bounce 2s infinite', // Adjust the duration as needed
      },

      backgroundImage: {
        'hero-image': "url('../../assesst/hero/hero.png')", // Adjust the path to your image
      },
      screens: {
        'vsm': {'min':'200px' , 'max':'639px'},  // => @media (min-width: 992px) { ... }
      }, 
        fontFamily: {
        'Poppins': ['Poppins', 'sans-serif', 'DM Sans'],
        'dm-sans': ['DM Sans'],
      },
      fontSize: {
        'font-10': '10px',
        'font-11': '11px',
        'font-12': '12px',
        'font-14': '14px',
        'font-16': '16px',
        'font-18': '18px',
        'font-20': '20px',
        'font-22': '22px',
        'font-24': '24px',
        'font-26': '26px',
        'font-28': '28px',
        'font-30': '30px',
        'font-32': '32px',
        'font-33': '33px',
        'font-34': '34px',
        'font-36': '36px',
        'font-38': '38px',
        'font-40': '40px',
        'font-48': '48px', 
      }, 
      // colors: {
      //   'blue': '#2962FF',
      //   'orange': '#FCAD00',
      //   'white-smoke': '#EAF1F9',
      //   'white-light': '#F8FCFC'
      // }, 
    },
  },
  plugins: [],
}