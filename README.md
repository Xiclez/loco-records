# LOCO Records — web

Sitio de LOCO Records (antes Loading Collective). Next.js 16 + Tailwind 4 + Framer Motion. Totalmente responsive: menú móvil, filtros con scroll horizontal, roster en lista (móvil) / grid (desktop), noticias en carrusel con snap (móvil) / grid (desktop).

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000. El splash solo aparece una vez por sesión; para volver a verlo, abre una pestaña nueva o borra `sessionStorage`.

## Subir a Vercel

1. Sube la carpeta a un repo de GitHub.
2. En vercel.com → Add New → Project → importa el repo. Next.js se detecta solo; no hay variables de entorno.
3. Deploy. Para el dominio: Settings → Domains.

O desde terminal: `npx vercel` y luego `npx vercel --prod`.

## Dónde se edita

- **Contenido** (releases, artistas, eventos, noticias, redes, stats): `app/data/content.ts`. Todo lo que está entre `[CORCHETES]` es placeholder.
- **Portadas y fotos**: llena `coverUrl` / `photoUrl` / `imageUrl` con la URL (Cloudinary o `/public`). Vacío = patrón generativo.
- **Color de acento**: `--color-accent` en `app/globals.css` (opciones comentadas ahí).
- **Splash**: logs y tiempos en `app/components/SplashScreen.tsx`.

## Pendientes

- Formularios de demos y newsletter simulan el envío: conectar EmailJS / Formspree / Mailchimp (buscar `TODO`).
- Selector ES/EN es visual; falta la traducción.
- Imagen Open Graph en `app/layout.tsx`.
