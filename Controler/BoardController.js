export default class BoardController {
  constructor(gameboard, movmentValidator, movmentOptions) {
    this.gameboard = gameboard;
    this.validator = movmentValidator;
    this.movmentOptions = movmentOptions;
  }

  Move(originColumn, originRow, destColumn, destRow) {
    let destValue = this.gameboard[destRow][destColumn];
    this.gameboard[destRow][destColumn] =
      this.gameboard[originRow][originColumn];
    this.gameboard[originRow][originColumn] = destValue;
  }

  TryMoveWithCoords(column, row) {
    let canMove = false;
    this.movmentOptions.forEach((option) => {
      if (this.validator.IsInBoard(option.column(column), option.row(row))) {
        if (this.gameboard[option.row(row)][option.column(column)] == 0) {
          this.Move(column, row, option.column(column), option.row(row));
          canMove = true;
        }
      }
    });
    return canMove;
  }

  TryMove(number) {
    for (let row = 0; row < this.gameboard.length; row++) {
      for (let column = 0; column < this.gameboard.length; column++) {
        if (this.gameboard[row][column] == number) {
          return this.TryMoveWithCoords(column, row);
        }
      }
    }
  }
}
