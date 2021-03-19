import { writable } from 'svelte/store'

export const welcomeDone = writable(false)
export const showHeader = writable(false)
export const selectedInfo = writable("Projects")
export const infoContent = [
    "Projects",
    "About me",
    "Objectives",
    "Skills",
    "Knowledge",
    "Experience",
    "Hobbies"
]

export const technologies = [
    {
        name: "HTML",
        logo: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        level: 80
    },
    {
        name: "CSS",
        logo: "https://www.pngkey.com/png/full/347-3470911_css3-html-css-js-logo-white.png",
        level: 59
    },
    {
        name: "Javascript",
        logo: "https://iconape.com/wp-content/png_logo_vector/javascript-js-logo.png",
        level: 75
    },
    {
        name: "Svelte",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png",
        level: 45
    },
    {
        name: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
        level: 15
    },
    {
        name: "Sass",
        logo: "https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png",
        level: 65
    },
    {
        name: "Git",
        logo: "https://www.innerzaurus.com/wp-content/uploads/2020/08/Logo-de-Git.png",
        level: 55
    },
    {
        name: "Bash / CommandLine",
        logo: "https://e7.pngegg.com/pngimages/48/567/png-clipart-bash-shell-script-command-line-interface-z-shell-shell-rectangle-logo-thumbnail.png",
        level: 40
    },
    {
        name: "Webpack",
        logo: "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png",
        level: 20
    },
    {
        name: "SQL",
        logo: "https://w7.pngwing.com/pngs/167/148/png-transparent-microsoft-azure-sql-database-microsoft-sql-server-database-blue-text-logo-thumbnail.png",
        level: 25
    },
    {
        name: "MongoDB",
        logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        level: 30
    },
    {
        name: "NodeJS",
        logo: "https://ih1.redbubble.net/image.1637717834.1604/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg",
        level: 30
    },
    {
        name: "Python",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",
        level: 80
    },
    {
        name: "Java",
        logo: "http://assets.stickpng.com/thumbs/58480979cef1014c0b5e4901.png",
        level: 10
    },
    {
        name: "GO",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png",
        level: 20
    },
    {
        name: "Fortran",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Fortran_logo.svg/1200px-Fortran_logo.svg.png",
        level: 80
    },
    {
        name: "Matlab",
        logo: "https://logos-marcas.com/wp-content/uploads/2020/12/MATLAB-Logo.png",
        level: 75
    },
    {
        name: "Babel",
        logo: "https://user-images.githubusercontent.com/3025322/87547253-bf050400-c6a2-11ea-950a-280311bc6cc8.png  ",
        level: 10
    },
    {
        name: "Strapi",
        logo: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-logo-hero_c94026101f.svg",
        level: 65
    },
    {
        name: "Heroku",
        logo: "https://cdn.iconscout.com/icon/free/png-512/heroku-5-569467.png",
        level: 35
    }
]