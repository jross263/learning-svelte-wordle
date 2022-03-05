import { GuessState } from './GuessState';

export class Game {
  private _guessState: GuessState;
  private validInput: string[];
  private controlKeys: string[];
  private currentTurn: number;
  private wordLength: number;
  private finalWord: string = 'hello';

  constructor(numberOfGuesses: number, wordLength: number) {
    this._guessState = new GuessState(numberOfGuesses, wordLength);
    this.validInput = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.controlKeys = ['Backspace', 'Enter'];
    this.currentTurn = 0;
    this.wordLength = wordLength;
  }

  public keyHandler(key: string): void {
    const currGuess = this._guessState.getGuess(this.currentTurn)
    if(!this.validInput.includes(key) && !this.controlKeys.includes(key)) return;
    if(key === 'Backspace') {
      currGuess.removeLetter();
    } else if(key === 'Enter' && currGuess.length === this.wordLength) {
      currGuess.colours = this.computeColours(currGuess.guess);
      this.currentTurn++;
    }else if(!this.controlKeys.includes(key)) {
      currGuess.addLetter(key);
    }    
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