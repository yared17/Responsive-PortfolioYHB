# Responsive-( Portfolio Retomado)

**Portafolio personal responsive** de **Yared Henríquez (DevYHB)** para presentar información profesional, servicios, certificaciones y un bloque de **tecnologías** con íconos (via **Devicon**). Incluye animaciones al hacer scroll, contadores, texto tipeado en el héroe, galería con lightbox, botón flotante de **WhatsApp** con modal y **despliegue en GitHub Pages**.

**Sitio publicado:** https://yared17.github.io/Responsive-PortfolioYHB/

---

## Tabla de contenidos
- [Características](#características)
- [Stack y dependencias (CDN)](#stack-y-dependencias-cdn)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Secciones principales](#secciones-principales)
- [Cómo ejecutar en local](#cómo-ejecutar-en-local)
- [Despliegue en GitHub Pages](#despliegue-en-github-pages)
- [Rendimiento (cache busting)](#rendimiento-cache-busting)
- [Solución de problemas](#solución-de-problemas)
- [Changelog 2025](#changelog-2025)
- [Autor](#autor)

---

## Características

- ✅ **Responsive** (Bootstrap 5).
- 🌙 **Modo oscuro básico** mediante un botón `#bdark` que alterna la clase `darkmode` en `<body>` (persistencia en `localStorage`).
- 🧭 **Portafolio con filtros**: `Certificaciones` y `Tecnologías` (dos categorías claras).
- 🧩 **Tecnologías** con **Devicon** (CDN) → evita subir logos locales.
- 🖼️ **Certificaciones** con **GLightbox** (galería ampliable).
- ✨ **AOS** para animaciones al hacer scroll.
- ⌨️ **Typed.js** para el texto animado del héroe.
- 🔢 **PureCounter** para contadores del bloque “Facts”.
- 🧮 **Isotope** para el filtrado de elementos del portafolio.
- 💬 **Botón flotante de WhatsApp** con **modal** (abrir app/web, copiar número y QR).
- 🗺️ Mapa incrustado (Google Maps embed).
- 🚀 **Despliegue estático** en **GitHub Pages** (branch `main`, carpeta raíz).

> **Nota:** No se está usando internacionalización (ES/EN) en el código actual. Si se añade en el futuro, se puede documentar aquí.

---

## Stack y dependencias (CDN)

- **Bootstrap 5.3.3** (CSS/JS)
- **Bootstrap Icons** y **Boxicons** (iconografía)
- **AOS 2.3.4** (animaciones on scroll)
- **GLightbox 3.2.0** (lightbox galerías)
- **Isotope 3** (filtrado del portafolio)
- **PureCounter** (contadores)
- **Swiper 11** (incluido por plantilla; uso opcional)
- **Typed.js 2.1.0** (texto “tipeado” en el héroe)
- **Waypoints** (dependencia para algunos efectos de scroll en plantillas)
- **Devicon** (íconos de tecnologías)
- **php-email-form/validate.js** (incluido por plantilla; actualmente no hay formulario de contacto)

---

## Estructura del proyecto

```text
Responsive-PortfolioYHB/
├─ assets/
│  ├─ css/
│  │  └─ style.css
│  ├─ img/
│  │  ├─ profile-img.jpg
│  │  └─ portfolio/
│  │     ├─ portfolio-1.jpg
│  │     ├─ portfolio-2.jpg
│  │     └─ ...
│  └─ js/
│     └─ main.js
├─ index.html
└─ README.md
```

> Los vendors se cargan **por CDN**; no hay carpeta `assets/vendor/` local.

---

## Secciones principales

- **Header / Sidebar**: foto, enlaces sociales, navegación y botón de **modo oscuro** (`#bdark`).
- **Hero**: nombre + rol con **Typed.js** (`data-typed-items="..."`) y animación `data-aos="fade-in"`.
- **About**: perfil, resumen, “Qué hago” y “Diferenciales”.
- **Facts**: métricas con **PureCounter**.
- **Skills**: barras de progreso (estáticas).
- **Resume**: educación y experiencia.
- **Portfolio**:
  - **Filtros** (Isotope): `Todo`, `Certificaciones`, `Tecnologías`.
  - **Certificaciones**: tarjetas `filter-cert` con **GLightbox**.
  - **Tecnologías**: grilla `filter-tech` con íconos **Devicon** (ej.: `devicon-python-plain`).
- **Services**: tarjetas de servicios; íconos con Bootstrap Icons.
- **Contact**: email y **mapa** embebido (Google Maps).
- **Footer**.
- **Botones flotantes**: **WhatsApp** (abre modal) y **Back-to-top**.

> El **modal de WhatsApp** permite: abrir WhatsApp app/web, copiar el número y mostrar un **QR** (vía `api.qrserver.com` con la URL de `wa.me`).

---

## Cómo ejecutar en local

1. Clona el repo:
   ```bash
   git clone https://github.com/yared17/Responsive-PortfolioYHB.git
   cd Responsive-PortfolioYHB
   ```
2. Abre `index.html` directamente en tu navegador **o** levanta un server local:
   ```bash
   # Python 3
   python -m http.server 8080
   # abre: http://localhost:8080
   ```

---

## Despliegue en GitHub Pages

Configuración recomendada:
- **Settings → Pages**
  - **Build and deployment → Source:** *Deploy from a branch*
  - **Branch:** `main`
  - **Folder:** `/ (root)`

Cada commit en `main` dispara el workflow de Pages y publica el sitio en:  
`https://yared17.github.io/Responsive-PortfolioYHB/`

---

## Rendimiento (cache busting)

Para evitar que el navegador muestre versiones antiguas de tus assets, puedes **versionar** las URLs:

```html
<link rel="stylesheet" href="assets/css/style.css?v=2025">
<script src="assets/js/main.js?v=2025"></script>
```

> Asegúrate de **no** duplicar el CSS/JS principal (cargar **una sola** vez con la versión).  
> Para CDNs externos, no es necesario agregar `?v=...`.

---

## Solución de problemas

**No aparecen los íconos de Tecnologías**
- Verifica que el CDN de **Devicon** esté en `<head>`:
  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
  ```
- Confirma que las clases existen (p.ej. `devicon-flask-original`).

**Los filtros de portafolio no funcionan**
- Asegura que cada tarjeta tenga `portfolio-item` y la clase de filtro correcta (`filter-cert` o `filter-tech`).
- Que **Isotope** esté cargado antes de la inicialización en `main.js`.

**El héroe no “tipea”**
- Verifica **Typed.js** en el HTML.
- Confirma que el elemento tiene `class="typed"` y el atributo `data-typed-items` con la lista separada por comas.

**Contadores no suben**
- Revisa **PureCounter** y que los `data-purecounter-*` estén bien en cada `<span>`.

**El modal de WhatsApp no abre / no reacciona**
- Revisa que **Bootstrap JS** (bundle) esté cargado y que el `id="whatsappModal"` exista.
- Si el botón flotante no responde, asegúrate de no aplicar `transform` globales que rompan el hover/click (el CSS incluye correcciones para esto).

**La página publicada no refleja cambios**
- Verifica **Actions → pages-build-deployment** (debe estar en verde).
- Fuerza recarga: **Ctrl+F5** o sube el número de versión en `?v=2025`.

---

## Changelog 2025

- Simplificación de filtros del portafolio a **Certificaciones** y **Tecnologías**.
- **Bloque Tecnologías** con **Devicon** via CDN (sin imágenes locales).
- **Botón flotante de WhatsApp** con **modal** (abrir app/web, copiar, QR).
- Integración de **AOS**, **GLightbox**, **Isotope**, **Typed.js**, **PureCounter** (vía CDN).
- Ajustes de estilo y mejoras de UX (hover, estabilidad de botones flotantes).
- Despliegue en **GitHub Pages** desde `main` (carpeta raíz).
- Opción de **cache busting** en CSS/JS (`?v=2025`).

---

## Autor

**Yared Henríquez (DevYHB)**  
- GitHub: https://github.com/yared17  
- Email: yared2017@gmail.com  
- Sitio publicado: https://yared17.github.io/Responsive-PortfolioYHB/
