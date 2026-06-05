import WebSocket from "ws";

const { API_KEY, WS_URL } = process.env;
if (!API_KEY || !WS_URL) {
  console.error("set API_KEY and WS_URL");
  process.exit(1);
}

function connect() {
  const ws = new WebSocket(WS_URL, { headers: { "X-Api-Key": API_KEY } });
  ws.on("open", () => console.log("connected to instagram feed"));
  ws.on("message", (raw) => {
    let e;
    try { e = JSON.parse(raw.toString()); } catch { return; }
    if (e.platform !== "instagram") return;
    const media = Array.isArray(e.media) ? e.media.length : 0;
    console.log(`[${e.timestamp}] ${e.eventType} @${e.handle} (${media} media): ${e.content ?? ""}`);
  });
  ws.on("close", () => setTimeout(connect, 1000));
  ws.on("error", (err) => console.error("ws error:", err.message));
}
connect();
