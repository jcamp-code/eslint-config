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

Note v1.0.0-beta is a breaking change, requires adjusting your setup.

### Install

```bash
pnpm add -D eslint prettier @jcamp/eslint-config
```

### Config `eslint.config.js`

```js
import config from '@jcamp/eslint-config'

export default config
```

> `.eslintignore` is no longer supported by [eslint flatconfig](https://eslint.org/docs/latest/use/configure/configuration-files-new#globally-ignoring-files-with-ignores).

```js
config.push({
  ignores: ['temp.js', '**/vendor/*.js'],
})
```

### Config `.prettierrc.js`

```js
import baseConfig from '@jcamp/eslint-config/prettier'

export default {
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
    "fix": "eslint . --fix",
    "format": "prettier . --check",
    "clean": "prettier . --write"
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": true,
  // Enable the ESlint flat config support
  "eslint.experimental.useFlatConfig": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  }
}
```

## License

[MIT](./LICENSE) License &copy; 2023-PRESENT [John Campion](https://github.com/JohnCampionJr/)
