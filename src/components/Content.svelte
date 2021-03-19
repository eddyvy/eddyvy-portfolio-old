<script>
    import { selectedInfo } from '../store.js'
    import { fade, fly } from 'svelte/transition'
    import { infoContent } from '../store.js'

    import Projects from './content/Projects.svelte'
    import AboutMe from './content/AboutMe.svelte'
    import Objectives from './content/Objectives.svelte'
    import Skills from './content/Skills.svelte'
    import Knowledge from './content/Knowledge.svelte'
    import Experience from './content/Experience.svelte'
    import Hobbies from './content/Hobbies.svelte'

</script>

<div class="Content" >
    {#each infoContent as content}
        {#if ($selectedInfo === content)}
            <div in:fly="{{ y: 200, duration: 2000 }}" out:fade>
                <h2>{content}</h2>
                {#if content==='Projects'}
                    <Projects />
                {/if}
                {#if content==='About me'}
                    <AboutMe />
                {/if}
                {#if content==='Objectives'}
                    <Objectives />
                {/if}
                {#if content==='Skills'}
                    <Skills />
                {/if}
                {#if content==='Knowledge'}
                    <Knowledge />
                {/if}
                {#if content==='Experience'}
                    <Experience />
                {/if}
                {#if content==='Hobbies'}
                    <Hobbies />
                {/if}
            </div>
        {/if}
    {/each}

</div>

<style>
    .Content {
        max-width: 75vw;
    }
</style>