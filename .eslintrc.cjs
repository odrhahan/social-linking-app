module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    "plugin:@typescript-eslint/recommended",
    'next/core-web-vitals',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'import', 'simple-import-sort', '@tanstack/query'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/naming-convention': [
      2,
      {
        'selector': 'function',
        'format': ['PascalCase', 'camelCase']
      }
    ],
    '@typescript-eslint/no-useless-template-literals': 0,
    '@typescript-eslint/restrict-plus-operands': [2, { 'allowAny': true, 'skipCompoundAssignments': true }],
    'arrow-spacing': [2, { 'before': true, 'after': true }],
    'block-spacing': [2, 'always'],
    'eqeqeq': 2,
    'func-call-spacing': 0,
    'import/first': 2,
    'import/no-anonymous-default-export': 2,
    'import/no-deprecated': 2,
    'import/no-duplicates': 2,
    'import/no-empty-named-blocks': 2,
    'import/no-mutable-exports': 2,
    'import/no-named-default': 2,
    'import/no-unused-modules': 1,
    'key-spacing': 2,
    'keyword-spacing': 0,
    'no-lonely-if': 2,
    'no-multiple-empty-lines': [2, { 'max': 2 }],
    'no-restricted-imports': [2, { patterns: ['@/modules/*/*'] }],
    'no-trailing-spaces': 2,
    'no-unneeded-ternary': 2,
    'no-unused-vars': 2,
    'no-useless-escape': 2,
    'no-var': 2,
    'prefer-const': 2,
    'quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'simple-import-sort/exports': 2,
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          ['^react', '^@?\\w'],
          [
            '^(@\/components)(/.*|$)',
            '^\\.((?!.(css|scss)).)*$',
          ],
          ['^[^.]'],
        ],
      },
    ],
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'react-hooks/exhaustive-deps': 'error'
  },
  root: true,
  ignorePatterns: ['.eslintrc.cjs', '*.config.ts', '*.config.js', '*.cjs', '*.mjs', '**/*.css', '**/*.scss'],
  settings: {
    'import/resolver': {
      typescript: true,
    },
    'import/parsers': {
      '@typescript-eslint/parser': [ '.ts', '.tsx' ]
    }
  }
};
