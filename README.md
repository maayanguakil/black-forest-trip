# 🌲 Black Forest Trip App

A personal travel web-app for a family trip in the Black Forest (Germany): an interactive map, a day-by-day itinerary, hotels, food recommendations, driving details, tips, a travel journal, and live weather. Installable on your phone like a native app (PWA).

## ✈️ Want to make it your own trip? (e.g. Italy)
The app is built so you can clone it and swap the content for a different destination.

### What you need first
- **Claude Code** installed on your computer. Install: `curl -fsSL https://claude.ai/install.sh | bash`
- A **GitHub** account.
- A place to **host** the app so it runs in a browser/phone — e.g. **GitHub Pages** or **AWS Amplify** (both offer free hosting).

### Steps
1. Clone the project: `git clone https://github.com/maayanguakil/black-forest-trip.git`
2. Enter the folder and start Claude Code: `cd black-forest-trip` then `claude`
3. Tell Claude Code where you're going and your itinerary. The more detail you give (days, places, hotels, coordinates), the better the result. Example: "Replace all the Black Forest trip data with my trip to Italy, based on this list...". The data lives in `index.html` (the HOMES, MAPPTS and DAYS variables).
4. Deploy your version to GitHub Pages or AWS Amplify, and get your own link to open on your phone.

> Tip: it's easiest to give Claude Code your places as a clean table (name, coordinates, day, category).

## 🛠️ Built with
Single-file HTML/CSS/JavaScript (`index.html`), a Leaflet map, weather from Open-Meteo, and a PWA setup (manifest + service worker). No server — it all runs in the browser.

## 📁 Files
- `index.html` — the entire app (code + trip data).
- `manifest.json`, `sw.js`, `icon-*.png` — the PWA files (install on phone).
