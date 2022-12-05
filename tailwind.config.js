/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'regal-orangeNew': '#ffb607',
        'regal-orange': '#458ccc'
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
  ]
}
