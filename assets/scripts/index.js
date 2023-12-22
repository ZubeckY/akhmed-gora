import loadComponent from "./loadComponent.js"

window.addEventListener('DOMContentLoaded', () => {
    components()
})

function components() {
    loadComponent('./assets/components/header.html', '.header')
    loadComponent('./assets/components/footer.html', '.footer')
}