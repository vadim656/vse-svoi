module.exports = {
  content: [
    './components/**/*.vue',
    './pages/**/*.{js,jsx,vue}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 20px 10px rgba(0, 0, 0, 0.25)',
        'button': '0px 0px 30px 10px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [
  ],
  mode: 'jit',
}