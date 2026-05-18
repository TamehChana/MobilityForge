@echo off
cd /d "%~dp0.."
echo Stopping anything on port 3000...
node scripts\kill-port.js
echo.
echo Removing .next cache...
if exist .next rmdir /s /q .next
echo.
echo Starting fresh dev server...
call npm run dev
