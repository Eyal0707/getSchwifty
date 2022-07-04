export default class MainController {
  constructor(boardController, BoardGenarator, winDetector, view) {
    this.boardController = boardController;
    this.BoardGenarator = BoardGenarator;
    this.winDetector = winDetector;
    this.view = view;
    this.board = this.GenarateBoard(3, 3);
  }

  #AddEventListenersForCards(cards) {
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", () => {
        this.MoveCard(i);
      });
    }
  }

  GenarateBoard(width, height) {
    if (width > 0 && height > 0) {
      this.board = this.BoardGenarator.GenarateBoard(width, height);
      const cards = this.view.BuildBoard(width, height, this.board);
      this.#AddEventListenersForCards(cards);
    }
  }

  MoveCard(number) {
    if (!this.boardController.TryMove(number)) {
      this.view.moveFailed(this.board, number);
    }
    if (this.winDetector.IsWin(this.board)) {
      this.view.updateBoard(this.board);
      this.view.Win();
    }
  }
}
