import menuData from '../menu.json'

const menu = () => {
    const menu = document.createElement('div')
    menu.dataset.page = 'menu'
    menu.classList.add('menu-container')
    const menuTitle = document.createElement('h2')
    menuTitle.innerText = "MENU"
    menu.appendChild(menuTitle)
    menuData.pizzas.forEach(pizza => {
        const itemContainer = document.createElement('div')
        itemContainer.classList.add('item')
        const item = document.createElement('h4')
        item.innerText = pizza.type
        const price = document.createElement('p')
        price.innerText = `$${pizza.cost}`
        const description = document.createElement('p')
        description.classList.add('description')
        const pic = document.createElement('div')
        pic.classList.add('menu-pic')
        description.innerText = pizza.description
        itemContainer.appendChild(item)
        itemContainer.appendChild(price)
        itemContainer.appendChild(description)
        menu.appendChild(itemContainer)
    })
    
    return menu
}


export { menu }