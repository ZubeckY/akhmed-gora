import loadComponent from "./loadComponent.js"

window.addEventListener('DOMContentLoaded', () => {
    loadComponent('./assets/components/header.html', '.header')

    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header')
        return header.style.background = window.pageYOffset > 100 ? 'var(--blur-gradient)' : 'white'
    })
})
