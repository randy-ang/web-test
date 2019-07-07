#!/usr/bin/env bash
cd C:/web-test && cp "$PWD/.env.production" "$PWD/.env"&& echo "copying production .env" || echo "fail to copy production .env"
