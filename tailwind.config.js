/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '10px',
        sm: '10px',
        md: '10px',
        lg: '0',
        xl: '0',
        '2xl': '0',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
