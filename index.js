import BoardController from "./Controler/BoardController.js";
import BoardGenarator from "./Controler/BoardGenarator.js";
import MovmentValidator from "./Controler/MovmentValidator.js";
import movmentOptions from "./Controler/MovmentOptions.js";
import BoardMaker from "./View/boradMaker.js";

const boardWidth = 10;
const boardHeight = 5;

const boardGenarator = new BoardGenarator();
let board = boardGenarator.GenarateBoard(boardWidth, boardHeight);
const validator = new MovmentValidator(board, movmentOptions);
const testingBoardController = new BoardController(
  board,
  validator,
  movmentOptions
);

console.log(testingBoardController.gameboard);

var cards = [];
for (let i = 0; i < boardWidth * boardHeight; i++) {
  let card = document.createElement("button");
  card.setAttribute("id", `${i}`);
  card.className += "card";
  if (i == 0) {
    card.style.opacity = "0";
  }
  let text = document.createTextNode(`${i}`);
  card.appendChild(text);
  cards.push(card);
}

const boardMaker = new BoardMaker(cards);
boardMaker.BuildBoard(board);

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    testingBoardController.TryMove(i);
    boardMaker.UpdateBoard(board);
  });
}
