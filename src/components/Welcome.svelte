<script>
    import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition'
    import { welcomeDone } from '../store.js'
    import { showHeader } from '../store.js'

    let welcomePress = () => {
        welcomeDone.set(!$welcomeDone)
    }

    onDestroy(() => $showHeader = true)
</script>

<div class="Welcome" transition:fade>
        <h1>
            Hello!!
            <span style='font-size:5rem;'>&#128516;</span>
            <br>Welcome to my portfolio
            <br>My name is Eduard
            <br>Nice to meet you
        </h1>
        <button class="button-welcome" type="button" on:click={welcomePress}>
            <b>Press <br>me !</b>
        </button>
</div>

<style>
    .button-welcome {
        padding: 1rem;
        border: 2px solid rgb(207, 207, 207);
        border-radius: 50%;
    }
    .button-welcome:hover {
        box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
    }
</style>