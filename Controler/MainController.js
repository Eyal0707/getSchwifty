export default class MainController {
  constructor(boardController, BoardGenarator, WinHandler, view, scoreBoard) {
    this.boardController = boardController;
    this.BoardGenarator = BoardGenarator;
    this.WinHandler = WinHandler;
    this.view = view;
    this.scoreBoard = scoreBoard;
    this.board;
    this.gameData;
    this.hasWon;
    this.#InitiateBoard(3, 3);
  }

  #InitiateBoard(defaultWidth, defaultHeight) {
    const widthInput = this.view.GetWidthInput();
    const heightInput = this.view.GetHeightInput();
    widthInput.value = defaultWidth;
    heightInput.value = defaultHeight;

    this.GenerateBoard(defaultWidth, defaultHeight);
    this.#AddEventListenerForSizeInputs(widthInput, heightInput);
    this.#AddEventListenerForGenerate(widthInput, heightInput);
  }

  #AddEventListenerForGenerate(widthInput, heightInput) {
    const generator = this.view.GetGeneratorButton();
    generator.addEventListener("click", () => {
      this.GenerateBoard(widthInput.value, heightInput.value);
    });
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
      this.GenerateBoard(e.target.value, heightInput.value);
    });
    heightInput.addEventListener("change", (e) => {
      this.GenerateBoard(widthInput.value, e.target.value);
    });
  }

  GenerateBoard(width, height) {
    if (width > 1 && height > 1) {
      this.board = this.BoardGenarator.GenerateBoard(width, height);
      const cards = this.view.BuildBoard(width, height, this.board);
      this.#AddEventListenersForCards(cards);
      this.gameData = new GameData(width, height);
      this.hasWon = false;
    }
  }

  MoveCard(number) {
    if (!this.hasWon) {
      if (!this.boardController.TryMove(this.board, number)) {
        this.view.MoveFailed(this.board, number);
      } else {
        this.view.UpdateBoard(this.board);
        this.gameData.MoveMade();
        if (this.WinHandler.IsWin(this.board)) {
          this.view.Win();
          this.hasWon = true;
          this.scoreBoard.AddNewScore(this.gameData);
        }
      }
    }
  }
}

class GameData {
  constructor(width, height) {
    this.moveCount = 0;
    this.width = width;
    this.height = height;
    this.date = Date.now();
    this.name;
  }

  MoveMade() {
    this.moveCount++;
  }
}
