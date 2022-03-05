<script lang="ts">
  export let letter;
  export let colour = '';

  const coloursLookup = {
    'red': '#ff0000',
    'green': '#00ff00',
    'yellow': '#ffff00',
  };
  

</script>

<div class="game-tile" style="{colour && `background-color: ${coloursLookup[colour]};`}">
  <h1>{letter ? letter.toUpperCase() : ''}</h1>
</div>

<style>
  .game-tile {
    display: flex;
    background-color: #eee;
    border: 1px solid #ccc;
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
  }
</style>