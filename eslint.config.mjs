import { FlatCompat } from '@eslint/eslintrc';
import checkFile from 'eslint-plugin-check-file';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals', // Next.js default rules for performance and best practices
    'next/typescript', // TypeScript support
    'prettier', // Disable ESLint formatting rules that conflict with Prettier
  ),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'check-file': checkFile,
    },
    rules: {
      'no-console': 'error', // Block console logs in production
      'react/no-array-index-key': 'error', // Prevent using index as a key
      'no-debugger': 'error', // Disallow debugger statements
      'check-file/filename-naming-convention': [
        'error',
        { '**/*.{js,jsx,ts,tsx}': 'KEBAB_CASE' }, // Enforce kebab-case filenames
        { ignoreMiddleExtensions: true }, // Allow names like `component.test.tsx`
      ],
    },
  },
];

export default eslintConfig;
