export default class BoardController {
  constructor(gameboard) {
    this.gameboard = gameboard;
  }

  ZeroCheck(column, row) {
    if (row < this.gameboard.length) {
      if (column < this.gameboard[column].length) {
        return this.gameboard[(row, column)];
      }
    }
    return false;
  }

  Move(originColumn, originRow, destColumn, destRow) {
    destValue = this.gameboard[destRow][destColumn];
    this.gameboard[destRow][destColumn] =
      this.gameboard[originRow][originColumn];
  }

  TryMove(column, row) {
    if (this.gameboard[(row, column)] > 0) {
      if (this.ZeroCheck(column + 1, row)) {
        this.Move(column, row, column + 1, row);
        return true;
      } else if (this.ZeroCheck(column - 1, row)) {
        this.Move(column, row, column - 1, row);
        return true;
      } else if (this.ZeroCheck(column, row + 1)) {
        this.Move(column, row, column, row + 1);
        return true;
      } else if (this.ZeroCheck(column, row - 1)) {
        this.Move(column, row, column, row - 1);
        return true;
      }
    }
    return false;
  }
}
