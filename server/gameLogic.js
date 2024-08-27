let gameState = {
  board: Array(25).fill(null), // 5x5 grid
  currentPlayer: "A",
};

function handleGameLogic(data, ws) {
  switch (data.type) {
    case "start":
      broadcastGameState("start");
      break;
    case "move":
      processMove(data.move);
      broadcastGameState("move", data.move);
      break;
  }
}

function processMove(move) {
  const { index, player } = move;

  if (gameState.board[index] === null) {
    gameState.board[index] = player;

    // Switch current player
    gameState.currentPlayer = gameState.currentPlayer === "A" ? "B" : "A";
  }
}

function broadcastGameState(type, move) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(
        JSON.stringify({
          type,
          move,
          status: `Player ${gameState.currentPlayer}'s Turn`,
        })
      );
    }
  });
}

module.exports = { handleGameLogic };
