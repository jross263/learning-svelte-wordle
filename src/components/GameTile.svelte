<script lang="ts">
  export let letter = '';
</script>

<div class="game-tile">
  <h1>{letter[0] ? letter.toUpperCase() : ''}</h1>
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