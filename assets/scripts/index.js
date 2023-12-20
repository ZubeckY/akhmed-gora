import loadComponent from "./loadComponent.js"

window.addEventListener('DOMContentLoaded', () => {
    loadComponent('./assets/components/header.html', '.header')
    loadComponent('./assets/components/footer.html', '.footer')
})
