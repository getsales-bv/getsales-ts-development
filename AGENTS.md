# Agent Instructions

TypeScript conventions for this project. Tooling enforces most of them; run the checks under Verification before handing work off.

## Tooling

- Prettier owns formatting. ESLint owns correctness. Do not add stylistic ESLint rules that fight Prettier.
- `tsc --noEmit` is the type check. The bundler or framework emits output.
- Use one package manager and commit its lockfile.

## Formatting (Prettier)

- 2-space indent, no tabs.
- Double quotes.
- Trailing commas everywhere.
- Imports are sorted automatically: third-party, then `@/` aliases, then relative, each group separated by a blank line, named specifiers sorted.

## TypeScript

- `strict` is on. Do not weaken compiler options to make code compile.
- No `any`. Use `unknown` and narrow, or write the real type.
- No non-null assertions (`!`). Handle the `undefined` case.
- Use `import type` / `export type` for type-only imports. `verbatimModuleSyntax` and the `consistent-type-imports` rule enforce this.
- Prefix intentionally unused variables, arguments and caught errors with `_`.
- Use the `@/` alias for imports across folders. Use relative imports within the same folder.
- `switch` cases must not fall through.
- Do not hand-edit generated files. Regenerate them.

## Code

- Keep modules small and single-purpose. File names use kebab-case (`format-money.ts`).
- Prefer early returns over nested conditionals.
- Validate external input (API responses, env vars, URL params) at the boundary before trusting its type.
- Do not commit secrets or `.env` files. Document new variables in `.env.example` with placeholder values.

## Tests

- Each test protects a meaningful behaviour or failure mode.
- Exercise the public caller, not implementation details. Do not assert on source text, counts or wiring.
- Remove tests that only repeat the implementation.

## React and Next.js (when applicable)

- Load `.claude/skills/vercel-react-best-practices/SKILL.md` when writing or reviewing React or Next.js code.
- Load `.claude/skills/web-design-guidelines/SKILL.md` when reviewing UI, accessibility or UX.
- Add `eslint-config-next` (or `eslint-plugin-react` + `eslint-plugin-react-hooks` + `eslint-plugin-jsx-a11y`) to `eslint.config.mjs`, and set `"jsx": "react-jsx"` in `tsconfig.json`.
- With Tailwind, add `prettier-plugin-tailwindcss` to `.prettierrc` (list it after the import sorter). Use `cn`/`clsx`/`cva` for conditional classes.

## Verification

| Check                | Command                         |
| -------------------- | ------------------------------- |
| Formatting           | `npx prettier --check .`        |
| Lint (zero warnings) | `npx eslint . --max-warnings 0` |
| Types                | `npx tsc --noEmit`              |

Report failed or skipped checks. A passing build is not proof that behaviour works.
