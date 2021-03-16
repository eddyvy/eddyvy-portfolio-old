<script>
    import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition'
    import { welcomeDone } from '../store.js'
    import { showHeader } from '../store.js'

    let welcomePress = () => {
        welcomeDone.set(!$welcomeDone)
    }

    onDestroy(() => $showHeader = true)
    onDestroy(() => console.log($showHeader))
</script>

<div class="Welcome" transition:fade>
        <h1>
            Hello!!
            <span style='font-size:5rem;'>&#128516;</span>
            <br>Welcome to my portfolio
            <br>My name is Eduard
            <br>Nice to meet you
        </h1>
        <button class="button-continue" type="button" on:click={welcomePress}>
            <b>Press me!</b>
        </button>
</div>