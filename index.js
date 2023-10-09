import { antfu } from '@antfu/eslint-config'
import eslintConfigPrettier from 'eslint-config-prettier'

const config = antfu({
  stylistic: false,
  vue: true,
})
config.push(eslintConfigPrettier)

config.push({
  rules: {
    curly: ['error', 'multi', 'consistent'],
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
