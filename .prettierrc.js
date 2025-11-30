export default {
  arrowParens: 'always',
  bracketSameLine: false,
  endOfLine: 'lf',
  printWidth: 100,
  singleQuote: true,
  semi: false,
  singleAttributePerLine: false,
  trailingComma: 'all',
  // until this plugin is updated to support Prettier v3.7
  plugins: ['./prettier.classnames.cjs'],
  // plugins: ['prettier-plugin-classnames'],
}
