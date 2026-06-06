# Pendientes Impulso Merval

## 🎯 Lighthouse (post-deploy 2026-06-06)

Score actual: **Acc 89/100 · SEO 100 · BP 100** (Performance no se midió, pedir run nuevo)

### Alta prioridad (rápido, alto impacto)

- [ ] **L-01 · `aria-label` en íconos sociales del Footer** *(3 líneas)*
  Agregar `aria-label="Facebook de Impulso Merval"`, `"Instagram de Impulso Merval"`, `"WhatsApp de Impulso Merval"` a los `<a>` de `src/components/Footer.js:43-63`.
  Resuelve: "Links do not have a discernible name" (Acc).

- [ ] **L-02 · Envolver contenido de cada página en `<main>`** *(~10 líneas)*
  Wrappear el contenido (después de `<Navbar />` y antes de `<Footer />`) en `<main id="main-content" role="main">` en `src/App.js:29-66` o en cada page.
  Resuelve: "Document does not have a main landmark" (Acc).

- [ ] **L-03 · Mejorar contraste de textos secundarios en Footer** *(CSS)*
  En `src/components/styles/Footer.css`:
  - L25 `color: #8f8f8f` → `#a8a8a8` (4.0:1 → 5.3:1) o superior
  - L72 `color: #ccc` ya está OK sobre `#303030` (10.5:1)
  - L84, L94 `color: #888` → `#aaa` (mismo cambio)
  Resuelve: "Background and foreground colors do not have a sufficient contrast ratio" (Acc).

- [ ] **L-04 · `width`/`height` explícitos en todas las `<img>`** *(CLS = 0)*
  Agregar `width="1024" height="434"` (o lo que corresponda) a:
  - `src/components/Footer.js:29` (logo)
  - `src/components/Reviews.js:62` (avatars 64x64)
  - `src/pages/Home.js:138` (course carousel, mantener aspect-ratio)
  - `src/components/Navbar.js:104` (logo 50px height)
  Resuelve: "Image elements do not have explicit width and height" (Diag → CLS).

- [ ] **L-05 · `aria-label` distintos en CTAs WhatsApp idénticos** *(2 min)*
  En `src/components/WhatsAppButton.js:13` ya tiene `aria-label="Contactar por WhatsApp"`. Replicar en los demás CTAs con sufijos (`"...desde el hero"`, `"...planes mensuales"`, etc.) o mover el texto a `<span class="sr-only">` adentro del `<a>`.
  Resuelve: "Identical links have the same purpose" (Acc).

### Media prioridad (mejora perf, no urgente)

- [ ] **L-06 · Reducir JS sin usar: 572 KiB ahorrados** *(deps cleanup)*
  - `package.json:11` `react-icons` — confirmar uso con grep; si no, desinstalar
  - `package.json:7-8` `@splidejs/*` — `grep -r "splide" src/` debería dar 0 hits, eliminar
  - `package.json:13` `emailjs-com` — desinstalar (reemplazado por WhatsApp)
  - `package.json:17` `react-phone-number-input` — confirmar uso
  - `package.json:6` `@fortawesome/fontawesome-free` — instalado pero no usado (se carga vía CDN)
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

| Métrica | Hoy | Esperado |
|---|---|---|
| Accessibility | 89 | 100 |
| Performance (CLS) | con warnings | 0 CLS |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |
| LCP | sin medir | mejora con L-08 |
