export default class BoardController {
  constructor(gameboard) {
    this.gameboard = gameboard;
  }

  IsValidSlot(column, row) {
    if (row < this.gameboard.length && row > 0) {
      if (column < this.gameboard[row].length && column > 0) {
        return this.gameboard[row][column] == 0;
      }
    }
    return false;
  }

  Move(originColumn, originRow, destColumn, destRow) {
    let destValue = this.gameboard[destRow][destColumn];
    this.gameboard[destRow][destColumn] =
      this.gameboard[originRow][originColumn];
    this.gameboard[originRow][originColumn] = destValue;
  }

  TryMoveWithCoords(column, row) {
    if (this.gameboard[row][column] > 0) {
      if (this.IsValidSlot(column + 1, row)) {
        this.Move(column, row, column + 1, row);
        return true;
      } else if (this.IsValidSlot(column - 1, row)) {
        this.Move(column, row, column - 1, row);
        return true;
      } else if (this.IsValidSlot(column, row + 1)) {
        this.Move(column, row, column, row + 1);
        return true;
      } else if (this.IsValidSlot(column, row - 1)) {
        this.Move(column, row, column, row - 1);
        return true;
      }
      console.log("no empty space around");
    }
    return false;
  }

  TryMove(number) {
    console.log(number);
    for (let row = 0; row < this.gameboard.length; row++) {
      for (let column = 0; column < this.gameboard.length; column++) {
        if (this.gameboard[row][column] == number) {
          return this.TryMoveWithCoords(column, row);
        }
      }
    }
    console.log("couldn't find number in board");
    return false;
  }
}
