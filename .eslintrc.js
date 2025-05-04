module.exports = {
  root: true,
  extends: ['plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    semi: 0,
    'import/order': [
      'error',
      {
        groups: ['external', 'builtin', 'internal', ['parent', 'sibling'], 'type'],
        pathGroups: [
          {
            pattern: 'express|dotenv',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@*/**',
            group: 'internal',
            position: 'before',
          },
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    '@typescript-eslint/no-restricted-imports': [
      'warn',
      {},
    ],
  },
  overrides: [],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
}
