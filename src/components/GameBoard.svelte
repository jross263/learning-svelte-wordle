<script lang="ts">
  import GameRow from "./GameRow.svelte";
  export let guesses;
</script>

<div class="board">
  <GameRow word={guesses[0]} />
  <GameRow word={guesses[1]} />
  <GameRow word={guesses[2]} />
  <GameRow word={guesses[3]} />
  <GameRow word={guesses[4]} />
  <GameRow word={guesses[5]} />
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