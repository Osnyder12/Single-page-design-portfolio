const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'galactic-blue': '#755cde',
        'summer-yellow': '#f6a560',
        'salmon': '#f39e9e',
        'light-red': '#eb7565',
        'cyan': '#61c4b7',
        'deep-purple': '#552049',
        'brand-black': '#030303',
        'medium-brown': '#7a746e',
        'light-cream': '#fff7f0'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
