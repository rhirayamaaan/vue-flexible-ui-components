require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb-with-typescript',
    '@vue/eslint-config-airbnb-with-typescript/allow-js-in-vue',
    'prettier',
  ],
  plugins: ['html'],
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['Button', 'Top', 'Article'],
      },
    ],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
}
