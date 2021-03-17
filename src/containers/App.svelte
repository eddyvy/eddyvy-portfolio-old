<script>
  import Welcome from '../components/Welcome.svelte'
  import Header from '../components/Header.svelte'
  import { welcomeDone } from '../store.js'
  import { showHeader } from '../store.js'

</script>

<div class="App">
  {#if !$welcomeDone}
    <Welcome />
  {/if}
  {#if $showHeader}
    <Header />
  {/if}
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
  :global(main) {
    color: rgb(15, 131, 240);
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
  }
  
  :global(button) {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .App {
    font-size: 1.4rem;
    text-align: center;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95vw;
    height: 94vh;
  }
</style>