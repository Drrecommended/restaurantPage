import togglePage from '../index'

const nav = () => {
  const links = ['home', 'menu', 'contact']

  const nav = document.createElement('nav')
  nav.classList.add('nav')

  // const brand = document.createElement('i')
  // brand.classList.add('fa-solid')
  // brand.classList.add('fa-pizza-slice')

  const signIn = document.createElement('a')
  signIn.classList.add('sign-in')
  signIn.innerText = 'SIGN IN'

  //make links that dont go anywhere in li's
  const ul = document.createElement('ul')
  for (let i = 0; i < links.length; i++) {
    const li = document.createElement('li')
    const navLink = document.createElement('a')

    navLink.innerText = links[i]
    navLink.classList.add('nav-link')
    navLink.title = `a link to ${links[i]}`
    navLink.dataset.dataPage = links[i]
    navLink.href = "#"
    console.log(navLink.dataset.dataPage)
    li.appendChild(navLink)
    navLink.addEventListener('click', togglePage.bind(this))
    ul.appendChild(li)
  }

  // nav.appendChild(brand)
  nav.appendChild(ul)
  nav.appendChild(signIn)

  return nav
}

export { nav }
