<script>
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

    export let buttonValue

    const underlining = tweened(0, {
        duration: 400,
        easing: cubicOut
    });

    const fillUnderline = () => {
        underlining.set(100)
    }

    const unFillUnderline = () => {
        underlining.set(0)
    }
</script>

<button class="Header-button" on:mouseover={fillUnderline} on:mouseout={unFillUnderline}>
    {buttonValue}
    <div class="Header-button-underline" style="width: {$underlining}%;"></div>
</button>

<style>
    .Header-button {
        margin: 1rem;
        padding: 1rem;
    }
    .Header-button-underline {
        height: 2px;
        border-top: solid 2px var(--theme-color);
    }
</style>