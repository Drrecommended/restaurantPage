const home = () => {
    const hello = document.createElement('div')
    hello.dataset.page = 'home'
    hello.textContent = "WELCOME HOME"
    return hello
}


export { home }