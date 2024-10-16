/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./view/*.html',
    './assets/**/*.{js,css}'

  ],
  theme: {
    extend: {
      backgroundImage: {
        'user-view': "url('../assets/img/userView.jpg')",
      },
    },
  },
  plugins: [],
}

