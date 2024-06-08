import { antfu } from '@antfu/eslint-config'
import eslintConfigPrettier from 'eslint-config-prettier'
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural'
import tailwind from 'eslint-plugin-tailwindcss'

import prettier from './.prettierrc.js'

function jcamp(options, ...configs) {
  return antfu(
    // @antfu/eslint-config options, must be the first argument
    {
      stylistic: false,
      vue: true,
      ...options,
    },
    eslintConfigPrettier,
    ...tailwind.configs['flat/recommended'],
    {
      name: 'jcamp/perfectionist',
      rules: {
        'import/order': 'off', // handled by perfectionist
        'sort-imports': 'off', // handled by perfectionist
        'perfectionist/sort-imports': perfectionistNatural.rules['perfectionist/sort-imports'],
        'perfectionist/sort-exports': perfectionistNatural.rules['perfectionist/sort-exports'],
        'perfectionist/sort-named-imports':
          perfectionistNatural.rules['perfectionist/sort-named-imports'],
        'perfectionist/sort-named-exports':
          perfectionistNatural.rules['perfectionist/sort-named-exports'],
      },
    },
    {
      name: 'jcamp/prettier-compatibility',
      rules: {
        // Prettier can handle this setting, see https://eslint.org/docs/latest/rules/curly#consistent
        'curly': ['error', 'multi', 'consistent'],

        // required config for Prettier https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-self-closing.md
        'vue/html-self-closing': [
          'error',
          {
            html: {
              void: 'any',
            },
          },
        ],
      },
    },
    {
      name: 'jcamp/overrides',
      rules: {
        'tailwindcss/no-custom-classname': 'off',
      },
    },

    // Addtionals flat configs start from here
    ...configs,
  )
}

export { jcamp, prettier }
