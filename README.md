# lex-abogados

Sitio web para firma legal con **React + TailwindCSS** y API en **Node.js + Express**.

## Requisitos de runtime
- Node.js **22.x**
- npm **10+**
- `.node-version` y `.nvmrc` fijados en `22` para despliegue estable
- `volta` en `package.json` y `.npmrc` (`engine-strict=false`) para evitar despliegues con Node incorrecto

## ¿Qué se corrigió?
Se eliminó la estructura monorepo por workspaces para mejorar compatibilidad con importadores de repositorios (deploy tools que esperan un framework en la raíz del proyecto).

Ahora el framework frontend está en la raíz:
- `index.html`
- `src/`
- `vite.config.js`
- `tailwind.config.js`

Y el backend queda en:
- `backend/server.js`

## Scripts
```bash
npm install
npm run dev      # Frontend (Vite)
npm run dev:api  # Backend (Express)
npm run build
npm run preview
npm run start    # Backend en modo normal
```

## URLs
- Frontend: `http://localhost:5173`
- API: `http://localhost:4000`
