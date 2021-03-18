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

export const knowledge = [
    {
        name: "HTML",
        level: 80
    },
    {
        name: "CSS",
        level: 59
    },
    {
        name: "Javascript",
        level: 75
    },
    {
        name: "Svelte",
        level: 45
    },
    {
        name: "React",
        level: 15
    },
    {
        name: "Sass",
        level: 65
    },
    {
        name: "Git",
        level: 55
    },
    {
        name: "Bash / CommandLine",
        level: 40
    },
    {
        name: "Webpack",
        level: 20
    },
    {
        name: "SQL",
        level: 25
    },
    {
        name: "MongoDB",
        level: 30
    },
    {
        name: "NodeJS",
        level: 30
    },
    {
        name: "Python",
        level: 80
    },
    {
        name: "Java",
        level: 10
    },
    {
        name: "GO",
        level: 20
    },
    {
        name: "Fortran",
        level: 80
    },
    {
        name: "Matlab",
        level: 75
    },
]