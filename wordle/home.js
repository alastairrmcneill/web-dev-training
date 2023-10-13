import { wordList } from "./dictionary";

const state = {
  grid: Array(6)
    .fill()
    .map(() => Array(5).fill("")),
  currentRow: 0,
  currentCol: 0,
};

function updateGrid() {
  for (let i = 0; i < state.grid.length; i++) {
    for (let j = 0; j < state.grid[i].length; j++) {
      const box = document.getElementById(`box${i}${j}`);

      box.textContent = state.grid[i][j];
    }
  }
}

function drawBox(container, row, col, letter = "") {
  const box = document.createElement("div");
  box.className = "box";
  box.id = `box${row}${col}`;
  box.textContent = letter;
  container.appendChild(box);
  return box;
}

function drawGrid(container) {
  const grid = document.createElement("div");
  grid.className = "grid";
  for (let i = 0; i < 6; i++) {
    for (j = 0; j < 5; j++) {
      drawBox(grid, i, j);
    }
  }
  container.appendChild(grid);
}

function registerKeyboardEvents() {
  document.body.onkeydown = (e) => {
    const key = e.key;

    if (key === "Enter") {
      if (state.currentCol === 5) {
        const word = getCurrentWord();
        console.log(word);
        // if (isWordValid(word)) {
        //   revealWord(word);
        // }
      }
    }
    if (key === "Backspace") {
      deleteLetter();
    }
    if (isLetterKey(key)) {
      playLetter(key);
    }
    updateGrid();
  };
}

function getCurrentWord() {
  word = "";
  for (i = 0; i < state.grid[0].length; i++) {
    word += state.grid[state.currentRow][i];
  }
  return word;
}

function isWordValid(word) { }

function isLetterKey(key) {
  return key.length === 1 && key.match(/[a-z]/i);
}

function playLetter(letter) {
  if (state.currentCol === 5) return;
  state.grid[state.currentRow][state.currentCol] = letter;
  state.currentCol++;
}

function deleteLetter() {
  if (state.currentCol === 0) return;
  state.grid[state.currentRow][state.currentCol - 1] = "";
  state.currentCol--;
}

function startup() {
  const game = document.getElementById("game");
  drawGrid(game);

  registerKeyboardEvents();

  console.log(wordList)
}

startup();
