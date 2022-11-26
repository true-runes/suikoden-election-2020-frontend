#!/bin/bash
set -e

SERVE_PORT=3000
if [ -n "$PORT" ]; then
  SERVE_PORT=$PORT
fi

yarn serve --port $SERVE_PORT --host 0.0.0.0
