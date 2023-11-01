import Game from "./game.js";

const hitButton = document.getElementById("hitButton");
const stickButton = document.getElementById("stickButton");
const nextHandButton = document.getElementById("nextHandButton");
const newGameButton = document.getElementById("newGameButton");

let game = new Game();
let clickable = true;

hitButton.addEventListener("click", () => {
  if (!clickable) return;
  stopDoubleClick();

  game.hit();
  game.updateDisplay();
});

stickButton.addEventListener("click", () => {
  if (!clickable) return;
  stopDoubleClick();

  game.stick();
});

newGameButton.addEventListener("click", () => {
  if (!clickable) return;
  stopDoubleClick();

  game.reset();
  game.updateDisplay();
});

function stopDoubleClick() {
  clickable = false;
  setTimeout(function () {
    clickable = true;
  }, 500);
}
