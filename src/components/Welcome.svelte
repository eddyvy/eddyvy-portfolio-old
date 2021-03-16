<script>
	import { fade } from 'svelte/transition'
	export let visible
</script>

<div class="Welcome">
    {#if visible}
        <h1 transition:fade>
            Hello!!
            <span style='font-size:5rem;'>&#128516;</span>
            <br>Welcome to my portfolio
            <br>My name is Eduard
            <br>Nice to meet you
        </h1>
    {/if}
</div>