<script>
    import ProjectCard from '../ProjectCard.svelte'

    const projects = [
        {
            name: 'InmoValls',
            description: 'Web for the company of my family, a real state web designed to show our states and all contact data. Single Page Application. The data is not fullfilled yet.',
            technologies: ['HTML', 'CSS', 'Javascript', 'Sass', 'Strapi', 'MongoDB', 'Heroku'],
            imageUrl: 'https://blog.reinvest24.com/wp-content/uploads/2020/10/pros-and-cons-of-being-real-estate-investor.gif',
            webLink: 'https://inmovalls.github.io/inmobiliariavalls/dist/',
            repoLink: 'https://github.com/inmovalls'
        },
        {
            name: 'Data',
            description: 'Little program I made for saving txt files with accounts data.',
            technologies: ['Python'],
            imageUrl: 'https://i.pinimg.com/originals/95/b0/f3/95b0f39dc0b5a6a1a5ae7da3eb877e3e.gif',
            webLink: false,
            repoLink: ['https://github.com/eddyvy/datosTXT']
        },
        
        {
            name: 'LoL Board',
            description: 'League of Legends board to make strategies and draw the game in the map. I did it to test my Svelte knowledge and for fun. Is not deployed yet.',
            technologies: ['Svelte', 'HTML', 'CSS', 'Javascript'],
            imageUrl: 'https://ih1.redbubble.net/image.1811959356.0550/st,small,507x507-pad,600x600,f8f8f8.jpg',
            webLink: false,
            repoLink: 'https://github.com/eddyvy/lolCompsBoard',
        },
        {
            name: 'LoL Draft',
            description: 'Another League of Legends project to improve my Python and have Fun. It calculates de best strategy while chosing characters in a team',
            technologies: ['Python'],
            imageUrl: 'https://cdn.dribbble.com/users/2314501/screenshots/5912259/commerce_banner.gif',
            webLink: false,
            repoLink: 'https://github.com/eddyvy/LoLCompsDrafter',
        },
        {
            name: 'Rocket Launcher',
            description: 'University project to control de logistic of a spatial station where you can launch rockets and send resources.',
            technologies: ['Python'],
            imageUrl: 'https://i.pinimg.com/originals/92/96/f7/9296f70fce1ae3f298e0d085c17f6a3f.gif',
            webLink: false,
            repoLink: 'https://github.com/eddyvy/rocketLauncher',
        },
        {
            name: 'My portfolio',
            description: 'Where you can find yourself right now. Portfolio for my personal projects and as a presentation of myself.',
            technologies: ['Svelte', 'HTML', 'CSS', 'Javascript', 'Webpack', 'Babel'],
            imageUrl: 'https://i.imgur.com/BvID0t6.jpg',
            webLink: 'https://github.com/eddyvy',
            repoLink: 'https://github.com/eddyvy'
        },
    ]
</script>

<div class="Projects">
    {#each projects as project}
        <ProjectCard
            projectName={project.name}
            projectDescription={project.description}
            projectTechnologies={project.technologies}
            imageUrl={project.imageUrl}
            webLink={project.webLink}
            repoLink={project.repoLink}
        />
    {/each}
</div>

<style>
    .Projects {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>