<script>
  import Header from '../components/Header.svelte'
</script>

<div class="App">
  <Header />
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
  
  :global(input) {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .App {
    font-size: 1.4rem;
    text-align: center;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
</style>