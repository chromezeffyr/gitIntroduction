const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 4173);
const OPENAI_API_KEY = (process.env.OPENAI_API_KEY || "").trim();
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".txt": "text/plain; charset=utf-8",
  ".map": "application/json; charset=utf-8"
};

function sendJson(res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

async function parseBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function getDemoAnswer(question) {
  const q = question.toLowerCase();
  if (q.includes("fetch")) return "Demo: git fetch descarga cambios remotos sin fusionarlos automáticamente.";
  if (q.includes("pull")) return "Demo: git pull equivale a fetch + merge en la rama activa.";
  if (q.includes("commit")) return "Demo: git commit guarda una instantánea del estado preparado (staging).";
  return "Demo: la IA real no está configurada. Define OPENAI_API_KEY en el servidor para respuestas generativas.";
}

async function handleAiAssistant(req, res) {
  const body = await parseBody(req);
  const question = String(body.question || "").trim();

  if (!question) {
    return sendJson(res, 400, { error: "La pregunta es obligatoria." });
  }

  if (question.length > 500) {
    return sendJson(res, 400, { error: "La pregunta es demasiado larga (máximo 500 caracteres)." });
  }

  if (!OPENAI_API_KEY) {
    return sendJson(res, 200, {
      mode: "demo",
      answer: getDemoAnswer(question)
    });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        temperature: 0.2,
        messages: [
          { role: "system", content: "Eres un asistente que responde preguntas sobre Git en español de forma breve y clara." },
          { role: "user", content: question }
        ]
      })
    });

    if (!response.ok) {
      return sendJson(res, response.status, { error: "No se pudo completar la consulta con IA." });
    }

    const data = await response.json();
    const answer = data?.choices?.[0]?.message?.content?.trim();

    if (!answer) {
      return sendJson(res, 502, { error: "No se recibió una respuesta válida de IA." });
    }

    return sendJson(res, 200, { mode: "live", answer });
  } catch {
    return sendJson(res, 500, { error: "Error interno al consultar IA." });
  }
}

function serveStatic(req, res) {
  const safePath = decodeURIComponent(req.url.split("?")[0]).replace(/\.+/g, ".");
  const requested = safePath === "/" ? "/index.html" : safePath;
  const filePath = path.join(process.cwd(), requested);

  if (!filePath.startsWith(process.cwd())) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("Not found");
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
    res.end(data);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/api/git-assistant") {
    return handleAiAssistant(req, res);
  }

  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("Method not allowed");
  }

  return serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
