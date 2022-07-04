export default class GameData {
  constructor(width, height) {
    this.moveCount = 0;
    this.width = width;
    this.height = height;
    this.date = Date.now();
    this.name;
  }

  MoveMade() {
    this.moveCount++;
  }
}
