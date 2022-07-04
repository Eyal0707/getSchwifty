export default class BoardMaker {
  constructor(cards) {
    this.cards = cards;
    this.container = document.getElementById("board-container");
  }

  BuildBoard(board) {
    board.forEach((row) => {
      row.forEach((element) => {
        this.container.appendChild(this.cards[element]);
      });
    });
  }

  UpdateBoard(board) {}
}
