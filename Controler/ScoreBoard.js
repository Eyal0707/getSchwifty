export default class ScoreBoard {
  constructor(view, saver, maxScoresStored) {
    this.saver = saver;
    this.highestScores = this.saver.GetObject("scores") || [];
    this.view = view;
    this.maxScoresStored = maxScoresStored;
  }

  IsTopScore(newWin) {
    for (let i = 0; i < this.highestScores; i++) {
      if (this.heightScores[i] === newWin) {
        return false;
      }
      if (this.heightScores[i].moveCount > newWin.moveCount) {
        return true;
      }
    }
    return ScoreBoard.length < this.maxScoresStored;
  }

  AddNewScore(newWin) {
    if (this.IsTopScore(newWin)) {
      newWin.name = this.view.getPlayerName() || "anonimus";
      this.highestScores.push(newWin);
      this.highestScores.sort((a, b) => a.moveCount - b.moveCount);
      if (this.highestScores.length > this.maxScoresStored) {
        this.highestScores.pop();
      }
    }
    this.saver.SaveObject({ scores: this.highestScores });
    console.log(this.highestScores);
  }
}
