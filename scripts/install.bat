@echo off
cd /d "%~dp0.."
echo MobilityForge install
echo If you see ENOSPC: free disk space on C: then run: npm cache clean --force
echo.
echo Cleaning old install...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del /f package-lock.json
echo.
echo Installing dependencies - please wait 5-15 minutes, do NOT close this window...
call npm install --no-audit --no-fund
if errorlevel 1 (
  echo INSTALL FAILED
  pause
  exit /b 1
)
if not exist node_modules\next\package.json (
  echo ERROR: next was not installed
  pause
  exit /b 1
)
echo.
echo SUCCESS. Run: npm run dev
pause
