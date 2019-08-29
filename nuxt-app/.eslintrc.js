module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    'prettier',
  ],
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'prettier/prettier': 'error'
  },
};
