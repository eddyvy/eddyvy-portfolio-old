<script>
    import ProgressBar from '../ProgressBar.svelte'
    import TechTool from '../TechTool.svelte'
    import { technologies } from '../../store.js'
</script>

<div class="Knowledge">
    <div class="Knowledge-programming">
        {#each technologies as singleKnow}
            <div class="Knowledge-programming-tech">
                <TechTool techChosen={singleKnow.name} />
                <ProgressBar barName='' barValue={singleKnow.level}/>
            </div>
        {/each}
    </div>
    <div class="Knowledge-explanation">
        <p>
            Most of the programming knowledge is taken by the Platzi platform with different online courses about programming.
            Where I took more than 100 hours of class.
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
    .Knowledge-programming {
        display: flex;
        flex-wrap: wrap;
    }

    @media (max-width: 500px) {
        .Knowledge {
            display: flex;
            flex-direction: column;
        }
        .Knowledge-programming {
            justify-content: center;
        }
    }
</style>