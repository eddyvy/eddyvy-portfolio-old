<script>
  import Welcome from '../components/Welcome.svelte'
  import Header from '../components/Header.svelte'
  import Content from '../components/Content.svelte'
  import { welcomeDone } from '../store.js'
  import { showHeader } from '../store.js'

</script>

<div class="App" id="App">
  {#if !$welcomeDone}
    <Welcome />
  {/if}
  {#if $showHeader}
    <Header />
    <Content />
  {/if}
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

  :global(:root) {
		--theme-color: rgb(15, 131, 240);
	}

  :global(main) {
    color: var(--theme-color);
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 95vw;
    min-height: 94vh;
  }
</style>