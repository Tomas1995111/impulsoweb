# Pendientes Impulso Merval

## 🎯 Lighthouse (post-deploy 2026-06-06, segundo run)

Score actual: **Acc 100/100 ✅ · SEO 100 · BP 100** (L-01..L-05 aplicados en commit `5733d4d`)

### Alta prioridad (rápido, alto impacto)

- [x] **L-01 · `aria-label` en íconos sociales del Footer** ✅ commit `5733d4d`
  Resuelve: "Links do not have a discernible name" (Acc).

- [x] **L-02 · Envolver contenido de cada página en `<main>`** ✅ commit `5733d4d`
  Resuelve: "Document does not have a main landmark" (Acc).

- [x] **L-03 · Mejorar contraste de textos secundarios en Footer** ✅ commit `5733d4d`
  Resuelve: "Background and foreground colors do not have a sufficient contrast ratio" (Acc).

- [x] **L-04 · `width`/`height` explícitos en todas las `<img>`** ✅ commit `bc4a4b7` (13 imágenes)
  Resuelve: "Image elements do not have explicit width and height" (Diag → CLS).

- [x] **L-05 · `aria-label` distintos en CTAs WhatsApp idénticos** ✅ commit `3cd09f6` (14 CTAs)
  Resuelve: "Identical links have the same purpose" (Acc).

- [ ] **L-12 · Self-host Font Awesome** *(pendiente, este commit)*
  Causa: CDN `cdnjs.cloudflare.com` deja 3 cookies (`__cf_bm`).
  Fix: `src/index.js:3` + `import '@fortawesome/fontawesome-free/css/all.min.css';`, borrar bloque `<link>` en `public/index.html:32-43`.
  Resuelve: "Uses third-party cookies" (General).

- [ ] **L-13 · Fix image aspect ratio en course carousel y CourseCard** *(pendiente, este commit)*
  Causa: JPEGs en `src/assets/imagesCourses/*.jpeg` son 1280×1280, pero CSS los renderiza a aspect ancho (`max-height: 250px` y `height: 220px` con `object-fit`). El audit compara aspect del archivo vs renderizado.
  Fix: re-encodear los 3 JPEGs a 1280×400 (carousel) con ffmpeg `-q:v 5`, actualizar `width`/`height` en JSX.
  Resuelve: "Displays images with incorrect aspect ratio" (User Experience).

- [ ] **L-14 · Crop de logos del Navbar y Footer** *(pendiente, este commit)*
  Causa: `src/assets/LOGOSIMPULSOMERVAL-05.webp` y `-03.webp` (Navbar y Footer) son 3702×2843 (1.3:1) con **masivo espacio vacío** alrededor del toro. Eso hace que se vea "dimensiones raras" al renderizar.
  Fix: crop a 3702×2000 (aspect 1.85:1) con ffmpeg, actualizar `width`/`height` en JSX.

### Media prioridad (mejora perf, no urgente)

- [ ] **L-06 · Reducir JS sin usar: 541 KiB ahorrados** *(deps cleanup)*
  - `package.json:11` `react-icons` — confirmar uso con grep; si no, desinstalar
  - `package.json:7-8` `@splidejs/*` — `grep -r "splide" src/` debería dar 0 hits, eliminar
  - `package.json:13` `emailjs-com` — desinstalar (reemplazado por WhatsApp)
  - `package.json:17` `react-phone-number-input` — confirmar uso
  - `package.json:6` `@fortawesome/fontawesome-free` — instalado pero no usado (se carga vía CDN) — **se va a usar con L-12**
  Después correr `npm prune` y medir bundle.
  Resuelve: "Reduce unused JavaScript" (Diag).

- [ ] **L-07 · Optimizar `og-image.jpg`** *(304 KB → ~80 KB)*
  `public/og-image.jpg` se referencia en `index.html:20` y `:29` (Open Graph + Twitter). Re-encode con `cjpeg -quality 75` o similar. Impacto solo al compartir en redes, no a la web en sí.

- [ ] **L-08 · Preload del video del hero** *(LCP mejora)*
  Agregar a `public/index.html` después del `<head>`:
  ```html
  <link rel="preload" as="video" href="/static/media/bannerVideo.mp4" type="video/mp4">
  ```
  (Path real después del build, ver `build/asset-manifest.json`).
  Resuelve: "LCP request discovery" (Insights).

- [ ] **L-09 · Reemplazar imágenes externas de Reviews** *(privacidad/UX)*
  `src/components/Reviews.js:15,23,31,...` usa `randomuser.me` (5/6 cards). Opciones:
  - (a) Auto-hospedar avatares en `src/assets/reviews/` y referenciar local
  - (b) Cambiar a UI Avatars con iniciales (`https://ui-avatars.com/api/?name=Lucas+P&size=128`)
  - (c) Quitar avatares y dejar solo nombre + quote
  Resuelve parcialmente: "Improve image delivery" + dependencia externa.

### Baja prioridad (limpieza, no afecta score)

- [ ] **L-10 · Limpiar preloads duplicados al final de `App.js`**
  `src/App.js:73-75` ejecuta `new Image().src = ...` dos veces al cargar el módulo. Side-effect, feo, redundante. Mover al `<head>` con `<link rel="preload" as="image" href="/logo.png">` o eliminar.

- [ ] **L-11 · Resolver "Avoid non-composited animations"** *(anim WhatsApp)*
  En `src/components/styles/WhatsAppButton.css:1-35` hay `bounce` + `pulse` con `transform`. Lighthouse las marca porque `transform: translateY` no siempre se composita. Solución: usar `opacity` para la pulse (ya hay) y eliminar bounce o mover a `will-change: transform`.

## 📋 De la lista original (perdida en filter-branch stash, recuperada del log)

- [x] **2.1 · Verificación end-to-end del bot** *(confirmado por el usuario: web no se clasifica como IG/TT)*

- [ ] **4.2 · Imágenes externas en `MemberShip.js`**
  Verificar y reemplazar por self-hosted si las hay.

- [ ] **5.1 · Migrar `HashRouter` → `BrowserRouter`** *(bloqueado)*
  Requiere que el server redirija todo a `index.html` (no nativo en GH Pages sin workflow custom).

- [ ] **5.2 · Revisar cifras infladas** *(contenido)*
  "+150 inversores", "97% renueva", "5 minutos" — confirmar con datos reales.

- [ ] **5.3 · Reemplazar reseñas de `Reviews.js` con testimonios reales** *(contenido)*
  Hoy son ficticias (`randomuser.me`, "Lucas P.", "Estela G.").

- [ ] **5.4 · Privacy policy + Terms of Service** *(legal)*
  No existen. Requerido para compliance (Argentina: Ley 25.326).

## 📊 Scorecard después del fix batch L-01..L-05

| Métrica | Antes | Después |
|---|---|---|
| Accessibility | 89 | 100 ✅ |
| Performance (CLS) | con warnings | 0 CLS ✅ |
| Best Practices | 100 | 100 ✅ |
| SEO | 100 | 100 ✅ |
| LCP | sin medir | mejora con L-08 |
| 3rd-party cookies | 3 | 0 con L-12 |
