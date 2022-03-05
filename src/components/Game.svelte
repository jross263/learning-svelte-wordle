<script lang="ts">
  import GameBoard from "./GameBoard.svelte";
  import { Game } from "../Game"

  const game = new Game(6,5);

  let guessState = game.guessState;

  const handleKeydown = (e: KeyboardEvent) => {
    game.keyHandler(e.key) 
    guessState = game.guessState;
  }

</script>

<svelte:window on:keydown={handleKeydown}/>
<GameBoard {guessState}/>