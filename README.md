# TypeScript conventions

Drop-in config files and coding conventions for TypeScript projects. Copy them into the root of your project.

These are based on the rules and skills used to develop our webshops. The aim is to keep code consistent across codebases, whether built in-house or by external developers.

## Files

| File                                  | Purpose                                                                                                |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `AGENTS.md` (`CLAUDE.md` links to it) | Coding conventions for developers and AI coding agents                                                 |
| `tsconfig.json`                       | Strict TypeScript settings with an `@/*` alias to `src/`                                               |
| `eslint.config.mjs`                   | ESLint rules: `typescript-eslint` recommended + strict, type-only imports, `_` prefix for unused names |
| `.prettierrc`, `.prettierignore`      | Formatting and automatic import sorting                                                                |
| `.editorconfig`, `.vscode/`           | Editor defaults and format-on-save                                                                     |
| `.claude/skills/`                     | React/Next.js performance and web UI review guidelines for agents                                      |

If your framework already generated a `tsconfig.json` or ESLint config, merge these settings into it rather than replacing it.

## Dev dependencies

```bash
npm install -D typescript@~6.0 eslint @eslint/js typescript-eslint eslint-config-prettier globals prettier @trivago/prettier-plugin-sort-imports
```

Use the equivalent `pnpm add -D` or `yarn add -D` if your project uses those. TypeScript is held at 6.0 because `typescript-eslint` does not support 7 yet.

## Checks

```bash
npx prettier --check .
npx eslint . --max-warnings 0
npx tsc --noEmit
```
