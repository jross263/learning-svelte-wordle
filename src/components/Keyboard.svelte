<script>
  const row1 = ['Q','W','E','R','T','Y','U','I','O','P'];
  const row2 = ['A','S','D','F','G','H','J','K','L'];
  const row3 = ['ENTER','Z','X','C','V','B','N','M', 'BACKSPACE'];
  
  export let handleKeydown;
  
  const test = (letter) => {
    handleKeydown(new KeyboardEvent('keydown', {
      key:letter
    }));
  }
</script>

<div class="container">
  <div class="row">
    {#each row1 as letter}
      <button on:click={() => test(letter)}>{letter}</button>
    {/each}
  </div>
  <div class="row">
    {#each row2 as letter}
      <button on:click={() => test(letter)}>{letter}</button>
    {/each}
  </div>
  <div class="row">
    {#each row3 as letter}
      <button on:click={() => test(letter)}>{letter}</button>
    {/each}
  </div>
</div>

<style>
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .row {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>