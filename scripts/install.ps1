# MobilityForge — one clean dependency install (run once, do not interrupt)
$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..")

Write-Host "Cleaning old install..." -ForegroundColor Cyan
if (Test-Path node_modules) { Remove-Item -Recurse -Force node_modules }
if (Test-Path package-lock.json) { Remove-Item -Force package-lock.json }

Write-Host "Installing dependencies (may take 5–15 minutes)..." -ForegroundColor Cyan
npm install --no-audit --no-fund
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Verifying Next.js..." -ForegroundColor Cyan
if (-not (Test-Path "node_modules\next\package.json")) {
  Write-Host "ERROR: next was not installed. Delete node_modules and run this script again." -ForegroundColor Red
  exit 1
}

Write-Host "Done. Run: npm run dev" -ForegroundColor Green
