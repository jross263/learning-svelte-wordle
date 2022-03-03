<script lang="ts">
  import GameRow from './components/GameRow.svelte';
</script>

<main>
  <div class="board">
      <GameRow word="This"/>
      <GameRow word="is"/>
      <GameRow word="a"/>
      <GameRow word="wordle"/>
      <GameRow word="board"/>
      <GameRow />
  </div>
</main>

<style>

  .board {
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 5px;
    width: 500px;
    height: 500px;
  }
  
</style>
