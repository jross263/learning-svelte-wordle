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
  {letter ? letter.toUpperCase() : ''}
</div>

<style>
  .game-tile {
    display: flex;
    background-color: #eee;
    border: 1px solid #ccc;
    width: 62px;
    height: 62px;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    line-height: 2rem;
    font-weight: bold;
  }
</style>