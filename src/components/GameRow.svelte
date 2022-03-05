<script lang="ts">
  import type { GameGuess } from "src/GameGuess";
  import GameTile from "./GameTile.svelte";
  export let guess: GameGuess;
</script>

<div class="row">
  {#each Array(guess.maxLength) as _, i}
    <GameTile letter={guess.guess[i]} colour={guess.colours[i]}/>
  {/each}
</div>

<style>
  .row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 5px;
  }
</style>

