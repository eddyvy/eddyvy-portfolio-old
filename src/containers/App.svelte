<script>
  import Welcome from '../components/Welcome.svelte'
</script>

<div class="App">
  <Welcome />
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
  :global(main) {
    color: rgb(15, 131, 240);
    font-family: 'Open Sans', sans-serif;
  }
  
  .App {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
</style>