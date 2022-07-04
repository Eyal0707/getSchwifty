import BoardController from "./Controler/BoardController.js";
import BoardGenarator from "./Controler/BoardGenarator.js";
import MovmentValidator from "./Controler/MovmentValidator.js";
import movmentOptions from "./Controler/MovmentOptions.js";
import BoardMaker from "./View/boradMaker.js";

const testGameBoard = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0],
];

const boardGenarator = new BoardGenarator();
let board = boardGenarator.GenarateBoard(3, 3);
const validator = new MovmentValidator(board, movmentOptions);
const testingBoardController = new BoardController(
  board,
  validator,
  movmentOptions
);

console.log(testingBoardController.gameboard);

const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8].Map((element) => {
  let card = document.createElement("button");
  let text = document.createTextNode(`${element}`);
  card.appendChild(text);
  card.setAttribute("id", `${element}`);
});
const boardMaker = new BoardMaker(cards);
boardMaker.BuildBoard();

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    console.log(testingBoardController.TryMove(i + 1));
    console.log(board);
  });
}
