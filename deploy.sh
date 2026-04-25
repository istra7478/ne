#!/bin/bash

PROJECT_DIR="/home/u137760107/domains/istralife.com/nodejs"

cd $PROJECT_DIR || exit

echo "Pulling latest code..."
git pull origin main

echo "Installing dependencies..."
npm install

echo "Reloading PM2..."

# اگر پروسه وجود داشت ریست کن، اگر نبود استارت کن
pm2 restart istralife || pm2 start server.js --name istralife

pm2 save

echo "Deploy finished successfully!"
