# @jcamp/eslint-config

This is my personal ESLint Config.

It extends [@antfu](https://github.com/antfu)'s [eslint-config](https://github.com/antfu/eslint-config).

It starts with his vue config and makes these changes:

- Uses only the vue config, omitting react
- Adds my Prettier config
- Adds the official TailwindCSS Prettier plugin
- Disables the antfu/if-newline rule as it will clash with Prettier
- Follows Prettier's [recommended configuration](https://prettier.io/docs/en/integrating-with-linters.html) with ESLint:
  - It only integrates the [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to disable conflicting rules
  - It does not integrate the [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) to show the Prettier rules as ESLint warnings.

## Usage

### Install

```bash
pnpm add -D eslint prettier @jcamp/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@jcamp"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Config `.prettierrc.js`

```js
const baseConfig = require('@jcamp/eslint-config/.prettierrc.js')

module.exports = {
  ...baseConfig,
  /* make any changes here */
  singleAttributePerLine: false,
}
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## License

[MIT](./LICENSE) License &copy; 2022-PRESENT [John Campion](https://github.com/JohnCampionJr/)
