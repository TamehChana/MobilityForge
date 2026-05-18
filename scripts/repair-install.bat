@echo off
cd /d "%~dp0.."
echo === MobilityForge repair install ===
echo.
echo Close Cursor/VS Code terminals running npm in this folder first.
echo.
pause

echo [1/4] Removing broken node_modules...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del /f package-lock.json

echo [2/4] Clearing npm cache...
call npm cache clean --force

echo [3/4] Fresh install (do not interrupt - 5-15 min)...
call npm install --no-audit --no-fund
if errorlevel 1 goto failed

echo [4/4] Verifying Next.js...
if not exist node_modules\.bin\next.cmd (
  echo ERROR: next CLI missing - install still broken.
  goto failed
)
if not exist node_modules\next\dist\server (
  echo ERROR: next dist incomplete - try repair again or free disk space.
  goto failed
)

echo.
echo SUCCESS. Run: npm run dev
pause
exit /b 0

:failed
echo.
echo FAILED. Common fixes:
echo  - Free disk space on C: drive
echo  - Turn off antivirus scan on E:\MobilityForge temporarily
echo  - Run this .bat as Administrator
echo  - Use stable internet, run only ONE install at a time
pause
exit /b 1
