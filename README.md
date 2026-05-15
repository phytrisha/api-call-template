# AI Hub – Text Generation Template

Eine einfache Vorlage, um Anfragen an die AI Hub API zu stellen und die Antwort im Browser anzuzeigen.

---

## Voraussetzungen

- **Node.js** muss installiert sein. Prüfen lässt sich das im Terminal mit:
  ```
  node --version
  ```
  Erscheint eine Versionsnummer (z. B. `v20.0.0`), ist Node.js vorhanden.
  Falls nicht: [nodejs.org](https://nodejs.org) → „LTS" herunterladen und installieren.

---

## Einrichtung

**1. Projektordner öffnen**

Den Ordner mit den Dateien im Terminal öffnen. Unter macOS geht das z. B. so:
```
cd /pfad/zum/projektordner
```

**2. Konfigurationsdatei anlegen**

Die Datei `.env.example` kopieren und in `.env` umbenennen:
```
cp .env.example .env
```

**3. API-Schlüssel eintragen**

Die Datei `.env` in einem Texteditor öffnen und den eigenen API-Schlüssel eintragen:
```
API_KEY=hier_den_eigenen_schlüssel_eintragen
BASE_URL=https://ai-hub.hfg-gmuend.de
```
Den API-Schlüssel erhält man auf der [API Keys-Seite](https://ai-hub.hfg-gmuend.de/api-keys) von AI Hub.

---

## Starten

**4. Server starten**

Im Terminal folgenden Befehl eingeben:
```
node server.js
```
Es erscheint die Meldung:
```
http://localhost:3000
```

**5. Im Browser öffnen**

[http://localhost:3000](http://localhost:3000) im Browser aufrufen.

**6. Ausprobieren**

Auf „Generate" klicken – die Antwort der KI erscheint nach kurzer Zeit darunter.

---

## Beenden

Den Server im Terminal mit `Ctrl + C` stoppen.

---

## Dateien im Überblick

| Datei | Zweck |
|---|---|
| `.env` | API-Schlüssel und Server-URL (nicht ins Git eingecheckt) |
| `.env.example` | Vorlage für die `.env`-Datei |
| `index.html` | Die Benutzeroberfläche im Browser |
| `script.js` | Logik für die API-Anfrage |
| `server.js` | Lokaler Server, der alles zusammenbringt |
# api-call-template
