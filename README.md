# sagomeza.github.io

Portfolio personal de **Alejandro Gómez** — Matemático y Científico de Datos.

## Descripción

Sitio web estático tipo portfolio desplegado en GitHub Pages. Presenta perfil profesional, experiencia laboral, habilidades técnicas y formación académica.

## Stack

| Tecnología | Uso |
|---|---|
| HTML 5 | Estructura semántica (`main`, `nav`, `header`, `footer`) |
| CSS 3 | Variables CSS, Grid, Flexbox, diseño responsivo |
| SVG inline | Iconos (LinkedIn, GitHub, email, teléfono, descarga) |
| Google Fonts | Tipografía Inter |
| GitHub Pages | Hosting y despliegue automático |

## Estructura del proyecto

```
.
├── index.html      # Página principal
├── styles.css      # Hoja de estilos externa
└── README.md       # Documentación
```

## Desarrollo local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/sagomeza1/sagomeza.github.io.git
   cd sagomeza.github.io
   ```

2. Abrir en un navegador o usar un servidor local:
   ```bash
   npx serve .
   # o simplemente abrir index.html en el navegador
   ```

## Despliegue

El sitio se despliega automáticamente en **GitHub Pages** desde la rama `main`.

URL: [https://sagomeza1.github.io/](https://sagomeza1.github.io/)

Cualquier push a `main` actualiza el sitio en producción.

## Mejoras implementadas

- **SEO**: meta description, Open Graph, Twitter Card
- **Accesibilidad**: `aria-label` en enlaces de iconos, skip-link, etiqueta `<main>`
- **Seguridad**: `rel="noopener noreferrer"` en enlaces externos
- **Performance**: eliminación de Font Awesome CDN (~80 KB) en favor de SVG inline, preconnect para Google Fonts
- **Mantenibilidad**: CSS externo, cero estilos inline, clases semánticas

## Licencia

© 2026 Alejandro Gómez. Todos los derechos reservados.
