# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.7.1]

- Revert prettier to 2.8.8 - tailwind plugin needs to be updated first. [Issue](https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/176)

## [0.7.0]

Changed these prettier defaults:

```js
  printWidth: 100,
  trailingComma: 'all',
```

Trailing comma to match Prettier v3.0.0 and a longer default width is my preference

- Updated @antfu/eslint to 0.39.7
- Updated prettier to 3.0.0

## [0.6.1]

- Updated @antfu/eslint to 0.38.4

## [0.6.0]

- Fixed package dependencies
- Updated dependencies, including @antfu/eslint to 0.38.2

## [0.4.0]

- Changed to extend @antu's config rather than replace it

## [0.3.0]

- Prior release which was a fork of @antfu's config rather than extension
