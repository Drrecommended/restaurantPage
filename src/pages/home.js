const home = () => {
  const home = document.createElement('div')
  home.classList.add('homePage')
  home.dataset.page = 'home'

  const homeWrapper = document.createElement('div')
  homeWrapper.classList.add('wrapper')

  const title = document.createElement('h1')
  title.textContent = 'BOZO PIZZA CO.'

  const timeInfo = document.createElement('p')
  timeInfo.classList.add('time-info')
  timeInfo.textContent = 'open 10am - 7pm everyday!'

  const orderBtn = document.createElement('button')
  orderBtn.textContent = 'ORDER NOW'
  orderBtn.classList.add('btn')

  home.appendChild(title)
  home.appendChild(orderBtn)
  return home
}

export { home }
