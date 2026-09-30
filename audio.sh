#!/bin/sh
# Regenerates the pronunciation audio (macOS: uses the `say` voice "Thomas" and `afconvert`).
set -e
cd "$(dirname "$0")"
mkdir -p tools/.cache
node tools/extract-audio-texts.js > tools/.cache/texts.json
python3 tools/make-audio.py
