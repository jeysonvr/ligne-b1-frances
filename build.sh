#!/bin/sh
# Builds the site from src/ and assets/ into dist/.
#   dist/index.html     standalone page (GitHub Pages or any static host)
#   dist/artifact.html  page content only, for publishing as a Claude Artifact (the viewer adds the skeleton)
#   dist/audio/*.mp4    pronunciation audio, copied from assets/audio (regenerate it with ./audio.sh on macOS)
set -e
cd "$(dirname "$0")"
rm -rf dist
mkdir -p dist

SCRIPTS="src/20-lessons-a.js src/21-lessons-b.js src/22-verbs.js src/23-summary.js src/24-audio-map.js src/25-i18n.js src/30-app.js"

{
  cat src/00-head.html
  cat src/10-body.html
  printf '<script>\n'
  cat $SCRIPTS
  printf '\n</script>\n'
} > dist/artifact.html

{
  cat <<'HEAD'
<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="description" content="Curso interactivo de francés B1 en 23 estaciones: explicaciones en español o francés, audio de pronunciación, juegos, 180 verbos con preposición y resumen de reglas en PDF.">
<meta name="theme-color" content="#213E8C">
<meta property="og:title" content="Ligne B1 · Français">
<meta property="og:description" content="Aprende y practica el francés de nivel B1 (DELF B1), estación por estación.">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='30' fill='%23213E8C'/%3E%3Ccircle cx='32' cy='32' r='24' fill='none' stroke='%23fff' stroke-width='3'/%3E%3Ctext x='32' y='41' font-family='Georgia,serif' font-size='24' font-weight='700' text-anchor='middle' fill='%23fff'%3EB1%3C/text%3E%3C/svg%3E">
<style>html{color-scheme:light}body{margin:0}img{max-width:100%}[hidden]{display:none!important}:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}</style>
HEAD
  cat src/00-head.html
  printf '</head>\n<body>\n'
  cat src/10-body.html
  printf '<script>\n'
  cat $SCRIPTS
  printf '\n</script>\n</body>\n</html>\n'
} > dist/index.html

cp -R assets/audio dist/audio
touch dist/.nojekyll
echo "Built dist/ ($(ls dist/audio | wc -l | tr -d ' ') audio files)"
