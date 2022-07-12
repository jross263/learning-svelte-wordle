import { GuessState } from './GuessState';
import { words } from './words';

export class Game {
  private _guessState: GuessState;
  private _isLoss: boolean = false;
  private _isWon: boolean = false;
  private validInput: string[];
  private controlKeys: string[];
  private currentTurn: number;
  private wordLength: number;
  private finalWord: string;
  constructor() {
    this.finalWord = words[Math.floor(Math.random() * words.length)]
    this._guessState = new GuessState();
    this.validInput = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.controlKeys = ['backspace', 'enter'];
    this.currentTurn = 0;
    this.wordLength = 5;
  }

  public keyHandler(eKey: string): void {
    const key = eKey.toLowerCase();
    const isValidKey = this.validInput.includes(key);
    const isControlKey = this.controlKeys.includes(key);

    if(!(isValidKey || isControlKey)) return; // invalid input
    if(this._isLoss || this._isWon) return; // game is over

    const currGuess = this._guessState.getGuess(this.currentTurn)
    
    if(key === 'backspace') {
      currGuess.removeLetter();
    } else if(key === 'enter' && currGuess.length === this.wordLength) {
      currGuess.colours = this.computeColours(currGuess.guess);
      this.isGameOver();
      this.currentTurn++;
    }else if(!this.controlKeys.includes(key)) {
      currGuess.addLetter(key);
    }    
  }

  get isLoss(): boolean {
    return this._isLoss;
  }

  get isWon(): boolean {
    return this._isWon;
  }

  private isGameOver(): boolean {
    this._isWon = this.finalWord === this._guessState.getGuess(this.currentTurn).guess;
    this._isLoss = this.currentTurn === (this._guessState.guesses.length - 1) && !this._isWon;
    return this._isWon || this._isLoss;
  }

  private computeColours(word: string): string[] {
      const colours = []
      for(let i = 0; i < word.length; i++) {
        const char = word[i];
        if(this.finalWord[i] === char) {
          colours.push('green')
        }else if(this.finalWord.includes(char)) {
          colours.push('yellow')
        }else {
          colours.push('red')
        }
      }
      return colours;
  }

  get guessState(): GuessState {
    return this._guessState;
  }

}