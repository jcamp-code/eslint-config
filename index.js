import { antfu } from '@antfu/eslint-config'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'

import prettier from './.prettierrc.js'

function jcamp(options, ...configs) {
  return antfu(
    // @antfu/eslint-config options, must be the first argument
    {
      stylistic: false,
      imports: {
        overrides: {
          'perfectionist/sort-imports': [
            'error',
            {
              newlinesBetween: 1,
            },
          ],
        },
      },
      ...options,
    },
    {
      plugins: {
        'better-tailwindcss': eslintPluginBetterTailwindcss,
      },
      rules: {
        ...eslintPluginBetterTailwindcss.configs.recommended.rules,
        // or configure rules individually
        'better-tailwindcss/enforce-consistent-line-wrapping': [
          'off',
          { printWidth: 100, preferSingleLine: true, group: 'never' },
        ],
        //'better-tailwindcss/no-unregistered-classes': ['off', { ignore: [''], detectComponentClasses: true }],
      },
      settings: {
        'better-tailwindcss': {
          // tailwindcss 4: the path to the entry file of the css based tailwind config (eg: `src/global.css`)
          entryPoint: 'app/assets/css/tailwind.css',
        },
      },
    },
    eslintPluginPrettier,
    // Addtionals flat configs start from here
    ...configs,
  )
}

export { jcamp, prettier }
