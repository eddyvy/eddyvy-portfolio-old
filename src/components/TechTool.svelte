<script>
    import { technologies } from '../store.js'

    export let techChosen
    let urlLogo = ''

    for (let i = 0; i < technologies.length; i++) {
        if (techChosen === technologies[i].name) {
            urlLogo = technologies[i].logo
        }
    }

</script>

<div class="TechTool">
    <span>
        {techChosen}
        <img src={urlLogo} alt={techChosen}>
    </span>
</div>

<style>
    img {
        width: 25px;
        height: 25px;
    }
</style>