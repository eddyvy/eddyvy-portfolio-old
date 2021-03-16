<script>
    import Welcome from './Welcome.svelte'
    export let visible = true;
</script>

<div class="Header">
    <Welcome visible={visible} />
    <label class="button-continue">
        <input type="checkbox" bind:checked={visible}>
        <b>Press me!&nbsp;&nbsp;</b>
    </label>
</div>

<style>
    .Header {
        display: inline-block;
    }
    .button-continue {
        padding: 1rem;
        margin-top: 10rem;
        border: 2px solid gray;
        border-radius: 2rem;
    }
</style>