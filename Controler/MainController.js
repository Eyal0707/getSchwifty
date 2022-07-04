import BoardController from "./BoardController";

export default class MainController {
  constructor(boardController, BoardGenarator, view) {
    this.boardController = boardController;
    this.BoardGenarator = BoardGenarator;
    this.view = view;
  }

  GenarateBoard(width, height) {
    if (width > 0 && height > 0) {
      this.boardController.gameboard = this.BoardGenarator.GenarateBoard(
        width,
        height
      );
    }
  }

  MoveCard(number) {
    if (!this.boardController.TryMove(number)) {
      this.view.moveFailed(number);
    }
    this.view.updateBoard(this.boardController.gameboard);
  }
}
