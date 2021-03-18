<script>
    import { tweened } from 'svelte/motion'
    import { cubicOut } from 'svelte/easing'
    import { selectedInfo } from '../store.js'

    export let buttonValue

    const underlining = tweened(0, {
        duration: 400,
        easing: cubicOut
    })
    const fillUnderline = () => {
        underlining.set(100)
    }
    const unFillUnderline = () => {
        underlining.set(0)
    }

    const selecting = () => {
        selectedInfo.set(buttonValue)
    }
        
</script>

<button class="Header-button" on:click={selecting} on:mouseover={fillUnderline} on:mouseout={unFillUnderline}>
    {buttonValue}
    <div class="Header-button-underline" style="width: {$underlining}%;"></div>
</button>

<style>
    .Header-button {
        margin: 1rem, 0, 1rem, 1rem;
        padding: 1rem;
        font-weight: bold;
    }
    .Header-button-underline {
        height: 2px;
        border-top: solid 2px var(--theme-color);
    }
</style>