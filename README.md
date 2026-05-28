# GitIntroduction — Guía visual de Git

Proyecto web educativo para aprender comandos de Git con una interfaz moderna, buscador por intención y ejemplos copiables.

## Demo

- Sitio en GitHub Pages: https://chromezeffyr.github.io/gitIntroduction/

## Funcionalidades actuales

- Landing responsive en español con secciones de aprendizaje.
- Explorador de comandos con:
  - búsqueda por texto,
  - filtros por categorías,
  - enlaces compartibles por hash (ej: `#git-commit`).
- Bloques didácticos por comando: qué hace, cuándo usarlo, precaución y relacionados.
- Copia de ejemplos con feedback visual.
- Consulta IA vía backend proxy con modo demo cuando no hay API key.

## Ejecutar localmente

### Opción recomendada (con backend)

```bash
npm run dev
```

Abre: `http://localhost:4173`

### Variables de entorno

Copia `.env.example` y configura:

- `OPENAI_API_KEY` (opcional)
- `OPENAI_MODEL` (opcional, por defecto `gpt-4o-mini`)
- `PORT` (opcional, por defecto `4173`)

Si no defines `OPENAI_API_KEY`, la ruta `/api/git-assistant` responde en modo demo.

## Checks disponibles

```bash
npm run check
```

Incluye validación de HTML y verificación sintáctica de JavaScript.

## Tecnologías

- HTML5
- CSS3
- JavaScript (vanilla)
- Bootstrap 5
- Node.js (servidor estático + proxy IA)

## Licencia

MIT. Ver `LICENSE.txt`.
