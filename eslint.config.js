import { jcamp } from './index.js'

const config = jcamp(
  {},
  {
    ignores: ['fixtures', 'prettier.classnames.cjs'],
  },
)

export default config
