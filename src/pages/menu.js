const menu = () => {
    const hello = document.createElement('div')
    hello.dataset.page = 'menu'
    hello.textContent = "WELCOME menu"
    return hello
}


export { menu }