<script>
    import { fade } from 'svelte/transition'
    import Contact from './Contact.svelte'

</script>

<div class="Header" transition:fade>
    <Contact/>
    <nav class="Header-nav">
        <button class="Header-button">
            About me
        </button>
        <button class="Header-button">
            Objectives
        </button>
        <button class="Header-button">
            Knowledge
        </button>
        <button class="Header-button">
            Skills
        </button>
        <button class="Header-button">
            Experience
        </button>
    </nav>
</div>

<style>
    .Header {
        position: fixed;
        top: 0;
    }
    .Header-button {
        margin: 1rem;
        padding: 1rem;
    }
</style>