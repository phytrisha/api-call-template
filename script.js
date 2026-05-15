// API_KEY und BASE_URL werden von server.js aus der .env-Datei hier vorangestellt

// Vordefinierter Prompt – hier anpassen
const PROMPT = "Hello, how are you today?";

async function generate() {
  const output = document.getElementById("output");

  // Ladehinweis während die Anfrage läuft
  output.textContent = "Loading…";

  // POST-Anfrage an den Textgenerierungs-Endpunkt
  const res = await fetch(`${BASE_URL}/api/tools/textGeneration/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`, // API-Schlüssel zur Authentifizierung
    },
    body: JSON.stringify({ model: "claude-sonnet-4-6", prompt: PROMPT }),
  });

  // Bei HTTP-Fehler Statuscode anzeigen und abbrechen
  if (!res.ok) { output.textContent = `Error ${res.status}`; return; }

  // Die API antwortet im SSE-Format – wir warten auf den vollständigen Body
  // und extrahieren daraus den generierten Text.
  const text = await res.text();
  const result = text
    .split("\n")                         // Zeilen trennen
    .filter(l => l.startsWith("data: ")) // nur SSE-Datenzeilen
    .map(l => JSON.parse(l.slice(6)))    // "data: " entfernen und JSON parsen
    .filter(e => e.type === "chunk")     // nur Textfragmente
    .map(e => e.content)                 // Inhalt extrahieren
    .join("");                           // zu einem String zusammenführen

  output.textContent = result || "[No response]";
}
