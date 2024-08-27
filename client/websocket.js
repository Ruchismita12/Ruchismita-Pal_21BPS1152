const ws = new WebSocket("ws://localhost:8080");

ws.onopen = () => {
  console.log("Connected to WebSocket server");
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log("Message from server:", data);

  if (data.type === "player_connected") {
    document.getElementById("status").textContent =
      "Player connected. Ready to start!";
    document.getElementById("startGame").disabled = false; // Enable the button
  }

  // Handle other incoming messages from the server
};

ws.onclose = () => {
  console.log("Disconnected from WebSocket server");
};

// Example function to send a move to the server
function sendMove(move) {
  ws.send(JSON.stringify({ type: "move", move: move }));
}
