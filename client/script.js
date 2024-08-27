let currentPlayer = "A";
let selectedChar = null;

document.addEventListener("DOMContentLoaded", () => {
  const startGameButton = document.getElementById("startGame");
  const gameBoard = document.getElementById("game-board");
  const moveHistoryList = document.getElementById("moveHistoryList");
  const currentPlayerName = document.getElementById("currentPlayerName");
  const selectedCharDisplay = document.getElementById("selectedChar");

  // Create a 5x5 grid
  for (let i = 0; i < 25; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.index = i;
    cell.addEventListener("click", () => handleCellClick(i));
    gameBoard.appendChild(cell);
  }

  // Handle start game
  startGameButton.addEventListener("click", () => {
    startGameButton.style.display = "none"; // Hide the button
    gameBoard.style.display = "grid"; // Show the board
  });

  // Handle player button clicks
  document
    .querySelectorAll(".player1Button, .player2Button")
    .forEach((button) => {
      button.addEventListener("click", () => {
        selectedChar = button.dataset.char;
        selectedCharDisplay.textContent = `Selected: ${currentPlayer}-${selectedChar}`;
      });
    });

  // Handle move button clicks
  document.querySelectorAll("#moveButtons button").forEach((button) => {
    button.addEventListener("click", () => {
      if (selectedChar) {
        const move = button.dataset.move;
        logMove(selectedChar, move);
        switchPlayer();
      }
    });
  });

  function handleCellClick(index) {
    if (selectedChar) {
      const cell = document.querySelector(`[data-index='${index}']`);
      cell.textContent = `${currentPlayer}-${selectedChar}`;
      cell.classList.add(`player${currentPlayer}`);
    }
  }

  function logMove(char, move) {
    const li = document.createElement("li");
    li.textContent = `${currentPlayer}-${char}: ${move}`;
    moveHistoryList.appendChild(li);
  }

  function switchPlayer() {
    currentPlayer = currentPlayer === "A" ? "B" : "A";
    currentPlayerName.textContent = currentPlayer;
    selectedChar = null;
    selectedCharDisplay.textContent = "Selected: None";
  }
});
