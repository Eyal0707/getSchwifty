export default class ViewHandler {
  constructor(boardMaker) {
    this.boardMaker = boardMaker;
    this.cards = [];
  }

  #MakeCards(width, height) {
    this.cards = [];
    for (let i = 0; i < width * height; i++) {
      var card = document.createElement("button");
      card.setAttribute("id", `${i}`);
      card.className += "card";
      if (i == 0) {
        card.style.opacity = "0";
      }
      let text = document.createTextNode(`${i}`);
      card.appendChild(text);
      this.cards.push(card);
    }
  }

  BuildBoard(width, height, board) {
    this.#MakeCards(width, height);
    this.boardMaker.BuildBoard(board, this.cards);
    return this.cards;
  }

  MoveFailed(board, number) {
    console.log(`move failed ${number}`);
  }

  Win() {
    console.log;
  }
}
