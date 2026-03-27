# DevYHB — Portfolio Personal

> Portafolio personal de **Yared Henriquez**, Ingeniero de Sistemas Full-Stack especializado en Python, Salesforce y automatización. Construido con HTML, CSS y Vanilla JS — sin frameworks, sin dependencias de build.

---

## Vista previa

```
┌─────────────────────────────────────────────┐
│  Dev YHB  ·  Sobre mí  ·  Trayectoria  · ☀  │  ← nav con dark mode
├─────────────────────────────────────────────┤
│                                             │
│  Yared                                      │
│  Henriquez          ← typewriter animado    │
│  Ing. Sistemas|                             │
│                                             │
│  [ Portafolio ]  [ Contacto ]               │
│                                             │
│  5+ años Python  ·  4 años TI  ·  Ranger   │
└─────────────────────────────────────────────┘
```

---

## Características

- **Modo oscuro / claro** — toggle en el nav, persiste con `localStorage`, respeta `prefers-color-scheme`
- **Typewriter** — rota entre roles: `Ing. Sistemas`, `Full-Stack Dev`, `Salesforce Dev`, `Automatización`
- **Menú hamburguesa** — overlay fullscreen en móvil con cierre automático al navegar
- **Nav activo** — indicador de sección actual mientras haces scroll
- **Scroll-to-top** — botón flotante que aparece al bajar 400px
- **Tooltips de nivel** en skills — hover muestra nivel de dominio (`Experto`, `Avanzado`, etc.)
- **GitHub card en vivo** — datos reales via API pública de GitHub
- **OSINT Terminal card** — tarjeta de logro del proyecto open source
- **Lazy loading** en todas las imágenes
- **Google Analytics 4** — eventos rastreados: vistas de sección, cambio de tema, filtros, clicks externos
- **SEO + Open Graph** — meta description y og:tags para compartir en redes

---

## Estructura

```
portfolio/
├── index.html        ← todo el proyecto (HTML + CSS + JS en un solo archivo)
└── README.md
```

No hay carpetas de assets propias — las imágenes se sirven desde el repo anterior en GitHub Pages.

---

## Stack

| Capa | Tecnología |
|---|---|
| Markup | HTML5 semántico |
| Estilos | CSS3 con custom properties (`:root`) |
| Lógica | Vanilla JS (ES6+) |
| Fuentes | Bricolage Grotesque + DM Mono (Google Fonts) |
| Iconos | Bootstrap Icons + Devicons |
| Analytics | Google Analytics 4 |

---

## Configuración rápida

### 1. Clonar y abrir

```bash
git clone https://github.com/DevCop95/portfolio-yhb.git
cd portfolio-yhb
# abrir index.html en el navegador — no requiere servidor
```

### 2. Conectar Google Analytics

Busca en `index.html` y reemplaza con tu ID real de GA4:

```html
<!-- línea ~17 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  gtag('config', 'G-XXXXXXXXXX'); /* ← reemplaza aquí */
</script>
```

### 3. Personalizar contenido

Todas las variables de color están centralizadas en `:root`:

```css
:root {
  --accent: #0e7a5f;   /* color principal — cambiar aquí afecta todo */
  --ink:    #16181c;
  --bg:     #f5f4f0;
  /* ... */
}
```

---

## Eventos de Analytics rastreados

| Evento | Cuándo se dispara |
|---|---|
| `section_view` | Al hacer scroll a cada sección |
| `toggle_theme` | Al cambiar entre modo claro/oscuro |
| `portfolio_filter` | Al filtrar Certificaciones / Tecnologías |
| `outbound_click` | Al hacer clic en links externos (GitHub, WhatsApp, etc.) |

---

## Proyecto destacado — OSINT Terminal

El portafolio incluye una tarjeta de logro para **OSINT Terminal**, una herramienta de análisis web open source construida en Vanilla JS que se inyecta en el navegador via consola.

Analiza información **pública** del DOM: meta tags, links externos, formularios, tecnologías detectadas y emails visibles. Construida sin `innerHTML` y sin acceder a cookies, tokens ni datos privados del usuario.

→ [Ver en GitHub Gist](https://gist.github.com/DevCop95/2ba71ac75edbd5481ee44b46eafa3c7a)

**Comandos disponibles:** `info` `meta` `links` `forms` `emails` `tech` `a11y` `scan` `export` `clear`

---

## Mejoras pendientes

- [ ] Sección de proyectos reales con screenshots
- [ ] CV descargable en PDF
- [ ] Formulario de contacto
- [ ] Lazy loading nativo para secciones (Intersection Observer ya implementado)

---

## Despliegue

El sitio se puede publicar directamente en **GitHub Pages** sin configuración adicional:

1. Ir a `Settings → Pages`
2. Source: `Deploy from a branch`
3. Branch: `main` / `root`
4. Guardar — disponible en `https://DevCop95.github.io/nombre-repo`

---

## Licencia

© 2025 Yared Henriquez — DevYHB. Todos los derechos reservados.  
Puedes usar este código como referencia o inspiración, pero no redistribuirlo como propio.

---

<p align="center">
  Hecho con intención desde Cartagena de Indias, Colombia 🇨🇴
</p>
