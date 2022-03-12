import { describe, expect, it } from 'vitest';
import { GameGuess } from '../src/GameGuess';

describe("GameGuess.ts", () => {
  it("can create a new game guess", () => {
    const gameGuess = new GameGuess(5);
    expect(gameGuess.guess).toBe('');
    expect(gameGuess.colours).toEqual([]);
    expect(gameGuess.length).toBe(0);
    expect(gameGuess.maxLength).toBe(5);
  })

  it("can add a letter to the guess", () => {
    const gameGuess = new GameGuess(5);
    gameGuess.addLetter('a');
    expect(gameGuess.guess).toBe('a');
    expect(gameGuess.length).toBe(1);
  })

  it("can remove a letter from the guess", () => {
    const gameGuess = new GameGuess(5);
    gameGuess.addLetter('a');
    gameGuess.removeLetter();
    expect(gameGuess.guess).toBe('');
    expect(gameGuess.length).toBe(0);
  })

  it("will not let you enter more characters then the max length", () => {
    const gameGuess = new GameGuess(5);
    gameGuess.addLetter('a');
    gameGuess.addLetter('b');
    gameGuess.addLetter('c');
    gameGuess.addLetter('d');
    gameGuess.addLetter('e');
    expect(gameGuess.guess).toBe('abcde');
    expect(gameGuess.length).toBe(5); 
    gameGuess.addLetter('f');
    expect(gameGuess.guess).toBe('abcde');
    expect(gameGuess.length).toBe(5);
  })

  it("to have no effect when removing no letters", () => {
    const gameGuess = new GameGuess(5);
    gameGuess.removeLetter();
    expect(gameGuess.guess).toBe('');
    expect(gameGuess.length).toBe(0);
  })  
})