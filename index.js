import { antfu } from '@antfu/eslint-config'
import eslintConfigPrettier from 'eslint-config-prettier'

const config = antfu({
  stylistic: false,
  vue: true,
})
config.push(eslintConfigPrettier)

config.push({
  rules: {
    // this doesn't like the ordering of types at the end of the imports
    'sort-imports': ['off'],

    // Prettier can handle this setting, see https://eslint.org/docs/latest/rules/curly#consistent
    curly: ['error', 'multi', 'consistent'],

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
})

export default config
