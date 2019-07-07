#!/usr/bin/env bash
cd C:/web-test && cp "$PWD/.env.production" "$PWD/.env"&& echo "copying staging .env" || echo "fail to copy staging .env"
