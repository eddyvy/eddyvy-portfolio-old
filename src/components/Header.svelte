<script>
    import { fade } from 'svelte/transition'
    import Contact from './Contact.svelte'
    import HeaderButton from './HeaderButton.svelte'

</script>

<div class="Header" transition:fade>
    <Contact/>
    <nav class="Header-nav">
        <HeaderButton buttonValue="About me"/>
        <HeaderButton buttonValue="Objectives"/>
        <HeaderButton buttonValue="Knowledge"/>
        <HeaderButton buttonValue="Experience"/>
        <HeaderButton buttonValue="Hobbies"/>
    </nav>
</div>

<style>
    .Header {
        position: relative;
        align-self: flex-start;
    }
</style>