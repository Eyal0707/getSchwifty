export default class BoardController {
  constructor(movmentValidator, movmentOptions) {
    this.validator = movmentValidator;
    this.movmentOptions = movmentOptions;
  }

  Move(board, originColumn, originRow, destColumn, destRow) {
    let destValue = board[destRow][destColumn];
    board[destRow][destColumn] = board[originRow][originColumn];
    board[originRow][originColumn] = destValue;
  }

  TryMoveWithCoords(board, column, row) {
    let canMove = false;
    this.movmentOptions.forEach((option) => {
      if (
        this.validator.IsInBoard(board, option.column(column), option.row(row))
      ) {
        if (board[option.row(row)][option.column(column)] == 0) {
          this.Move(board, column, row, option.column(column), option.row(row));
          canMove = true;
        }
      }
    });
    return canMove;
  }

  TryMove(board, number) {
    for (let row = 0; row < board.length; row++) {
      for (let column = 0; column < board.length; column++) {
        if (board[row][column] == number) {
          return this.TryMoveWithCoords(board, column, row);
        }
      }
    }
    return false;
  }
}
