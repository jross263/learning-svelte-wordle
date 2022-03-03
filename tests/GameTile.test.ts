import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import GameTile from '../src/components/GameTile.svelte';

describe("GameTile.svelte", () => {
  it("should render a letter", () => {
    render(GameTile, {letter: 'a'})
    screen.getByRole('heading', {name: 'A'})
  });
})