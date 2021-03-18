<script>
    import ProgressBar from '../ProgressBar.svelte'
    import { knowledge } from '../../store.js'
</script>

<div class="Knowledge">
    <div class="Knowledge-programming">
        {#each knowledge as singleKnow}
            <ProgressBar barName={singleKnow.name} barValue={singleKnow.level}/>
        {/each}
    </div>
    <div class="Knowledge-explanation">
        <p>
            Most of the programming knowledge is taken by the Platzi platform with different online courses about programming.
        </p>
        <p>
            Getting into Computer Science where I am actually focused in Python, SQL, VirtualBox, Jupyter Notebook, some C and some Java.
        </p>
        <p>
            Also I have the knowledge acquired in the aviation industry, related with all aircraft, airline companies, air rules...
        </p>
    </div>
</div>

<style>
    .Knowledge {
        display: grid;
        grid-template-columns: 50% 50%;
    }
</style>