/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/dist/image/sectimg.png')"
    },
    backgroundImage2:{
      'hero-pattern': "url('/dist/image/sectimage.png')"
    },
    backgroundImage3:{
      'hero-pattern': "url('/dist/image/recimg.png')"
    },
    backgroundImage4:{
      'hero-pattern': "url('/dist/image/recimage.png')"
    },
    backgroundIimage5:{
      'hero-pattern': "url('/dist/image/rectangle.png')"
    },
    backgroundIimage6:{
      'hero-pattern': "url('/dist/image/rectangle1.png')"
    },
    backgroundIimage7:{
      'hero-pattern': "url('/dist/image/rectangle2.png')"
    },
    backgroundImage8:{
      'hero-pattern': "url('/dist/image/herorec.png')"
    }
  }},
  plugins: [],
}
