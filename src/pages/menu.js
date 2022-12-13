import menuData from '../menu.json'

const menu = () => {
  const menu = document.createElement('div')
  menu.dataset.page = 'menu'
  menu.classList.add('menu-container')
  const menuTitle = document.createElement('h2')
  menuTitle.innerText = 'MENU'
  menu.appendChild(menuTitle)
  const pizzaMenu = document.createElement('h3')
  pizzaMenu.classList.add('sub-menu')
  pizzaMenu.innerText = 'Pizzas:'
  menu.appendChild(pizzaMenu)
  menuData.pizzas.forEach((pizza) => {
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

  const sideMenu = document.createElement('h3')
  sideMenu.innerText = 'Sides:'
  sideMenu.classList.add('sub-menu')
  menu.appendChild(sideMenu)

  menuData.sides.forEach((side) => {
    const itemContainer = document.createElement('div')
    itemContainer.classList.add('item')
    const item = document.createElement('h4')
    item.innerText = side.type
    const price = document.createElement('p')
    price.innerText = `$${side.cost}`
    const description = document.createElement('p')
    description.classList.add('description')
    const pic = document.createElement('div')
    pic.classList.add('menu-pic')
    description.innerText = side.description
    itemContainer.appendChild(item)
    itemContainer.appendChild(price)
    itemContainer.appendChild(description)
    menu.appendChild(itemContainer)
  })

  const drinksMenu = document.createElement('h3')
  drinksMenu.innerText = 'Drinks:'
  drinksMenu.classList.add('sub-menu')
  menu.appendChild(drinksMenu)

  menuData.drinks.forEach(drink => {
    const itemContainer = document.createElement('div')
    itemContainer.classList.add('item')
    const item = document.createElement('h4')
    item.innerText = drink.type
    const price = document.createElement('p')
    price.innerText = `$${drink.cost}`
    itemContainer.appendChild(item)
    itemContainer.appendChild(price)
    menu.appendChild(itemContainer)
  })

  return menu
}

export { menu }
