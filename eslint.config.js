import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import google from 'eslint-config-google';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended', google, eslintPluginPrettierRecommended],
    languageOptions: { globals: globals.node },
    rules: {
    },
  },
]);
