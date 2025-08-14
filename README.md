# Personal Portfolio Site

This is a monorepo for a personal portfolio website built with Next.js (frontend) and NestJS (backend).

## Directory overview

- `apps/web` — Next.js frontend application
- `apps/api` — NestJS backend application
- `.github/workflows` — GitHub Actions for CI/CD

## Getting started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thsisjackii/mjq-porto.git
   cd mjq-porto
   ```
2. Install dependencies in the root and workspace apps:
   ```bash
   npm install
   npm install --prefix apps/web
   npm install --prefix apps/api
   ```

### Running the development servers

- Run the Next.js frontend:

  ```bash
  npm run dev:web
  ```

  The frontend will be available at `http://localhost:3000`.

- Run the NestJS backend:

  ```bash
  npm run dev:api
  ```

  The backend will be available at `http://localhost:4000`.

### Building for production

- Build both frontend and backend:
  ```bash
  npm run build
  ```

## Deployment

The site is automatically deployed when pushing to the `main` branch:

- Frontend: deployed to Vercel
- Backend: deployed to Render

## Adding content

### Add a new project

1. Add an entry to `apps/api/data/projects.json`.
2. Create a corresponding `.mdx` file in `apps/api/data/projects` with the same slug.

### Add a new blog post

1. Create a new `.mdx` file in `apps/api/data/blog`. The filename will be used as the slug.
