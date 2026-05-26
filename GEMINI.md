# FoodSmash

FoodSmash is a Nuxt application designed to help users discover and share unique food combinations. It serves as a starter project for demonstrating the capabilities of the Gemini CLI.

## Project Overview

- **Framework:** [Nuxt 4](https://nuxt.com/) (using the `app/` directory structure)
- **Language:** TypeScript
- **Styling:** Vanilla CSS (located in `app/assets/css/main.css`)
- **Icons:** [Lucide Vue Next](https://lucide.dev/guide/packages/lucide-vue-next)
- **Testing:** [Vitest](https://vitest.dev/) with [@nuxt/test-utils](https://nuxt.com/docs/getting-started/testing)

## Getting Started

### Prerequisites

- Node.js (latest LTS recommended)
- npm

### Installation

```bash
npm install
```

### Development

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

Build the application for production:

```bash
npm run build
```

Or generate a static site:

```bash
npm run generate
```

### Testing

Run the test suite using Vitest:

```bash
npm run test
```

## Development Conventions

- **Component Pattern:** Use `<script setup lang="ts">` for all Vue components.
- **Project Structure:** Follow the Nuxt 4 `app/` directory convention.
  - `app/pages/`: Application routes.
  - `app/layouts/`: Reusable page layouts.
  - `app/assets/`: Static assets like CSS and images.
- **Testing:**
  - Tests are located in the `test/` directory.
  - Use `mountSuspended` from `@nuxt/test-utils/runtime` for testing components that require a Nuxt environment.
- **Styling:** Global styles are managed in `app/assets/css/main.css`. Component-specific styling should ideally be scoped within the component or added to the main CSS file following existing patterns.

###
- Do not use semicolons for any JavaScript/TypeScript.
- Do not use Tailwind classes in component templates.
- Keep project dependencies minimal.
- Use relative imports and NOT a path alias.
