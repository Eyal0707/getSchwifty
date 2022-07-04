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
}
