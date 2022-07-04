export default class BoardMaker {
  constructor(container) {
    this.container = container;
  }

  #StyleCard(width, height, card) {
    card.style.width = `${(100 / width) * 0.8}%`;
    card.style.height = `${(100 / height) * 0.8}%`;
    card.style.margin = `${(100 / height) * 0.1}% 
        ${(100 / width) * 0.1}%`;
    return card;
  }

  BuildBoard(board, cards) {
    this.container.innerHTML = "";
    board.forEach((row) => {
      row.forEach((element) => {
        cards[element] = this.#StyleCard(
          row.length,
          board.length,
          cards[element]
        );
        this.container.appendChild(cards[element]);
      });
    });
  }

  UpdateBoard(board, cards) {
    this.container.innerHTML = "";
    board.forEach((row) => {
      row.forEach((element) => {
        this.container.appendChild(cards[element]);
      });
    });
  }

  moveFailed(numnber) {
    console.log(number);
  }
}
