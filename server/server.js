const http = require("http");
const WebSocket = require("ws");
const { handleGameLogic } = require("./gameLogic");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Server is running");
});

const wss = new WebSocket.Server({ server });
let clients = [];

wss.on("connection", (ws) => {
  if (clients.length >= 2) {
    ws.send(
      JSON.stringify({ type: "error", message: "Game is already in progress." })
    );
    ws.close();
    return;
  }

  clients.push(ws);
  console.log(`Client connected. Total clients: ${clients.length}`);

  if (clients.length === 2) {
    clients.forEach((client) => {
      client.send(JSON.stringify({ type: "player_connected" }));
    });
  }

  ws.on("message", (message) => {
    const data = JSON.parse(message);
    console.log("Received:", data);
    handleGameLogic(data, ws);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
    clients = clients.filter((client) => client !== ws);
    console.log(`Total clients: ${clients.length}`);
  });
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
