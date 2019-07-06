#! /bin/bash
cp ".env.production" ".env"&& echo "copying production .env" || echo "fail to copy production .env"
