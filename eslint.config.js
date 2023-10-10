import config from './index.js'

config.push({
  ignores: ['dist',
    'pnpm-lock.yaml',
    'cache',
    'temp',
    'fixtures',
    '.github',
    'node_modules',
    '.pnpm-store'
    ]
})

export default config
