🚀 Next.js + TypeScript Project Template with ESLint, Prettier, Husky, and Lint-Staged
This repository provides a pre-configured Next.js project template with TypeScript, ESLint, Prettier, Husky, and Lint-Staged to ensure a clean, consistent, and production-ready codebase. It’s designed to streamline your development workflow and enforce coding standards across your team.
✨ Features

Next.js + TypeScript: A robust setup for building scalable web applications.
ESLint: Catches errors early and enforces best practices with Next.js-specific rules (next/core-web-vitals, next/typescript).
Prettier: Ensures consistent code formatting across the team.
Husky: Automates Git hooks to run checks before commits and pushes.
Lint-Staged: Runs linters and formatters only on staged files for faster commits.
Custom Rules:
Enforces kebab-case file naming conventions.
Disallows console.log and debugger statements in production code.
Prevents using array indices as keys in React components.



📦 Getting Started
Prerequisites

Node.js (>= 18.x)
npm, yarn, or pnpm
Git

Installation

Clone the repository:
git clone https://github.com/kkeshavv18/NextJs-Husky.git
cd NextJs-Husky


Install dependencies:
npm install
# or
yarn install
# or
pnpm install


Start the development server:
npm run dev



🛠️ Tools & Configurations
ESLint

Extends next/core-web-vitals and next/typescript for Next.js-specific best practices.
Custom rules:
Enforces kebab-case file naming (eslint-plugin-check-file).
Disallows console.log and debugger statements.
Prevents using array indices as keys in React components.



Prettier

Configured with consistent formatting rules (single quotes, trailing commas, 80-character line width, etc.).
Integrated with ESLint to avoid conflicts (eslint-config-prettier).

Husky

Pre-commit hook: Runs lint-staged to format and lint staged files.
Pre-push hook: Ensures the project builds successfully before pushing to the remote repository.

Lint-Staged

Runs Prettier and ESLint only on staged files for efficient commits.
Optionally runs tests (if configured) before commits.

📖 Learn More
This setup is explained in detail in the following blog post:👉 https://medium.com/@keshavkattel1998/setting-up-a-robust-next-js-e79b89e7d44e
🛠️ Customization
You can customize the ESLint rules, Prettier settings, or Husky hooks to match your project’s requirements. Refer to the blog post for detailed instructions on modifying configurations.

If you find this template useful, please ⭐ the repository and share it with your team! For any questions or suggestions, feel free to open an issue or reach out via the blog post comments.
