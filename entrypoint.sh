#!/bin/bash
set -e

SERVE_PORT=3000
if [ -n "$PORT" ]; then
  SERVE_PORT=$PORT
fi

npx http-server --port $SERVE_PORT -a 0.0.0.0 dist/
