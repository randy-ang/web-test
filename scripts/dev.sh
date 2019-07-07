#!/usr/bin/env bash
cd C:/web-test && cp "$PWD/.env.development" "$PWD/.env"&& echo "copying development .env" || echo "fail to copy development .env"
