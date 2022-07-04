import BoardController from "./Controler/BoardController.js";
import BoardGenarator from "./Controler/BoardGenarator.js";
import MovmentValidator from "./Controler/MovmentValidator.js";
import movmentOptions from "./Controler/MovmentOptions.js";
import BoardMaker from "./View/boradMaker.js";

const boardGenarator = new BoardGenarator();
let board = boardGenarator.GenarateBoard(3, 3);
const validator = new MovmentValidator(board, movmentOptions);
const testingBoardController = new BoardController(
  board,
  validator,
  movmentOptions
);

console.log(testingBoardController.gameboard);

const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((element) => {
  let card = document.createElement("button");
  card.setAttribute("id", `${element}`);
  card.className += "card";
  if (element == 0) {
    card.className += " emptySpace";
  }
  let text = document.createTextNode(`${element}`);
  card.appendChild(text);
  return card;
});

const boardMaker = new BoardMaker(cards);
boardMaker.BuildBoard(board);

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    testingBoardController.TryMove(i);
    boardMaker.UpdateBoard(board);
  });
}
