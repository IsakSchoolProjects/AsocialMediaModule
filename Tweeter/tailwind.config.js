module.exports = {
  mode: 'jit',
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",

    "./resources/js/components/*.js",
    "./resources/js/components/**/*.js",

    "./resources/js/routes/*.jsx",
    "./resources/js/routes/**/*.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
