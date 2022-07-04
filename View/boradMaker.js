export default class BoardMaker {
  constructor(cards) {
    this.cards = cards;
    this.container = document.getElementById("board-container");
  }

  #StyleCard(width, height, card) {
    card.style.width = `${(100 / width) * 0.8}%`;
    card.style.height = `${(100 / height) * 0.8}%`;
    card.style.margin = `${(100 / height) * 0.1}% 
        ${(100 / width) * 0.1}%`;
    return card;
  }

  BuildBoard(board) {
    board.forEach((row) => {
      row.forEach((element) => {
        this.cards[element] = this.#StyleCard(
          row.length,
          board.length,
          this.cards[element]
        );
        this.container.appendChild(this.cards[element]);
      });
    });
  }

  UpdateBoard(board) {
    this.container.innerHTML = "";
    board.forEach((row) => {
      row.forEach((element) => {
        this.container.appendChild(this.cards[element]);
      });
    });
  }
}
