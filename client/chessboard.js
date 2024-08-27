document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("game-board");
  const status = document.getElementById("status");

  let currentPlayer = "1";
  let moveCount = 0;

  // Create a 5x5 grid (25 cells)
  for (let i = 0; i < 25; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.index = i;
    cell.addEventListener("click", () => handleCellClick(i, cell));
    board.appendChild(cell);
  }

  function handleCellClick(index, cell) {
    // Alternate players based on moveCount
    const player = moveCount % 2 === 0 ? "1" : "2";

    if (cell.textContent === "") {
      cell.textContent = `Player ${player}`;
      moveCount++;
      currentPlayer = player === "1" ? "2" : "1";
      status.textContent = `Player ${currentPlayer}'s Turn`;
    }
  }
});
