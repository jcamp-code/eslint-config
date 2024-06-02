import { antfu } from '@antfu/eslint-config'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettier from './.prettierrc.js'

const jcamp = (options, ...configs) => {
  return antfu(
    // @antfu/eslint-config options, must be the first argument
    {
      stylistic: false,
      vue: true,  
      ...options,
    },
    eslintConfigPrettier,
    {
      name: 'jcamp-rules',
      rules: {
        // this doesn't like the ordering of types at the end of the imports
        'sort-imports': ['off'],
        'import/order': ['off'],
  
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
    // Addtionals flat configs start from here
    ...configs,
  )
}

export { jcamp, prettier }
