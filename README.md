# @jcamp/eslint-config

**_NOTE: No longer updating package - decided I didn't like obfuscating settings in each project. I'm keeping this here so I can literally remind myself of my preferred settings_**

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

Note v2.0.0 is a breaking change, requires adjusting your setup.

For more eslint config details, see [@antfu/eslint-config]()

### Install

```bash
pnpm add -D eslint prettier @jcamp/eslint-config
```

### Config `eslint.config.js`

```js
import { jcamp } from '@jcamp/eslint-config'

export default jcamp(
  // antfu options
  {},
  // additional rules to add
  {},
  // ignores
  {
    ignores: ['temp.js', '**/vendor/*.js'],
  },
)
```

> `.eslintignore` is no longer supported by [eslint flatconfig](https://eslint.org/docs/latest/use/configure/configuration-files-new#globally-ignoring-files-with-ignores).

### Config `.prettierrc.js`

```js
import { jcPrettier } from '@jcamp/eslint-config'

export default {
  ...jcPrettier,
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
    "source.fixAll": "explicit",
    "source.organizeImports": "never"
  }
}
```

## License

[MIT](./LICENSE) License &copy; 2023-PRESENT [John Campion](https://github.com/JohnCampionJr/)
