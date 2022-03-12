import { describe, expect, it } from 'vitest';
import { GuessState } from '../src/GuessState';
import { GameGuess } from '../src/GameGuess';

describe('GuessState.ts', () => {
  it("creates an object with 6 empty GameGuess objects", () => {
    const guessState = new GuessState();
    expect(guessState.guesses.length).toBe(6);
    for(let i = 0; i < 6; i++) {
      expect(guessState.guesses[i]).toBeInstanceOf(GameGuess);
      expect(guessState.guesses[i].guess).toBe('');
      expect(guessState.guesses[i].colours).toEqual([]);
      expect(guessState.guesses[i].length).toBe(0);
      expect(guessState.guesses[i].maxLength).toBe(5);
    }
  })
})