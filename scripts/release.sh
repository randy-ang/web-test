#!/usr/bin/env bash
cp "$PWD/.env.production" "$PWD/.env"&& echo "copying production .env" || echo "fail to copy production .env"
