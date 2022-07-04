export default class MovmentValidator {
  constructor(movmentOptions) {
    this.movmentOptions = movmentOptions;
  }

  IsInBoard(board, column, row) {
    if (row < board.length && row >= 0) {
      if (column < board[row].length && column >= 0) {
        return true;
      }
    }
    return false;
  }
}
