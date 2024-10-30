module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@next/next/recommended',
      'plugin:prettier/recommended', // Integrates Prettier with ESLint
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
      'react/react-in-jsx-scope': 'off', // Next.js doesn't require React to be in scope
      'prettier/prettier': 'error', // Show Prettier errors as ESLint errors
    },
  };
  