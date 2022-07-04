export default class MovmentValidator {
  constructor(board, movmentOptions) {
    this.board = board;
    this.movmentOptions = movmentOptions;
  }

  IsInBoard(column, row) {
    if (row < this.board.length && row >= 0) {
      if (column < this.board[row].length && column >= 0) {
        return true;
      }
    }
    return false;
  }

  CanMove(column, row) {
    let canMove = false;
    this.movmentOptions.forEach((option) => {
      if (this.IsInBoard(option.column(column), option.row(row))) {
        if (this.board[option.row(row)][option.column(column)] == 0) {
          canMove = true;
        }
      }
    });
    return canMove;
  }
}
