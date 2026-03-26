# lex-abogados

Sitio web para firma legal con **Next.js (React + Node.js)** y **TailwindCSS**.

## Requisitos de runtime
- Node.js **>=20**
- npm **10+**
- `.node-version` y `.nvmrc` fijados en `22`

## Estructura compatible para importación
- `app/` (App Router de Next.js)
- `app/api/contact/route.js`
- `app/api/health/route.js`
- `next.config.mjs`
- `postcss.config.js`
- `tailwind.config.js`
- `package.json`

## Scripts
```bash
npm install
npm run dev
npm run build
npm run start
```

## URLs
- Web: `http://localhost:3000`
- API Health: `http://localhost:3000/api/health`
- API Contact: `http://localhost:3000/api/contact`
