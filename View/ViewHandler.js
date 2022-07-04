export default class ViewHandler {
  constructor(boardMaker, container, alerter) {
    this.boardMaker = boardMaker;
    this.cards = [];
    this.container = container;
    this.alerter = alerter;
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

  GetWidthInput() {
    return document.getElementById("width-input");
  }

  GetHeightInput() {
    return document.getElementById("height-input");
  }

  GetGeneratorButton() {
    return document.getElementById("generator");
  }

  UpdateBoard(board) {
    this.boardMaker.UpdateBoard(board, this.cards);
  }

  BuildBoard(width, height, board) {
    this.container.style.borderWidth = "2px";
    this.alerter.innerHTML = "";
    this.#MakeCards(width, height);
    this.boardMaker.BuildBoard(board, this.cards);
    return this.cards;
  }

  MoveFailed(board, number) {
    console.log(`move failed ${number}`);
  }

  Win() {
    this.container.style.borderWidth = "50px";
    this.alerter.innerHTML = "You Won! click Regenerate To Continue";
  }

  getPlayerName() {
    return document.getElementById("name-input").value;
  }

  displayScoreboard(scoreboard) {
    const scoreHolder = document.getElementById("scoreboard");
    scoreHolder.innerHTML = "<h2>Scoreboard</h2>";
    scoreboard.forEach((element) => {
      let score = document.createElement("h3");
      let text = document.createTextNode(
        `${element.name}|${element.moveCount}|${element.width}x${element.height}`
      );
      score.appendChild(text);
      scoreHolder.appendChild(score);
    });
  }
}
