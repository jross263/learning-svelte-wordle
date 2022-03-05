export class GameGuess {
  private _guess: string;
  private _colours: string[];
  private _maxLength: number;
  constructor(wordLength){
    this._guess = '';
    this._colours = [];
    this._maxLength = wordLength;

  }
  
  get guess(): string {
    return this._guess;
  }

  get colours(): string[] {
    return this._colours;
  }

  set colours(colours: string[]) {
    this._colours = colours;
  }

  get length(): number {
    return this._guess.length;
  }

  get maxLength(): number {
    return this._maxLength;
  }

  public addLetter(letter: string): void {
    if(this.length === this.maxLength) return;
    this._guess += letter;
  }

  public removeLetter(): void {
    this._guess = this._guess.slice(0, -1);
  }
}