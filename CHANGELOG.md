# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.0](https://github.com/jcamp-code/eslint-config/compare/v0.8.2...v1.0.0) (2023-10-09)


### ⚠ BREAKING CHANGES

* update to eslint flat config

### ✨ Features

* Add @IanVS/prettier-plugin-sort-imports ([cd16e8f](https://github.com/jcamp-code/eslint-config/commit/cd16e8f4857d19ee23a511142935993738c72845))
* Update to eslint flat config ([cd16e8f](https://github.com/jcamp-code/eslint-config/commit/cd16e8f4857d19ee23a511142935993738c72845))
* Updated to latest versions ([87358bb](https://github.com/jcamp-code/eslint-config/commit/87358bb7c307ce8f674ab38582b4ea9f7a378e39))


### 🏡 Miscellaneous Chores

* Release 1.0.0 ([958df7b](https://github.com/jcamp-code/eslint-config/commit/958df7b90a8717c1835cce49ed80b24acd5a850e))

## [0.8.2](https://github.com/jcamp-code/eslint-config/compare/v0.8.1...v0.8.2) (2023-07-17)


### 📝 Documentation

* Fix repo link ([32a8c96](https://github.com/jcamp-code/eslint-config/commit/32a8c96154e00e31056604afd52a810cd2fe7685))

## [0.8.1](https://github.com/jcamp-code/eslint-config/compare/v0.8.0...v0.8.1) (2023-07-17)


### 🐛 Bug Fixes

* Verify new build process works ([043dfd4](https://github.com/jcamp-code/eslint-config/commit/043dfd4d6f012af09784b02473268ba149253e3b))

## [0.8.0](https://github.com/jcamp-code/eslint-config/compare/v0.7.2...v0.8.0) (2023-07-17)


### ⚠ BREAKING CHANGES

* move to prettier v3 ([#17](https://github.com/jcamp-code/eslint-config/issues/17))

### ✨ Features

* Move to prettier v3 ([#17](https://github.com/jcamp-code/eslint-config/issues/17)) ([a27980b](https://github.com/jcamp-code/eslint-config/commit/a27980b847131f393108ca8d710415a2ea4756eb))

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
