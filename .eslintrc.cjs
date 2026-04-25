// Configuración de ESLint para el proyecto Vue 3
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    // Requiere nombres de componentes de múltiples palabras (buena práctica Vue)
    'vue/multi-word-component-names': 'off',
  },
}
