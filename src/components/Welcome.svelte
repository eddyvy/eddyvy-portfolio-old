<script>
    import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition'
    import { welcomeDone } from '../store.js'

    let welcomePress = () => {
        welcomeDone.set(!$welcomeDone)
    }

    onDestroy(() => console.log('Fui destruido'))
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
            <b>Press me!&nbsp;&nbsp;</b>
        </button>
</div>