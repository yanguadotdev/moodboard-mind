# 🧠 Mymind Clone

A high-level visual organization SaaS inspired by mymind.com. Built with a focus on minimalism, speed, and clean architecture.

## 🛠 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand (Vanilla Store)
- **Database & Auth:** Supabase
- **Tooling:** Biome (Linting/Formatting), Lefthook (Git Hooks)

## 🏗 Architecture

This project follows **Screaming Architecture** principles, organizing code by business domains rather than technical roles:

- `src/modules/auth`: User authentication and session management.
- `src/modules/vault`: The core engine. Handles items, grid visualization, and search.
- `src/modules/spaces`: Logic for collections and content organization.
- `src/components/ui`: Shared UI components (shadcn/ui).

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Set up Git Hooks (Lefthook):**

   ```bash
   pnpm run postinstall
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```

## 🛠 Development Workflow

We use **Lefthook** + **Biome** to ensure code quality. Before every commit, the system will automatically check and format your code.

- **Check code:** `pnpm run check`
- **Apply fixes:** `pnpm run format`

---

Built with 🖤 by Samir Yangua & Team.
