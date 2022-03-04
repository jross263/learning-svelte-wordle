<script lang="ts">
  import GameTile from "./GameTile.svelte";
  export let word;
</script>

<div class="row">
  {#each Array(5) as _, i}
    <GameTile letter={word ? word[i] : undefined}/>
  {/each}
</div>

<style>
  .row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 5px;
  }
</style>

