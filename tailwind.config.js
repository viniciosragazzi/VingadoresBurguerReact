module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    screens:{
      'smG': '425px',
      'md': '620px',
    },
    extend: {
     

    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
