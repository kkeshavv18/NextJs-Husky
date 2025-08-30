# 🚀 Next.js Project Template with ESLint, Prettier, Husky, and Lint-Staged  

This repository provides a **Next.js project template** pre-configured with:  
- 🔍 **ESLint** – catch errors early and enforce best practices  
- 🎨 **Prettier** – maintain consistent code formatting  
- 🐶 **Husky** – manage Git hooks for automated checks  
- ⚡ **Lint-Staged** – run linters only on staged files for faster commits  

It’s designed to help you and your team maintain **clean, consistent, and production-ready code**.  

---

## ✨ Features  

- Pre-configured **Next.js + TypeScript** setup  
- Enforces **file naming conventions**  
- Disallows `console.log` and `debugger` in commits  
- Prevents using **array index as a key** in React  
- Runs ESLint & Prettier automatically before every commit  
- Ensures a **smooth developer workflow** out of the box  

---

## 📦 Getting Started  

Clone the repository and install dependencies:  

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install   # or yarn install / pnpm install
Start the development server:

bash
Copy code
npm run dev
⚙️ Available Scripts
npm run dev – Starts the Next.js development server

npm run build – Builds the app for production

npm run start – Runs the production build

npm run lint – Runs ESLint checks

npm run format – Formats code with Prettier

🛠️ Tools & Configurations
ESLint
Extends next/core-web-vitals and next/typescript

Custom rules to enforce naming conventions, disallow console/debugger, and prevent index keys

Prettier
Opinionated code formatting integrated with ESLint

Husky
Runs Git hooks before commit and push

Lint-Staged
Runs ESLint and Prettier only on staged files for faster commits

📖 Reference
This setup is explained in detail in my blog post:
👉 Setting up a Robust Next.js Workflow
