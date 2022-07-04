export default class MainController {
  constructor(boardController, BoardGenarator, winDetector, view) {
    this.boardController = boardController;
    this.BoardGenarator = BoardGenarator;
    this.winDetector = winDetector;
    this.view = view;
    this.board;
    this.#InitiateBoard(3, 3);
  }

  #InitiateBoard(defaultWidth, defaultHeight) {
    const widthInput = this.view.GetWidthInput();
    const heightInput = this.view.GetHeightInput();
    widthInput.value = defaultWidth;
    heightInput.value = defaultHeight;

    this.GenarateBoard(defaultWidth, defaultHeight);
    this.#AddEventListenerForSizeInputs(widthInput, heightInput);
  }

  #AddEventListenersForCards(cards) {
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", () => {
        this.MoveCard(i);
      });
    }
  }

  #AddEventListenerForSizeInputs(widthInput, heightInput) {
    widthInput.addEventListener("change", (e) => {
      this.GenarateBoard(e.target.value, heightInput.value);
    });
    heightInput.addEventListener("change", (e) => {
      this.GenarateBoard(widthInput.value, e.target.value);
    });
  }

  GenarateBoard(width, height) {
    if (width > 1 && height > 1) {
      this.board = this.BoardGenarator.GenarateBoard(width, height);
      const cards = this.view.BuildBoard(width, height, this.board);
      this.#AddEventListenersForCards(cards);
    }
  }

  MoveCard(number) {
    if (!this.boardController.TryMove(this.board, number)) {
      this.view.MoveFailed(this.board, number);
    } else {
      this.view.UpdateBoard(this.board);
      if (this.winDetector.IsWin(this.board)) {
        this.view.Win();
      }
    }
  }
}
