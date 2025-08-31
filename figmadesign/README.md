■ Installation & Execution
1. **Clone the repository**
 git clone https://github.com/username/project-name.git
 cd project-name
2. **Install dependencies**
 yarn install
 or
 npm install
3. **Run development server**
 yarn dev
 App will run at http://localhost:5173
4. **Build for production**
 yarn build
5. **Preview production build**
 yarn preview
■ Project Structure
project-name/
■■■ public/ # Static assets
■■■ src/
■ ■■■ assets/ # Images, icons, static media
■ ■■■ components/ # Reusable UI components (Navbar, Footer, Cards)
■ ■■■ layout/ # Layout wrapper (Navbar + Footer around pages)
■ ■■■ pages/ # Page-level components (Home, Login, Collection, ProductDetail)
■ ■■■ router/ # Routing configuration
■ ■■■ App.tsx # Main application entry with Routes
■ ■■■ main.tsx # React DOM rendering + BrowserRouter
■ ■■■ index.css # Global TailwindCSS imports
■■■ package.json
■■■ tsconfig.json
■■■ vite.config.ts
■ Assumptions & Decisions
- **Routing:** Implemented with react-router-dom v6 using a central router.tsx file.
- **Layout:** A Layout component wraps all pages so that Navbar and Footer remain persistent
across routes.
- **Styling:** TailwindCSS chosen for rapid prototyping and consistent utility-first styling.
- **Assets:** Images are placed in /src/assets/ and imported directly for optimization with Vite.
- **Product Data:** Currently hardcoded (static JSON / local mock) for demonstration. In a
real-world app, this would be fetched from an API.
- **SPA Deployment:** Assumed the app will be deployed to Netlify/Vercel, so SPA fallback is
configured (_redirects for Netlify, auto-handled in Vercel).
■ Optional Libraries Justification
- **React Router DOM:** Essential for SPA routing and navigation between pages.
- **TailwindCSS:** Chosen over traditional CSS/SCSS for faster styling and utility-first approach.
- **Lucide-React (if used):** Provides modern, lightweight icons.
- **shadcn/ui (if used):** For prebuilt, accessible, and customizable UI components to speed up
development.
- **Framer Motion (if used):** For smooth animations and micro-interactions, enhancing user
experience.




## TO SETUP TAILWIND with yarn 
# yarn remove tailwindcss
# yarn add -D tailwindcss@3 postcss autoprefixer
# npx tailwindcss init -p


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
