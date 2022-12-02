

const home = () => {
    const home = document.createElement('div')
    home.classList.add('homePage')
    home.dataset.page = 'home'
    home.textContent = "WELCOME HOME"
    return home
}


export { home }