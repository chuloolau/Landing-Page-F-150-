# BARATEC — Landing F-150

Landing de amortiguadores BARATEC para Ford F-150. Basada en la estructura de la landing Z-71 (Chevrolet Silverado), con la misma identidad de marca (acento amarillo `#DDE227`).

## Stack

Vite + React 18 + TypeScript + Tailwind + framer-motion + lucide-react.

```bash
npm install
npm run dev      # http://localhost:5174
npm run build
```

## Assets pendientes de reemplazo

El sitio ya compila y navega, pero varias fotos/videos de la F-150 todavía no están cargados. Se muestran como placeholders con rayas y el nombre de archivo esperado. Para completarlos, colocá los archivos en `public/` con **exactamente** estos nombres:

| Archivo esperado | Sección | Uso |
|---|---|---|
| `public/hero-f150-barro.jpeg` | Hero (portada) | Foto principal, misma composición que `hero-silverado-barro.jpeg` del sitio Z-71 |
| `public/f150-roja.mp4` | Casos reales | Video de instalación — F-150 Roja |

Ya resueltos: `f150-azul.mp4` y `f150-gris.mp4` (comprimidos a ~2 Mbps/720p con ffmpeg a partir de los archivos originales), las fotos de kit (`kit-4-amortiguadores.jpg`, `kit-x-amortiguadores-del.jpg`, `kit-x-amortiguadores-tra.jpg`), la foto de tienda (`tablet-tienda.f-150.jpeg`) y las 3 fotos de Aplicaciones — `Ford-F-150-2025-5.jpg` (FX4 → Off road), `2025_RSF_Build_F-150KingRanch_1.avif` (King Ranch → Campo) y `7418cba40b574715a05dc8a466b67ad0.jpg` (Platinum → Pick-up).

Una vez que subas los archivos con esos nombres a `public/`, avisame y hago el swap final de `<AssetPlaceholder />` por `<img>`/`<video>` en:
`src/sections/BaratecHero.tsx`, `src/sections/ApplicationsSection.tsx`, `src/sections/CasosRealesSection.tsx`.

Los assets genéricos de producto (logo, fotos de kit, video institucional) ya están copiados desde el proyecto Z-71 y no requieren reemplazo.

## Estructura

```
src/
  App.tsx                       — orden de secciones
  sections/
    BaratecHero.tsx             — hero "F-150 / FORD"
    ApplicationsSection.tsx     — 3 aplicaciones (Off road / Campo / Pick-up)
    ProductCarousel.tsx         — kit de amortiguadores
    VideoCallout.tsx            — detalle técnico monotubo
    CasosRealesSection.tsx      — 3 videos de instalación
    ContactSection.tsx          — CTA tienda + WhatsApp
  components/
    AssetPlaceholder.tsx        — placeholder visual para media pendiente
```
