# Ligne B1 · Français

Sitio web para aprender y practicar el francés de nivel B1 (MCER / DELF B1), organizado como una línea de metro: 23 estaciones en 7 tramos, en orden de aprendizaje, más cuatro herramientas de referencia.

Publicado como Claude Artifact: https://claude.ai/artifact/8XHttQfLgUyRG7x2XVnqbM

## Funciones

- **Lecciones (23):** explicación, vocabulario, ejemplos, enlaces para practicar y juegos.
- **Idioma de las explicaciones:** selector ES / FR. Cambia las explicaciones, las instrucciones y la interfaz. Los ejemplos, el vocabulario y los verbos siguen siempre en francés, con su traducción al español.
- **Audio de pronunciación:** 770 clips grabados con la voz francesa «Thomas» de macOS, agrupados en un archivo por página (`dist/audio/*.mp4`). Si un clip no carga, se usa la síntesis de voz del navegador.
- **Juegos:** quiz, completar huecos (con teclado de acentos), clasificar, emparejar, ordenar frases, tarjetas y escucha de pares mínimos.
- **Progreso guardado en el navegador (`localStorage`):**
  - Cada estación avanza al leer sus 4 secciones y al superar sus juegos con un 70 % o más. Una sección cuenta como leída cuando cruza el centro de la pantalla durante un momento.
  - Anillos de avance en el menú y en el plan de la línea.
  - Tarjeta «Continúa donde lo dejaste», que recupera la última página y la posición.
  - Exportar, importar y reiniciar el progreso desde la portada.
- **Verbes et prépositions:** 180 verbos y locuciones, buscador, filtros, juegos aleatorios y descarga en PDF.
- **Résumé des règles:** 40 reglas con ejemplo y descarga en PDF, en el idioma elegido.
- **Conjugaison** y **Plan d'étude** (12 semanas, repetición espaciada y checklist B1).

## Estructura

```
src/
  00-head.html        <title>, fuentes y todo el CSS (tokens para modo claro y oscuro)
  10-body.html        Estructura: barra superior móvil, menú lateral, selector de idioma, vista principal
  20-lessons-a.js     bi(), módulos, herramientas y lecciones de los tramos A–C
  21-lessons-b.js     Lecciones de los tramos D–G y checklist B1
  22-verbs.js         Verbos con preposición, filtros, contrastes y speakText() (clave de audio)
  23-summary.js       Resumen de reglas, tablas de conjugación y plan de estudio
  24-audio-map.js     GENERADO: texto -> [archivo, inicio ms, duración ms]
  25-i18n.js          Textos de la interfaz en español y francés
  30-app.js           Router, renderizado, idioma, progreso, audio, juegos, PDF y confeti
tools/
  extract-audio-texts.js  Lista los textos con botón de audio, agrupados por página
  make-audio.py           Graba los clips (say + afconvert) y genera dist/audio y src/24-audio-map.js
  check-data.js           Comprueba los datos en ambos idiomas y la cobertura de audio
audio.sh              Regenera el audio (solo macOS)
build.sh              Une src/ en dist/
dist/
  index.html          Página completa para abrir en el navegador
  artifact.html       Solo el contenido, para publicarla como Claude Artifact
  audio/*.mp4         Audio de pronunciación (AAC)
```

## Uso

```bash
./build.sh
cd dist && python3 -m http.server 8000
```

Abre http://localhost:8000. Con `file://` la página funciona, pero algunos navegadores no cargan el audio mediante `fetch`; en ese caso se usa un reproductor `<audio>` o la voz del navegador.

Después de añadir o cambiar vocabulario, ejemplos, verbos o frases de los juegos de ordenar:

```bash
./audio.sh && node tools/check-data.js && ./build.sh
```

Los clips ya grabados se guardan en `tools/.cache/clips`, así que solo se graban los textos nuevos. Para cambiar la voz o la velocidad: `VOICE="Thomas" RATE=165 ./audio.sh`.

## Añadir o editar contenido

Cada lección se declara con `L({...})` y su `id` debe figurar en el array `lessons` de su módulo en `MODULES`. Cualquier texto de explicación se escribe como `bi("español", "français")`; el francés que se aprende (ejemplos, vocabulario) va como texto normal.

- `name` (título en francés), `sub`, `goal`: textos de cabecera.
- `theory`: bloques `["p" | "h" | "rule" | "tip" | "trap" | "delf" | "info" | "list" | "table" | "timeline" | "model", contenido]`.
- `vocab` (`[[fr, es], …]`) o `vocabGroups` (`[{ t, items }]`), `examples` (`[[fr, es], …]`), `links` (`[nombre, url, descripción]`).
- `games`, según el tipo:
  - `mcq`: `items: [{ q, o: [correcta, …incorrectas], why? }]`. La primera opción es la correcta; las opciones se barajan al jugar.
  - `fill`: `items: [{ q: "texto con ___", a: [["respuesta", "alternativa"], …] }]`, con una entrada de `a` por cada `___`.
  - `sort`: `buckets: [...]`, `items: [[texto, índiceDeCubeta]]`.
  - `match`: `pairs: [[izquierda, derecha]]`.
  - `order`: `items: [["Palabras|separadas|por|barras", "traducción"]]`.
  - `flash`: `cards: [[anverso, reverso]]`, o `fromVocab: n` para usar el vocabulario de la lección.
  - `listen`: `pairs: [[palabraA, palabraB]]`.
  - Cualquier juego puede usar `gen: () => items` para generar rondas nuevas en cada intento.

Los textos de la interfaz están en `src/25-i18n.js`, con las mismas claves en `es` y `fr`. `tools/check-data.js` avisa si falta alguna.

## Publicar en Claude

Publica `dist/artifact.html` y adjunta cada archivo de `dist/audio/` en la ruta `audio/<nombre>.mp4`. El visor no sirve archivos `.m4a`, por eso el audio va en `.mp4`. La página declara la capacidad `downloads` para las descargas de PDF y del progreso.

## Fuentes

- Guía de estudio Français B1 (Cosmopolite 3 y DELF B1) creada previamente como Claude Doc.
- Construcciones verbales basadas en S. Auger y L. Pronovost, *Le verbe et ses prépositions*, niveau avancé, 2.ª ed. (École internationale de français, UQTR). Traducciones, notas y ejemplos propios.
