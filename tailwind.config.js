// filepath: /Users/israelogwu/Library/Mobile Documents/com~apple~CloudDocs/Documents/VSCode Projects/Todo/todo-planner/tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {      keyframes: {
      'slide-in': {
        '0%': { 
          transform: 'translateX(-100%)',
          opacity: '0'
        },
        '100%': {
          transform: 'translateX(0)',
          opacity: '1'
        },
      }
    },
    animation: {
      'slide-in': 'slide-in 1s ease-out forwards'
    }
  }
},

  plugins: [],
}