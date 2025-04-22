// eslint.config.js
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    {
        ignores: [
            'node_modules/**',
            '.github/**',
            '.idea/**',
            'public/**',
            'vite.config.ts',
            'eslint.config.js',
            'tsconfig.json',
            'tsconfig.app.json',
            'tsconfig.node.json',
            '.nvmrc',
            '.gitignore',
            'README.md',
            'pnpm-lock.yaml',
            'vite-env.d.ts'
        ]
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        plugins: {
            'react': reactPlugin,
            'react-hooks': reactHooksPlugin,
            'react-refresh': reactRefreshPlugin
        },
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.node
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true }
            ],
            
            // React specific rules
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            'react/jsx-uses-vars': 'warn',
            'react/jsx-no-undef': 'error',
            'react/prop-types': 'off',
            'react/display-name': 'off',
            'no-unused-vars': 'warn',
            'no-console': 'warn',
            'no-debugger': 'warn',
            'no-duplicate-case': 'error',
            'no-empty': 'warn',
            'no-extra-semi': 'warn',
            'no-irregular-whitespace': 'warn'
        },
        settings: {
            react: {
                version: 'detect'
            }
        }
    },
    {
        files: ['**/*.{ts,tsx}'],
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': ['warn', { 
                argsIgnorePattern: '^_', 
                varsIgnorePattern: '^_' 
            }]
        }
    }
];