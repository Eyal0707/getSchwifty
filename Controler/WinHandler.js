export default class WinHandler {
  constructor() {
    this.currentGameMovesCount = 0;
  }

  IsWin(board) {
    let count = 0;
    for (let row = 0; row < board.length; row++) {
      for (let column = 0; column < board[row].length; column++) {
        count++;
        if (board[row][column] == 0) {
          count = 0;
        }
        if (board[row][column] !== count) {
          return false;
        }
      }
    }
    return true;
  }
}
