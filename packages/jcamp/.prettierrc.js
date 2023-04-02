// prettier.config.js
// some of these match the current Prettier defaults, but are left in for clarity

module.exports = {
  arrowParens: 'always',
  bracketSameLine: false,
  endOfLine: 'lf',
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'es5',
  semi: false,
  singleAttributePerLine: false,
  plugins: [require('prettier-plugin-tailwindcss')],
}
