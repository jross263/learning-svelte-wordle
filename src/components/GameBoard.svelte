<script lang="ts">
  import type { GuessState } from "src/GuessState";
  import GameRow from "./GameRow.svelte";
  export let guessState: GuessState;
</script>

<div class="board">
  {#each guessState.guesses as guess}
    <GameRow guess={guess} />
  {/each}
</div>

<style>
  .board {
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 5px;
    width: 500px;
    height: 500px;
  }
</style>