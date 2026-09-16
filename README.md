# CGI Partners — Sitio Web Corporativo

Sitio web estático (HTML + CSS + JS, sin dependencias de build) para **CGI Partners**, firma panameña de contabilidad, auditoría y asesoría tributaria.

## ⚠️ Nota sobre el origen de este proyecto

Este sitio se construyó para reemplazar la web anterior de la empresa (antes operando bajo otra razón social). El objetivo era **clonar 1:1** la estructura, contenido e imágenes del sitio anterior (`sapsacontadores.com`) y solo reemplazar la marca. **Eso no fue posible**: la política de red del entorno de ejecución en el que se generó este proyecto bloquea el acceso saliente a dominios externos no autorizados, por lo que no se pudo leer, ni extraer imágenes, textos, HTML/CSS reales del sitio anterior.

En su lugar, se construyó una estructura profesional equivalente (mismo tipo de páginas: inicio, servicios, nosotros, contacto) usando:
- Datos reales confirmados por búsqueda web pública (nombre comercial anterior "SAPSA Consulting & Tax", ubicación en Panamá, enfoque en PYMEs, Ley de Emprendedores, Ley de PYME, empresas offshore, servicios de "Asesoría Tributaria" y "Empresas Offshore" verificados).
- Estructura estándar de la industria para firmas contables en Panamá para el resto de los servicios.
- Marcadores `[POR ACTUALIZAR]` en todo dato de contacto o de empresa que no se pudo verificar (ver sección final de este documento).

**Ninguna referencia a la marca anterior ("SAPSA" o similares) quedó en el proyecto.**

Si me compartes el contenido real del sitio anterior (texto copiado, capturas de pantalla, o si habilitas el acceso al dominio), puedo ajustar cualquier sección para que coincida exactamente con el original.

## Estructura del proyecto

```
/
├── index.html                     Página de inicio
├── nosotros.html                  Sobre CGI Partners
├── contacto.html                  Formulario y datos de contacto
├── politica-privacidad.html       Plantilla legal (pendiente de revisión legal)
├── terminos-condiciones.html      Plantilla legal (pendiente de revisión legal)
├── servicios/
│   ├── index.html                 Listado de servicios
│   ├── contabilidad.html
│   ├── auditoria.html
│   ├── asesoria-tributaria.html
│   ├── empresas-offshore.html
│   ├── nomina.html
│   └── cumplimiento-legal.html
├── assets/
│   ├── css/styles.css             Sistema de diseño (variables, componentes, responsive)
│   ├── js/main.js                 Menú móvil, dropdowns, scroll reveal, formulario
│   └── img/                       Logo (SVG), favicon, ilustraciones
├── robots.txt
├── sitemap.xml
└── site.webmanifest
```

No requiere build ni dependencias: se puede publicar tal cual en cualquier hosting estático (Netlify, Vercel, GitHub Pages, cPanel, etc.).

## Cómo editar los datos de contacto

Los siguientes textos aparecen de forma **literal y repetida** en cada página (encabezado, pie de página, formulario). Para actualizarlos, haz una búsqueda y reemplazo global en todo el proyecto:

| Marcador | Dónde aparece |
|---|---|
| `[TELÉFONO POR ACTUALIZAR]` / `+507XXXXXXX` | Barra superior, pie de página, botones de llamada |
| `[WHATSAPP POR ACTUALIZAR]` / `507XXXXXXXX` en `wa.me/...` | Botón flotante de WhatsApp, página de contacto |
| `info@cgipartners.com` | Todas las páginas (reemplazar si el dominio de correo real es distinto) |
| `[DIRECCIÓN POR ACTUALIZAR]` | Pie de página, página de contacto |
| `[HORARIO POR ACTUALIZAR]` | Barra superior, pie de página, contacto |
| `[LINKEDIN POR ACTUALIZAR]`, `[FACEBOOK POR ACTUALIZAR]`, `[INSTAGRAM POR ACTUALIZAR]` | Barra superior y pie de página |

El logotipo está en `assets/img/logo.svg` (versión completa) y `assets/img/logo-mark.svg` (solo el monograma, usado en el encabezado/pie de página). Es una **recreación vectorial** basada en la imagen de marca compartida (monograma navy/dorado con globo + texto "CGI PARTNERS / CONTABILIDAD & AUDITORÍA"). Si tienes el archivo vectorial original (AI, EPS o SVG), reemplázalo directamente en esos dos archivos para un resultado idéntico al original.

## SEO

- Meta title, description, canonical, Open Graph y datos estructurados (JSON-LD `AccountingService`, `Service`, `BreadcrumbList`) configurados por página.
- `sitemap.xml` y `robots.txt` incluidos, apuntando a `https://www.cgipartners.com/` — **actualiza esta URL** en todos los archivos (`<link rel="canonical">`, `og:url`, JSON-LD, sitemap) si el dominio final es distinto.
- SEO local orientado a Panamá (`geo.region`, `geo.placename`, idioma `es-PA`).

## Formulario de contacto

El formulario en `contacto.html` actualmente usa un envío `mailto:` (abre el cliente de correo del visitante) como solución funcional sin backend. **Antes de producción**, se recomienda conectar el formulario a un servicio real (Formspree, un endpoint propio, un CRM, etc.) editando `assets/js/main.js` (función del listener de `#contact-form`).

---

## 📋 Información que necesito proporcionar

Para dejar el sitio listo para producción, por favor comparte:

1. **Teléfono principal** (y WhatsApp, si es distinto).
2. **Correo electrónico oficial** (se usó `info@cgipartners.com` como marcador — confirmar si es correcto o indicar el real).
3. **Dirección física de la oficina** (para el pie de página, la página de contacto y el mapa embebido).
4. **Horario de atención**.
5. **Enlaces a redes sociales** (LinkedIn, Facebook, Instagram, u otras).
6. **Dominio final** del sitio (para reemplazar `www.cgipartners.com` en URLs canónicas, Open Graph, sitemap y datos estructurados).
7. **Logotipo vectorial original** (si existe un archivo fuente distinto a la imagen compartida).
8. **Contenido real del sitio anterior** (textos, capturas de pantalla, o acceso habilitado a `sapsacontadores.com`) si deseas que el clon sea más fiel al original en vez de la estructura estándar construida aquí.
9. **Lista definitiva de servicios** a ofrecer (se reconstruyeron 6 servicios típicos del sector; confirmar nombres, alcance y si falta o sobra alguno).
10. **Nombres, cargos y fotografías del equipo** para la sección "Nuestro equipo" en `nosotros.html` (actualmente con marcadores).
11. **Años de experiencia / número de empresas atendidas** u otras cifras que quieras mostrar en las estadísticas del inicio (`hero-stats`, `split-badge`) — se dejaron en blanco para no inventar datos.
12. **Testimonios reales de clientes** (opcional) — no se incluyeron por no poder verificarlos; si los tienes, puedo añadir una sección de testimonios.
13. Confirmación de si se requiere **versión en inglés** (el sitio original tenía una ruta `/en/`).
14. Revisión legal de **Política de Privacidad** y **Términos y Condiciones** (son plantillas base).
