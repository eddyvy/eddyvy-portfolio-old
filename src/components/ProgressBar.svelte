<script>
    import { fade } from 'svelte/transition'

    export let barName
    export let barValue
    let barColor

    if (barValue >= 80) {
        barColor = "#0aff2b"
    } else if (barValue >= 60) {
        barColor = "#b5ff0a"
    } else if (barValue >= 40) {
        barColor = "#fffb0a"
    } else if (barValue >= 20) {
        barColor = "#ffb10a"
    } else {
        barColor = "#ff3b0a"
    }

</script>

<div class="Progress-container">
    <span>{barName}</span>
    <div class="ProgressBar" transition:fade>
        <div class="ProgressBar-inside" style="width:{barValue}%; background-color: {barColor};"    ></div>
    </div>
</div>

<style>
    .Progress-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .ProgressBar {
        margin: 0.8rem;
        width: 20rem;
        padding: 4px;
        background: rgba(0, 0, 0, 0.25);
        border-radius: 1rem;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
    }

    .ProgressBar-inside {
        height: 0.7rem;
        border-radius: 1rem;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1);
    }

</style>