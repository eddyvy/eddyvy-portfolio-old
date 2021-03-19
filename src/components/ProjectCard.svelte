<script>
    import TechTool from './TechTool.svelte'

    export let projectName
    export let projectDescription
    export let projectTechnologies
    export let imageUrl
    export let webLink = false
    export let repoLink

</script>

<div class="ProjectCard" >
    <div class="ProjectCard-inner">
        <div class="ProjectCard-front">
            <img src={imageUrl} alt="Project image">
            <div class="ProjectCard-title">
                <p>{projectName}</p>
            </div>
        </div>
        <div class="ProjectCard-back">
            <h3>{projectName}</h3> 
            <p>{projectDescription}</p>
            <div class="ProjectCard-techs">
                {#each projectTechnologies as tech}
                    <TechTool techChosen={tech}/>
                {/each}
            </div>
            <div class="ProjectCard-links">
                {#if webLink}
                    <a href={webLink} target="_blank">Web Link</a>
                {/if}
                <a href={repoLink} target="_blank">Repo Link</a>
            </div>
        </div>
    </div>
</div>

<style>
    .ProjectCard {
        margin: 20px;
        background-color: transparent;
        width: 350px;
        height: 350px;
        perspective: 1000px;
        border-radius: 40px;
    }

    .ProjectCard-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-radius: 40px;
    }

    .ProjectCard:hover .ProjectCard-inner {
        transform: rotateY(180deg);
    }

    .ProjectCard-front, .ProjectCard-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 40px;
    }

    .ProjectCard-front {
        background-color: transparent;
    }

    .ProjectCard-back {
        background-color: var(--theme-color);
        color: white;
        transform: rotateY(180deg);
    }

    .ProjectCard-title {
        text-align: center;
        font-weight: bold;
        font-size: 1.6rem;
        margin-top: -70px;
    }

    .ProjectCard-techs {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .ProjectCard-links {
        margin-top: 10px;
        display: inline-block;
    }

    img {
        width: inherit;
        height: inherit;
        border-radius: 40px;
        object-fit: cover;
    }

    p {
        font-size: smaller;
    }

    a {
        margin: 20px;
        font-size: smaller;
        color: rgb(253, 228, 83);
    }
    h3 {
        margin: 10px;
    }
</style>