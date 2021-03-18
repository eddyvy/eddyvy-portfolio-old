<script>
    import { fade } from 'svelte/transition'
    import Contact from './Contact.svelte'
    import HeaderButton from './HeaderButton.svelte'
    import { infoContent } from '../store.js'

</script>

<div class="Header" transition:fade>
    <Contact/>
    <nav class="Header-nav">
        {#each infoContent as content}
            <HeaderButton buttonValue={content}/>
        {/each}
    </nav>
</div>

<style>
    .Header {
        position: relative;
        top: 0;
    }
    @media (max-width: 500px) {
        .Header-nav {
            display: flex;
            flex-direction: column;
        }
    }
</style>