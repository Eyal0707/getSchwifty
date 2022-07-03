import BoardController from "./BoardController.js";
import BoardGenarator from "./BoardGenarator.js";

const testGameBoard = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0],
];

const boardGenarator = new BoardGenarator();
const testingBoardController = new BoardController(
  boardGenarator.GenarateBoard(3, 3)
);

console.log(testingBoardController.gameboard);

const buttons = [
  document.getElementById("1"),
  document.getElementById("2"),
  document.getElementById("3"),
  document.getElementById("4"),
  document.getElementById("5"),
  document.getElementById("6"),
  document.getElementById("7"),
  document.getElementById("8"),
];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    console.log(testingBoardController.TryMove(i + 1));
    console.log(testingBoardController.gameboard);
  });
}
