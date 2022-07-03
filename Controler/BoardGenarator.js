export default class BoardGenarator {
  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  CountFlips(board, numberColumn, numberRow) {
    let counter = 0;
    for (let row = numberRow; row < board.length; row++) {
      for (
        let column = numberRow == row ? numberColumn : 0;
        column < board[row].length;
        column++
      ) {
        if (
          board[numberRow][numberColumn] > board[row][column] &&
          board[row][column] > 0
        ) {
          counter++;
        }
      }
    }
    return counter;
  }

  IsBoardValid(board) {
    let flipCount = 0;
    let spaceRow;
    for (let row = 0; row < board.length; row++) {
      for (let column = 0; column < board[row].length; column++) {
        flipCount += this.CountFlips(board, column, row);
        if (board[row][column] == 0) {
          spaceRow = row;
        }
      }
    }

    if (board.length % 2 === 0) {
      return (flipCount + spaceRow + 1) % 2 === 0;
    }
    return flipCount % 2 === 0;
  }

  GenarateBoard(rows, columns) {
    //separate to diffrent functions
    do {
      length = rows * columns;
      let numbers = [];
      for (let i = 0; i < length; i++) {
        numbers.push(i);
      }
      var board = [];
      for (let row = 0; row < rows; row++) {
        board.push([]);
        for (let column = 0; column < columns; column++) {
          let numberToPlaceIndex = this.getRndInteger(0, numbers.length);
          board[row].push(numbers[numberToPlaceIndex]);
          numbers.splice(numberToPlaceIndex, 1);
        }
      }
    } while (!this.IsBoardValid(board));
    return board;
  }
}
