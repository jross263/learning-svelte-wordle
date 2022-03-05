<script lang="ts">
  import GameRow from "./GameRow.svelte";
  export let input;
  export let colours;

  $: console.log(input, colours);
</script>

<div class="board">
  <GameRow {input} {colours}/>
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