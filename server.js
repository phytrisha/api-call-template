// Einfacher HTTP-Server ohne externe Abhängigkeiten.
// Liest API_KEY und BASE_URL aus der .env-Datei und stellt sie
// dem Browser zur Verfügung, indem sie script.js vorangestellt werden.

const http = require("http");
const fs   = require("fs");

// .env einlesen und in ein Schlüssel-Wert-Objekt umwandeln.
// Leerzeilen und Kommentare (beginnend mit #) werden übersprungen.
const env = Object.fromEntries(
  fs.readFileSync(".env", "utf8")
    .split("\n")
    .filter(l => l && !l.startsWith("#"))
    .map(l => l.split("=").map(s => s.trim()))
);

http.createServer((req, res) => {

  if (req.url === "/" || req.url === "/index.html") {
    // HTML-Datei direkt ausliefern
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fs.readFileSync("index.html", "utf8"));

  } else if (req.url === "/script.js") {
    // API_KEY und BASE_URL als globale Variablen voranstellen,
    // damit script.js sie nutzen kann, ohne die .env direkt zu lesen.
    const config = `const API_KEY = "${env.API_KEY}";\nconst BASE_URL = "${env.BASE_URL}";\n`;
    res.writeHead(200, { "Content-Type": "application/javascript" });
    res.end(config + fs.readFileSync("script.js", "utf8"));

  } else {
    res.writeHead(404);
    res.end("Not found");
  }

}).listen(3000, () => console.log("http://localhost:3000"));
