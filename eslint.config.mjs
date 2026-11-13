import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
  {
    ignores: ["dist/**", "coverage/**", "**/*.d.ts"],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.strict,
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
    },
    rules: {
      // Type-only imports use `import type`, so they are erased at build time.
      "@typescript-eslint/consistent-type-imports": "error",
      // Prefix intentionally unused names with `_`.
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  // Keep last: turns off stylistic rules that Prettier owns.
  prettier,
);
