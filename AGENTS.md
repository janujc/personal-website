# Contributor Guide

## Project Overview
- This project is a monorepo containing a full-stack personal website.
- The BE python application is located in the BE folder.
- the FE React application is located in the FE folder.

## Setup & Dependencies
### BE
- **Python version**: 3.13
- Install dependencies with `pip install -r BE/requirements.txt`.

### FE
- **Node version**: 24

## Dev Environment Tips
### BE
- Run pre-commit hooks before pushing code

### FE
- Use pnpm dlx turbo run where <project_name> to jump to a package instead of scanning with ls.
- Run pnpm install --filter <project_name> to add the package to your workspace so Vite, ESLint, and TypeScript can see it.
- Use pnpm create vite@latest <project_name> -- --template react-ts to spin up a new React + Vite package with TypeScript checks ready.
- Check the name field inside each package's package.json to confirm the right name—skip the top-level one.
- Run pre-commit hooks before pushing code

## Testing Instructions
### BE
- Find the CI plan for the BE in the .github/workflows/backend.yml file.
- From the package root you can just call pytest. The commit should pass all tests before you merge.
- Fix any test or type errors until the whole suite is green.
- After moving files or changing imports, run black to make sure the Black codestyle is still being obeyed.
- Add or update tests for the code you change, even if nobody asked.

### FE
- Find the CI plan in the .github/workflows folder.
- Run pnpm turbo run test --filter <project_name> to run every check defined for that package.
- From the package root you can just call pnpm test. The commit should pass all tests before you merge.
- To focus on one step, add the Vitest pattern: pnpm vitest run -t "<test name>".
- Fix any test or type errors until the whole suite is green.
- After moving files or changing imports, run pnpm lint --filter <project_name> to be sure ESLint and TypeScript rules still pass.
- Add or update tests for the code you change, even if nobody asked.

## PR instructions
Obey [Angular Commit Message Conventions](https://github.com/angular/angular/blob/main/contributing-docs/commit-message-guidelines.md)
