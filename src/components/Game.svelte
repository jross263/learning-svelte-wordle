<script lang="ts">
  import GameBoard from "./GameBoard.svelte";
  import { Game } from "../Game"
  import Keyboard from "./Keyboard.svelte";

  let game = new Game();

  let isWon = game.isWon;
  let isLose = game.isLoss;
  let guessState = game.guessState;

  const recomputeState = () => {
    isWon = game.isWon;
    isLose = game.isLoss;
    guessState = game.guessState;
  }

  const resetGame = () => {
    game = new Game();
    recomputeState();
  }

  const handleKeydown = (e: KeyboardEvent) => {
    game.keyHandler(e.key) 
    recomputeState();
  }

</script>

<svelte:window on:keydown={handleKeydown}/>
<GameBoard {guessState}/>
{#if isWon || isLose}
  <h1>You {isWon ? "Won" : "Lost"}</h1>
  <button on:click={resetGame}>Reset Game</button>
{/if}
<Keyboard {handleKeydown}/>