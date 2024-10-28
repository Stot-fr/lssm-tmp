// @ts-check
/* eslint-env node */
import path from 'node:path';

import eslint from '@eslint/js';
import pluginImport from 'eslint-plugin-import';
import pluginJest from 'eslint-plugin-jest';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginSecurity from 'eslint-plugin-security';
import pluginImportSort from 'eslint-plugin-simple-import-sort';
import pluginSonar from 'eslint-plugin-sonarjs';
import pluginTailwind from 'eslint-plugin-tailwindcss';
import pluginUnusedImport from 'eslint-plugin-unused-imports';
import pluginWorkspaces from 'eslint-plugin-workspaces';
import tsEslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sonarRules = {
  'sonarjs/no-all-duplicated-branches': 'error',
  'sonarjs/no-identical-expressions': 'error',
  'sonarjs/no-collapsible-if': 'error',
  'sonarjs/no-duplicated-branches': 'error',
  'sonarjs/no-identical-functions': 'error',
  'sonarjs/prefer-single-boolean-return': 'error',
  'sonarjs/cognitive-complexity': ['error', 10],
  'sonarjs/no-duplicate-string': 'warn',
  'sonarjs/no-nested-template-literals': 'error',
  'sonarjs/no-small-switch': 'off',
  'sonarjs/no-redundant-jump': 'off',
};

export default tsEslint.config(
  eslint.configs.recommended,
  {
    ignores: ['**/node_modules', '**/.next', '**/dist'],
    plugins: {
      import: pluginImport,
      jest: pluginJest,
      'jsx-a11y': pluginJsxA11y,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      security: pluginSecurity,
      'simple-import-sort': pluginImportSort,
      sonarjs: pluginSonar,
      tailwindcss: pluginTailwind,
      'unused-imports': pluginUnusedImport,
      workspaces: pluginWorkspaces,
    },
    settings: {
      'import/internal-regex': '^@tocco-product/',
    },
    rules: {
      eqeqeq: 'error',
      '@next/next/no-html-link-for-pages': [
        'off',
        path.join(__dirname, 'apps', 'monolith'),
      ],
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'no-plusplus': 'off',
      'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
      'react/require-default-props': 'off', // Allow non-defined react props as undefined
      'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator and also, react-hook-form
      'react-hooks/exhaustive-deps': ['warn'], // Incorrectly report needed dependency with Next.js router
      '@next/next/no-img-element': 'off', // We currently not using next/image because it isn't supported with SSG mode
      'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
      'import/no-default-export': 'off', // ideally 'warn': Named export is easier to refactor automatically
      'simple-import-sort/imports': 'error', // Import configuration for `eslint-plugin-simple-import-sort`
      'simple-import-sort/exports': 'error', // Export configuration for `eslint-plugin-simple-import-sort`
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: true,
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      // New rules set
      complexity: 'off',
      'no-empty-pattern': 'error',
      'no-unsafe-optional-chaining': 'warn',
      'security/detect-object-injection': 'off',
      ...sonarRules,
    },
  },
  ...tsEslint.configs.recommendedTypeChecked,
  {
    ignores: ['**/node_modules', '**/.next', '**/dist', '**/*.stories.tsx'],
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
    },
    rules: {
      '@typescript-eslint/comma-dangle': 'off', // Avoid conflict rule between Eslint and Prettier
      '@typescript-eslint/consistent-type-imports': 'error', // Ensure `import type` is used when it's necessary
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
      '@typescript-eslint/no-namespace': 'warn',
      '@typescript-eslint/unbound-method': ['warn', { ignoreStatic: true }],
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-misused-promises': 'warn',
    },
  },
  {
    // Performance optimization
    rules: {
      '@typescript-eslint/indent': 'off',
      indent: 'off',
    },
  },
  {
    // Bug fix with storybook / nx / eslint
    files: ['**/*.stories.tsx'],
    ...tsEslint.configs.disableTypeChecked,
  },
  pluginPrettier,
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
          trailingComma: 'all',
          singleQuote: true,
          printWidth: 80,
          tabWidth: 2,
        },
      ],
    },
  },
);
