<script lang="ts">
  import GameBoard from "./GameBoard.svelte";

  let finalWord = 'board'


  let input = ''
  let colours = []

  const validInput = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m', 'Backspace', 'Enter'];

  const computeColors = (word: string) => {
    const colours = []
    for(let i = 0; i < word.length; i++) {
      const char = word[i];
      if(finalWord[i] === char) {
        colours.push('green')
      }else if(finalWord.includes(char)) {
        colours.push('yellow')
      }else {
        colours.push('red')
      }
    }
    return colours;
  }

  const handleKeydown = (e) => {
    if(!validInput.includes(e.key)) return;
    if(e.key === 'Backspace') {
      input = input.slice(0, input.length - 1);
    } else if(e.key === 'Enter') {
      if(input.length === finalWord.length){
        colours = computeColors(input)
      }
    } else if(input.length < finalWord.length) {
      input += e.key;
    }
  }
</script>

<svelte:window on:keydown={handleKeydown}/>
<GameBoard {input} {colours} />