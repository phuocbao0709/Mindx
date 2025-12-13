document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  const statusDisplay = document.getElementById("status");
  const statusDisplay1 = document.getElementById("status-1");
  const startButton = document.getElementById("start-btn");
  const resetButton = document.getElementById("reset-btn");
  const cells = [];

  let gameActive = false;
  let currentPlayer = "X";
  let gameState = ["", "", "", "", "", "", "", "", ""];
  let nextStartingPlayer = "X";

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const initialTitle = document.title;

  function initializeBoard() {
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("data-index", i);
      cell.addEventListener("click", CellClick);
      board.appendChild(cell);
      cells.push(cell);
    }
  }

  initializeBoard();

  function CellClick(event) {
    if (!gameActive) {
      statusDisplay.innerHTML = "Trò chơi chưa bắt đầu. Bấm Bắt đầu!";
      return;
    }

    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute("data-index"));

    if (gameState[clickedCellIndex] !== "") {
      return;
    }

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
    clickedCell.classList.add(currentPlayer);

    handleResultValidation();
  }

  function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay1.innerHTML = `Lượt của người chơi :${currentPlayer}`;
  }
  function handleResultValidation() {
    let roundWon = false;
    let winningLine = [];

    for (let i = 0; i < winningConditions.length; i++) {
      const winCondition = winningConditions[i];
      let a = gameState[winCondition[0]];
      let b = gameState[winCondition[1]];
      let c = gameState[winCondition[2]];

      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        winningLine = winCondition;
        break;
      }
    }
    if (roundWon) {
      gameActive = false;

      statusDisplay.innerHTML = ` Người chơi ${currentPlayer} THẮNG!`;
      document.title = ` ${currentPlayer} đã thắng!`;

      winningLine.forEach((index) => {
        cells[index].classList.add("winning-cell");
      });

      nextStartingPlayer = currentPlayer === "X" ? "O" : "X";

      resetButton.disabled = false;
      startButton.disabled = false;

      return;
    }
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
      gameActive = false;

      statusDisplay.innerHTML = `🤝 HÒA! Ván đấu kết thúc.`;
      document.title = `➖ Hòa!`;

      nextStartingPlayer = currentPlayer === "X" ? "O" : "X";

      resetButton.disabled = false;
      startButton.disabled = false;
      return;
    }
    handlePlayerChange();
    // resetButton.disabled = false;
    // startButton.disabled = false;
  }

  function StartGame() {
    if (gameActive) {
      return;
    }
    gameActive = true;
    currentPlayer = nextStartingPlayer;
    gameState = ["", "", "", "", "", "", "", "", ""];
    cells.forEach((cell) => {
      cell.innerHTML = "";
      cell.classList.remove("X", "O", "winning-cell");
    });
    startButton.disabled = true;
    resetButton.disabled = true;
    statusDisplay.innerHTML = `Hãy chiến đấu hết mình`;
    document.title = initialTitle;
  }

  function RestartGame() {
    if (gameActive) {
      return;
    }

    gameState = ["", "", "", "", "", "", "", "", ""];
    cells.forEach((cell) => {
      cell.innerHTML = "";
      cell.classList.remove("X", "O", "winning-cell");
    });

    statusDisplay.innerHTML = `Bấm bắt đầu để chơi`;
    document.title = initialTitle;

    resetButton.disabled = true;
    startButton.disabled = false;
  }

  startButton.addEventListener("click", StartGame);
  resetButton.addEventListener("click", RestartGame);
});
