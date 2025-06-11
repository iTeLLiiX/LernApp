#requires -Version 5.0
<#!
.SYNOPSIS
    Automatisiert den Build-Prozess für die Android-App (PWA mit Capacitor)
.DESCRIPTION
    - Baut das React-Frontend
    - Initialisiert Capacitor (falls nötig)
    - Fügt Android-Plattform hinzu (falls nötig)
    - Kopiert Web-Assets
    - Öffnet Android Studio für APK-Build
    - Gibt Hinweise für Backend-URL und APK-Download
.NOTES
    Ausführen im Projekt-Root: Rechtsklick > Mit PowerShell ausführen
#>

Write-Host "[1/6] Wechsle in das client-Verzeichnis..." -ForegroundColor Cyan
Set-Location -Path "../client"

Write-Host "[2/6] Installiere Abhängigkeiten (npm install)..." -ForegroundColor Cyan
npm install

Write-Host "[3/6] Baue das Frontend für Produktion (npm run build)..." -ForegroundColor Cyan
npm run build

Write-Host "[4/6] Installiere Capacitor (falls nötig)..." -ForegroundColor Cyan
if (-not (Test-Path "../node_modules/@capacitor")) {
    npm install --save @capacitor/core @capacitor/cli
}

Write-Host "[5/6] Initialisiere Capacitor (falls nötig)..." -ForegroundColor Cyan
if (-not (Test-Path "../capacitor.config.json")) {
    npx cap init LernApp de.lernapp.pwa --web-dir=dist
}

Write-Host "[6/6] Füge Android-Plattform hinzu (falls nötig)..." -ForegroundColor Cyan
if (-not (Test-Path "../android")) {
    npx cap add android
}

Write-Host "[7/6] Kopiere Web-Assets ins Android-Projekt..." -ForegroundColor Cyan
npx cap copy android

Write-Host "[8/6] Öffne Android Studio (für APK-Build)..." -ForegroundColor Cyan
npx cap open android

Write-Host "\nFERTIG!\n" -ForegroundColor Green
Write-Host "APK-Build bitte in Android Studio ausführen (Build > Build Bundle(s)/APK(s) > Build APK(s))." -ForegroundColor Yellow
Write-Host "APK findest du danach im android/app/build/outputs/apk/!" -ForegroundColor Yellow
Write-Host "\nWICHTIG: Stelle sicher, dass die Backend-URL in der Produktion erreichbar ist (z.B. via öffentliche IP oder Hosting)." -ForegroundColor Magenta
Write-Host "\nBei Fragen oder Problemen: README beachten oder mich fragen!" -ForegroundColor Cyan 