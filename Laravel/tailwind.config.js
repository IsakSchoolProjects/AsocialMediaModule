module.exports = {
  mode: 'jit',
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",

    "./resources/js/components/*.js",
    "./resources/js/components/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
