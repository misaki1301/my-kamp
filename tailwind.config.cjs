/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js,vue}',
    './src/components/**/*.{html,js,vue}'
  ],
  theme: {
    extend:{ 
    colors: {
      'royal-purple': '#989ACB',
    },
  },
  plugins: [],
}
}
