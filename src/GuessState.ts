import { GameGuess } from "./GameGuess";

export class GuessState {
  private _guesses: GameGuess[];
  
  constructor(numberOfGuesses: number, wordLength: number) {
    this._guesses = [];
    for (let i = 0; i < numberOfGuesses; i++) {
      this._guesses.push(new GameGuess(wordLength));
    }

  }
  get guesses(): GameGuess[] {
    return this._guesses;
  }
  public getGuess(index: number): GameGuess {
    return this._guesses[index];
  }
}