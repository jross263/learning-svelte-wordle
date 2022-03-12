import { GameGuess } from "./GameGuess";

export class GuessState {
  private _guesses: GameGuess[];
  
  constructor() {
    this._guesses = [];
    for (let i = 0; i < 6; i++) {
      this._guesses.push(new GameGuess(5));
    }

  }
  get guesses(): GameGuess[] {
    return this._guesses;
  }
  public getGuess(index: number): GameGuess {
    return this._guesses[index];
  }
}