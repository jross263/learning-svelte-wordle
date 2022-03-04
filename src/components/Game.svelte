<script lang="ts">
import GameBoard from "./GameBoard.svelte";

  const finalWord = "board"


  let guesses = ['', '', '', '', '', '']
  let currentTurn = 0

  const validInput = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m', 'Backspace', 'Enter'];

  const handleKeydown = (e) => {
    if(!validInput.includes(e.key)) return;
    if(e.key === 'Backspace') {
      guesses[currentTurn] = guesses[currentTurn].slice(0, -1);
    } else if(e.key === 'Enter' && guesses[currentTurn].length == 5) {
      currentTurn++
    } else if(guesses[currentTurn].length < 5 && e.key !== 'Enter') {
      guesses[currentTurn] += e.key;
    }
    console.log(guesses[currentTurn]);
  }
</script>

<svelte:window on:keydown={handleKeydown}/>
<GameBoard {guesses} />