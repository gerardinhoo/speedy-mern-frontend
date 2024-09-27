// tailwind.config.js

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['-apple-system', 'BlinkMacSystemFont'],
      'serif': ['Georgia', 'Cambria'],
      'mono': ['SFMono-Regular', 'Menlo'],
      'display': ['Oswald'],
      'body': ['Open Sans'],
    },
  },
  plugins: [],
})